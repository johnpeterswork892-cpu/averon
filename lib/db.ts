import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

/**
 * Define cached connection structure type
 */
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

/**
 * Extend global type properly
 */
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const globalWithCache = global as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cached: MongooseCache =
  globalWithCache.mongooseCache ?? {
    conn: null,
    promise: null,
  };

if (!globalWithCache.mongooseCache) {
  globalWithCache.mongooseCache = cached;
}

export default async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new MongoDB connection...");
    console.log("URI:", MONGODB_URI);

    cached.promise = mongoose.connect(MONGODB_URI!, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
  }

  try {
    cached.conn = await cached.promise;

    console.log("MongoDB connected");
    console.log("Host:", mongoose.connection.host);
    console.log("DB Name:", mongoose.connection.name);
    console.log("ReadyState:", mongoose.connection.readyState);

    return cached.conn;
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
}