"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@prisma/client";

const customEase: any = [0.16, 1, 0.3, 1];

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#05060c] text-white gradient-mesh">
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: customEase }}
          className="mb-24"
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-sm border border-border text-foreground bg-secondary/50 text-xs font-semibold tracking-widest uppercase">
            Insights & News
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight leading-[1.1]">Our Blog.</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light">
            Thoughts, technical tutorials, and industry insights from the development and design team at NovaMac.
          </p>
        </motion.div>

        <div className="space-y-12">
          {posts.map((post, idx) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, ease: customEase }}
                className="group border-b border-border/50 pb-12 cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs font-mono text-muted-foreground">
                  <span className="font-semibold text-foreground uppercase tracking-widest">Update</span>
                  <span>•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4 tracking-tight text-white group-hover:text-brand transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-base font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="text-muted-foreground py-10 text-lg">No blog posts yet.</div>
          )}
        </div>
      </div>
    </div>
  );
}
