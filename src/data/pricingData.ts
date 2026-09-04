import { PricingTier } from "@/types";

export const PRICING_TIERS_DATA: PricingTier[] = [
  {
    id: "starter",
    title: "STARTER PLATFORM",
    price: "$299",
    subtitle: "Ideal for growing businesses needing a fast, high-converting digital presence.",
    features: [
      "Custom Hand-Coded Next.js 15 Web App",
      "Up to 5 Fully Custom Pages",
      "Sub-Second Page Load Guarantee (<0.8s)",
      "Mobile & Tablet Responsive Engineering",
      "Basic On-Page SEO & Schema Markup",
      "100% Full Source Code Ownership"
    ],
    ctaText: "Select Starter Tier"
  },
  {
    id: "growth",
    title: "GROWTH STUDIO",
    price: "$599",
    subtitle: "Built for scaling brands, e-commerce stores, and active lead generation.",
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in Starter Tier",
      "Up to 12 Custom Pages + Dynamic Blog / CMS",
      "Headless Shopify / Stripe Payment Gateway",
      "Custom Lead Capture & Proposal Calculator",
      "Generative Engine Optimization (GEO/AEO)",
      "WhatsApp & Direct Chatbot Integration",
      "Priority 2-Week Express Delivery"
    ],
    ctaText: "Start Growth Project"
  },
  {
    id: "enterprise",
    title: "ENTERPRISE SAAS & AI",
    price: "$999+",
    subtitle: "Bespoke full-stack platforms, custom CRMs, and autonomous AI workflow portals.",
    features: [
      "Everything in Growth Studio",
      "Unlimited Custom Pages & Sub-Application Architecture",
      "Custom Internal CRM & Deal Pipeline Portal",
      "Autonomous AI Agent Integration (GPT-4o / Claude 3.5)",
      "RAG Knowledge Base & Pinecone Vector Search",
      "Dedicated Lead Engineer & 24/7 SLA Support",
      "100% IP Ownership + Full Technical Handover"
    ],
    ctaText: "Book Enterprise Consultation"
  }
];
