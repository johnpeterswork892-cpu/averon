'use client';

import { useState, useEffect, use } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface ShipmentEvent {
  id: string;
  timestamp: string;
  status: string;
  location: string;
  description: string;
}

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
    weight: string;
    dimensions: string;
    reference?: string;
  };
  events: ShipmentEvent[];
}

const STATUS_OPTIONS = [
  'Order Placed',
  'Pending Pickup',
  'Picked Up',
  'In Transit',
  'Out for Delivery',
  'Delivered',
];

const STATUS_COLORS: Record<string, { dot: string; badge: string }> = {
  'Delivered':        { dot: 'bg-green-500',  badge: 'bg-green-100 text-green-800' },
  'Out for Delivery': { dot: 'bg-accent-500', badge: 'bg-orange-100 text-orange-800' },
  'In Transit':       { dot: 'bg-blue-500',   badge: 'bg-blue-100 text-blue-800' },
  'Picked Up':        { dot: 'bg-indigo-500', badge: 'bg-indigo-100 text-indigo-800' },
  'Pending Pickup':   { dot: 'bg-yellow-500', badge: 'bg-yellow-100 text-yellow-800' },
  'Order Placed':     { dot: 'bg-yellow-400', badge: 'bg-yellow-50 text-yellow-700' },
  'Cancelled':        { dot: 'bg-red-500',    badge: 'bg-red-100 text-red-800' },
};

function getStatusStyle(status: string, isCancelled: boolean) {
  if (isCancelled) return STATUS_COLORS['Cancelled'];
  return STATUS_COLORS[status] ?? { dot: 'bg-gray-400', badge: 'bg-gray-100 text-gray-700' };
}

