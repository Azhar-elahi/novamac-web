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
    </>
  );
}
