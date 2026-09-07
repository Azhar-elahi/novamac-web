import { PricingTier } from "@/types";

export const PRICING_TIERS_DATA: PricingTier[] = [
  {
    id: "web-platforms",
    title: "WEB PLATFORMS",
    price: "$1,200 – $3,500",
    subtitle: "High-performing Next.js web applications, corporate platforms, and conversion systems.",
    features: [
      "Custom Next.js & React 19 UI Architecture",
      "Sub-Second Edge Latency (<0.8s SLA)",
      "Built-in Technical SEO & Schema Markup",
      "Responsive Mobile & Tablet Optimization",
      "Easy Content Management Access",
      "100% Full Source Code & IP Ownership"
    ],
    ctaText: "Request Web Scope"
  },
  {
    id: "business-systems",
    title: "BUSINESS SYSTEMS & CRM",
    price: "$2,500 – $6,000",
    subtitle: "Custom CRM and ERP systems for lead management, customer operations, inventory, and finance.",
    popular: true,
    badge: "MOST REQUESTED",
    features: [
      "Custom Sales Pipeline & Lead Board",
      "Role-Based Access Control (RBAC)",
      "Real-Time Executive Analytics",
      "Legacy Data & Spreadsheet Migration",
      "Zero Per-Seat Monthly Licensing Fees",
      "100% Full Code Ownership"
    ],
    ctaText: "Request Systems Scope"
  },
  {
    id: "ai-automation",
    title: "AI & AUTOMATION",
    price: "$2,000 – $5,500",
    subtitle: "Autonomous AI agents, automated lead qualification pipelines, and internal RAG knowledge bases.",
    features: [
      "Custom OpenAI & Claude API Workflows",
      "RAG Document Search & Vector Base",
      "Automated SMS & Email Triggers",
      "System Connectors (Email, CRM, Slack)",
      "24/7 Inquiry Qualification SLA",
      "Safety Guardrails & Monitoring"
    ],
    ctaText: "Request Automation Scope"
  },
  {
    id: "saas-software",
    title: "SAAS & CUSTOM SOFTWARE",
    price: "$3,500 – $10,000+",
    subtitle: "Full-stack software engineering for founders launching custom SaaS products or web apps.",
    features: [
      "Full-Stack Web App Engineering",
      "Multi-Tenant SaaS Infrastructure",
      "Stripe Subscription & Billing Portal",
      "Scalable PostgreSQL & Cloud Schemas",
      "100% IP & Codebase Handoff",
      "Post-Launch Technical Support"
    ],
    ctaText: "Request Software Scope"
  }
];
