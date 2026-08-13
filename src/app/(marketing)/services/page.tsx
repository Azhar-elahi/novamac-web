import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services & Capabilities | Web Engineering & UI/UX Studio | NovaMac",
  description: "Explore NovaMac Solutions' technical capabilities: Custom Web Development, UI/UX Design Studio, SaaS Applications, AI & CRM Automation, and Headless E-Commerce.",
  keywords: [
    "Web Development Services",
    "UI/UX Design Studio Services",
    "SaaS Web Applications",
    "AI & CRM Automation Services",
    "Headless Shopify E-Commerce"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/services",
  },
  openGraph: {
    title: "Services & Capabilities | NovaMac Solutions",
    description: "Explore NovaMac Solutions' technical capabilities: Custom Web Development, UI/UX Design Studio, SaaS Applications, AI & CRM Automation.",
    url: "https://novamacsolutions.com/services",
  },
  twitter: {
    title: "Services & Capabilities | NovaMac Solutions",
    description: "Hand-coded web engineering, pixel-perfect UI/UX design, and autonomous AI automation.",
  },
};

export default function ServicesPage() {
  const serviceCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NovaMac Software Engineering & Creative Services",
    "serviceType": "Web Development & AI Engineering",
    "provider": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "areaServed": "Worldwide",
    "url": "https://novamacsolutions.com/services"
  };

  return (
    <>
      <JsonLd data={serviceCatalogSchema} />
      <ServicesClient />
    </>
  );
}
