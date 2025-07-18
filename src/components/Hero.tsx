import React, { useState } from 'react';

import profilePicture from '../../assets/profilepicture.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSupportClick = () => {
    setIsModalOpen(true);
  };

  const handleGetInvolvedClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleViewBlueprint = () => {
    const policiesSection = document.getElementById('policies');
    if (policiesSection) {
      policiesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const handleDownloadCV = () => {
    // Google Drive direct download link
    const googleDriveFileId = '1nCzK4ayvgUige2ff4j5QdBxCmdYycEm_';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Joel_Anarba_CV.pdf';
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    "Front End": [
      { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
      { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
      { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
      { name: "TypeScript", icon: "fab fa-js-square", color: "text-blue-600" },
      { name: "React.js", icon: "fab fa-react", color: "text-cyan-500" },
      { name: "Next.js", icon: "fas fa-arrow-right", color: "text-gray-800" }
    ],
    "Backend": [
      { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
      { name: "Python", icon: "fab fa-python", color: "text-yellow-600" }
    ],
    "Database": [
      { name: "MySQL", icon: "fas fa-database", color: "text-blue-600" }
    ],
    "Tools": [
      { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" },
      { name: "GitHub", icon: "fab fa-github", color: "text-gray-800" },
      { name: "Figma", icon: "fab fa-figma", color: "text-purple-500" },
      { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
      { name: "Firebase", icon: "fas fa-fire", color: "text-yellow-500" },
      { name: "Postman", icon: "fas fa-mail-bulk", color: "text-orange-500" },
      { name: "Linux", icon: "fab fa-linux", color: "text-gray-800" }
    ]
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"></div>
        
        {/* Vote Number Banner */}
        <div className="relative z-10 py-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 shadow-lg">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-900 font-bold">
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-vote-yea mr-2"></i>
                  <span>VOTE #2 – JOEL FOR IT COORDINATOR</span>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Election Day: 25th July, 2025</span>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Let's Build Tech That Works for All</span>
                </div>
              </div>
            </div>
          </div>
        </div>

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
               <p className="text-lg md:text-xl text-blue-100 flex flex-col items-center justify-center lg:flex-row lg:justify-start">
  <i className="fas fa-network-wired text-yellow-400 mb-2 lg:mb-0 lg:mr-3"></i>
  <span className="font-semibold">#ITForThePeople</span>
  <span className="mt-1 lg:ml-4 lg:mt-0">#MaintainUpgradeServe</span>
  <span className="mt-1 lg:ml-4 lg:mt-0">#ForwardTogether</span>
</p>

          <p className="text-base md:text-lg text-blue-200 max-w-2xl mx-auto lg:mx-0">
            Let's build tech that works and works for all.
          </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleSupportClick}
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-vote-yea mr-2"></i>
                Support Joel's Vision
              </button>
              <button 
                onClick={handleViewBlueprint}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
              >
                <i className="fas fa-scroll mr-2"></i>
                View The CITSA Tech Blueprint
              </button>
            </div>

            {/* GitHub Profile and CV Download */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6">
              <a
                href="https://github.com/joelanarba"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                <i className="fab fa-github mr-2"></i>
                View GitHub Profile
              </a>
              <button
                onClick={handleDownloadCV}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </button>
            </div>

            {/* Skills Section */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <i className="fas fa-tools mr-2 text-yellow-400"></i>
                Technical Skills
              </h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-blue-200 mb-2">{category}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                        >
                          <i className={`${skill.icon} ${skill.color} mr-2`}></i>
                          <span className="text-white">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-2xl relative transform animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors duration-200 text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <i className="fas fa-times"></i>
            </button>
            
            {/* Modal Content */}
            <div className="p-8">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-vote-yea text-gray-900 text-2xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">VOTE #2 ON THE BALLOT</h2>
                  <p className="text-xl text-gray-800 mb-4">Joel Anarba Amuni for CITSA IT Coordinator</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-gray-700">
                    <i className="fas fa-calendar-alt mr-2 text-blue-600"></i>
                    <span className="font-semibold">Election Day: 25th July</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <i className="fas fa-wrench mr-2 text-green-600"></i>
                    <span className="font-semibold">Maintain. Upgrade. Serve.</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <i className="fas fa-users mr-2 text-purple-600"></i>
                    <span className="font-semibold">Let's build smarter tech for students, by students.</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Don't just believe in change, vote for it, vote Joel 4 IT COORDINATOR on 25th July.
                </p>
                
                <button
                  onClick={handleCloseModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-thumbs-up mr-2"></i>
                  Let's Do This!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
};

export default Hero;