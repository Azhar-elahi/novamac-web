import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Industry Solutions & Vertical Systems | NovaMac Solutions",
  description: "Specialized CRM systems, lead automation, and operational software tailored for distinct business sectors — starting with real estate wholesaling.",
  keywords: [
    "NovaMac Industries",
    "Real Estate Software",
    "Wholesaling CRM",
    "B2B Industry Software",
    "Vertical SaaS Engineering"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/industries",
  },
  openGraph: {
    title: "Industry Solutions & Vertical Systems | NovaMac Solutions",
    description: "Specialized CRM systems, lead automation, and operational software tailored for distinct business sectors.",
    url: "https://novamacsolutions.com/industries",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Industry Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Solutions & Vertical Systems | NovaMac Solutions",
    description: "Specialized CRM systems, lead automation, and operational software.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default function IndustriesPage() {
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
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <IndustriesClient />
    </>
  );
}

