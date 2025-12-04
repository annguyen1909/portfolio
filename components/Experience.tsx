'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "WorldMaxxing",
      type: "Freelance",
      period: "April 2025 - July 2025",
      location: "Remote",
      description: "Developed a comprehensive eVisa application platform using modern web technologies.",
      achievements: [
        "Built full-stack eVisa application with Next.js, React, and TypeScript",
        "Implemented complex business logic for visa rules and port-of-entry selection",
        "Integrated Stripe for secure payments with real-time fee calculations",
        "Designed scalable RESTful APIs for visa management and user authentication",
        "Created responsive UI components ensuring cross-platform compatibility"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "RESTful APIs"],
      link: "https://worldmaxxing.com",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Developer",
      company: "AC3 Studio Vietnam",
      type: "Full-time",
      period: "March 2023 - December 2024",
      location: "Vietnam",
      description: "Specialized in lighting automation systems and 3D interactive experiences for high-profile venues.",
      achievements: [
        "Developed web-based lighting control systems for premium venues",
        "Created 3D visual effects for Regent Phu Quoc resort",
        "Built interactive websites using WebGL and Three.js",
        "Optimized applications for Heroku deployment",
        "Delivered projects for Opus Restaurant and Hue's Festival of Light 2024"
      ],
      technologies: ["WebGL", "Three.js", "JavaScript", "Heroku", "Lighting Systems"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Student Developer",
      company: "Royal Melbourne Institute of Technology",
      type: "Academic",
      period: "2022 - 2025",
      location: "Melbourne/Vietnam",
      description: "Contributing to innovative projects while pursuing Bachelor of Information Technology.",
      achievements: [
        "Developed LLM-integrated website for software vulnerability detection",
        "Built product websites using Vite.js, Next.js, and TailwindCSS",
        "Utilized AI-powered tools for web asset generation and UI/UX enhancement",
        "Created SKIRA landing page as showcase project",
        "Maintained strong academic performance while working on real-world projects"
      ],
      technologies: ["Vite.js", "Next.js", "TailwindCSS", "AI Integration", "LLM"],
      color: "from-green-400 to-blue-400"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A journey through my professional development and key contributions
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-none p-8 card-glow relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${exp.color}`}></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Company Info */}
                <div className="lg:col-span-1">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {exp.title}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </span>
                      <span className="text-sm text-gray-400 px-2 py-1 bg-gray-700 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    {exp.link && (
                      <motion.a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">View Project</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Description & Achievements */}
                <div className="lg:col-span-2">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 mb-6 leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-400 text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-2"
                  >
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-blue-400 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
