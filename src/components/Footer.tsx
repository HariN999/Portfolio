import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-900/50 py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-950 dark:text-white font-display tracking-tight">
              Hariharan Narlakanti
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-sm font-sans">
              AI Engineer & Backend Developer building NLP pipelines, LLM applications, and scalable backend services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-display">Quick Links</h4>
            <div className="space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-sm font-semibold transition-colors font-sans"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-display">Connect</h4>
            <div className="space-y-3">
              <p className="text-zinc-600 dark:text-zinc-300 font-sans text-sm font-semibold">narlakantihariharan@gmail.com</p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/narlakanti-hariharan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-sm font-bold uppercase tracking-wider transition-colors font-sans"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/HariN999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white text-sm font-bold uppercase tracking-wider transition-colors font-sans"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200/50 dark:border-zinc-900/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold">
              © {new Date().getFullYear()} Hariharan Narlakanti. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-xs font-semibold">
              <span>Made with</span>
              <Heart size={13} className="text-rose-500" />
              <span>and</span>
              <Code size={13} className="text-blue-500" />
              <span>and lots of</span>
              <Coffee size={13} className="text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
