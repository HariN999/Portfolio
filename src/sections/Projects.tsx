import React from 'react';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';

interface Project {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  highlights: string[];
  architecture?: string;
  challenge?: string;
  github?: string;
  demo?: string;
  note?: string;
  status: 'completed' | 'deployed' | 'ongoing' | 'planned';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Telugu AI Summarizer — Full-Stack NLP App',
      duration: 'Aug 2024 – Mar 2025',
      description: 'Deployed full-stack NLP system with React frontend and FastAPI backend, integrating transformer-based summarization with fallback handling and real-time inference.',
      technologies: ['React', 'FastAPI', 'Python', 'Transformers', 'edge-TTS', 'Vercel', 'Render'],
      highlights: [
        'Designed REST APIs for summarization and speech generation',
        'Implemented fallback pipeline to handle model latency and deployment constraints',
        'Deployed frontend (Vercel) and backend (Render) with separated architecture'
      ],
      architecture: 'React → FastAPI → NLP pipeline → fallback → response/audio',
      challenge: 'Handled model latency and memory constraints using fallback summarization strategy.',
      github: 'https://github.com/HariN999/Automated-Telugu-Text-Summarization-and-Speech-Generation-using-NLP',
      demo: 'https://automated-telugu-text-summarization.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'AgroAid — Pest Diagnosis API with Multilingual Output',
      duration: 'Jan 2025 – Mar 2025',
      description: 'ML image-classification app that diagnoses crop pests and returns multilingual pesticide guidance through a Flask API.',
      technologies: ['Python', 'TensorFlow', 'Google Translate API', 'Flask', 'OpenCV'],
      highlights: [
        'Built Flask API for image upload and prediction responses',
        'Integrated TensorFlow/Keras model with preprocessing pipeline',
        'Added Telugu, Hindi, and English output using translation support'
      ],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
    },
    {
      title: 'SocialeX — MERN Social Media App with JWT Auth',
      duration: 'May 2024 – July 2024',
      description: 'Full-stack MERN social app with JWT auth, REST APIs, MongoDB persistence, and React UI built during structured training.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT'],
      highlights: [
        'Implemented JWT-based authentication and protected routes',
        'Designed REST endpoints for posts, comments, and user flows',
        'Modeled MongoDB collections for social interactions'
      ],
      github: 'https://github.com/HariN999/SocialeX',
      status: 'completed'
    },
    {
      title: 'Smart-FAQ — MERN FAQ Search System',
      duration: 'Personal Project',
      description: 'FAQ management app with React UI, Node/Express APIs, MongoDB storage, and keyword-based search.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      highlights: [
        'Designed CRUD APIs for FAQ creation and retrieval',
        'Modeled FAQ categories in MongoDB for faster lookup',
        'Built responsive React interface for search and admin workflows'
      ],
      github: 'https://github.com/HariN999/Smart-FAQ',
      status: 'completed'
    },
    {
      title: 'Season Spot — Seasonal Recommendation App',
      duration: '2024',
      description: 'React + Flask app serving seasonal food and travel recommendations from MongoDB Atlas, with a live Vercel frontend.',
      technologies: ['React', 'Flask', 'MongoDB Atlas', 'Python', 'REST APIs'],
      highlights: [
        'Built Flask REST APIs for state and season filters',
        'Stored recommendation data in MongoDB Atlas',
        'Deployed React frontend on Vercel with API integration'
      ],
      github: 'https://github.com/HariN999/Season-Spot',
      demo: 'https://season-spot.vercel.app/',
      status: 'deployed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'deployed':
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
      case 'deployed':
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
            Engineering projects with deployed full-stack applications, REST APIs, and AI/NLP systems.
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
                {index === 0 && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                    <Star size={12} />
                    Featured · B.Tech Capstone · Deployed AI App
                  </div>
                )}
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

                <ul className="space-y-2 mt-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {(project.architecture || project.challenge) && (
                  <div className="space-y-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                    {project.architecture && (
                      <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Architecture:</span> {project.architecture}
                      </p>
                    )}
                    {project.challenge && (
                      <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Challenge:</span> {project.challenge}
                      </p>
                    )}
                  </div>
                )}

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

              {/* Project Actions */}
              <div className="p-6 bg-gray-100 dark:bg-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
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
                  {project.github && (
                    <div className="flex flex-col gap-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                      {project.note && (
                        <span className="text-xs text-gray-400 dark:text-gray-500 italic pl-1">
                          {project.note}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
