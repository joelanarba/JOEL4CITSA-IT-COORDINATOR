import React from 'react';

import profilePicture from '../../assets/profilepicture.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                Joel Anarba Amuni
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-100 mb-6">
              CITSA IT COORDINATOR Hopeful '25
            </h2>
          </div>
          
          {/* Three-part tagline */}
          <div className="mb-8 space-y-3">
             <p className="text-lg md:text-xl text-blue-100 flex items-center justify-center lg:justify-start">
          <i className="fas fa-network-wired text-yellow-400 mr-3"></i>
          <span className="font-semibold">#ITForThePeople</span>
          <span className="ml-4">#MaintainUpgradeServe</span>
          <span className="ml-4">#ForwardTogether</span>
        </p>
        <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto lg:mx-0">
          Let’s build tech that works and works for all.
        </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <i className="fas fa-vote-yea mr-2"></i>
              Support Joel's Vision
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
              <i className="fas fa-scroll mr-2"></i>
              View The CITSA Tech Blueprint
            </button>
          </div>
        </div>
        
        {/* Profile Photo */}
        <div className="flex-shrink-0 lg:ml-12">
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full shadow-2xl relative overflow-hidden">
                {/* Placeholder for profile photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <i className="fas fa-user text-white text-6xl lg:text-8xl opacity-50"></i>
                </div>
                {/* Use your actual photo here */}
                <img 
                  src={profilePicture} 
                  alt="Joel Anarba" 
                  className="w-full h-full object-cover absolute z-10"
                />
              </div>
            {/* Floating tech elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <i className="fas fa-code text-gray-900 text-lg"></i>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <i className="fas fa-laptop-code text-gray-900 text-lg"></i>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="fas fa-chevron-down text-2xl"></i>
      </div>
    </section>
  )
};

export default Hero;