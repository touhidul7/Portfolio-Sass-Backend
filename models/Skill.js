const mongoose = require('mongoose');

// Define the Info schema
const skillSchema = new mongoose.Schema({
      name: String,
      skillLevel: String,
      description: String,
});

// Indexes for better performance (optional)
skillSchema.index({ skilltName: 1 });

// Create and export the model
const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;
