"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import Link from "next/link";
import { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
  compact?: boolean;
};

const ProjectCard = ({ project, index = 0, compact = false }: ProjectCardProps) => {
  const liveHref =
    project.liveUrl && project.liveUrl !== "#"
      ? project.liveUrl.startsWith("http")
        ? project.liveUrl
        : `https://${project.liveUrl}`
      : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      viewport={{ once: true }}
      className={`project-card group ${compact ? "project-card--compact" : ""}`}
    >
      <Link href={`/projects/${project.slug}`} className="project-card-media">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-card-image"
          />
        ) : (
          <span className="text-2xl font-heading text-[var(--text-muted)]">
            {project.title.split(" ")[0]}
          </span>
        )}
        <div className="work-badges">
          <span>{project.category.toUpperCase()}</span>
          {project.isProduction && (
            <span className="flex items-center gap-1">
              <Globe size={10} />
              LIVE
            </span>
          )}
        </div>
        <span className="project-card-arrow"><ArrowUpRight size={20} /></span>
      </Link>

      <div className="project-card-body">
        <div className="project-card-index">
          <span>{String(index + 2).padStart(2, "0")}</span>
          <span>{project.year}</span>
        </div>
        <Link href={`/projects/${project.slug}`}><h3>{project.title}</h3></Link>
        <p>{project.businessImpact}</p>
        <div className="project-card-metric">
          <strong>{project.keyMetric.value}</strong>
          <span>
            {project.keyMetric.label}
            {project.keyMetric.estimated && " (est.)"}
          </span>
        </div>
        <div className="project-card-actions">
          <Link href={`/projects/${project.slug}`} className="text-link"><span>CASE STUDY</span><ArrowUpRight size={14} /></Link>
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-link--muted"
              aria-label={`Live demo of ${project.title}`}
            >
              <span>LIVE SITE</span><ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
