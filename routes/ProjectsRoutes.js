const express = require("express");
const Projects = require("../data/projects"); 

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const projects = await Projects.findById(req.params.id);
    if (!projects) return res.status(404).json({ message: "No Project Available" });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;