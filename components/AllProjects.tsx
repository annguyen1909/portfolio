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
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            All <span className="gradient-text">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-3">
              <Filter className="text-gray-400" size={20} />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
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
          <p className="text-gray-400">
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
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden card-glow group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white opacity-50">{project.title.split(' ')[0]}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
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
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 rounded text-xs">
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
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-pointer"
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
                      className="flex items-center justify-center px-3 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm hover:border-blue-400 hover:text-white transition-all duration-300"
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
                      className="flex items-center justify-center px-3 py-2 border border-gray-600 text-gray-300 rounded-lg text-sm hover:border-blue-400 hover:text-white transition-all duration-300"
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
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-300">No projects found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
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
            <div className="glass-effect rounded-2xl p-12 card-glow">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Like What You See?</h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and create innovative solutions. 
                Let's discuss how we can work together on your next project.
              </p>
              <Link href="/#contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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
