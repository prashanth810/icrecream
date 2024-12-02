const express = require("express");
const { addtocart, removefromcart, getcart } = require("../controllers/Cartcontrol");
const authMiddleware = require("../middleware/Authmiddleware");

const cartRoute = express.Router();

cartRoute.post("/add", authMiddleware, addtocart);
cartRoute.post("/remove", authMiddleware, removefromcart);
cartRoute.post("/list", authMiddleware, getcart);

module.exports = cartRoute;
