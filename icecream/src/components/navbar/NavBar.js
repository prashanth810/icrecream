import React, { useContext, useState, useNavigate } from 'react';
import { faAngleDoubleRight, faAngleRight, faArrowRight, faBarChart, faBars, faBox, faCartShopping, faClose, faCube, faHeart, faPlus, faRightFromBracket, faSearch, faShoppingCart, faSnowflake, faStar, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/logo.png'

import { Foodcontext } from './../context/Foodcontext';
import CartList from '../cartData/CartList';
import { Link } from 'react-router-dom';



const NavBar = ({ setLogin }) => {
    const [show, setShow] = useState(false);
    const [showmenu, setShowmenu] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [opencart, setOpencart] = useState(false);

    // const navigate = useNavigate();

    const { token, setToken, gettotalcart, cartitems } = useContext(Foodcontext);

    const totalItemsincart = Object.values(cartitems).length;

    const handlelogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user name");
        setToken("");
    }

    const handleLinkClick = (href) => {
        setActiveLink(href);
        setShowmenu(false);
    };

    const handleshowlogindetails = () => {
        setShow((prev) => !prev);
    }


    return (
        <div className='head_home'>
            <header id='navbar' className=' flex w-full md:px-4 '>
                <nav className='bg-[#fed3c2] md:container-[100%] container-[100%] flex items-center justify-between h-16 md:px-[50px] py-5 px-4 fixed top-0 right-0 left-0 z-10'>

                    <div>
                        <img src={logo} className='md:w-[15rem] w-full' />
                    </div>

                    <div className='w-full px-5 duration-500 ease-outz-20'>
                        <ul className='md:flex hidden md:items-center md:justify-center gap-4'>
                            <li>
                                <a
                                    href='#home'
                                    onClick={() => setActiveLink('#home')}
                                    className={`text-[20px] subheading ${activeLink === '#home' ? 'border-b-2 border-firstcolor' : ''}`}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#shop'
                                    onClick={() => setActiveLink('#shop')}
                                    className={`text-[20px] subheading ${activeLink === '#shop' ? 'border-b-2 border-firstcolor' : ''}`}
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#ingredients'
                                    onClick={() => setActiveLink('#ingredients')}
                                    className={`text-[20px] subheading ${activeLink === '#ingredients' ? 'border-b-2 border-firstcolor' : ''}`}
                                >
                                    Ingredients
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#blogs'
                                    onClick={() => setActiveLink('#blogs')}
                                    className={`text-[20px] subheading ${activeLink === '#blogs' ? 'border-b-2 border-firstcolor' : ''}`}
                                >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#contact'
                                    onClick={() => setActiveLink('#contact')}
                                    className={`text-[20px] subheading ${activeLink === '#contact' ? 'border-b-2 border-firstcolor' : ''}`}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <Link to='/about'
                                    className={`text-[20px] subheading`}
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to='/contact'
                                    className={`text-[20px] subheading`}
                                >
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div className='md:flex hidden items-center gap-5 text-xl cursor-pointer md:pr-6'>

                        {!token ? <button className='border-2 px-3 text-[16px] font-semibold rounded-full border-red-500' onClick={() => { setLogin(true); window.scrollTo(0, 0) }}> Login </button> :
                            <div className='relative cursor-pointer'>
                                <FontAwesomeIcon icon={faUser} onClick={handleshowlogindetails} />

                                {show ? (
                                    <ul className='absolute flex flex-col gap-1 border-2 border-dashed border-red-400 bg-pink-100 top-[40px] px-3 py-2 rounded z-1'>
                                        <li className='text-[15px]  font-semibold flex gap-2 items-center  hover: hover:text-red-500 duration-300 border-b  border-red-400 pb-1' onClick={handleshowlogindetails} > <FontAwesomeIcon icon={faCartShopping} /> <p> Orders </p></li>

                                        <li className='flex gap-2 text-[15px] font-semibold items-center hover:text-red-500 duration-300' onClick={handlelogout}> <FontAwesomeIcon icon={faRightFromBracket} className='text-[16px] ml-[2px]' /> <p> Logout </p></li>
                                    </ul>
                                ) : ("")}
                            </div>
                        }

                        <div className='relative'>
                            <FontAwesomeIcon icon={faHeart} />
                            <span className='flex items-center justify-center text-[14px] font-bold absolute top-0 left-4 bg-firstcolor text-white textxs h-[10px] w-[10px] rounded-full place-items-center'></span>
                        </div>
                        <div className='relative' onClick={() => setShowmenu((prev) => !prev)}>
                            <FontAwesomeIcon icon={faShoppingCart} onClick={() => setOpencart((prev) => !prev)} />

                            {cartitems === 0 ? ("") : (
                                <span className='flex items-center justify-center text-[14px] font-bold absolute top-0 left-4 bg-firstcolor text-white textxs h-[10px] w-[10px] rounded-full place-items-center'></span>
                            )}

                        </div>

                    </div>

                    <div className='relative md:hidden lg:hiddedn xl:hidden'>
                        <FontAwesomeIcon icon={faShoppingCart} onClick={() => setOpencart((prev) => !prev)} className='text-red-500 cursor-pointer' />
                        {totalItemsincart !== 0 ? (
                            <span className='flex items-center justify-center text-[14px] font-bold absolute top-0 left-4 bg-firstcolor text-white textxs h-[10px] w-[10px] rounded-full place-items-center'></span>
                        ) : ("")}
                    </div>

                    <div className='md:hidden lg:hidden cursor-pointer pl-5'>
                        <FontAwesomeIcon icon={faBarChart} className='text-red-400' style={{ fontSize: "24px" }} onClick={() => setShowmenu(true)} />
                    </div>

                    {/* mobile  */}

                    <div className={`${showmenu ? "fixed w-[80%]" : "h-0 w-0"} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-black text-white transition-all`}>
                        <div className='flex items-center justify-between md:px-5 md:py-6 p-4'>
                            <div>
                                <img src={logo} className='w-[5rem]' />
                            </div>

                            <button type="button" className="text-reset flex justify-between items-center text-3xl" onClick={() => setShowmenu(false)} >x</button>

                        </div>

                        (
                        <ul className='flex flex-col items-center gap-2 md:mt-5 px-5 text-lg font-medium'>
                            <a
                                href='#home'
                                onClick={() => handleLinkClick('#home')}
                                className={`${activeLink === '#home' ? 'border-b-4 border-red-500' : ''}`}
                            >
                                <p className='px-4 py-2 rounded inline-block hover:text-green-400 transition-all duration-300 text-[16px]'>
                                    Home
                                </p>
                            </a>

                            <a
                                href='#shop'
                                onClick={() => handleLinkClick('#shop')}
                                className={`${activeLink === '#shop' ? 'border-b-4 border-red-500' : ''}`}
                            >
                                <p className='px-4 py-2 rounded inline-block hover:text-green-400 transition-all duration-300 text-[16px]'>
                                    Shop
                                </p>
                            </a>

                            <a
                                href='#ingredients'
                                onClick={() => handleLinkClick('#ingredients')}
                                className={`${activeLink === '#ingredients' ? 'border-b-4 border-red-500' : ''}`}
                            >
                                <p className='px-4 py-2 rounded inline-block hover:text-green-400 transition-all duration-300 text-[16px]'>
                                    Ingredients
                                </p>
                            </a>

                            <a
                                href='#blogs'
                                onClick={() => handleLinkClick('#blogs')}
                                className={`${activeLink === '#blogs' ? 'border-b-4 border-red-500' : ''}`}
                            >
                                <p className='px-4 py-2 rounded inline-block hover:text-green-400 transition-all duration-300 text-[16px]'>
                                    Blogs
                                </p>
                            </a>

                            <a
                                href='#contact'
                                onClick={() => handleLinkClick('#contact')}
                                className={`${activeLink === '#contact' ? 'border-b-4 border-red-500' : ''}`}
                            >
                                <p className='px-4 py-2 rounded inline-block hover:text-green-400 transition-all duration-300 text-[16px]'>
                                    Contact
                                </p>
                            </a>

                            <div className='flex gap-5 my-4'>
                                {!token ? <button className='border-2 px-3 text-[16px] font-semibold rounded-full border-red-500' onClick={() => { setLogin(true); setShowmenu(false); window.scrollTo(0, 0) }}> Login </button> :
                                    <div className='relative cursor-pointer'>
                                        <FontAwesomeIcon icon={faUser} onClick={handleshowlogindetails} />

                                        {show ? (
                                            <ul className='absolute flex flex-col gap-1 border-2 border-dashed border-red-400 bg-pink-100 top-[40px] px-3 py-2 rounded z-1'>
                                                <li className='text-[15px] text-black font-semibold flex gap-2 items-center  border-b  border-red-400 pb-1' onClick={handleshowlogindetails} > <FontAwesomeIcon icon={faCartShopping} /> <p> Orders </p></li>

                                                <li className='flex gap-2 text-black text-[15px] font-semibold items-center' onClick={handlelogout}> <FontAwesomeIcon icon={faRightFromBracket} className='text-[16px] ml-[2px]' /> <p> Logout </p></li>
                                            </ul>
                                        ) : ("")}
                                    </div>
                                }
                                <div className='relative'>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <span className='flex items-center justify-center text-[14px] font-bold absolute top-0 left-4 bg-firstcolor text-white textxs h-[10px] w-[10px] rounded-full place-items-center'></span>
                                </div>
                            </div>
                        </ul>
                    </div>


                    <div className={`${opencart ? "fixed md:w-[32%] w-[95%]" : "h-0 w-0"} right-0 top-0 bottom-0 z-20 overflow-hidden bg-black text-white transition-all`}>
                        <div className='flex items-center justify-between md:px-5 md:py-6 p-4 border-b border-gray-400'>
                            <FontAwesomeIcon icon={faArrowRight} className='text-2xl cursor-pointer subheading' onClick={() => setOpencart(false)} />
                            <div>
                                <p className='text-white subheading text-xl'> Cart {totalItemsincart === 0 ? "(0) Item" : `${totalItemsincart} Items`} </p>
                            </div>

                            <button type="button" className="text-reset flex justify-between items-center text-[28px] cursor-pointer subheading hover:bg-gray-500 hover:rounded-full duration-500 px-1" onClick={() => setOpencart(false)} >x</button>
                        </div>
                        <CartList setOpencart={setOpencart} />

                    </div>
                </nav>
            </header>

        </div>
    )
}

export default NavBar;
