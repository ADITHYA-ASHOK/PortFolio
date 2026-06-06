import mongoose from 'mongoose';
import config from './env.js';

export default async function connectDB() {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    // Don't exit in development — allow app to run without DB
    if (config.nodeEnv === 'production') {
      process.exit(1);
    }
  }
}
