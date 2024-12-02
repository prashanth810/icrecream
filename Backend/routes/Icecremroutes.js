const express = require("express");
const { addFood, removeFood, getfoodList } = require("../controllers/Icecreamcontroler");

const iceRoute = express.Router();

iceRoute.post("/add", addFood);
iceRoute.post("/remove", removeFood);
iceRoute.get("/list", getfoodList);

module.exports = iceRoute;