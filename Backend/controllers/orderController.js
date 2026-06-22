const Order = require("../models/Order");
const Product = require("../models/Product");
const CartItem = require("../models/CartItem");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const { fetchPaymentStatus } = require("../utils/safepay");

const SHIPPING_FEE = 200;

// Map Safepay tracker states to our order statuses.
const SAFEPAY_STATE_MAP = {
  TRACKER_ENDED: "paid",
  TRACKER_OCCURRED: "paid",
  OCCURRED: "paid",
  PAID: "paid",
  DECLINED: "failed",
  CANCELLED: "cancelled",
  EXPIRED: "failed",
};

const createOrder = asyncHandler(async (req, res) => {
  const { customer, shippingAddress, items, paymentMethod = "cod", sessionId } = req.body;

  if (!customer?.email || !customer?.firstName || !customer?.lastName || !customer?.phone) {
    throw new ApiError(400, "Customer details are incomplete");
  }
  if (!shippingAddress?.address) throw new ApiError(400, "Shipping address is required");
  if (!Array.isArray(items) || items.length === 0) throw new ApiError(400, "Order must contain at least one item");

  const productIds = items.map((i) => i.productId);
  const products = await Product.find({ _id: { $in: productIds } });
  const byId = new Map(products.map((p) => [String(p._id), p]));

  const orderItems = items.map((i) => {
    const p = byId.get(String(i.productId));
    if (!p) throw new ApiError(404, `Product not found: ${i.productId}`);
    const qty = Math.max(1, Number(i.quantity) || 1);
    return {
      product: p._id,
      name: p.name,
      price: p.price,
      quantity: qty,
      image: p.mainImage,
    };
  });

  const subtotal = orderItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shippingFee = SHIPPING_FEE;
  const total = subtotal + shippingFee;

  const order = await Order.create({
    customer,
    shippingAddress,
    items: orderItems,
    paymentMethod,
    subtotal,
    shippingFee,
    total,
  });

  if (sessionId) {
    await CartItem.deleteMany({ sessionId });
  }

  res.status(201).json(order);
});

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) throw new ApiError(404, "Order not found");

  // Webhook-free verification: if the payment is still pending, ask Safepay
  // directly for the tracker state and update the order. The order-confirmation
  // page polls this endpoint, so each poll re-checks until it resolves.
  if (order.status === "pending_payment" && order.safepayTracker) {
    const state = await fetchPaymentStatus(order.safepayTracker);
    const next = SAFEPAY_STATE_MAP[state];
    if (next && next !== order.status) {
      order.status = next;
      await order.save();
    }
  }

  res.json(order);
});

module.exports = { createOrder, getOrders, getOrderById };
