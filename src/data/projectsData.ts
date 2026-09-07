export interface DetailedProjectItem {
  id: string;
  slug: string;
  badge: string;
  category: string;
  statVal: string;
  statLabel: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  techStack: string[];
  challenge: string;
  approach: string;
  solution: string;
  deliverables: string[];
  expectedOutcome: string;
}

export const PROJECTS_DATA: DetailedProjectItem[] = [
  {
    id: "mind-games",
    slug: "e-commerce-architecture",
    badge: "NovaMac Labs Prototype",
    category: "E-Commerce & Retail",
    statVal: "Sub-300ms",
    statLabel: "Target Server Response Time",
    title: "High-Performance E-Commerce & Luxury Storefront Architecture",
    shortDesc: "Custom high-speed e-commerce online store concept with instant checkout, 3D product visualizer, and modern storefront architecture.",
    fullDesc: "An engineering prototype built to demonstrate sub-300ms checkout performance, headless catalog rendering, and interactive 3D product visualizers for high-end luxury brands.",
    image: "/images/ecommerce.jpg",
    techStack: ["Next.js 15", "Shopify Storefront API", "Three.js", "Tailwind CSS"],
    challenge: "Traditional e-commerce templates suffer from heavy plugin bloat, slow mobile catalog rendering, and checkout drop-offs.",
    approach: "Decouple the frontend using Next.js 15 and Headless Shopify APIs to deliver sub-second page transitions and custom cart drawers.",
    solution: "A bespoke e-commerce architecture engineered for instant search indexing, responsive mobile checkout, and interactive 3D product previewing.",
    deliverables: [
      "Custom Next.js & React 19 Frontend Storefront",
      "Headless Shopify API Integration",
      "Interactive 3D WebGL Product Visualizer",
      "Sub-300ms Express Cart & Checkout Flow"
    ],
    expectedOutcome: "Engineered to minimize page bounce rates, accelerate mobile shopping experience, and boost overall sales conversions."
  },
  {
    id: "real-estate-crm",
    slug: "real-estate-crm",
    badge: "Internal System Prototype",
    category: "CRM & Software",
    statVal: "100%",
    statLabel: "Automated Lead Capture",
    title: "Real Estate Lead & Deal Pipeline CRM Portal",
    shortDesc: "Custom lead tracking system replacing messy spreadsheets with automated SMS follow-ups, property valuation, and deal management.",
    fullDesc: "A purpose-built internal operational CRM designed for real estate teams and wholesalers to manage incoming leads, track deal pipelines, and automate follow-up sequences.",
    image: "/images/web_app.webp",
    techStack: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Twilio API"],
    challenge: "Real estate teams waste hundreds of hours manually updating spreadsheets, resulting in lost leads and missed seller follow-ups.",
    approach: "Build a single role-based web dashboard connecting lead intake forms, property data, automated SMS triggers, and milestone boards.",
    solution: "A centralized CRM portal that captures inbound lead inquiries, automatically sends instant SMS notifications, and ranks deal priority.",
    deliverables: [
      "Role-Based Sales & Deal Pipeline Boards",
      "Automated Twilio SMS & Email Follow-up Triggers",
      "Property Comps Valuation Calculator",
      "Centralized Client & Lead Activity Logs"
    ],
    expectedOutcome: "Eliminates manual data entry, prevents lost lead opportunities, and provides management with real-time pipeline visibility."
  },
  {
    id: "ai-automation",
    slug: "ai-lead-qualification-agent",
    badge: "AI Concept Project",
    category: "AI & Automation",
    statVal: "24/7",
    statLabel: "Inquiry Processing Coverage",
    title: "24/7 Autonomous Customer & Lead Assistant",
    shortDesc: "Smart AI assistant that answers customer questions, qualifies leads, and schedules appointments automatically around the clock.",
    fullDesc: "Custom LLM orchestration system trained on internal business documentation to handle client inquiries, qualify budget fit, and schedule calls automatically.",
    image: "/images/ai_automation.webp",
    techStack: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Pinecone Vector DB", "LangChain"],
    challenge: "Inquiries sitting unaddressed overnight or during weekends often convert with competitors before sales teams can respond.",
    approach: "Implement RAG vector search over company knowledge bases and connect autonomous AI agents directly to appointment calendars.",
    solution: "An intelligent 24/7 web assistant that answers technical questions accurately, captures prospect contact details, and books calls.",
    deliverables: [
      "Custom RAG Vector Knowledge Base Search",
      "Autonomous GPT-4o & Claude 3.5 Agent Pipeline",
      "Calendar Integration & Booking Automation",
      "Safety Guardrails & Human Escalation Rules"
    ],
    expectedOutcome: "Provides instant 24/7 inquiry responses, filters out unqualified spammers, and populates sales calendars effortlessly."
  },
  {
    id: "saas-platform",
    slug: "b2b-saas-analytics",
    badge: "NovaMac Labs Prototype",
    category: "Enterprise SaaS",
    statVal: "Target 99.9%",
    statLabel: "Cloud Edge Uptime Target",
    title: "Scalable Multi-Tenant B2B Analytics & Subscription Portal",
    shortDesc: "Full-stack SaaS application prototype demonstrating multi-tenant auth, role-based security, Stripe subscription billing, and cloud analytics.",
    fullDesc: "A complete B2B SaaS architecture blueprint designed to handle high-concurrency user traffic, tenant workspace isolation, and automated recurring billing.",
    image: "/images/web_dev.jpg",
    techStack: ["React 19", "Node.js", "PostgreSQL", "Stripe API", "Global Edge CDN"],
    challenge: "Building SaaS products on unscalable codebases forces expensive structural rewrites once customer user volume grows.",
    approach: "Architect a modular full-stack codebase with decoupled micro-services, Prisma ORM, and Stripe webhooks from day one.",
    solution: "A production-grade SaaS portal foundation featuring multi-tenant workspace isolation, subscription management, and user permissions.",
    deliverables: [
      "Multi-Tenant User Auth & Workspace Isolation",
      "Stripe Recurring Billing & Customer Portal",
      "Real-Time Executive Analytics Charts",
      "Scalable PostgreSQL & Prisma Database Schema"
    ],
    expectedOutcome: "Shortens time-to-market for new SaaS products while guaranteeing long-term scalability and clean code maintainability."
  }
];

export function getProjectBySlug(slug: string) {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}
