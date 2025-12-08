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
    <div className="min-h-screen pt-20 bg-[var(--background)]">
      {/* Header Navigation */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/#projects">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center space-x-2 text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors mb-8"
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
              <span className={`px-2 py-1 rounded-none text-sm font-medium bg-[#262626] text-[var(--text-strong)] border border-[#3d3d3d]`}>
                {project.category}
              </span>
              <span className="px-2 py-1 rounded-none text-sm bg-[#1d1d1d] text-[var(--text-muted)] border border-[#3d3d3d]">
                {project.year}
              </span>
              <span className={`px-2 py-1 rounded-none text-sm font-medium ${
                project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl mb-6 text-[var(--text-strong)]">
              {project.title}
            </h1>

            <p className="text-lg text-[var(--text-muted)] mb-8 leading-relaxed font-body">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl !== '#' && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-2 px-6 py-3 bg-[#131313] text-[var(--text-strong)] rounded-none font-body border border-[#3d3d3d] transition-colors duration-200 hover:opacity-90"
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
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-2 px-6 py-3 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none font-body transition-colors duration-200"
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
            <div className="bg-[#1b1b1b] rounded-none p-4 border border-[#3d3d3d]">
              <div className="aspect-video bg-[#262626] rounded-none relative overflow-hidden">
                <div className={`absolute inset-0 bg-[#262626] opacity-20`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="absolute inset-0 object-cover w-full h-full" />
                  <span className="text-3xl font-heading text-[var(--text-muted)]">{project.title.split(' ')[0]}</span>
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
            className="bg-[#1b1b1b] rounded-none p-6 border border-[#3d3d3d] text-center"
          >
            <Calendar className="mx-auto mb-3 text-[var(--text-strong)]" size={32} />
            <h3 className="font-heading font-medium mb-2 text-[var(--text-strong)]">Timeline</h3>
            <p className="text-[var(--text-muted)] text-sm font-body">{project.timeline}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1b1b1b] rounded-none p-6 border border-[#3d3d3d] text-center"
          >
            <Users className="mx-auto mb-3 text-[var(--text-strong)]" size={32} />
            <h3 className="font-heading font-medium mb-2 text-[var(--text-strong)]">Team Size</h3>
            <p className="text-[var(--text-muted)] text-sm font-body">{project.teamSize}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1b1b1b] rounded-none p-6 border border-[#3d3d3d] text-center"
          >
            <Clock className="mx-auto mb-3 text-[var(--text-strong)]" size={32} />
            <h3 className="font-heading font-medium mb-2 text-[var(--text-strong)]">Role</h3>
            <p className="text-[var(--text-muted)] text-sm font-body">{project.role}</p>
          </motion.div>

          {project.client && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#1b1b1b] rounded-none p-6 border border-[#3d3d3d] text-center"
            >
              <Award className="mx-auto mb-3 text-[var(--text-strong)]" size={32} />
              <h3 className="font-heading font-medium mb-2 text-[var(--text-strong)]">Client</h3>
              <p className="text-[var(--text-muted)] text-sm font-body">{project.client}</p>
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
          className="bg-[#1b1b1b] rounded-none p-8 border border-[#3d3d3d]"
        >
          <h2 className="text-3xl font-heading mb-6 text-[var(--text-strong)]">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-[#1d1d1d] text-[var(--text-muted)] rounded-none border border-[#3d3d3d] transition-colors duration-200 font-body"
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
            className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d] hover:border-[color:var(--accent-blue)]/30 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-[#3d3d3d]"><CheckCircle className="text-[var(--text-strong)]" size={20} /></div>
              <div>
                <h2 className="text-2xl font-heading text-[var(--text-strong)]">Key Features</h2>
                <div className="h-[2px] w-12 bg-[var(--accent-blue)]"></div>
              </div>
            </div>
            <ul className="space-y-3 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[var(--accent-blue)]/60">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 py-2 transition-transform duration-180 hover:translate-x-[2px]"
                >
                  <span className="text-[var(--text-muted)] font-body">- {feature}</span>
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
            className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d] hover:border-[color:var(--accent-blue)]/30 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-[#3d3d3d]"><Target className="text-[var(--text-strong)]" size={20} /></div>
              <div>
                <h2 className="text-2xl font-heading text-[var(--text-strong)]">Challenges</h2>
                <div className="h-[2px] w-12 bg-[var(--accent-blue)]"></div>
              </div>
            </div>
            <ul className="space-y-3 relative pl-4 before:absolute before:left-0 before:top-1 before:bottom-1 before:w-[2px] before:bg-[var(--accent-blue)]/60">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 py-2 transition-transform duration-180 hover:translate-x-[2px]"
                >
                  <span className="text-[var(--text-muted)] font-body">- {challenge}</span>
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
            className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d] hover:border-[color:var(--accent-blue)]/30 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-[#3d3d3d]"><Lightbulb className="text-[var(--text-strong)]" size={20} /></div>
              <div>
                <h2 className="text-2xl font-heading text-[var(--text-strong)]">Solutions</h2>
                <div className="h-[2px] w-12 bg-[var(--accent-blue)]"></div>
              </div>
            </div>
            <ul className="space-y-3 grid md:grid-cols-2 gap-x-6 relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1 md:before:bottom-1 md:before:w-[2px] md:before:bg-[var(--accent-blue)]/60">
              {project.solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 py-2 transition-transform duration-180 hover:translate-x-[2px]"
                >
                  <span className="text-[var(--text-muted)] font-body">- {solution}</span>
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
            className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d] hover:border-[color:var(--accent-blue)]/30 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center border border-[#3d3d3d]"><TrendingUp className="text-[var(--text-strong)]" size={20} /></div>
              <div>
                <h2 className="text-2xl font-heading text-[var(--text-strong)]">Results & Impact</h2>
                <div className="h-[2px] w-12 bg-[var(--accent-blue)]"></div>
              </div>
            </div>
            <ul className="space-y-3 grid md:grid-cols-2 gap-x-6 relative md:pl-4 md:before:absolute md:before:left-0 md:before:top-1 md:before:bottom-1 md:before:w-[2px] md:before:bg-[var(--accent-blue)]/60">
              {project.results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 py-2 transition-transform duration-180 hover:translate-x-[2px]"
                >
                  <span className="text-[var(--text-muted)] font-body">- {result}</span>
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
          <h2 className="text-3xl font-heading mb-4 text-[var(--text-strong)]">Project Gallery</h2>
          <p className="text-[var(--text-muted)] font-body">Visual showcase of the project development and final results</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {project.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1b1b1b] rounded-none overflow-hidden border border-[#3d3d3d]"
            >
              <div className="bg-[#262626] relative aspect-[3/2] md:aspect-[16/9] lg:aspect-[4/3]">
                <div className={`absolute inset-0 bg-[#262626] opacity-10`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-heading text-[var(--text-muted)]">Gallery{index + 1}</span>
                  <img src={image} alt={`Gallery ${index + 1}`} className="absolute inset-0 object-cover w-full h-full" />
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
          className="bg-[#1b1b1b] rounded-none p-12 border border-[#3d3d3d] text-center"
        >
          <h2 className="text-3xl font-heading mb-6 text-[var(--text-strong)]">Interested in Similar Work?</h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto font-body">
            I'm always excited to work on innovative projects that push the boundaries of web development. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 bg-[#131313] text-[var(--text-strong)] rounded-none font-body border border-[#3d3d3d] transition-colors duration-200 cursor-pointer"
              >
                Get In Touch
              </motion.div>
            </Link>
            <Link href="/#projects">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="px-6 py-3 border border-[#3d3d3d] text-[var(--text-strong)] rounded-none font-body transition-colors duration-200 cursor-pointer"
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
