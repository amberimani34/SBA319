const express = require("express");
const Furniture = require("../data/furniture"); 

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const furniture = await Furniture.find();
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST 
router.post("/", async (req, res) => {
  try {
    const furniture = new Furniture(req.body);
    await furniture.save();
    res.status(201).json(furniture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const furniture = await Furniture.findById(req.params.id);
    if (!furniture) return res.status(404).json({ message: "Cannot Build Furniture" });
    res.status(200).json(furniture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedFurniture = await Furniture.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFurniture)
      return res.status(404).json({ message: "Cannot Build Furniture" });
    res.status(200).json(updatedFurniture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE Furniture
router.delete("/:id", async (req, res) => {
  try {
    const removedFurniture = await Furniture.findByIdAndDelete(req.params.id);
    if (!removedFurniture)
      return res.status(404).json({ message: "Cannot Build Furniture" });
    res.status(200).json({ message: "Able to remove furniture!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;