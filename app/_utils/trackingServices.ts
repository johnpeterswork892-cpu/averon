// services/trackingService.ts

import type { TrackingResponse, TrackingData } from '../_types/trackingTypes';

// Mock data - Replace this with actual API call
const mockTrackingData: Record<string, TrackingData> = {
  '1234567890': {
    trackingNumber: '1234567890',
    currentStatus: 'Out for Delivery',
    currentLocation: 'Lagos Distribution Center',
    estimatedDelivery: '2026-01-28 by 6:00 PM',
    lastUpdated: new Date().toISOString(),
    packageDetails: {
      weight: '2.5 kg',
      dimensions: '30 x 20 x 15 cm',
      carrier: 'Express Logistics Nigeria',
      serviceType: 'Next Day Delivery',
      reference: 'ORD-2024-5678',
    },
    events: [
      {
        id: '1',
        timestamp: '2026-01-28T08:30:00Z',
        status: 'Out for Delivery',
        location: 'Lagos Distribution Center',
        description: 'Package is out for delivery and will arrive today',
        isCompleted: true,
      },
      {
        id: '2',
        timestamp: '2026-01-28T06:15:00Z',
        status: 'Arrived at Delivery Facility',
        location: 'Lagos Distribution Center',
        description: 'Package has arrived at the local delivery facility',
        isCompleted: true,
      },
      {
        id: '3',
        timestamp: '2026-01-27T22:45:00Z',
        status: 'In Transit',
        location: 'Ibadan Sorting Facility',
        description: 'Package is in transit to destination',
        isCompleted: true,
      },
      {
        id: '4',
        timestamp: '2026-01-27T18:20:00Z',
        status: 'Departed Facility',
        location: 'Abuja Regional Hub',
        description: 'Package has departed from facility',
        isCompleted: true,
      },
      {
        id: '5',
        timestamp: '2026-01-27T14:00:00Z',
        status: 'Arrived at Facility',
        location: 'Abuja Regional Hub',
        description: 'Package has arrived at sorting facility',
        isCompleted: true,
      },
      {
        id: '6',
        timestamp: '2026-01-27T09:30:00Z',
        status: 'Picked Up',
        location: 'Abuja - Sender Location',
        description: 'Package has been picked up from sender',
        isCompleted: true,
      },
      {
        id: '7',
        timestamp: '2026-01-26T15:00:00Z',
        status: 'Order Created',
        location: 'Online',
        description: 'Shipping label created and order confirmed',
        isCompleted: true,
      },
    ],
  },
  '9876543210': {
    trackingNumber: '9876543210',
    currentStatus: 'Delivered',
    currentLocation: 'Port Harcourt - Delivered',
    estimatedDelivery: '2026-01-27 at 2:30 PM',
    lastUpdated: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    packageDetails: {
      weight: '5.0 kg',
      dimensions: '40 x 30 x 20 cm',
      carrier: 'Express Logistics Nigeria',
      serviceType: 'Standard Delivery',
      reference: 'ORD-2024-9012',
    },
    events: [
      {
        id: '1',
        timestamp: '2026-01-27T14:30:00Z',
        status: 'Delivered',
        location: 'Port Harcourt - Customer Address',
        description: 'Package delivered successfully. Signed by: John Doe',
        isCompleted: true,
      },
      {
        id: '2',
        timestamp: '2026-01-27T09:00:00Z',
        status: 'Out for Delivery',
        location: 'Port Harcourt Distribution Center',
        description: 'Package is out for delivery',
        isCompleted: true,
      },
      {
        id: '3',
        timestamp: '2026-01-27T06:00:00Z',
        status: 'Arrived at Delivery Facility',
        location: 'Port Harcourt Distribution Center',
        description: 'Package has arrived at the local delivery facility',
        isCompleted: true,
      },
      {
        id: '4',
        timestamp: '2026-01-26T20:15:00Z',
        status: 'In Transit',
        location: 'Lagos Sorting Facility',
        description: 'Package is in transit to destination',
        isCompleted: true,
      },
      {
        id: '5',
        timestamp: '2026-01-26T10:00:00Z',
        status: 'Picked Up',
        location: 'Lagos - Sender Location',
        description: 'Package has been picked up from sender',
        isCompleted: true,
      },
    ],
  },
};

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Track a package by tracking number
 * 
 * TO INTEGRATE WITH REAL API:
 * 1. Replace the mock logic below with actual fetch/axios call
 * 2. Update the endpoint URL
 * 3. Handle authentication if required
 * 4. Map the API response to match TrackingResponse type
 * 
 * Example real API implementation:
 * 
 * export async function trackPackage(trackingNumber: string): Promise<TrackingResponse> {
 *   try {
 *     const response = await fetch(`${API_BASE_URL}/track/${trackingNumber}`, {
 *       headers: {
 *         'Authorization': `Bearer ${API_KEY}`,
 *         'Content-Type': 'application/json',
 *       },
 *     });
 *     
 *     if (!response.ok) {
 *       throw new Error('Tracking number not found');
 *     }
 *     
 *     const data = await response.json();
 *     return {
 *       success: true,
 *       data: data, // Make sure this matches TrackingData interface
 *     };
 *   } catch (error) {
 *     return {
 *       success: false,
 *       error: error.message || 'Failed to track package',
 *     };
 *   }
 * }
 */
export async function trackPackage(trackingNumber: string): Promise<TrackingResponse> {
  // Simulate network delay
  await delay(1000);

  // Mock API logic - check if tracking number exists
  const data = mockTrackingData[trackingNumber];

  if (data) {
    // Update lastUpdated to current time for real-time feel
    return {
      success: true,
      data: {
        ...data,
        lastUpdated: new Date().toISOString(),
      },
    };
  }

  return {
    success: false,
    error: 'Tracking number not found. Please check and try again.',
  };
}

/**
 * Get example tracking numbers for demo purposes
 */
export function getExampleTrackingNumbers(): string[] {
  return Object.keys(mockTrackingData);
}