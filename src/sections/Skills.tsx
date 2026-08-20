import React from 'react';
import { Code, Database, Wrench, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'AI / ML / GenAI',
      icon: Cpu,
      skills: ['PyTorch', 'Transformers', 'SentenceTransformers', 'NLP', 'LLM Applications', 'RAG', 'ChromaDB', 'LangChain', 'Groq API'],
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      title: 'Backend',
      icon: Wrench,
      skills: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'JWT Authentication'],
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'TypeScript', 'Vite', 'Tailwind CSS'],
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      title: 'Databases / DevOps',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Git & GitHub', 'Linux', 'Vercel', 'Render'],
      iconColor: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-950/20'
    },
  ];

  const coreSkills = new Set([
    'Python', 'FastAPI', 'Transformers', 'PyTorch', 'React', 'Docker',
    'PostgreSQL', 'MongoDB', 'ChromaDB'
  ]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="skills" className="py-24 transition-colors duration-300 relative scroll-mt-24">
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
            <p className="text-sm sm:text-base text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Demonstrated backend architecture, data engineering, and machine learning competencies backed by code deployments.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="border-t border-zinc-200/60 dark:border-zinc-800/40 pt-5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-white">
                  <IconComponent size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <h3 className="font-bold font-display text-sm uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, skillIndex) => {
                    const isCore = coreSkills.has(skill);
                    return (
                      <div
                        key={skillIndex}
                        className={`px-2 py-0.5 rounded border text-[10px] sm:text-xs font-semibold font-sans tracking-wide transition-colors ${
                          isCore
                            ? 'bg-blue-50/40 dark:bg-blue-950/20 border-blue-200/40 dark:border-blue-900/30 text-blue-700 dark:text-blue-300 font-bold hover:border-blue-500/30 dark:hover:border-blue-400/30'
                            : 'bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200/40 dark:border-zinc-800/40 text-zinc-650 dark:text-zinc-400 hover:border-blue-500/20 dark:hover:border-blue-400/20'
                        }`}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
