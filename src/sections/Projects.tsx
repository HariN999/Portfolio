import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp, Calendar, Users, Star } from 'lucide-react';

interface Project {
  title: string;
  duration: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  status: 'completed' | 'ongoing' | 'planned';
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'AgroAid – Multilingual Pest Diagnosis & Pesticide Recommendation',
      duration: 'Jan 2025 – Mar 2025',
      description: 'ML-based image classifier for agricultural pest diagnosis with multilingual support.',
      fullDescription: 'AgroAid is an intelligent agricultural solution that uses machine learning to help farmers diagnose crop pests and receive pesticide recommendations. The system processes images of crops and provides accurate diagnoses in multiple languages, making it accessible to farmers across different regions.',
      technologies: ['Python', 'TensorFlow', 'Google Translate API', 'Flask', 'OpenCV'],
      highlights: [
        '30% improvement in farmer query response accuracy',
        'Multilingual support for Telugu, Hindi, and English',
        'Real-time image processing and classification',
        'Integrated pesticide recommendation system'
      ],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
    },
    {
      title: 'SocialeX – Social Media Web App',
      duration: 'May 2024 – July 2024',
      description: 'Full-stack MERN application with comprehensive social media features.',
      fullDescription: 'SocialeX is a modern social media platform built with the MERN stack, featuring user authentication, real-time posts, comments, and a responsive design. The application includes advanced features like user profiles, friend connections, and content moderation.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT'],
      highlights: [
        'Complete user authentication system',
        'Real-time post creation and interaction',
        'Responsive design with Tailwind CSS',
        'RESTful API with Node.js & Express',
        'MongoDB for efficient data management'
      ],
      github: 'https://github.com/HariN999/SocialeX',
      status: 'completed'
    },
    {
      title: 'Smart-FAQ',
      duration: 'Completed',
      description: 'Intelligent FAQ system with smart search and categorization features.',
      fullDescription: 'Smart-FAQ is an intelligent frequently asked questions system that provides users with quick and accurate answers. The system features smart search capabilities, automatic categorization, and an intuitive user interface for both administrators and end users.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      highlights: [
        'Smart search functionality with keyword matching',
        'Automatic FAQ categorization and organization',
        'User-friendly admin panel for content management',
        'Responsive design for all device types',
        'Fast and efficient search algorithms'
      ],
      github: 'https://github.com/HariN999/Smart-FAQ',
      status: 'completed'
    },
   {
  title: 'Season Spot',
  duration: 'Completed',
  description: 'Web app providing seasonal food and travel recommendations across Indian states.',
  fullDescription: 'Season Spot is a full-stack web application that leverages real-time data and a curated database to suggest seasonal foods and travel destinations across all Indian states. Built with React for the frontend and Flask + MongoDB Atlas for the backend, the platform offers users a simple yet engaging way to explore cultural and seasonal specialties. It aims to combine culture, cuisine, and travel into one interactive experience.',
  technologies: ['React', 'Flask', 'MongoDB Atlas', 'Python', 'REST APIs'],
  highlights: [
    'Seasonal food and travel recommendations for each Indian state',
    'Integrated MongoDB Atlas for cloud-based storage',
    'Deployed frontend on Vercel for global accessibility',
    'Responsive, modern UI with dark mode support',
    'Dynamic filtering based on states and seasons'
  ],
  github: 'https://github.com/HariN999/Season-Spot',
  demo: 'https://season-spot.vercel.app/',
  status: 'completed'
}


  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'planned':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Star size={16} />;
      case 'ongoing':
        return <Users size={16} />;
      case 'planned':
        return <Calendar size={16} />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating expertise in AI/ML and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar size={16} />
                      {project.duration}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expandable Content */}
              {expandedProject === index && (
                <div className="p-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.fullDescription}
                  </p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Highlights:</h4>
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Project Actions */}
              <div className="p-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm"
                >
                  {expandedProject === index ? (
                    <>
                      Less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      More <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;