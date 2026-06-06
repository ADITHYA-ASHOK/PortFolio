import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio',
  jwtSecret: process.env.JWT_SECRET || 'dev-secret-change-in-production',
  githubToken: process.env.GITHUB_TOKEN || '',
  adminEmail: process.env.ADMIN_EMAIL || 'admin@adithyaashok.com',
  adminPassword: process.env.ADMIN_PASSWORD || 'admin123',
  nodeEnv: process.env.NODE_ENV || 'development',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};
