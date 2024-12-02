const mongoose = require("mongoose");

const userschems = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    cartData: {
        type: Object,
        default: {},
    },
}, { minimize: false });


const userModel = mongoose.model("user", userschems);
module.exports = userModel;


