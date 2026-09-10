import React from "react";

export function SEO_AEO_GEO_Schemas() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://novamacsolutions.com/#organization",
    "name": "NovaMac Solutions",
    "legalName": "NovaMac Solutions Studio",
    "url": "https://novamacsolutions.com",
    "logo": "https://novamacsolutions.com/logo.png",
    "image": "https://novamacsolutions.com/og-image.png",
    "description": "NovaMac Solutions is a digital engineering studio specializing in custom web platforms, software, CRM/ERP systems, and AI automation.",
    "email": "hello@novamacsolutions.com",
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/novamacsolutions?stkn=eHE5Yjl5ZGgxOXRj",
      "https://www.linkedin.com/company/novamac-solutions/",
      "https://x.com/NovamacSolution",
      "https://github.com/Azhar-elahi/novamac-web"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@novamacsolutions.com",
        "url": "https://novamacsolutions.com/contact",
        "availableLanguage": ["English"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "hello@novamacsolutions.com",
        "url": "https://novamacsolutions.com/contact",
        "availableLanguage": ["English"]
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "548 Market St #87492",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94104",
      "addressCountry": "US"
    },
    "areaServed": [
      "United States",
      "United Kingdom",
      "Canada",
      "Western Europe",
      "United Arab Emirates",
      "Middle East",
      "Saudi Arabia",
      "Pakistan",
      "Australia",
      "Worldwide"
    ],
    "knowsAbout": [
      "Custom Web Development",
      "Next.js 15 & React 19",
      "UI/UX Experience Design",
      "AI Development & Automation",
      "CRM & ERP Business Systems",
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
            "name": "AI Development & Automation",
            "description": "Custom LLM integrations, RAG engines, and 24/7 autonomous AI operational workflows."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom CRM & Business Systems",
            "description": "Tailored internal operations software replacing spreadsheets with automated role-based portals."
          }
        }
      ]
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://novamacsolutions.com/#software",
    "name": "NovaMac Digital Product Platform Engine",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, Cloud, Serverless Edge",
    "description": "High-performance custom Next.js web application architecture, custom CRMs, and AI agent workflows engineered by NovaMac Solutions.",
    "url": "https://novamacsolutions.com",
    "provider": {
      "@id": "https://novamacsolutions.com/#organization"
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
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://novamacsolutions.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://novamacsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://novamacsolutions.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Work",
        "item": "https://novamacsolutions.com/work"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Process",
        "item": "https://novamacsolutions.com/process"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How NovaMac Solutions Builds Custom Web Software & Systems",
    "description": "Our 6-step engineering methodology for delivering sub-second Next.js web applications, business systems, and AI workflows.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "1. Discover & Research",
        "text": "Understand business goals, target audience, and current operational bottlenecks."
      },
      {
        "@type": "HowToStep",
        "name": "2. Plan & Scope",
        "text": "Define exact deliverables, milestones, tech stack selection, and milestone schedule."
      },
      {
        "@type": "HowToStep",
        "name": "3. UI/UX & Systems Architecture",
        "text": "Craft modern, high-converting interfaces and robust backend system blueprints."
      },
      {
        "@type": "HowToStep",
        "name": "4. Build & Integrate",
        "text": "Develop Next.js frontend engineering, API development, and software integration."
      },
      {
        "@type": "HowToStep",
        "name": "5. QA & Deployment",
        "text": "Perform speed optimization, security audits, and production domain launch."
      },
      {
        "@type": "HowToStep",
        "name": "6. Handoff & Growth",
        "text": "Transfer 100% repository & IP ownership, documentation, and post-launch support."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does NovaMac Solutions offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NovaMac Solutions offers custom web development (Next.js/React), custom software engineering, CRM & ERP business systems, AI development & automation, digital marketing, and SaaS product engineering."
        }
      },
      {
        "@type": "Question",
        "name": "How is project pricing determined?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is transparent and project-scoped based on your technical requirements with 100% source code ownership and zero monthly lock-in fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do clients get 100% ownership of the source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, upon project completion NovaMac Solutions transfers full 100% ownership of the Git repository, design assets, and database schemas directly to the client."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
