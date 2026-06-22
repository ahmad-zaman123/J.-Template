const CartItem = require("../models/CartItem");
const Product = require("../models/Product");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");

const getSessionId = (req) => {
  const sid = req.header("x-session-id") || req.query.sessionId;
  if (!sid) throw new ApiError(400, "Missing x-session-id header");
  return sid;
};

const getCart = asyncHandler(async (req, res) => {
  const sessionId = getSessionId(req);
  const items = await CartItem.find({ sessionId }).populate("product");
  res.json(items);
});

const addToCart = asyncHandler(async (req, res) => {
  const sessionId = getSessionId(req);
  const { productId, quantity = 1 } = req.body;
  if (!productId) throw new ApiError(400, "productId is required");

  const product = await Product.findById(productId);
  if (!product) throw new ApiError(404, "Product not found");

  const item = await CartItem.findOneAndUpdate(
    { sessionId, product: productId },
    { $inc: { quantity }, $setOnInsert: { sessionId, product: productId } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  ).populate("product");

  res.status(201).json(item);
});

const removeFromCart = asyncHandler(async (req, res) => {
  const sessionId = getSessionId(req);
  const removed = await CartItem.findOneAndDelete({ sessionId, _id: req.params.id });
  if (!removed) throw new ApiError(404, "Cart item not found");
  res.json({ message: "Removed", id: req.params.id });
});

module.exports = { getCart, addToCart, removeFromCart };
