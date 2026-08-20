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
      description: 'Built a production-deployed hybrid Telugu NLP news summarization platform combining morphology-aware TF-IDF, mT5 transformer models, and QLoRA fine-tuning. Implemented an adaptive routing engine matching articles to optimal inference paths, resource-aware fallbacks, neural text-to-speech, and rigorous evaluation/benchmarking on the XL-Sum dataset.',
      technologies: ['FastAPI', 'React', 'Python', 'Transformers', 'Hugging Face Spaces', 'Vercel', 'Docker'],
      github: 'https://github.com/HariN999/Automated-Telugu-Text-Summarization-and-Speech-Generation-using-NLP.git',
      demo: 'https://saaram-nlp.vercel.app/',
      status: 'deployed'
    },
    {
      title: 'ResearchCompass — AI Research Paper Analyzer',
      duration: 'Personal Project',
      description: 'Engineered a document intelligence service extracting text from multi-page PDF papers via PyMuPDF to run a semantic retrieval and RAG pipeline. Features SentenceTransformers vector search, ChromaDB indexing, and Groq/Llama for structured critiques and readiness scoring, exposed via FastAPI.',
      technologies: ['Next.js', 'FastAPI', 'Python', 'Groq (Llama-3.3)', 'ChromaDB', 'PyMuPDF', 'Docker', 'TypeScript', 'TailwindCSS'],
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
      title: 'Season-Spot — India-Focused Seasonal Travel Guide & AI Planner',
      duration: 'Personal Project',
      description: 'Engineered a seasonal travel guide and itinerary planner using FastAPI, Pydantic validation, and a validated JSON knowledge base. Integrates a Gemini API itinerary generation pipeline with structured outputs, regex-based JSON extraction, TTL caching, and a deterministic local fallback system.',
      technologies: ['FastAPI', 'React', 'Gemini API', 'Pydantic', 'Material UI', 'Vercel', 'Python'],
      github: 'https://github.com/HariN999/Season-Spot.git',
      demo: 'https://season-spot.vercel.app/',
      status: 'deployed'
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
      title: 'SocialeX — Text-First Social Network',
      duration: 'Jun 2025, Aug 2026',
      description: 'Built a full-stack text-first social network combining React, Node.js, and MongoDB. Features authenticated social interactions, user search, profile curation, and real-time 1-on-1 messaging via Socket.IO. Enforces strict server-side authorization boundaries, where user identity is derived from verified JWT handshakes to protect chat access and post deletion.',
      technologies: ['React', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT Auth', 'CSS'],
      github: 'https://github.com/HariN999/SocialeX.git',
      status: 'completed'
    },
    {
      title: 'AgroAid — AI-Based Crop Disease Classifier',
      duration: 'Jan – Mar 2025',
      description: 'Developed a computer vision diagnostics and agricultural decision-support system classifying 39 crop disease categories. Implemented image validation, model uncertainty visualization, and vendor-neutral active ingredient mapping using PyTorch and Flask.',
      technologies: ['Python', 'PyTorch', 'CNNs', 'Flask', 'Pandas', 'pytest'],
      github: 'https://github.com/HariN999/AgroAid',
      status: 'completed'
    },
    {
      title: 'HelmetDetection — YOLOv3 Helmet Detection System',
      duration: 'Personal Project',
      description: 'Developed a safety detection system using YOLOv3 and OpenCV to detect helmets in real-time. Features a lightweight Flask web interface for uploading images and displaying annotated bounding-box outputs.',
      technologies: ['Python', 'OpenCV', 'Flask', 'YOLOv3'],
      github: 'https://github.com/HariN999/HelmetDetection.git',
      status: 'completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'deployed':
        return 'bg-emerald-50/50 dark:bg-emerald-950/10 text-emerald-700 dark:text-emerald-400 border-emerald-200/30 dark:border-emerald-900/20';
      default:
        return 'bg-zinc-50 dark:bg-zinc-900/30 text-zinc-600 dark:text-zinc-400 border-zinc-200/40 dark:border-zinc-800/20';
    }
  };

  return (
    <section id="projects" className="py-24 transition-colors duration-300 relative scroll-mt-24">
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
            <p className="text-sm sm:text-base text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Engineering core services, machine learning APIs, semantic search engines, and real-time backend systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {projects.map((project, index) => {
            const isFlagship = index === 0 || index === 1 || index === 2 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`bg-white dark:bg-zinc-900/15 rounded-lg border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isFlagship 
                    ? 'border-blue-500/20 dark:border-blue-500/20 hover:border-blue-500/40 hover:shadow-sm' 
                    : 'border-zinc-200/60 dark:border-zinc-800/40 hover:border-blue-500/20 hover:shadow-sm'
                }`}
              >
                <div className="p-6 sm:p-8 flex-grow">
                  {isFlagship && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-100/30 dark:border-blue-900/20">
                      <Star size={10} className="fill-current flex-shrink-0" />
                      {index === 0 
                        ? 'Featured · Capstone' 
                        : index === 1 
                        ? 'Featured · RAG / Document AI' 
                        : index === 2 
                        ? 'Featured · Audio AI' 
                        : 'Featured · AI Travel Planner'}
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1.5 font-display tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        <Calendar size={12} />
                        {project.duration}
                      </div>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border inline-flex items-center gap-1 flex-shrink-0 leading-none h-fit ${getStatusColor(project.status)}`}>
                      <span className="w-1 h-1 rounded-full bg-current" />
                      {project.status}
                    </span>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mb-6 text-sm max-w-none">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/40 dark:border-zinc-800/20 text-zinc-650 dark:text-zinc-400 rounded text-[10px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom/Actions Bar */}
                <div className="p-5 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-150/20 dark:border-zinc-800/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-sm"
                      >
                        <ExternalLink size={12} />
                        Demo
                      </a>
                    )}
                    {project.github && (
                      <div className="flex flex-col gap-1">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900 dark:bg-zinc-805 hover:bg-zinc-800 dark:hover:bg-zinc-700 text-white rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs font-bold uppercase tracking-wider border border-transparent"
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                        {project.note && (
                          <span className="text-[9px] text-zinc-400 dark:text-zinc-500 italic pl-1">
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
