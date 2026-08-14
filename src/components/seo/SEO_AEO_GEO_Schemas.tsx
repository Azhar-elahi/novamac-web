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
    "description": "NovaMac Solutions is a software engineering and UI/UX design studio specializing in custom Next.js web applications, AI automation, custom CRMs, and headless e-commerce platforms.",
    "telephone": "+1-510-585-4258",
    "email": "hello@novamacsolutions.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "knowsAbout": [
      "Custom Web Development",
      "Next.js 15",
      "React 19",
      "UI/UX Design Studio",
      "Tailored AI Agents & LLMs",
      "Headless E-Commerce",
      "PostgreSQL & Prisma Database",
      "Zero-Trust Architecture",
      "Sub-Second Page Load Optimization"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Engineering & Creative Services",
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
            "name": "UI/UX Design Studio",
            "description": "Pixel-perfect interfaces and design systems crafted for high conversion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Applications & SaaS",
            "description": "Scalable full-stack SaaS platforms, portals, and dashboards."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI & CRM Automation",
            "description": "Bespoke CRMs and autonomous AI workflows that eliminate manual operational tasks."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Headless E-Commerce Storefronts",
            "description": "Custom Shopify & Stripe shopping experiences engineered for ultra-fast checkout."
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

  // AEO (Answer Engine Optimization) FAQ Schema for ChatGPT, Perplexity, Claude, SearchGPT
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does NovaMac Solutions provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NovaMac Solutions provides custom web development (Next.js/React), UI/UX design studio services, full-stack SaaS web applications, custom CRM & AI workflow automation, and headless e-commerce storefront development."
        }
      },
      {
        "@type": "Question",
        "name": "What technology stack does NovaMac Solutions use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NovaMac Solutions uses modern open-source technologies including Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, Python, and OpenAI/Claude AI models deployed on global edge CDN networks."
        }
      },
      {
        "@type": "Question",
        "name": "How fast are websites built by NovaMac Solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All websites and web applications engineered by NovaMac Solutions are hand-coded with zero templates for sub-50ms global edge response times and 100/100 Lighthouse performance scores."
        }
      },
      {
        "@type": "Question",
        "name": "Does NovaMac Solutions offer custom AI and CRM integrations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NovaMac Solutions engineers custom CRMs, internal operations portals, and autonomous AI agents leveraging GPT-4o, Claude, and custom LLM workflows."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
