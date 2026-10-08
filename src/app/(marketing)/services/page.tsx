import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Engineering Services: Custom Web, Software, ERP, POS & CRM | NovaMac Solutions",
  description: "Enterprise software engineering & digital systems: Custom Next.js Web Development, Bespoke Software, Custom ERP Operations, Cloud POS Systems, and CRM Pipelines. Serving US, UK, EU & Middle East.",
  keywords: [
    "custom software development services",
    "custom web development company",
    "ERP software development",
    "cloud POS system development",
    "custom CRM development services",
    "AI workflow automation studio",
    "SaaS MVP engineering",
    "Next.js web development agency"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/services",
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
    title: "Engineering Services: Custom Web, Software, ERP, POS & CRM | NovaMac Solutions",
    description: "Enterprise software engineering: Custom Next.js Web Development, Bespoke Software, Custom ERP, Cloud POS Systems, and CRM Pipelines.",
    url: "https://novamacsolutions.com/services",
    locale: "en_US",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Services & Capabilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Services: Custom Web, Software, ERP, POS & CRM | NovaMac",
    description: "Enterprise software engineering: Custom Next.js Web Development, Bespoke Software, Custom ERP, Cloud POS Systems, and CRM Pipelines.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default function ServicesPage() {
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NovaMac Digital Software & Systems Engineering",
    "serviceType": "Custom Web, Software, ERP, POS & CRM Engineering",
    "provider": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Germany" },
      { "@type": "Country", "name": "Pakistan" }
    ],
    "url": "https://novamacsolutions.com/services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Core Enterprise Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "url": "https://novamacsolutions.com/services/website-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Engineering",
            "url": "https://novamacsolutions.com/services/custom-software"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom CRM Development",
            "url": "https://novamacsolutions.com/services/crm-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom ERP Systems",
            "url": "https://novamacsolutions.com/services/erp-development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom POS Software & Point of Sale Systems",
            "url": "https://novamacsolutions.com/services/pos-development"
          }
        }
      ]
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
        "item": "https://novamacsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://novamacsolutions.com/services",
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceCatalogSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ServicesClient />
    </>
  );
}
