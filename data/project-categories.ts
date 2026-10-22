import type { Project } from './projects';

const categoryLabels: Record<string, string> = {
  'Full Stack': 'Web Platforms',
  'Content / Data Platform': 'Content & Data',
  'Creative / Studio Showcase': 'Studio Websites',
  'SaaS / Operations': 'Operations & CRM',
  'SaaS / CRM': 'Operations & CRM',
  'IoT/Interactive': 'Interactive & IoT',
  '3D/WebGL': 'Interactive & IoT',
  'AI/ML': 'AI & Research',
};

export const getProjectCategory = (project: Project) => categoryLabels[project.category] ?? project.category;
