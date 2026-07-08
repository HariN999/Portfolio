import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:narlakantihariharan@gmail.com?subject=${subject}&body=${body}`;
      
      window.location.href = mailtoLink;
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'narlakantihariharan@gmail.com',
      link: 'mailto:narlakantihariharan@gmail.com',
      color: 'text-rose-600 dark:text-rose-400',
      iconBg: 'bg-rose-50 dark:bg-rose-950/20 border-rose-200/20 dark:border-rose-900/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'narlakanti-hariharan',
      link: 'https://www.linkedin.com/in/narlakanti-hariharan',
      color: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200/20 dark:border-blue-900/10'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'HariN999',
      link: 'https://github.com/HariN999',
      color: 'text-zinc-900 dark:text-zinc-100',
      iconBg: 'bg-zinc-100 dark:bg-zinc-800/35 border-zinc-200/20 dark:border-zinc-800/10'
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4 tracking-tight font-display">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full mb-6"></div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-sans leading-relaxed">
              Open to AI Engineer positions, backend software roles, and interesting engineering problems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          {/* Contact Information */}
          <div className="space-y-8 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 font-display tracking-tight">
                  Let's Connect
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans text-base">
                  Currently looking for AI Engineer, Software Developer, or Backend engineering roles. Whether you're a recruiter, a fellow developer, or someone building something interesting — reach out.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-5 bg-white/45 dark:bg-zinc-900/20 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl hover:border-blue-500/25 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className={`p-3 rounded-xl border ${item.iconBg} group-hover:scale-105 transition-transform`}>
                        <IconComponent size={20} className={item.color} />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-500 dark:text-zinc-500 text-[10px] uppercase tracking-wider mb-0.5 font-display">
                          {item.label}
                        </h4>
                        <p className="text-zinc-800 dark:text-zinc-200 font-sans text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/45 dark:bg-zinc-900/20 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 font-display tracking-tight">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200/30 rounded-full">
                  <CheckCircle size={44} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-white font-display tracking-tight">
                  Email Client Opened!
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm leading-relaxed max-w-sm mx-auto">
                  Your email client has been opened with a pre-filled message. Please hit Send to complete your message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2 font-display">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white ${
                        errors.name ? 'border-red-500' : 'border-zinc-200/50 dark:border-zinc-800/50'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2 font-display">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white ${
                        errors.email ? 'border-red-500' : 'border-zinc-200/50 dark:border-zinc-800/50'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2 font-display">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white ${
                      errors.subject ? 'border-red-500' : 'border-zinc-200/50 dark:border-zinc-800/50'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-500 mb-2 font-display">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 text-sm border rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white ${
                      errors.message ? 'border-red-500' : 'border-zinc-200/50 dark:border-zinc-800/50'
                    }`}
                    placeholder="Tell me more about your message..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-blue-500/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Opening Email Client...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
