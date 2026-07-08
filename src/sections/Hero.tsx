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
    link.href = '/HariharanNarlakanti_Resume.pdf';
    link.download = 'Narlakanti_Hariharan_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 px-4 sm:px-6 lg:px-8">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] animate-[pulse_6s_infinite_ease-in-out]" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] animate-[pulse_8s_infinite_ease-in-out_2s]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="text-center max-w-4xl mx-auto pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200/50 dark:border-blue-800/30 bg-blue-50/50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping" />
            Active Role Seeker
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white mb-6 tracking-tight leading-none">
            <span className="block font-sans font-light">Hariharan</span>
            <span className="block font-display bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Narlakanti
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mb-6 tracking-tight font-display">
            AI Engineer — Backend Systems — GenAI
          </p>
          
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
            Building production-ready AI systems, NLP pipelines, and scalable backend services using FastAPI, React, and LLMs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get In Touch
            <ArrowDown size={18} />
          </button>

          <a
            href="https://github.com/HariN999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          
          <button
            onClick={downloadResume}
            className="w-full sm:w-auto px-8 py-4 border border-zinc-300 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-semibold rounded-full hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12"
        >
          {[
            { value: '10+', label: 'Projects Built' },
            { value: '8.89', label: 'B.Tech CGPA' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/40 dark:bg-zinc-900/30 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl px-6 py-4 min-w-[140px]"
            >
              <div className="text-3xl font-extrabold font-display bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 dark:text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
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
