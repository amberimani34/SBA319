const express = require("express");
const Rooms = require("../data/rooms");

const router = express.Router();

// GET
router.get("/", async (req, res) => {
  try {
    const rooms = await Rooms.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET by ID
router.get("/:id", async (req, res) => {
  try {
    const rooms = await Rooms.findById(req.params.id);
    if (!rooms) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;