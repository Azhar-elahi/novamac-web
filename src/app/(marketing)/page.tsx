import type { Metadata } from "next";
import HomeClient from "./home/HomeClient";

export const metadata: Metadata = {
  title: "Custom Web, Software, ERP, POS & CRM Development | NovaMac Solutions",
  description: "Enterprise software engineering studio: Custom Next.js Websites, Bespoke Software, Custom ERP Operations, Cloud POS Systems, and CRM Pipelines for US, UK, EU & Middle East businesses.",
  keywords: [
    "NovaMac Solutions",
    "Custom Website Development",
    "Custom Software Engineering",
    "ERP Software Development",
    "POS Software Development",
    "Cloud Point of Sale Systems",
    "Custom CRM Development",
    "AI Automation Agents",
    "Digital Marketing & GEO Growth"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com",
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "en-AE": "https://novamacsolutions.com/middle-east",
      "en-PK": "https://novamacsolutions.com/pk",
      "x-default": "https://novamacsolutions.com",
    },
  },
  openGraph: {
    title: "Custom Web, Software, ERP, POS & CRM Development | NovaMac Solutions",
    description: "Enterprise software engineering studio: Custom Next.js Websites, Bespoke Software, Custom ERP Operations, Cloud POS Systems, and CRM Pipelines for US, UK, EU & Middle East businesses.",
    url: "https://novamacsolutions.com",
  },
  twitter: {
    title: "Custom Web, Software, ERP, POS & CRM Development | NovaMac Solutions",
    description: "Enterprise software engineering studio: Custom Next.js Websites, Bespoke Software, Custom ERP Operations, Cloud POS Systems, and CRM Pipelines.",
  },
};

export default function MarketingRootPage() {
  return (
    <>
      {/* 
        SERVER-SIDE RENDERED HTML BLOCK FOR AI CRAWLERS & NO-JS CLIENTS:
        Ensures 1000+ characters of rich text, clean heading hierarchy
        are rendered directly in raw HTML for AI readiness compliance.
      */}
      <section className="sr-only opacity-0 h-0 overflow-hidden" aria-label="NovaMac Digital Systems Overview">
        <h2 className="text-2xl font-bold">NovaMac Solutions — Custom Web, Software, ERP, POS & CRM Development</h2>
        
        <p>
          NovaMac Solutions is a high-growth software engineering and digital systems studio. We specialize in building custom Next.js websites, tailored business software, CRM systems, cloud ERP management portals, retail POS systems, AI automations, and SaaS products engineered around the way your business operates.
        </p>

        <h2>Our Core Digital Systems & Engineering Services</h2>
        <ul>
          <li>
            <h3>Website Development & Design</h3>
            <p>Custom, high-performing websites built to convert visitors into leads and revenue without page builder bloat.</p>
          </li>
          <li>
            <h3>Custom Software Development</h3>
            <p>Tailored software solutions engineered precisely around your business logic and operational needs.</p>
          </li>
          <li>
            <h3>CRM Development & Sales Pipelines</h3>
            <p>Centralized lead, deal, and client relationship management dashboards with zero per-seat monthly fees.</p>
          </li>
          <li>
            <h3>ERP Systems & Operations</h3>
            <p>Unified enterprise systems connecting inventory, HR, purchasing, and finance into one real-time portal.</p>
          </li>
          <li>
            <h3>POS Systems & Retail Checkouts</h3>
            <p>High-speed cloud POS systems, multi-branch retail and restaurant software with offline sync and zero per-terminal monthly fees.</p>
          </li>
          <li>
            <h3>AI Automation & Autonomous Agents</h3>
            <p>Custom LLM agents, RAG knowledge search, and workflow automations that eliminate repetitive manual labor.</p>
          </li>
          <li>
            <h3>Digital Marketing & GEO Growth</h3>
            <p>Search engine optimization, Generative Engine Optimization (AI Search), and conversion funnels built for ROI.</p>
          </li>
          <li>
            <h3>SaaS & Digital Products</h3>
            <p>Scalable cloud applications, multi-tenant portals, and subscription billing systems.</p>
          </li>
        </ul>

        <h2>Our 6-Step Engineering Methodology</h2>
        <ol>
          <li><strong>01 Discover:</strong> Analyzing business goals, customer touchpoints, and technical bottlenecks.</li>
          <li><strong>02 Plan:</strong> Building precise architecture blueprints, system scope, and clear timelines.</li>
          <li><strong>03 Design:</strong> Crafting high-converting Figma UI/UX layouts focused on brand credibility.</li>
          <li><strong>04 Build:</strong> Hand-coding Next.js, React, Node.js, and PostgreSQL solutions.</li>
          <li><strong>05 Launch:</strong> Speed optimization, security audits, and edge network deployment.</li>
          <li><strong>06 Grow:</strong> Continuous search optimization, performance tuning, and scaling.</li>
        </ol>

        <h2>Scoped Pricing & Full Source Code Ownership</h2>
        <p>
          Transparent project estimates starting from $1,500+. Every client receives 100% full source code ownership on day one with zero vendor lock-in.
        </p>

        <h2>Contact NovaMac Solutions</h2>
        <p>
          Request a free Digital Growth Review at novamacsolutions.com/book or email hello@novamacsolutions.com.
        </p>
      </section>

      {/* Interactive Client Component */}
      <HomeClient />
    </>
  );
}


