const Razorpay = require("razorpay");
const { PRICES, calculateDelivery } = require("./_catalog");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return res.status(500).json({ error: "Payment gateway is not configured." });
  }

  try {
    const { items, pincode } = req.body || {};

    if (!Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "Cart is empty." });
    }
    if (!/^\d{6}$/.test(String(pincode || ""))) {
      return res.status(400).json({ error: "Invalid pincode." });
    }

    // Recompute the subtotal on the server from trusted prices.
    let subtotal = 0;
    for (const item of items) {
      const price = PRICES[item && item.id];
      const quantity = parseInt(item && item.quantity, 10);
      if (!price || !Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
        return res.status(400).json({ error: "Invalid item in cart." });
      }
      subtotal += price * quantity;
    }

    let deliveryCharge;
    try {
      deliveryCharge = await calculateDelivery(String(pincode));
    } catch (e) {
      return res.status(400).json({ error: "Could not verify pincode. Please check it and try again." });
    }
    if (deliveryCharge === null) {
      return res.status(400).json({ error: "Could not determine delivery charge." });
    }

    const total = subtotal + deliveryCharge;
    const amount = Math.round(total * 100); // paise
    if (amount < 100) {
      return res.status(400).json({ error: "Minimum order amount is ₹1." });
    }

    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `PR${Date.now()}`
    });

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id: keyId, // public key, safe for the browser
      total,
      deliveryCharge
    });
  } catch (err) {
    console.error("create-order error:", err);
    if (err && err.statusCode === 401) {
      return res.status(401).json({ error: "Payment gateway authentication failed." });
    }
    return res.status(500).json({ error: "Could not create payment order. Please try again." });
  }
};
