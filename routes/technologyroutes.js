const express = require('express');
const router = express.Router();
const Technology = require('../models/Technology');


router.get('/technology', async (req, res) => {
    try {
      const technology = await Technology.find();
      res.json(technology);
    } catch (error) {
      res.status(500).json({ message: "Error fetching technology." });
    }
  });
  
  router.post('/technology', async (req, res) => {
    try {
      const newTechnology = new Technology(req.body);
      await newTechnology.save();
      res.status(201).json({ message: "Technology added successfully!", newTechnology });
    } catch (error) {
      res.status(500).json({ message: "Error adding technology." });
    }
  });
  
  router.put('/technology/:id', async (req, res) => {
    try {
      const updatedTechnology = await Technology.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedTechnology) {
        res.status(200).json({ message: "Technology updated successfully!", updatedTechnology });
      } else {
        res.status(404).json({ message: "Technology not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating technology." });
    }
  });
  
  router.delete('/technology/:id', async (req, res) => {
    try {
      const deletedTechnology = await Technology.findByIdAndDelete(req.params.id);
      if (deletedTechnology) {
        res.status(200).json({ message: "Technology deleted successfully!" });
      } else {
        res.status(404).json({ message: "Technology not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting technology." });
    }
  });


module.exports = router;