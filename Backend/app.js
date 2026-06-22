require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const { safepayWebhook } = require("./controllers/paymentController");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "*" }));

// Safepay webhook must read the raw body for HMAC verification, so it is
// mounted before express.json().
app.post("/api/payments/safepay/webhook", express.raw({ type: "*/*" }), async (req, res, next) => {
  try {
    await connectDB();
    return safepayWebhook(req, res, next);
  } catch (err) {
    next(err);
  }
});

app.use(express.json());
if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Lazy-connect on first request — works for both local and serverless.
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
