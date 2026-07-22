import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seoTitle || `${post.title} | NovaMac`,
    description: post.seoDesc || post.excerpt || "Read this article on NovaMac.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug }
  });

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle || post.title,
    "description": post.seoDesc || post.excerpt,
    "image": post.coverImage || "https://novamacsolutions.com/favicon.ico",
    "datePublished": post.createdAt.toISOString(),
    "dateModified": post.updatedAt.toISOString(),
    "author": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://novamacsolutions.com/favicon.ico"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://novamacsolutions.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://novamacsolutions.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://novamacsolutions.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#fafafc] text-[#f0f0f5]">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        
        <header className="mb-14">
          <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            <span>Published</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.coverImage && (
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-secondary/50 mb-14 border border-slate-200">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none font-light leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </article>
    </main>
  );
}
