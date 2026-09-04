import { ProjectItem } from "@/types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "mind-games",
    category: "MIND GAMES FRAGRANCES",
    statVal: "90%+",
    statLabel: "Increase in Engagement Rate",
    title: "High-Performance E-Commerce & Luxury Brand Architecture",
    desc: "Engineered a headless Next.js digital experience with sub-300ms checkout, custom 3D product visualizers, and exponential conversion growth.",
    image: "/images/ecommerce.jpg",
    link: "/work",
    techStack: ["Next.js 15", "Shopify Storefront API", "Three.js", "Tailwind CSS"]
  },
  {
    id: "real-estate-crm",
    category: "REAL ESTATE WHOLESALING",
    statVal: "3.4x",
    statLabel: "Lead Conversion Multiplier",
    title: "Custom CRM & Automated Deal Pipeline Portal",
    desc: "Replaced 12 fragmented spreadsheets with a unified Next.js CRM featuring automated SMS outreach, live property valuation, and role-based permissions.",
    image: "/images/web_app.webp",
    link: "/work",
    techStack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Twilio API"]
  },
  {
    id: "ai-automation",
    category: "AI & AUTONOMOUS AGENTS",
    statVal: "-30hrs/wk",
    statLabel: "Manual Workload Reduction",
    title: "24/7 Autonomous Customer & Lead Qualification Agents",
    desc: "Built custom GPT-4o & Claude 3.5 integrations with RAG knowledge search, handling customer inquiries and qualifying leads automatically.",
    image: "/images/ai_automation.webp",
    link: "/work",
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Pinecone Vector DB", "LangChain"]
  },
  {
    id: "saas-platform",
    category: "ENTERPRISE B2B SOFTWARE",
    statVal: "99.99%",
    statLabel: "SLA Edge Server Uptime",
    title: "Global Scalable SaaS Application & Analytics Studio",
    desc: "Designed and engineered full-stack React and PostgreSQL infrastructure handling over 100,000 requests per second at sub-50ms global edge latency.",
    image: "/images/web_dev.jpg",
    link: "/work",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Vercel Edge Network"]
  }
];
