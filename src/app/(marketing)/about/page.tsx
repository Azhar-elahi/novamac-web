import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us | Senior Engineering & UI/UX Studio | NovaMac Solutions",
  description: "NovaMac Solutions is a remote-first software engineering collective building sub-second Next.js web applications, custom CRMs, and AI automation for ambitious brands.",
  keywords: [
    "About NovaMac Solutions",
    "Software Engineering Studio",
    "Senior Web Developers",
    "UI/UX Design Team",
    "Custom Next.js Agency"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/about",
  },
  openGraph: {
    title: "About Us | Senior Engineering & UI/UX Studio | NovaMac Solutions",
    description: "NovaMac Solutions is a remote-first software engineering collective building sub-second Next.js web applications, custom CRMs, and AI automation.",
    url: "https://novamacsolutions.com/about",
  },
  twitter: {
    title: "About Us | NovaMac Solutions",
    description: "Senior web developers and UI/UX designers building high-performance digital products.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About NovaMac Solutions",
    "url": "https://novamacsolutions.com/about",
    "description": "Learn about NovaMac Solutions — our engineering manifesto, core values, zero-template philosophy, and global edge architecture."
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
      <AboutClient />
    </>
  );
}
