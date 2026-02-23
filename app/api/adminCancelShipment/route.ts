import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Shipment from '@/models/shipment';

// POST cancel shipment
export async function POST(
  req: Request,
  { params }: { params: { trackingNumber: string } }
) {
  try {
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
        { success: false, error: 'Shipment already cancelled' },
        { status: 400 }
      );
    }

    const now = new Date().toISOString();

    // Add cancellation event
    const cancellationEvent = {
      id: `evt_${Date.now()}`,
      timestamp: now,
      status: 'Cancelled',
      location: shipment.currentLocation,
      description: 'Shipment has been cancelled',
    };

    shipment.events.unshift(cancellationEvent);
    shipment.currentStatus = 'Cancelled';
    shipment.isCancelled = true;
    shipment.isActive = false;
    shipment.lastUpdated = now;

    await shipment.save();

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error('Cancel Shipment API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to cancel shipment' },
      { status: 500 }
    );
  }
}