const { Router } = require("express");
const mongoose = require("mongoose");

const roomsSchema = new mongoose.Schema(
    {
      "project_id": 1,
      "room_name": "Living Room",
      "function": "Socializing",
      "design_style": "Modern",
      "furniture count": 5
    },
    {
      "project_id": 1,
      "room_name": "Kitchen",
      "function": "Cooking",
      "design_style": "Contemporary",
      "furniture count": 8
    },
    {
      "project_id": 2,
      "room_name": "Office",
      "function": "Work",
      "design_style": "Minimalist",
      "furniture": 4
    }
  )

  roomsSchema.index({ size: 1 });

module.exports = mongoose.model("Rooms", roomsSchema);
  