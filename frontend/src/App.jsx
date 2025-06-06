import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Login from './pages/Login'
import MyAppoinments from './pages/MyAppoinments'
import MyProfile from './pages/MyProfile'
import Contact from './pages/Contact'
import Appointments from './pages/Appointments'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/my-appoinments' element={<MyAppoinments/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/appointments/:docId' element={<Appointments/>} />
      </Routes>

      <Footer/>

    </div>
  )
}

export default App
