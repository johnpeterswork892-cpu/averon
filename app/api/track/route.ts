export const runtime = "nodejs";

import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Shipment from "@/models/shipment";
import { z } from "zod";

const schema = z.object({
  trackingNumber: z.string().length(10),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid tracking number" },
        { status: 400 }
      );
    }

    await dbConnect();

    const shipment = await Shipment.findOne({
      trackingNumber: parsed.data.trackingNumber,
    }).lean();

    if (!shipment) {
      return NextResponse.json(
        { success: false, error: "Shipment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: shipment,
    });
  } catch (err) {
    console.error("TRACK API ERROR:", err);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}