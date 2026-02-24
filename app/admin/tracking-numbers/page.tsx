'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TrackingNumber {
  trackingNumber: string;
  isUsed: boolean;
  isActive: boolean;
  createdAt: string;
  usedAt?: string;
}

export default function TrackingNumbersPage() {
  const [trackingNumbers, setTrackingNumbers] = useState<TrackingNumber[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unused' | 'used'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchTrackingNumbers();
  }, []);

  const fetchTrackingNumbers = async () => {
    try {
      const res = await fetch('/api/adminTrackingNumbers');
      const data = await res.json();
      if (data.success) {
        setTrackingNumbers(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch tracking numbers:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateTrackingNumber = async () => {
    setIsGenerating(true);
    try {
      const res = await fetch('/api/genTrackingNum', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        alert(`Generated: ${data.trackingNumber}`);
        fetchTrackingNumbers();
      } else {
        alert('Failed to generate tracking number');
      }
    } catch (error) {
      console.error('Failed to generate tracking number:', error);
      alert('Failed to generate tracking number');
    } finally {
      setIsGenerating(false);
    }
  };

  
  const deactivateTrackingNumber = async (trackingNumber: string) => {
    if (!confirm(`Are you sure you want to deactivate ${trackingNumber}?`)) return;

    try {
      const res = await fetch(`/api/adminDeactivateTracking/${trackingNumber}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        alert('Tracking number deactivated');
        fetchTrackingNumbers();
      } else {
        alert('Failed to deactivate tracking number');
      }
    } catch (error) {
      console.error('Failed to deactivate tracking number:', error);
      alert('Failed to deactivate tracking number');
    }
  };

  const filteredNumbers = trackingNumbers
    .filter(tn => {
      if (filter === 'unused') return !tn.isUsed;
      if (filter === 'used') return tn.isUsed;
      return true;
    })
    .filter(tn => {
      if (!searchQuery) return true;
      return tn.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const stats = {
    total: trackingNumbers.length,
    unused: trackingNumbers.filter(tn => !tn.isUsed).length,
    used: trackingNumbers.filter(tn => tn.isUsed).length,
    active: trackingNumbers.filter(tn => tn.isActive).length,
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
                <h1 className="text-3xl font-bold text-primary-900">Tracking Numbers</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Manage and generate tracking numbers
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={generateTrackingNumber}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-primary-800 text-white font-semibold rounded-xl hover:bg-primary-600 disabled:bg-gray-300 transition-colors"
                >
                  {isGenerating ? 'Generating...' : 'Generate Single'}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <p className="text-sm text-gray-500 mb-1">Total Numbers</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <p className="text-sm text-gray-500 mb-1">Unused</p>
            <p className="text-3xl font-bold text-green-600">{stats.unused}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <p className="text-sm text-gray-500 mb-1">Used</p>
            <p className="text-3xl font-bold text-blue-600">{stats.used}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <p className="text-sm text-gray-500 mb-1">Active</p>
            <p className="text-3xl font-bold text-accent-600">{stats.active}</p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tracking numbers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'unused', 'used'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === f
                      ? 'bg-primary-800 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tracking Numbers Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredNumbers.length > 0 ? (
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
                      Created
                    </th>

                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredNumbers.map((tn, index) => (
                    <motion.tr
                      key={tn.trackingNumber}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <p className="font-mono font-semibold text-gray-900">
                          {tn.trackingNumber}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              tn.isUsed
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {tn.isUsed ? 'Used' : 'Available'}
                          </span>
                          {!tn.isActive && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                              Inactive
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(tn.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {tn.usedAt ? new Date(tn.usedAt).toLocaleDateString() : '-'}
                      </td>
                      <td className="px-6 py-4">
                        {tn.isActive && !tn.isUsed && (
                          <button
                            onClick={() => deactivateTrackingNumber(tn.trackingNumber)}
                            className="text-red-600 hover:text-red-800 font-medium text-sm"
                          >
                            Deactivate
                          </button>
                        )}
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
                  d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                No tracking numbers found
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? 'Try adjusting your search'
                  : 'Generate tracking numbers to get started'}
              </p>
              {!searchQuery && (
                <button
                  onClick={generateTrackingNumber}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 disabled:bg-gray-300 transition-colors"
                >
                  {isGenerating ? 'Generating...' : 'Generate Tracking Number'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}