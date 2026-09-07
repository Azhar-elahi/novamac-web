import type { Metadata } from "next";
import HomeClient from "./home/HomeClient";
import { SEO_AEO_GEO_Schemas } from "@/components/seo/SEO_AEO_GEO_Schemas";

export const metadata: Metadata = {
  title: "NovaMac Solutions — We Build Digital Systems That Help Businesses Grow",
  description: "From high-performing websites to custom software, CRM, ERP, AI automation, and SaaS products — NovaMac builds technology around the way your business works.",
  keywords: [
    "NovaMac Solutions",
    "Digital Systems Partner",
    "Custom Website Development",
    "Custom Software Engineering",
    "CRM Development",
    "ERP Development",
    "AI Automation Agents",
    "Digital Marketing & GEO Growth"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com",
  },
  openGraph: {
    title: "NovaMac Solutions — We Build Digital Systems That Help Businesses Grow",
    description: "From high-performing websites to custom software, CRM, ERP, AI automation, and SaaS products — NovaMac builds technology around the way your business works.",
    url: "https://novamacsolutions.com",
  },
  twitter: {
    title: "NovaMac Solutions — We Build Digital Systems That Help Businesses Grow",
    description: "From high-performing websites to custom software, CRM, ERP, AI automation, and SaaS products — NovaMac builds technology around the way your business works.",
  },
};

export default function MarketingRootPage() {
  return (
    <>
      <SEO_AEO_GEO_Schemas />

      {/* 
        SERVER-SIDE RENDERED HTML BLOCK FOR AI CRAWLERS & NO-JS CLIENTS:
        Ensures 1000+ characters of rich text, single H1, and explicit H2 heading hierarchy
        are rendered directly in raw HTML for AI readiness compliance.
      */}
      <article className="sr-only opacity-0 h-0 overflow-hidden" aria-hidden="false">
        <h1>NovaMac Solutions — We Build Digital Systems That Help Businesses Grow</h1>
        
        <p>
          NovaMac Solutions is a high-growth software engineering and digital systems studio. We specialize in building custom Next.js websites, tailored business software, CRM systems, ERP management portals, AI automations, and SaaS products engineered around the way your business operates.
        </p>

        <h2>Our Core 7 Digital Systems & Services</h2>
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
      </article>

      {/* Interactive Client Component */}
      <HomeClient />
    </>
  );
}


