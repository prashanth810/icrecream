const foodModel = require("../models/Icecreammodel")

const addFood = async (req, res) => {
    const food = new foodModel({
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description,
        category: req.body.category,
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added !" });
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: "Faild to add !" })
    }

}


// Remove Food
const removeFood = async (req, res) => {
    try {
        const { itemId } = req.body;

        const food = await foodModel.findByIdAndDelete(itemId);
        res.json({ success: true, message: "Food removed successfully !!" });

        if (!food) {
            return res.status(404).json({ success: false, message: "Food items not available !!" });
        }
    }

    catch (error) {
        console.log(error);
        res.json({ success: false, message: 'error' });
    }
}


const getfoodList = async (req, res) => {
    try {
        const food = await foodModel.find({});
        res.json({ success: true, data: food });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" });
    }
}

module.exports = {
    addFood,
    removeFood,
    getfoodList,
}