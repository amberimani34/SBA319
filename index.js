require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const FurnitureRoutes = require("./routes/FurnitureRoutes");
const ProjectsRoutes = require("./routes/ProjectsRoutes");
const RoomsRoutes = require("./routes/RoomsRoutes");
const app = express();

const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose
  .connect(process.env.MONGO_URI)
 
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => res.send("Homebase for API"));


app.use("/furniture", FurnitureRoutes);
app.use("/projects", ProjectsRoutes);
app.use("/rooms", RoomsRoutes);



async function insertSampleData() {
  try {
    const Furniture = require("./data/furniture");
    const Projects = require("./data/projects");
    const Rooms = require("./data/rooms");

    
    await Furniture.deleteMany({});
    await Projects.deleteMany({});
    await Rooms.deleteMany({});

    await Furniture.create([
      { name: "Nightstand", material: "Wood", color: "Black & Brown", price: 50 , brand: "Amazon" },
    ]);
    await Projects.create([{ project_name: "Master Closet", client_name: "Zoey Downs", budget: 850, status: "In Progress", project_type: "Residential" }]);

    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
  }
}

mongoose.connection.once("open", insertSampleData);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));