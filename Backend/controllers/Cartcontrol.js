const userModel = require("../models/Usermodel");

const addtocart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        }
        else {
            cartData[req.body.itemId] += 1;
        }

        if (!userData) {
            return res.json({ success: false, message: "User not found !" });
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "item added !" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "error added !" });
    }

}

const removefromcart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = userData.cartData;

        if (cartData[req.body.itemId] > 1) {
            cartData[req.body.itemId] -= 1;
        } else {
            delete cartData[req.body.itemId]; // Remove item if count is 0
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Item removed!" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Server error!" });
    }
};

const getcart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData });
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "server error" });
    }
}

module.exports = {
    addtocart,
    removefromcart,
    getcart,
}