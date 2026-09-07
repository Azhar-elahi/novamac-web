export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  tagline: string;
  startingPrice: string;
  iconName:
    | "Code2" | "ShoppingCart" | "ShoppingBag" | "Store" | "Layout" | "Bot"
    | "Database" | "Target" | "Search" | "Smartphone" | "Palette" | "Cloud"
    | "LifeBuoy" | "Share2" | "Cpu" | "Layers" | "TrendingUp";
  painPoints: { title: string; desc: string }[];
  included: string[];
  techStack?: string[];
}

export const CORE_SERVICES_LIST = [
  { slug: "website-development", label: "Website Development & Design", desc: "High-performing websites and digital experiences built around your business." },
  { slug: "custom-software", label: "Custom Software", desc: "Purpose-built software for unique business workflows." },
  { slug: "crm-development", label: "CRM Development", desc: "Custom systems to manage leads, customers, sales and relationships." },
  { slug: "erp-development", label: "ERP Development", desc: "Connected systems for business operations, finance, inventory and management." },
  { slug: "ai-automation", label: "AI Automation", desc: "AI-powered workflows, agents and automations that reduce repetitive work." },
  { slug: "digital-marketing", label: "Digital Marketing", desc: "Digital strategies designed to improve visibility, leads and conversions." },
  { slug: "saas-development", label: "SaaS & Digital Products", desc: "From product concept and MVP to scalable SaaS platforms." }
];

