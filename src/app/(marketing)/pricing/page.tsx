import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Transparent Pricing & Investment Tiers | NovaMac Solutions",
  description: "Transparent, project-scoped pricing for custom Next.js web applications, business CRMs, AI automations, and SaaS products. 100% source code ownership.",
  keywords: [
    "NovaMac Pricing",
    "Web Development Cost",
    "Custom CRM Pricing",
    "AI Automation Cost",
    "Next.js Development Rates"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/pricing",
  },
  openGraph: {
    title: "Transparent Pricing & Investment Tiers | NovaMac Solutions",
    description: "Transparent project-scoped pricing with 100% full source code ownership and zero monthly lock-in fees.",
    url: "https://novamacsolutions.com/pricing",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions Transparent Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing & Investment Tiers | NovaMac Solutions",
    description: "Transparent project-scoped pricing with 100% source code ownership.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default function PricingPage() {
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
        "name": "Pricing",
        "item": "https://novamacsolutions.com/pricing",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <PricingClient />
    </>
  );
}
