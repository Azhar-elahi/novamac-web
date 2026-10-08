import type { Metadata } from "next";
import AuditClientPage from "./AuditClientPage";

export const metadata: Metadata = {
  title: "Free Website Growth Audit & Lead Assessment | NovaMac Solutions",
  description: "Enter your domain for a free technical SEO, mobile friction, speed target, and conversion audit by NovaMac Solutions.",
  alternates: {
    canonical: "https://novamacsolutions.com/audit",
  },
  openGraph: {
    title: "Free Website Growth Audit | NovaMac Solutions",
    description: "Discover what's holding back your website revenue and conversion flow.",
    url: "https://novamacsolutions.com/audit",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Free Website Growth Audit by NovaMac Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Growth Audit | NovaMac Solutions",
    description: "Enter your domain for a free technical SEO, mobile friction, and speed audit.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

import { JsonLd } from "@/components/seo/JsonLd";

export default function AuditPage() {
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
        "name": "Free Growth Audit",
        "item": "https://novamacsolutions.com/audit",
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <AuditClientPage />
    </>
  );
}
