import { ServiceItem } from "@/types";

export interface NovamacService {
  id: number;
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
  hasOrb?: boolean;
}

export const NOVAMAC_SERVICES: NovamacService[] = [
  {
    id: 1,
    title: 'Custom Web Engineering',
    description: 'Sub-second Next.js web platforms engineered for speed, conversions, and security.',
    color: '#FF5733',
    position: [0, 5.5, -62],
  },
  {
    id: 2,
    title: 'Business Systems & CRM',
    description: 'Custom CRM and operational software replacing manual spreadsheets.',
    color: '#FF7755',
    position: [-9, 2, -92],
  },
  {
    id: 3,
    title: 'AI & Process Automation',
    description: 'AI-powered workflows, RAG search, and automated pipelines.',
    color: '#FF9977',
    position: [10, 3, -124],
    hasOrb: true,
  },
];

export const DETAILED_SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-dev",
    slug: "website-development",
    title: "Website Development & Design",
    shortDesc: "Sub-second Next.js web applications hand-coded for maximum conversions.",
    fullDesc: "Bespoke digital platforms engineered from scratch using Next.js, TypeScript, and Tailwind CSS. Built to deliver sub-second loading speed, mobile UX perfection, and zero vulnerability exposure.",
    deliverables: [
      "Sub-Second Next.js & React Engineering",
      "Custom UI/UX Design Systems",
      "Responsive & Mobile-First Architecture",
      "Technical SEO & Core Web Vitals SLA"
    ],
    features: ["Sub-300ms LCP Page Speeds", "Global Edge CDN Deployment", "Easy Content Management", "100% Code Ownership"]
  },
  {
    id: "software-dev",
    slug: "custom-software",
    title: "Custom Software Development",
    shortDesc: "Purpose-built web applications and operational tools tailored to your business rules.",
    fullDesc: "Bespoke internal operations portals and software applications built to eliminate manual bottlenecks. Replacing fragmented tools with unified role-based workspaces.",
    deliverables: [
      "Custom Web App Engineering",
      "Secure Database Architecture",
      "Role-Based Access Control (RBAC)",
      "API & Software Integrations"
    ],
    features: ["Next.js & Node.js Stack", "PostgreSQL & Prisma Database", "Role-Based ACL Security", "Full IP Transfer"]
  },
  {
    id: "crm-dev",
    slug: "crm-development",
    title: "CRM Development & Pipeline Systems",
    shortDesc: "Custom systems to manage leads, sales pipelines, and customer relationships.",
    fullDesc: "Tailored sales pipeline boards and client management dashboards. Designed around your exact sales workflow without expensive monthly per-seat licensing fees.",
    deliverables: [
      "Custom Sales Pipeline Boards",
      "Automated Lead Capture & Follow-up",
      "Client Communication Logs",
      "Deal Analytics & Reporting"
    ],
    features: ["Zero Monthly Per-Seat Fees", "Automated SMS & Email Triggers", "Real-Time Pipeline Analytics", "Custom API Webhooks"]
  },
  {
    id: "erp-dev",
    slug: "erp-development",
    title: "ERP & Operations Development",
    shortDesc: "Connected operational systems for inventory, purchasing, finance, and management.",
    fullDesc: "Unified business management platform connecting operations, inventory, purchasing, and executive reporting into a single real-time system.",
    deliverables: [
      "Unified Operations Modules",
      "Real-Time Stock & Purchasing Engine",
      "Role-Based Activity Auditing",
      "Executive KPI Dashboard"
    ],
    features: ["Multi-Location Inventory", "Custom Approval Workflows", "API Connections to Logistics", "Custom Accounting Exports"]
  },
  {
    id: "ai-auto",
    slug: "ai-automation",
    title: "AI Automation & Workflows",
    shortDesc: "AI agents, RAG document search, and process automations that cut manual overhead.",
    fullDesc: "Bespoke AI workflows and internal tools engineered to automate document processing, lead qualification, and customer inquiry response.",
    deliverables: [
      "Custom AI Agents Trained on Your Data",
      "RAG Document Search & Knowledge Base",
      "Automated Lead Qualification & Booking",
      "System Integrations (CRM, Email, Slack)"
    ],
    features: ["OpenAI & Claude API Integrations", "Enterprise LLM Engine Architecture", "Safety Guardrails", "24/7 Inquiry Processing"]
  },
  {
    id: "marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & Growth Systems",
    shortDesc: "Data-driven SEO, Generative Engine Optimization (GEO), and conversion funnels.",
    fullDesc: "Modern search dominance engineered for traditional search engines (Google, Bing) and AI search platforms (Perplexity, ChatGPT Search, Gemini).",
    deliverables: [
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
      "Landing Page Conversion Tuning",
      "Transparent Revenue Analytics"
    ],
    features: ["Structured JSON-LD Schema", "Core Web Vitals Optimization", "Lead Funnel Architecture", "Monthly Performance Review"]
  },
  {
    id: "saas-dev",
    slug: "saas-development",
    title: "SaaS & Product Development",
    shortDesc: "From product scoping and MVP buildout to scalable cloud SaaS platforms.",
    fullDesc: "Full-stack product engineering for founders and businesses launching custom SaaS solutions. Complete with multi-tenant auth, subscription billing, and scalable cloud infrastructure.",
    deliverables: [
      "MVP Product Architecture & UI/UX",
      "Full-Stack Web App Engineering",
      "Stripe Subscription Billing",
      "Scalable API & Database Schema"
    ],
    features: ["Multi-Tenant Authentication", "Stripe Billing Portal", "Continuous Deployment", "100% Code & IP Transfer"]
  }
];