export const SERVICES: ServiceDetail[] = [
  {
    slug: "website-development",
    title: "Website Development & Design",
    shortTitle: "Website Development",
    category: "Development",
    tagline: "High-performing websites and digital experiences built around your business.",
    startingPrice: "Custom Project Scope",
    iconName: "Code2",
    painPoints: [
      { title: "Outdated Digital Presence", desc: "Your website doesn't represent the quality or capability of your business." },
      { title: "Low Lead Conversions", desc: "Visitors browse your site but leave without booking a call or reaching out." },
      { title: "Slow & Bloated Code", desc: "Plugin-heavy templates hurt loading speed, mobile UX, and search engine performance." }
    ],
    included: [
      "Custom Next.js & React engineering — zero template bloat",
      "User experience & interface design crafted for clarity",
      "Built-in technical SEO and mobile optimization",
      "Easy-to-use content editing access",
      "Full source code ownership on project completion"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloud Architecture"]
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "Software Engineering",
    tagline: "Purpose-built software for unique business workflows.",
    startingPrice: "Custom Project Scope",
    iconName: "Cpu",
    painPoints: [
      { title: "Rigid Off-the-Shelf Tools", desc: "Commercial software forces your company into rigid workflows that don't fit how you operate." },
      { title: "Disconnected Business Data", desc: "Team members spend hours manually transferring data between different software applications." },
      { title: "Lack of Scalability", desc: "Spreadsheets and legacy tools break down as your client volume and transaction count grow." }
    ],
    included: [
      "Custom web application engineering tailored to your workflow",
      "Secure database architecture and API integrations",
      "Role-based user permissions and workspace management",
      "Seamless connection with your existing software stack",
      "100% intellectual property & source code ownership"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Cloud Infra"]
  },
  {
    slug: "crm-development",
    title: "CRM Development & Pipeline Systems",
    shortTitle: "CRM Development",
    category: "Business Systems",
    tagline: "Custom systems to manage leads, customers, sales and relationships.",
    startingPrice: "Custom Project Scope",
    iconName: "Database",
    painPoints: [
      { title: "Lost Opportunities in Spreadsheets", desc: "Tracking deals and leads manually leads to forgotten follow-ups and missed sales." },
      { title: "High Monthly Per-Seat Fees", desc: "Commercial CRMs charge expensive user licenses for features your team never uses." },
      { title: "No Pipeline Visibility", desc: "Management lacks real-time metrics on deal stages, sales velocity, and team performance." }
    ],
    included: [
      "Custom pipeline boards matched to your actual sales process",
      "Automated lead capture, notification & follow-up triggers",
      "Client management & communication logs",
      "Performance reporting and deal analytics",
      "Zero monthly per-seat licensing costs"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "REST APIs"]
  },
  {
    slug: "erp-development",
    title: "ERP & Operations Development",
    shortTitle: "ERP Development",
    category: "Business Operations",
    tagline: "Connected systems for business operations, finance, inventory and management.",
    startingPrice: "Custom Project Scope",
    iconName: "Layers",
    painPoints: [
      { title: "Operational Bottlenecks", desc: "Operations, inventory, and finance running independently creates duplicate data entry and delays." },
      { title: "Inaccurate Operational Reports", desc: "Gathering reports requires manually combining data across spreadsheets." },
      { title: "Complex Business Rules", desc: "Generic tools cannot handle multi-location stock, custom manufacturing, or specific billing logic." }
    ],
    included: [
      "Unified operational modules (Inventory, Sales, HR, Purchasing)",
      "Real-time tracking and automated purchase order generation",
      "Role-based permissions and activity logs",
      "Executive dashboard with key operational metrics",
      "Custom API connections to accounting and logistics tools"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"]
  },
  {
    slug: "ai-automation",
    title: "AI Development & Automation",
    shortTitle: "AI Development & Automation",
    category: "AI & Automation",
    tagline: "Custom AI applications, autonomous agents, RAG knowledge bases, and LLM integrations engineered to automate business workflows.",
    startingPrice: "Custom Project Scope",
    iconName: "Bot",
    painPoints: [
      { title: "Repetitive Manual Tasks", desc: "Data entry, document processing, and triage consume valuable employee hours every week." },
      { title: "Slow Response Times", desc: "Inquiries sitting unaddressed overnight lead prospects to look at competitors." },
      { title: "Generic Chatbots That Frustrate", desc: "Off-the-shelf chatbot widgets cannot access your internal data or complete real workflows." }
    ],
    included: [
      "Custom AI agents trained on your business information",
      "RAG document search and internal knowledge retrieval",
      "Automated inquiry qualification and scheduling",
      "System integrations connecting CRM, Email, and internal tools",
      "Continuous testing and safety guardrails"
    ],
    techStack: ["OpenAI API", "Anthropic Claude", "LLM Orchestration", "Python"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Growth Systems",
    shortTitle: "Digital Marketing",
    category: "Growth & Acquisition",
    tagline: "Digital strategies designed to improve visibility, leads and conversions.",
    startingPrice: "Custom Project Scope",
    iconName: "TrendingUp",
    painPoints: [
      { title: "Traffic That Doesn't Convert", desc: "Getting visitors to your site is useless if they leave without taking action." },
      { title: "Unclear ROI on Marketing", desc: "Without proper tracking, it's impossible to know which channel is driving revenue." },
      { title: "Low Visibility on Modern Search", desc: "Missing optimization for both Google and modern AI search engines." }
    ],
    included: [
      "Search Engine Optimization (SEO) & AI Search Optimization (GEO)",
      "Conversion rate optimization and landing page design",
      "Targeted lead acquisition strategies",
      "Clear reporting connected to key business metrics",
      "Regular review sessions to refine performance"
    ],
    techStack: ["Analytics Engine", "Search Console", "GEO Optimization"]
  },
  {
    slug: "saas-development",
    title: "SaaS & Product Development",
    shortTitle: "SaaS & Products",
    category: "Product Engineering",
    tagline: "From product concept and MVP to scalable SaaS platforms.",
    startingPrice: "Custom Project Scope",
    iconName: "Cloud",
    painPoints: [
      { title: "Slow MVP launch cycles", desc: "Taking months or years to get an initial version into the hands of real users." },
      { title: "Unscalable architecture", desc: "Building on brittle tech stacks that require complete rewrites once user volume increases." },
      { title: "Complex billing & user access", desc: "Struggling with multi-tenant subscriptions, role-based security, and payment integrations." }
    ],
    included: [
      "End-to-end product scoping, vector UI/UX design, and system architecture",
      "Full-stack web app engineering with modern React & cloud infrastructure",
      "Multi-tenant auth, role-based access control, and Stripe billing",
      "Scalable API design, database schemas, and continuous deployment",
      "Full source code ownership and technical handoff on delivery"
    ],
    techStack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Stripe Gateway", "Cloud Infrastructure"]
  }
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
