'use client';

import { useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { orderedProjects, projectCategories } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import { getProjectCategory } from '../data/project-categories';

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const query = searchTerm.trim().toLowerCase();
  const filteredProjects = orderedProjects.filter(project =>
    (selectedCategory === 'All' || getProjectCategory(project) === selectedCategory) &&
    [project.title, project.businessImpact, ...project.technologies].some(value => value.toLowerCase().includes(query))
  );
  const hasFilters = selectedCategory !== 'All' || searchTerm !== '';
  const clearFilters = () => { setSelectedCategory('All'); setSearchTerm(''); };

  return (
    <div className="work-index">
      <section className="section-container section-padding !pt-12">
        <div className="section-heading section-heading--row">
          <div><p className="section-label">The archive / {orderedProjects.length} case studies</p><h1 className="section-title">ALL CASE<br /><span>STUDIES.</span></h1></div>
          <p className="section-subtitle">From public platforms to the tools behind daily operations. Explore the context, decisions, and implementation behind each project.</p>
        </div>

        <div className="work-filters">
          <div className="work-search">
            <label htmlFor="project-search">Find a project</label>
            <div><Search size={18} aria-hidden="true" /><input id="project-search" type="search" placeholder="Name or technology…" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} /></div>
          </div>
          <div className="work-filter-select"><label htmlFor="project-category">Type of work</label><select id="project-category" value={selectedCategory} onChange={event => setSelectedCategory(event.target.value)}><option value="All">All projects ({orderedProjects.length})</option>{projectCategories.map(category => <option key={category} value={category}>{category} ({orderedProjects.filter(project => getProjectCategory(project) === category).length})</option>)}</select></div>
        </div>
        <div className="work-filter-status">
          <p role="status" aria-live="polite">Showing {filteredProjects.length} of {orderedProjects.length} case studies{selectedCategory !== 'All' && ` · ${selectedCategory}`}{query && ` · “${searchTerm.trim()}”`}</p>
          {hasFilters && <button type="button" onClick={clearFilters}>Clear filters <X size={16} /></button>}
        </div>
        <div className="project-grid work-archive-grid">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} compact />)}</div>
        {filteredProjects.length === 0 && <div className="work-empty"><h2>No matching projects.</h2><p>Try another name, technology, or type of work.</p><button type="button" className="text-link" onClick={clearFilters}>Show all projects <ArrowRight size={16} /></button></div>}
        <div className="section-end-link"><Link href="/#contact" className="text-link">Start a project <ArrowRight size={16} /></Link></div>
      </section>
    </div>
  );
}
