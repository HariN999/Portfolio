import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const timelineData = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering (AI & ML)',
      institution: 'Malla Reddy University, Hyderabad',
      duration: '2022 – 2026',
      status: 'Completed',
      details: [
        'Strong academic performance, graduating with a CGPA of 8.89 / 10.',
        'Co-authored research paper on Telugu text summarization submitted to CIS 2026 (LNNS).',
        'Awarded Best Project Award at Malla Reddy University for the NLP news summarization platform.'
      ],
      coursework: ['Data Structures', 'Algorithms', 'AI/ML & NLP', 'Full-Stack Development', 'Database Systems', 'Software Engineering'],
      icon: GraduationCap,
      color: 'blue'
    },
    {
      type: 'internship',
      title: 'Full Stack Development (MERN Stack)',
      institution: 'SmartInternz (Virtual Internship)',
      duration: 'May – Jul 2025',
      status: 'Completed',
      details: [
        'Built SocialeX, a MERN-based social platform with JWT auth, REST endpoints, and MongoDB.',
        'Practiced Git-based collaborative workflows and agile development practices.',
        'Completed structured project deliverables within a 2-month virtual development program.'
      ],
      coursework: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'REST APIs'],
      certificate: 'https://skillwallet.smartinternz.com/certificate/virtual-internship/d203bbe1b9e242a034b376bafda15a99',
      icon: Briefcase,
      color: 'emerald'
    }
  ];

  return (
    <section id="experience" className="py-24 transition-colors duration-300 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              Education & Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8">
          {/* Vertical left timeline line */}
          <div className="absolute left-1 sm:left-2.5 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800/60" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div key={index} className="relative w-full">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[27px] sm:-left-[31px] top-1 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`w-8 h-8 rounded-full bg-white dark:bg-zinc-950 border-2 flex items-center justify-center shadow-sm ${
                        item.color === 'blue' 
                          ? 'border-blue-500 text-blue-500' 
                          : 'border-emerald-500 text-emerald-500'
                      }`}
                    >
                      <Icon size={14} />
                    </motion.div>
                  </div>

                  {/* Card Content spanning available width */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-zinc-900/15 border border-zinc-200/50 dark:border-zinc-800/40 p-6 sm:p-8 rounded-lg hover:border-blue-500/20 hover:shadow-sm transition-all duration-300 w-full animate-none"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest border inline-flex items-center leading-none h-fit ${
                        item.color === 'blue'
                          ? 'bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 border-blue-200/30'
                          : 'bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-200/30'
                      }`}>
                        {item.status}
                      </span>
                      
                      <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                        <Calendar size={12} />
                        {item.duration}
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-1.5 font-display tracking-tight leading-snug">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-5">
                      <MapPin size={14} />
                      {item.institution}
                    </div>

                    <div className="space-y-3 mb-6">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                            item.color === 'blue' ? 'bg-blue-500' : 'bg-emerald-500'
                          }`} />
                          <p>{detail}</p>
                        </div>
                      ))}
                    </div>

                    {item.coursework && (
                      <div>
                        <h4 className="font-bold text-zinc-800 dark:text-zinc-300 text-[10px] uppercase tracking-wider mb-2 font-display">Relevant Coursework / Focus:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className={`px-2 py-0.5 text-[10px] font-semibold rounded border ${
                                item.color === 'blue'
                                  ? 'bg-blue-50/40 dark:bg-blue-950/10 border-blue-200/20 dark:border-blue-900/10 text-blue-700 dark:text-blue-300'
                                  : 'bg-emerald-50/40 dark:bg-emerald-950/10 border-emerald-200/20 dark:border-emerald-900/10 text-emerald-700 dark:text-emerald-300'
                              }`}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.certificate && (
                      <div className="mt-6 border-t border-zinc-150/10 dark:border-zinc-800/20 pt-4">
                        <a
                          href={item.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-sm"
                        >
                          View Certificate
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
