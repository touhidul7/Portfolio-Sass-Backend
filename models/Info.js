const mongoose = require('mongoose');

// Define the Info schema
const infoSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  JobTitle: String,
  Description: String,
  phone: String,
});

// Indexes for better performance (optional)
infoSchema.index({ name: 1 });

// Create and export the model
const Info = mongoose.model('Info', infoSchema);
module.exports = Info;
