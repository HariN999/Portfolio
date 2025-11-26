import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Hariharan</span>
            <span className="block text-blue-600 dark:text-blue-400">Narlakanti</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
            Software Developer | AI/ML Enthusiast
          </p>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Aspiring SDE with a passion for AI/ML, DSA, and building impactful solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Get In Touch
            <ArrowDown size={20} />
          </button>
          
          <button
            onClick={downloadResume}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
          >
            <Download size={20} />
            Resume
          </button>
        </div>

        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
