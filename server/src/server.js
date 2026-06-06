import app from './app.js';
import connectDB from './config/db.js';
import config from './config/env.js';

const start = async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`\n🚀 Portfolio API Server`);
    console.log(`   Environment: ${config.nodeEnv}`);
    console.log(`   Port: ${config.port}`);
    console.log(`   Client: ${config.clientUrl}`);
    console.log(`   Health: http://localhost:${config.port}/api/health\n`);
  });
};

start();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down gracefully...');
  process.exit(0);
});
