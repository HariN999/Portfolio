import React from 'react';
import { Target, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative">
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500 -z-10" />
              <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-[3px] shadow-2xl relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-950">
                  <img 
                    src="images/Profile Photo.jpeg"
                    alt="Hariharan Narlakanti - AI Engineer & Backend Developer" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-zinc-950">
                <Briefcase size={20} className="text-white" />
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
                I'm a Computer Science graduate focused on building AI-powered applications, NLP workflows, FastAPI services, LLM pipelines, and scalable backend systems. I enjoy turning research ideas and machine learning concepts into production-ready software systems with clean, modular architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-white/40 dark:bg-zinc-900/25 backdrop-blur-sm p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-blue-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                    <Target size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white font-display text-base">Engineering Focus</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans">
                  Designing robust backend services with FastAPI, implementing semantic search indices, integrating generative AI/LLM components, and managing production deployments.
                </p>
              </div>

              <div className="bg-white/40 dark:bg-zinc-900/25 backdrop-blur-sm p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white font-display text-base">Target Role</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed font-sans">
                  AI Engineer or Software/Backend Developer roles at product-driven companies. Focus area: NLP workflows, agentic AI logic, and robust microservices at scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {['FastAPI', 'React', 'Applied NLP', 'LLM Apps', 'Semantic Search', 'REST APIs'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200/50 dark:border-zinc-800/30 text-zinc-700 dark:text-zinc-300 rounded-full text-xs font-bold font-sans uppercase tracking-wider hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
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
