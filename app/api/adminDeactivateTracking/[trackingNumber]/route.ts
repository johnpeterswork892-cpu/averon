import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import TrackingNumber from '@/models/trackigNumbers';

// POST deactivate tracking number
export async function POST(
  req: Request,
  context: { params: Promise<{ trackingNumber: string }> }
) {
  try {
    await dbConnect();

    // 🔥 unwrap params
    const { trackingNumber } = await context.params;

    const record = await TrackingNumber.findOne({
      trackingNumber,
    });

    if (!record) {
      return NextResponse.json(
        { success: false, error: 'Tracking number not found' },
        { status: 404 }
      );
    }

    if (record.isUsed) {
      return NextResponse.json(
        { success: false, error: 'Cannot deactivate used tracking number' },
        { status: 400 }
      );
    }

    record.isActive = false;
    await record.save();

    return NextResponse.json({
      success: true,
      data: record,
    });

  } catch (error) {
    console.error('Deactivate Tracking Number API Error:', error);

    return NextResponse.json(
      { success: false, error: 'Failed to deactivate tracking number' },
      { status: 500 }
    );
  }
}