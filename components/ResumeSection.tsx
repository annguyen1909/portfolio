'use client';

import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const ResumeSection = () => {
  const handleDownloadResume = () => {
    // You can replace this with actual resume download logic
    const link = document.createElement('a');
    link.href = '/resume-an-nguyen.pdf'; // Add your resume file to public folder
    link.download = 'An_Nguyen_Resume.pdf';
    link.click();
  };

  return (
    <section className="py-16 bg-gray-800/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-effect rounded-2xl p-12 card-glow max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <FileText className="text-white" size={48} />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Download My Resume
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive overview of my experience, skills, and achievements. 
              My resume includes detailed information about my projects, technical expertise, 
              and professional background.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={20} />
                <span>Download Resume (PDF)</span>
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-blue-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink size={20} />
                <span>Contact Me Instead</span>
              </motion.a>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="p-4">
                <div className="text-2xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
