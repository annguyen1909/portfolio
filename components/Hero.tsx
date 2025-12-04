'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-an-nguyen.pdf';
    link.download = 'An_Nguyen_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20 bg-[var(--background)]">

      <div className="container mx-auto px-6 text-center relative z-10 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-[var(--text-strong)] text-4xl md:text-6xl mb-12 md:mb-16 tracking-tight leading-tight"
          >
            Hi, I’m
            <br className="hidden md:block" />
            <span className="block mt-4 md:mt-6 text-[var(--text-strong)]">An Nguyen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body text-[var(--text-muted)] text-lg md:text-xl mb-16 md:mb-20"
          >
            Full Stack Developer focusing on reliable frontends and thoughtful interactions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-body text-[var(--text-muted)] max-w-4xl mx-auto mb-20 md:mb-24 leading-relaxed"
          >
            Passionate about building scalable web applications, interactive 3D websites, 
            and AI-integrated platforms. I deliver user-centric solutions with modern 
            technologies and immersive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20 md:mb-24"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-none border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] font-body"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-none border border-[var(--border)] text-[var(--text-strong)] font-body"
            >
              View My Work
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 px-6 py-3 rounded-none border border-[var(--border)] bg-[var(--surface)] text-[var(--text-strong)] font-body"
            >
              <Download size={24} />
              <span>Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors"
          >
            <span className="text-sm mb-3 font-body tracking-wide opacity-80">Scroll Down</span>
            <ChevronDown size={28} className="opacity-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
