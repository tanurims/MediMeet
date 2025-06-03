import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/my-appoinments' element={<MyAppoinments/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

    </div>
  )
}

export default App
