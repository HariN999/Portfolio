import React from 'react';
import { ArrowDown, Download, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Hariharan_AI_V1.pdf';
    link.download = 'Hariharan_Narlakanti_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-300 px-4 sm:px-6 lg:px-8">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] animate-[pulse_6s_infinite_ease-in-out]" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] animate-[pulse_8s_infinite_ease-in-out_2s]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="text-center max-w-4xl mx-auto pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-blue-200/40 dark:border-blue-800/20 bg-blue-50/40 dark:bg-blue-900/5 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse" />
            OPEN TO OPPORTUNITIES
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight leading-none">
            <span className="block font-sans font-light">Hariharan</span>
            <span className="block font-display bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Narlakanti
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base font-bold text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-4 tracking-widest font-mono uppercase">
            AI Engineer — Backend Systems — GenAI
          </p>
          
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            Building AI applications, NLP pipelines, and scalable backend services using Python, FastAPI, React, and LLMs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            Get In Touch
            <ArrowDown size={16} />
          </button>

          <a
            href="https://github.com/HariN999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          
          <button
            onClick={downloadResume}
            className="w-full sm:w-auto px-8 py-3.5 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 font-semibold rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
          >
            <Download size={16} />
            Resume
          </button>
        </motion.div>

        {/* Proof Metrics (Simplified Inline Metadata) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6 mb-8 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-blue-600 dark:text-blue-400 text-base font-display">8+</span>
            <span className="text-zinc-550 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-wider font-mono">Projects Built</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-800 select-none font-light">•</span>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-blue-600 dark:text-blue-400 text-base font-display">8.89</span>
            <span className="text-zinc-555 dark:text-zinc-500 text-[10px] font-bold uppercase tracking-wider font-mono">B.Tech CGPA</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-6"
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
