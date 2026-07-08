import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: 'Saaram — AI-Powered Telugu Summarization Platform',
      duration: 'Aug 2024 – Mar 2025',
      description: 'Full-stack AI application for Telugu news summarization using TF-IDF and mT5, featuring optional speech generation via a neural Text-to-Speech (TTS) pipeline.',
      technologies: ['React', 'FastAPI', 'Python', 'Transformers (mT5)', 'Docker', 'Vercel', 'Hugging Face Spaces'],
      highlights: [
        'Designed and deployed a FastAPI-based AI inference platform serving 5+ REST endpoints with dynamic model routing, fallback handling, and latency-aware inference optimization',
        'Built and containerized a full-stack system (React/Vite frontend, FastAPI backend) deployed across cloud platforms using Docker and lazy model loading under constrained compute',
        'Benchmarked TF-IDF, mT5 Base, and fine-tuned mT5 models across a 1,302-sample dataset to optimize latency-quality tradeoffs',
        'Received the Best Project Award at Malla Reddy University; co-authored research paper submitted to CIS 2026 (Springer LNNS)'
      ],
      architecture: 'React → FastAPI → Inference Router → TF-IDF / mT5 → TTS → Audio Response',
      challenge: 'Managed large mT5 model inference constraints on free-tier servers using adaptive fallback routing and Docker containers.',
      github: 'https://github.com/HariN999/Saaram-telugu-summarizer',
      demo: 'https://automated-telugu-text-summarization.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'ResearchCompass — AI Research Review Platform',
      duration: 'Personal Project',
      description: 'AI-powered research assistant and reasoning agent for automated paper analysis, research gap discovery, novelty assessment, and implementation guidance.',
      technologies: ['React', 'FastAPI', 'Python', 'LLM APIs', 'Azure AI Foundry', 'PyMuPDF', 'Vercel'],
      highlights: [
        'Built a FastAPI backend that parses uploaded PDF research papers using PyMuPDF and generates structured multi-section reviews using LLM APIs via Azure AI Foundry',
        'Designed a document intelligence pipeline for extraction, context retrieval, structured reasoning, and AI-powered response generation',
        'Refactored an initial multi-agent workflow into a streamlined inference pipeline, improving output reliability and reducing orchestration complexity'
      ],
      architecture: 'React → FastAPI → PDF Extraction (PyMuPDF) → Azure AI Foundry LLMs → Contextual Reasoner',
      challenge: 'Ensured semantic coherence and accurate context window management when analyzing highly specialized multi-page PDF documents.',
      github: 'https://github.com/HariN999/ResearchCompass',
      demo: 'https://research-compass-gray.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'Smart-FAQ — AI Semantic Search Platform',
      duration: 'Personal Project',
      description: 'Full-stack AI semantic search platform built with FastAPI, React, MongoDB, and SentenceTransformers for contextual and semantic query matching.',
      technologies: ['FastAPI', 'React', 'MongoDB', 'Python', 'SentenceTransformers', 'Semantic Search', 'JWT Auth'],
      highlights: [
        'Transitioned backend from keyword search to semantic vector matching using SentenceTransformers',
        'Designed FastAPI CRUD endpoints for FAQ management with secure JWT authentication',
        'Implemented category-based search caching and query lookup optimizations in MongoDB'
      ],
      architecture: 'React → FastAPI + JWT → SentenceTransformers (Embeddings) → MongoDB Vector Query',
      challenge: 'Maintained fast query matching responses on database-level vector lookups without native vector extension support.',
      github: 'https://github.com/HariN999/Smart-FAQ',
      status: 'completed'
    },
    {
      title: 'AgroAid — AI-Based Crop Disease Detection',
      duration: 'Jan 2025 – Mar 2025',
      description: 'Flask-based inference service integrating a pretrained PyTorch CNN with a structured recommendation pipeline for crop disease prediction across 39 categories.',
      technologies: ['Python', 'PyTorch', 'CNNs', 'Flask', 'Google Translate API', 'AJAX'],
      highlights: [
        'Built a Flask-based inference service integrating a pretrained PyTorch CNN with a structured recommendation pipeline for crop disease prediction across 39 categories',
        'Delivered multilingual treatment recommendations in English, Hindi, and Telugu using translation APIs and AJAX-based request handling'
      ],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
    },
    {
      title: 'Season Spot — Seasonal Recommendation App',
      duration: '2024',
      description: 'React + Flask application serving seasonal food and travel recommendations from MongoDB Atlas, with a live Vercel frontend.',
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
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top/Header Content */}
              <div>
                <div className="p-6">
                  {(index === 0 || index === 1) && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                      <Star size={12} />
                      {index === 0 ? 'Featured · B.Tech Capstone · Deployed AI App' : 'Featured · Deployed AI Agent'}
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

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies (Always Visible) */}
                  <div className="flex flex-wrap gap-2">
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

                {/* Collapsible Section (Highlights, Architecture, Challenge) */}
                <AnimatePresence>
                  {expandedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/50"
                    >
                      <div className="p-6 space-y-4">
                        {project.highlights && project.highlights.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Key Highlights:</h4>
                            <ul className="space-y-2">
                              {project.highlights.map((highlight) => (
                                <li key={highlight} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {(project.architecture || project.challenge) && (
                          <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-300">
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom/Actions Bar */}
              <div className="p-6 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
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

                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-semibold text-sm"
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
