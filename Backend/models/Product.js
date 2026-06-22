const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    discount: { type: String },
    mainImage: { type: String, required: true },
    images: [{ type: String }],
    description: { type: String, default: "" },
    inStock: { type: Boolean, default: true },
    size: { type: String },
    category: {
      type: String,
      enum: ["women", "men", "kids", "fragrance", "accessories", "unstitched", "kurti"],
      default: "women",
      index: true,
    },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
