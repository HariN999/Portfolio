import React from 'react';
import { Code, Database, Wrench, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI / ML / NLP',
      icon: Cpu,
      skills: ['Hugging Face Transformers', 'PyTorch', 'SentenceTransformers', 'NLP Pipelines', 'GenAI & LLMs'],
      color: 'orange',
      glow: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/30',
      iconBg: 'bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400',
      skillClass: 'bg-orange-50/50 dark:bg-orange-950/10 text-orange-700 dark:text-orange-300 border-orange-200/30 dark:border-orange-900/20'
    },
    {
      title: 'Backend & APIs',
      icon: Wrench,
      skills: ['Python', 'FastAPI', 'REST APIs', 'Pydantic', 'Flask'],
      color: 'teal',
      glow: 'hover:shadow-[0_0_30px_rgba(20,184,166,0.15)] hover:border-teal-500/30',
      iconBg: 'bg-teal-50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400',
      skillClass: 'bg-teal-50/50 dark:bg-teal-950/10 text-teal-700 dark:text-teal-300 border-teal-200/30 dark:border-teal-900/20'
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      color: 'blue',
      glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      skillClass: 'bg-blue-50/50 dark:bg-blue-950/10 text-blue-700 dark:text-blue-300 border-blue-200/30 dark:border-blue-900/20'
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Postman', 'Git & GitHub'],
      color: 'slate',
      glow: 'hover:shadow-[0_0_30px_rgba(100,116,139,0.15)] hover:border-slate-500/30',
      iconBg: 'bg-slate-100 dark:bg-slate-800/30 text-slate-600 dark:text-slate-400',
      skillClass: 'bg-slate-50/50 dark:bg-slate-800/20 text-slate-700 dark:text-slate-300 border-slate-200/30 dark:border-slate-700/20'
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/20 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Demonstrated backend architecture, data engineering, and machine learning competencies backed by code deployments.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`bg-white/55 dark:bg-zinc-900/25 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl p-6 transition-all duration-300 ${category.glow} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-3 rounded-xl ${category.iconBg} border border-transparent`}>
                      <IconComponent size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white font-display">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-semibold font-sans tracking-wide transition-colors ${category.skillClass}`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 font-display">
              Additional Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                'Data Structures & Algorithms',
                'LangChain',
                'RAG',
                'LLM App Development',
                'AI System Design',
                'JWT Auth',
                'Docker',
                'Render',
                'Vercel',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2.5 bg-white dark:bg-zinc-900/35 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl text-zinc-700 dark:text-zinc-300 text-xs font-bold font-sans uppercase tracking-wider hover:bg-indigo-50 dark:hover:bg-indigo-950/20 hover:border-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
