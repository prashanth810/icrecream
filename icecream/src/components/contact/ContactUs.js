import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactUs = () => {
    return (
        <div className='backimg'>

            <div className='md:flex justify-around md:p-5 text-white font-semibold'>
                <div className='px-4 py-5 '>
                    <span className="wrapper relative inline-block">
                        <p className='text-3xl pb-1'>CONTACT US</p>
                        <div className="underline-animation">
                            <div className="spacer-left"></div>
                            <div className="underline"></div>
                            <div className="spacer-right"></div>
                        </div>
                    </span>

                    <div className='mt-4 text-[13px] font-semibold'>
                        <p>Wellcome to Natural Farms. Contact us to learn more <br />
                            about our natural farms, inquire about booking.</p>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center gap-x-5'>
                            <FontAwesomeIcon icon={faEnvelope} className='bg-white text-black rounded-full p-2' />
                            <p>naturalfarms@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-x-5 my-4'>
                            <FontAwesomeIcon icon={faPhone} className='bg-white text-black rounded-full p-2' />
                            <p> +91(9874567846)</p>
                        </div>
                        <div className='flex items-center gap-x-5'>
                            <FontAwesomeIcon icon={faLocationDot} className='bg-white text-black rounded-full p-2' />
                            <p>Hyderabad,Telangana,500038 </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center bg-green-600 bg-opacity-50 border-2 border-black rounded-lg md:w-[40%] py-10 mx-2'>
                    <form className='w-full sm:w-[100%] md:w-[70%] lg:w-[90%] md:p-5 px-3 rounded shadow-md '>
                        <div className='w-full'>
                            <label>Your Name <span className='text-red-600'> * </span></label>
                            <div className='mt-1'>
                                <input type='text' placeholder='Your name' className='w-full border border-red-600 py-2 px-3 rounded-md cursor-pointer' required />
                            </div>
                        </div>
                        <div className='w-full my-3'>
                            <label>Phone number <span className='text-red-600'> * </span></label>
                            <div className='mt-1'>
                                <input type='text' placeholder='Phone number' className='w-full border border-red-600 py-2 px-3 rounded-md cursor-pointer' required />
                            </div>
                        </div>
                        <div className='w-full my-3'>
                            <label>Email <span className='text-red-600'> * </span></label>
                            <div className='mt-1'>
                                <input type='email' placeholder='email' className='w-full border border-red-600 py-2 px-3 rounded-md' req cursor-pointeruired />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label>Message <span className='text-red-600'> * </span></label>
                            <div className='mt-1'>
                                <textarea rows='5' placeholder='Add your message ' className='w-full border  border-red-600 py-2 px-3 rounded-md' re cursor-pointerquired />
                            </div>
                        </div>
                        <div className='mt-4'>

                            <button className='w-full bg-black py-[10px] rounded-md text-xl font-medium' > SUBMIT </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
