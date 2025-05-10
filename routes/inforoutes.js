const express = require('express');
const router = express.Router();
const Info = require('../models/Info');

// GET: Fetch all info
router.get('/info', async (req, res) => {
    try {
        const info = await Info.find();
        res.json(info);
    } catch (error) {
        res.status(500).json({ message: "Error fetching info." });
    }
});



// POST: Add new info
router.post('/info', async (req, res) => {
    try {
        const newInfo = new Info(req.body);
        await newInfo.save();
        res.status(201).json({ message: "Info added successfully!", newInfo });
    } catch (error) {
        res.status(500).json({ message: "Error adding info." });
    }
});


// PUT: Update info by ID
router.put('/info/:id', async (req, res) => {
    try {
        const updatedInfo = await Info.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedInfo) {
            res.status(200).json({ message: "Info updated successfully!", updatedInfo });
        } else {
            res.status(404).json({ message: "Info not found." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating info." });
    }
});


// DELETE: Remove info by ID
router.delete('/info/:id', async (req, res) => {
    try {
        const deletedInfo = await Info.findByIdAndDelete(req.params.id);
        if (deletedInfo) {
            res.status(200).json({ message: "Info deleted successfully!" });
        } else {
            res.status(404).json({ message: "Info not found." });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting info." });
    }
});

module.exports = router;