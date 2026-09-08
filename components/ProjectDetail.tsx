'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Users, Clock, Award, CheckCircle, Target, Lightbulb, TrendingUp, Layers, Globe, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Project } from '../data/projects';
import { BOOK_CALL_URL } from '../data/site';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? (project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`)
    : null;

  return (
    <div className="project-detail min-h-screen pt-20 bg-[var(--background)]">
      <div className="section-container pt-10 pb-8 md:pt-12 md:pb-10">
        <Link href="/#projects">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-strong)] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Case Studies</span>
          </motion.div>
        </Link>
      </div>

      <section className="section-container mb-20 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="tag tag-active">{project.category}</span>
              <span className="tag">{project.year}</span>
              {project.isProduction && (
                <span className="tag flex items-center gap-1">
                  <Globe size={12} />
                  In Production
                </span>
              )}
              <span className={`tag ${
                project.status === 'completed' ? 'text-emerald-400 border-emerald-500/30' :
                project.status === 'in-progress' ? 'text-yellow-400 border-yellow-500/30' :
                ''
              }`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1).replace('-', ' ')}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl mb-6 text-[var(--text-strong)] tracking-tight leading-[0.98]">
              {project.title}
            </h1>

            <p className="text-lg text-[var(--text-strong)] mb-6 leading-[1.75] font-medium">
              {project.businessImpact}
            </p>

            <div className="project-detail-metric">
              <span className="project-detail-metric-eyebrow">Key metric</span>
              <div className="project-detail-metric-reading">
                <strong>{project.keyMetric.value}</strong>
                <span>
                  {project.keyMetric.label}
                  {project.keyMetric.estimated && ' (estimated — to be confirmed)'}
                </span>
              </div>
            </div>

            <p className="text-base text-[var(--text-muted)] mb-10 leading-[1.85]">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-4">
              {liveHref && (
                <motion.a
                  href={liveHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="btn-primary"
                >
                  <ExternalLink size={16} />
                  View Live
                </motion.a>
              )}
              {project.githubUrl && project.githubUrl !== '#' && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="btn-secondary"
                >
                  <Github size={16} />
                  View Code
                </motion.a>
              )}
              <Link href={BOOK_CALL_URL}>
                <span className="btn-secondary">
                  <Calendar size={16} />
                  Start a Project
                </span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-glow overflow-hidden"
          >
            <div className="aspect-video bg-[var(--background)] relative">
              <img src={project.image} alt={project.title} className="absolute inset-0 object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Calendar, label: 'Timeline', value: project.timeline },
            { icon: Users, label: 'Team Size', value: project.teamSize },
            { icon: Clock, label: 'Role', value: project.role },
            ...(project.client ? [{ icon: Award, label: 'Client', value: project.client }] : []),
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-glow p-6 md:p-7 text-center"
            >
              <item.icon className="mx-auto mb-3 text-[var(--accent)]" size={24} />
              <h3 className="font-heading text-sm mb-2 text-[var(--text-strong)]">{item.label}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading text-[var(--text-strong)]">The Problem</h2>
          </div>
          <p className="max-w-5xl text-base md:text-lg leading-[1.85] text-[var(--text-muted)]">{project.problem}</p>
        </motion.div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading text-[var(--text-strong)]">The Solution</h2>
            </div>
            <ul className="space-y-5">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">
                  <CheckCircle size={16} className="text-[var(--accent)] mt-1.5 shrink-0" />
                  {solution}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <Layers className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading text-[var(--text-strong)]">Technical Implementation</h2>
            </div>
            <ul className="space-y-5">
              {project.technicalImplementation.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">
                  <CheckCircle size={16} className="text-[var(--accent)] mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <Layers className="text-[var(--accent)]" size={22} />
            <h2 className="text-2xl font-heading text-[var(--text-strong)]">Architecture Overview</h2>
          </div>
          <p className="max-w-5xl text-[var(--text-muted)] leading-[1.85] mb-8">{project.architecture.overview}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.components.map((component, index) => (
              <div key={index} className="flex items-start gap-3 p-4 md:p-5 rounded-lg border border-[var(--border)] bg-[var(--background)]">
                <CheckCircle size={16} className="text-[var(--accent)] mt-1 shrink-0" />
                <span className="text-[0.9rem] leading-[1.7] text-[var(--text-muted)]">{component}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
        >
          <h2 className="text-2xl font-heading mb-6 text-[var(--text-strong)]">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-container mb-20 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading text-[var(--text-strong)]">Key Features</h2>
            </div>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">— {feature}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card-glow px-0 py-10 sm:px-6 md:p-12 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-[var(--accent)]" size={22} />
              <h2 className="text-2xl font-heading text-[var(--text-strong)]">Outcomes & Impact</h2>
            </div>
            <ul className="space-y-5">
              {project.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3 text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">
                  <TrendingUp size={16} className="text-emerald-400 mt-1 shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="section-container mb-20 md:mb-24">
          <h2 className="text-2xl font-heading mb-10 text-[var(--text-strong)]">Project Gallery</h2>
          <div className="space-y-12">
            {project.gallery.map((image, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card-glow overflow-hidden"
              >
                <div className="aspect-video bg-[var(--background)]">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <figcaption className="border-t border-[var(--border)] px-5 py-4 text-xs uppercase tracking-[0.14em] text-[var(--text-subtle)]">
                  {String(index + 1).padStart(2, '0')} / {project.title}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      )}

      <section className="section-container pb-20 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow px-5 py-12 md:p-14 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-heading mb-6 text-[var(--text-strong)]">
            Need a similar system built?
          </h2>
          <p className="text-[var(--text-muted)] leading-[1.8] mb-10 max-w-xl mx-auto">
            I specialize in production-grade platforms — payment flows, complex business logic,
            and admin dashboards. Let&apos;s discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={BOOK_CALL_URL} className="btn-primary">
              <Calendar size={15} />
              Start a Project
            </Link>
            <Link href="/#projects" className="btn-secondary">
              More Case Studies
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectDetail;
