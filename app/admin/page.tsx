'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

interface DashboardStats {
  totalShipments: number;
  activeDeliveries: number;
  completedToday: number;
  pendingPickup: number;
  inTransit: number;
  outForDelivery: number;
  delivered: number;
  recentShipments: Array<{
    trackingNumber: string;
    currentStatus: string;
    currentLocation: string;
    lastUpdated: string;
  }>;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const res = await fetch('/api/dashboard');
      const data = await res.json();
      if (data.success) {
        setStats(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  const statCards = [
    {
      title: 'Total Shipments',
      value: stats?.totalShipments || 0,
      icon: Package,
      color: 'bg-primary-800',
      link: '/admin/shipments',
    },
    {
      title: 'Active Deliveries',
      value: stats?.activeDeliveries || 0,
      icon: Truck,
      color: 'bg-accent-500',
      link: '/admin/shipments?filter=active',
    },
    {
      title: 'Completed Today',
      value: stats?.completedToday || 0,
      icon: CheckCircle,
      color: 'bg-green-500',
      link: '/admin/shipments?filter=completed',
    },
    {
      title: 'Pending Pickup',
      value: stats?.pendingPickup || 0,
      icon: Clock,
      color: 'bg-yellow-500',
      link: '/admin/shipments?filter=pending',
    },
  ];

  const statusBreakdown = [
    { label: 'In Transit', value: stats?.inTransit || 0, color: 'bg-blue-500' },
    { label: 'Out for Delivery', value: stats?.outForDelivery || 0, color: 'bg-accent-500' },
    { label: 'Delivered', value: stats?.delivered || 0, color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-primary-900">Admin Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage shipments and track deliveries
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex gap-4">
          <Link
            href="/admin/shipments/create"
            className="inline-flex items-center px-6 py-3 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Shipment
          </Link>
          <Link
            href="/admin/tracking-numbers"
            className="inline-flex items-center px-6 py-3 bg-primary-800 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Manage Tracking Numbers
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={card.link}>
                <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{card.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{card.value}</p>
                    </div>
                    <div className={`${card.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                      <card.icon size={24} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Status Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Status Breakdown</h2>
            <div className="space-y-4">
              {statusBreakdown.map((status) => (
                <div key={status.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{status.label}</span>
                    <span className="text-sm font-bold text-gray-900">{status.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${status.color} h-2 rounded-full transition-all duration-500`}
                      style={{
                        width: `${stats?.activeDeliveries ? (status.value / stats.activeDeliveries) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Recent Shipments</h2>
            <div className="space-y-4">
              {stats?.recentShipments && stats.recentShipments.length > 0 ? (
                stats.recentShipments.map((shipment) => (
                  <Link
                    key={shipment.trackingNumber}
                    href={`/admin/shipments/${shipment.trackingNumber}`}
                    className="block p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{shipment.trackingNumber}</p>
                        <p className="text-sm text-gray-600 mt-1">{shipment.currentStatus}</p>
                        <p className="text-xs text-gray-500 mt-1">{shipment.currentLocation}</p>
                      </div>
                      <span className="text-xs text-gray-400">
                        {new Date(shipment.lastUpdated).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No recent shipments</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}