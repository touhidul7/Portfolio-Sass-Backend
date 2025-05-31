const express = require('express');
const router = express.Router();
const Profiles = require('../models/profiles');

// GET: Fetch all info
router.get('/profiles', async (req, res) => {
    try {
        const profiles = await Profiles.find();
        res.json(profiles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profiles." });
    }
});



// POST: Add new info
router.post('/profiles', async (req, res) => {
    try {
        const newProfiles = new Profiles(req.body);
        await newProfiles.save();
        res.status(201).json({ message: "Profiles added successfully!", newProfiles });
    } catch (error) {
        res.status(500).json({ message: "Error adding info." });
    }
});


// PUT: Update info by ID
router.put('/profiles/:id', async (req, res) => {
    try {
        const updatedProfiles = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedProfiles) {
            res.status(200).json({ message: "Profiles updated successfully!", updatedProfiles });
        } else {
            res.status(404).json({ message: "Profiles not found." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating profiles." });
    }
});


// DELETE: Remove info by ID
router.delete('/profiles/:id', async (req, res) => {
    try {
        const deletedProfiles = await Profiles.findByIdAndDelete(req.params.id);
        if (deletedProfiles) {
            res.status(200).json({ message: "Profiles deleted successfully!" });
        } else {
            res.status(404).json({ message: "Profiles not found." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting Profiles." });
    }
});

module.exports = router;