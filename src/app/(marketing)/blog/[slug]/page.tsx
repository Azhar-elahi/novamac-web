import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { marked } from "marked";
export const dynamic = "force-dynamic";

import { MASTER_BLOG_POSTS } from "@/lib/blog-data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  let post: any = null;
  try {
    post = await prisma.blogPost.findUnique({
      where: { slug: resolvedParams.slug }
    });
  } catch (e) {
    // DB query notice fallback
  }

  if (!post) {
    post = MASTER_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  }

  if (!post) {
    return { title: "Post Not Found | NovaMac Solutions" };
  }

  const title = post.seoTitle || `${post.title} | NovaMac Solutions`;
  const description = post.seoDesc || post.excerpt || "Read this article on NovaMac Solutions.";
  const canonicalUrl = `https://novamacsolutions.com/blog/${post.slug}`;
  const ogImage = post.coverImage ? (post.coverImage.startsWith("http") ? post.coverImage : `https://novamacsolutions.com${post.coverImage}`) : "https://novamacsolutions.com/og-image.png";

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post: any = null;
  try {
    post = await prisma.blogPost.findUnique({
      where: { slug: resolvedParams.slug }
    });
  } catch (e) {
    // DB query notice fallback
  }

  if (!post) {
    post = MASTER_BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  }

  if (!post) {
    notFound();
  }

  const datePublished = post.createdAt ? new Date(post.createdAt).toISOString() : new Date().toISOString();
  const dateModified = post.updatedAt ? new Date(post.updatedAt).toISOString() : datePublished;
  const postImageUrl = post.coverImage ? (post.coverImage.startsWith("http") ? post.coverImage : `https://novamacsolutions.com${post.coverImage}`) : "https://novamacsolutions.com/og-image.png";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.seoTitle || post.title,
    "description": post.seoDesc || post.excerpt,
    "image": postImageUrl,
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://novamacsolutions.com/blog/${post.slug}`
    },
    "author": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://novamacsolutions.com/logo-500x500.png"
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

  const contentHtml = await marked.parse(post.content || "");

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 md:px-12 xl:px-20 bg-[#FAF2F2] text-[#202020]">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article className="max-w-4xl mx-auto">
        <Link href="/blog" className="hover-trigger inline-flex items-center gap-2 text-sm text-[#FF5733] hover:text-[#202020] transition-colors mb-10 font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-4 text-xs text-[#211f1a]/55 uppercase tracking-widest font-mono mb-6">
            <span className="px-3 py-1 bg-[#FF5733]/10 text-[#FF5733] font-bold rounded-full">
              {post.category || "Engineering"}
            </span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="font-heading font-extrabold text-[clamp(2.2rem,5vw,3.8rem)] tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-[#3A3A3A] font-light leading-relaxed border-l-4 border-[#FF5733] pl-5 py-1">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-white mb-14 border border-black/10 shadow-[0_20px_50px_-20px_rgba(20,18,10,0.15)]">
            <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover" priority />
          </div>
        )}

        <div 
          className="prose prose-lg max-w-none text-[#252525] font-normal leading-relaxed
            prose-headings:font-extrabold prose-headings:text-[#1A1A1A] prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-[#E8D5D5] prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-base md:prose-p:text-lg prose-p:leading-8 prose-p:mb-6
            prose-strong:text-[#111111] prose-strong:font-bold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-li:my-2 prose-li:text-base md:prose-li:text-lg
            prose-table:w-full prose-table:my-8 prose-table:border-collapse prose-table:bg-white prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-sm
            prose-th:bg-[#202020] prose-th:text-white prose-th:py-3.5 prose-th:px-4 prose-th:text-left prose-th:font-semibold prose-th:text-sm
            prose-td:py-3.5 prose-td:px-4 prose-td:border-b prose-td:border-[#EFE5E5] prose-td:text-sm prose-td:text-[#333333]
            prose-pre:bg-[#151515] prose-pre:text-[#F3F3F3] prose-pre:p-5 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:border prose-pre:border-black/20
            prose-code:bg-white/80 prose-code:text-[#D14324] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-a:text-[#FF5733] prose-a:font-semibold prose-a:underline hover:prose-a:text-[#202020]"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        {/* CTA BOX */}
        <div className="mt-16 p-8 md:p-10 bg-[#1E1E1E] text-white rounded-3xl border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider block mb-2">ENGINEERING DISCOVERY CALL</span>
            <h3 className="text-2xl font-bold mb-2">Need This Architecture Implemented in Your Business?</h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Talk directly with NovaMac senior engineers. We will review your workflows, audit your current software costs, and deliver a zero-lock-in migration roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap px-6 py-3.5 bg-[#FF5733] hover:bg-[#ff6c4b] text-white text-sm font-bold uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-[#FF5733]/25"
          >
            Book 15-Min Call
          </Link>
        </div>
      </article>
    </main>
  );
}
