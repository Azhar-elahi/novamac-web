import type { Metadata } from "next";
import WorkClient from "./WorkClient";
import { prisma } from "@/lib/prisma";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Selected Case Studies & Portfolio | NovaMac Solutions",
  description: "Explore our portfolio of high-performance web platforms, SaaS applications, custom CRMs, and headless e-commerce solutions engineered for ambitious global brands.",
  keywords: [
    "NovaMac Portfolio",
    "Web Development Case Studies",
    "SaaS Application Work",
    "UI/UX Design Portfolio",
    "Next.js Projects"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/work",
  },
  openGraph: {
    title: "Selected Case Studies & Portfolio | NovaMac Solutions",
    description: "Building digital platforms, web applications, and AI systems for ambitious brands worldwide.",
    url: "https://novamacsolutions.com/work",
  },
  twitter: {
    title: "Portfolio & Case Studies | NovaMac Solutions",
    description: "High-stakes web applications, custom CRMs, and scalable digital products.",
  },
};

export default async function WorkPage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({ orderBy: { createdAt: "desc" } });
  } catch (e) {
    console.warn("Database unavailable during work page render:", e);
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Case Studies & Portfolio | NovaMac Solutions",
    "url": "https://novamacsolutions.com/work",
    "description": "Selected case studies and web development portfolio from NovaMac Solutions."
  };

  return (
    <>
      <JsonLd data={portfolioSchema} />
      <WorkClient projects={projects} />
    </>
  );
}
