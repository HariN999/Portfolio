import React from 'react';
import { Target, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
  {/* Profile Photo */}
  <div className="text-center">
    <div className="relative inline-block">
      <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-2xl">
        <div className="w-full h-full rounded-full overflow-hidden">
          <img 
            src="images/Profile Photo.jpeg"
            alt="Narlakanti Hariharan - Software Developer" 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <Briefcase size={24} className="text-white" />
      </div>
    </div>
  </div>


          {/* Content */}
          <div className="space-y-8">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                I'm a final-year CSE student focused on backend and full-stack development. I build deployed web apps with React, FastAPI/Flask, REST APIs, and MongoDB, including an NLP summarizer with separated frontend/backend deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800 border-t-4 border-t-blue-500">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="text-blue-600 dark:text-blue-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Engineering Focus</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building REST APIs with FastAPI/Flask, React frontends, and database-backed project workflows. Current focus: stronger API design and deployment reliability.
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 border-t-4 border-t-indigo-500">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="text-indigo-600 dark:text-indigo-400" size={24} />
                  <h3 className="font-semibold text-gray-900 dark:text-white">Target Role</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  SDE at a product-based company with strong engineering culture. Mid-term: backend or full-stack engineer building at scale. Long-term: engineering leadership.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['FastAPI', 'React', 'REST APIs', 'Deployed Applications'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
