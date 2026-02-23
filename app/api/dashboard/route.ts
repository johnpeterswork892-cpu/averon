import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Shipment from '@/models/shipment';

export async function GET() {
  try {
    await dbConnect();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [
      totalShipments,
      activeDeliveries,
      completedToday,
      pendingPickup,
      inTransit,
      outForDelivery,
      delivered,
      recentShipments,
    ] = await Promise.all([
      Shipment.countDocuments(),
      Shipment.countDocuments({ 
        isActive: true, 
        isCancelled: false,
        currentStatus: { $ne: 'Delivered' }
      }),
      Shipment.countDocuments({
        currentStatus: 'Delivered',
        updatedAt: { $gte: today },
      }),
      Shipment.countDocuments({
        currentStatus: { $in: ['Pending Pickup', 'Order Placed'] },
        isCancelled: false,
      }),
      Shipment.countDocuments({
        currentStatus: 'In Transit',
        isCancelled: false,
      }),
      Shipment.countDocuments({
        currentStatus: 'Out for Delivery',
        isCancelled: false,
      }),
      Shipment.countDocuments({
        currentStatus: 'Delivered',
      }),
      Shipment.find()
        .sort({ updatedAt: -1 })
        .limit(5)
        .select('trackingNumber currentStatus currentLocation lastUpdated')
        .lean(),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        totalShipments,
        activeDeliveries,
        completedToday,
        pendingPickup,
        inTransit,
        outForDelivery,
        delivered,
        recentShipments,
      },
    });
  } catch (error) {
    console.error('Dashboard API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}