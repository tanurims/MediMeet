import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token,setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className="-w-176 h-15 cursor-pointer" src={assets.logo1} alt="logo"  />
      <ul className="hidden md:flex item-start gap-5 font-medium">
        <NavLink to='/'>
            <li className="py-1 text-fprimary">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

        </NavLink>
        <NavLink to='/doctors'>
            <li className="py-1 text-fprimary">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to='/about'>
            <li className="py-1 text-fprimary">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to='/contact'>
            <li className="py-1 text-fprimary">CONTACT US</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
      </ul>
      <div className='flex-items-center gap-4'>
        { token  
        ?<div className='flex items-center gap-4 group relative cursor-pointer'>
          <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile pic"/>
          <img className="w-2.5" src={assets.dropdown_icon} />
          <div className='absolute top-10 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block'>
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <p onClick={() => navigate('/my-profile')} className='hover:text-fprimary cursor-pointer'>My Profile</p>
              <p onClick={() => navigate('/my-appointments')} className='hover:text-fprimary cursor-pointer'>My Appointments</p>
              <p onClick={() => setToken(false)} className='hover:text-fprimary cursor-pointer'>Logout</p>
            </div>
          </div>

        </div>
          :<button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-600 hover:translate-y-1">Create account</button>}
      </div>
    </div>
  )
}

export default Navbar
