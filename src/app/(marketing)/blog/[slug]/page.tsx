import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    "image": post.coverImage || "https://novamacsolutions.com/og-image.png",
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
        "url": "https://novamacsolutions.com/apple-touch-icon.png"
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
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-12 xl:px-20 bg-[#f6f1e7] text-[#211f1a] ">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="hover-trigger inline-flex items-center gap-2 text-sm text-[#211f1a]/55 hover:text-[#2f6b45] transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-4 text-xs text-[#211f1a]/45 uppercase tracking-widest mb-6">
            <span>Published</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 className="font-heading font-medium text-[clamp(2.2rem,6vw,4.4rem)] tracking-[-0.01em] leading-[1.05] mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-[#211f1a]/60 font-light leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-white mb-14 border border-black/10 shadow-[0_20px_50px_-20px_rgba(20,18,10,0.2)]">
            <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" priority />
          </div>
        )}

        <div className="prose prose-lg max-w-none font-light leading-relaxed whitespace-pre-wrap prose-headings:font-heading prose-a:text-[#2f6b45] text-[#211f1a]/80">
          {post.content}
        </div>
      </article>
    </main>
  );
}
