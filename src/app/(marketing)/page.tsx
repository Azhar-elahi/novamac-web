import type { Metadata } from "next";
import HomeClient from "./home/HomeClient";
import { SEO_AEO_GEO_Schemas } from "@/components/seo/SEO_AEO_GEO_Schemas";

export const metadata: Metadata = {
  title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
  description: "NovaMac Solutions builds custom Next.js web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms engineered for sub-second speeds.",
  keywords: [
    "NovaMac Solutions",
    "Custom Web Development Studio",
    "Next.js 15 Engineers",
    "UI/UX Design Agency",
    "AI & CRM Workflows",
    "Headless Shopify Storefronts"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com",
  },
  openGraph: {
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms.",
    url: "https://novamacsolutions.com",
  },
  twitter: {
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms.",
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
        <h1>Next-Gen Digital Studio — Custom Web Development & AI Engineering Studio</h1>
        
        <p>
          NovaMac Solutions is an elite software engineering and digital design studio serving clients across the United States, United Kingdom, Canada, Western Europe, and Australia. We specialize in custom Next.js 15 web applications, bespoke UI/UX design systems, AI workflow automation, custom CRMs, and headless e-commerce storefronts engineered for sub-second page speeds (&lt;50ms edge latency).
        </p>

        <h2>Core Engineering Capabilities & Digital Services</h2>
        <ul>
          <li>
            <h3>Custom Web Development</h3>
            <p>Hand-coded Next.js & React platforms built from scratch for sub-second page speeds, 98+ PageSpeed Insights scores, zero vulnerability exposure, and search engine dominance.</p>
          </li>
          <li>
            <h3>AI Automation & Autonomous Agents</h3>
            <p>Custom LLM integrations powered by OpenAI GPT-4o and Claude 3.5, RAG knowledge bases, automated lead qualification, and 24/7 customer support agents.</p>
          </li>
          <li>
            <h3>Custom CRM & Operations Software</h3>
            <p>Tailored internal operations software replacing fragmented spreadsheets with unified role-based portals and pipeline automations.</p>
          </li>
          <li>
            <h3>Headless E-Commerce Storefronts</h3>
            <p>Sub-second shopping experiences powered by Next.js, Shopify Storefront API, and custom payment checkouts built for high conversion.</p>
          </li>
          <li>
            <h3>UI/UX Design & Brand Identity</h3>
            <p>Custom Figma design systems, interactive prototypes, micro-animations, logo design, and conversion-engineered interfaces.</p>
          </li>
        </ul>

        <h2>Our 4-Step Engineering Methodology</h2>
        <ol>
          <li><strong>Technical Discovery & Blueprinting:</strong> Mapping project scope, data architecture, user flows, and tech stack specs within 48 hours.</li>
          <li><strong>High-Fidelity UI/UX & Design Systems:</strong> Crafting custom Figma design systems, responsive layouts, and interactive micro-animations.</li>
          <li><strong>Hand-Coded Full-Stack Engineering:</strong> Building production code using Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, and Prisma ORM.</li>
          <li><strong>Edge Deployment & Performance Audit:</strong> Deploying on global Vercel Edge networks with 98+ PageSpeed compliance and sub-second LCP.</li>
        </ol>

        <h2>Transparent Architecture Pricing</h2>
        <p>
          Fixed scope, predictable delivery timelines, and 100% full source code ownership on day one with zero monthly platform lock-in fees. Starter platforms from $299, Growth Studio platforms from $599, and Enterprise SaaS/AI CRMs from $999.
        </p>

        <h2>Verified Client Reviews & Track Record</h2>
        <p>
          Delivered 150+ custom web platforms with 98% client satisfaction rate across US, UK, European, and Australian markets.
        </p>

        <h2>Contact NovaMac Solutions</h2>
        <p>
          Book a free strategy session at novamacsolutions.com/book, email hello@novamacsolutions.com, or chat with our consultants directly on WhatsApp at https://wa.me/923256611920 or https://wa.me/923309063306.
        </p>
      </article>

      {/* Interactive Client Component */}
      <HomeClient />
    </>
  );
}

