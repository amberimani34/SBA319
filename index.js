require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const BirdRoutes = require("./routes/BirdRoutes");
const FishRoutes = require("./routes/FishRoutes");
const TreeRoutes = require("./routes/TreeRoutes");
const app = express();

const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


mongoose
  .connect(process.env.MONGO_URI)
 
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.get("/", (req, res) => res.send("Homebase for API"));


app.use("/birds", BirdRoutes);
app.use("/fish", FishRoutes);
app.use("/trees", TreeRoutes);



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
    await Projects.create([{ name: "Clownfish", waterType: "Saltwater", size: 4 }]);
    await Rooms.create([{ name: "Oak", height: 50, age: 100 }]);

    console.log("Sample data inserted successfully");
  } catch (error) {
    console.error("Error inserting sample data:", error.message);
  }
}

mongoose.connection.once("open", insertSampleData);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));