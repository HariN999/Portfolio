import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional development path
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                        Current
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    B.Tech in CSE-AIML
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>2022 – 2026</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>Malla Reddy University, Hyderabad</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Relevant Coursework:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Data Structures',
                        'Algorithms',
                        'AI/ML',
                        'Full-Stack Development',
                        'Database Systems',
                        'Software Engineering'
                      ].map((course) => (
                        <div
                          key={course}
                          className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm text-center"
                        >
                          {course}
                        </div>
                      ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Academic Focus:</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Strong academic performance with focus on practical applications
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Active participation in coding competitions and hackathons
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        Leadership roles in technical student organizations
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SmartInternz Internship */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Briefcase className="text-green-600 dark:text-green-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Full Stack Developer - MERN Stack
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">Virtual Internship</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>May 2024 – July 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>SmartInternz</span>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Projects:</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "Successfully completed a comprehensive MERN stack project, including the SocialeX social media application."
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Skills Developed:</h4>
                    <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        Full-stack development using React, Node.js, Express, and MongoDB
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        Implementation of user authentication and authorization systems
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        Responsive UI design and modern CSS frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        RESTful API development and database optimization
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        Version control with Git and collaborative development practices
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'JWT'].map((tech) => (
                        <div
                          key={tech}
                          className="px-3 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-lg text-sm text-center"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Certificate:</h4>
                    <a
                      href="https://skillwallet.smartinternz.com/certificate/virtual-internship/d203bbe1b9e242a034b376bafda15a99"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Certificate
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;