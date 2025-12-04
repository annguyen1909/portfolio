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
    <section id="projects" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl mb-8 tracking-tight text-[var(--text-strong)]">
            Featured <span className="text-[var(--text-strong)]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-blue)]/60 mx-auto mb-8"></div>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-lg font-body leading-relaxed">
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-none border transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-[var(--surface-2)] text-[var(--text-strong)] border-[var(--border)]'
                  : 'bg-[var(--surface-1)] text-[var(--text-muted)] border-[var(--border)] hover:opacity-90'
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
              whileHover={{ y: -2 }}
              className="bg-[#1b1b1b] p-6 rounded-none overflow-hidden group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-[#262626] overflow-hidden">
                <div className={`absolute inset-0 bg-[#262626] opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-heading text-[var(--text-muted)]">{project.title.split(' ')[0]}</span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-[var(--surface-1)] text-[var(--text-muted)] text-xs rounded-none border border-[var(--border)]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-heading text-[var(--text-strong)] mb-4 transition-colors tracking-wide">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-muted)] mb-5 leading-relaxed font-body line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Features */}
                <div className="mb-5 flex-grow">
                  <h4 className="text-sm font-body font-medium text-[var(--text-muted)] mb-3 tracking-wide uppercase">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-[var(--text-muted)] font-body">
                        <ArrowRight size={12} className="text-[var(--accent-blue)] mt-1.5 flex-shrink-0" />
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
                      className="px-2 py-1 bg-[#1d1d1d] text-[var(--text-muted)] rounded-none text-xs border border-[#3d3d3d] font-body"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 bg-[var(--surface-2)] text-[var(--text-muted)] rounded-none text-xs font-body">
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
                      className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#131313] text-[var(--text-strong)] rounded-none font-body border-1 border-[#3d3d3d] transition-colors duration-200 cursor-pointer w-full"
                    >
                      <span>View Details</span>
                    </motion.div>
                  </Link>
                  
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center bg-[#131313] justify-center space-x-1 px-4 py-3 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none font-body transition-colors duration-200"
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
                    className="flex items-center bg-[#131313] justify-center space-x-1 px-4 py-3 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none font-body transition-colors duration-200"
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--surface-2)] text-[var(--text-strong)] rounded-none font-body border border-[var(--border)] transition-colors duration-200 cursor-pointer"
              >
                <Eye size={20} />
                <span>View All Projects</span>
              </motion.div>
            </Link>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-[var(--border)] text-[var(--text-strong)] rounded-none font-body transition-colors duration-200"
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
