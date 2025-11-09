const mongoose = require('mongoose');
const Post = require('./models/Post');
const fs = require('fs');
const path = require('path');

const MONGODB_URI = "mongodb+srv://SIH:smartindia@cluster0.r5ebxlp.mongodb.net/ecoquest?retryWrites=true&w=majority&appName=Cluster0";

// Sample image URLs from Unsplash (free stock photos)
const sampleImages = {
  "tree-planting": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
  "recycling": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "energy-saving": "https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?w=400&h=300&fit=crop",
  "water-conservation": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "other": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
};

async function updateImages() {
  try {
    console.log('🔌 Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas successfully!');

    // Get all posts
    const posts = await Post.find({});
    console.log(`📝 Found ${posts.length} posts to update`);

    // Update each post with a sample image URL
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const imageUrl = sampleImages[post.category] || sampleImages["other"];
      
      // Update the image field with the URL
      post.image = {
        filename: `${post.category}-${i + 1}.jpg`,
        path: imageUrl,
        mimetype: "image/jpeg",
        size: 500000 + (i * 100000) // Varying sizes
      };
      
      await post.save();
      console.log(`✅ Updated post: ${post.title}`);
    }

    console.log('\n🎉 All posts updated with sample images!');
    
    // Display updated posts
    const updatedPosts = await Post.find({});
    console.log('\n📸 Posts with Images:');
    updatedPosts.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   Image: ${post.image.path}`);
      console.log(`   Category: ${post.category} (${post.ecoPoints} points)`);
      console.log('');
    });

    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB Atlas');

  } catch (error) {
    console.error('❌ Error updating images:', error);
    process.exit(1);
  }
}

updateImages();

