import React, { useState } from 'react'
import { User, Edit, Save, X, Camera, Phone, Mail, MapPin, Calendar, Upload, Eye, EyeOff } from 'lucide-react';


const MyProfile = () => {

  const [isEditing, setIsEditing] = useState(true);
  
  




  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 123-456-7890',
    address: '123 Main St, City, Country',
    gender: 'Male',
    profilePicture: null,
    dob: '2000-01-01',
    bloodGroup: 'A+',

  })

    const [editData, setEditData] = useState({ ...userProfile });
    const [imagePreview, setImagePreview] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSave = async () => {
    // Basic validation
    if (!editData.name || !editData.email || !editData.phone || !editData.address || !editData.dob || !editData.gender) {
      setResponseMessage('❌ Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setResponseMessage('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setUserProfile({ ...editData });
      setIsEditing(false);
      setImagePreview(null);
      setResponseMessage('✅ Profile updated successfully!');
      
      // Clear message after 3 seconds
      setTimeout(() => setResponseMessage(''), 3000);
    } catch (error) {
      setResponseMessage('❌ Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle cancel edit
  const handleCancel = () => {
    setEditData({ ...userProfile });
    setImagePreview(null);
    setIsEditing(false);
    setResponseMessage('');
  };


  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            My <span className="text-primary">Profile</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Manage your personal information and keep your profile up to date
          </p>
          <div className='mt-12'>
            <User className="h-16 w-16 text-primary mx-auto opacity-80" />
          </div>
        </div>
      </section>

      <hr/>

      {/* Response Message */}
      {responseMessage && (
        <div className="max-w-4xl mx-auto px-4 pt-6">
          <div className={`text-center p-4 rounded-lg ${
            responseMessage.includes('✅') 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {responseMessage}
          </div>
        </div>
      )}

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto"> 
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-blue-600 px-8 py-6">
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Profile Information</h2>
                <div className="flex space-x-3">
                  {!isEditing && (
                    <button
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4" />
                    <span>Edit Profile</span>
                  </button>
                  )}
                  {isEditing && (
                    <button
                    className="flex items-center space-x-2 bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    onClick={handleCancel}>
                     <X className="h-4 w-4" />
                    <span>Cancel</span>
                  </button>
                  )}
                  
                </div>
              </div>
            </div>

            <div className='p-8'>
              <div className="flex flex-col items-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg">
                    {userProfile.profilePicture ? (
                      <img
                    src='{userProfile.profilePicture'
                    className="w-full h-full object-cover"
                    alt='profile picture'/>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200">
                        <User className="h-16 w-16 text-gray-400" />
                      </div>
                  
                    )}
                    
                  </div>
                </div>
              </div>

              {!isEditing && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600">Full Name</label>
                      <p className="text-lg text-gray-900">{userProfile.name}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600 flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </label>
                      <p className="text-lg text-gray-900">{userProfile.email}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600 flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Phone Number
                      </label>
                      <p className="text-lg text-gray-900">{userProfile.phone}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        Address
                      </label>
                      <p className="text-lg text-gray-900">{userProfile.address}</p>
                    </div>
                    
                  </div>
                  <div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600 flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Date of Birth
                      </label>
                      <p className="text-lg text-gray-900">{new Date(userProfile.dob).toLocaleDateString()}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600">Gender</label>
                      <p className="text-lg text-gray-900">{userProfile.gender}</p>
                    </div>
                    <div className="border-b border-gray-300 pb-3">
                      <label className="text-sm font-semibold text-gray-600">Blood Group</label>
                      <p className="text-lg text-gray-900">{userProfile.bloodGroup}</p>
                    </div>
                  </div>
                </div>

              )}

              {isEditing && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        required
                      />
                    </div>

                    </div>
                    

                      
                    <div>
                        

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                         <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={editData.email}
                          onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={editData.phone}
                          onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </div>

                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={editData.address}
                        onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          value={editData.dob}
                          onChange={(e) => setEditData({ ...editData, dateOfBirth: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={editData.gender}
                          onChange={(e) => setEditData({ ...editData, gender: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Blood Group
                        </label>
                        <select
                          value={editData.bloodGroup}
                          onChange={(e) => setEditData({ ...editData, bloodGroup: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                        >
                          <option value="">Select Blood Group</option>
                          <option value="A+">A+</option>
                          <option value="A-">A-</option>
                          <option value="B+">B+</option>
                          <option value="B-">B-</option>
                          <option value="AB+">AB+</option>
                          <option value="AB-">AB-</option>
                          <option value="O+">O+</option>
                          <option value="O-">O-</option>
                        </select>
                      </div>
                    </div>

                    <div className='flex items-center justify-center'>
                      <button
                      onClick={handleSave}
                      disabled={isSubmitting}
                      className=" mt-10 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      <Save className="h-5 w-5" />
                      <span>{isSubmitting ? 'Saving...' : 'Save Changes'}</span>
                    </button>
                    </div>

                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default MyProfile
