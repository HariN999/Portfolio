import React from 'react';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  duration: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  note?: string;
  status: 'completed' | 'deployed' | 'ongoing' | 'planned';
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Saaram — AI-Powered Telugu Summarization Platform',
      duration: 'Jan – Apr 2026',
      description: 'A FastAPI-based AI inference platform serving 5+ REST endpoints with dynamic model routing, lazy model loading, and neural Text-to-Speech (TTS) audio feedback. Awarded Best Project at Malla Reddy University.',
      technologies: ['React', 'FastAPI', 'Python', 'Transformers (mT5)', 'Docker', 'Vercel', 'Hugging Face Spaces'],
      github: 'https://github.com/HariN999/Saaram-telugu-summarizer',
      demo: 'https://automated-telugu-text-summarization.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'ResearchCompass — AI Research Review Platform',
      duration: 'Personal Project',
      description: 'An AI research assistant that parses uploaded PDF papers using PyMuPDF and runs a document intelligence pipeline to generate structured multi-section reviews via Azure AI Foundry LLM APIs.',
      technologies: ['React', 'FastAPI', 'Python', 'LLM APIs', 'Azure AI Foundry', 'PyMuPDF', 'Vercel'],
      github: 'https://github.com/HariN999/ResearchCompass',
      demo: 'https://research-compass-gray.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'Smart-FAQ — AI Semantic Search Platform',
      duration: 'Personal Project',
      description: 'A full-stack AI semantic search service utilizing FastAPI, React, and MongoDB, integrating SentenceTransformers to match FAQs contextually via vector queries.',
      technologies: ['FastAPI', 'React', 'MongoDB', 'Python', 'SentenceTransformers', 'Semantic Search', 'JWT Auth'],
      github: 'https://github.com/HariN999/Smart-FAQ',
      status: 'completed'
    },
    {
      title: 'AgroAid — AI-Based Crop Disease Detection',
      duration: 'Jan 2025 – Mar 2025',
      description: 'A Flask inference service that integrates a pretrained PyTorch CNN with translation APIs to predict crop disease across 39 categories and output multilingual recommendations.',
      technologies: ['Python', 'PyTorch', 'CNNs', 'Flask', 'Google Translate API', 'AJAX'],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
    },
    {
      title: 'Season Spot — Seasonal Recommendation App',
      duration: '2024',
      description: 'A React + Flask application serving state-specific seasonal food and travel recommendations from MongoDB Atlas with clean dynamic filter options.',
      technologies: ['React', 'Flask', 'MongoDB Atlas', 'Python', 'REST APIs'],
      github: 'https://github.com/HariN999/Season-Spot',
      demo: 'https://season-spot.vercel.app/',
      status: 'deployed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'deployed':
        return 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/30';
      default:
        return 'bg-zinc-50 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 border-zinc-200/50 dark:border-zinc-800/30';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Engineering core services, machine learning APIs, semantic search engines, and agentic workflows.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isFlagship = index === 0 || index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-white/45 dark:bg-zinc-900/20 backdrop-blur-sm rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isFlagship 
                    ? 'border-blue-500/30 dark:border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.04)] dark:shadow-[0_0_20px_rgba(59,130,246,0.06)] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                    : 'border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]'
                }`}
              >
                <div className="p-6 sm:p-8">
                  {isFlagship && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200/20 dark:border-blue-800/20">
                      <Star size={12} className="fill-current" />
                      {index === 0 ? 'Featured · Capstone' : 'Featured · AI Agent'}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-2 font-display tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2">
                        <Calendar size={14} />
                        {project.duration}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${getStatusColor(project.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {project.status}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-bold font-sans"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom/Actions Bar */}
                <div className="p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-900/30 border-t border-zinc-200/50 dark:border-zinc-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-xs font-bold uppercase tracking-wider"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <div className="flex flex-col gap-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-xs font-bold uppercase tracking-wider border border-transparent"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                        {project.note && (
                          <span className="text-[10px] text-zinc-400 dark:text-zinc-500 italic pl-1">
                            {project.note}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
