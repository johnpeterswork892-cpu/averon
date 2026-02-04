// types/tracking.ts

export interface TrackingEvent {
  id: string;
  timestamp: string;
  status: string;
  location: string;
  description: string;
  isCompleted: boolean;
}

export interface PackageDetails {
  weight: string;
  dimensions: string;
  carrier: string;
  serviceType: string;
  reference?: string;
}

export interface TrackingData {
  trackingNumber: string;
  currentStatus: string;
  currentLocation: string;
  estimatedDelivery: string;
  lastUpdated: string;
  packageDetails: PackageDetails;
  events: TrackingEvent[];
}

export interface TrackingResponse {
  success: boolean;
  data?: TrackingData;
  error?: string;
}