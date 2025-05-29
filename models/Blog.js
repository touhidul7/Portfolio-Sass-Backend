const mongoose = require('mongoose');

// Define the Info schema
const blogSchema = new mongoose.Schema({
      title: String,
      shortTitle: String,
      catogory: String,
      blogContent: String,
      imageLink: String,
      projectURL: String,
      extra: String,
});

// Indexes for better performance (optional)
blogSchema.index({ blogName: 1 });

// Create and export the model
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
