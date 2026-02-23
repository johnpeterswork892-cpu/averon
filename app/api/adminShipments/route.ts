import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Shipment from '@/models/shipment';

// GET all shipments
export async function GET() {
  try {
    await dbConnect();

    const shipments = await Shipment.find()
      .sort({ updatedAt: -1 })
      .select('-events')
      .lean();

    return NextResponse.json({
      success: true,
      data: shipments,
    });
  } catch (error) {
    console.error('Shipments List API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch shipments' },
      { status: 500 }
    );
  }
}

// POST create new shipment
export async function POST(req: Request) {
  try {
    const body = await req.json();  
    const {
      trackingNumber,
      currentStatus,
      currentLocation,
      estimatedDelivery,
      courier,
      packageDetails,
      initialEvent,
    } = body;

    // Validate required fields
    if (
      !trackingNumber ||
      !currentStatus ||
      !currentLocation ||
      !estimatedDelivery ||
      !packageDetails
    ) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if tracking number already exists
    const existing = await Shipment.findOne({ trackingNumber });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Tracking number already exists' },
        { status: 409 }
      );
    }

    const now = new Date().toISOString();

    // Create initial event
    const event = {
      id: `evt_${Date.now()}`,
      timestamp: now,
      status: initialEvent?.status || currentStatus,
      location: initialEvent?.location || currentLocation,
      description: initialEvent?.description || 'Shipment created',
    };

    // Create shipment
    const shipment = await Shipment.create({
      trackingNumber,
      currentStatus,
      currentLocation,
      estimatedDelivery,
      lastUpdated: now,
      courier,
      packageDetails,
      events: [event],
      isActive: true,
      isCancelled: false,
    });

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error('Create Shipment API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create shipment' },
      { status: 500 }
    );
  }
}