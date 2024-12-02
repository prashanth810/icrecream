const express = require("express");
const Payment = require("../controllers/Paymentcontroller");
const Razorpay = require("razorpay");

require("dotenv").config();

const paymenyrouter = express.Router();
const razorpay = new Razorpay({
    key_id: process.env.RAZETPAY_API_KEY,
    key_secret: process.env.RAZERPAY_API_SECRET,
})


paymenyrouter.post('/checkout', async (req, res) => {
    const { ammount, currency } = req.body;

    if (!ammount || !currency) {
        return res.json({ success: false, message: "Invalid request !!" });
    }

    const options = {
        ammount,
        currency,
        receipt: `receipt_${Math.random() * 10 ** 6}`,
        payment_capture: 1,
    }

    try {
        const order = await razorpay.orders.create(options);
        res.json({ success: true, order_id: order.id, ammount: order.ammount, currency: order.currency });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "error creating order !!" });
    }
})

module.exports = paymenyrouter;