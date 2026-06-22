const express = require("express");
const { getConfig, createSafepayCheckout } = require("../controllers/paymentController");

const router = express.Router();

router.get("/config", getConfig);
router.post("/safepay/checkout", createSafepayCheckout);

// Note: /safepay/webhook is registered in app.js with express.raw() so the
// HMAC signature can be verified against the unparsed body.

module.exports = router;
