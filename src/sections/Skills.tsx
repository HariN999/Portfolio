import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Java', 'Python', 'JavaScript'],
      color: 'blue',
    },
    {
      title: 'Frameworks/Tech',
      icon: Database,
      skills: ['MERN Stack', 'Git/GitHub', 'RESTful APIs', 'MongoDB'],
      color: 'teal',
    },
    {
      title: 'Core Strengths',
      icon: Brain,
      skills: ['DSA (Python/Java)', 'AI/ML', 'Full-Stack Projects', 'Problem Solving'],
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        icon: 'text-blue-600 dark:text-blue-400',
        skill: 'bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200',
      },
      teal: {
        bg: 'bg-teal-50 dark:bg-teal-900/20',
        border: 'border-teal-200 dark:border-teal-800',
        icon: 'text-teal-600 dark:text-teal-400',
        skill: 'bg-teal-100 dark:bg-teal-800 text-teal-800 dark:text-teal-200',
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        border: 'border-purple-200 dark:border-purple-800',
        icon: 'text-purple-600 dark:text-purple-400',
        skill: 'bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={index}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full ${colorClasses.bg} ${colorClasses.border} border-2 mb-4`}>
                    <IconComponent size={32} className={colorClasses.icon} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`${colorClasses.skill} px-4 py-2 rounded-lg text-center font-medium text-sm transition-all duration-300 hover:scale-105`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'System Design',
              'RESTful APIs',
              'Database Design',
              'Code Review',
              'Testing & Debugging',
              'Performance Optimization',
              'Cloud Computing',
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 font-medium hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;