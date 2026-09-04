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
    title: 'AI & Business Automation',
    description: 'Custom AI agents and automated workflows that run your business around the clock.',
    color: '#FF5733',
    position: [0, 5.5, -62],
  },
  {
    id: 2,
    title: 'Website Performance Audits',
    description: 'Deep technical audits that turn a slow site into a fast, reliable growth engine.',
    color: '#FF7755',
    position: [-9, 2, -92],
  },
  {
    id: 3,
    title: 'Local SEO Outreach',
    description: 'Dominate your local map pack and search rankings with consistent, compounding visibility.',
    color: '#FF9977',
    position: [10, 3, -124],
    hasOrb: true,
  },
];

export const DETAILED_SERVICES_DATA: ServiceItem[] = [
  {
    id: "branding",
    slug: "branding-services",
    title: "Branding Services",
    shortDesc: "Strategic brand positioning, logo design, and visual messaging systems.",
    fullDesc: "We build enduring brand identities designed to stand out in saturated markets. From core messaging architecture to logo guidelines, typography systems, and high-impact visual design assets.",
    deliverables: [
      "Brand Strategy & Positioning",
      "Messaging Architecture",
      "Brand Style Guides",
      "Logo & Identity Design"
    ],
    features: ["Figma Design Token Export", "Vector Assets", "Typography Pairings", "Brand Guidelines PDF"]
  },
  {
    id: "website-design",
    slug: "custom-web-development",
    title: "Custom Website Design",
    shortDesc: "Sub-second Next.js 15 & React 19 web applications hand-coded for maximum conversions.",
    fullDesc: "Bespoke digital platforms engineered from scratch using Next.js 15, TypeScript, and Tailwind CSS. Built to deliver sub-50ms edge latency, 98+ Google PageSpeed scores, and zero vulnerability exposure.",
    deliverables: [
      "Sub-Second Next.js 15 & React 19 Engineering",
      "Custom Figma UI/UX Design Systems",
      "Responsive & Mobile-First Architecture",
      "Conversion Rate Optimization (CRO)"
    ],
    features: ["Sub-300ms LCP Page Speeds", "Vercel Edge Network Deployment", "Dynamic CMS Integration", "98+ PageSpeed SLA"]
  },
  {
    id: "ecommerce",
    slug: "ecommerce-development",
    title: "Ecommerce Website Development",
    shortDesc: "Headless Shopify Storefront API integration with instant one-click checkouts.",
    fullDesc: "Custom high-converting e-commerce experiences engineered on headless Shopify and Stripe architectures. Featuring sub-second catalog loading, instant cart drawers, dynamic multi-currency support, and custom checkouts.",
    deliverables: [
      "Headless Shopify Storefront API Integration",
      "Instant Custom Cart & One-Click Checkout",
      "Stripe & Multi-Currency Payment Gateways",
      "Product Catalog Search & Filter Engine"
    ],
    features: ["Sub-Second Search Engine", "Shopify Plus Compatibility", "Automated Tax & Shipping", "Custom Checkout Extension"]
  },
  {
    id: "ai-crm",
    slug: "ai-crm-automation",
    title: "AI Automation & Custom CRMs",
    shortDesc: "Tailored internal operations portals and autonomous AI agents replacing spreadsheets.",
    fullDesc: "Custom enterprise operations portals and autonomous AI workflows built to eliminate manual task overhead. Replacing fragmented spreadsheets with unified role-based portals, pipeline automations, and LLM integrations.",
    deliverables: [
      "Bespoke Internal Business Portals",
      "Autonomous AI Customer & Sales Agents",
      "RAG Knowledge Search & Vector Databases",
      "Workflow Automation Replacing Spreadsheets"
    ],
    features: ["OpenAI & Claude API Integration", "Pinecone Vector RAG Base", "Twilio & WhatsApp Automation", "Role-Based ACL Security"]
  },
  {
    id: "digital-marketing",
    slug: "seo-geo-marketing",
    title: "Search Everywhere Optimization",
    shortDesc: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) dominance.",
    fullDesc: "Modern SEO engineered for both traditional search engines (Google, Bing) and AI answer engines (ChatGPT Search, Perplexity, Gemini). Includes Core Web Vitals optimization, schema markup, and lead funnels.",
    deliverables: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Technical SEO & Core Web Vitals Dominance",
      "Targeted Lead Generation & Sales Funnels"
    ],
    features: ["JSON-LD Schema Engineering", "Sub-50ms TTFB Audits", "Competitor Keyword Hijacking", "Monthly KPI Reporting"]
  }
];
