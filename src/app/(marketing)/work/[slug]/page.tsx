import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS_DATA, getProjectBySlug } from "@/data/projectsData";
import ProjectDetailClient from "@/components/work/ProjectDetailClient";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Case Study & Architecture | NovaMac`,
    description: project.shortDesc,
    keywords: [
      project.title,
      project.category,
      "NovaMac Case Study",
      "Software System Architecture"
    ],
    alternates: {
      canonical: `https://novamacsolutions.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | NovaMac Solutions`,
      description: project.shortDesc,
      url: `https://novamacsolutions.com/work/${project.slug}`,
    },
    twitter: {
      title: `${project.title} | NovaMac Solutions`,
      description: project.shortDesc,
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
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
    "description": project.shortDesc,
    "url": `https://novamacsolutions.com/work/${project.slug}`
  };

  return (
    <>
      <JsonLd data={caseStudySchema} />
      <ProjectDetailClient project={project} />
    </>
  );
}
