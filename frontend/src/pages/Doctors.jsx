import React, { useContext, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)


  const{doctors} =useContext(AppContext)
  const navigate = useNavigate()

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  //if changes, this execute
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  
  

  return (
    <div>
      <p className='text-gray-700 text-center font-medium text-2xl'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-startgap-5 mt-5'>
        <button className={`py-1 px-3 mb-5 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : 'bg-white text-primary'}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 pr-10 ${showFilter ? 'flex': 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'General physician'? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist'? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist'? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians'? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist'? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist'? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black":""} hover:translate-y-[-5px] transition-all duration-300`}>Gastroenterologist</p>
        </div>
        <div className='w-full'>
          {filterDoc && filterDoc.length > 0 ? (
            <div className={`grid gap-4 gap-y-6 ${
              filterDoc.length === 1 
                ? 'grid-cols-1 max-w-sm mx-auto sm:mx-0' 
                : filterDoc.length === 2 
                ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto sm:mx-0' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
          {
            filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointments/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                    <img className='bg-blue-100' src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-600'>
                            <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>

            ))}
          
        </div>
          ) : (
            <div className='text-center py-12'>
              <p className='text-gray-500 text-lg'>No doctors found for this specialty</p>
            </div>
          

      )}
      </div>
      
    </div>
  </div>
  )
}

export default Doctors
