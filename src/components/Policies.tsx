import React, { useState } from 'react';

const Policies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'StudyPal 2.0',
      description:
        'We’ll transform StudyPal from a simple Telegram bot into a smart academic assistant integrated into the Digital Library. Students will be able to use prompts to access lecture slides, past questions, revision materials, summarized notes, and course-specific content all powered by AI.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: 'fas fa-user-cog',
      title: 'Internship Portal 2.0',
      description:
        'We’ll expand the Internship Portal by introducing NSS and internship listings, and gradually work with industry partners to create opportunities tailored to students’ skills and fields.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: 'fas fa-users',
      title: 'CITSA Tech Committee',
      description:
        'We’ll build a dynamic student-led team of developers, designers, testers, content creators, and tech enthusiasts to maintain, improve, and promote CITSA platforms, suggest IT solutions, and support awareness and education on all CITSA tools.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: 'fas fa-wrench',
      title: 'Fix First, Build Better',
      description:
        'Prioritize resolving existing technical issues while implementing robust solutions that prevent future problems. A foundation-first approach to sustainable tech growth.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: 'fas fa-headset',
      title: 'Real-Time Support',
      description:
        'Implement 24/7 technical support system with instant response capabilities, ensuring students never face prolonged technical difficulties.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Stronger CITSA Clubs',
      description:
        'We’ll strengthen CITSA’s clubs by supporting consistent activities, promoting hands-on learning, and ensuring students receive impactful training and recognition for their participation.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The CITSA Tech Blueprint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap for transforming CITSA's technological landscape through innovation, collaboration, and student-centered solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${policy.color}`}></div>
              <div className="p-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${policy.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <i className={`${policy.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {policy.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-4">
                  {policy.description}
                </p>
                <button
                  onClick={() => setSelectedPolicy(policy)}
                  className="mt-4 text-blue-600 hover:underline font-semibold"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
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

      {/* Modal */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white w-[90%] max-w-xl rounded-xl shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedPolicy(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${selectedPolicy.color} mb-4`}>
              <i className={`${selectedPolicy.icon} text-white text-xl`}></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedPolicy.title}</h2>
            <p className="text-gray-700 leading-relaxed">{selectedPolicy.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Policies;
