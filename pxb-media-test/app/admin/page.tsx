import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard | PXB Media',
  description: 'Admin dashboard for managing PXB Media website content and settings.',
  robots: 'noindex, nofollow', // Prevent search engines from indexing admin pages
};

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your PXB Media website content and settings from this central dashboard.
          </p>
        </div>

        {/* Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Equipment Management */}
          <Link
            href="/admin/equipment"
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Equipment Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage production equipment inventory, pricing, and availability.
                </p>
              </div>
              <div className="text-blue-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Cases Management (Future) */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 opacity-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Cases Management
                </h3>
                <p className="text-gray-600 text-sm">
                  Manage case studies and project portfolios.
                </p>
                <span className="inline-block mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
              <div className="text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Analytics (Future) */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 opacity-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Analytics
                </h3>
                <p className="text-gray-600 text-sm">
                  View website traffic and equipment rental analytics.
                </p>
                <span className="inline-block mt-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
              <div className="text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Equipment Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">3</div>
              <div className="text-sm text-gray-600">Available Items</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you need assistance with the admin panel or have questions about managing your content, 
            contact the development team.
          </p>
          <a
            href="mailto:admin@pxbmedia.com"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
} 