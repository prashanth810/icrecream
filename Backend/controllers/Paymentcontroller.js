const { instance } = require("../app");

const Payment = async (req, res) => {
    const options = {
        ammount: 50000,
        Currency: "INR",
        receipt: "order_recept_11"
    };
    const order = await instance.order.create(options);
    console.log(order);
    res.json({ success: true })

}

module.exports = Payment;