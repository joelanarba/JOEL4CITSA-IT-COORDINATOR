import React from 'react';

const Opportunities = () => {
  const opportunities = [
    // {
    //   type: 'Fellowship',
    //   title: 'Developers Foundry 2.0 Fellowship',
    //   company: 'Developers Foundry',
    //   location: 'Nigeria or Ghana (Remote/Hybrid)',
    //   deadline: 'July 17, 2025',
    //   description: 'Developers Foundry 2.0 is a free, one-year fellowship for developers in Nigeria and Ghana, focused on preparing Africa’s next generation of tech leaders. Participants will gain practical experience through six in-demand tracks: Frontend Development, Backend Development, Mobile Development, DevOps, AI/ML, and Cybersecurity. The program includes hands-on learning, industry-relevant projects, a job-market-aligned curriculum, and career-boosting mentorship from top experts.',
    //   requirements: [
    //     'Must be based in Nigeria or Ghana',
    //     'Strong interest in one or more of the six focus areas',
    //     'Basic experience in software development',
    //     'Commitment to completing the one-year fellowship'
    //   ],
    //   icon: 'fas fa-graduation-cap',
    //   color: 'from-blue-600 to-indigo-700',
    //   applyLink: 'https://lnkd.in/d3__vJT9',
    //   learnMoreLink: 'https://lnkd.in/d3__vJT9'
    // },
    {
      type: 'Internship Opportunities',
      title: 'Thrivella Internship Program - Multiple Roles',
      company: 'Thrivella',
      location: 'Remote/Hybrid',
      deadline: 'Not Specified',
      description: 'Thrivella is excited to offer internship opportunities across multiple fields including Web Development, Mobile App Development, Social Media Management, Product Management, Graphic Design, and Videography. Interns will gain hands-on experience, work with a collaborative team, and enjoy flexible working hours.',
      requirements: [
        'Relevant skills or interest in chosen internship area',
        'Willingness to learn and grow in a fast-paced environment',
        'Team collaboration and communication',
        'Access to required tools and internet connection'
      ],
      icon: 'fas fa-briefcase',
      color: 'from-blue-500 to-purple-600',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdv7RahvMNOa3e9ewtqrTj82DzVKY54vGX-hPuqlWRFQWF-BQ/viewform',
      learnMoreLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdv7RahvMNOa3e9ewtqrTj82DzVKY54vGX-hPuqlWRFQWF-BQ/viewform'
    },
    {
      type: 'NSS Placement',
      title: 'UI/UX Design NSS Opportunity',
      company: 'Sommalife',
      location: 'Wa - Upper West Region',
      deadline: 'July 18, 2025',
      description: 'Sommalife is offering a National Service opportunity for a UI/UX Designer. The role involves using design thinking to solve real-world problems and working on impactful projects using professional design tools. This opportunity comes with exciting benefits including accommodation, daily lunch, and a potential full-time role.',
      requirements: [
        'BSc. in Computer Science, Graphic Design, Information Technology, or a related field',
        'Demonstrable portfolio projects',
        'Good communication and collaboration skills',
        'Understanding of design principles',
        'Experience with design thinking methodologies',
        'Proficiency in Figma, Adobe Illustrator, and Photoshop'
      ],
      icon: 'fas fa-palette',
      color: 'from-green-500 to-green-600',
      applyLink: 'mailto:careers@sommalife.com',
      learnMoreLink: 'mailto:careers@sommalife.com'
    },
    {
      type: 'NSS Placement',
      title: 'National Service Personnel (NSP) Call - Multiple Departments',
      company: 'Nsano Ltd.',
      location: 'On-site',
      deadline: 'Not Specified',
      description: 'Nsano is inviting National Service Personnel to apply for placement across various departments. This is a great opportunity to gain industry experience in a reputable company working at the intersection of technology, business, and communications.',
      requirements: [
        'Background in any of the following: Finance/Accounting, Computer Science, Computer Engineering, Information Technology, Business Administration, Public Relations, Marketing, Law, or Business Communications',
        'Strong communication and teamwork skills',
        'Willingness to learn and adapt in a professional setting'
      ],
      icon: 'fas fa-users',
      color: 'from-indigo-500 to-indigo-600',
      applyLink: 'mailto:careers@nsano.com',
      learnMoreLink: 'https://nsano.com'
    },
    {
      type: 'Fellowship',
      title: 'Future Tech Fellowship',
      company: 'Future Map Foundation',
      location: 'Remote',
      deadline: 'July 21, 2025',
      description: 'The Future Tech Fellowship is a dynamic opportunity for innovators under 35 to gain top-tier digital skills and mentorship. Participants will be trained in Product Design, Data Science, Front-End Development, and Back-End Development. The program offers mentorship from industry leaders, career-transforming exposure, and is especially inclusive of women and persons with disabilities.',
      requirements: [
        'Must be under 35 years old',
        'Passion for technology and innovation',
        'Interest in any of the following: Product Design, Data Science, Front-End, or Back-End Development',
        'Women and persons with disabilities are strongly encouraged to apply'
      ],
      icon: 'fas fa-lightbulb',
      color: 'from-yellow-500 to-orange-600',
      applyLink: 'https://www.futuremapacademy.com/call-for-application',
      learnMoreLink: 'https://www.futuremapacademy.com/call-for-application'
    },
    {
      type: 'Startup Program',
      title: 'MEST AI Startup Program 2026',
      company: 'MEST Africa',
      location: 'Accra, Ghana (In-person)',
      deadline: 'Not Specified',
      description: 'The MEST AI Startup Program offers aspiring African tech entrepreneurs the chance to build innovative AI-driven startups. Participants will receive mentorship from global AI and business experts, hands-on training, and access to a powerful support network to bring their ideas to life.',
      requirements: [
        'Strong interest in Artificial Intelligence and entrepreneurship',
        'Background in tech, business, or related field',
        'Willingness to relocate to Accra for the duration of the program',
        'Commitment to building a scalable AI startup in Africa'
      ],
      icon: 'fas fa-robot',
      color: 'from-gray-700 to-blue-700',
      applyLink: 'https://bit.ly/MESTAI26_TOrG',
      learnMoreLink: 'https://bit.ly/MESTAI26_TOrG'
    },
    {
      type: 'Internship',
      title: 'DigiVibe Campus Ambassador Program',
      company: 'DigiVibe',
      location: 'Remote / On-campus',
      deadline: 'Not Specified',
      description: 'DigiVibe is looking for passionate student leaders and recent graduates to become Campus Ambassadors. As an ambassador, you’ll champion innovation, organize tech-driven events, and build a vibrant community while gaining leadership experience and exposure.',
      requirements: [
        'Passion for technology, innovation, and community building',
        'Strong communication and leadership skills',
        'Must be a student or recent graduate',
        'Active involvement in campus or tech-related activities'
      ],
      icon: 'fas fa-bullhorn',
      color: 'from-pink-500 to-red-600',
      applyLink: 'https://bit.ly/4ehvtbW',
      learnMoreLink: 'https://bit.ly/4ehvtbW'
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
            Discover curated NSS placements and internship openings, part of Joel’s commitment to bridging education with real-world experience and helping every student take the next step forward.
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
                    <a
                      href={opportunity.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      <i className="fas fa-paper-plane mr-2"></i>
                      Apply Now
                    </a>
                    <a
                      href={opportunity.learnMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 text-center"
                    >
                      <i className="fas fa-info-circle mr-2"></i>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upload New Opportunity
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
        </div> */}
      </div>
    </section>
  );
};

export default Opportunities;
