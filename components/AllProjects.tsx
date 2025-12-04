'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Eye, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projects';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Full Stack", "Frontend", "3D/WebGL", "IoT/Interactive", "AI/ML", "Interactive Media"];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-[var(--background)]">
      {/* Header */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-4xl md:text-5xl mb-6 text-[var(--text-strong)]">
            All <span className="text-[var(--text-strong)]">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-[var(--accent-blue)]/60 mx-auto mb-6"></div>
          <p className="text-[var(--text-muted)] max-w-3xl mx-auto text-lg font-body">
            A comprehensive collection of my work spanning web development, 3D experiences, 
            AI integration, and interactive installations. Each project represents a unique 
            challenge and innovative solution.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--text-muted)]" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-[#1d1d1d] border border-[#3d3d3d] rounded-none text-[var(--text-strong)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="text-[var(--text-muted)]" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-4 py-2 rounded-none text-sm font-medium transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-[#262626] text-[var(--text-strong)] border border-[#3d3d3d]'
                        : 'bg-[#1d1d1d] text-[var(--text-muted)] border border-[#3d3d3d] hover:opacity-90'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <p className="text-[var(--text-muted)] font-body">
            Showing {filteredProjects.length} of {projects.length} projects
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-[#1b1b1b] rounded-none overflow-hidden group border border-[#3d3d3d]"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-[#262626] overflow-hidden">
                <div className={`absolute inset-0 bg-[#262626] opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-heading text-[var(--text-muted)]">{project.title.split(' ')[0]}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-[#1d1d1d] text-[var(--text-muted)] text-xs rounded-none border border-[#3d3d3d]">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs rounded-none font-medium ${
                    project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-heading text-[var(--text-strong)]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-[var(--text-muted)]">{project.year}</span>
                </div>
                
                <p className="text-[var(--text-muted)] mb-4 leading-relaxed font-body line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#1d1d1d] text-[var(--text-muted)] rounded-none text-xs border border-[#3d3d3d] font-body"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-[#262626] text-[var(--text-muted)] rounded-none text-xs font-body">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-[#131313] text-[var(--text-strong)] rounded-none text-sm font-body border border-[#3d3d3d] transition-colors duration-200 cursor-pointer"
                    >
                      <Eye size={16} />
                      <span>Details</span>
                    </motion.div>
                  </Link>
                  
                  {project.liveUrl !== '#' && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center px-3 py-2 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none text-sm font-body transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                  
                  {project.githubUrl !== '#' && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center px-3 py-2 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none text-sm font-body transition-colors duration-200"
                    >
                      <Github size={16} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4 text-[var(--text-muted)]">No results</div>
            <h3 className="text-2xl font-heading mb-4 text-[var(--text-strong)]">No projects found</h3>
            <p className="text-[var(--text-muted)] mb-6 font-body">
              Try adjusting your search terms or category filter
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              whileHover={{ scale: 1.02 }}
              className="px-6 py-3 bg-[#131313] text-[var(--text-strong)] rounded-none font-body border border-[#3d3d3d]"
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Call to Action */}
        {filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d]">
              <h2 className="text-3xl font-heading mb-6 text-[var(--text-strong)]">Like What You See?</h2>
              <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto font-body">
                I'm always excited to take on new challenges and create innovative solutions. 
                Let's discuss how we can work together on your next project.
              </p>
              <Link href="/#contact">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-[#131313] text-[var(--text-strong)] rounded-none font-body border border-[#3d3d3d] transition-colors duration-200 cursor-pointer"
                >
                  <span>Start a Conversation</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default AllProjects;
