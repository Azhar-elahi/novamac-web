import { prisma } from "@/lib/prisma";
import BlogClient from "./BlogClient";

export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Blog & Software Insights | NovaMac Solutions",
  description: "Actionable engineering insights, Next.js architecture guides, CRM ROI breakdowns, and AI automation workflows from NovaMac Solutions.",
  keywords: [
    "NovaMac Blog",
    "Next.js vs WordPress",
    "Custom CRM ROI",
    "AI Automation Engineering",
    "Headless E-Commerce Guides"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/blog",
  },
  openGraph: {
    title: "Engineering Blog & Software Insights | NovaMac Solutions",
    description: "Actionable engineering insights, Next.js architecture guides, CRM ROI breakdowns, and AI automation workflows.",
    url: "https://novamacsolutions.com/blog",
    images: [
      {
        url: "https://novamacsolutions.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Engineering Blog & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Software Insights | NovaMac Solutions",
    description: "Actionable engineering insights, Next.js architecture guides, and AI automation workflows.",
    images: ["https://novamacsolutions.com/og-image.png"],
  },
};

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" }
  });

  return <BlogClient posts={posts} />;
}

