import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EXECUTIVE_PORTFOLIO_DATA, getExecutiveProjectById } from "@/data/portfolioData";
import ProjectDetailClient from "./ProjectDetailClient";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return EXECUTIVE_PORTFOLIO_DATA.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = getExecutiveProjectById(id);
  if (!project) return {};

  return {
    title: `${project.clientName} Case Study & Screenshots | NovaMac Solutions`,
    description: project.summary,
    keywords: [
      project.title,
      project.clientName,
      project.category,
      "NovaMac Case Study",
      "Software Architecture"
    ],
    alternates: {
      canonical: `https://novamacsolutions.com/work/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | NovaMac Solutions`,
      description: project.summary,
      url: `https://novamacsolutions.com/portfolio/${project.id}`,
    },
    twitter: {
      title: `${project.title} | NovaMac Solutions`,
      description: project.summary,
    },
  };
}

export default async function DedicatedProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getExecutiveProjectById(id);
  if (!project) notFound();

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "creator": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "description": project.summary,
    "url": `https://novamacsolutions.com/portfolio/${project.id}`
  };

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
        "name": "Portfolio",
        "item": "https://novamacsolutions.com/portfolio",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://novamacsolutions.com/portfolio/${project.id}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProjectDetailClient project={project} />
    </>
  );
}
