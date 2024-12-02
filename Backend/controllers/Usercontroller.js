const userModel = require("../models/Usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("validator");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // checking if user alredy exist or not ??
        const exist = await userModel.findOne({ email });
        if (exist) {
            return res.status(409).json({ success: false, message: "User Already Existed 😊😊" })
        }

        // checking valid email or not ??
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email 😁😁" });
        }

        if (password.length < 6) {
            return res.json({ success: false, message: "enter strong password 😊😊" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        // checking new user are not ??

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedpassword,
        });
        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({ success: true, token, message: "Register success 😀😀", data: { name: user.name } });

    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Register failed 😔😔" })
    }
}


const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not available 😔😔" });
        }

        const passmatch = await bcrypt.compare(password, user.password);
        if (!passmatch) {
            return res.status(401).json({ success: false, message: "Invalid email & password 😔😔 " });
        }

        const token = createToken(user._id, "30d");
        res.status(201).json({ success: true, token, data: { name: user.name }, message: "login success 😊😊" });

    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "error" });

    }
}

module.exports = {
    register,
    login,
}