"use client";

import { motion } from "framer-motion";
import { User, MapPin, Calendar, Check, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-creative mb-8 text-balance tracking-tight">
            About <span className="text-[var(--text-strong)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-blue)]/60 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Personal Profile - Larger Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-[#1b1b1b] rounded-none p-8 card-glow">
              <h3 className="text-3xl font-heading mb-6 text-[var(--text-strong)] tracking-wide">
                Personal Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4 font-body text-lg">
                    Full Stack Developer with a strong foundation in React,
                    TypeScript, and C++, experienced in building scalable web
                    applications, service websites, interactive 3D websites, and AI-integrated
                    platforms.
                  </p>
                  <p className="text-gray-300 leading-relaxed font-body text-lg">
                    Proven ability to deliver user-centric solutions using
                    Next.js, Vite.js, TailwindCSS, RESTful APIs, and Database Integration.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed font-body text-lg">
                    Skilled in both frontend design and backend logic, with a
                    passion for performance, automation, and immersive digital
                    experiences. Currently focused on Web Services, AI integration, WebGL/Three.js development, and
                    Database Management.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1b1b1b] rounded-none p-4 card-glow text-center"
              >
                <User className="text-white mx-auto mb-2" size={24} />
                <p className="text-xs text-gray-400 mb-1">Role</p>
                <p className="text-white font-creative font-semibold text-sm">
                  Full Stack Developer
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1b1b1b] rounded-none p-4 card-glow text-center"
              >
                <MapPin className="text-white mx-auto mb-2" size={24} />
                <p className="text-xs text-gray-400 mb-1">Location</p>
                <p className="text-white font-creative font-semibold text-sm">
                  Ho Chi Minh City
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1b1b1b] rounded-none p-4 card-glow text-center"
              >
                <Calendar className="text-white mx-auto mb-2" size={24} />
                <p className="text-xs text-gray-400 mb-1">Education</p>
                <p className="text-white font-creative font-semibold text-sm">
                  RMIT - IT 2025
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#1b1b1b] rounded-none p-4 card-glow text-center"
              >
                <Check className="text-white mx-auto mb-2" size={24} />
                <p className="text-xs text-gray-400 mb-1">Status</p>
                <p className="text-white font-creative font-semibold text-sm">
                  Available
                </p>
              </motion.div>
            </div>

            {/* Quick Connect Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#1b1b1b] rounded-none p-6 card-glow"
              >
                <h4 className="text-lg font-heading mb-4 text-[var(--text-strong)]">
                  Let's Connect
                </h4>
                <div className="space-y-3">
                  <motion.a
                    href="mailto:nguyentruongan0919@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-[#131313] rounded-none border-none transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-none rounded-full flex items-center justify-center">
                      <Mail className="text-white mx-auto" size={24} />
                    </div>
                    <span className="text-white font-body text-sm">
                      Send Email
                    </span>
                  </motion.a>

                  <motion.a
                    href="tel:+84905941752"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-3 bg-[#131313] rounded-none border-none transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-none rounded-full flex items-center justify-center">
                      <Phone className="text-white mx-auto" size={24} />
                    </div>
                    <span className="text-white font-body text-sm">
                      Call Me
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats/Highlights - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#1b1b1b] rounded-none p-6 card-glow">
              <h3 className="text-2xl font-heading mb-6 text-[var(--text-strong)] text-center">
                Highlights
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    className="text-3xl font-display font-bold text-white mb-1"
                  >
                    10+
                  </motion.div>
                  <p className="text-gray-300 font-body text-sm">
                    Projects Completed
                  </p>
                </div>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="text-3xl font-display font-bold text-white mb-1"
                  >
                    4+
                  </motion.div>
                  <p className="text-gray-300 font-body text-sm">
                    Years of Experience
                  </p>
                </div>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="text-3xl font-display font-bold text-white mb-1"
                  >
                    10+
                  </motion.div>
                  <p className="text-gray-300 font-body text-sm">
                    Technologies Mastered
                  </p>
                </div>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="text-3xl font-display font-bold text-white mb-1"
                  >
                    100%
                  </motion.div>
                  <p className="text-gray-300 font-body text-sm">
                    Client Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Preview */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-[#1b1b1b] rounded-none p-6 card-glow"
            >
              <h4 className="text-lg font-heading mb-4 text-center text-[var(--text-strong)]">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Three.js",
                  "Node.js",
                  "C++",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="px-3 py-1 bg-[#131313] text-white rounded-sm text-xs border border-[#5c5a5a] hover:border-gray-400 hover:text-white transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
