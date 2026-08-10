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
      title: 'Saaram — AI-Powered Telugu News Summarization & Speech Platform',
      duration: 'Jan – Apr 2026',
      description: 'Built a production-deployed hybrid news summarization platform that combines morphology-aware TF-IDF, mT5 base transformer model, and QLoRA fine-tuning. Implemented an adaptive routing engine that dynamically matches articles to optimal inference paths based on complexity and hardware limits, resource-aware fallback mechanisms, and Telugu text-to-speech feedback.',
      technologies: ['FastAPI', 'React', 'Python', 'Transformers', 'Hugging Face Spaces', 'Vercel', 'Docker'],
      github: 'https://github.com/HariN999/Automated-Telugu-Text-Summarization-and-Speech-Generation-using-NLP.git',
      demo: 'https://saaram-nlp.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'ResearchCompass — AI Research Paper Analyzer',
      duration: 'Personal Project',
      description: 'Engineered an AI-powered document intelligence service that extracts text from multi-page PDF papers using PyMuPDF and runs a Retrieval-Augmented Generation (RAG) pipeline to generate structured critiques and readiness scorecards. Utilizes SentenceTransformers for vector search, ChromaDB for indexing document chunks, and Groq/Llama 3.3 for structured AI analysis.',
      technologies: ['Next.js', 'FastAPI', 'Python', 'Groq (Llama-3.3)', 'ChromaDB', 'PyMuPDF', 'Docker'],
      github: 'https://github.com/HariN999/ResearchCompass',
      demo: 'https://research-compass-gray.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'VoiceVibes AI — Vocal Emotion Analytics Dashboard',
      duration: 'Personal Project',
      description: 'Developed an audio analytics dashboard that processes vocal waveforms directly from standard browser microphone inputs. Features a custom client-side WAV audio encoder delivering mono 16-bit PCM streams and a FastAPI backend running CPU inference via a fine-tuned Wav2Vec2 transformer to visualize real-time 7-class emotional probabilities.',
      technologies: ['FastAPI', 'React', 'PyTorch', 'Wav2Vec2', 'Web Audio API', 'Docker'],
      github: 'https://github.com/HariN999/VoiceVibes.git',
      status: 'completed'
    },
    {
      title: 'Smart-FAQ — Semantic Search Engine',
      duration: 'Personal Project',
      description: 'Designed a semantic search system that contextually maps natural language queries to database resources. Implemented a FastAPI service that converts text questions to vector embeddings using SentenceTransformers, query matches using cosine similarity, and interfaces with a MongoDB database for document retrieval, protected by JWT admin authentication.',
      technologies: ['FastAPI', 'React', 'MongoDB', 'SentenceTransformers', 'PyTorch', 'JWT Auth'],
      github: 'https://github.com/HariN999/Smart-FAQ',
      status: 'completed'
    },
    {
      title: 'SocialeX — Real-Time Social Media Application',
      duration: 'May – Jul 2024',
      description: 'Built a full-stack real-time social platform featuring live 1-on-1 private messaging, post creation, and 24-hour stories. Engineered an Express/Node.js backend with Socket.io for WebSocket communication, Firebase Storage for rich media hosting, and JWT-authenticated routes for user profiles and feeds.',
      technologies: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Firebase'],
      github: 'https://github.com/HariN999/SocialeX.git',
      status: 'completed'
    },
    {
      title: 'AgroAid — AI-Based Crop Disease Classifier',
      duration: 'Jan – Mar 2025',
      description: 'Developed a computer vision crop diagnostics service that processes plant imagery to classify disease across 39 distinct crop categories. Built using a fine-tuned PyTorch Convolutional Neural Network (CNN) with a Flask interface and integrated translation API services for multilingual suggestions.',
      technologies: ['Python', 'PyTorch', 'CNNs', 'Flask', 'APIs'],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
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
              Engineering core services, machine learning APIs, semantic search engines, and real-time backend systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const isFlagship = index === 0 || index === 1 || index === 2;
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
                      {index === 0 ? 'Featured · Capstone' : index === 1 ? 'Featured · RAG / Document AI' : 'Featured · Audio AI'}
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
