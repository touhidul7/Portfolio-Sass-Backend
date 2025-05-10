const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');


router.get('/experience', async (req, res) => {
    try {
      const experience = await Experience.find();
      res.json(experience);
    } catch (error) {
      res.status(500).json({ message: "Error fetching experience." });
    }
  });
  
  router.post('/experience', async (req, res) => {
    try {
      const newExperience = new Experience(req.body);
      await newExperience.save();
      res.status(201).json({ message: "Experience added successfully!", newExperience });
    } catch (error) {
      res.status(500).json({ message: "Error adding experience." });
    }
  });
  
  router.put('/experience/:id', async (req, res) => {
    try {
      const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedExperience) {
        res.status(200).json({ message: "Experience updated successfully!", updatedExperience });
      } else {
        res.status(404).json({ message: "Experience not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating experience." });
    }
  });
  
  router.delete('/experience/:id', async (req, res) => {
    try {
      const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
      if (deletedExperience) {
        res.status(200).json({ message: "Experience deleted successfully!" });
      } else {
        res.status(404).json({ message: "Experience not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting experience." });
    }
  });


module.exports = router;