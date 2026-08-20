import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  categoryLabel: string;
  date: string;
  id?: string;
  link?: string;
  skills: string[];
}

const Certifications: React.FC = () => {
  const certificationsData: Certification[] = [
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI & Stanford University',
      categoryLabel: 'AI & Machine Learning',
      date: 'Aug 2026',
      id: 'NQAYG1LIHXGW',
      link: 'https://coursera.org/verify/specialization/NQAYG1LIHXGW',
      skills: ['Supervised Learning', 'Neural Networks', 'Unsupervised Learning', 'Recommender Systems', 'Reinforcement Learning']
    },
    {
      title: 'IBM Full Stack Software Developer Professional Certificate',
      issuer: 'IBM',
      categoryLabel: 'Software Engineering',
      date: 'Mar 2024',
      id: '9J4DWPNUDQPJ',
      link: 'https://coursera.org/verify/professional-cert/9J4DWPNUDQPJ',
      skills: ['React & Node.js', 'Docker & Kubernetes', 'Microservices & Serverless', 'Python & Flask', 'Django & SQL']
    },
    {
      title: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
      issuer: 'AWS Academy',
      categoryLabel: 'Cloud Infrastructure',
      date: 'Apr 2025',
      id: 'kqZR6d4l',
      link: 'https://www.credly.com/go/kqZR6d4l',
      skills: ['Cloud Computing', 'AWS Cloud Architecture', 'AWS Security', 'Identity & Access Management']
    },
    {
      title: 'MongoDB Node.js Developer Path',
      issuer: 'MongoDB, Inc. & SmartBridge',
      categoryLabel: 'Databases & Cloud',
      date: 'Jun 2025',
      id: 'MDBg6wxm1d4md',
      skills: ['Document Modeling', 'CRUD Operations', 'Aggregation Framework', 'Atlas Search', 'Node.js Integration']
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      categoryLabel: 'Data & Analytics',
      date: 'Mar 2024',
      id: 'GKYYHGQHFNY2',
      link: 'https://coursera.org/verify/professional-cert/GKYYHGQHFNY2',
      skills: ['Spreadsheet Analysis', 'SQL Querying', 'R Programming', 'Tableau Visualizations', 'Data Cleaning']
    }
  ];

  return (
    <section id="certifications" className="py-24 transition-colors duration-300 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              Certifications & Credentials
            </h2>
            <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-sm sm:text-base text-zinc-650 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Curated professional credentials and verified technical achievements supporting my software and AI engineering workflow.
            </p>
          </motion.div>
        </div>

        {/* Credentials List Container */}
        <div className="max-w-3xl mx-auto border-t border-zinc-250/60 dark:border-zinc-800/40">
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800/40">
            {certificationsData.map((item, index) => (
              <motion.div
                key={item.title + index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-5 border-b border-zinc-250/60 dark:border-zinc-800/40"
              >
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        {item.title}
                        <ExternalLink size={14} className="opacity-60 flex-shrink-0" />
                      </a>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans leading-none">
                    {item.issuer} <span className="text-zinc-300 dark:text-zinc-700 mx-1.5 select-none">•</span> {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
