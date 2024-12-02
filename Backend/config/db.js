const mongoose = require("mongoose");
require("dotenv").config();

const mongo_url = process.env.mongo_url;

const connectDB = async () => {
    await mongoose.connect(mongo_url)
        .then(() => console.log("Ice crem db connected 😀😀"))
        .catch((error) => console.log("Failed 😢😢"));
}

module.exports = connectDB;