import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Executive Client Portfolio & Systems Showcase | NovaMac Solutions",
  description: "Explore live client storefronts, B2B digital catalogs, and running enterprise SaaS applications engineered by NovaMac Solutions.",
  keywords: [
    "NovaMac Executive Portfolio",
    "AB Collections Storefront",
    "MSB Acrylic B2B Catalog",
    "The Finery Store",
    "Nexora One Enterprise SaaS",
    "ERP POS System",
    "Next.js 15 Web Applications",
    "Headless E-Commerce"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/portfolio",
  },
  openGraph: {
    title: "Executive Client Portfolio | NovaMac Solutions",
    description: "Interactive live preview of client websites, e-commerce storefronts, B2B catalogs, and enterprise cloud software.",
    url: "https://novamacsolutions.com/portfolio",
  },
  twitter: {
    title: "Executive Client Portfolio | NovaMac Solutions",
    description: "Interactive live preview of client websites, e-commerce storefronts, B2B catalogs, and enterprise cloud software.",
  },
};

export default function StandalonePortfolioPage() {
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "NovaMac Solutions Executive Client Portfolio",
    "publisher": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "description": "Comprehensive portfolio showcase of live client websites, e-commerce storefronts, B2B catalogs, and cloud software systems.",
    "url": "https://novamacsolutions.com/portfolio"
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
        "name": "Portfolio",
        "item": "https://novamacsolutions.com/portfolio",
      },
    ],
  };

  return (
    <>
      <JsonLd data={portfolioSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PortfolioClient />
    </>
  );
}
