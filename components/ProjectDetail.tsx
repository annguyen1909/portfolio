'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock, Award, CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/#projects">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </motion.div>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}>
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300">
                {project.year}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl !== '#' && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  <span>View Live Project</span>
                </motion.a>
              )}
              
              {project.githubUrl !== '#' && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-blue-400 hover:text-white transition-all duration-300"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-4 card-glow">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white opacity-50">{project.title.split(' ')[0]}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Info Cards */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-xl p-6 card-glow text-center"
          >
            <Calendar className="mx-auto mb-3 text-blue-400" size={32} />
            <h3 className="font-semibold mb-2">Timeline</h3>
            <p className="text-gray-400 text-sm">{project.timeline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-xl p-6 card-glow text-center"
          >
            <Users className="mx-auto mb-3 text-purple-400" size={32} />
            <h3 className="font-semibold mb-2">Team Size</h3>
            <p className="text-gray-400 text-sm">{project.teamSize}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-xl p-6 card-glow text-center"
          >
            <Clock className="mx-auto mb-3 text-green-400" size={32} />
            <h3 className="font-semibold mb-2">Role</h3>
            <p className="text-gray-400 text-sm">{project.role}</p>
          </motion.div>

          {project.client && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-effect rounded-xl p-6 card-glow text-center"
            >
              <Award className="mx-auto mb-3 text-cyan-400" size={32} />
              <h3 className="font-semibold mb-2">Client</h3>
              <p className="text-gray-400 text-sm">{project.client}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technologies */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 card-glow"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-lg border border-gray-600 hover:border-blue-400 hover:text-white transition-all duration-300 font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features & Challenges */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 card-glow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="text-green-400" size={32} />
              <h2 className="text-3xl font-bold gradient-text">Key Features</h2>
            </div>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 card-glow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Target className="text-red-400" size={32} />
              <h2 className="text-3xl font-bold gradient-text">Challenges</h2>
            </div>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Solutions & Results */}
      <section className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 card-glow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Lightbulb className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold gradient-text">Solutions</h2>
            </div>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 card-glow"
          >
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="text-blue-400" size={32} />
              <h2 className="text-3xl font-bold gradient-text">Results & Impact</h2>
            </div>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{result}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">Project Gallery</h2>
          <p className="text-gray-400">Visual showcase of the project development and final results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-xl overflow-hidden card-glow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white opacity-30">Gallery {index + 1}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-12 card-glow text-center"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Interested in Similar Work?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects that push the boundaries of web development. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </motion.div>
            </Link>
            <Link href="/#projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-blue-400 hover:text-white transition-all duration-300 cursor-pointer"
              >
                View More Projects
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
