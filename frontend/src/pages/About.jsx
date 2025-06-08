import React, { useContext } from 'react'
import { Heart, Shield, Users, Award, Clock, Stethoscope, Star, CheckCircle } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { Link, useNavigate } from 'react-router-dom'




const About = () => {

  const {aboutUsData} = useContext(AppContext);
  const {coreValues, stats} =aboutUsData;

  const navigate = useNavigate();

  const icons = {
    Heart,
    Shield,
    Users,
    Award
  };

  return (
    <div className='min-h-screen bg-background'>
      {/*Hero section*/}
      <section className='relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10'>
        <div className='max-w-6xl mx-auto text-center'>
          <div className='animate-fade-in-up'>
            <h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6'>
              About <span className='text-primary'>MediMeet</span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
               Bridging the gap between patients and healthcare providers through innovative technology 
              and compassionate care. Your health journey starts here.
            </p>
          </div>
          <div className='className="mt-12 animate-fade-in-up animate-delay-200'>
            <Stethoscope className="h-16 w-16 text-primary mx-auto opacity-80"/>
          </div>
        </div>
      </section>

      {/*stats*/}
      <section className='py-16 px-4 bg-stat text-white'>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index)=>(
              <div 
                key={index} 
                className={`text-center hover:translate-y-[-10px] transition-all duration-500 animate-delay-${(index + 1) * 100}`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-full border-l-4 border-fprimary">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To revolutionize healthcare accessibility by creating seamless connections between 
                    patients and healthcare providers. We believe quality healthcare should be convenient, 
                    reliable, and available when you need it most.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full border-l-4 border-fprimary">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    A world where every individual has immediate access to trusted healthcare professionals. 
                    We envision a future where technology enhances the human touch in medicine, 
                    not replaces it.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/*core values*/}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto" >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make

            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((coreValues, index)=>{
                const IconComponent = icons[coreValues.icon];
                return (
                <div 
                  key={index} 
                  className={`text-center border border-muted rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 `}
                >
                  <div className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{coreValues.title}</h3>
                    <p className="text-muted-foreground">{coreValues.description}</p>
                  </div>
                </div>
              );

            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose MediMeet?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're more than just an appointment platform. We're your healthcare companion, 
                dedicated to making your medical journey as smooth and stress-free as possible.
              </p>
              
              <div className="space-y-4">
                {[
                  "Verified healthcare professionals",
                  "Secure and HIPAA-compliant platform",
                  "24/7 customer support",
                  "Easy appointment scheduling",
                  "Telemedicine options available",
                  "Transparent pricing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
    
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-stat text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Health Journey?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have found quality healthcare through MediMeet. 
            Your perfect doctor is just a click away.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button onClick={()=>{navigate('/#speciality');scrollTo(0,0)}} className="text-lg px-8 py-3 text-white font-semibold border-2 rounded-xl bg-primary hover:bg-primary/80 transition-colors duration-300" href="#speciality">
               Book Your First Appointment
            </button>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className="text-lg text-white px-8 py-3 font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-stat transition-colors duration-300">
              Browse Doctors
            </button>

          </div>
          
        </div>
      </section>
      
    </div>
  )
}

export default About
