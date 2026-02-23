import mongoose, { Schema, Document } from 'mongoose';

export interface ITrackingNumber extends Document {
  trackingNumber: string;
  isUsed: boolean;
  isActive: boolean;
  createdAt: Date;
  usedAt?: Date;
}

const TrackingNumberSchema = new Schema<ITrackingNumber>(
  {
    trackingNumber: {
      type: String,
      required: true,
      unique: true,
      length: 10,
      index: true,
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    usedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.TrackingNumber ||
  mongoose.model<ITrackingNumber>('TrackingNumber', TrackingNumberSchema);