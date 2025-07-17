import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
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
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors duration-300">
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
                Vote Joel 4 IT Coordinator
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
              <p className="mt-1">Authorized by Joel for CITSA IT Coordinator 2025</p>
            </div>
            {/* <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Campaign Ethics
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;