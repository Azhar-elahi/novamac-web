"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@prisma/client";

const FALLBACK_ARTICLES = [
  {
    id: "fb-1",
    slug: "nextjs-15-performance-guide",
    title: "Engineering Sub-Second Next.js 15 Web Applications",
    excerpt: "A deep dive into server components, edge caching, and image optimization strategies that consistently yield <50ms response SLA.",
    createdAt: new Date("2026-02-15"),
    category: "Engineering",
  },
  {
    id: "fb-2",
    slug: "figma-to-code-design-systems",
    title: "Building Figma Component Systems That Translate 1:1 to React",
    excerpt: "How we bridge the gap between UI/UX design and production code using structured token architecture and atomic component primitives.",
    createdAt: new Date("2026-02-01"),
    category: "UI/UX Design",
  },
  {
    id: "fb-3",
    slug: "ai-crm-workflow-automation",
    title: "Architecting Autonomous AI Workflows for B2B Operations",
    excerpt: "How custom internal portals and OpenAI API integrations eliminate repetitive manual data entry and streamline team operations.",
    createdAt: new Date("2026-01-20"),
    category: "AI & Automation",
  },
];

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  const displayPosts = posts && posts.length > 0 ? posts : (FALLBACK_ARTICLES as any[]);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-24 pb-20 font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-[#F0DCDC] overflow-hidden min-h-[45vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 pointer-events-none transform-gpu"
          >
            <source src="/videos/city-traffic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            INSIGHTS & ENGINEERING ARTICLES
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Technical Insights & Agency Articles.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed max-w-2xl">
            Practical breakdowns on web performance, UI/UX architecture, and AI automation from our engineering studio.
          </p>
        </motion.div>
      </section>

      {/* ARTICLES LIST */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="space-y-8">
          {displayPosts.map((post, idx) => (
            <motion.article
              key={post.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="bg-white border border-[#F0DCDC] rounded-3xl p-8 md:p-10 shadow-sm hover:border-[#FF5733] transition-all group"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-mono text-slate-500">
                <span className="px-3 py-1 bg-[#FF5733]/10 text-[#FF5733] font-bold rounded-full uppercase">
                  {post.category || "Engineering"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-[#202020] mb-4 tracking-tight group-hover:text-[#FF5733] transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug || "nextjs-15-performance-guide"}`}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF5733] group-hover:gap-3 transition-all"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

    </div>
  );
}
