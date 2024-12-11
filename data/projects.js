const { Router } = require("express");
const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
    {
 
      "project_name": "Modern Living Room",
      "client_name": "John Bryant",
      "budget": 5000,
      "status": "In Progress",
      "project_type": "Residential"
    },
    {
      "project_name": "Corporate Office",
      "client_name": "Jennifer Smith",
      "budget": 10000,
      "status": "Planning",
      "project_type": "Commercial"
    }
)

projectsSchema.index({ status: 1 });

module.exports = mongoose.model("Projects", projectsSchema);
  