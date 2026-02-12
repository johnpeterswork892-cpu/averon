'use client';

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import type { TrackingData } from "../../_types/trackingTypes";
import { formatDateTime, getTimeAgo } from "../../_utils/trackUtils";

type ViewMode = "timeline" | "list";

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>("timeline");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setTrackingNumber(value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.length !== 10) return;
    setIsLoading(true);
    setError(null);
    setTrackingData(null);
    try {
      const res = await fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to track package");
      }
      setTrackingData(result.data as TrackingData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Tracking Input */}
      <section className="bg-linear-to-br from-primary-900 to-primary-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Track Your Shipment
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-lg text-gray-300 mb-8">
                Enter your 10-digit tracking number to see real-time updates
              </p>
            </motion.div>

            {/* Tracking Form */}
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-2xl p-8"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={handleInputChange}
                    placeholder="Enter tracking number"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-accent-500 focus:outline-none transition-colors"
                    maxLength={10}
                  />
                  <div className="mt-2 text-sm text-gray-500 text-left">
                    {trackingNumber.length}/10 digits
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={trackingNumber.length !== 10 || isLoading}
                  className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-xl hover:bg-accent-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg disabled:hover:shadow-none"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Tracking...
                    </span>
                  ) : (
                    "Track Package"
                  )}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* Error State */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4 py-8"
        >
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start gap-4">
            <svg
              className="w-6 h-6 text-red-500 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-1">
                Tracking Error
              </h3>
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Results Section */}
      {trackingData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto px-4 py-12"
        >
          {/* Status Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-2">
                  {trackingData.currentStatus}
                </h2>
                <p className="text-lg text-gray-600">
                  {trackingData.currentLocation}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">
                  Updated {getTimeAgo(trackingData.lastUpdated)}
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live Tracking
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-sm text-gray-500 mb-1">Tracking Number</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.trackingNumber}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Estimated Delivery
                </p>
                <p className="text-lg font-semibold text-accent-500">
                  {trackingData.estimatedDelivery}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Package Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-6"
          >
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Package Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Carrier</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.packageDetails.carrier}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Service Type</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.packageDetails.serviceType}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Weight</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.packageDetails.weight}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Dimensions</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.packageDetails.dimensions}
                </p>
              </div>
            </div>
            {trackingData.packageDetails.reference && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Reference Number</p>
                <p className="text-lg font-semibold text-gray-900">
                  {trackingData.packageDetails.reference}
                </p>
              </div>
            )}
          </motion.div>

          {/* View Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary-900">
                Shipment History
              </h3>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("timeline")}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    viewMode === "timeline"
                      ? "bg-white text-primary-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Timeline
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                    viewMode === "list"
                      ? "bg-white text-primary-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  List
                </button>
              </div>
            </div>

            {/* Timeline View */}
            {viewMode === "timeline" && (
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-200" />

                <div className="space-y-8">
                  {trackingData.events.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-12"
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`absolute left-0 w-8 h-8 rounded-full border-4 border-white ${
                          index === 0
                            ? "bg-accent-500 shadow-lg shadow-accent-500/50"
                            : "bg-primary-900"
                        }`}
                      />

                      <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-primary-900">
                            {event.status}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {formatDateTime(event.timestamp)}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-1">{event.description}</p>
                        <p className="text-sm text-gray-500 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {event.location}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* List View */}
            {viewMode === "list" && (
              <div className="space-y-4">
                {trackingData.events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className={`p-6 rounded-xl border-2 ${
                      index === 0
                        ? "border-accent-500 bg-orange-50"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-primary-900">
                            {event.status}
                          </h4>
                          {index === 0 && (
                            <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                              Latest
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {formatDateTime(event.timestamp)}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* Empty State */}
      {!trackingData && !error && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto px-4 py-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <svg
              className="w-24 h-24 mx-auto mb-6 text-gray-300"
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
            <h3 className="text-2xl font-bold text-gray-700 mb-3">
              Enter a tracking number to get started
            </h3>
            <p className="text-gray-500">
              Track your shipment in real-time with detailed location and status
              updates
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}