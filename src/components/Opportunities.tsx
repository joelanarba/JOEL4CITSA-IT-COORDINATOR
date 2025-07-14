import React from 'react';

const Opportunities = () => {
  const opportunities = [
    {
      type: 'NSS Placement',
      title: 'Software Development NSS - Tech Startup',
      company: 'InnovateTech Solutions',
      location: 'Remote/Hybrid',
      deadline: 'March 15, 2025',
      description: 'Full-stack development position focusing on React and Node.js. Perfect for students looking to gain real-world experience.',
      requirements: ['JavaScript/TypeScript', 'React', 'Node.js', 'Database Management'],
      icon: 'fas fa-code',
      color: 'from-blue-500 to-blue-600'
    },
    {
      type: 'Internship',
      title: 'UI/UX Design Intern',
      company: 'Creative Digital Agency',
      location: 'On-site',
      deadline: 'March 20, 2025',
      description: 'Design-focused internship working on user interface and experience projects for various clients.',
      requirements: ['Figma/Adobe XD', 'Design Thinking', 'Prototyping', 'User Research'],
      icon: 'fas fa-palette',
      color: 'from-purple-500 to-purple-600'
    },
    {
      type: 'NSS Placement',
      title: 'Data Analytics NSS',
      company: 'DataInsights Corp',
      location: 'Hybrid',
      deadline: 'March 25, 2025',
      description: 'Data analysis and visualization role working with large datasets to generate business insights.',
      requirements: ['Python/R', 'SQL', 'Data Visualization', 'Statistical Analysis'],
      icon: 'fas fa-chart-bar',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Opportunities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access the latest NSS placements and internship opportunities. Joel's commitment to bridging education and industry.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>
        
        {/* Opportunities List */}
        <div className="space-y-8">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${opportunity.color} mr-4`}>
                        <i className={`${opportunity.icon} text-white text-xl`}></i>
                      </div>
                      <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${opportunity.color} text-white`}>
                          {opportunity.type}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <i className="fas fa-building mr-2"></i>
                        <span>{opportunity.company}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span>{opportunity.location}</span>
                      </div>
                      <div className="flex items-center">
                        <i className="fas fa-calendar-alt mr-2"></i>
                        <span>Apply by {opportunity.deadline}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {opportunity.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {opportunity.requirements.map((req, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 flex flex-col space-y-3">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <i className="fas fa-paper-plane mr-2"></i>
                      Apply Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                      <i className="fas fa-info-circle mr-2"></i>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Upload New Opportunity */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              <i className="fas fa-bullhorn mr-2"></i>
              Share New Opportunities
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Know of an NSS placement or internship opportunity? Help fellow students by sharing it here.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              <i className="fas fa-plus mr-2"></i>
              Post Opportunity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;