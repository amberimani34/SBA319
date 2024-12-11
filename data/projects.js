const { Router } = require("express");
const mongoose = require("mongoose");


const projectsSchema = new mongoose.Schema({
  project_name: { type: String, required: true },
  client_name: { type: String, required: true },
  budget: { type: Number, required: true },
  status: { type: String, required: true },
  project_type: { type: String, required: true }
});


projectsSchema.index({ status: 1 });


const Project = mongoose.model("Projects", projectsSchema);


const projectData = [
  {
    project_name: "Modern Living Room",
    client_name: "John Bryant",
    budget: 5000,
    status: "In Progress",
    project_type: "Residential"
  },
  {
    project_name: "Corporate Office",
    client_name: "Jennifer Smith",
    budget: 10000,
    status: "Planning",
    project_type: "Commercial"
  }
];


Project.insertMany(projectData)
  .then((docs) => {
    console.log("Projects inserted:", docs);
  })
  .catch((err) => {
    console.error("Error inserting projects:", err);
  });


module.exports = Project;