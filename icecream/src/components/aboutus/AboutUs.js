import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='about_home'>
            <div className='md:flex justify-around md:p-5 px-4 py-5'>
                <div className='text-center md:mt-[70px]'>
                    <h1 className='text-green-700 text-5xl font-semibold'> About Us  </h1>
                    <p className='pt-[35px] text-3xl text-yellow-600'>Wellcome to our website </p>

                    <div className='flex justify-center items-center tracking-widest'>
                        <p className='mt-4'>This is natural forms website <br /> we can assist what you have <br /> facing </p>

                    </div>
                    <button className='bg-yellow-400 px-5 py-2 rounded-full mt-3 font-semibold hover:text-gray-600 hover:bg-transparent hover:border border-gray-500 duration-300'> Lern more </button>
                </div>

                <div className='text-center'>
                    <p className='text-3xl font-light md:mt-0 mt-4'> Meet the <span className='text-green-900 font-semibold'>team.</span></p>

                    <div className='grid md:grid-cols-7 md:gap-y-0 gap-y-2 justify-center mt-4 mb-3 p-[4px] md:border-2 border-dashed border-red-400'>
                        <p className='text-[11px] bg-yellow-400 py-1 cursor-pointer'>LEADERSHIP</p>
                        <p className='text-[11px] py-1 cursor-pointer'>CLIENT SERVICES</p>
                        <p className='text-[11px] py-1 cursor-pointer'>CREATIVE </p>
                        <p className='text-[11px] py-1 cursor-pointer'>DEVELOPEMNT</p>
                        <p className='text-[11px] py-1 cursor-pointer'>MARKET & SALES </p>
                        <p className='text-[11px] py-1 cursor-pointer'>STRATEGY</p>
                        <p className='text-[11px] py-1 cursor-pointer'>ALL</p>
                    </div>
                    <div className='grid md:grid-cols-4 gap-x-2 gap-y-1'>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                        <div className='my-1'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuTOJ9LYxhToIznEkpp169-m-tiYS7kvxXQ&s' className='cursor-pointer rounded-full w-[100px] mx-auto' />

                            <p className='text-[14px] font-semibold my-1'>Michele</p>
                            <p className='text-[12px]'>director of natural forms</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p></p>
                        <p className='mt-5 text-white bg-green-800 px-4 py-3 rounded-full'><FontAwesomeIcon icon={faQuestion} className='font-bold textshadow' /></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
