import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  status: String,
  description: String,
  location: String,
  timestamp: Date,
});

const ShipmentSchema = new mongoose.Schema(
  {
    trackingNumber: {
      type: String,
      unique: true,
      index: true,
    },
    currentStatus: String,
    currentLocation: String,
    estimatedDelivery: String,

    packageDetails: {
      carrier: String,
      serviceType: String,
      weight: String,
      dimensions: String,
      reference: String,
    },

    events: [EventSchema],
  },
  { timestamps: true }
);

export default mongoose.models.Shipment ||
  mongoose.model("Shipment", ShipmentSchema);
