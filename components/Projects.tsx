'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import Link from 'next/link';
import { getFeaturedProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = getFeaturedProjects(8);
  const categories = ["All", "Full Stack", "Frontend", "3D/WebGL", "IoT/Interactive", "AI/ML", "SaaS / CRM"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const flagship = projects.find(p => p.featured) ?? projects[0];
  const flagshipSlug = flagship?.slug;

  return (
    <section id="projects" className="section-padding editorial-section">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <p className="section-label">02 / Selected work</p>
          <h2 className="section-title">PRODUCTION<br /><span>WORK.</span></h2>
          <p className="section-subtitle">
            Selected systems designed, built, and shipped for real operations.
          </p>
        </motion.div>

        {flagship && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flagship-work group"
          >
            <Link href={`/projects/${flagship.slug}`} className="flagship-work-media">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  className="project-card-image"
                />
                <div className="work-badges">
                  <span>FEATURED</span>
                  {flagship.isProduction && (
                    <span className="flex items-center gap-1">
                      <Globe size={10} />
                      LIVE
                    </span>
                  )}
                </div>
            </Link>
            <div className="flagship-work-copy">
              <div><span>01</span><span>{flagship.year}</span></div>
              <h3>{flagship.title}</h3>
              <p>{flagship.businessImpact}</p>
              <Link href={`/projects/${flagship.slug}`} className="text-link">
                <span>VIEW CASE STUDY</span><ArrowRight size={16} />
              </Link>
            </div>
          </motion.article>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="filter-row"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'is-active' : ''}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="project-grid">
          {filteredProjects
            .filter(p => p.slug !== flagshipSlug)
            .map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
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
