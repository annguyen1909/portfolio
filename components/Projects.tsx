'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Eye } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '../data/projects';

const Projects = () => {
  const projects = getFeaturedProjects(6);
  const categories = ["All", "Full Stack", "Frontend", "3D/WebGL", "IoT/Interactive", "AI/ML", "Interactive Media"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-creative mb-8 text-balance tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-body leading-relaxed">
            A showcase of my best work across different technologies and domains
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden card-glow group flex flex-col h-full perspective-card"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white opacity-50">{project.title.split(' ')[0]}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-subheading text-white mb-4 group-hover:text-blue-400 transition-colors tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-5 leading-relaxed font-body line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Features */}
                <div className="mb-5 flex-grow">
                  <h4 className="text-sm font-poppins font-semibold text-gray-300 mb-3 tracking-wide uppercase">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-400 font-body">
                        <ArrowRight size={12} className="text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600 font-code tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs font-code">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="flex gap-2 mt-auto">
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-creative font-medium hover:shadow-lg transition-all duration-300 cursor-pointer w-full tracking-wide"
                    >
                      <Eye size={16} />
                      <span>View Details</span>
                    </motion.div>
                  </Link>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-1 px-4 py-3 border border-blue-600 text-blue-300 rounded-lg font-creative font-medium hover:border-blue-400 hover:text-white transition-all duration-300 tracking-wide"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Demo</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-1 px-4 py-3 border border-blue-600 text-blue-300 rounded-lg font-creative font-medium hover:border-blue-400 hover:text-white transition-all duration-300 tracking-wide"
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Eye size={20} />
                <span>View All Projects</span>
              </motion.div>
            </Link>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-blue-400 hover:text-white transition-all duration-300"
            >
              <span>Interested in working together?</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
