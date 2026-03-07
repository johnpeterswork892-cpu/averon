import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import TrackingNumber from '@/models/trackigNumbers';


// POST deactivate tracking number
export async function POST(
  req: Request,
  { params }: { params: { trackingNumber: string } }
) {
  try {
    await dbConnect();

    const trackingNumber = await TrackingNumber.findOne({
      trackingNumber: params.trackingNumber,
    });

    if (!trackingNumber) {
      return NextResponse.json(
        { success: false, error: 'Tracking number not found' },
        { status: 404 }
      );
    }

    if (trackingNumber.isUsed) {
      return NextResponse.json(
        { success: false, error: 'Cannot deactivate used tracking number' },
        { status: 400 }
      );
    }

    trackingNumber.isActive = false;
    await trackingNumber.save();

    return NextResponse.json({
      success: true,
      data: trackingNumber,
    });
  } catch (error) {
    console.error('Deactivate Tracking Number API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to deactivate tracking number' },
      { status: 500 }
    );
  }
}