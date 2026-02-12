'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Shipment {
  trackingNumber: string;
  currentStatus: string;
  currentLocation: string;
  estimatedDelivery: string;
  lastUpdated: string;
  courier?: string;
  isActive: boolean;
  isCancelled: boolean;
  packageDetails: {
    carrier: string;
    serviceType: string;
  };
}

type FilterType = 'all' | 'active' | 'completed' | 'cancelled' | 'pending';

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [filteredShipments, setFilteredShipments] = useState<Shipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchShipments();
  }, []);

  useEffect(() => {
    filterShipments();
  }, [filter, searchQuery, shipments]);

  const fetchShipments = async () => {
    try {
      const res = await fetch('/api/admin/shipments');
      const data = await res.json();
      if (data.success) {
        setShipments(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch shipments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterShipments = () => {
    let filtered = [...shipments];

    // Apply status filter
    if (filter === 'active') {
      filtered = filtered.filter(s => s.isActive && !s.isCancelled && s.currentStatus !== 'Delivered');
    } else if (filter === 'completed') {
      filtered = filtered.filter(s => s.currentStatus === 'Delivered');
    } else if (filter === 'cancelled') {
      filtered = filtered.filter(s => s.isCancelled);
    } else if (filter === 'pending') {
      filtered = filtered.filter(s => s.currentStatus === 'Pending Pickup' || s.currentStatus === 'Order Placed');
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(s =>
        s.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.currentStatus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.currentLocation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.courier?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredShipments(filtered);
  };

  const getStatusColor = (status: string, isCancelled: boolean) => {
    if (isCancelled) return 'bg-red-100 text-red-800';
    
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800';
      case 'Out for Delivery':
        return 'bg-accent-100 text-accent-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Pending Pickup':
      case 'Order Placed':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-primary-900">Shipment Management</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {filteredShipments.length} shipment{filteredShipments.length !== 1 ? 's' : ''}
                </p>
              </div>
              <Link
                href="/admin/shipments/create"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Create Shipment
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by tracking number, status, location..."
                  className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
              {(['all', 'active', 'pending', 'completed', 'cancelled'] as FilterType[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === f
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Shipments List */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredShipments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Courier
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Est. Delivery
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredShipments.map((shipment, index) => (
                    <motion.tr
                      key={shipment.trackingNumber}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/shipments/${shipment.trackingNumber}`}
                          className="font-semibold text-primary-600 hover:text-primary-800"
                        >
                          {shipment.trackingNumber}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">
                          {shipment.packageDetails.carrier} - {shipment.packageDetails.serviceType}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                            shipment.currentStatus,
                            shipment.isCancelled
                          )}`}
                        >
                          {shipment.isCancelled ? 'Cancelled' : shipment.currentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {shipment.currentLocation}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {shipment.courier || '-'}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {shipment.estimatedDelivery}
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/admin/shipments/${shipment.trackingNumber}`}
                          className="text-primary-600 hover:text-primary-800 font-medium text-sm"
                        >
                          Edit
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No shipments found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? 'Try adjusting your search or filters'
                  : 'Create your first shipment to get started'}
              </p>
              {!searchQuery && (
                <Link
                  href="/admin/shipments/create"
                  className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Create Shipment
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}