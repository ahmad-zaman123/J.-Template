require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const products = require("./data/products");

const run = async () => {
  try {
    await connectDB();
    const destroyOnly = process.argv.includes("--destroy");

    await Product.deleteMany();
    console.log("Existing products cleared");

    if (!destroyOnly) {
      const inserted = await Product.insertMany(products);
      console.log(`Inserted ${inserted.length} products`);
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Seeder failed:", err);
    process.exit(1);
  }
};

run();
