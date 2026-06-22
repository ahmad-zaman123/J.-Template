const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const getProducts = asyncHandler(async (req, res) => {
  const { category, featured, q } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (featured) filter.featured = featured === "true";
  if (q) filter.name = { $regex: q, $options: "i" };

  const products = await Product.find(filter).sort({ createdAt: -1 });
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) throw new ApiError(404, "Product not found");
  res.json(product);
});

module.exports = { getProducts, getProductById };
