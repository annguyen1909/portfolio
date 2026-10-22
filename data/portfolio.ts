import { getFeaturedProjects, publicProjects } from './projects';
import { getProjectCategory } from './project-categories';

export const selectedProjectSlugs = [
  'united-evisa',
  'wildlifedb',
  'visualennode-archviz-studio',
  'sutygon-crm',
] as const;

export const selectedProjects = selectedProjectSlugs.flatMap(slug => {
  const project = publicProjects.find(project => project.slug === slug);
  return project ? [project] : [];
});

export const orderedProjects = [
  ...selectedProjects,
  ...getFeaturedProjects(publicProjects.length).filter(project => !selectedProjects.includes(project)),
];

export const projectCategories = [...new Set(orderedProjects.map(getProjectCategory))];

export interface PortfolioStat {
  value: string;
  label: string;
}

export const portfolioStats: PortfolioStat[] = [
  { value: String(publicProjects.length), label: "Case Studies" },
  { value: String(publicProjects.filter(project => project.isProduction).length), label: "Production Projects" },
  { value: String(publicProjects.filter(project => project.slug.includes('evisa')).length), label: "eVisa Platforms" },
];
