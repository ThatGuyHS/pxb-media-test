'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import QuoteModal from '@/components/modal/quotemodal';
import Footer from '../../components/Footer';

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

interface EquipmentResponse {
  success: boolean;
  data: Equipment[];
  categories: string[];
}

interface CartItem extends Equipment {
  quantity: number;
  rentalDays: number;
}

interface CheckoutFormProps {
  cart: CartItem[];
  onSuccess: () => void;
}

function CheckoutForm({ cart, onSuccess }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const totalPrice = cart.reduce((total, item) => {
        return total + (item.dailyRate * item.quantity * item.rentalDays);
      }, 0);

      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'equipment_order',
          cart: cart,
          totalPrice: totalPrice.toFixed(2)
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onSuccess();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.dailyRate * item.quantity * item.rentalDays);
  }, 0);

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="text-green-400 text-5xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-[#E3E3E3] mb-2">Order Submitted!</h3>
        <p className="text-[#b0b0b0] mb-4">
          We'll review your equipment rental request and get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Order Summary */}
      <div className="bg-[#040407] border border-gray-700 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-[#E3E3E3] mb-3">Order Summary</h3>
        <div className="space-y-2">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span className="text-[#b0b0b0]">
                {item.name} × {item.quantity} ({item.rentalDays} days)
              </span>
              <span className="text-[#E3E3E3]">
                ${(item.dailyRate * item.quantity * item.rentalDays).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="border-t border-gray-600 pt-2 mt-2">
            <div className="flex justify-between font-semibold">
              <span className="text-[#E3E3E3]">Total:</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
            Company
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div>
        <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
          Event Date *
        </label>
        <input
          type="date"
          required
          value={formData.eventDate}
          onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
          className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div>
        <label className="block text-[#E3E3E3] text-sm font-medium mb-2">
          Additional Information
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={4}
          className="w-full px-3 py-2 bg-[#040407] border border-gray-600 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Tell us about your event, setup requirements, pickup/delivery preferences, etc."
        />
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-900/20 border border-red-500 text-red-400 px-4 py-3 rounded-md">
          There was an error submitting your order. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primaryAlt disabled:bg-gray-600 text-[#E3E3E3] py-3 px-4 rounded-md font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting Order...' : 'Submit Order Request'}
      </button>
    </form>
  );
}

