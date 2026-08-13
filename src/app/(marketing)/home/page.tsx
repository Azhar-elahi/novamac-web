import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
  description: "NovaMac Solutions builds custom Next.js web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms engineered for sub-second speeds.",
  keywords: [
    "NovaMac Solutions",
    "Custom Web Development Studio",
    "Next.js 15 Engineers",
    "UI/UX Design Agency",
    "AI & CRM Workflows",
    "Headless Shopify Storefronts"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/home",
  },
  openGraph: {
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms.",
    url: "https://novamacsolutions.com/home",
  },
  twitter: {
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms.",
  },
};

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "NovaMac Solutions Home",
    "url": "https://novamacsolutions.com/home",
    "description": "NovaMac Solutions homepage featuring custom web development, UI/UX studio capabilities, SaaS web applications, and AI workflow automation."
  };

  return (
    <>
      <JsonLd data={homeSchema} />
      <HomeClient />
    </>
  );
}
