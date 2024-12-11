const { Router } = require("express");
const mongoose = require("mongoose");


const roomsSchema = new mongoose.Schema({
  project_id: { type: Number, required: true },
  room_name: { type: String, required: true },
  function: { type: String, required: true },
  design_style: { type: String, required: true },
  furnitureCount: { type: Number, required: true }
});


roomsSchema.index({ room_name: 1 }); 


const Room = mongoose.model("Rooms", roomsSchema);


const roomData = [
  {
    project_id: 1,
    room_name: "Living Room",
    function: "Socializing",
    design_style: "Modern",
    furnitureCount: 5
  },
  {
    project_id: 1,
    room_name: "Kitchen",
    function: "Cooking",
    design_style: "Contemporary",
    furnitureCount: 8
  },
  {
    project_id: 2,
    room_name: "Office",
    function: "Work",
    design_style: "Minimalist",
    furnitureCount: 4
  }
];


Room.insertMany(roomData)
  .then((docs) => {
    console.log("Rooms inserted:", docs);
  })
  .catch((err) => {
    console.error("Error inserting rooms:", err);
  });


module.exports = Room;