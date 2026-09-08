export interface SiteMetric {
  value: string;
  label: string;
  description: string;
  estimated?: boolean;
}

export interface PortfolioStat {
  value: string;
  label: string;
}

export const portfolioStats: PortfolioStat[] = [
  { value: "15", label: "Shipped Projects" },
  { value: "13", label: "Live Projects" },
  { value: "7", label: "eVisa Platforms" },
];

export const siteMetrics: SiteMetric[] = [
  {
    value: "13",
    label: "Live Projects",
    description: "Case-study projects with a public production experience.",
  },
  {
    value: "7",
    label: "eVisa Platforms",
    description: "Full-stack visa systems with payments, admin tools, and application workflows.",
  },
  {
    value: "3",
    label: "Venue Installations",
    description: "Lighting control systems built for restaurant and resort venues.",
  },
  {
    value: "2",
    label: "Ops / CRM Builds",
    description: "Order, inventory, and invoicing systems for rental and retail workflows.",
  },
];

export const clientDeliverables = [
  {
    title: "Production-Ready Systems",
    description:
      "Deployed platforms with real users — payment flows, admin dashboards, and day-to-day operations.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "Architecture, frontend, backend, integrations, and deployment handled by one engineer.",
  },
  {
    title: "Business-First Engineering",
    description:
      "Technical decisions tied to reliability, clarity, and what the product actually needs to do.",
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates, documented decisions, and no surprises at launch.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Systems structured to grow with the product — not throwaway MVPs.",
  },
  {
    title: "Direct Collaboration",
    description:
      "Work directly with me — no agency layers or handoffs between teams.",
  },
];

export const BOOK_CALL_URL = "#contact";
export const CALENDLY_PLACEHOLDER = "https://calendly.com/your-link";
