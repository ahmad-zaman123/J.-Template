const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    image: { type: String },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customer: {
      email: { type: String, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, required: true },
    },
    shippingAddress: {
      country: { type: String, default: "Pakistan" },
      address: { type: String, required: true },
    },
    items: { type: [orderItemSchema], required: true, validate: (v) => v.length > 0 },
    paymentMethod: { type: String, enum: ["safepay", "cod"], default: "cod" },
    subtotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true },
    status: { type: String, enum: ["pending", "pending_payment", "paid", "shipped", "delivered", "cancelled", "failed", "refunded", "disputed"], default: "pending" },
    safepayTracker: { type: String, index: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
