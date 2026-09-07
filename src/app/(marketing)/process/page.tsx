import type { Metadata } from "next";
import ProcessClient from "./ProcessClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Process | 6-Step Engineering Methodology | NovaMac Solutions",
  description: "Learn about NovaMac Solutions' 6-step engineering methodology — transparent project planning, custom Next.js development, QA testing, and 100% IP transfer.",
  keywords: [
    "NovaMac Process",
    "Software Engineering Methodology",
    "Web Development Process",
    "Next.js Development Steps",
    "Agile Software Delivery"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/process",
  },
  openGraph: {
    title: "Our Process | 6-Step Engineering Methodology | NovaMac Solutions",
    description: "Learn about NovaMac Solutions' 6-step engineering methodology — transparent project planning, custom Next.js development, QA testing, and 100% IP transfer.",
    url: "https://novamacsolutions.com/process",
  },
  twitter: {
    title: "Our Engineering Process | NovaMac Solutions",
    description: "Discover how NovaMac delivers custom web apps and software in 6 structured steps.",
  },
};

export default function ProcessPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "NovaMac Solutions 6-Step Engineering Process",
    "description": "How NovaMac Solutions designs, builds, and deploys high-performance web applications and custom software.",
    "step": [
      { "@type": "HowToStep", "name": "Discover & Research", "position": 1 },
      { "@type": "HowToStep", "name": "Plan & Scope", "position": 2 },
      { "@type": "HowToStep", "name": "UI/UX & Systems Architecture", "position": 3 },
      { "@type": "HowToStep", "name": "Build & Integrate", "position": 4 },
      { "@type": "HowToStep", "name": "QA & Deployment", "position": 5 },
      { "@type": "HowToStep", "name": "Handoff & Growth", "position": 6 }
    ]
  };

  return (
    <>
      <JsonLd data={processSchema} />
      <ProcessClient />
    </>
  );
}
