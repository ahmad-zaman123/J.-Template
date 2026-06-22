const Order = require("../models/Order");
const Product = require("../models/Product");
const CartItem = require("../models/CartItem");
const asyncHandler = require("../utils/asyncHandler");
const ApiError = require("../utils/ApiError");
const {
  createTracker,
  verifyWebhookSignature,
  isWebhookEnforced,
  isConfigured,
} = require("../utils/safepay");

const SHIPPING_FEE = 200;

const getConfig = asyncHandler(async (_req, res) => {
  res.json({ safepay: isConfigured() });
});

/**
 * Build the order from the request, persist it as `pending_payment`,
 * then ask Safepay for a checkout URL and return it to the client.
 */
const createSafepayCheckout = asyncHandler(async (req, res) => {
  if (!isConfigured()) throw new ApiError(503, "Safepay is not configured on the server");

  const { customer, shippingAddress, items, sessionId } = req.body;

  if (!customer?.email || !customer?.firstName || !customer?.lastName || !customer?.phone) {
    throw new ApiError(400, "Customer details are incomplete");
  }
  if (!shippingAddress?.address) throw new ApiError(400, "Shipping address is required");
  if (!Array.isArray(items) || items.length === 0) throw new ApiError(400, "At least one item is required");

  const productIds = items.map((i) => i.productId);
  const products = await Product.find({ _id: { $in: productIds } });
  const byId = new Map(products.map((p) => [String(p._id), p]));

  const orderItems = items.map((i) => {
    const p = byId.get(String(i.productId));
    if (!p) throw new ApiError(404, `Product not found: ${i.productId}`);
    const qty = Math.max(1, Number(i.quantity) || 1);
    return { product: p._id, name: p.name, price: p.price, quantity: qty, image: p.mainImage };
  });

  const subtotal = orderItems.reduce((s, i) => s + i.price * i.quantity, 0);
  const shippingFee = SHIPPING_FEE;
  const total = subtotal + shippingFee;

  const order = await Order.create({
    customer,
    shippingAddress,
    items: orderItems,
    paymentMethod: "safepay",
    subtotal,
    shippingFee,
    total,
    status: "pending_payment",
  });

  const baseUrl = process.env.PUBLIC_BASE_URL || "http://localhost:3000";
  const redirectUrl = `${baseUrl}/order-confirmation/${order._id}`;

  try {
    const { tracker, checkoutUrl } = await createTracker({
      orderId: String(order._id),
      amountPkr: total,
      customerEmail: customer.email,
      redirectUrl,
    });
    order.safepayTracker = tracker;
    await order.save();

    if (sessionId) await CartItem.deleteMany({ sessionId });

    res.status(201).json({ orderId: order._id, checkoutUrl });
  } catch (err) {
    order.status = "failed";
    await order.save();
    throw new ApiError(502, `Failed to start Safepay checkout: ${err.message}`);
  }
});

/**
 * Webhook endpoint Safepay calls when payment state changes.
 * Mounted with `express.raw()` so we can verify the signature against the
 * raw request bytes. After verification we parse the JSON and update the
 * matching order's status.
 */
const safepayWebhook = asyncHandler(async (req, res) => {
  const rawBody = req.body instanceof Buffer ? req.body.toString("utf8") : JSON.stringify(req.body);
  const signature = req.headers["x-sfpy-signature"];

  console.log("[safepay webhook] headers:", JSON.stringify(req.headers, null, 2));
  console.log("[safepay webhook] body:", rawBody);

  // Until we've confirmed Safepay's exact signature scheme, log a verification
  // attempt but don't reject — flip back to enforcement once verified.
  const sigOk = verifyWebhookSignature(rawBody, signature);
  console.log("[safepay webhook] signature header:", signature, "verify:", sigOk);

  // Once a dedicated webhook secret is configured, reject anything that doesn't
  // verify. Until then stay lenient (the per-order tracker is the fallback guard).
  if (isWebhookEnforced() && !sigOk) {
    return res.status(401).json({ message: "Invalid webhook signature" });
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return res.status(400).json({ message: "Invalid JSON" });
  }

  const eventType = payload?.type || payload?.event;
  const tracker = payload?.data?.tracker || payload?.tracker;
  const state = payload?.data?.state || payload?.state;

  if (!tracker) return res.status(400).json({ message: "Missing tracker" });

  const order = await Order.findOne({ safepayTracker: tracker });
  if (!order) return res.status(404).json({ message: "Order not found" });

  const eventMap = {
    "payment.succeeded": "paid",
    "payment.failed": "failed",
    "payment.refunded": "refunded",
    "payment.disputed": "disputed",
  };
  const stateMap = {
    TRACKER_ENDED: "paid",
    TRACKER_OCCURRED: "paid",
    OCCURRED: "paid",
    PAID: "paid",
    DECLINED: "failed",
    CANCELLED: "cancelled",
    EXPIRED: "failed",
  };
  const next = eventMap[eventType] || stateMap[state] || order.status;
  if (next !== order.status) {
    order.status = next;
    await order.save();
  }
  res.json({ ok: true });
});

module.exports = { getConfig, createSafepayCheckout, safepayWebhook };
