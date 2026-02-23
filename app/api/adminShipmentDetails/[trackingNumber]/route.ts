import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Shipment from '@/models/shipment';

// GET single shipment
export async function GET(
  req: Request,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    const { trackingNumber } = await params;
    await dbConnect();

    const shipment = await Shipment.findOne({
      trackingNumber,
    }).lean();

    if (!shipment) {
      return NextResponse.json(
        { success: false, error: 'Shipment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error('Shipment Detail API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch shipment' },
      { status: 500 }
    );
  }
}

// PATCH update shipment
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    const { trackingNumber } = await params;
    const body = await req.json();
    const { currentStatus, currentLocation, courier, estimatedDelivery } = body;

    await dbConnect();

    const shipment = await Shipment.findOne({ trackingNumber });

    if (!shipment) {
      return NextResponse.json(
        { success: false, error: 'Shipment not found' },
        { status: 404 }
      );
    }

    if (shipment.isCancelled) {
      return NextResponse.json(
        { success: false, error: 'Cannot update cancelled shipment' },
        { status: 400 }
      );
    }

    // Update fields
    if (currentStatus) shipment.currentStatus = currentStatus;
    if (currentLocation) shipment.currentLocation = currentLocation;
    if (courier !== undefined) shipment.courier = courier;
    if (estimatedDelivery) shipment.estimatedDelivery = estimatedDelivery;

    shipment.lastUpdated = new Date().toISOString();

    await shipment.save();

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (error) {
    console.error('Update Shipment API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update shipment' },
      { status: 500 }
    );
  }
}

// DELETE shipment
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    const { trackingNumber } = await params;
    await dbConnect();

    const shipment = await Shipment.findOneAndDelete({ trackingNumber });

    if (!shipment) {
      return NextResponse.json(
        { success: false, error: 'Shipment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Shipment deleted',
    });
  } catch (error) {
    console.error('Delete Shipment API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete shipment' },
      { status: 500 }
    );
  }
}