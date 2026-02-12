import { NextResponse } from "next/server";
import mongoose from "mongoose";

interface MongoDBError extends Error {
  code?: string;
}

export async function GET() {
  try {
    const uri = "mongodb://johnpeterswork892_db_user:aRqkXFrGS7Oo744U@ac-1jk8txj-shard-00-00.tebaz7a.mongodb.net:27017,ac-1jk8txj-shard-00-01.tebaz7a.mongodb.net:27017,ac-1jk8txj-shard-00-02.tebaz7a.mongodb.net:27017/?replicaSet=atlas-g4av6w-shard-0&ssl=true&authSource=admin";
    
    console.log("Testing MongoDB connection...");
    console.log("URI (masked):", uri.replace(/aRqkXFrGS7Oo744U/, '****'));
    
    // Force fresh connection
    await mongoose.disconnect();
    
    const startTime = Date.now();
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });
    const endTime = Date.now();
    
    const connectionTime = endTime - startTime;
    console.log(`✅ Connected in ${connectionTime}ms`);
    
    const db = mongoose.connection.db;
    
    if (!db) {
      throw new Error("Database connection established but db object is undefined");
    }
    
    const dbName = db.databaseName;
    console.log(`Database: ${dbName}`);
    
    // List databases
    const adminDb = db.admin();
    const databases = await adminDb.listDatabases();
    const dbList = databases.databases.map(d => d.name);
    
    await mongoose.disconnect();
    
    return NextResponse.json({
      success: true,
      connectionTime: `${connectionTime}ms`,
      database: dbName,
      availableDatabases: dbList,
      message: "MongoDB connected successfully"
    });
    
  } catch (error: unknown) {
    console.error("❌ MongoDB connection failed:");
    
    let errorName = "UnknownError";
    let errorMessage = "An unknown error occurred";
    let errorCode: string | undefined;
    
    if (error instanceof Error) {
      errorName = error.name;
      errorMessage = error.message;
      
      // Type guard for MongoDB error
      const mongoError = error as MongoDBError;
      if (mongoError.code) {
        errorCode = mongoError.code;
        console.error("Error code:", errorCode);
      }
    }
    
    console.error("Error name:", errorName);
    console.error("Error message:", errorMessage);
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      name: errorName,
      code: errorCode,
      details: "Check console for more information"
    }, { status: 500 });
  }
}