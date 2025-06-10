import React, { useContext } from 'react'
import  { AppContext } from '../context/AppContext';

const MyAppoinments = () => {

  const {doctors} = useContext(AppContext);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              My <span className="text-primary">Appointments</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               You can find all the appointments you made here.
            </p>
        </div>
      </section>

      <hr/>

      <section className='py-20 px-4'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div>
              {doctors.slice(0,2).map((item, index) =>(
                <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-gray-300' key={index}> 
                  <div>
                    <img className='w-32 bg-indigo-50' src={item.image}/>
                  </div>
                  <div className='flex-1 text-sm text-zinc-600'>
                    <p className='text-neutral-800 font-semibold'>{item.name}</p>
                    <p>{item.speciality}</p>
                    <p className='text-zinc-700 font-medium mt-1'>Address: </p>
                    <p className='text-xs'>{item.address.line1}</p>
                    <p className='text-xs'>{item.address.line2}</p>
                    <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> 25, July, 2024 |  8:30 PM</p>
                  </div>
                  <div>

                  </div>
                  <div className='flex flex-col gap-5 justify-end mb-3' >
                    <button className='text-sm text-white text-center bg-blue-600 hover:bg-blue-700 sm:min-w-48 py-2 rounded-xl transition-all duration-300'>Pay Online</button>
                    <button className='text-sm text-white text-center bg-red-500/80 hover:bg-red-600 sm:min-w-48 py-2 rounded-xl transition-all duration-300'>Cancel Appointment</button>
                  </div>
                </div>

              ))}
            </div>
          </div>

        </div>
      </section>
      
    </div>
  )
}

export default MyAppoinments
