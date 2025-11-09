const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://SIH:smartindia@cluster0.r5ebxlp.mongodb.net/ecoquest?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  try {
    console.log('🔌 Testing MongoDB Atlas connection...');
    console.log('URI:', MONGODB_URI);
    
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Successfully connected to MongoDB Atlas!');
    
    // Test database operations
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    console.log('📚 Available collections:', collections.map(c => c.name));
    
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB Atlas');
    
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    if (error.name === 'MongoServerSelectionError') {
      console.error('💡 This usually means:');
      console.error('   - Network connectivity issues');
      console.error('   - Incorrect connection string');
      console.error('   - MongoDB Atlas cluster is down');
      console.error('   - IP whitelist restrictions');
    }
  }
}

testConnection();
