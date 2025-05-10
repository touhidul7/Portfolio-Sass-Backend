const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.get('/project', async (req, res) => {
    try {
      const project = await Project.find();
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Error fetching project." });
    }
  });
  
  router.post('/project', async (req, res) => {
    try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).json({ message: "Project added successfully!", newProject });
    } catch (error) {
      res.status(500).json({ message: "Error adding Project." });
    }
  });
  
  router.put('/project/:id', async (req, res) => {
    try {
      const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedProject) {
        res.status(200).json({ message: "Project updated successfully!", updatedProject });
      } else {
        res.status(404).json({ message: "Project not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating project." });
    }
  });
  
  router.delete('/project/:id', async (req, res) => {
    try {
      const deletedProject = await Project.findByIdAndDelete(req.params.id);
      if (deletedProject) {
        res.status(200).json({ message: "Project deleted successfully!" });
      } else {
        res.status(404).json({ message: "Project not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting project." });
    }
  });


module.exports = router;