import React, { useContext, useState, useEffect } from 'react';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Foodcontext } from '../context/Foodcontext';
import { Menulist } from '../explore list/Menulist';
import './Food.css';

const Fooddisplay = () => {
    const [randomNumber, setRandomNumber] = useState(0);
    const [category, setCategory] = useState("All");

    const { food_list, addtocart, removefromcart, cartitems } = useContext(Foodcontext);

    // Generate random number for reviews on component mount
    useEffect(() => {
        const random = Math.round(Math.random() * 100) + 1;
        setRandomNumber(random);
    }, []);

    // Filter food items based on selected category
    const filteredFoodList = category === "All" ? food_list : food_list.filter(item => item.category === category);

    return (
        <div id='shop' className='head_home'>
            {/* Shop Section */}
            <section className='md:py-20 py-5'>
                <h2 className='text-4xl text-red-600 text-center subheading mb-14'> Explore Our Flavors </h2>

                <div className='flex justify-evenly overflow-x-scroll listof_items mx-auto md:w-[70%] fadein'>
                    {Menulist.map((val, i) => {
                        return (
                            <div key={i} onClick={() => setCategory((prev) => prev === val.menu_name ? "All" : val.menu_name)} className='mx-2 cursor-pointer'>
                                <img
                                    src={val.menu_image}
                                    className={` md:w-[100px] md:h-[100px] w-[100px] h-[50px] object-cover rounded-full hover:scale-105 duration-500 ${category === val.menu_name ? "border-3 border-red-400 p-[5px]" : ""}`}
                                />

                                <p className='text-center capitalize mt-[10px] text-gray-600 font-semibold'>{val.menu_name.slice(0, 8)}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='border-t border-gray-200 mt-10 mx-auto md:w-[90%]'>
                    <p className='text-3xl text-red-600 md:mt-5 my-4 md:ml-8 text-center subheading'> Top Icecream's near you </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-4'>
                        {filteredFoodList.map((val) => {
                            const itemCount = cartitems[val._id] || 0; // Default count to 0 if item not in cart

                            return (
                                <div className='md:mt-8 relative shadow-lg px-[12px] pt-[2px] pb-[17px] rounded-[10px] cursor-pointer hover:translate-y-[-3px] transition-all duration-300' key={val._id}>
                                    <img src={val.image} className='w-full h-[200px] object-contain hover:scale-105 cursor-pointer duration-500 mb-2 rounded-[10px] fadein' />


                                    {!cartitems[val._id] ? (
                                        <FontAwesomeIcon icon={faPlus} className='absolute top-[20%] right-[8%] bg-yellow-400 p-2 rounded-full cursor-pointer hover:text-white duration-300' onClick={() => addtocart(val._id)} />
                                    ) : (
                                        <div className='absolute top-[20%] right-[8%] flex border border-gray-500 gap-3 px-2 py-1 items-center justify-center bg-white rounded-full'>
                                            <p className='cursor-pointer text-green-800 font-bold' onClick={() => removefromcart(val._id)}> - </p>
                                            <p className='cursor-pointer text-[13px] font-semibold'> {itemCount} </p>
                                            <p className='cursor-pointer text-green-800 font-bold' onClick={() => addtocart(val._id)}> + </p>
                                        </div>
                                    )}

                                    {/* {itemCount === 0 ? ( 
                                    <FontAwesomeIcon icon={faPlus} className='absolute top-[20%] right-[8%] bg-yellow-400 p-2 rounded-full cursor-pointer hover:text-white duration-300' onClick={() => addtocart(val._id)} />
                                ) : ( 
                                    <div className='absolute top-[20%] right-[8%] flex border border-gray-500 gap-3 px-2 py-1 items-center justify-center bg-white rounded-full'>
                                        <p className='cursor-pointer text-green-800 font-bold' onClick={() => removefromcart(val._id)}> - </p>
                                        <p className='cursor-pointer text-[13px] font-semibold'> {itemCount} </p>
                                        <p className='cursor-pointer text-green-800 font-bold' onClick={() => addtocart(val._id)}> + </p>
                                    </div>
                                )} */}

                                    <div className='fadein'>
                                        <h3 className='text-[17px] font-bold text-gray-600 mt-1'>{val.name}</h3>
                                        <div className='mt-1'>
                                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                                            <FontAwesomeIcon icon={faStar} className='text-orange-400' />
                                            <span className='text-gray-500'> {randomNumber} review</span>
                                        </div>
                                        <p className='text-md mt-2 text-gray-600'> Price : ${val.price}.00 </p>
                                        <p className='text-[10px] mt-2 text-gray-600'> {val.description} </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Fooddisplay;
