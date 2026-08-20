import React from 'react';
import { Target, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 transition-colors duration-300 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Photo */}
          <div className="lg:col-span-5 text-center flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative inline-block group"
            >
              <div className="w-72 h-72 mx-auto rounded-full overflow-hidden border-[4px] border-blue-500/40 dark:border-blue-400/30 shadow-xl relative bg-white dark:bg-zinc-950">
                <img 
                  src="images/Profile Photo.jpeg"
                  alt="Hariharan Narlakanti - AI Engineer & Backend Developer" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute bottom-2 right-2 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-50 dark:border-zinc-950 transition-all duration-300">
                <Briefcase size={18} className="text-white" />
              </div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg dark:prose-invert"
            >
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg font-normal font-sans">
                I'm a Computer Science graduate focused on building AI-powered applications, NLP workflows, FastAPI services, LLM pipelines, and backend systems. I enjoy turning research ideas and machine learning concepts into deployable software systems with clean, modular architectures.
              </p>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              <div className="bg-white dark:bg-zinc-900/15 border border-zinc-200/50 dark:border-zinc-800/40 rounded-lg p-5 hover:border-blue-500/20 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="p-2 rounded bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border border-blue-100/10 dark:border-blue-900/20 flex-shrink-0">
                    <Target size={16} />
                  </div>
                  <h3 className="font-bold font-display text-xs sm:text-sm text-zinc-900 dark:text-white tracking-wider">
                    Engineering Focus
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  Designing robust backend services with FastAPI, implementing semantic search indices, integrating generative AI/LLM components, and managing containerized/cloud deployments.
                </p>
              </div>
 
              <div className="bg-white dark:bg-zinc-900/15 border border-zinc-200/50 dark:border-zinc-800/40 rounded-lg p-5 hover:border-blue-500/20 transition-all duration-300 flex flex-col">
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="p-2 rounded bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100/10 dark:border-indigo-900/20 flex-shrink-0">
                    <Briefcase size={16} />
                  </div>
                  <h3 className="font-bold font-display text-xs sm:text-sm text-zinc-900 dark:text-white tracking-wider">
                    Target Role
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  AI Engineer, Backend Engineer, or Software Engineer roles focused on NLP workflows, LLM applications, RAG, agentic AI, and FastAPI/backend services.
                </p>
              </div>
            </motion.div>
 
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-1.5 pt-2"
            >
              {['FastAPI', 'React', 'Applied NLP', 'LLM Apps', 'Semantic Search', 'REST APIs'].map((trait) => (
                <span
                  key={trait}
                  className="px-2.5 py-1 bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-400 rounded text-[10px] font-bold font-sans uppercase tracking-wider hover:border-blue-500/20 dark:hover:border-blue-400/20 transition-colors"
                >
                  {trait}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