// ── Modal ──────────────────────────────────────────────────────────────────
function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-primary-900">{title}</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function SingleShipmentPage({ params }: { params: Promise<{ trackingNumber: string }> }) {
  const router = useRouter();
  const { trackingNumber } = use(params);

  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Edit state
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ currentStatus: '', currentLocation: '', courier: '', estimatedDelivery: '', packageDetails: { carrier: '', serviceType: '', weight: '', dimensions: '', reference: '' } });
  const [isSaving, setIsSaving] = useState(false);

  // Add event modal
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [eventForm, setEventForm] = useState({ status: '', location: '', description: '' });
  const [isAddingEvent, setIsAddingEvent] = useState(false);

  // Cancel modal
  const [showCancel, setShowCancel] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  // Delete modal
  const [showDelete, setShowDelete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => { fetchShipment(); }, []);

  const fetchShipment = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/adminShipmentDetails/${trackingNumber}`);
      console.log(trackingNumber);
      
      const data = await res.json();
      if (data.success) {
        setShipment(data.data);
        const s = data.data;
        setEditForm({
          currentStatus: s.currentStatus,
          currentLocation: s.currentLocation,
          courier: s.courier ?? '',
          estimatedDelivery: s.estimatedDelivery,
          packageDetails: { ...s.packageDetails, reference: s.packageDetails.reference ?? '' },
        });
        setEventForm({ status: s.currentStatus, location: s.currentLocation, description: '' });
      } else {
        setError(data.error ?? 'Shipment not found');
      }
    } catch {
      setError('Failed to load shipment');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/adminShipmentDetails/${trackingNumber}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          currentStatus: editForm.currentStatus,
          currentLocation: editForm.currentLocation,
          courier: editForm.courier,
          estimatedDelivery: editForm.estimatedDelivery,
        }),
      });
      const data = await res.json();
      if (data.success) {
        await fetchShipment();
        setIsEditing(false);
      } else {
        alert(data.error ?? 'Failed to update');
      }
    } catch {
      alert('Failed to update shipment');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddEvent = async () => {
    if (!eventForm.status || !eventForm.location || !eventForm.description) {
      alert('Please fill in all fields');
      return;
    }
    setIsAddingEvent(true);
    try {
      const res = await fetch('/api/adminAddEvent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber, ...eventForm }),
      });
      const data = await res.json();
      if (data.success) {
        await fetchShipment();
        setShowAddEvent(false);
        setEventForm({ status: shipment?.currentStatus ?? '', location: shipment?.currentLocation ?? '', description: '' });
      } else {
        alert(data.error ?? 'Failed to add event');
      }
    } catch {
      alert('Failed to add event');
    } finally {
      setIsAddingEvent(false);
    }
  };

  const handleCancel = async () => {
    setIsCancelling(true);
    try {
      const res = await fetch('/api/adminCancelShipment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber }),
      });
      const data = await res.json();
      if (data.success) {
        await fetchShipment();
        setShowCancel(false);
      } else {
        alert(data.error ?? 'Failed to cancel');
      }
    } catch {
      alert('Failed to cancel shipment');
    } finally {
      setIsCancelling(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/adminShipmentDetails/${trackingNumber}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        router.push('/admin/shipments');
      } else {
        alert(data.error ?? 'Failed to delete');
        setIsDeleting(false);
      }
    } catch {
      alert('Failed to delete shipment');
      setIsDeleting(false);
    }
  };

  // ── Loading / Error ──────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500" />
      </div>
    );
  }

  if (error || !shipment) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-xl font-semibold text-gray-700">{error || 'Shipment not found'}</p>
        <Link href="/admin/shipments" className="text-primary-600 hover:underline">← Back to shipments</Link>
      </div>
    );
  }

  const statusStyle = getStatusStyle(shipment.currentStatus, shipment.isCancelled);
  const sortedEvents = [...(shipment.events ?? [])].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <Link href="/admin/shipments" className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div className="min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold text-primary-900 font-mono tracking-tight">{shipment.trackingNumber}</h1>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusStyle.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                    {shipment.isCancelled ? 'Cancelled' : shipment.currentStatus}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  {shipment.packageDetails.carrier} · {shipment.packageDetails.serviceType}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 shrink-0">
              {!shipment.isCancelled && (
                <>
                  <button
                    onClick={() => setShowAddEvent(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add Event
                  </button>
                  <button
                    onClick={() => setShowCancel(true)}
                    className="px-4 py-2 border border-red-300 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Cancel
                  </button>
                </>
              )}
              <button
                onClick={() => setShowDelete(true)}
                className="px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* ── Left column: details + package ── */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Shipment Details Card */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-primary-900">Shipment Details</h2>
              {!shipment.isCancelled && (
                <button
                  onClick={() => isEditing ? handleSaveEdit() : setIsEditing(true)}
                  disabled={isSaving}
                  className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors ${
                    isEditing
                      ? 'bg-accent-500 text-white hover:bg-accent-600'
                      : 'text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {isSaving ? 'Saving…' : isEditing ? 'Save' : 'Edit'}
                </button>
              )}
              {isEditing && (
                <button onClick={() => setIsEditing(false)} className="text-sm font-medium text-gray-400 hover:text-gray-600 ml-2">
                  Discard
                </button>
              )}
            </div>

            <div className="space-y-4">
              <Field label="Status">
                {isEditing ? (
                  <select
                    value={editForm.currentStatus}
                    onChange={e => setEditForm(f => ({ ...f, currentStatus: e.target.value }))}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
                  </select>
                ) : (
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${statusStyle.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                    {shipment.isCancelled ? 'Cancelled' : shipment.currentStatus}
                  </span>
                )}
              </Field>

              <Field label="Current Location">
                {isEditing ? (
                  <input
                    value={editForm.currentLocation}
                    onChange={e => setEditForm(f => ({ ...f, currentLocation: e.target.value }))}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-800 mt-0.5">{shipment.currentLocation}</p>
                )}
              </Field>

              <Field label="Est. Delivery">
                {isEditing ? (
                  <input
                    value={editForm.estimatedDelivery}
                    onChange={e => setEditForm(f => ({ ...f, estimatedDelivery: e.target.value }))}
                    placeholder="e.g. Mar 5, 2026"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-800 mt-0.5">{shipment.estimatedDelivery}</p>
                )}
              </Field>

              <Field label="Courier">
                {isEditing ? (
                  <input
                    value={editForm.courier}
                    onChange={e => setEditForm(f => ({ ...f, courier: e.target.value }))}
                    placeholder="Optional"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-800 mt-0.5">{shipment.courier || <span className="text-gray-400">—</span>}</p>
                )}
              </Field>

              <Field label="Last Updated">
                <p className="text-sm text-gray-800 mt-0.5">
                  {new Date(shipment.lastUpdated).toLocaleString()}
                </p>
              </Field>
            </div>
          </motion.div>

          {/* Package Details Card */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-primary-900">Package Details</h2>
              {!shipment.isCancelled && isEditing && (
                <span className="text-xs text-gray-400 italic">Editable above</span>
              )}
            </div>
            <div className="space-y-4">
              <Field label="Carrier">
                {isEditing ? (
                  <input
                    value={editForm.packageDetails.carrier}
                    onChange={e => setEditForm(f => ({ ...f, packageDetails: { ...f.packageDetails, carrier: e.target.value } }))}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-800 mt-0.5">{shipment.packageDetails.carrier}</p>
                )}
              </Field>
              <Field label="Service Type">
                {isEditing ? (
                  <input
                    value={editForm.packageDetails.serviceType}
                    onChange={e => setEditForm(f => ({ ...f, packageDetails: { ...f.packageDetails, serviceType: e.target.value } }))}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                ) : (
                  <p className="text-sm text-gray-800 mt-0.5">{shipment.packageDetails.serviceType}</p>
                )}
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Weight">
                  {isEditing ? (
                    <input
                      value={editForm.packageDetails.weight}
                      onChange={e => setEditForm(f => ({ ...f, packageDetails: { ...f.packageDetails, weight: e.target.value } }))}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-sm text-gray-800 mt-0.5">{shipment.packageDetails.weight}</p>
                  )}
                </Field>
                <Field label="Dimensions">
                  {isEditing ? (
                    <input
                      value={editForm.packageDetails.dimensions}
                      onChange={e => setEditForm(f => ({ ...f, packageDetails: { ...f.packageDetails, dimensions: e.target.value } }))}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-sm text-gray-800 mt-0.5">{shipment.packageDetails.dimensions}</p>
                  )}
                </Field>
              </div>
              {(shipment.packageDetails.reference || isEditing) && (
                <Field label="Reference">
                  {isEditing ? (
                    <input
                      value={editForm.packageDetails.reference}
                      onChange={e => setEditForm(f => ({ ...f, packageDetails: { ...f.packageDetails, reference: e.target.value } }))}
                      placeholder="Optional"
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  ) : (
                    <p className="text-sm text-gray-800 mt-0.5">{shipment.packageDetails.reference || <span className="text-gray-400">—</span>}</p>
                  )}
                </Field>
              )}
            </div>
          </motion.div>
        </div>

        {/* ── Right column: timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-primary-900">Tracking History</h2>
            <span className="text-xs text-gray-400">{sortedEvents.length} event{sortedEvents.length !== 1 ? 's' : ''}</span>
          </div>

          {sortedEvents.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-10">No events yet</p>
          ) : (
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-[17px] top-2 bottom-2 w-px bg-gray-100" />

              <div className="space-y-0">
                {sortedEvents.map((event, idx) => {
                  const style = getStatusStyle(event.status, false);
                  const isFirst = idx === 0;
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      className="relative flex gap-4 pb-6 last:pb-0"
                    >
                      {/* dot */}
                      <div className="relative z-10 shrink-0 mt-0.5">
                        <div className={`w-[18px] h-[18px] rounded-full border-2 border-white shadow-sm flex items-center justify-center ${style.dot}`}>
                          {isFirst && (
                            <div className="w-2 h-2 rounded-full bg-white opacity-70" />
                          )}
                        </div>
                      </div>

                      {/* content */}
                      <div className="flex-1 min-w-0 pt-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <p className={`text-sm font-semibold ${isFirst ? 'text-primary-900' : 'text-gray-700'}`}>
                              {event.status}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                              <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {event.location}
                            </p>
                          </div>
                          <time className="text-xs text-gray-400 whitespace-nowrap shrink-0">
                            {new Date(event.timestamp).toLocaleString(undefined, {
                              month: 'short', day: 'numeric',
                              hour: '2-digit', minute: '2-digit',
                            })}
                          </time>
                        </div>
                        {event.description && (
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{event.description}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ── Add Event Modal ── */}
      {showAddEvent && (
        <Modal title="Add Tracking Event" onClose={() => setShowAddEvent(false)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
              <select
                value={eventForm.status}
                onChange={e => setEventForm(f => ({ ...f, status: e.target.value }))}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
              <input
                value={eventForm.location}
                onChange={e => setEventForm(f => ({ ...f, location: e.target.value }))}
                placeholder="e.g. Lagos Distribution Center"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea
                value={eventForm.description}
                onChange={e => setEventForm(f => ({ ...f, description: e.target.value }))}
                rows={3}
                placeholder="Describe what happened..."
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm text-primary-950 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              />
            </div>
            <div className="flex gap-3 pt-1">
              <button
                onClick={handleAddEvent}
                disabled={isAddingEvent}
                className="flex-1 px-4 py-2.5 bg-accent-500 text-white font-semibold text-sm rounded-lg hover:bg-accent-600 disabled:opacity-50 transition-colors"
              >
                {isAddingEvent ? 'Adding…' : 'Add Event'}
              </button>
              <button onClick={() => setShowAddEvent(false)} className="px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ── Cancel Modal ── */}
      {showCancel && (
        <Modal title="Cancel Shipment" onClose={() => setShowCancel(false)}>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-red-800">This action cannot be undone</p>
                <p className="text-sm text-red-700 mt-1">
                  Cancelling shipment <strong>{trackingNumber}</strong> will mark it as cancelled and prevent further updates.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleCancel}
                disabled={isCancelling}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {isCancelling ? 'Cancelling…' : 'Yes, Cancel Shipment'}
              </button>
              <button onClick={() => setShowCancel(false)} className="px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">
                Go Back
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* ── Delete Modal ── */}
      {showDelete && (
        <Modal title="Delete Shipment" onClose={() => setShowDelete(false)}>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
              <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-red-800">Permanently delete this shipment</p>
                <p className="text-sm text-red-700 mt-1">
                  Tracking number <strong>{trackingNumber}</strong> and all its history will be permanently removed. There is no undo.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
              >
                {isDeleting ? 'Deleting…' : 'Delete Permanently'}
              </button>
              <button onClick={() => setShowDelete(false)} className="px-4 py-2.5 bg-gray-100 text-gray-700 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">
                Go Back
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

// ── Small helper ──
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{label}</p>
      {children}
    </div>
  );
}