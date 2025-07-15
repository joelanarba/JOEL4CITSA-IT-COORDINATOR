import React, { useState } from 'react';

const Policies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      icon: "fas fa-graduation-cap",
      title: "StudyPal 2.0",
      description: "We will transform StudyPal from a simple Telegram bot into a smart academic assistant integrated into the Digital Library. Students will be able to use prompts to access lecture slides, past questions, revision materials, summarized notes, and course-specific content all powered by AI.",
      color: "from-blue-500 to-blue-600",
      fullExplanation: {
        subtitle: "Smarter learning, one prompt at a time.",
        whatItIs: "We will transform the current StudyPal into a smart academic assistant. The upgraded version will be integrated into the CITSA Digital Library, allowing students to use prompts to access lecture slides, past questions, summarized notes, revision tools, and course-specific materials all powered by AI.",
        whyItMatters: "Academic success should never be slowed by disorganized resources. Many students struggle to find what they need when they need it. A smart, centralized assistant not only saves time but boosts consistent revision and collaborative learning. This is especially useful during mid-semester stress and exam seasons.",
        howItWillBeDone: "We will redesign StudyPal as a web-based interface linked with the Digital Library. AI-powered search features will help students retrieve tailored results. A prompt like Level 200 OS past questions could instantly surface relevant content."
      }
    },
    {
      icon: "fas fa-user-cog",
      title: "Internship Portal 2.0",
      description: "We will expand the Internship Portal by introducing NSS and internship listings, and gradually work with industry partners to create opportunities tailored to students skills and fields.",
      color: "from-indigo-500 to-indigo-600",
      fullExplanation: {
        subtitle: "From searching for opportunities to creating them.",
        whatItIs: "We will enhance the Internship Portal by adding NSS and internship listings but also go a step further. We will reach out to companies, organizations, and startups to create new opportunities by matching their needs with student skill sets across various fields.",
        whyItMatters: "Not every student has the time or network to scout for career opportunities. And most platforms only list existing roles. This policy turns CITSA into a bridge-builder offering internships, projects, and NSS options tailored to its members. It also makes the IT Coordinator office more relevant to every student career journey.",
        howItWillBeDone: "We will identify companies not just tech-based, learn what skills they need, and match them to students within CITSA. We will use Google Forms or Airtable to track interested students. Listings will be posted on the enhanced portal, updated frequently, and shared through class reps and the PRO channels."
      }
    },
    {
      icon: "fas fa-users",
      title: "CITSA Tech Committee",
      description: "We will build a dynamic student-led team of developers, designers, testers, content creators, and tech enthusiasts to maintain, improve, and promote CITSA platforms, suggest IT solutions, and support awareness and education on all CITSA tools.",
      color: "from-yellow-500 to-yellow-600",
      fullExplanation: {
        subtitle: "Tech should not be a one-man job it should be student-powered.",
        whatItIs: "We will form an official CITSA Tech Committee a voluntary student team of developers, designers, testers, content creators, and tech enthusiasts. The committee will support the IT Coordinator in maintaining platforms, suggesting solutions, fixing bugs, and driving awareness.",
        whyItMatters: "One coordinator cannot do it all and they should not have to. The department is full of talent, and many students want real-world experience. This committee creates a space for collaborative leadership, capacity building, and peer-driven innovation.",
        howItWillBeDone: "Open calls will be made at the start of the semester. Members will be grouped by skill like frontend, backend, UI/UX, communications. The committee will work on real tasks from debugging portals to writing platform guides. Participation certificates can be issued, and work can be listed on members CVs or GitHub profiles."
      }
    },
    {
      icon: "fas fa-wrench",
      title: "Fix First, Build Better",
      description: "Prioritize resolving existing technical issues while implementing robust solutions that prevent future problems. A foundation-first approach to sustainable tech growth.",
      color: "from-green-500 to-green-600",
      fullExplanation: {
        subtitle: "Let us fix what we have before we dream of what we do not have.",
        whatItIs: "This policy focuses on stabilizing, improving, and maintaining existing CITSA platforms such as the Dues Portal, Membership Portal, StudyPal, and the Internship Portal before adding anything new.",
        whyItMatters: "Too many digital platforms fail not because they were not innovative but because they were not maintained. Students lose trust when portals crash, freeze, or do not function smoothly. Before new ideas are rolled out, the basics must work.",
        howItWillBeDone: "We will audit existing platforms for bugs, broken links, and user pain points. The Tech Committee will assist with diagnostics and improvements. We will also set up scheduled platform reviews once every 3 weeks to catch issues early."
      }
    },
    {
      icon: "fas fa-headset",
      title: "Real-Time Support System",
      description: "Implement 24/7 technical support system with instant response capabilities, ensuring students never face prolonged technical difficulties.",
      color: "from-red-500 to-red-600",
      fullExplanation: {
        subtitle: "Tech help should not take hours or days.",
        whatItIs: "We will launch a dedicated WhatsApp help channel for fast, real-time support. Through this channel, students can report issues with portals, request assistance, or give feedback directly to the tech team.",
        whyItMatters: "Students get frustrated when they are stuck and do not know where to go. A support channel shows that the IT Coordinator office is present, responsive, and reliable. It also helps reduce escalations and missed communications.",
        howItWillBeDone: "The line will be manned by the IT Coordinator or a rotation of trusted Tech Committee reps. Clear instructions will be given on how to request help. Students will also be able to report issues like login problems, broken links, or system bugs."
      }
    },
    {
      icon: "fas fa-chart-line",
      title: "Stronger CITSA Clubs",
      description: "We will strengthen CITSA clubs by supporting consistent activities, promoting hands-on learning, and ensuring students receive impactful training and recognition for their participation.",
      color: "from-purple-500 to-purple-600",
      fullExplanation: {
        subtitle: "Consistent clubs. Real learning. Recognized participation.",
        whatItIs: "We will support and strengthen the existing CITSA clubs like Developers Club, CyberSec Club by encouraging regular activities, improving attendance, and providing recognition through certificates and showcases.",
        whyItMatters: "CITSA clubs are where real skills are built. But many fizzle out due to poor attendance, low visibility, or lack of leadership. When clubs thrive, students gain hands-on experience which boosts both learning and employability.",
        howItWillBeDone: "We will work with club heads to co-design a calendar of activities. Attendance can be tracked via Google Forms or QR codes, and participants who complete a semester worth of sessions will receive participation certificates. Exceptional members can even demo their projects during departmental events."
      }
    },
  ];

  return (
    <section id="policies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The CITSA Tech Blueprint
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive roadmap for transforming CITSA technological landscape through innovation, collaboration, and student-centered solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8"></div>
        </div>

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
                  className="mt-4 text-blue-600 hover:underline font-semibold flex items-center group"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-200"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform CITSA Together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join Joel mission to create a more connected, efficient, and innovative CITSA experience for every student.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              <i className="fas fa-handshake mr-2"></i>
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden">
            <div className={`bg-gradient-to-r ${selectedPolicy.color} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                    <i className={`${selectedPolicy.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedPolicy.title}</h2>
                    <p className="text-blue-100 opacity-90">{selectedPolicy.fullExplanation.subtitle}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="text-white hover:text-red-200 transition-colors duration-200 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white hover:bg-opacity-20"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-lightbulb text-yellow-500 mr-2"></i>
                    What it is:
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedPolicy.fullExplanation.whatItIs}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-heart text-red-500 mr-2"></i>
                    Why it matters:
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedPolicy.fullExplanation.whyItMatters}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <i className="fas fa-cogs text-blue-500 mr-2"></i>
                    How it will be done:
                  </h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedPolicy.fullExplanation.howItWillBeDone}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className={`flex-1 bg-gradient-to-r ${selectedPolicy.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300`}
                >
                  <i className="fas fa-thumbs-up mr-2"></i>
                  Support This Initiative
                </button>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                >
                  <i className="fas fa-times mr-2"></i>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Policies;