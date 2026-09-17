export interface ProjectMetric {
  value: string;
  label: string;
  estimated?: boolean;
}

export interface ProjectArchitecture {
  overview: string;
  components: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  businessImpact: string;
  keyMetric: ProjectMetric;
  isProduction: boolean;
  architecture: ProjectArchitecture;
  technicalImplementation: string[];
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
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "tanzania-evisa",
    slug: "tanzania-evisa",
    title: "Tanzania eVisa Application Platform",
    shortDescription:
      "A production visa-assistance platform that combines eligibility guidance, a four-stage application flow, transparent fees, payments, and applicant accounts.",
    fullDescription:
      "Tanzania eVisa turns a document-heavy travel process into a guided digital journey. The public site explains requirements and fees, while the application area carries travelers from visa selection through passenger details, payment, document upload, and status follow-up. Content, account, and support surfaces live in the same product so applicants do not have to switch between disconnected tools.",
    problem:
      "Visa requirements change by nationality, trip type, and port of entry. The product needed to make those rules understandable without hiding price information, while also collecting sensitive traveler data through a reliable multi-step flow.",
    businessImpact:
      "Shipped a live application and support platform around one coherent traveler journey.",
    keyMetric: { value: "Live", label: "production platform" },
    isProduction: true,
    architecture: {
      overview:
        "A Next.js application with public guidance and SEO routes, authenticated applicant areas, a Prisma-backed data layer, Stripe checkout, and email/realtime integrations for application communication.",
      components: [
        "Nationality and visa requirement guidance",
        "Four-stage application and document workflow",
        "Applicant account and application tracking",
        "Pricing, processing, FAQ, and editorial content",
        "Payment, email, and realtime notification integrations",
      ],
    },
    technicalImplementation: [
      "Structured the application as explicit contact, passenger, payment, and document stages",
      "Connected application records to Prisma and PostgreSQL-backed workflows",
      "Integrated Stripe for online checkout and Resend/Pusher for communication flows",
      "Built indexable requirement, fee, FAQ, embassy, and article routes with Next.js",
      "Added account, login, recovery, dashboard, and application-status surfaces",
    ],
    image: "/projects/tanzania-evisa/hero.png",
    gallery: [
      "/projects/tanzania-evisa/gallery-1.png",
      "/projects/tanzania-evisa/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Pusher"],
    features: [
      "Visa-type and nationality guidance",
      "Multi-passenger application workflow",
      "Secure payment and document collection",
      "Applicant accounts and status tracking",
      "Transparent fee and processing pages",
      "Structured FAQ, embassy, and travel content",
    ],
    challenges: [
      "Presenting conditional visa rules without overwhelming applicants",
      "Keeping a long form understandable across several stages",
      "Separating government information from private assistance clearly",
      "Supporting both conversion pages and a large body of search content",
    ],
    solutions: [
      "Used progressive disclosure and a persistent step indicator",
      "Separated requirements, fees, and processing guidance into focused routes",
      "Kept price and service explanations visible before checkout",
      "Reused one application model across account, payment, document, and status views",
    ],
    results: [
      "Public production site available at tanzaniaimmigration.com",
      "End-to-end application flow covering contact details through documents",
      "Applicant account and application-management surfaces",
      "Dedicated requirement, pricing, processing, and support content",
      "Responsive interfaces for both research and application tasks",
    ],
    timeline: "2025–2026",
    role: "Full-Stack Engineer",
    teamSize: "Product team",
    category: "Full Stack",
    color: "from-blue-500 to-cyan-500",
    liveUrl: "https://www.tanzaniaimmigration.com",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "Tanzania eVisa Assistance",
    order: 2,
  },
  {
    id: "indonesia-evisa",
    slug: "indonesia-evisa",
    title: "Indonesia eVisa Travel Platform",
    shortDescription:
      "A traveler-facing eVisa platform with eligibility checks, multi-step applications, itemised pricing, accounts, and destination content.",
    fullDescription:
      "Indonesia eVisa brings travel research and application execution into one responsive platform. Travelers can review requirements, understand the fee model, complete a guided application, manage an account, and follow related processing guidance without losing context between pages. The visual system was tailored to Indonesia while the underlying product handles the operational concerns of a full visa workflow.",
    problem:
      "Applicants needed a clearer route from initial eligibility research to a completed application. The system also had to support nationality-specific content, payment, document handling, and post-submission account access.",
    businessImpact:
      "Combined discovery, application, payment, and follow-up in a live customer platform.",
    keyMetric: { value: "4", label: "guided application stages" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js serves public travel and visa content alongside authenticated application routes. Prisma and PostgreSQL support application data, Stripe handles checkout, and supporting services cover email and realtime updates.",
      components: [
        "Eligibility and requirement experience",
        "Contact, passenger, payment, and document workflow",
        "Fee and processing information",
        "Applicant authentication and dashboard",
        "FAQ, embassy, legal, and editorial route system",
      ],
    },
    technicalImplementation: [
      "Built a responsive application shell with visible progress and order context",
      "Modelled applicant, passenger, payment, and document data through Prisma",
      "Integrated Stripe checkout with server-side application routes",
      "Connected transactional email and realtime messaging dependencies",
      "Generated structured public routes for FAQs, articles, and country guidance",
    ],
    image: "/projects/indonesia-evisa/hero.png",
    gallery: [
      "/projects/indonesia-evisa/gallery-1.png",
      "/projects/indonesia-evisa/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Pusher"],
    features: [
      "Eligibility and visa requirement checks",
      "Four-stage online application",
      "Multi-traveler and document handling",
      "Itemised fee presentation",
      "Account, dashboard, and application tracking",
      "Search-oriented FAQ and travel content",
    ],
    challenges: [
      "Translating nationality-dependent rules into a simple first step",
      "Keeping fee information clear across research and checkout",
      "Designing one experience for public visitors and returning applicants",
      "Maintaining consistent content across many route types",
    ],
    solutions: [
      "Separated research, application, and account tasks into clear navigation paths",
      "Displayed progress, order summary, and support context alongside the form",
      "Used reusable content and policy structures for requirement pages",
      "Kept private-service disclaimers visible on decision-heavy screens",
    ],
    results: [
      "Live production experience at indonesiaimmigration.com",
      "Unified application and applicant account journeys",
      "Dedicated pricing, processing, requirement, and support pages",
      "Reusable country and editorial content architecture",
      "Responsive UI across the public and form experiences",
    ],
    timeline: "2025–2026",
    role: "Full-Stack Engineer",
    teamSize: "Product team",
    category: "Full Stack",
    color: "from-rose-500 to-red-500",
    liveUrl: "https://indonesiaimmigration.com",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "Indonesia eVisa Assistance",
    order: 4,
  },
  {
    id: "vietnam-evisa",
    slug: "vietnam-evisa",
    title: "Vietnam eVisa Application Platform",
    shortDescription:
      "A production Vietnam visa-assistance product with guided applications, arrival-airport logic, transparent pricing, tracking, and support content.",
    fullDescription:
      "Vietnam eVisa was designed around the practical questions travelers ask before they apply: whether they need a visa, what it costs, where they can enter, which documents are required, and how they can track the result. The platform connects those research paths to a structured application and account experience, with a quieter visual language that keeps dense information readable.",
    problem:
      "The product had to explain changing entry requirements and fees while collecting enough trip and traveler detail to prepare an application. Arrival location, visa type, timing, and account follow-up all needed to remain connected.",
    businessImpact:
      "Delivered one production workflow from requirement research to application follow-up.",
    keyMetric: { value: "Live", label: "application and tracking" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js App Router combines public SEO pages, an application workflow, authenticated applicant screens, and server endpoints. Prisma/PostgreSQL, Stripe, Resend, and Pusher support persistence, payments, email, and realtime updates.",
      components: [
        "Visa requirement and nationality content",
        "Application form with arrival-airport selection",
        "Fee calculation and processing guidance",
        "Authentication, applications, and dashboard",
        "FAQ, troubleshooting, and editorial content",
      ],
    },
    technicalImplementation: [
      "Implemented visa-type, travel-date, passenger, and arrival-airport inputs",
      "Connected the application lifecycle to Prisma-backed records",
      "Integrated Stripe, transactional email, and realtime update tooling",
      "Built reusable SEO metadata and sitemap infrastructure for public routes",
      "Added focused troubleshooting and applicant-support experiences",
    ],
    image: "/projects/vietnam-evisa/hero.png",
    gallery: [
      "/projects/vietnam-evisa/gallery-1.png",
      "/projects/vietnam-evisa/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Pusher"],
    features: [
      "Nationality and requirement checker",
      "Visa, date, airport, and passenger selection",
      "Transparent government and service-fee presentation",
      "Applicant login, dashboard, and status tracking",
      "Document and payment workflow",
      "FAQ, processing, embassy, and troubleshooting content",
    ],
    challenges: [
      "Making entry-point rules legible inside the application flow",
      "Keeping public fee information aligned with checkout context",
      "Supporting both first-time and returning applicants",
      "Balancing conversion needs with careful policy language",
    ],
    solutions: [
      "Placed trip-specific fields early enough to shape the remaining form",
      "Separated fee categories and linked pricing back to the application",
      "Created clear paths to tracking, document upload, and account recovery",
      "Used a shared visual and content system across public and authenticated pages",
    ],
    results: [
      "Live application platform at vietnamemigration.com",
      "Connected research, fee, application, and account journeys",
      "Arrival-airport selection included in the current production flow",
      "Dedicated troubleshooting and application-support content",
      "Responsive experience across desktop and mobile",
    ],
    timeline: "2026",
    role: "Full-Stack Engineer",
    teamSize: "Product team",
    category: "Full Stack",
    color: "from-emerald-500 to-teal-500",
    liveUrl: "https://vietnamemigration.com",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "Vietnam eVisa Assistance",
    order: 6,
  },
  {
    id: "sri-lanka-evisa",
    slug: "sri-lanka-evisa",
    title: "Sri Lanka eVisa Application Platform",
    shortDescription:
      "A country-specific eVisa product with guided applications, document handling, pricing, nationality pages, accounts, and operational support flows.",
    fullDescription:
      "Sri Lanka eVisa adapts a complex application system to a distinct destination, product set, and content structure. It guides visitors from requirement and cost research into a four-stage application, then supports payment, documents, account access, and application updates. The interface uses a destination-led editorial style while preserving a practical, form-first workflow.",
    problem:
      "Tourist, business, and transit applicants need different context, yet the underlying workflow must stay consistent. Pricing, nationality availability, documents, and authority-dependent timing also have to be explained without implying guarantees.",
    businessImpact:
      "Shipped a destination-specific application platform with aligned product and fee flows.",
    keyMetric: { value: "3", label: "visa product paths" },
    isProduction: true,
    architecture: {
      overview:
        "A Next.js full-stack application with public requirement and cost routes, multi-stage forms, authenticated applicant areas, Prisma/PostgreSQL persistence, and Stripe plus communication integrations.",
      components: [
        "Tourist, business, and transit product presentation",
        "Requirement and country-cost route system",
        "Four-stage applicant workflow",
        "Account, dashboard, and application records",
        "Knowledge base, FAQ, and travel content",
      ],
    },
    technicalImplementation: [
      "Mapped product choice into the shared contact, passenger, payment, and document stages",
      "Implemented country and cost routes around the available visa data",
      "Connected persistence through Prisma with PostgreSQL",
      "Integrated Stripe checkout and transactional communication tooling",
      "Built structured content routes for processing, FAQs, travel guides, and support",
    ],
    image: "/projects/sri-lanka-evisa/hero.png",
    gallery: [
      "/projects/sri-lanka-evisa/gallery-1.png",
      "/projects/sri-lanka-evisa/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Pusher"],
    features: [
      "Tourist, business, and transit application paths",
      "Nationality and requirement guidance",
      "Multi-stage form and document workflow",
      "Government and service-fee separation",
      "Applicant accounts and status views",
      "Knowledge base, FAQ, processing, and travel content",
    ],
    challenges: [
      "Keeping several visa products understandable within one system",
      "Aligning public pricing with product data and checkout",
      "Explaining authority-dependent timing without guarantees",
      "Adapting a shared workflow to a distinct country identity",
    ],
    solutions: [
      "Used product-specific copy within a consistent application structure",
      "Presented fee categories separately before the application decision",
      "Added contextual guidance beside high-friction form sections",
      "Built reusable country, cost, and support content routes",
    ],
    results: [
      "Live platform at srilanka-immigration.com",
      "Tourist, business, and transit products represented in the public UI",
      "End-to-end applicant workflow with accounts and documents",
      "Dedicated requirement, fee, processing, and knowledge content",
      "Responsive country-specific visual system",
    ],
    timeline: "2025–2026",
    role: "Full-Stack Engineer",
    teamSize: "Product team",
    category: "Full Stack",
    color: "from-amber-500 to-rose-700",
    liveUrl: "https://www.srilanka-immigration.com",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "Sri Lanka eVisa Assistance",
    order: 7,
  },
  {
    id: "india-evisa",
    slug: "india-evisa",
    title: "India eVisa Application Platform",
    shortDescription:
      "A full-stack India eVisa product combining a nationality research tool, guided applications, payment, documents, accounts, and destination content.",
    fullDescription:
      "India eVisa supports both early-stage research and the operational application journey. A nationality-led requirement finder helps travelers understand category availability, common documents, and fee context before they enter the form. From there, the product manages visa selection, travel dates, port details, passengers, payment, documents, and later account access.",
    problem:
      "India offers multiple travel purposes and entry contexts, which makes an undifferentiated application form difficult to trust. The platform needed to reveal the right information progressively and keep official decision-making boundaries explicit.",
    businessImpact:
      "Connected nationality research to a complete online applicant workflow in production.",
    keyMetric: { value: "Live", label: "research-to-application journey" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js powers nationality-specific research, content, applications, and accounts. Prisma/PostgreSQL provide persistence, Stripe handles payments, and communication integrations support the applicant lifecycle.",
      components: [
        "Nationality-based India visa requirement finder",
        "Visa, date, port, passenger, and document workflow",
        "Fee and processing information",
        "Applicant authentication and applications area",
        "FAQ, travel guide, embassy, and legal content",
      ],
    },
    technicalImplementation: [
      "Built dynamic nationality routes for requirement research",
      "Structured application inputs around visa type, dates, ports, and passengers",
      "Used Prisma and PostgreSQL for application-domain persistence",
      "Integrated Stripe, Resend, and Pusher into the product stack",
      "Combined static and dynamic content routes with reusable metadata patterns",
    ],
    image: "/projects/india-evisa/hero.png",
    gallery: [
      "/projects/india-evisa/gallery-1.png",
      "/projects/india-evisa/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Resend", "Pusher"],
    features: [
      "Nationality-led requirement research",
      "Visa-type, travel-date, and port selection",
      "Multi-passenger application and document handling",
      "Pricing and processing guidance",
      "Accounts, dashboard, and application history",
      "FAQ, embassy, travel, and legal content",
    ],
    challenges: [
      "Explaining multiple visa purposes without front-loading every rule",
      "Connecting research pages to the correct application context",
      "Collecting detailed trip data while preserving form clarity",
      "Maintaining clear private-service and authority boundaries",
    ],
    solutions: [
      "Started the research journey with passport nationality",
      "Used progressive form stages and contextual side panels",
      "Separated requirements and fee information into focused surfaces",
      "Kept application, account, and support routes within one design system",
    ],
    results: [
      "Live public product at india-immigration.com",
      "Nationality finder connected to application research",
      "Structured online application with port and document inputs",
      "Applicant authentication and application-management screens",
      "Responsive content and form experience",
    ],
    timeline: "2025–2026",
    role: "Full-Stack Engineer",
    teamSize: "Product team",
    category: "Full Stack",
    color: "from-orange-500 to-blue-700",
    liveUrl: "https://india-immigration.com",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "India eVisa Assistance",
    order: 8,
  },
  {
    id: "uno-tech",
    slug: "uno-tech",
    title: "UNO Tech Digital Platform",
    shortDescription:
      "A bilingual digital-agency platform with service pages, case studies, editorial content, lead capture, admin tools, and an AI visibility checker.",
    fullDescription:
      "UNO Tech is more than a marketing website: it is a bilingual publishing and lead-generation platform for a digital services team. Visitors can explore service lines and case studies, read editorial content, book a consultation, or run an AI visibility check. Behind the public experience, authenticated tools support content, media, users, categories, settings, and incoming leads.",
    problem:
      "The business needed one fast, expressive website for two languages and several service lines, while the internal team needed enough publishing and lead-management control to keep the site useful after launch.",
    businessImpact:
      "Unified agency positioning, content publishing, lead capture, and interactive tooling.",
    keyMetric: { value: "2", label: "fully routed languages" },
    isProduction: true,
    architecture: {
      overview:
        "A React Router application with server rendering, a Vite build, bilingual routing, animation and state-management layers, plus authenticated admin pages for content and lead operations.",
      components: [
        "Vietnamese and English public route systems",
        "Service and case-study presentation",
        "Blog and rich-text publishing workflow",
        "Appointment, contact, and lead capture",
        "AI visibility audit interface and API route",
        "Admin dashboard for content, media, users, and settings",
      ],
    },
    technicalImplementation: [
      "Built language-aware routes with React Router and i18next",
      "Used Vite, Tailwind CSS, and Framer Motion for the responsive visual system",
      "Created reusable service, case-study, blog, and conversion components",
      "Added TipTap-based content editing and authenticated admin screens",
      "Implemented an AI visibility audit endpoint and user-facing checker",
    ],
    image: "/projects/uno-tech/hero.png",
    gallery: [
      "/projects/uno-tech/gallery-1.png",
      "/projects/uno-tech/gallery-2.png",
    ],
    technologies: ["React Router", "React", "TypeScript", "Vite", "Tailwind CSS", "i18next", "Framer Motion", "TipTap"],
    features: [
      "Complete Vietnamese and English navigation",
      "Service detail and case-study sections",
      "Blog, categories, and rich-text publishing",
      "Contact and consultation booking flows",
      "AI visibility audit tool",
      "Admin management for leads, media, users, and settings",
    ],
    challenges: [
      "Keeping two language trees consistent as the site grew",
      "Balancing expressive motion with content readability",
      "Supporting both brand storytelling and practical lead generation",
      "Giving non-developers control over editorial content",
    ],
    solutions: [
      "Centralized language-aware route and content patterns",
      "Used progressive loading for non-critical motion and media",
      "Created repeatable templates for services, cases, and articles",
      "Connected public conversion paths to focused admin workflows",
    ],
    results: [
      "Production bilingual site at unotech.vn",
      "Service, case-study, blog, careers, FAQ, and contact experiences",
      "Working AI visibility checker surface",
      "Authenticated content and lead-management routes",
      "Responsive brand system across public pages",
    ],
    timeline: "2025–2026",
    role: "Full-Stack Engineer",
    teamSize: "UNO Tech team",
    category: "Full Stack",
    color: "from-blue-600 to-cyan-400",
    liveUrl: "https://unotech.vn/vi",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "UNO Tech",
    order: 3,
  },
  {
    id: "booking-pr",
    slug: "booking-pr",
    title: "BookingPR Media Marketplace",
    shortDescription:
      "A live PR marketplace with a searchable media catalogue, automated quotation workflow, CMS-managed content, lead capture, and admin operations.",
    fullDescription:
      "BookingPR helps businesses research press-placement options and turn a large catalogue into an actionable quotation. Visitors can filter media products, compare placement details, build a selection, and contact the team; operational routes support products, quotations, leads, and settings. The frontend is built in Next.js and connects to a headless WordPress/PHP content and data layer.",
    problem:
      "A large and frequently changing media catalogue is difficult to navigate through static pages or spreadsheets. The platform needed searchable pricing, a quotation path, editable content, and internal tools without forcing visitors into a manual back-and-forth for every request.",
    businessImpact:
      "Turned a large PR catalogue into a searchable, quotation-ready customer workflow.",
    keyMetric: { value: "Live", label: "catalogue and quotation platform" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js renders the marketplace and admin UI while route handlers proxy a headless WordPress/PHP backend. Supporting integrations cover quotation files, transactional email, forms, and abuse protection.",
      components: [
        "Searchable and filterable media catalogue",
        "Selection and quotation workflow",
        "Headless WordPress content delivery",
        "Admin product, quotation, contact, and settings screens",
        "Email, spreadsheet, and form-security integrations",
      ],
    },
    technicalImplementation: [
      "Built catalogue filters around media outlet, category, placement, and budget",
      "Connected dynamic public pages to WordPress/PHP and GraphQL endpoints",
      "Implemented quotation export and client-side file workflows with ExcelJS",
      "Integrated Brevo for email and Turnstile for public form protection",
      "Created focused admin routes for products, quotations, contacts, and settings",
    ],
    image: "/projects/booking-pr/hero.png",
    gallery: [
      "/projects/booking-pr/gallery-1.png",
      "/projects/booking-pr/gallery-2.png",
    ],
    technologies: ["Next.js", "React", "TypeScript", "WordPress", "PHP", "GraphQL", "ExcelJS", "Brevo"],
    features: [
      "Media catalogue search and multi-facet filtering",
      "Pricing and placement detail presentation",
      "Quotation selection and export workflow",
      "CMS-managed public and editorial pages",
      "Contact and lead capture",
      "Admin product, quotation, contact, and settings tools",
    ],
    challenges: [
      "Making a large catalogue scannable without hiding important detail",
      "Keeping frontend interactions aligned with CMS and PHP data",
      "Turning selected placements into a usable quotation",
      "Supporting editorial pages and operational tools in one product",
    ],
    solutions: [
      "Used visible facets and a table-like product layout for comparison",
      "Created Next.js proxy routes around backend integrations",
      "Added structured quotation and spreadsheet-generation workflows",
      "Separated public discovery pages from authenticated operations routes",
    ],
    results: [
      "Live marketplace at bookingpr.vn",
      "Searchable catalogue with pricing and placement filters",
      "Quotation-focused workflow connected to operational tooling",
      "Editable public content through a headless CMS",
      "Responsive customer and admin interfaces",
    ],
    timeline: "2026",
    role: "Full-Stack Engineer",
    teamSize: "UNO Media team",
    category: "Full Stack",
    color: "from-teal-500 to-cyan-500",
    liveUrl: "https://bookingpr.vn",
    githubUrl: "#",
    status: "completed",
    year: "2026",
    client: "BookingPR",
    order: 5,
  },
  {
    id: "0",
    slug: "united-evisa",
    title: "United eVisa Platform",
    shortDescription:
      "Full-stack eVisa application platform for global travelers — multi-destination visa workflows, transparent pricing, and secure checkout.",
    problem:
      "Travelers applying for visas across multiple destinations face confusing requirements, opaque pricing, and slow support. The product needed a scalable platform for eligibility checks, multi-traveler applications, and status tracking.",
    businessImpact:
      "Production eVisa platform with multi-destination flows, transparent pricing, and secure checkout.",
    keyMetric: { value: "Live", label: "production platform" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js frontend with destination-specific routing, dynamic visa requirement engine, secure payment checkout, and admin tooling. Built for multi-destination scale with SEO-optimized destination pages and a unified application flow.",
      components: [
        "Multi-destination visa requirement checker",
        "Secure multi-step application flow with traveler groups",
        "Transparent pricing with government + service fee breakdown",
        "Destination-specific SEO landing pages",
        "Document upload and review pipeline",
        "24/7 support integration (chat, email, phone)",
        "Admin dashboard for application lifecycle management",
      ],
    },
    technicalImplementation: [
      "Built destination-indexed routing for SEO and eligibility pages",
      "Implemented dynamic visa requirement engine by nationality + destination",
      "Integrated secure encrypted checkout with transparent fee display",
      "Created multi-traveler application flow with document upload",
      "Deployed FAQ and pricing systems with searchable content",
      "Optimized for Core Web Vitals and multi-language support",
    ],
    fullDescription:
      "United eVisa is a production eVisa application platform that helps travelers apply for visas across popular destinations worldwide. The platform features a modern workflow — eligibility checks, transparent pricing, secure checkout, and real-time application updates — with 24/7 multilingual support. Built as a scalable full-stack system handling complex per-destination visa rules and multi-applicant flows.",
    image: "/projects/united-evisa/hero.jpg",
    gallery: [
      "/projects/united-evisa/gallery-1.jpg",
      "/projects/united-evisa/gallery-2.jpg",
      "/projects/united-evisa/gallery-3.jpg",
      "/projects/united-evisa/gallery-4.jpg",
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
      "Multi-destination visa eligibility checker",
      "Transparent pricing with government + service fees",
      "Secure multi-traveler application flow",
      "Destination-specific SEO landing pages",
      "Document upload and review system",
      "Real-time application status updates",
      "FAQ and searchable visa requirement index",
      "24/7 multilingual customer support integration",
      "Admin dashboard for application management",
      "Responsive design optimized for conversion",
    ],
    challenges: [
      "Scaling visa requirement data across dozens of destinations",
      "Building SEO-optimized destination pages at scale",
      "Handling multi-traveler applications with varying document requirements",
      "Displaying transparent pricing with variable government fees",
      "Ensuring secure payment processing across currencies",
      "Creating intuitive UX for a complex multi-step process",
    ],
    solutions: [
      "Built destination-indexed content system with reusable visa rule templates",
      "Implemented SSR/SSG for SEO-critical eligibility and pricing pages",
      "Created flexible multi-applicant form with conditional document fields",
      "Designed clear fee breakdown UI separating government and service charges",
      "Used Stripe for PCI-compliant encrypted checkout",
      "Applied progressive disclosure and step indicators for conversion UX",
    ],
    results: [
      "Production platform live at unitedevisa.com",
      "Multi-destination eligibility and pricing pages",
      "Multi-traveler application flow with document upload",
      "Transparent government + service fee breakdown at checkout",
      "Admin tooling for application review and status updates",
      "SEO-focused destination and requirements content",
    ],
    timeline: "2025 - Present",
    role: "Full Stack Developer",
    teamSize: "Small team",
    category: "Full Stack",
    color: "from-sky-400 to-blue-400",
    liveUrl: "https://unitedevisa.com",
    githubUrl: "#",
    status: "completed",
    year: "2025",
    client: "United eVisa",
    order: 1,
    featured: true,
  },
  {
    id: "1",
    slug: "worldmaxxing-evisa-platform",
    title: "WorldMaxxing eVisa Platform",
    shortDescription:
      "A comprehensive full-stack eVisa application platform with dynamic forms, payment integration, and complex business logic for visa processing.",
    problem:
      "Travelers faced a fragmented, manual visa application process — long forms, unclear fees, and no real-time status tracking. The business needed a scalable platform to process applications across multiple countries with complex, country-specific rules.",
    businessImpact:
      "Turned a manual visa process into a guided online application with Stripe checkout.",
    keyMetric: { value: "Live", label: "production platform" },
    isProduction: true,
    architecture: {
      overview:
        "Next.js frontend with a rules-driven form engine, Node.js API layer, PostgreSQL via Prisma, and Stripe for payments. Visa rules are externalized as JSON configs so new countries ship without code changes.",
      components: [
        "Dynamic multi-step form engine with conditional field logic",
        "Visa rules engine (canonical + group visas, port-of-entry routing)",
        "Stripe checkout with real-time fee calculation",
        "Admin dashboard for application review and status management",
        "PostgreSQL + Prisma ORM with normalized visa regulation schema",
        "Document upload pipeline with validation",
      ],
    },
    technicalImplementation: [
      "Built a JSON-driven rules engine for country/nationality/visa-type combinations",
      "Implemented conditional form rendering with progressive disclosure UX",
      "Integrated Stripe Elements for PCI-compliant payment processing",
      "Designed normalized PostgreSQL schema for visa regulations and applications",
      "Created real-time fee calculation hooks with optimized API calls",
      "Deployed admin dashboard for application lifecycle management",
    ],
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
      "Stripe checkout integrated for secure payments",
      "Dynamic forms adapted to country and visa type rules",
      "Positive feedback on application UX from stakeholders",
      "Stable payment flow with no reported security incidents",
      "Deployed and maintained across multiple country configurations",
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
    order: 9,
    featured: false,
  },
  {
    id: "6",
    slug: "skira-landing-page",
    title: "SKIRA Landing Page",
    shortDescription:
      "Modern, responsive landing page built with Vite.js and enhanced with AI-generated assets for optimal user experience.",
    problem:
      "The client needed a high-converting landing page that loads fast and communicates value clearly — without the overhead of a full framework.",
    businessImpact:
      "Achieved strong Lighthouse scores on a lightweight marketing site.",
    keyMetric: { value: "95", label: "Lighthouse performance", estimated: true },
    isProduction: false,
    architecture: {
      overview:
        "Static Vite.js SPA with optimized asset pipeline, lazy-loaded images, and AI-enhanced visual assets for rapid iteration.",
      components: [
        "Vite build pipeline with code splitting",
        "Responsive CSS layout system",
        "SEO-optimized meta and structured content",
        "Progressive image loading",
      ],
    },
    technicalImplementation: [
      "Vite.js for sub-second dev feedback and optimized production bundles",
      "Lazy loading and image compression for Core Web Vitals",
      "Mobile-first responsive design with CSS animations",
      "AI-assisted asset generation for rapid design iteration",
    ],
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
      "Improved user engagement on the landing experience",
      "Positive client feedback on design quality",
      "Fast deployment and iteration cycles",
    ],
    timeline: "Academic Project - 2024",
    role: "Frontend Developer & Designer",
    teamSize: "Solo project",
    category: "Frontend",
    color: "from-purple-400 to-pink-400",
    liveUrl: "#",
    githubUrl: "#",
    status: "archived",
    year: "2024",
    order: 15,
  },
  {
    id: "7",
    slug: "lighting-control-system",
    title: "Advanced Lighting Control System",
    shortDescription:
      "Web-based lighting automation system for premium venues including Opus Restaurant and Regent Phu Quoc resort.",
    problem:
      "Premium venues relied on manual lighting setups that took hours before events and required on-site technicians — limiting flexibility and increasing operational cost.",
    businessImpact:
      "Reduced manual lighting setup time across deployed venue installations.",
    keyMetric: { value: "3", label: "venues deployed", estimated: false },
    isProduction: true,
    architecture: {
      overview:
        "Web control panel communicating with physical lighting hardware via OSC protocol over Socket.io, with preset management and real-time scene control.",
      components: [
        "Browser-based control interface",
        "OSC protocol bridge for hardware communication",
        "Socket.io real-time event layer",
        "Preset and scene management system",
        "Multi-venue configuration manager",
      ],
    },
    technicalImplementation: [
      "OSC protocol integration with error handling and reconnection logic",
      "Real-time WebSocket layer via Socket.io for live control",
      "Modular UI for different venue configurations",
      "Automated scheduling and preset scene management",
      "Monitoring and alerting for event-critical reliability",
    ],
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
      "Deployed in 3 premium venues",
      "Reliable operation during live events",
      "Reduced manual lighting setup time",
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
    order: 16,
  },
  {
    id: "4",
    slug: "3d-interactive-website",
    title: "3D Interactive Web Experience",
    shortDescription:
      "Immersive 3D web experience using Three.js and WebGL for engaging user interactions and visual storytelling.",
    problem:
      "The brand needed an immersive web presence that stands out from flat portfolio sites — demonstrating technical capability through interactive 3D storytelling.",
    businessImpact:
      "Delivered 60fps interactive 3D experience showcased at tech conferences.",
    keyMetric: { value: "60fps", label: "on mid-range devices", estimated: false },
    isProduction: false,
    architecture: {
      overview:
        "React Three Fiber frontend with custom GLSL shaders, LOD optimization, and progressive asset loading for cross-device 3D rendering.",
      components: [
        "Three.js / React Three Fiber scene graph",
        "Custom WebGL shader pipeline",
        "LOD and frustum culling optimization",
        "Progressive 3D asset loader",
        "Adaptive quality settings per device",
      ],
    },
    technicalImplementation: [
      "Custom GLSL shaders for real-time lighting effects",
      "Level-of-detail (LOD) optimization for performance",
      "Progressive loading strategy for large 3D assets",
      "Adaptive quality settings based on device GPU",
      "Physics-based animations with cross-browser fallbacks",
    ],
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
    liveUrl: "#",
    githubUrl: "#",
    status: "archived",
    year: "2023-2024",
    order: 13,
  },
  {
    id: "5",
    slug: "llm-vulnerability-detection",
    title: "LLM Vulnerability Detection System",
    shortDescription:
      "Academic project integrating Large Language Models for automated software vulnerability detection and analysis.",
    problem:
      "Manual code security reviews are slow and inconsistent — teams need automated vulnerability detection that scales across large codebases.",
    businessImpact:
      "Achieved 85% detection accuracy with 60% fewer false positives than baseline.",
    keyMetric: { value: "85%", label: "detection accuracy", estimated: true },
    isProduction: false,
    architecture: {
      overview:
        "FastAPI backend with fine-tuned LLM pipeline for code analysis, Next.js frontend for interactive reporting, and ensemble methods for accuracy.",
      components: [
        "LLM fine-tuning pipeline on vulnerability datasets",
        "FastAPI analysis service with chunking strategy",
        "Next.js interactive reporting UI",
        "Ensemble scoring for confidence levels",
        "Multi-language code preprocessor",
      ],
    },
    technicalImplementation: [
      "Fine-tuned LLM models on curated security vulnerability datasets",
      "Chunking strategies for processing 10,000+ lines per minute",
      "Ensemble methods to reduce false positive rates",
      "Explainable AI components for vulnerability reasoning",
      "Language-specific preprocessing pipelines",
    ],
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
    order: 14,
  },
  {
    id: "3",
    slug: "sutygon-order-invoicing",
    title: "SUTYGON Client — Main Webpage and Order Management",
    shortDescription:
      "Full‑stack order management and headless PDF invoicing platform for event costume rentals, built with Next.js and TypeScript.",
    problem:
      "SUTYGON's rental business ran on manual order tracking and inconsistent invoicing — staff spent hours generating PDFs that didn't match their CRM format.",
    businessImpact:
      "Automated invoice generation matching exact CRM templates with QR and barcode support.",
    keyMetric: { value: "100%", label: "invoice template match", estimated: true },
    isProduction: true,
    architecture: {
      overview:
        "Next.js App Router with Prisma + PostgreSQL, headless Chromium PDF pipeline, and Zalo API integration for messaging workflows.",
      components: [
        "Order management dashboard with OTP auth",
        "Prisma-backed customer and payment persistence",
        "Headless PDF pipeline (Puppeteer + Chromium)",
        "QR Code128 barcode generation in invoices",
        "Zalo token management and cron routes",
      ],
    },
    technicalImplementation: [
      "Headless Chromium PDF generation with CRM-matching HTML/CSS templates",
      "Phone-based OTP authentication with optional email flows",
      "Prisma schema for orders, customers, and payment histories",
      "QR and Code128 barcode embedding via bwip-js and qrcode",
      "Zalo API integration for business messaging",
    ],
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
    order: 11,
  },
  {
    id: "4",
    slug: "sutygon-crm",
    title: "Sutygon CRM — Order & Invoicing Platform",
    shortDescription:
      "Full‑stack order, inventory, and invoicing CRM for rental & point‑of‑sale workflows with mobile OCR product lookup and headless PDF invoicing.",
    problem:
      "A growing rental business needed a unified CRM — order creation, inventory lookup, mobile scanning, and invoicing were spread across disconnected tools.",
    businessImpact:
      "Unified order-to-invoice workflow with camera OCR product lookup in production.",
    keyMetric: { value: "OCR", label: "mobile product lookup", estimated: false },
    isProduction: true,
    architecture: {
      overview:
        "Next.js + Drizzle ORM + PostgreSQL with Typesense search, Google Cloud Vision OCR, AES-256 encryption, and headless PDF invoicing pipeline.",
      components: [
        "Multi-step order creation with rental workflows",
        "Typesense search with PostgreSQL fallback",
        "Mobile camera OCR via Google Cloud Vision",
        "AES-256-CBC encryption for sensitive fields",
        "Headless PDF invoicing with QR + barcode",
        "RESTful API routes on Node runtime",
      ],
    },
    technicalImplementation: [
      "Drizzle ORM with PostgreSQL for orders, inventory, and payments",
      "Typesense sync with DB fallbacks for fast product lookup",
      "Server-side OCR via Google Cloud Vision from mobile camera UI",
      "AES-256-CBC encryption helpers with migration tooling",
      "Vercel-friendly headless Chromium PDF pipeline",
    ],
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
    order: 12,
  },
  {
    id: "2",
    slug: "visualennode-archviz-studio",
    title: "Visual Ennode — Architectural Visualization Studio",
    shortDescription:
      "High-end architectural visualization studio producing photorealistic renderings, animations and cinematic 3D content for real-estate marketing and design workflows.",
    problem:
      "Visual Ennode needed a global web presence that showcases high-resolution 3D work without sacrificing load performance or brand polish.",
    businessImpact:
      "Production site serving clients across US, Korea, and Vietnam markets.",
    keyMetric: { value: "3", label: "global markets served", estimated: false },
    isProduction: true,
    architecture: {
      overview:
        "Next.js SSR/SSG site with optimized image delivery, multilingual routing, and modular portfolio sections for works, services, and news.",
      components: [
        "SSR/SSG rendering for SEO and performance",
        "High-resolution gallery with lazy loading",
        "Multilingual content routing",
        "Modular sections: Works, Services, News, Contact",
        "Global office and career pages",
      ],
    },
    technicalImplementation: [
      "Next.js static/server-side rendering for SEO and fast loads",
      "Responsive adaptive galleries with lazy-loaded imagery",
      "Multilingual support for international client reach",
      "Modular site architecture for clear navigation",
      "Asset optimization pipeline for heavy 3D render content",
    ],
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
    status: "archived",
    year: "",
    client: "Visual Ennode (company website)",
    order: 10,
  },
];

export const publicProjects = projects.filter((project) => project.status !== "archived");

export const getProjectBySlug = (slug: string): Project | undefined => {
  return publicProjects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "All") return publicProjects;
  return publicProjects.filter((project) => project.category === category);
};

export type ProjectSort = "default" | "order" | "year-desc" | "year-asc";

export const getFeaturedProjects = (
  limit: number = 6,
  sortBy: ProjectSort = "default"
): Project[] => {
  let list = [...publicProjects];

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
