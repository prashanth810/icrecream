import React, { useContext, useState, useNavigate, useEffect } from 'react';
import { faAngleDoubleRight, faAngleRight, faArrowRight, faBarChart, faBars, faBox, faCartShopping, faClose, faCube, faHeart, faPlus, faRightFromBracket, faSearch, faShoppingCart, faSnowflake, faStar, faTruck, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import heroimg from '../assets/hero.png';
import funnymonstre1 from '../assets/funny_monster_1.png';
import funnymonstre2 from '../assets/funny_monster_2.png';
import leaf_1 from '../assets/leaf_1.png';
import leaf_2 from '../assets/leaf_2.png';
import promo_1 from '../assets/promo_1.png';
import seasongpromo_1 from '../assets/seasonal-promo_1.jpg';
import seasongpromo_2 from '../assets/seasonal-promo_2.jpg';
import scrollpad from '../assets/scalloped.svg';
import seasonalpromo_3 from '../assets/seasonal-promo_3.png';
import vanila from '../assets/vanilla.png';
import mango from '../assets/mango.png';
import taro from '../assets/taro.png';
import coconut from '../assets/coconut.png';
import coca from '../assets/cocoa.png';
import strawberry from '../assets/strawberry.png';
import green_tea from '../assets/green_tea.png';
import orange from '../assets/orange.png';
import flover1 from '../assets/flavor_image-1.jpg';
import flover2 from '../assets/flavor_image-2.jpg';
import flover3 from '../assets/flavor_image-3.jpg';
import flover4 from '../assets/flavor_image-4.jpg';
import blog1 from '../assets/blog_1.jpg';
import blog2 from '../assets/blog_2.jpg';
import blog3 from '../assets/blog_3.jpg';
import { Foodcontext } from './context/Foodcontext';
import NavBar from './navbar/NavBar';
import Fooddisplay from './fooddisplay/Fooddisplay';
import Footer from './footer/Footer';



const Header = ({ login, setLogin }) => {
    const [randomNumber, setRandomNumber] = useState(0);

    // const navigate = useNavigate();

    const { token, setToken, setFood_list, food_list } = useContext(Foodcontext);

    useEffect(() => {
        const random = Math.round(Math.random() * 100) + 1;
        setRandomNumber(random);
    }, [])


    return (
        <div className='head_home'>
            <NavBar login={login} setLogin={setLogin} />


            {/* hro section  */}

            <section id='home' className='relative bg-[#fed3c2] text-center xl:pt-44 md:pt-32 md:pb-5 sm:pb-4 px-4 lg:pt-[150px] pt-[130px]'>
                <div className='md:space-y-5'>
                    <h4 className='text-3xl capitalize subheading'> Loadded with flavor</h4>
                    <h5 className='subheading md:text-5xl text-firstcolor font-semibold capitalize'> Refreshing Taste </h5>
                </div>
                <div className='relative mt-8 max-w-sm mx-auto md:max-w-md md:mt-12 lg:max-w-lg xl:max-w-xl fadein'>
                    <img src={heroimg} alt='hero img' className='w-full h-[380px] object-contain' />
                    <img src={funnymonstre1} alt='hero img' className='w-14 absolute top-0 left-0 -rotate-45 opacity-50 sm:top-10 sm:left-5 md:w-16 lg:w-20 ' />
                    <img src={funnymonstre2} alt='hero img' className='w-14 absolute top-0 right-0 rotate-45 opacity-50 sm:top-10 sm:right-5 md:w-16 lg:w-20' />

                </div>

                <div className='hidden lg:block fadein'>
                    <img src={leaf_1} alt='hero img' className='w-32 absolute top-28 righ-20 blur-[1px] xl:right-40' />

                    <img src={leaf_1} alt='hero img' className='w-32 absolute left-20 bottom-12 blur-[1px] rotate-180 xl:left-40' />

                    <img src={leaf_2} alt='hero img' className='w-28 absolute top-20 left-20 blur-[2px] xl:left-40' />

                    <img src={leaf_2} alt='hero img' className='w-28 absolute bottom-12 right-20 blur-[2px] -rotate-90 xl:right-40' />
                </div>
            </section>



            {/* promo section  */}

            <section className="relative promo_section bg-top pt-36 pb-24 md:pt-20">
                <div className='container grid grid-cols-1 gap-10 lg:grid lg:grid-cols-2'>
                    <div className='flex flex-col gap-10 justify-center items-center'>
                        <h2 className='text-black text-[2.4rem] subheading'> Celebrate Sweetness Every Day </h2>
                        <p className='text-gray-500 font-medium max-w-[39rem]'> Incorporating liquor into ice feels like a small feat when you think about how creative...</p>

                        <ul className='space-y-5 pl-5 '>
                            <li className='flex items-center gap-5 cursor-pointer'>
                                <FontAwesomeIcon icon={faSnowflake} className='text-2xl text-firstcolor xl:text-2xl' />
                                <p className='text-xl font-medium hover:text-firstcolor duration-300 xl:text-xl subheading'> Reliable Frozen Shipping </p>
                            </li>

                            <li className='flex items-center gap-5 cursor-pointer'>
                                <FontAwesomeIcon icon={faTruck} className='text-2xl text-firstcolor xl:text-2xl' />
                                <p className='text-xl font-medium hover:text-firstcolor duration-300 xl:text-xl subheading'> Affordable Flat-rate Shipping Nationwide </p>
                            </li>

                            <li className='flex items-center gap-5 cursor-pointer'>
                                <FontAwesomeIcon icon={faCube} className='text-2xl text-firstcolor xl:text-2xl' />
                                <p className='text-xl font-medium hover:text-firstcolor duration-300 xl:text-xl subheading'> Picture-Perfect Unboxing </p>
                            </li>

                            <li className='pt-10'>
                                <button className='font-semibold border-2 border-red-300 px-[2rem] py-2 rounded-full hover:bg-firstcolor hover:text-white duration-300 xl:text-[16px]'> View More <FontAwesomeIcon icon={faArrowRight} /> </button>
                            </li>
                        </ul>
                    </div>

                    <img src={promo_1} alt='promo image' className='w-full mx-auto md:w-[80%] lg:w-full xl:mt-20 hover:scale-105 duration-700 cursor-pointer fadein' />
                </div>
            </section>


            {/* shop  */}

            <Fooddisplay />

            {/* feactures sectio */}

            <section className='container md:py-20 py-5 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-32'>
                <div className='flex flex-col gap-5 items-center text-center border-b-2 border-firstcolor border-dashed pb-10 md:flex-row md:items-start md:text-start md:gap-10'>
                    <h2 className='min-w-max subheading md:text-4xl text-4xl text-firstcolor font-semibold capitalize'>
                        Top Ice <br />
                        Cream <br />
                        Spots
                    </h2>
                    <div className='md:mt-3'>
                        <p className='mb-4 text-justify'> It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef"</p>
                        <div className='text-start'>
                            <a href='#' className='font-semibold border-b border-black hover:text-firstcolor hover:border-firstcolor'> Read More  <FontAwesomeIcon icon={faArrowRight} /> </a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-5 items-center text-center border-b-2 border-firstcolor border-dashed pb-10 md:flex-row md:items-start md:text-start md:gap-10'>
                    <h2 className='min-w-max subheading md:text-4xl text-4xl text-firstcolor font-semibold capitalize'>
                        Popular Ice <br />
                        Cream <br />
                        Spots
                    </h2>
                    <div className='md:mt-3'>
                        <p className='mb-4 text-justify'> It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces
                            honed over generations while new shops are tossing the term "chef"</p>

                        <div className='text-start'>
                            <a href='#' className='font-semibold border-b border-black hover:text-firstcolor hover:border-firstcolor'> Read More  <FontAwesomeIcon icon={faArrowRight} /> </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* seasonal promo  */}

            <section className='pt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-1 gap-y-2 pb-1 md:m-0 m-2'>
                <div className='relative overflow-hidden'>
                    <img src={seasongpromo_1} className='w-full hover:scale-110 duration-700 relative cursor-pointer' />

                    <div className='absolute md:top-[17rem] bottom-[10%] left-[50%] md:left-1/2 transform -translate-x-1/2 text-center pointer-events-none'>
                        <h2 className='iowercase font-mono text-white text-4xl subheading'>Hello</h2>
                        <h2 className='uppercase text-white subheading'>Summer !</h2>
                    </div>
                </div>
                <div className='relative overflow-hidden'>
                    <img src={seasongpromo_2} className='w-full hover:scale-110 duration-700 cursor-pointer' />

                    <div className='absolute top-1/2 left-1/4 pointer-events-none'>
                        <div className='relative'>
                            <img src={scrollpad} className='w-24 lg:w-32' />
                            <p className='absolute top-1/2 transform -translate-x-[-20%] -translate-y-1/2 text-3xl font-bold font-mono text-white lg:text-4xl'>-32%</p>
                        </div>
                    </div>
                </div>
                <div className='relative overflow-hidden'>
                    <img src={seasonalpromo_3} className='w-full hover:scale-110 duration-700 cursor-pointer' />
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center pointer-events-none'>
                        <h2 className='uppercase text-white text-4xl subheading'>Creamy</h2>
                        <h2 className='lowercase font-mono text-white subheading'>enjoy</h2>
                    </div>
                </div>
            </section>


            {/* ingradients  */}

            <section id='ingredients' className='bg-emerald-700 py-20'>
                <div className='text-center pb-20 md:pb-20'>
                    <h4 className='text-firstcolor md:text-4xl xl:text-5xl lg:text-5xl text-[36px] mb-3 subheading'> Savory Ingredients </h4>
                    <h2 className='text-gray-300 subheading'> Assorted Ingredients </h2>

                </div>

                <div className='container grid grid-cols-1 sm:grid-cols-2 gap-10 text-white md:w-[80%] xl:w-[90%]  '>
                    {/* left side  */}

                    <div className='flex flex-col gap-10 lg:gap-12 md:gap-4'>
                        {/* item 1  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={vanila} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Vanilla </h3>
                                <p className='text-justify'> Venila flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations. </p>
                            </div>
                        </div>

                        {/* item 2  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={mango} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Mango </h3>
                                <p className='text-justify'> Mango flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations. </p>
                            </div>
                        </div>

                        {/* item 3  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={taro} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading' > Taro </h3>
                                <p className='text-justify'> Taro flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef </p>
                            </div>
                        </div>

                        {/* item 4  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={coconut} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Coconut </h3>
                                <p className='text-justify'> Coconut flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef </p>
                            </div>
                        </div>


                    </div>

                    {/* right side  */}

                    <div className='flex flex-col gap-10 '>
                        {/* item 1  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={coca} className='w-[50%] sm:w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Coca </h3>
                                <p className='text-justify'> Venila flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations. </p>
                            </div>
                        </div>

                        {/* item 2  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={strawberry} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Strawberry </h3>
                                <p className='text-justify'> Mango flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef </p>
                            </div>
                        </div>

                        {/* item 3  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={green_tea} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Green Tea </h3>
                                <p className='text-justify'> Taro flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef </p>
                            </div>
                        </div>

                        {/* item 4  */}

                        <div className='flex flex-col items-center text-center gap-3 md:flex-row md:items-start md:text-start md:gap-5 lg:max-w-sm xl:max-w-lg'>
                            <img src={orange} className='w-28 md:mt-[20px] xl:mt-[22px] lg:mt-[25px]' />
                            <div className='space-y-3'>
                                <h3 className='md:text-start text-3xl subheading'> Orange </h3>
                                <p className='text-justify'> Coconut flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces honed over generations while new shops are tossing the term "chef </p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* Flower info  */}

            <section className='container py-12'>
                <p className='text-center md:text-5xl text-[36px] md:mb-0 mb-[36px] text-red-500 subheading'> Most Popular products </p>

                <div className='grid grid-cols-1 place-items-center gap-y-10 sm:gap-y-0 sm:ga-px-10 lg:grid-cols-4 md:gap-x-2 lg:gap-x-2 xl:gap-x-2
                '>
                    {/* item 1  */}
                    <div className='flavir_item max-w-sm bg-cardcolor_1 py-10 text-center space-y-5 fadein'>
                        <figure className='w-60 h-60 mx-auto overflow-hidden border-4 border-white rounded-full p-2 cursor-pointer'>
                            <img src={flover1} className='rounded-full object-cover w-full h-full' />
                        </figure>
                        <h3 className='text-2xl subheading text-gray-700'> Vanilla </h3>
                        <p className='font-medium capitalize text-justify md:px-3 md:py-1 lg:px-3 px-3 lg:py-1 text-[13px]'> Chocolate flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces </p>
                        <button className='h-12 w-12 rounded-full text-2xl hover:bg-firstcolor border-2 border-gray-300 hover:text-white duration-300'> <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>

                    {/* item 2  */}
                    <div className='flavir_item max-w-sm bg-cardcolor_2 py-10 text-center space-y-5 sm:mt-20 lg:mt-40 fadein2'>
                        <figure className='w-60 h-60 mx-auto overflow-hidden border-4 border-white rounded-full p-2 cursor-pointer'>
                            <img src={flover4} className='rounded-full object-cover w-full h-full' />
                        </figure>
                        <h3 className='text-2xl subheading'> Chocolate </h3>
                        <p className='font-medium capitalize text-justify md:px-3 md:py-1 lg:px-3 px-3 lg:py-1 text-[13px] '> Chocolate flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces </p>
                        <button className='h-12 w-12 rounded-full text-2xl hover:bg-firstcolor border-2 border-gray-300 hover:text-white duration-300'> <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>

                    {/* item 3  */}
                    <div className='flavir_item max-w-sm bg-cardcolor_3 py-10 text-center space-y-5 fadein'>
                        <figure className='w-60 h-60 mx-auto overflow-hidden border-4 border-white rounded-full p-2 cursor-pointer'>
                            <img src={flover3} className='rounded-full object-cover w-full h-full' />
                        </figure>
                        <h3 className='text-2xl subheading text-firstcolor'> Mongo </h3>
                        <p className='font-medium capitalize text-justify md:px-3 md:py-1 lg:px-3 px-3 lg:py-1 text-[13px]'> Chocolate flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces </p>
                        <button className='h-12 w-12 rounded-full text-2xl hover:bg-firstcolor border-2 border-gray-300 hover:text-white duration-300'> <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>

                    {/* item 4  */}
                    <div className='flavir_item max-w-sm bg-cardcolor_4 py-10 text-center space-y-5 sm:mt-20 lg:mt-40 fadein2'>
                        <figure className='w-60 h-60 mx-auto overflow-hidden border-4 border-white rounded-full p-2 cursor-pointer'>
                            <img src={flover2} className='rounded-full object-cover w-full h-full' />
                        </figure>
                        <h3 className='text-2xl subheading text-orange-600'> Orange  </h3>
                        <p className='font-medium capitalize text-justify md:px-3 md:py-1 lg:px-3 px-3 lg:py-1 text-[13px]'> Chocolate flover It's quite possible that we are living in age of ice cream innovation. Old-school creameries are churning out vanilla bean masterpieces </p>
                        <button className='h-12 w-12 rounded-full text-2xl hover:bg-firstcolor border-2 border-gray-300 hover:text-white duration-300'> <FontAwesomeIcon icon={faAngleRight} /> </button>

                    </div>

                </div>
            </section>

            {/* blogs  */}

            <section id='blogs' className='container md:py-20 py-6 '>
                <div className='text-center pb-12'>
                    <h4 className='md:text-3xl text-firstcolor lg:text-4xl xl:text-5xl text-4xl subheading'> Our Blogs</h4>
                    <h2 className='mt-1 subheading text-gray-800'> Flover Upgrade </h2>
                </div>

                <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                    {/* card 1 */}
                    <div className='relative overflow-hidden'>
                        <img src={blog1} className='w-full hover:scale-110 duration-700 cursor-pointer fadein' />
                        <div>
                            <div className='flex items-center gap-5 md:pb-4 md:pt-6'>
                                <p className='uppercase cursor-pointer hover:text-firstcolor'> BusinessTips</p>
                                <p className='text-firstcolor'> - </p>
                                <p className='cursor-pointer hover:text-firstcolor'> Nov 1, 2024 </p>
                            </div>
                            <h3 className='hover:text-firstcolor cursor-pointer font-medium'>Trending Ice Cream Flovors for This Year </h3>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='relative overflow-hidden'>
                        <img src={blog2} className='w-full hover:scale-110 duration-700 cursor-pointer fadein' />
                        <div>
                            <div className='flex items-center gap-5 md:pb-4 md:pt-6'>
                                <p className='uppercase cursor-pointer hover:text-firstcolor'> BusinessTips</p>
                                <p className='text-firstcolor'> - </p>
                                <p className='cursor-pointer hover:text-firstcolor'> Nov 1, 2024 </p>
                            </div>
                            <h3 className='hover:text-firstcolor cursor-pointer font-medium'>  The Skill of Making Gourmet Ice Cream </h3>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='relative overflow-hidden'>
                        <img src={blog3} className='w-full hover:scale-110 duration-700 cursor-pointer fadein' />
                        <div>
                            <div className='flex items-center gap-5 md:pb-4 md:pt-6'>
                                <p className='uppercase cursor-pointer hover:text-firstcolor'> BusinessTips</p>
                                <p className='text-firstcolor'> - </p>
                                <p className='cursor-pointer hover:text-firstcolor'> Nov 1, 2024 </p>
                            </div>
                            <h3 className='hover:text-firstcolor cursor-pointer font-medium'> Ice Cream Trends to increase Revenue </h3>
                        </div>
                    </div>
                </div>
                <div className='text-center py-12'>
                    <button className='py-3 px-10 bg-firstcolor text-white rounded-full'> Read More </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Header
