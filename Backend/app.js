const paymenyrouter = require("./routes/Paymentroute")
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/Userroutes");
const cartRoute = require("./routes/Cartroute");
const connectDB = require("./config/db");
const iceRoute = require("./routes/Icecremroutes");
dotenv.config();

const app = express();

const port = process.env.PORT || 8020;

app.use(express.json());
app.use(cors());

// database connection 
connectDB();

// user router end point 
app.use("/api/user", userRouter);
app.use("/api/payment", paymenyrouter);

// product route end point 

app.use("/api/food", iceRoute);

// cart route end point 
app.use("/api/cart", cartRoute);

// payment route  

app.use('/api/payment', paymenyrouter)


app.get("/", (req, res) => {
    res.send("ice - cream")
})

app.listen(port, (req, res) => {
    console.log('ice cream connected !!');
})