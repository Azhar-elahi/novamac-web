export interface ExecutiveProject {
  id: string;
  slug: string;
  clientName: string;
  title: string;
  category: string;
  categoryTag: "E-Commerce" | "B2B Catalog" | "SaaS Platform" | "ERP & POS";
  liveUrl: string;
  image: string;
  badge: string;
  statusBadge: string;
  statVal: string;
  statLabel: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  deliverables: string[];
  techStack: string[];
}

export const EXECUTIVE_PORTFOLIO_DATA: ExecutiveProject[] = [
  {
    id: "ab-collections",
    slug: "ab-collections",
    clientName: "AB Collections",
    title: "AB Collections — High-Conversion E-Commerce Storefront",
    category: "E-Commerce & Retail",
    categoryTag: "E-Commerce",
    liveUrl: "https://www.abcollections.store",
    image: "/images/ab_collections_live.png",
    badge: "Client Storefront",
    statusBadge: "🟢 LIVE STOREFRONT",
    statVal: "Sub-300ms",
    statLabel: "Page Load Response",
    summary: "Custom high-speed e-commerce online storefront engineered for AB Collections. Features instant catalog filtering, multi-currency pricing, express cart drawer, and headless checkout integration.",
    overview: "AB Collections is a leading online fashion and lifestyle store. NovaMac Solutions engineered a bespoke, ultra-fast storefront designed to showcase seasonal collections, streamline international order checkout, and deliver instantaneous catalog interactions across mobile and desktop devices.",
    challenge: "The brand required a fast mobile shopping experience capable of handling high campaign traffic without catalog lag or checkout drop-offs.",
    solution: "Decoupled the frontend using Next.js 15 and Headless Shopify Storefront APIs to deliver instant catalog transitions and sub-300ms express checkout.",
    keyFeatures: [
      "Sub-second product catalog search and filtering",
      "Mobile cart drawer with instant express checkout",
      "Dynamic inventory sync across product variants",
      "Responsive multi-device layout optimized for mobile buyers"
    ],
    deliverables: [
      "Headless Next.js 15 Storefront Architecture",
      "Express Mobile Cart & Slide Drawer",
      "Dynamic Category & Filter Engine",
      "Shopify & Stripe Payment Integration"
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shopify Headless", "Stripe API"]
  },
  {
    id: "msb-acrylic",
    slug: "msb-acrylic",
    clientName: "MSB Acrylic",
    title: "MSB Acrylic — Custom Manufacturing & B2B Showcase",
    category: "B2B & Industrial",
    categoryTag: "B2B Catalog",
    liveUrl: "https://www.msbacrylic.com",
    image: "/images/msb_acrylic_live.png",
    badge: "Client B2B Catalog",
    statusBadge: "🟢 LIVE B2B CATALOG",
    statVal: "99.9%",
    statLabel: "Platform Cloud Uptime",
    summary: "Premier B2B digital catalog and manufacturing showcase for MSB Acrylic. Highlights custom acrylic fabrications, industrial display cases, and dynamic inquiry RFQ workflows.",
    overview: "MSB Acrylic specializes in custom acrylic fabrication, display units, and industrial signage solutions. NovaMac Solutions architected a high-impact B2B digital catalog and inquiry platform that allows commercial buyers to explore custom fabrication options, calculate specs, and submit targeted RFQs.",
    challenge: "Presenting complex acrylic fabrication dimensions, custom manufacturing options, and technical product specs to commercial buyers effectively.",
    solution: "Engineered an interactive digital catalog with structured RFQ form builders, high-resolution product showcases, and direct sales team lead capture.",
    keyFeatures: [
      "Interactive product catalog with category filtering",
      "Custom specification request for quote (RFQ) builder",
      "High-definition product gallery showcasing acrylic fabrications",
      "Direct lead capture connected to sales notifications"
    ],
    deliverables: [
      "B2B Product Catalog & Filter System",
      "Interactive RFQ Inquiry Builder",
      "Manufacturing Showcase Gallery",
      "Technical SEO & Structured Schemas"
    ],
    techStack: ["React / Next.js", "TypeScript", "Tailwind CSS", "Custom RFQ Engine", "SEO Architecture"]
  },
  {
    id: "the-finery-store",
    slug: "the-finery-store",
    clientName: "The Finery Store",
    title: "The Finery Store — Luxury Boutique & Fashion Storefront",
    category: "Luxury E-Commerce",
    categoryTag: "E-Commerce",
    liveUrl: "https://web-eight-nu-31.vercel.app",
    image: "/images/finery_store_live.png",
    badge: "Client Storefront",
    statusBadge: "🟢 LIVE PRODUCTION",
    statVal: "100/100",
    statLabel: "Lighthouse Performance",
    summary: "Luxury apparel boutique built with Next.js, showcasing glassmorphic lookbooks, fluid micro-interactions, edge CDN media caching, and sub-second page rendering.",
    overview: "The Finery Store represents modern digital retail elegance. Built with a focus on luxury aesthetic execution, NovaMac Solutions crafted a lightweight, ultra-responsive web application with fluid micro-interactions, dark glassmorphism styling, and rapid Vercel edge deployment.",
    challenge: "Creating a visual-heavy luxury fashion experience without compromising mobile speed or page load performance scores.",
    solution: "Leveraged Next.js 15 SSR architecture, Vercel edge image optimization, and 60fps hardware-accelerated Framer Motion transitions.",
    keyFeatures: [
      "Glassmorphic UI layout tailored for high-fashion products",
      "Interactive lookbook slides with instant product drawer",
      "Edge CDN cached asset delivery for zero image delay",
      "Touch-optimized shopping cart interface"
    ],
    deliverables: [
      "Glassmorphic Luxury Storefront Layout",
      "Interactive Lookbook & Product Viewer",
      "Edge-Optimized Media Pipeline",
      "Mobile Touch-Optimized Shopping UI"
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge Network", "Framer Motion"]
  },
  {
    id: "nexora-one",
    slug: "nexora-one",
    clientName: "NovaMac Core Engine",
    title: "Nexora One — Enterprise AI Automation Platform",
    category: "AI & SaaS Systems",
    categoryTag: "SaaS Platform",
    liveUrl: "https://nexora.novamacsolutions.com",
    image: "/images/nexora_one_live.png",
    badge: "Flagship SaaS Platform",
    statusBadge: "⚡ RUNNING ENTERPRISE SAAS",
    statVal: "24/7",
    statLabel: "Autonomous Operation",
    summary: "Flagship enterprise SaaS platform by NovaMac Solutions. Unifies real-time operational telemetry, automated workflow orchestration, role-based workforce portals, and AI analytics.",
    overview: "Nexora One is NovaMac Solutions' flagship enterprise SaaS platform engineered for scalable business management. It integrates AI-driven workflow automation, multi-tenant workspace security, live operational telemetry dashboards, and intelligent client portals into one cohesive ecosystem.",
    challenge: "Enterprise organizations struggle with fragmented software tools, disconnected databases, and manual data entry across department silos.",
    solution: "Architected a unified multi-tenant cloud platform featuring real-time WebSockets telemetry, role-based access security, and autonomous AI agents.",
    keyFeatures: [
      "Real-time operational command center dashboard",
      "Automated AI lead qualification and scheduling agent",
      "Role-based user permissions and tenant workspace security",
      "Live business telemetry analytics and reporting"
    ],
    deliverables: [
      "Multi-Tenant Cloud Workspace Hub",
      "Autonomous AI Workflow Orchestrator",
      "Role-Based Access & Audit Layer",
      "Real-Time Executive Telemetry Dashboard"
    ],
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "OpenAI / Claude AI"]
  },
  {
    id: "erp-pos-system",
    slug: "erp-pos-system",
    clientName: "NovaMac Enterprise",
    title: "NovaMac ERP POS — Multi-Branch POS & Cloud ERP Ecosystem",
    category: "Enterprise Software",
    categoryTag: "ERP & POS",
    liveUrl: "https://www.novamacsolutions.com/demo#/login",
    image: "/images/erp_pos_live.png",
    badge: "Enterprise Software System",
    statusBadge: "🔒 LIVE DEMO PORTAL",
    statVal: "<100ms",
    statLabel: "Barcode Checkout Speed",
    summary: "Cloud-native Enterprise Resource Planning (ERP) and Point of Sale (POS) solution for retail chains. Features cashier checkout terminals, multi-branch stock tracking, and ledger accounting.",
    overview: "The NovaMac ERP POS platform is a cloud-native management ecosystem designed for retail chains, distributors, and multi-location businesses. Featuring instant cashier transaction processing, automated supplier stock reordering, barcode hardware integration, and financial ledger reporting.",
    challenge: "Traditional POS systems suffer from offline sync errors, slow barcode processing, and complex multi-store inventory reconciliation.",
    solution: "Built a high-performance web app with optimistic UI state updates, local barcode scanner device API hooks, and real-time inventory ledger sync.",
    keyFeatures: [
      "Touchscreen cashier POS terminal with instant barcode checkout",
      "Multi-warehouse inventory ledger with automatic low-stock alerts",
      "Supplier purchase order automation and stock receiving",
      "Real-time sales reporting and financial ledger tracking"
    ],
    deliverables: [
      "Touchscreen Cashier POS Checkout UI",
      "Multi-Warehouse Inventory Ledger",
      "Supplier Purchase Order Module",
      "Sales & Accounting Analytics"
    ],
    techStack: ["React / SPA", "Node.js / Express", "PostgreSQL", "Tailwind CSS", "Hardware Barcode API"]
  }
];

export function getExecutiveProjectById(id: string) {
  return EXECUTIVE_PORTFOLIO_DATA.find((p) => p.id === id || p.slug === id);
}
