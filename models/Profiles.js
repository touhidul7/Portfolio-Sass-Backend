const mongoose = require('mongoose');

// Define the Info schema
const profilesSchema = new mongoose.Schema({
      Fiverr: String,
      Facebook: String,
      Twitter: String,
      Instagram: String,
      Medium: String,
      Quora: String,
      Pinterest: String,
      Github: String,
      Linkedin: String,
});

// Indexes for better performance (optional)
profilesSchema.index({ profilesName: 1 });

// Create and export the model
const Profiles = mongoose.model('Profiles', profilesSchema);
module.exports = Profiles;
