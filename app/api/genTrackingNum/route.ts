import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import TrackingNumber from '@/models/trackigNumbers';

// Helper function to generate random 10-digit number
function generateTrackingNumber(): string {
  // Generate 10-digit number (don't start with 0)
  const first = Math.floor(Math.random() * 9) + 1;
  const rest = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
  return `${first}${rest}`;
}

// POST generate single tracking number
export async function POST() {
  try {
    await dbConnect();

    let trackingNumber: string;
    let attempts = 0;
    const maxAttempts = 10;

    // Try to generate unique tracking number
    do {
      trackingNumber = generateTrackingNumber();
      attempts++;

      const existing = await TrackingNumber.findOne({ trackingNumber });
      if (!existing) break;

      if (attempts >= maxAttempts) {
        return NextResponse.json(
          { success: false, error: 'Failed to generate unique tracking number' },
          { status: 500 }
        );
      }
    } while (attempts < maxAttempts);

    // Create tracking number record
    await TrackingNumber.create({
      trackingNumber,
      isUsed: false,
      isActive: true,
    });

    return NextResponse.json({
      success: true,
      trackingNumber,
    });
  } catch (error) {
    console.error('Generate Tracking Number API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate tracking number' },
      { status: 500 }
    );
  }
}