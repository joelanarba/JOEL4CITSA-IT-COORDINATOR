import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVoteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        {/* Vote Number Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 py-6 mb-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-gray-900 font-bold">
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-vote-yea mr-2"></i>
                  <span>VOTE #2 – JOEL FOR IT COORDINATOR</span>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-calendar-alt mr-2"></i>
                  <span>Election Day: 25th July, 2025(Online)</span>
                </div>
                <div className="flex items-center text-lg md:text-xl">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Let's Build Tech That Works for All</span>
                </div>
              </div>
              <button
                onClick={handleVoteClick}
                className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
              >
                <i className="fas fa-vote-yea mr-2"></i>
                Vote #2
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Joel Anarba Amuni</h3>
                <p className="text-blue-400 font-medium">CITSA IT COORDINATOR Hopeful'25</p>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming CITSA's technological landscape through innovation, collaboration, and student-centered solutions. Together, we build a better digital future.
              </p>
              <div className="flex space-x-4">
                <a href="https://x.com/joel_anarba" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/joelanarba" className="w-10 h-10 bg-black-300 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://wa.me/233550840524" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://linkedin.com/in/joel-anarba" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#policies" className="text-gray-400 hover:text-white transition-colors duration-300">The CITSA Tech Blueprint</a></li>
                <li><a href="#opportunities" className="text-gray-400 hover:text-white transition-colors duration-300">Opportunities</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Campaign Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Campaign Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <i className="fas fa-calendar-alt mr-2 text-blue-400"></i>
                  Election: 25th July, 2025
                </li>
                <li className="flex items-center">
                  <i className="fas fa-laptop mr-2 text-blue-400"></i>
                  Online
                </li>
                <li className="flex items-center">
                  <i className="fas fa-users mr-2 text-blue-400"></i>
                  Vote #2 Vote Joel 4 IT Coordinator
                </li>
                <li className="flex items-center">
                  <i className="fas fa-hashtag mr-2 text-blue-400"></i>
                  JOEL 4 CITSA IT COORDINATOR
                </li>
              </ul>
            </div>
          </div>
          
          {/* Campaign Slogan */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                #ITForThePeople • #MaintainUpgradeServe • #ForwardTogether
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Every vote for Joel is a vote for accessible tech, smarter platforms, and a CITSA that truly works for its students.
              </p>
            </div>
          </div>
          {/* Bottom Bar */}
           <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                <p>© 2025 Joel Publicity Team. All rights reserved.</p>
                <p className="mt-1">Authorized by Joel Anarba Amuni</p>
                <p className="mt-2 text-xs bg-gray-800 px-3 py-1 rounded-full inline-block">
                  <i className="fas fa-info-circle mr-1"></i>
                  Campaign Website - Not a Personal Portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Vote Modal */}
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
                  <p className="text-xl text-gray-800 mb-4">Joel for CITSA IT Coordinator</p>
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
                  Don't just believe in change, vote for it, vote JOEL as your next IT COORDINATOR.
                </p>
                
                <button
                  onClick={handleCloseModal}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fas fa-thumbs-up mr-2"></i>
                  Let's Make it Happen!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;