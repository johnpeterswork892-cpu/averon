'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateShipmentPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [trackingNumber, setTrackingNumber] = useState('');
  const [currentStatus, setCurrentStatus] = useState('Order Placed');
  const [currentLocation, setCurrentLocation] = useState('');
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [courier, setCourier] = useState('');

  // Package details
  const [carrier, setCarrier] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [weight, setWeight] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [reference, setReference] = useState('');

  // Initial event
  const [initialEventDescription, setInitialEventDescription] = useState('Order has been placed and is being processed');

  const generateTrackingNumber = async () => {
    try {
      const res = await fetch('/api/genTrackingNum', {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        setTrackingNumber(data.trackingNumber);
      } else {
        alert('Failed to generate tracking number');
      }
    } catch (error) {
      console.error('Failed to generate tracking number:', error);
      alert('Failed to generate tracking number');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!trackingNumber || trackingNumber.length !== 10) {
      alert('Please enter or generate a valid 10-digit tracking number');
      return;
    }

    if (!currentStatus || !currentLocation || !estimatedDelivery || !carrier || !serviceType || !weight || !dimensions) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/adminShipments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackingNumber,
          currentStatus,
          currentLocation,
          estimatedDelivery,
          courier: courier || undefined,
          packageDetails: {
            carrier,
            serviceType,
            weight,
            dimensions,
            reference: reference || undefined,
          },
          initialEvent: {
            status: currentStatus,
            location: currentLocation,
            description: initialEventDescription,
          },
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert('Shipment created successfully!');
        router.push(`/admin/shipments/${trackingNumber}`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Failed to create shipment:', error);
      alert('Failed to create shipment');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusOptions = [
    'Order Placed',
    'Pending Pickup',
    'Picked Up',
    'In Transit',
    'Out for Delivery',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/shipments"
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-primary-900">Create New Shipment</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Enter shipment details to create a new tracking entry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Tracking Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Tracking Number</h2>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Enter 10-digit tracking number"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-primary-950 focus:border-transparent"
                />
                <p className="mt-2 text-sm text-gray-500">{trackingNumber.length}/10 digits</p>
              </div>
              <button
                type="button"
                onClick={generateTrackingNumber}
                className="px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors whitespace-nowrap"
              >
                Generate
              </button>
            </div>
          </motion.div>

          {/* Shipment Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Shipment Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Status *
                </label>
                <select
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  {statusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Location *
                </label>
                <input
                  type="text"
                  value={currentLocation}
                  onChange={(e) => setCurrentLocation(e.target.value)}
                  placeholder="e.g., Lagos Distribution Center"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Delivery *
                </label>
                <input
                  type="text"
                  value={estimatedDelivery}
                  onChange={(e) => setEstimatedDelivery(e.target.value)}
                  placeholder="e.g., Feb 15, 2026"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assigned Courier (Optional)
                </label>
                <input
                  type="text"
                  value={courier}
                  onChange={(e) => setCourier(e.target.value)}
                  placeholder="Courier name or ID"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Package Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Package Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Carrier *
                </label>
                <input
                  type="text"
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                  placeholder="e.g., Averon Express"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <input
                  type="text"
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  placeholder="e.g., Express Delivery"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight *
                </label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="e.g., 2.5 kg"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dimensions *
                </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="e.g., 30x20x15 cm"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reference Number (Optional)
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="Customer reference or order number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Initial Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <h2 className="text-xl font-bold text-primary-900 mb-6">Initial Event</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event Description
              </label>
              <textarea
                value={initialEventDescription}
                onChange={(e) => setInitialEventDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-primary-950 focus:ring-primary-500 focus:border-transparent"
                placeholder="Describe the initial event..."
              />
              <p className="mt-2 text-sm text-gray-500">
                This will be the first event in the tracking history
              </p>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Creating Shipment...' : 'Create Shipment'}
            </button>
            <Link
              href="/admin/shipments"
              className="px-6 py-4 bg-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-300 transition-colors text-center"
            >
              Cancel
            </Link>
          </motion.div>
        </form>
      </div>
    </div>
  );
}