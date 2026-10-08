import React from "react";
import { Metadata } from "next";
import MiddleEastLandingPage from "../middle-east/page";

export const metadata: Metadata = {
  title: "Custom Web & Software Development Agency Dubai, UAE | NovaMac Solutions",
  description: "Elite Next.js web applications, custom real estate CRMs, and bilingual ERP engineering for Dubai, Abu Dhabi & UAE enterprises. Gulf Standard Time (GST) alignment & direct WhatsApp desk.",
  keywords: [
    "custom software development agency Dubai",
    "hire Next.js developers UAE",
    "real estate CRM development Dubai",
    "custom ERP software Abu Dhabi",
    "bilingual Arabic English web applications",
    "web development company Dubai"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/ae",
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "en-AE": "https://novamacsolutions.com/ae",
      "en-PK": "https://novamacsolutions.com/pk",
      "x-default": "https://novamacsolutions.com",
    },
  },
  openGraph: {
    title: "Custom Web & Software Development Agency Dubai, UAE | NovaMac Solutions",
    description: "Elite Next.js web applications, custom real estate CRMs, and bilingual ERP engineering for UAE enterprises.",
    url: "https://novamacsolutions.com/ae",
    locale: "en_AE",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions UAE Engineering Studio",
      },
    ],
  },
};

export default function AELandingPage() {
  return <MiddleEastLandingPage />;
}
