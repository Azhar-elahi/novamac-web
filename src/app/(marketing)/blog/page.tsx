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

import { MASTER_BLOG_POSTS } from "@/lib/blog-data";

export default async function BlogPage() {
  let dbPosts: any[] = [];
  try {
    dbPosts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" }
    });
  } catch (err) {
    // DB fallback
  }

  // Combine MASTER_BLOG_POSTS with any extra custom DB posts ensuring no duplicate slugs
  const allPosts = [...MASTER_BLOG_POSTS];
  if (dbPosts && dbPosts.length > 0) {
    for (const dp of dbPosts) {
      if (!allPosts.some((p) => p.slug === dp.slug)) {
        allPosts.push({
          id: dp.id,
          slug: dp.slug,
          title: dp.title,
          excerpt: dp.excerpt,
          content: dp.content,
          coverImage: dp.coverImage,
          category: dp.category || "Engineering",
          seoTitle: dp.seoTitle,
          seoDesc: dp.seoDesc,
          createdAt: dp.createdAt ? dp.createdAt.toISOString() : new Date().toISOString(),
        });
      }
    }
  }

  return <BlogClient posts={allPosts as any} />;
}

