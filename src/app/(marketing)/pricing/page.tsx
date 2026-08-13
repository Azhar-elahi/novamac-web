import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Transparent Architecture Pricing | Web & AI Engineering | NovaMac",
  description: "Honest, fixed-scope pricing for custom Next.js web platforms, UI/UX design studio packages, and enterprise SaaS solutions. Zero hidden fees.",
  keywords: [
    "Web Development Pricing",
    "Next.js Development Cost",
    "UI/UX Design Pricing",
    "Custom SaaS Pricing",
    "NovaMac Solutions Pricing"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/pricing",
  },
  openGraph: {
    title: "Transparent Architecture Pricing | NovaMac Solutions",
    description: "Fixed scope, predictable delivery timelines, and 100% full source code ownership.",
    url: "https://novamacsolutions.com/pricing",
  },
  twitter: {
    title: "Pricing & Packages | NovaMac Solutions",
    description: "Honest, predictable pricing with zero hidden fees.",
  },
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing & Packages | NovaMac Solutions",
    "url": "https://novamacsolutions.com/pricing",
    "description": "Transparent pricing structure for custom web development, UI/UX design, and AI application engineering."
  };

  return (
    <>
      <JsonLd data={pricingSchema} />
      <PricingClient />
    </>
  );
}
