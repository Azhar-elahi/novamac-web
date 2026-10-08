import type { Metadata } from "next";
import RealEstateClient from "./RealEstateClient";

import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Real Estate Wholesaling Systems & Automation | NovaMac Solutions",
  description: "Custom CRM, automated lead pipelines, skip-tracing workflows, and buyer-matching systems built for real estate wholesalers. Stop losing deals to spreadsheets.",
  keywords: [
    "Real Estate Wholesaling CRM",
    "Wholesaling Automation",
    "Skip Tracing Pipeline",
    "Dispositions Matching Software",
    "NovaMac Real Estate Systems"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/industries/real-estate-wholesaling",
  },
  openGraph: {
    title: "Real Estate Wholesaling Systems & Automation | NovaMac Solutions",
    description: "Custom CRM, automated lead pipelines, skip-tracing workflows, and buyer-matching systems built for real estate wholesalers.",
    url: "https://novamacsolutions.com/industries/real-estate-wholesaling",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Wholesaling Systems by NovaMac Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Wholesaling Systems & Automation | NovaMac Solutions",
    description: "Custom CRM, automated lead pipelines, and buyer-matching systems for wholesalers.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default function RealEstateWholesalingPage() {
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
        "name": "Industries",
        "item": "https://novamacsolutions.com/industries",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Real Estate Wholesaling",
        "item": "https://novamacsolutions.com/industries/real-estate-wholesaling",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <RealEstateClient />
    </>
  );
}

