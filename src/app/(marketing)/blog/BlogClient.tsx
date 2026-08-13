"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@prisma/client";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function BlogClient({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="min-h-screen pt-40 pb-24 px-6 md:px-12 xl:px-20 relative overflow-hidden bg-[#f6f1e7] text-[#211f1a] ">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="annotation-label -rotate-3 inline-block mb-6">— insights &amp; news</span>
          <h1 className="font-heading font-medium text-[clamp(2.6rem,7vw,5.4rem)] mb-6 tracking-[-0.01em] leading-[1.05]">
            Our <span className="text-script">blog.</span>
          </h1>
          <p className="text-lg text-[#211f1a]/60 leading-relaxed font-light">
            Thoughts, technical tutorials, and industry insights from the development and design team at NovaMac.
          </p>
        </motion.div>

        <div className="space-y-10">
          {posts.map((post, idx) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="block">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.7, ease }}
                className="group bg-white border border-black/5 shadow-sm rounded-2xl p-8 md:p-10 cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs text-[#211f1a]/45">
                  <span className="uppercase tracking-widest text-[#2f6b45]">Update</span>
                  <span>•</span>
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-medium mb-4 tracking-tight group-hover:text-[#2f6b45] transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#211f1a]/55 text-base font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="text-[#211f1a]/50 py-10 text-lg font-light">No blog posts yet.</div>
          )}
        </div>
      </div>
    </main>
  );
}
