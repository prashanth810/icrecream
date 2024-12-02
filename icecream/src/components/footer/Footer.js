import { faArrowCircleUp, faArrowTurnUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <footer id='contact' className='bg-black text-white'>
            <div className='container max-w-full py-20 space-y-5 text-center'>


                <div className='max-w-3xl mx-auto fadein2'>
                    <h2 className='subheading md:text-6xl text-4xl text-firstcolor'> Sign up to our <br /> newsletter !</h2>
                    <p className='md:mt-0 mt-3'> Stay Update on New flavors and More  </p>

                    <div className='relative mt-4'>
                        <input type='text' placeholder='Your email...' className='md:py-[16px] md:px-4 px-3 py-[10px] rounded-lg w-full text-black outline-none lg:text-lg lg:pr-52' />

                        <button className='absolute top-0 right-0 bg-firstcolor md:px-4 md:py-[16px]  px-2 py-[10px] rounded-md lg:text-lg lg:px-10'> Subscribe </button>
                    </div>
                </div>

                <div className='text-end'>
                    <button className='bg-neutral-300 px-3 py-1 md:py-[10px] text-black rounded-lg lg:text-lg lg:px-10 font-mono' onClick={() => window.scrollTo(0, 0)}> <FontAwesomeIcon icon={faArrowCircleUp} /> Back To Top </button>
                </div>
            </div>

        </footer>
    )
}

export default Footer
