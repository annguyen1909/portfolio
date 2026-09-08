'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories = ["All", "Full Stack", "Frontend", "3D/WebGL", "IoT/Interactive", "AI/ML", "SaaS / CRM", "SaaS / Operations"];

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.businessImpact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 bg-[var(--background)]">
      <section className="section-container section-padding !pt-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <p className="section-label">All work / {projects.length} projects</p>
          <h1 className="section-title">ALL CASE<br /><span>STUDIES.</span></h1>
          <p className="section-subtitle">
            Production systems across eVisa, CRM, IoT, 3D, and AI — each with documented
            problem, solution, architecture, and outcomes.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:items-end mb-10 border-b border-[var(--border)] pb-5">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
            <input
              type="text"
              placeholder="Search case studies, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field !pl-10 !pb-3"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`tag cursor-pointer transition-colors ${
                  selectedCategory === category ? 'tag-active' : 'hover:border-[var(--border-hover)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-[var(--text-muted)] mb-8">
          Showing {filteredProjects.length} of {projects.length} case studies
          {searchTerm && ` for "${searchTerm}"`}
        </p>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} compact />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-heading text-[var(--text-strong)] mb-2">No case studies found</h3>
            <p className="text-[var(--text-muted)] mb-6">Try adjusting your search or filters.</p>
            <button
              onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
              className="btn-secondary"
            >
              Clear Filters
            </button>
          </div>
        )}

        {filteredProjects.length > 0 && (
          <div className="section-end-link">
            <Link href="/#contact" className="text-link">
              <span>START A PROJECT</span><ArrowRight size={15} />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllProjects;
