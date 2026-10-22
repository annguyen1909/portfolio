'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { type Project } from '../data/projects';
import { getProjectCategory } from '../data/project-categories';
import { BOOK_CALL_URL } from '../data/site';
import CaseStudyNav from './CaseStudyNav';
import ProjectGallery from './ProjectGallery';
import TechnologyLogo from './TechnologyLogo';

export default function ProjectDetail({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const liveHref = project.liveUrl && project.liveUrl !== '#'
    ? (project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`)
    : null;
  const hasMeasurement = project.keyMetric.value.toLowerCase() !== 'live';

  return (
    <article className="project-detail">
      <div className="section-container case-back">
        <Link href="/projects" className="text-link text-link--muted"><ArrowLeft size={16} />All case studies</Link>
      </div>

      <section id="overview" className="section-container case-overview">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }}>
          <p className="section-label">{getProjectCategory(project)} / {project.year}</p>
          <div className="case-intro">
            <h1>{project.title}</h1>
            <div>
              <p className="case-lead">{project.businessImpact}</p>
              <div className="case-actions">
                {liveHref && <a href={liveHref} target="_blank" rel="noopener noreferrer" className="text-link">Visit website <ArrowUpRight size={16} /></a>}
                {project.githubUrl && project.githubUrl !== '#' && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link text-link--muted">View code <ArrowUpRight size={16} /></a>}
              </div>
            </div>
          </div>
          <dl className="case-facts">
            <div><dt>My role</dt><dd>{project.role}</dd></div>
            <div><dt>Timeline</dt><dd>{project.timeline}</dd></div>
            <div><dt>Collaboration</dt><dd>{project.teamSize}</dd></div>
            <div><dt>Project status</dt><dd>{project.isProduction ? 'In production' : project.status === 'completed' ? 'Completed' : 'In progress'}</dd></div>
          </dl>
        </motion.div>
        <figure className="case-cover">
          <Image src={project.image} alt={`${project.title} — project overview`} fill sizes="(max-width: 1280px) 100vw, 1152px" preload />
          <figcaption>{project.client ?? project.title} / Project overview</figcaption>
        </figure>
      </section>

      <CaseStudyNav hasGallery={project.gallery.length > 0} />

      <section id="problem" className="section-container case-section case-editorial">
        <div><p className="section-label">01 / Context</p><h2>The problem<br />to solve.</h2></div>
        <div className="case-prose"><p className="case-lead">{project.problem}</p><p>{project.fullDescription}</p></div>
      </section>

      <section id="solution" className="section-container case-section case-editorial">
        <div><p className="section-label">02 / Approach</p><h2>Decisions that<br />shaped the work.</h2></div>
        <ol className="case-decisions">
          {project.solutions.map((solution, index) => <li key={solution}><span>{String(index + 1).padStart(2, '0')}</span><p>{solution}</p></li>)}
        </ol>
      </section>

      {project.gallery.length > 0 && <section id="gallery" className="section-container case-section">
        <div className="case-section-heading"><div><p className="section-label">Inside the project</p><h2>The interface<br />in practice.</h2></div><p>Explore the screens. Open any image for a closer look.</p></div>
        <ProjectGallery images={project.gallery} title={project.title} />
      </section>}

      <section id="architecture" className="section-container case-section case-editorial">
        <div><p className="section-label">03 / Engineering</p><h2>Under<br />the surface.</h2></div>
        <div className="case-prose">
          <p className="case-lead">{project.architecture.overview}</p>
          <ul className="case-components">{project.architecture.components.map(component => <li key={component}>{component}</li>)}</ul>
          <details className="case-disclosure"><summary>Implementation details</summary><ul>{project.technicalImplementation.map(item => <li key={item}>{item}</li>)}</ul></details>
          <details className="case-disclosure"><summary>Feature inventory</summary><ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul></details>
          <div id="technologies" className="case-stack"><h3>Built with</h3><ul className="project-technology-list">{project.technologies.map(tech => <li key={tech} className="project-technology-item"><TechnologyLogo name={tech} size={32} /><span>{tech}</span></li>)}</ul></div>
        </div>
      </section>

      <section id="outcomes" className="section-container case-section case-editorial">
        <div><p className="section-label">04 / Result</p><h2>What<br />shipped.</h2></div>
        <div className="case-prose">
          {hasMeasurement && <div className="case-scope"><span>Project scope{project.keyMetric.estimated ? ' · estimated' : ''}</span><p><strong>{project.keyMetric.value}</strong> {project.keyMetric.label}</p></div>}
          <ul className="case-results">{project.results.map(result => <li key={result}>{result}</li>)}</ul>
        </div>
      </section>

      <section className="section-container case-next">
        <p className="section-label">Have a project in mind?</p><h2>Let&apos;s build<br />something useful.</h2>
        <div className="case-actions"><Link href={BOOK_CALL_URL} className="text-link">Start a project <ArrowUpRight size={17} /></Link><Link href="/projects" className="text-link text-link--muted">Explore more work <ArrowUpRight size={17} /></Link></div>
      </section>
    </article>
  );
}
