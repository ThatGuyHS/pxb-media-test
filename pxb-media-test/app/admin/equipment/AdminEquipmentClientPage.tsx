'use client';

import React, { useState, useEffect } from 'react';

interface Equipment {
  id: string;
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
  imageUrl?: string;
  specifications: {
    [key: string]: string;
  };
  addedAt: string;
  updatedAt: string;
}

interface EquipmentForm {
  name: string;
  category: string;
  description: string;
  dailyRate: number;
  weeklyRate: number;
  availability: boolean;
  imageUrl: string;
  specifications: {
    [key: string]: string;
  };
}

const initialFormState: EquipmentForm = {
  name: '',
  category: '',
  description: '',
  dailyRate: 0,
  weeklyRate: 0,
  availability: true,
  imageUrl: '',
  specifications: {}
};

export default function AdminEquipmentClientPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<Equipment | null>(null);
  const [formData, setFormData] = useState<EquipmentForm>(initialFormState);
  const [newSpecKey, setNewSpecKey] = useState('');
  const [newSpecValue, setNewSpecValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/equipment');
      
      if (!response.ok) {
        throw new Error('Failed to fetch equipment');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setEquipment(data.data);
        setCategories(data.categories);
      } else {
        throw new Error('Failed to fetch equipment');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const url = editingItem ? `/api/equipment/${editingItem.id}` : '/api/equipment';
      const method = editingItem ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save equipment');
      }
      
      await fetchEquipment();
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this equipment?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/equipment/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete equipment');
      }
      
      await fetchEquipment();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleEdit = (item: Equipment) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      category: item.category,
      description: item.description,
      dailyRate: item.dailyRate,
      weeklyRate: item.weeklyRate,
      availability: item.availability,
      imageUrl: item.imageUrl || '',
      specifications: { ...item.specifications }
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingItem(null);
    setShowForm(false);
    setNewSpecKey('');
    setNewSpecValue('');
    setError(null);
  };

  const addSpecification = () => {
    if (newSpecKey && newSpecValue) {
      setFormData(prev => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [newSpecKey]: newSpecValue
        }
      }));
      setNewSpecKey('');
      setNewSpecValue('');
    }
  };

  const removeSpecification = (key: string) => {
    setFormData(prev => {
      const newSpecs = { ...prev.specifications };
      delete newSpecs[key];
      return {
        ...prev,
        specifications: newSpecs
      };
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040407] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040407] text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#E3E3E3] mb-2">
                Equipment <span className="text-primary">Management</span>
              </h1>
              <p className="text-[#b0b0b0]">
                Manage your production equipment inventory, pricing, and availability.
              </p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-4 py-2 rounded-md font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Add Equipment
            </button>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="text-red-300">
                <strong>Error:</strong> {error}
              </div>
              <button
                onClick={() => setError(null)}
                className="ml-auto text-red-400 hover:text-red-200 transition-colors duration-300"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-[#E3E3E3]">
                    {editingItem ? 'Edit Equipment' : 'Add New Equipment'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-[#b0b0b0] hover:text-[#E3E3E3] transition-colors duration-300"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                        Category *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        list="categories"
                      />
                      <datalist id="categories">
                        {categories.map(category => (
                          <option key={category} value={category} />
                        ))}
                      </datalist>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                      Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  {/* Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                        Daily Rate ($) *
                      </label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={formData.dailyRate}
                        onChange={(e) => setFormData(prev => ({ ...prev, dailyRate: parseFloat(e.target.value) || 0 }))}
                        className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                        Weekly Rate ($) *
                      </label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={formData.weeklyRate}
                        onChange={(e) => setFormData(prev => ({ ...prev, weeklyRate: parseFloat(e.target.value) || 0 }))}
                        className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Image URL */}
                  <div>
                    <label className="block text-sm font-medium text-[#E3E3E3] mb-1">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                      className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.availability}
                        onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.checked }))}
                        className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-[#040407]"
                      />
                      <span className="text-sm font-medium text-[#E3E3E3]">
                        Available for rent
                      </span>
                    </label>
                  </div>

                  {/* Specifications */}
                  <div>
                    <label className="block text-sm font-medium text-[#E3E3E3] mb-2">
                      Specifications
                    </label>
                    
                    {/* Add Specification */}
                    <div className="flex gap-2 mb-3">
                      <input
                        type="text"
                        placeholder="Specification name"
                        value={newSpecKey}
                        onChange={(e) => setNewSpecKey(e.target.value)}
                        className="flex-1 px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                      <input
                        type="text"
                        placeholder="Value"
                        value={newSpecValue}
                        onChange={(e) => setNewSpecValue(e.target.value)}
                        className="flex-1 px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                      <button
                        type="button"
                        onClick={addSpecification}
                        className="bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] px-3 py-2 rounded-md transition-colors duration-300"
                      >
                        Add
                      </button>
                    </div>

                    {/* Existing Specifications */}
                    <div className="space-y-2">
                      {Object.entries(formData.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-[#040407] border border-gray-700 p-2 rounded">
                          <span className="text-sm text-[#E3E3E3]">
                            <strong>{key}:</strong> {value}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeSpecification(key)}
                            className="text-red-400 hover:text-red-200 text-sm transition-colors duration-300"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-primary hover:bg-primaryAlt disabled:bg-primary/50 text-[#E3E3E3] px-4 py-2 rounded-md font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    >
                      {submitting ? 'Saving...' : (editingItem ? 'Update' : 'Add')} Equipment
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] px-4 py-2 rounded-md font-semibold transition-colors duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Equipment List */}
        <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-800/50">
            <h2 className="text-xl font-semibold text-[#E3E3E3]">
              Equipment Inventory ({equipment.length} items)
            </h2>
          </div>
          
          {equipment.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-800/50">
                <thead className="bg-[#040407]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#b0b0b0] uppercase tracking-wider">
                      Equipment
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#b0b0b0] uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#b0b0b0] uppercase tracking-wider">
                      Pricing
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#b0b0b0] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#b0b0b0] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#0a0a0f] divide-y divide-gray-800/50">
                  {equipment.map((item) => (
                    <tr key={item.id} className="hover:bg-[#040407]/50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12">
                            {item.imageUrl ? (
                              <img
                                className="h-12 w-12 rounded-lg object-cover"
                                src={item.imageUrl}
                                alt={item.name}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/grid-pattern.svg';
                                }}
                              />
                            ) : (
                              <div className="h-12 w-12 rounded-lg bg-gray-800 flex items-center justify-center">
                                <span className="text-xs text-gray-400">No IMG</span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-[#E3E3E3]">
                              {item.name}
                            </div>
                            <div className="text-sm text-[#b0b0b0] truncate max-w-xs">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#E3E3E3]">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#E3E3E3]">
                        <div>${item.dailyRate}/day</div>
                        <div className="text-[#b0b0b0]">${item.weeklyRate}/week</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          item.availability
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {item.availability ? 'Available' : 'Unavailable'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="text-primary hover:text-primaryAlt transition-colors duration-300"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-400 hover:text-red-200 transition-colors duration-300"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold text-[#E3E3E3] mb-2">No Equipment Found</h3>
              <p className="text-[#b0b0b0] mb-4">
                Get started by adding your first piece of equipment.
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-4 py-2 rounded-md font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Add Equipment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 