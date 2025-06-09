import React, { useContext, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const Contact = () => {

  const {contactUsData} = useContext(AppContext);
  const {contactInfo} = contactUsData;

  const navigate = useNavigate();

  const icons = {
    MapPin,
    Phone,
    Mail,
    Clock
  };

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone: '',
    subject: '',
    message: ''
  })

  const[isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try{
      await new Promise((res) => setTimeout(res, 1500));
      setResponseMessage('✅ Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });


    }catch(err){
      setResponseMessage("❌ Something went wrong.");
    }finally{
      setIsSubmitting(false);
    }
  }
  

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">MediMeet</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
               We're here to help you with any questions about our healthcare platform. 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          <div className="mt-12 animate-fade-in-up animate-delay-200">
            <Mail className="h-16 w-16 text-primary mx-auto opacity-80" />

          </div>
        </div>
      </section>

      <hr/>

      <section className='py-20 px-4'>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info,index)=>{
              const IconComponent = icons[info.icon];
              return(
                <div
                key={index}
                className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 `}>
                  <div className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}

                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                  </div>

                </div>

              )
            })}
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center min-h-[600px]">
            
            <div>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                  
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                        <input 
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name:e.target.value})}
                        placeholder='Your full name'
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"

                         />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                        <input
                        id="email"
                        value={formData.email}
                        type="email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder='your.email@example.com'
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                        required/>
                       
                      </div>
                    </div>

                    <div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                        <input 
                        id="phone"
                        value={formData.phone}
                        type="tel"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder='012-3456789'
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"/>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject <span className="text-red-500">*</span></label>
                        <input 
                        id='subject'
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder='What is this about?'
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500"
                        required/>
                      </div>
                    </div>

                      <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-900 placeholder-gray-500 resize-vertical"
                          required
                        />
                      </div>

                      <button type='submit' className="w-full bg-blue-600 hover:bg-blue-700 hover:translate-y-[-10px]  text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                        >
                        <Send className="h-5 w-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>

                      {responseMessage && (
                      <p className="text-center mt-4 text-lg text-green-600">{responseMessage}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>



      <section className="py-20 px-4 bg-stat text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait to take control of your health. Browse our network of qualified healthcare 
            professionals and book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} size="lg" className="text-lg text-white px-8 py-3 font-semibold border-2 border-white rounded-xl hover:bg-white hover:text-stat transition-colors duration-300">
              Find a Doctor
            </button>
            
          </div>
        </div>
      </section>
      
      
    </div>
  )
}

export default Contact
