const mongoose = require('mongoose');

// Define the Info schema
const technologySchema = new mongoose.Schema({
      name: String,
      skillLevel: String,
});

// Indexes for better performance (optional)
technologySchema.index({ technologyName: 1 });

// Create and export the model
const Technology = mongoose.model('Technology', technologySchema);
module.exports = Technology;
