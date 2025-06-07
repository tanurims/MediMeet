import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {

    const {doctors} = useContext(AppContext)

    const navigate=useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id!=docId)
            setRelDoc(doctorsData)
        }
        
    },[doctors,speciality,docId])

  return (
    <div>
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-2xl font-medium text-fprimary'>Related Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className={`grid gap-4 gap-y-6 ${
                relDoc.length === 0 
                    ? 'grid-cols-1 max-w-sm mx-auto sm:mx-0' 
                    : relDoc.length === 1 
                    ? 'flex justify-center' 
                    : relDoc.length === 2 
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto sm:mx-0' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}> 
                {relDoc.length > 0 ? (
                    relDoc.slice(0,5).map((item,index)=>(
                        <div 
                            onClick={()=>{navigate(`/appointments/${item._id}`); scrollTo(0,0)}} 
                            key={index} 
                            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 max-w-xs w-full mx-auto'
                        >
                            <img className='bg-blue-100 w-full h-48 object-cover' src={item.image} alt={item.name} />
                            <div className='p-4'>
                                <div className='flex items-center gap-2 text-sm text-center text-green-600'>
                                    <p className='w-2 h-2 bg-green-600 rounded-full'></p><p>Available</p>
                                </div>
                                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                <p className='text-gray-600 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='text-center py-8'>
                        <p className='text-gray-500'>No related doctors found</p>
                    </div>
                )}
            </div>

    </div>
      
    </div>
  )
}

export default RelatedDoctors
