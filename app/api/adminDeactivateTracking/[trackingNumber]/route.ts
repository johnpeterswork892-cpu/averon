import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import dbConnect from '@/lib/db';
import TrackingNumber from '@/models/trackigNumbers';

// POST deactivate tracking number
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    await dbConnect();

    const { trackingNumber } = await params;

    const tracking = await TrackingNumber.findOne({
      trackingNumber: trackingNumber,
    });

    if (!tracking) {
      return NextResponse.json(
        { success: false, error: 'Tracking number not found' },
        { status: 404 }
      );
    }

    if (tracking.isUsed) {
      return NextResponse.json(
        { success: false, error: 'Cannot deactivate used tracking number' },
        { status: 400 }
      );
    }

    tracking.isActive = false;
    await tracking.save();

    return NextResponse.json({
      success: true,
      data: tracking,
    });

  } catch (error) {
    console.error('Deactivate Tracking Number API Error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to deactivate tracking number' },
      { status: 500 }
    );
  }
}