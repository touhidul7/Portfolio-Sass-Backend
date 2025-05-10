const mongoose = require('mongoose');

// Define the Info schema
const experienceSchema = new mongoose.Schema({
    companyName: String,
    jobTitle: String,
    description: String,
    location: String,
    range: String,
    url:String,
});

// Indexes for better performance (optional)
experienceSchema.index({ experienceName: 1 });

// Create and export the model
const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
