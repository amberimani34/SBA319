const { Router } = require("express");
const mongoose = require("mongoose");

const furnitureSchema = new mongoose.Schema(

    {
      "name": "Sofa",
      "material": "Leather",
      "color": "Black",
      "price": 1500,
      "brand": "Ikea"
    },
    {
      "name": "Coffee Table",
      "material": "Wood",
      "color": "Dark Brown",
      "price": 350,
      "brand": "Wayfair"
    },
    {
      "name": "Armchair",
      "material": "Fabric",
      "color": "Gray",
      "price": 500,
      "brand": "Ashley Furniture"
    },
    {
      "name": "Dining Table",
      "material": "Wood",
      "color": "Oak",
      "price": 1200,
      "brand": "Crate & Barrel"
    },
    {
      "name": "Dining Chair",
      "material": "Wood",
      "color": "White",
      "price": 150,
      "brand": "West Elm"
    },
    {
      "name": "Office Desk",
      "material": "Metal and Wood",
      "color": "Black",
      "price": 800,
      "brand": "Herman Miller"
    },
    {
      "name": "Office Chair",
      "material": "Mesh",
      "color": "Black",
      "price": 250,
      "brand": "Steelcase"
    }
)

furnitureSchema.index({ name: 1 });

module.exports = mongoose.model("Furniture", furnitureSchema);
  