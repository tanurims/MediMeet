import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
 

const SpecialityMenu = () => {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-800'>
      <h1 className='text-3xl font-medium text-fprimary'>Find by Speciality</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
      <div className='flex sm:justify-center md:gap-5 lg:gap-10 pt-5 w-full py-2 overflow-scroll'>
        {specialityData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:scale-115 transition-all duration-500' to={`/doctors/${item.speciality}`} key={index}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt={item.speciality}/>
                <p className='text-fprimary'>{item.speciality}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
