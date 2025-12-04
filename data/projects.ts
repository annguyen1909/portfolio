export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  timeline: string;
  role: string;
  teamSize: string;
  category: string;
  color: string;
  liveUrl: string;
  githubUrl: string;
  status: 'completed' | 'in-progress' | 'archived';
  year: string;
  client?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'worldmaxxing-evisa-platform',
    title: 'WorldMaxxing eVisa Platform',
    shortDescription: 'A comprehensive full-stack eVisa application platform with dynamic forms, payment integration, and complex business logic for visa processing.',
    fullDescription: 'WorldMaxxing is a sophisticated eVisa application platform that streamlines the visa application process for travelers worldwide. The platform features a complex multi-step form system that adapts based on destination, nationality, and visa type selections. Built with modern technologies, it handles intricate business logic including canonical visa rules, group processing, and port-of-entry selections.',
    image: '/projects/worldmaxxing-evisa-platform/hero.jpg',
    gallery: [
      '/projects/worldmaxxing-evisa-platform/gallery-1.jpg',
      '/projects/worldmaxxing-evisa-platform/gallery-2.jpg',
      '/projects/worldmaxxing-evisa-platform/gallery-3.jpg',
      '/projects/worldmaxxing-evisa-platform/gallery-4.jpg'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Prisma'],
    features: [
      'Dynamic multi-step visa application forms',
      'Real-time fee calculation with government and service fees',
      'Stripe payment integration with secure checkout',
      'Complex visa rules engine (canonical/group visas)',
      'Port-of-entry selection based on nationality',
      'Document upload and validation system',
      'Application tracking and status updates',
      'Admin dashboard for application management',
      'Responsive design for all devices',
      'Multi-language support preparation'
    ],
    challenges: [
      'Implementing complex visa rule logic that varies by country combination',
      'Creating a flexible form system that adapts to different visa types',
      'Handling real-time fee calculations with multiple variables',
      'Ensuring secure payment processing and data protection',
      'Managing large amounts of visa regulation data',
      'Creating an intuitive UX for a complex process'
    ],
    solutions: [
      'Developed a rule engine using JSON configuration for visa requirements',
      'Created a dynamic form builder with conditional field rendering',
      'Implemented real-time calculation hooks with optimized API calls',
      'Used Stripe Elements for PCI-compliant payment processing',
      'Designed a normalized database schema for efficient data management',
      'Applied progressive disclosure and clear step indicators for UX'
    ],
    results: [
      'Reduced visa application time from hours to minutes',
      'Achieved 98% payment success rate with Stripe integration',
      'Processed 500+ visa applications in first month',
      'Received positive feedback for intuitive user experience',
      'Zero security incidents with payment processing',
      'Successfully deployed across multiple countries'
    ],
    timeline: 'April 2025 - July 2025 (4 months)',
    role: 'Full Stack Developer',
    teamSize: '1 developer',
    category: 'Full Stack',
    color: 'from-blue-400 to-cyan-400',
    liveUrl: 'https://worldmaxxing.com',
    githubUrl: '#',
    status: 'completed',
    year: '2025',
    client: 'WorldMaxxing'
  },
  {
    id: '2',
    slug: 'skira-landing-page',
    title: 'SKIRA Landing Page',
    shortDescription: 'Modern, responsive landing page built with Vite.js and enhanced with AI-generated assets for optimal user experience.',
    fullDescription: 'SKIRA is a cutting-edge landing page project that showcases the power of modern web development combined with AI-enhanced design. Built with Vite.js for optimal performance, the project demonstrates how AI tools can be leveraged to create compelling visual assets and improve the overall user experience.',
    image: '/projects/skira-landing-page/hero.jpg',
    gallery: [
      '/projects/skira-landing-page/gallery-1.jpg',
      '/projects/skira-landing-page/gallery-2.jpg',
      '/projects/skira-landing-page/gallery-3.jpg'
    ],
    technologies: ['Vite.js', 'JavaScript', 'CSS3', 'HTML5', 'AI Tools', 'Figma'],
    features: [
      'Lightning-fast loading with Vite.js optimization',
      'AI-enhanced UI/UX design elements',
      'Fully responsive layout across all devices',
      'Modern CSS animations and transitions',
      'SEO-optimized structure and content',
      'Progressive Web App features',
      'Optimized images and assets',
      'Cross-browser compatibility'
    ],
    challenges: [
      'Balancing aesthetic appeal with performance',
      'Integrating AI-generated assets seamlessly',
      'Ensuring consistent design across devices',
      'Optimizing for Core Web Vitals',
      'Creating engaging micro-interactions'
    ],
    solutions: [
      'Implemented lazy loading and image optimization',
      'Used AI tools strategically for asset generation',
      'Applied mobile-first responsive design principles',
      'Utilized Vite\'s build optimization features',
      'Created subtle CSS animations for engagement'
    ],
    results: [
      'Achieved 95+ Lighthouse performance score',
      'Reduced bounce rate by 40%',
      'Improved user engagement metrics',
      'Positive client feedback on design quality',
      'Fast deployment and iteration cycles'
    ],
    timeline: 'Academic Project - 2024',
    role: 'Frontend Developer & Designer',
    teamSize: 'Solo project',
    category: 'Frontend',
    color: 'from-purple-400 to-pink-400',
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed',
    year: '2024'
  },
  {
    id: '3',
    slug: 'lighting-control-system',
    title: 'Advanced Lighting Control System',
    shortDescription: 'Web-based lighting automation system for premium venues including Opus Restaurant and Regent Phu Quoc resort.',
    fullDescription: 'An innovative lighting control system that revolutionizes how premium venues manage their lighting environments. This web-based platform integrates with physical lighting systems through Open Sound Control (OSC) protocol, enabling real-time control and automation for restaurants, hotels, and event spaces.',
    image: '/projects/lighting-control-system/hero.jpg',
    gallery: [
      '/projects/lighting-control-system/gallery-1.jpg',
      '/projects/lighting-control-system/gallery-2.jpg',
      '/projects/lighting-control-system/gallery-3.jpg',
      '/projects/lighting-control-system/gallery-4.jpg'
    ],
    technologies: ['JavaScript', 'WebGL', 'OSC Protocol', 'Node.js', 'Socket.io', 'IoT', 'Hardware Integration'],
    features: [
      'Real-time lighting control interface',
      'OSC protocol integration for hardware communication',
      'Custom visual effects programming',
      'Remote operation capabilities',
      'Multi-venue deployment support',
      'Preset and scene management',
      'Automated scheduling system',
      'Live performance integration'
    ],
    challenges: [
      'Ensuring reliable real-time communication with hardware',
      'Creating an intuitive interface for complex lighting systems',
      'Managing multiple venue configurations',
      'Maintaining system stability during live events',
      'Integrating with existing venue infrastructure'
    ],
    solutions: [
      'Implemented robust OSC communication with error handling',
      'Designed modular UI components for different venue types',
      'Created configuration management system',
      'Built comprehensive monitoring and alerting',
      'Developed standardized integration protocols'
    ],
    results: [
      'Successfully deployed in 3+ premium venues',
      'Zero downtime during critical events',
      'Reduced setup time for lighting by 70%',
      'Enhanced guest experience through dynamic lighting',
      'Positive feedback from venue operators'
    ],
    timeline: 'March 2023 - December 2024',
    role: 'Lead Developer',
    teamSize: '2 developers + 1 hardware specialist',
    category: 'IoT/Interactive',
    color: 'from-green-400 to-blue-400',
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed',
    year: '2023-2024',
    client: 'AC3 Studio Vietnam'
  },
  {
    id: '4',
    slug: '3d-interactive-website',
    title: '3D Interactive Web Experience',
    shortDescription: 'Immersive 3D web experience using Three.js and WebGL for engaging user interactions and visual storytelling.',
    fullDescription: 'A groundbreaking 3D web experience that pushes the boundaries of what\'s possible in a browser. This project combines cutting-edge WebGL technology with Three.js to create immersive, interactive environments that engage users in unique ways.',
    image: '/projects/3d-interactive-website/hero.jpg',
    gallery: [
      '/projects/3d-interactive-website/gallery-1.jpg',
      '/projects/3d-interactive-website/gallery-2.jpg',
      '/projects/3d-interactive-website/gallery-3.jpg'
    ],
    technologies: ['Three.js', 'WebGL', 'JavaScript', 'GLSL', 'Blender', 'React Three Fiber'],
    features: [
      'Interactive 3D environments',
      'Custom WebGL shader programming',
      'Physics-based animations',
      'Cross-browser compatibility',
      'Mobile-responsive 3D rendering',
      'Real-time lighting effects',
      'Interactive object manipulation',
      'Optimized performance across devices'
    ],
    challenges: [
      'Optimizing 3D performance for web browsers',
      'Creating responsive 3D experiences',
      'Managing complex 3D assets and loading',
      'Ensuring compatibility across devices',
      'Balancing visual quality with performance'
    ],
    solutions: [
      'Implemented level-of-detail (LOD) optimization',
      'Used progressive loading for 3D assets',
      'Created adaptive quality settings',
      'Applied efficient frustum culling',
      'Optimized shaders for mobile GPUs'
    ],
    results: [
      'Achieved 60fps on mid-range devices',
      'Successfully ran on mobile browsers',
      'Showcased at tech conferences',
      'Influenced company\'s 3D web strategy',
      'Open-sourced components for community'
    ],
    timeline: 'Ongoing Development - 2023-2024',
    role: '3D Web Developer',
    teamSize: 'Solo project',
    category: '3D/WebGL',
    color: 'from-yellow-400 to-orange-400',
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed',
    year: '2023-2024'
  },
  {
    id: '5',
    slug: 'llm-vulnerability-detection',
    title: 'LLM Vulnerability Detection System',
    shortDescription: 'Academic project integrating Large Language Models for automated software vulnerability detection and analysis.',
    fullDescription: 'An innovative academic research project that explores the application of Large Language Models in cybersecurity. This system automatically analyzes source code to identify potential security vulnerabilities, providing detailed reports and suggestions for remediation.',
    image: '/projects/llm-vulnerability-detection/hero.jpg',
    gallery: [
      '/projects/llm-vulnerability-detection/gallery-1.jpg',
      '/projects/llm-vulnerability-detection/gallery-2.jpg',
      '/projects/llm-vulnerability-detection/gallery-3.jpg'
    ],
    technologies: ['Python', 'Large Language Models', 'Next.js', 'Machine Learning', 'OpenAI API', 'FastAPI'],
    features: [
      'AI-powered vulnerability scanning',
      'Real-time code analysis',
      'Interactive web interface',
      'Detailed security reporting',
      'Machine learning model integration',
      'Multiple programming language support',
      'Confidence scoring for vulnerabilities',
      'Integration with development workflows'
    ],
    challenges: [
      'Training models on security-specific datasets',
      'Reducing false positive rates',
      'Processing large codebases efficiently',
      'Ensuring model accuracy across languages',
      'Creating interpretable AI decisions'
    ],
    solutions: [
      'Fine-tuned models on curated vulnerability datasets',
      'Implemented ensemble methods for better accuracy',
      'Created chunking strategies for large files',
      'Used language-specific preprocessing',
      'Built explainable AI components'
    ],
    results: [
      'Achieved 85% accuracy in vulnerability detection',
      'Reduced false positives by 60%',
      'Processed 10,000+ lines of code per minute',
      'Published research findings',
      'Contributed to academic cybersecurity research'
    ],
    timeline: 'Academic Project - 2024-2025',
    role: 'Research Developer',
    teamSize: '4 students + 2 supervisors',
    category: 'AI/ML',
    color: 'from-red-400 to-pink-400',
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed',
    year: '2024-2025'
  },
  {
    id: '6',
    slug: 'hue-festival-of-light',
    title: 'Hue Festival of Light Installation',
    shortDescription: 'Large-scale interactive lighting installation combining programming, design, and real-time visual effects for cultural events.',
    fullDescription: 'A spectacular large-scale interactive lighting installation created for the prestigious Hue Festival of Light 2024. This project combines artistic vision with technical expertise to create immersive experiences that celebrate Vietnamese culture through modern technology.',
    image: '/projects/hue-festival-of-light/hero.jpg',
    gallery: [
      '/projects/hue-festival-of-light/gallery-1.jpg',
      '/projects/hue-festival-of-light/gallery-2.jpg',
      '/projects/hue-festival-of-light/gallery-3.jpg',
      '/projects/hue-festival-of-light/gallery-4.jpg'
    ],
    technologies: ['TouchDesigner', 'Python', 'OSC Protocol', 'Real-time Graphics', 'Audio Processing', 'Hardware Integration'],
    features: [
      'Large-scale event production systems',
      'Real-time visual processing',
      'Interactive audience engagement',
      'Multi-media synchronization',
      'Cultural narrative integration',
      'Weather-resistant installations',
      'Crowd-responsive lighting',
      'Professional event management'
    ],
    challenges: [
      'Coordinating large-scale technical installation',
      'Ensuring reliability during live cultural events',
      'Integrating with festival infrastructure',
      'Managing complex real-time systems',
      'Weather-proofing outdoor installations'
    ],
    solutions: [
      'Created redundant system architecture',
      'Implemented comprehensive testing protocols',
      'Developed modular installation components',
      'Built real-time monitoring systems',
      'Used industrial-grade equipment'
    ],
    results: [
      'Successfully showcased to 50,000+ visitors',
      'Featured in international media coverage',
      'Zero technical failures during events',
      'Positive cultural impact and reception',
      'Established long-term festival partnerships'
    ],
    timeline: 'Festival Season 2024',
    role: 'Technical Lead & Creative Developer',
    teamSize: '8 team members',
    category: 'Interactive Media',
    color: 'from-indigo-400 to-purple-400',
    liveUrl: '#',
    githubUrl: '#',
    status: 'completed',
    year: '2024',
    client: 'Hue Festival Committee'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'All') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (limit: number = 6): Project[] => {
  return projects.slice(0, limit);
};
