'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { selectedProjects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import ProjectMedia from './ProjectMedia';

const Projects = () => {
  const reduceMotion = useReducedMotion();
  const projects = selectedProjects;
  const flagship = projects[0];
  const flagshipSlug = flagship?.slug;
  const visibleProjects = projects.filter(project => project.slug !== flagshipSlug);

  return (
    <section id="projects" className="section-padding editorial-section">
      <div className="section-container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">02 / Selected work</p>
          <h2 className="section-title">PRODUCTION<br /><span>WORK.</span></h2>
          <p className="section-subtitle">
            Four perspectives on my work: production platforms, independent products,
            studio websites, and operational tools.
          </p>
        </motion.div>

        {flagship && (
          <motion.article
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flagship-work group"
          >
            <ProjectMedia href={`/projects/${flagship.slug}`} className="flagship-work-media">
                <Image
                  src={flagship.image}
                  alt={flagship.title}
                  className="project-card-image"
                  fill
                  sizes="(max-width: 900px) 100vw, 65vw"
                />
                <div className="work-badges">
                  <span>FEATURED</span>
                  {flagship.isProduction && (
                    <span className="flex items-center gap-1">
                      <Globe size={10} />
                      PRODUCTION
                    </span>
                  )}
                </div>
                <span className="work-media-action" aria-hidden="true">VIEW CASE STUDY <ArrowRight size={17} /></span>
            </ProjectMedia>
            <div className="flagship-work-copy">
              <div><span>01</span><span>{flagship.year}</span></div>
              <h3>{flagship.title}</h3>
              <p className="work-role">{flagship.role}</p>
              <p>{flagship.businessImpact}</p>
              <Link href={`/projects/${flagship.slug}`} className="text-link">
                <span>VIEW CASE STUDY</span><ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        )}

        <div className="project-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-end-link"
        >
          <Link href="/projects" className="text-link">
            <span>VIEW ALL CASE STUDIES</span>
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
