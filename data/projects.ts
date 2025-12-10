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
  status: "completed" | "in-progress" | "archived";
  year: string;
  client?: string;
  order?: number;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "worldmaxxing-evisa-platform",
    title: "WorldMaxxing eVisa Platform",
    shortDescription:
      "A comprehensive full-stack eVisa application platform with dynamic forms, payment integration, and complex business logic for visa processing.",
    fullDescription:
      "WorldMaxxing is a sophisticated eVisa application platform that streamlines the visa application process for travelers worldwide. The platform features a complex multi-step form system that adapts based on destination, nationality, and visa type selections. Built with modern technologies, it handles intricate business logic including canonical visa rules, group processing, and port-of-entry selections.",
    image: "/projects/worldmaxxing-evisa-platform/hero.jpg",
    gallery: [
      "/projects/worldmaxxing-evisa-platform/gallery-1.jpg",
      "/projects/worldmaxxing-evisa-platform/gallery-2.jpg",
      "/projects/worldmaxxing-evisa-platform/gallery-3.jpg",
      "/projects/worldmaxxing-evisa-platform/gallery-4.jpg",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Stripe",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "Prisma",
    ],
    features: [
      "Dynamic multi-step visa application forms",
      "Real-time fee calculation with government and service fees",
      "Stripe payment integration with secure checkout",
      "Complex visa rules engine (canonical/group visas)",
      "Port-of-entry selection based on nationality",
      "Document upload and validation system",
      "Application tracking and status updates",
      "Admin dashboard for application management",
      "Responsive design for all devices",
      "Multi-language support preparation",
    ],
    challenges: [
      "Implementing complex visa rule logic that varies by country combination",
      "Creating a flexible form system that adapts to different visa types",
      "Handling real-time fee calculations with multiple variables",
      "Ensuring secure payment processing and data protection",
      "Managing large amounts of visa regulation data",
      "Creating an intuitive UX for a complex process",
    ],
    solutions: [
      "Developed a rule engine using JSON configuration for visa requirements",
      "Created a dynamic form builder with conditional field rendering",
      "Implemented real-time calculation hooks with optimized API calls",
      "Used Stripe Elements for PCI-compliant payment processing",
      "Designed a normalized database schema for efficient data management",
      "Applied progressive disclosure and clear step indicators for UX",
    ],
    results: [
      "Reduced visa application time from hours to minutes",
      "Achieved 98% payment success rate with Stripe integration",
      "Processed 500+ visa applications in first month",
      "Received positive feedback for intuitive user experience",
      "Zero security incidents with payment processing",
      "Successfully deployed across multiple countries",
    ],
    timeline: "April 2025 - July 2025 (4 months)",
    role: "Full Stack Developer",
    teamSize: "1 developer",
    category: "Full Stack",
    color: "from-blue-400 to-cyan-400",
    liveUrl: "https://worldmaxxing.com",
    githubUrl: "#",
    status: "completed",
    year: "2025",
    client: "WorldMaxxing",
    order: 1,
  },
  {
    id: "6",
    slug: "skira-landing-page",
    title: "SKIRA Landing Page",
    shortDescription:
      "Modern, responsive landing page built with Vite.js and enhanced with AI-generated assets for optimal user experience.",
    fullDescription:
      "SKIRA is a cutting-edge landing page project that showcases the power of modern web development combined with AI-enhanced design. Built with Vite.js for optimal performance, the project demonstrates how AI tools can be leveraged to create compelling visual assets and improve the overall user experience.",
    image: "/projects/skira-landing-page/hero.jpg",
    gallery: [
      "/projects/skira-landing-page/gallery-1.jpg",
      "/projects/skira-landing-page/gallery-2.jpg",
      "/projects/skira-landing-page/gallery-3.jpg",
    ],
    technologies: [
      "Vite.js",
      "JavaScript",
      "CSS3",
      "HTML5",
      "AI Tools",
      "Figma",
    ],
    features: [
      "Lightning-fast loading with Vite.js optimization",
      "AI-enhanced UI/UX design elements",
      "Fully responsive layout across all devices",
      "Modern CSS animations and transitions",
      "SEO-optimized structure and content",
      "Progressive Web App features",
      "Optimized images and assets",
      "Cross-browser compatibility",
    ],
    challenges: [
      "Balancing aesthetic appeal with performance",
      "Integrating AI-generated assets seamlessly",
      "Ensuring consistent design across devices",
      "Optimizing for Core Web Vitals",
      "Creating engaging micro-interactions",
    ],
    solutions: [
      "Implemented lazy loading and image optimization",
      "Used AI tools strategically for asset generation",
      "Applied mobile-first responsive design principles",
      "Utilized Vite's build optimization features",
      "Created subtle CSS animations for engagement",
    ],
    results: [
      "Achieved 95+ Lighthouse performance score",
      "Reduced bounce rate by 40%",
      "Improved user engagement metrics",
      "Positive client feedback on design quality",
      "Fast deployment and iteration cycles",
    ],
    timeline: "Academic Project - 2024",
    role: "Frontend Developer & Designer",
    teamSize: "Solo project",
    category: "Frontend",
    color: "from-purple-400 to-pink-400",
    liveUrl: "https://cybersentinal-six.vercel.app/",
    githubUrl: "#",
    status: "completed",
    year: "2024",
    order: 6,
  },
  {
    id: "7",
    slug: "lighting-control-system",
    title: "Advanced Lighting Control System",
    shortDescription:
      "Web-based lighting automation system for premium venues including Opus Restaurant and Regent Phu Quoc resort.",
    fullDescription:
      "An innovative lighting control system that revolutionizes how premium venues manage their lighting environments. This web-based platform integrates with physical lighting systems through Open Sound Control (OSC) protocol, enabling real-time control and automation for restaurants, hotels, and event spaces.",
    image: "/projects/lighting-control-system/hero.jpg",
    gallery: [
      "/projects/lighting-control-system/gallery-1.jpg",
      "/projects/lighting-control-system/gallery-2.jpg",
    ],
    technologies: [
      "JavaScript",
      "WebGL",
      "OSC Protocol",
      "Node.js",
      "Socket.io",
      "IoT",
      "Hardware Integration",
    ],
    features: [
      "Real-time lighting control interface",
      "OSC protocol integration for hardware communication",
      "Custom visual effects programming",
      "Remote operation capabilities",
      "Multi-venue deployment support",
      "Preset and scene management",
      "Automated scheduling system",
      "Live performance integration",
    ],
    challenges: [
      "Ensuring reliable real-time communication with hardware",
      "Creating an intuitive interface for complex lighting systems",
      "Managing multiple venue configurations",
      "Maintaining system stability during live events",
      "Integrating with existing venue infrastructure",
    ],
    solutions: [
      "Implemented robust OSC communication with error handling",
      "Designed modular UI components for different venue types",
      "Created configuration management system",
      "Built comprehensive monitoring and alerting",
      "Developed standardized integration protocols",
    ],
    results: [
      "Successfully deployed in 3+ premium venues",
      "Zero downtime during critical events",
      "Reduced setup time for lighting by 70%",
      "Enhanced guest experience through dynamic lighting",
      "Positive feedback from venue operators",
    ],
    timeline: "March 2023 - December 2024",
    role: "Lead Developer",
    teamSize: "2 developers + 1 hardware specialist",
    category: "IoT/Interactive",
    color: "from-green-400 to-blue-400",
    liveUrl: "#",
    githubUrl: "#",
    status: "completed",
    year: "2023-2024",
    client: "AC3 Studio Vietnam",
    order: 7,
  },
  {
    id: "4",
    slug: "3d-interactive-website",
    title: "3D Interactive Web Experience",
    shortDescription:
      "Immersive 3D web experience using Three.js and WebGL for engaging user interactions and visual storytelling.",
    fullDescription:
      "A groundbreaking 3D web experience that pushes the boundaries of what's possible in a browser. This project combines cutting-edge WebGL technology with Three.js to create immersive, interactive environments that engage users in unique ways.",
    image: "/projects/3d-interactive-website/hero.jpg",
    gallery: [
      "/projects/3d-interactive-website/gallery-1.jpg",
      "/projects/3d-interactive-website/gallery-2.jpg",
      "/projects/3d-interactive-website/gallery-3.jpg",
    ],
    technologies: [
      "Three.js",
      "WebGL",
      "JavaScript",
      "GLSL",
      "Blender",
      "React Three Fiber",
    ],
    features: [
      "Interactive 3D environments",
      "Custom WebGL shader programming",
      "Physics-based animations",
      "Cross-browser compatibility",
      "Mobile-responsive 3D rendering",
      "Real-time lighting effects",
      "Interactive object manipulation",
      "Optimized performance across devices",
    ],
    challenges: [
      "Optimizing 3D performance for web browsers",
      "Creating responsive 3D experiences",
      "Managing complex 3D assets and loading",
      "Ensuring compatibility across devices",
      "Balancing visual quality with performance",
    ],
    solutions: [
      "Implemented level-of-detail (LOD) optimization",
      "Used progressive loading for 3D assets",
      "Created adaptive quality settings",
      "Applied efficient frustum culling",
      "Optimized shaders for mobile GPUs",
    ],
    results: [
      "Achieved 60fps on mid-range devices",
      "Successfully ran on mobile browsers",
      "Showcased at tech conferences",
      "Influenced company's 3D web strategy",
      "Open-sourced components for community",
    ],
    timeline: "Ongoing Development - 2023-2024",
    role: "3D Web Developer",
    teamSize: "Solo project",
    category: "3D/WebGL",
    color: "from-yellow-400 to-orange-400",
    liveUrl: "https://ennode-labs-2.vercel.app/",
    githubUrl: "#",
    status: "completed",
    year: "2023-2024",
    order: 4,
  },
  {
    id: "5",
    slug: "llm-vulnerability-detection",
    title: "LLM Vulnerability Detection System",
    shortDescription:
      "Academic project integrating Large Language Models for automated software vulnerability detection and analysis.",
    fullDescription:
      "An innovative academic research project that explores the application of Large Language Models in cybersecurity. This system automatically analyzes source code to identify potential security vulnerabilities, providing detailed reports and suggestions for remediation.",
    image: "/projects/llm-vulnerability-detection/hero.jpg",
    gallery: [
      "/projects/llm-vulnerability-detection/gallery-1.jpg",
      "/projects/llm-vulnerability-detection/gallery-2.jpg",
      "/projects/llm-vulnerability-detection/gallery-3.jpg",
    ],
    technologies: [
      "Python",
      "Large Language Models",
      "Next.js",
      "Machine Learning",
      "OpenAI API",
      "FastAPI",
    ],
    features: [
      "AI-powered vulnerability scanning",
      "Real-time code analysis",
      "Interactive web interface",
      "Detailed security reporting",
      "Machine learning model integration",
      "Multiple programming language support",
      "Confidence scoring for vulnerabilities",
      "Integration with development workflows",
    ],
    challenges: [
      "Training models on security-specific datasets",
      "Reducing false positive rates",
      "Processing large codebases efficiently",
      "Ensuring model accuracy across languages",
      "Creating interpretable AI decisions",
    ],
    solutions: [
      "Fine-tuned models on curated vulnerability datasets",
      "Implemented ensemble methods for better accuracy",
      "Created chunking strategies for large files",
      "Used language-specific preprocessing",
      "Built explainable AI components",
    ],
    results: [
      "Achieved 85% accuracy in vulnerability detection",
      "Reduced false positives by 60%",
      "Processed 10,000+ lines of code per minute",
      "Published research findings",
      "Contributed to academic cybersecurity research",
    ],
    timeline: "Academic Project - 2024-2025",
    role: "Research Developer",
    teamSize: "4 students + 2 supervisors",
    category: "AI/ML",
    color: "from-red-400 to-pink-400",
    liveUrl: "#",
    githubUrl: "#",
    status: "completed",
    year: "2024-2025",
    order: 5,
  },
  {
    id: "3",
    slug: "sutygon-order-invoicing",
    title: "SUTYGON Client — Main Webpage and Order Management",
    shortDescription:
      "Full‑stack order management and headless PDF invoicing platform for event costume rentals, built with Next.js and TypeScript.",
    fullDescription:
      "A full‑stack SaaS application for managing orders, customers, payments, and PDF invoices for SUTYGON (event costume rental). Built with Next.js App Router and TypeScript, the project includes responsive React UIs, phone-based OTP authentication, Prisma-backed persistence, robust REST API routes, and a headless PDF pipeline (Puppeteer/@sparticuz/chromium) that generates CRM-style invoices with QR codes and Code128 barcodes. The system handles itemized discounts, payment histories, and printing/download workflows while integrating with external services (Zalo token management) and optimizing static assets and metadata for reliable deployments.",
    image: "/projects/sutygon/hero.jpg",
    gallery: [
      "/projects/sutygon/gallery-1.jpg",
      "/projects/sutygon/gallery-2.jpg",
      "/projects/sutygon/gallery-3.jpg",
    ],
    technologies: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Prisma + PostgreSQL",
      "Node.js",
      "Puppeteer-core",
      "@sparticuz/chromium",
      "bwip-js (Code128)",
      "qrcode",
      "Zod",
      "react-hook-form",
      "Tailwind CSS",
      "Vercel-compatible deployment",
      "Zalo API integration",
    ],
    features: [
      "Order creation and management dashboard",
      "Phone-based OTP authentication and register flows",
      "Prisma-backed data persistence for customers, orders, payments",
      "Headless PDF invoice generation with exact CRM-style HTML/CSS templates",
      "QR code and Code128 barcode generation embedded in invoices",
      "Itemized discounts, VAT, deposits, and payment-history reporting",
      "Print and download workflows (open PDF blob and auto-print)",
      "RESTful API routes for customers, orders, payments, and tokens",
      "Zalo token management scripts and cron routes",
      "PWA manifest and favicon/metadata optimization",
    ],
    challenges: [
      "Ensuring consistent PDF rendering across headless Chromium instances and environments",
      "Matching CRM invoice formatting without relying on external web fonts",
      "Mapping frontend order shapes to the invoice API payload to avoid runtime errors",
      "Handling TypeScript + Zod schema mismatches (making email optional safely)",
      "Resolving Next.js metadata/build conflicts (favicon import issues)",
      "Managing platform-specific Chromium executable paths for local/dev environments",
    ],
    solutions: [
      "Built a robust payload mapper on the dashboard to match the invoice route’s expected shape",
      "Enforced a system font stack and explicit @page settings to stabilize headless PDF output",
      "Sanitized filenames and data for PDF responses and improved error logging",
      "Preprocessed empty email strings to undefined in Zod schemas and adjusted resolver typings",
      "Removed conflicting app-level favicon folder and centralized static asset references to public",
      "Implemented graceful fallbacks (download when popup blocked) and user-facing alerts for PDF failures",
    ],
    results: [
      "Reliable headless PDF invoice generation matching CRM templates",
      "Improved user workflow to open/auto-print invoices and download when needed",
      "Registration flow that accepts optional emails while preserving validation",
      "Resolved build-time metadata issues (favicon) and tightened static asset handling",
      "Streamlined Zalo token scripts and server routes for integrations",
      "Type-safe mappings and clearer API contracts between frontend and backend",
    ],
    timeline: "2024–2025",
    role: "Full-Stack Developer (Frontend + Backend)",
    teamSize: "2 developers",
    category: "SaaS / Operations",
    color: "from-pink-400 to-rose-500",
    liveUrl: "sutygon.com",
    githubUrl: "#",
    status: "completed",
    year: "2025",
    client: "SUTYGON",
    order: 3,
  },
  {
    id: "4",
    slug: "sutygon-crm",
    title: "Sutygon CRM — Order & Invoicing Platform",
    shortDescription:
      "Full‑stack order, inventory, and invoicing CRM for rental & point‑of‑sale workflows with mobile OCR product lookup and headless PDF invoicing.",
    fullDescription:
      "Sutygon CRM is a full‑stack platform built to manage rental orders, inventory, payments, and invoicing. The system combines a responsive Next.js + React TypeScript frontend with a robust Node backend (Drizzle ORM + PostgreSQL) and search/indexing (Typesense / Elasticsearch). Key capabilities include dynamic multi‑step order creation, secure storage of sensitive fields (AES‑256‑CBC), mobile camera scanning with Google Cloud Vision OCR for quick product lookup, and a headless PDF pipeline for CRM‑style invoices (Puppeteer/@sparticuz/chromium, QR + Code128 barcode generation). The project also focuses on deployment reliability, asset optimization, and operational tooling (Typesense setup, DB migrations, and runtime compatibility fixes).",
    image: "/projects/sutygon-crm/hero.jpg",
    gallery: [
      "/projects/sutygon-crm/gallery-1.jpg",
      "/projects/sutygon-crm/gallery-2.jpg",
      "/projects/sutygon-crm/gallery-3.jpg",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "TailwindCSS",
      "Headless UI",
      "Typesense",
      "Elasticsearch",
      "puppeteer-core",
      "@sparticuz/chromium",
      "Google Cloud Vision",
      "qrcode",
      "bwip-js (Code128)",
      "Zod",
      "react-hook-form",
      "Node.js",
    ],
    features: [
      "Multi-step order creation and rental workflows",
      "Responsive, accessible UI components for desktop & mobile",
      "Client/server validation with Zod and structured forms",
      "Phone-indexed customer persistence and session management",
      "Scalable RESTful API routes for customers, orders, inventory, OCR, and PDF generation",
      "Mobile camera scanner UI (ScanUI) with Google Cloud Vision OCR",
      "Typesense-based product search and DB fallback logic",
      "Headless PDF invoicing with dynamic HTML/CSS templates, QR and Code128 barcodes",
      "Payment history persistence and QR/cash/refund flows",
      "AES‑256‑CBC encryption for sensitive fields and migration tooling",
      "Deployment and runtime fixes for reliable builds (Edge → Node runtime adjustments)",
    ],
    challenges: [
      "Providing accurate and fast product lookup across UI (Typesense) and authoritative DB",
      "Delivering reliable headless PDF generation across environments (Vercel / local servers)",
      "Enabling mobile camera access (HTTPS) and consistent OCR quality",
      "Securing sensitive customer and payment fields while keeping them searchable where needed",
      "Resolving build/runtime incompatibilities (Node built-ins vs Edge runtime)",
    ],
    solutions: [
      "Added robust Typesense sync with DB fallbacks and normalization for sizes/on-hand values",
      "Built a Vercel‑friendly headless Chromium pipeline and local fallbacks for PDF generation",
      "Replaced client OCR with a camera UI + server OCR using Google Cloud Vision for accuracy",
      "Implemented AES‑256‑CBC encryption helpers and migration scripts; kept encryption keys in env config",
      "Moved crypto-dependent API routes to Node runtime and fixed build/runtime issues",
    ],
    results: [
      "Reliable, production-ready invoice generation with QR + barcode support",
      "Faster and more accurate product lookup via camera OCR + Typesense",
      "Improved deployment stability by addressing runtime/build incompatibilities",
      "Secure handling of sensitive data with encryption and migration tooling",
      "Streamlined invoice printing/download workflows and improved UX for order creation",
    ],
    timeline: "2023–2025",
    role: "Full‑stack Developer",
    teamSize: "Small cross-functional team (3–6)",
    category: "SaaS / CRM",
    color: "from-green-400 to-emerald-500",
    liveUrl: "#",
    githubUrl: "#",
    status: "in-progress",
    year: "2023–2025",
    client: "Sutygon (internal / product)",
    order: 4,
  },
  {
    id: "2",
    slug: "visualennode-archviz-studio",
    title: "Visual Ennode — Architectural Visualization Studio",
    shortDescription:
      "High-end architectural visualization studio producing photorealistic renderings, animations and cinematic 3D content for real-estate marketing and design workflows.",
    fullDescription:
      "Visual Ennode is a creative studio specializing in architectural visualization (archviz), offering still images, cinematic animations, 3D renderings and VFX for real estate and design clients. The studio’s website presents a polished, interactive portfolio and corporate presence likely built using a modern web stack. Key site features appear to include a responsive, animated frontend with rich image galleries, multilingual (English & other) support, a works / portfolio slider, news/blog functionality, and contact/career pages. The site performance seems optimized for high-quality imagery and smooth user experience. Visual Ennode handles complex asset presentation (high-res renders, galleries, project showcases) while facilitating global operations through multiple-language and multi-office information (US, Korea, Vietnam) — making the site as much a marketing & brand tool as a showcase of their 3D work.",
    image: "/projects/visualennode/hero.jpg",
    gallery: [
      "/projects/visualennode/gallery-1.jpg",
      "/projects/visualennode/gallery-2.jpg",
      "/projects/visualennode/gallery-3.jpg",
      "/projects/visualennode/gallery-4.jpg",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
      "Image Optimization",
      "Server-Side Rendering / Static Rendering",
    ],
    features: [
      "Responsive, animated and interactive UI for portfolio browsing",
      "Multilingual support and global offices information",
      "High-resolution asset galleries for architectural visualizations",
      "News / blog section for updates and articles",
      "Contact and career forms/pages for client & talent engagement",
      "Optimized asset delivery and layout for performance and user experience",
    ],
    challenges: [
      "Delivering high-resolution visual content while maintaining site load performance",
      "Ensuring smooth animations and responsive design across devices",
      "Managing multilingual content and multiple office locations globally",
      "Balancing heavy imagery with usability and fast navigation",
      "Providing a cohesive brand & portfolio presentation across different service types (still, cinematic, VFX)",
    ],
    solutions: [
      "Used modern frontend stack with static/server-side rendering to optimize load and SEO",
      "Implemented responsive & adaptive design for desktop and mobile galleries",
      "Organized site structure into modular sections (Works, Services, News, Contact) for clear navigation",
      "Optimized imagery and employed lazy-loading or efficient asset delivery for performance",
      "Maintained global office & contact info to support international clients and applications",
    ],
    results: [
      "Polished, production-ready web presence that showcases high-end 3D visualizations effectively",
      "Smooth UX for visitors browsing large galleries and complex 3D render works",
      "Better brand representation across markets (US, Korea, Vietnam) and client reach",
      "Efficient loading and navigation despite heavy visual content",
      "Professional platform for both client acquisition and recruitment",
    ],
    timeline: "–2025",
    role: "",
    teamSize: "",
    category: "Creative / Studio Showcase",
    color: "from-blue-500 to-indigo-600",
    liveUrl: "https://visualennode.com/en",
    githubUrl: "",
    status: "completed",
    year: "",
    client: "Visual Ennode (company website)",
    order: 2,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export type ProjectSort = "default" | "order" | "year-desc" | "year-asc";

export const getFeaturedProjects = (
  limit: number = 6,
  sortBy: ProjectSort = "default"
): Project[] => {
  let list = [...projects];

  // If there is at least one explicit `order` field and sortBy is 'order' or 'default', sort by it
  const hasOrder = list.some((p) => typeof p.order === "number");
  if ((sortBy === "order" || sortBy === "default") && hasOrder) {
    list.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } else if (sortBy === "year-desc") {
    list.sort((a, b) => {
      const ay = parseInt((a.year || "").slice(-4)) || 0;
      const by = parseInt((b.year || "").slice(-4)) || 0;
      return by - ay;
    });
  } else if (sortBy === "year-asc") {
    list.sort((a, b) => {
      const ay = parseInt((a.year || "").slice(-4)) || 0;
      const by = parseInt((b.year || "").slice(-4)) || 0;
      return ay - by;
    });
  }

  return list.slice(0, limit);
};
