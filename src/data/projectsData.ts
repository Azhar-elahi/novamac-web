export interface DetailedProjectItem {
  id: string;
  slug: string;
  badge: string;
  category: string;
  statVal: string;
  statLabel: string;
  title: string;
  clientName?: string;
  liveUrl?: string;
  liveStatus?: string;
  isCurrentlyRunning?: boolean;
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
    id: "ab-collections",
    slug: "ab-collections",
    badge: "Client Storefront • E-Commerce",
    category: "E-Commerce & Retail",
    clientName: "AB Collections",
    liveUrl: "https://www.abcollections.store",
    liveStatus: "🟢 LIVE STOREFRONT",
    isCurrentlyRunning: false,
    statVal: "Sub-300ms",
    statLabel: "Target Server Response Time",
    title: "AB Collections — High-Conversion E-Commerce & Fashion Storefront",
    shortDesc: "Custom high-speed e-commerce online store concept with instant checkout, dynamic product showcase, and modern storefront architecture.",
    fullDesc: "AB Collections is a premier online fashion and lifestyle apparel store. NovaMac Solutions engineered a bespoke, ultra-fast storefront designed to showcase seasonal collections, streamline international order checkout, and deliver instantaneous catalog interactions across mobile and desktop devices.",
    image: "/images/ab_collections_live.png",
    techStack: ["Next.js 15", "Shopify Storefront API", "Tailwind CSS", "Stripe API", "Framer Motion"],
    challenge: "Traditional e-commerce templates suffer from heavy plugin bloat, slow mobile catalog rendering, and friction during multi-step checkout flows.",
    approach: "Decoupled the frontend presentation layer using Next.js 15 and Headless Shopify APIs to deliver sub-second page transitions, dynamic cart drawers, and instant catalog indexing.",
    solution: "A bespoke e-commerce architecture engineered for instant search indexing, responsive mobile checkout, and interactive product previewing.",
    deliverables: [
      "Custom Next.js & React 19 Frontend Storefront",
      "Headless Shopify API Integration",
      "Dynamic Category & Filter Engine",
      "Sub-300ms Express Cart & Checkout Flow"
    ],
    expectedOutcome: "Engineered to minimize page bounce rates, accelerate mobile shopping experience, and boost overall sales conversions by up to 40%."
  },
  {
    id: "msb-acrylic",
    slug: "msb-acrylic",
    badge: "Client Showcase • B2B Catalog",
    category: "B2B & Industrial",
    clientName: "MSB Acrylic",
    liveUrl: "https://www.msbacrylic.com",
    liveStatus: "🟢 LIVE B2B CATALOG",
    isCurrentlyRunning: false,
    statVal: "99.9%",
    statLabel: "Platform Cloud Uptime",
    title: "MSB Acrylic — Custom Acrylic Manufacturing & B2B Showcase",
    shortDesc: "Custom modern digital showcase and B2B catalog platform for MSB Acrylic, featuring bespoke product inquiry workflows, high-res fabrication galleries, and direct lead generation.",
    fullDesc: "MSB Acrylic is a leading specialist in custom acrylic fabrication, display cases, and industrial signage solutions. NovaMac Solutions architected a high-impact B2B digital catalog and inquiry platform that allows commercial buyers to explore custom fabrication options, calculate specs, and submit targeted RFQs.",
    image: "/images/msb_acrylic_live.png",
    techStack: ["React / Next.js", "TypeScript", "Tailwind CSS", "Custom RFQ Engine", "SEO Optimization"],
    challenge: "Industrial B2B clients struggled to present complex custom acrylic dimensions and technical specifications through standard off-the-shelf website templates.",
    approach: "Engineered an interactive product catalog with tailored specification selectors, inquiry modal integration, and crisp high-definition image galleries.",
    solution: "A streamlined, professional B2B platform that turns commercial web visitors into qualified leads with effortless RFQ submissions and instant business inquiry routes.",
    deliverables: [
      "B2B Acrylic Product Catalog Engine",
      "Interactive RFQ & Inquiry Form Builder",
      "High-Resolution Manufacturing Showcase Gallery",
      "Search Engine & Technical SEO Optimization"
    ],
    expectedOutcome: "Drives high-value corporate inquiries, elevates brand authority in custom manufacturing, and simplifies product inquiry intake."
  },
  {
    id: "the-finery-store",
    slug: "the-finery-store",
    badge: "Client Storefront • Luxury Retail",
    category: "E-Commerce & Retail",
    clientName: "The Finery Store",
    liveUrl: "https://web-eight-nu-31.vercel.app",
    liveStatus: "🟢 LIVE PRODUCTION",
    isCurrentlyRunning: false,
    statVal: "100/100",
    statLabel: "Lighthouse Performance Score",
    title: "The Finery Store — Luxury Apparel & Boutique E-Commerce",
    shortDesc: "High-end luxury fashion storefront built with Next.js, featuring glassmorphic product displays, interactive lookbooks, seamless cart animations, and sub-second performance.",
    fullDesc: "The Finery Store represents modern digital retail elegance. Built with a focus on luxury aesthetic execution, NovaMac Solutions crafted a lightweight, ultra-responsive web application with fluid micro-interactions, dark glassmorphism styling, and rapid Vercel edge deployment.",
    image: "/images/finery_store_live.png",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge Network", "Framer Motion"],
    challenge: "Creating a visual-heavy fashion site without sacrificing mobile load speed, maintaining 60fps animations across all screen resolution breakpoints.",
    approach: "Utilized modern SSR architecture, Next.js image optimization pipelines, and hardware-accelerated CSS/Motion transitions.",
    solution: "A boutique online shopping experience that blends artistic typography, interactive lookbook slides, and lightning-fast page navigation.",
    deliverables: [
      "Glassmorphic Luxury Storefront Layout",
      "Interactive Lookbook & Product Viewer",
      "Edge-Optimized Page Speed Architecture",
      "Mobile Touch-Optimized Shopping UI"
    ],
    expectedOutcome: "Delivers a 100/100 performance experience that engages fashion shoppers and minimizes mobile bounce rates."
  },
  {
    id: "nexora-one",
    slug: "nexora-one",
    badge: "Flagship Platform • Running SaaS",
    category: "AI Automation & SaaS",
    clientName: "NovaMac Core Engine",
    liveUrl: "https://nexora.novamacsolutions.com",
    liveStatus: "⚡ RUNNING ENTERPRISE SAAS",
    isCurrentlyRunning: true,
    statVal: "24/7",
    statLabel: "Autonomous AI Operation",
    title: "Nexora One — Enterprise AI Automation & Cloud Operating System",
    shortDesc: "Flagship all-in-one cloud enterprise platform by NovaMac Solutions. Unifies real-time business telemetry, automated workflow engine, workforce portals, and predictive AI analytics.",
    fullDesc: "Nexora One is NovaMac Solutions' flagship enterprise SaaS platform engineered for scalable business management. It integrates AI-driven workflow automation, multi-tenant workspace security, live operational telemetry dashboards, and intelligent client portals into one cohesive ecosystem.",
    image: "/images/nexora_one_live.png",
    techStack: ["Next.js 15", "OpenAI / Claude AI Models", "PostgreSQL / Prisma", "Tailwind CSS", "WebSockets Telemetry"],
    challenge: "Enterprise teams suffer from fragmented SaaS tools, disconnected databases, and manual data entry across department silos.",
    approach: "Constructed an all-in-one cloud infrastructure using micro-services, real-time WebSocket data channels, and autonomous AI agents.",
    solution: "A single-pane-of-glass enterprise portal empowering executive leadership to monitor operations, automate routine workflows, and scale team output.",
    deliverables: [
      "Multi-Tenant Cloud Telemetry Dashboard",
      "Autonomous AI Workflow Orchestrator",
      "Role-Based Security & Audit Trail",
      "Real-Time Executive Analytics Suite"
    ],
    expectedOutcome: "Reduces enterprise operational overhead by up to 60% and consolidates disparate software systems into one unified platform."
  },
  {
    id: "erp-pos-system",
    slug: "erp-pos-system",
    badge: "Enterprise Software • Cloud ERP & POS",
    category: "CRM & Software",
    clientName: "NovaMac Enterprise",
    liveUrl: "https://www.novamacsolutions.com/demo#/login",
    liveStatus: "🔒 LIVE DEMO PORTAL",
    isCurrentlyRunning: true,
    statVal: "Sub-100ms",
    statLabel: "Barcode Checkout Speed",
    title: "NovaMac ERP POS — Cloud POS Terminal & Multi-Branch ERP Ecosystem",
    shortDesc: "Comprehensive Enterprise Resource Planning (ERP) and Point of Sale (POS) solution with real-time multi-branch inventory tracking, barcode cashier checkout, and automated ledger sync.",
    fullDesc: "The NovaMac ERP POS platform is a cloud-native management ecosystem designed for retail chains, distributors, and multi-location businesses. Featuring instant cashier transaction processing, automated supplier stock reordering, barcode hardware integration, and financial ledger reporting.",
    image: "/images/erp_pos_live.png",
    techStack: ["React / Single Page App", "Node.js / Express", "PostgreSQL", "Tailwind CSS", "Hardware Barcode API"],
    challenge: "Traditional POS systems are prone to offline inventory sync errors, slow barcode processing, and complex multi-store ledger reconciliation.",
    approach: "Built a high-performance single page application with optimistic UI state updates, local hardware device connection hooks, and atomic database transactions.",
    solution: "An enterprise-grade POS and ERP solution enabling frictionless sales checkout, real-time inventory management across all branches, and instant financial reporting.",
    deliverables: [
      "Touch & Barcode Cashier Checkout Terminal",
      "Multi-Warehouse Inventory Ledger",
      "Automated Supplier Purchase Order System",
      "Real-Time Sales & Financial Reporting Hub"
    ],
    expectedOutcome: "Guarantees 100% stock accuracy across branches, reduces cashier checkout processing time, and automates accounting sync."
  },
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

