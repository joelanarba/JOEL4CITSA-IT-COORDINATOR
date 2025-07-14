import React from 'react';

const Policies = () => {
  const policies = [
    {
      icon: 'fas fa-users-cog',
      title: 'CITSA Tech Committee',
      description: 'Establish a dedicated tech committee with student representatives to drive innovation, gather feedback, and ensure transparent decision-making in all technology initiatives.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'fas fa-tools',
      title: 'Fix First, Build Better',
      description: 'Prioritize resolving existing technical issues while implementing robust solutions that prevent future problems. A foundation-first approach to sustainable tech growth.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'StudyPal 2.0 + Career Opportunities',
      description: 'Revolutionize the learning experience with an enhanced StudyPal platform while creating pathways for internships, NSS placements, and career development.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'fas fa-headset',
      title: 'Real-Time Support',
      description: 'Implement 24/7 technical support system with instant response capabilities, ensuring students never face prolonged technical difficulties.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Digital Growth Program',
      description: 'Comprehensive digital literacy initiative with club certification programs, skill development workshops, and technology adoption strategies for all students.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The CITSA Tech Blueprint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap for transforming CITSA's technological landscape through innovation, collaboration, and student-centered solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>
        
        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${policy.color}`}></div>
              <div className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${policy.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${policy.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {policy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform CITSA Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Joel's mission to create a more connected, efficient, and innovative CITSA experience for every student.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              <i className="fas fa-handshake mr-2"></i>
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policies;