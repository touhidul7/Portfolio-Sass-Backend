const mongoose = require('mongoose');

// Define the Info schema
const projectSchema = new mongoose.Schema({
      projectName: String,
      shortname: String,
      technologies: String,
      description: String,
      imageLink: String,
      projectURL: String,
});

// Indexes for better performance (optional)
projectSchema.index({ projectName: 1 });

// Create and export the model
const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
