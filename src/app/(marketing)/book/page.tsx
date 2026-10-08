import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Senior Software Architects | NovaMac Solutions",
  description: "Schedule a free 30-minute technical discovery call with senior software architects at NovaMac Solutions to review your web app, CRM, or AI goals.",
  keywords: [
    "Book NovaMac Call",
    "Schedule Discovery Call",
    "Hire Next.js Engineers",
    "Web Architecture Consultation"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/book",
  },
  openGraph: {
    title: "Book a Strategy Call | NovaMac Solutions",
    description: "Schedule a free 30-minute technical discovery call with senior software architects at NovaMac Solutions.",
    url: "https://novamacsolutions.com/book",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Strategy Call with NovaMac Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Strategy Call | NovaMac Solutions",
    description: "Schedule a free 30-minute technical discovery call with senior software architects.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default function BookPage() {
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
        "name": "Book a Call",
        "item": "https://novamacsolutions.com/book",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <BookPageClient />
    </>
  );
}

