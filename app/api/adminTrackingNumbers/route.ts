import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import TrackingNumber from '@/models/trackigNumbers';


// GET all tracking numbers
export async function GET() {
  try {
    await dbConnect();

    const trackingNumbers = await TrackingNumber.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: trackingNumbers,
    });
  } catch (error) {
    console.error('Tracking Numbers List API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch tracking numbers' },
      { status: 500 }
    );
  }
}