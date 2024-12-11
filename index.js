const { MongoClient } = require('mongodb');
const fs = require('fs');

async function importData() {
  const client = new MongoClient('mongodb://localhost:27017');
  await client.connect();
  const db = client.db('interior_design');

  // Read the JSON file
  const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));
  const furniture = JSON.parse(fs.readFileSync('furniture.json', 'utf8'));
  const rooms = JSON.parse(fs.readFileSync('rooms.json', 'utf8'));

  // Insert data into the 'projects' collection
  await db.collection('projects').insertMany(projects);

  console.log('Data Imported');
  await client.close();
}

importData().catch(console.error);
