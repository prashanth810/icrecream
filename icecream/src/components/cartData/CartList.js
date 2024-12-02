import React, { useContext, useEffect, useState } from 'react';
import { Foodcontext } from '../context/Foodcontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const CartList = ({ setOpencart }) => {
    const { cartitems, food_list, removefromcart, addtocart } = useContext(Foodcontext);
    const [totalPrice, setTotalprice] = useState(0);
    const [counts, setCounts] = useState(0);

    useEffect(() => {
        const calculatedprices = food_list.reduce((acc, item) => {
            const quantity = cartitems[item._id] || 0;
            return acc + (item.price * quantity);
        }, 0);
        setTotalprice(calculatedprices);
    }, [food_list, cartitems]);



    const [responseid, setResponseid] = useState("")
    const [responsestatus, setResponsestatus] = useState([]);

    const loadscript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const token = localStorage.getItem("token");
    const createRazorpayOrder = async (amount) => {
        if (!token) {
            alert("Please login to place order");
        }
        else {
            try {
                const data = JSON.stringify({
                    amount: amount * 100, // Amount in paise
                    currency: "INR",
                });

                const config = {
                    method: "post",
                    url: "http://localhost:8020/api/payment/checkout",
                    headers: { "Content-Type": "application/json" },
                    data: data,
                };

                const response = await axios.request(config);
                console.log("Order Created:", response.data);
                handleRazorpayScreen(response.data.id, amount); // Pass the order ID
            }
            catch (error) {
                console.error("Error creating Razorpay order:", error);
            }
        }
    };

    const handleRazorpayScreen = async (order_id, amount) => {
        // Load Razorpay script dynamically
        const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Failed to load Razorpay script. Please check your internet connection.");
            return;
        }

        const options = {
            key: "rzp_test_5vRU1XbSMA3VAg", // Your Razorpay Test Key
            amount: amount * 100, // Amount in paise (e.g., 100 INR = 10000 paise)
            currency: "INR",
            name: "Ice cream",
            description: "Test Transaction",
            image: "https://images.pexels.com/photos/3631/summer-dessert-sweet-ice-cream.jpg?cs=srgb&dl=pexels-jeshoots-3631.jpg&fm=jpg",
            order_id: order_id, // Order ID from backend
            handler: function (response) {
                console.log("Payment successful:", response);
                setResponseid(response.razorpay_payment_id); // Correct ID
            },
            prefill: {
                name: "",
                email: "customer@example.com",
                contact: "",
            },
            theme: {
                color: "#3399cc",
            },
            // Razorpay detects and shows UPI automatically for eligible users.
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    return (
        <div className="flex flex-col h-full cartData_items_list">
            {/* Cart items scrollable area */}
            <div className="flex-grow overflow-y-auto pb-24 px-4 cartData_items">
                {food_list.length > 0 ? (
                    food_list.filter((item) => cartitems[item._id]).map((val, i) => (
                        <>
                            <div key={val.id} className="flex py-4 gap-2 rounded-xl px-2 cursor-pointer">
                                <div>
                                    <img src={val.image} className="w-[150px] h-full rounded object-cover" alt={val.title} />
                                </div>
                                <div className="px-3">
                                    <p className="mb-1 capitalize md:text-[20px] text-[18px] subheading">{val.name}</p>
                                    <p className='my-1'>
                                        Price: <span className='text-green-500 font-semibold text-[18px]'> ${val.price} </span>
                                    </p>
                                    <p className="mb-2 text-[13px]"> Qty: {cartitems[val._id]} /Kg</p>

                                    <p> Flavor : <span className='text-green-500 capitalize'>{val.category}</span></p>

                                    <div className="flex mt-3 border border-gray-500 rounded-lg w-[104px]">
                                        <p className="border-r border-gray-500 py-1 px-[8px] text-[14px] flex justify-center items-center cursor-pointer hover:text-green-500 duration-500" onClick={() => { addtocart(val._id); setCounts((prev) => prev + 1); }}> + </p>
                                        <p className="border-r border-gray-500 py-1 px-[9px] text-[11px] flex justify-center items-center cursor-pointer">{cartitems[val._id]} /Kg</p>
                                        <p className="py-1 px-[6px] text-[18px] cursor-pointer hover:text-red-500 duration-500" onClick={() => removefromcart(val._id)}> - </p>
                                    </div>
                                </div>

                            </div>

                            <div className='flex justify-between items-center bg-transparent border-2 border-dashed border-gray-400  font-semibold p-2 rounded mx-[10px]'>
                                <div className='px-2'>
                                    <p className='cursor-pointer md:text-[14px] text-[12px]'>Grab with 10% discount</p>
                                </div>
                                <div className='bg-green-400 py-1 px-2 rounded'>
                                    <p
                                        className='text-black cursor-pointer md:text-[14px] text-[12px]'
                                    >
                                        {counts[i] ? 'Remove Coupon' : 'Use This Coupon'}
                                    </p>
                                </div>
                            </div>
                        </>


                    ))
                ) : (
                    <div className='flex flex-col gap-3 justify-center items-center w-full'>
                        <p className='text-green-200 font-light text-xl py-5'> Your Cart is Empty! <FontAwesomeIcon icon={faCartPlus} className='text-2xl' /> </p>
                        {/* Buttons */}
                        {['VEGETABLES', 'RAICES', 'OILS', 'FRUITS', 'PULSES'].map((category) => (
                            <button key={category} className='border border-gray-300 w-full py-[11px] hover:bg-green-300 transition-all duration-500' onClick={() => window.scrollTo(0, 0)}>
                                {category}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Fixed footer section for Total and Checkout */}
            <div className="bg-gray-300 py-3 font-semibold text-black px-4 border-t border-gray-300 mb-[5.7rem]">
                <div className="flex justify-between items-center mb-3">
                    <p>TOTAL</p>
                    <p>${Math.round(totalPrice)}.00</p>
                </div>
                <div className="text-center">
                    <button
                        className="bg-black text-white uppercase tracking-[5px] px-4 py-2 mb-3 transition-all duration-500"
                        onClick={() => createRazorpayOrder(totalPrice)}
                    >
                        Proceed To Payment
                    </button>
                    <p
                        className="cursor-pointer"
                        onClick={() => { setOpencart(false); window.scrollTo(0, 0) }}
                    >
                        <a href='#shop'> Continue Shopping </a> <FontAwesomeIcon icon={faArrowRight} />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartList;
