'use client';

import { motion } from 'framer-motion';
import { TypeWriter } from './TypeWriter';
import { ChevronDown, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 md:pt-20">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-cyan-600/20 to-indigo-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

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
            className="text-hero font-display mb-12 md:mb-16 text-balance tracking-tight text-glow leading-none"
          >
            Hi, I'm{' '}
            <br className="hidden md:block" />
            <span className="gradient-text-animated bg-clip-text block mt-4 md:mt-6">
              An Nguyen
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-4xl text-blue-200 mb-16 md:mb-20 h-12 font-creative"
          >
            <TypeWriter 
              texts={[
                "Full Stack Developer",
                "3D Web Developer", 
                "React Specialist",
                "Three.js Expert",
                "WebGL Developer"
              ]} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-20 md:mb-24 font-body text-balance leading-relaxed"
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-creative font-semibold text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 tracking-wide pulse-glow"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 border-2 border-blue-500 rounded-full text-blue-200 font-creative font-semibold text-xl hover:bg-blue-600/20 hover:text-white transition-all duration-300 tracking-wide morphing-border backdrop-blur-sm"
            >
              View My Work
            </motion.a>
            <motion.button
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-slate-800/80 to-blue-900/80 border border-blue-500 rounded-full text-blue-200 font-creative font-semibold text-xl hover:border-blue-400 hover:text-white transition-all duration-300 tracking-wide backdrop-blur-sm"
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
            className="flex flex-col items-center text-blue-300 hover:text-white transition-colors"
          >
            <span className="text-sm mb-3 font-creative tracking-wide opacity-80">Scroll Down</span>
            <ChevronDown size={28} className="opacity-90" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
