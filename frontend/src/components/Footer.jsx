import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flec flec-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
            {/*Left section*/}
            <div>
                <img className='mb-5 w-40 h-15' src={assets.logo1} alt="Logo 1"/>
                <p className='w-full md:w-2/3 text-gray-700 leading-6'>MediMeet is your trusted partner in managing doctor appointments with ease and convenience. We connect patients with qualified healthcare professionals for faster and more reliable medical care.</p>
            </div>

            {/*Middle section*/}
            <div>
                <p className='text-xl font-medium mb-5 text-fprimary'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-800'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/*Right section*/}
            <div>
                <p className='text-xl font-medium mb-5 text-fprimary'>GET IN TOUCH</p>
                <ul flex flex-col gap-2 text-gray-800>
                    <li>+1-212-456-7890</li>
                    <li>medimeet@gmail.com</li>
                </ul>

            </div>

        </div>

        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright © 2025 MediMeet - All Right Reserved.</p>
        </div>


      
    </div>
  )
}

export default Footer
