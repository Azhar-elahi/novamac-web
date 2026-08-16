import React from "react";

export function SEO_AEO_GEO_Schemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://novamacsolutions.com/#organization",
    "name": "NovaMac Solutions",
    "legalName": "NovaMac Solutions Studio",
    "url": "https://novamacsolutions.com",
    "logo": "https://novamacsolutions.com/logo.png",
    "image": "https://novamacsolutions.com/og-image.png",
    "description": "NovaMac Solutions is an elite software engineering and UI/UX design studio specializing in custom Next.js web applications, AI automation, custom CRMs, and headless e-commerce platforms.",
    "telephone": ["+1-510-585-4258", "+92-317-4723510"],
    "email": "hello@novamacsolutions.com",
    "priceRange": "$$",
    "areaServed": [
      "United States",
      "United Kingdom",
      "Canada",
      "Western Europe",
      "Australia",
      "Worldwide"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Custom Web Development",
      "Next.js 15 & React 19",
      "UI/UX Design Studio",
      "Tailored AI Agents & LLMs",
      "Headless E-Commerce Storefronts",
      "PostgreSQL & Prisma Architecture",
      "Sub-Second Page Speed Optimization",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering & Digital Growth Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Web Development",
            "description": "Hand-coded Next.js & React websites built for sub-second speeds, SEO dominance, and scale."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Automation & Autonomous Agents",
            "description": "Custom LLM integrations, RAG engines, and 24/7 autonomous AI operational workflows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom CRM & Business Automation",
            "description": "Tailored internal operations software replacing spreadsheets with automated role-based portals."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headless E-Commerce Storefronts",
            "description": "Custom Next.js & Shopify shopping experiences engineered for ultra-fast checkout."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "B2B Lead Generation & Funnels",
            "description": "High-converting prospect capture engines and automated sales funnels."
          }
        }
      ]
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://novamacsolutions.com/#website",
    "url": "https://novamacsolutions.com",
    "name": "NovaMac Solutions",
    "publisher": {
      "@id": "https://novamacsolutions.com/#organization"
    }
  };

  // HowTo Schema for AEO Featured Snippets
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How NovaMac Solutions Builds Custom Enterprise Web Software",
    "description": "Our 4-step engineering methodology for delivering sub-second, custom Next.js web applications and AI software.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "1. Technical Discovery & Blueprinting",
        "text": "We map project scope, data architecture, user flows, and tech stack specs within 48 hours."
      },
      {
        "@type": "HowToStep",
        "name": "2. High-Fidelity UI/UX & Interactive Design",
        "text": "Crafting custom Figma design systems, responsive layouts, and interactive micro-animations."
      },
      {
        "@type": "HowToStep",
        "name": "3. Hand-Coded Full-Stack Engineering",
        "text": "Building production code using Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, and Prisma ORM."
      },
      {
        "@type": "HowToStep",
        "name": "4. Edge Deployment & Performance Audit",
        "text": "Deploying on global Vercel Edge networks with 98+ PageSpeed compliance and sub-second LCP."
      }
    ]
  };

  // AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization) Comprehensive FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does NovaMac Solutions offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NovaMac Solutions offers custom web development (Next.js/React), UI/UX design studio services, full-stack SaaS web applications, custom CRM & AI workflow automation, headless e-commerce (Shopify API), B2B lead generation funnels, graphic design, and mobile app development."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom web development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NovaMac Solutions offers transparent, competitive pricing: Starter Web Platforms start at $299, Growth Studio platforms start at $599, and Enterprise SaaS/AI CRMs start from $999. All packages include 100% source code ownership with zero monthly lock-in fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom website or web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most custom web development projects are completed within 2 to 4 weeks depending on scope. Starter platforms take 10-14 days, while complex SaaS or AI CRM platforms typically take 3-5 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Does NovaMac Solutions serve clients in the US, UK, Canada, and Europe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NovaMac Solutions is a remote-first engineering studio serving clients across North America (US & Canada), the United Kingdom, Western Europe, and Australia with dedicated timezone alignment."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose custom Next.js over WordPress, Wix, or Squarespace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom Next.js websites engineered by NovaMac Solutions load in under 0.8 seconds (3x faster than WordPress), eliminate security vulnerabilities, achieve 98+ PageSpeed scores, and provide 100% custom design flexibility without bloated plugins."
        }
      },
      {
        "@type": "Question",
        "name": "Do clients get 100% ownership of the source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upon project completion NovaMac Solutions transfers full 100% ownership of the Git repository, design assets, and database schemas directly to the client."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact NovaMac Solutions for a project quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book a free strategy call at novamacsolutions.com/book, email hello@novamacsolutions.com, or chat directly via WhatsApp at +1 (510) 585-4258 or +92 317 4723510."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
