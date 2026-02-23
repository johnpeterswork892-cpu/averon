import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Shipment from '@/models/shipment';

// POST add event to shipment
export async function POST(
  req: Request,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    const body = await req.json();
    const { status, location, description } = body;

    if (!status || !location || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    await dbConnect();

    const shipment = await Shipment.findOne({
      trackingNumber: params.trackingNumber,
    });

    if (!shipment) {
      return NextResponse.json(
        { success: false, error: 'Shipment not found' },
        { status: 404 }
      );
    }

    if (shipment.isCancelled) {
      return NextResponse.json(
        { success: false, error: 'Cannot add events to cancelled shipment' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    const newEvent = {
      id: `evt_${Date.now()}`,
      timestamp: now,
      status,
      location,
      description,
    };

    // Add event to beginning of array (most recent first)
    shipment.events.unshift(newEvent);
    
    // Update shipment current status and location
    shipment.currentStatus = status;
    shipment.currentLocation = location;
    shipment.lastUpdated = now;

    await shipment.save();

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error('Add Event API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add event' },
      { status: 500 }
    );
  }
}