export default function EquipmentClientPage() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availableOnly, setAvailableOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  
  // Navigation state
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchEquipment();
  }, [selectedCategory, availableOnly]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleMouseEnter = () => {
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setServicesDropdownOpen(false);
  };

  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServicesDropdownOpen(false);
    }
  };

  // Cart functions
  const addToCart = (item: Equipment, days: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1, rentalDays: days }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const updateCartItemDays = (itemId: string, days: number) => {
    if (days <= 0) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, rentalDays: days } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const dailyRate = item.dailyRate * item.quantity * item.rentalDays;
      return total + dailyRate;
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const fetchEquipment = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      
      if (selectedCategory !== 'all') {
        params.append('category', selectedCategory);
      }
      
      if (availableOnly) {
        params.append('available', 'true');
      }

      const response = await fetch(`/api/equipment?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch equipment');
      }
      
      const data: EquipmentResponse = await response.json();
      
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

  const filteredEquipment = equipment.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const EquipmentCard = ({ item }: { item: Equipment }) => (
    <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="relative">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/grid-pattern.svg';
            }}
          />
        ) : (
          <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400">No Image Available</span>
          </div>
        )}
        
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
            item.availability 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}>
            {item.availability ? 'Available' : 'Unavailable'}
          </span>
        </div>
        
        <div className="absolute top-2 left-2">
          <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary border border-primary/30 rounded-full">
            {item.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#E3E3E3] mb-2">{item.name}</h3>
        <p className="text-[#b0b0b0] mb-4 text-sm">{item.description}</p>
        
        {Object.keys(item.specifications).length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-[#E3E3E3] mb-2">Specifications:</h4>
            <div className="grid grid-cols-1 gap-1 text-sm">
              {Object.entries(item.specifications).slice(0, 3).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-[#b0b0b0]">{key}:</span>
                  <span className="text-[#E3E3E3]">{value}</span>
                </div>
              ))}
              {Object.keys(item.specifications).length > 3 && (
                <span className="text-gray-500 text-xs">
                  +{Object.keys(item.specifications).length - 3} more specs
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div>
            <div className="text-lg font-bold text-[#E3E3E3]">
              ${item.dailyRate}/day
            </div>
            <div className="text-sm text-[#b0b0b0]">
              ${item.weeklyRate}/week
            </div>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={() => item.availability && addToCart(item)}
              className={`flex-1 px-4 py-2 rounded-md font-semibold transition-all duration-200 ${
                item.availability
                  ? 'bg-primary hover:bg-primaryAlt text-[#E3E3E3] shadow-md shadow-primary/20 hover:shadow-primary/40'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!item.availability}
            >
              {item.availability ? 'Add to Cart' : 'Unavailable'}
            </button>
            {cart.find(cartItem => cartItem.id === item.id) && (
              <button 
                onClick={() => setShowCart(true)}
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold transition-colors duration-200"
              >
                ✓
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040407] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#040407] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#E3E3E3] mb-4">Error Loading Equipment</h2>
          <p className="text-[#b0b0b0] mb-4">{error}</p>
          <button 
            onClick={fetchEquipment}
            className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-4 py-2 rounded-md shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <QuoteModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <main className="bg-[#040407] min-h-screen text-white">
        {/* Header */}
        <header className="bg-[#040407] text-white transition-colors duration-300 sticky top-0 z-50 border-b border-gray-800/50">
          <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6 h-[64px]">
            <div className="flex items-center">
              <a className="text-xl font-bold" href="/">
                <img
                  src="/vertical_logo.svg"
                  alt="PXB Media Logo"
                  className="h-10"
                />
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <button
                className="md:hidden rounded border border-primary/70 px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary transition-colors duration-300"
                onClick={handleToggleMenu}
              >
                {menuOpen ? "CLOSE" : "MENU"}
              </button>
              <div
                ref={menuRef}
                className={`${
                  menuOpen ? "flex" : "hidden"
                } md:flex flex-col md:flex-row md:space-x-6 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-[#040407] backdrop-blur-md w-full md:w-auto mt-2 pb-4 md:pb-0 md:mt-0 border-b md:border-none border-gray-800/50 z-50`}
              >
                <div
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300">
                    SERVICES
                  </button>
                  <div
                    className={`${
                      servicesDropdownOpen ? "block" : "hidden"
                    } absolute left-0 w-48 bg-[#040407] backdrop-blur-md border border-gray-800/50 rounded-md shadow-lg shadow-primary/10`}
                  >
                    <div className="invisible absolute -top-4 left-0 w-full h-4"></div>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/production"
                    >
                      PRODUCTION
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/event-staffing"
                    >
                      EVENT STAFFING
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/service/development"
                    >
                      DEVELOPMENT
                    </a>
                    <a
                      className="block px-4 py-2 hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                      href="/equipment"
                    >
                      EQUIPMENT RENTAL
                    </a>
                  </div>
                </div>
                <a
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                  href="/about-us"
                >
                  ABOUT
                </a>
                <a
                  className="px-4 py-2 hover:text-primary hover:underline decoration-primary transition-colors duration-300"
                  href="/cases"
                >
                 CASES
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <button
                onClick={() => setShowCart(true)}
                className="relative p-2 text-[#E3E3E3] hover:text-primary transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9H19" />
                </svg>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-[#E3E3E3] text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
              
              <Button
                onClick={openModal}
                className="text-[#E3E3E3] bg-primary hover:bg-primaryAlt h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                size="sm"
                variant="default"
              >
                Get a quote
              </Button>
            </div>
          </nav>
        </header>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-[#E3E3E3] mb-6">
              Professional Equipment <span className="text-primary">Rental</span>
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Browse our extensive collection of high-quality production equipment available for rent. 
              From cameras and audio gear to lighting and video production equipment.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-[#E3E3E3] mb-2">
                  Search Equipment
                </label>
                <input
                  type="text"
                  id="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, description, or category..."
                  className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-[#E3E3E3] mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-[#040407] border border-gray-700 rounded-md text-[#E3E3E3] focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Availability Filter */}
              <div className="flex items-end">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => setAvailableOnly(e.target.checked)}
                    className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-[#040407]"
                  />
                  <span className="text-sm font-medium text-[#E3E3E3]">
                    Show available only
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          {filteredEquipment.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredEquipment.map(item => (
                <EquipmentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 mb-16">
              <h3 className="text-xl font-semibold text-[#E3E3E3] mb-2">No Equipment Found</h3>
              <p className="text-[#b0b0b0]">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}

          {/* Contact Section */}
          <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-[#E3E3E3] mb-4">
              Need Something <span className="text-primary">Specific</span>?
            </h2>
            <p className="text-[#b0b0b0] mb-6 max-w-2xl mx-auto">
              Don't see the equipment you need? Contact us for custom solutions and additional equipment options. 
              We work with trusted partners to fulfill any production requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@pxbmedia.com"
                className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-primary/40"
              >
                Contact Us
              </a>
              <a
                href="tel:+46123456789"
                className="bg-transparent hover:bg-primary/10 text-primary border border-primary px-6 py-3 rounded-md font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#E3E3E3]">Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-[#b0b0b0] hover:text-[#E3E3E3] transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl text-[#E3E3E3] mb-2">Your cart is empty</h3>
                  <p className="text-[#b0b0b0] mb-4">Add some equipment to get started!</p>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-4 py-2 rounded-md font-semibold transition-all duration-300"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="bg-[#040407] border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            {item.imageUrl ? (
                              <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = '/grid-pattern.svg';
                                }}
                              />
                            ) : (
                              <div className="w-16 h-16 bg-gray-800 rounded flex items-center justify-center">
                                <span className="text-gray-400 text-xs">No IMG</span>
                              </div>
                            )}
                            <div>
                              <h3 className="font-semibold text-[#E3E3E3]">{item.name}</h3>
                              <p className="text-[#b0b0b0] text-sm">{item.category}</p>
                              <p className="text-primary font-semibold">${item.dailyRate}/day</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <label className="text-[#b0b0b0] text-sm">Days:</label>
                              <input
                                type="number"
                                min="1"
                                value={item.rentalDays}
                                onChange={(e) => updateCartItemDays(item.id, parseInt(e.target.value) || 1)}
                                className="w-16 px-2 py-1 bg-[#040407] border border-gray-600 rounded text-[#E3E3E3] text-center"
                              />
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] rounded font-semibold"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-[#E3E3E3]">{item.quantity}</span>
                              <button
                                onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] rounded font-semibold"
                              >
                                +
                              </button>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-[#E3E3E3] font-semibold">
                                ${(item.dailyRate * item.quantity * item.rentalDays).toFixed(2)}
                              </p>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-400 hover:text-red-200 text-sm transition-colors duration-300"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-semibold text-[#E3E3E3]">Total:</span>
                      <span className="text-xl font-bold text-primary">${getTotalPrice().toFixed(2)}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={clearCart}
                        className="bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] px-4 py-2 rounded-md font-semibold transition-colors duration-300"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={() => setShowCart(false)}
                        className="bg-gray-600 hover:bg-gray-700 text-[#E3E3E3] px-4 py-2 rounded-md font-semibold transition-colors duration-300"
                      >
                        Continue Shopping
                      </button>
                      <button
                        onClick={() => {
                          setShowCart(false);
                          setShowCheckout(true);
                        }}
                        className="bg-primary hover:bg-primaryAlt text-[#E3E3E3] px-6 py-2 rounded-md font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                      >
                        Proceed to Order
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0a0a0f] border border-gray-800/50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#E3E3E3]">Order Equipment</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-[#b0b0b0] hover:text-[#E3E3E3] transition-colors duration-300"
                >
                  ×
                </button>
              </div>

              <CheckoutForm cart={cart} onSuccess={() => {
                setShowCheckout(false);
                clearCart();
              }} />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
} 