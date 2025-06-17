import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token,setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className="h-15 cursor-pointer" src={assets.logo1} alt="logo"  />
      <ul className="hidden md:flex item-start gap-5 font-medium">
        <NavLink to='/'>
            <li className="py-1 text-fprimary transition-all duration-500 ease-in-out hover:scale-105">HOME</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>

        </NavLink>
        <NavLink to='/doctors'>
            <li className="py-1 text-fprimary transition-all duration-500 ease-in-out hover:scale-105">ALL DOCTORS</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to='/about'>
            <li className="py-1 text-fprimary transition-all duration-500 ease-in-out hover:scale-105">ABOUT</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
        <NavLink to='/contact'>
            <li className="py-1 text-fprimary transition-all duration-500 ease-in-out hover:scale-105">CONTACT US</li>
            <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden"/>
        </NavLink>
      </ul>
      <div className='flex-items-center gap-4'>
        { token  
        ? <div 
            className='flex items-center gap-4 relative cursor-pointer'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="profile pic"/>
            <img 
              className="w-2.5 transition-transform duration-200 hover:translate-y-1" 
              src={assets.dropdown_icon} 
              onClick={toggleDropdown} 
            />
            <div className={`absolute top-0 right-0 mt-2 text-base font-medium text-gray-600 z-50 transition-all duration-200 ${showDropdown ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('/my-profile')} className='hover:text-fprimary cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('/my-appoinments')} className='hover:text-fprimary cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-fprimary cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
          :<button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-blue-600 hover:translate-y-1">Create account</button>
          }
          <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon}/>
          {/*mobile menu*/}
          <div className={`${showMenu ? 'fixed w-full': 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
            <div className='flex items-center justify-between px-5 py-6'>
              <img className='w-36' src={assets.logo1} alt="" />
              <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
              <NavLink  onClick={() =>setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
              <NavLink  onClick={() =>setShowMenu(false)} to='/doctors'> <p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
              <NavLink  onClick={() =>setShowMenu(false)} to='/about'> <p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
              <NavLink  onClick={() =>setShowMenu(false)} to='/contact'> <p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar
