const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');


router.get('/blogs', async (req, res) => {
    try {
      const blog = await Blog.find();
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog." });
    }
  });
  
  router.post('/blogs', async (req, res) => {
    try {
      const newBlog = new Blog(req.body);
      await newBlog.save();
      res.status(201).json({ message: "Blog added successfully!", newBlog });
    } catch (error) {
      res.status(500).json({ message: "Error adding Blog." });
    }
  });
  
  router.put('/blogs/:id', async (req, res) => {
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (updatedBlog) {
        res.status(200).json({ message: "Blog updated successfully!", updatedBlog });
      } else {
        res.status(404).json({ message: "Blog not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error updating blog." });
    }
  });
  
  router.delete('/blogs/:id', async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
      if (deletedBlog) {
        res.status(200).json({ message: "Blog deleted successfully!" });
      } else {
        res.status(404).json({ message: "Blog not found." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting blog." });
    }
  });


module.exports = router;