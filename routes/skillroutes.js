const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');


router.get('/skill', async (req, res) => {
    try {
      const skill = await Skill.find();
      res.json(skill);
    } catch (error) {
      res.status(500).json({ message: "Error fetching skill." });
    }
  });
  
  router.post('/skill', async (req, res) => {
    try {
      const newSkill = new Skill(req.body);
      await newSkill.save();
      res.status(201).json({ message: "Skill added successfully!", newSkill });
    } catch (error) {
      res.status(500).json({ message: "Error adding Skill." });
    }
  });
  
  router.put('/skill/:id', async (req, res) => {
    try {
      const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedSkill) {
        res.status(200).json({ message: "Skill updated successfully!", updatedSkill });
      } else {
        res.status(404).json({ message: "Skill not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating skill." });
    }
  });
  
  router.delete('/skill/:id', async (req, res) => {
    try {
      const deletedSkill = await Skill.findByIdAndDelete(req.params.id);
      if (deletedSkill) {
        res.status(200).json({ message: "Skill deleted successfully!" });
      } else {
        res.status(404).json({ message: "Skill not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting skill." });
    }
  });


module.exports = router;