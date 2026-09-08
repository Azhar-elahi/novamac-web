import { prisma } from "@/lib/prisma";
import { createBlogPost, deleteBlogPost } from "../actions";
import { FileText, Plus, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  let posts: any[] = [];
  try {
    posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Error fetching blog posts:", e);
  }

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            SEO CONTENT & ARTICLES CMS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Manage Blog & Articles</h1>
          <p className="text-gray-400 text-sm mt-1">Publish thought-leadership articles, technical guides, and SEO funnels.</p>
        </div>
      </div>

      {/* CREATE NEW BLOG POST FORM */}
      <div className="bg-[#202020] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg text-white">Write & Publish New Article</h2>
            <p className="text-xs text-gray-400">Fill in article details to publish live on /blog</p>
          </div>
        </div>

        <form action={async (formData: FormData) => {
          "use server";
          await createBlogPost(formData);
        }} className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Post Title *</label>
            <input required name="title" placeholder="e.g. Architecting Scalable Microservices in 2026" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Custom URL Slug (Optional)</label>
            <input name="slug" placeholder="e.g. architecting-scalable-microservices-2026" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2">
            <label className="block uppercase font-bold text-gray-400 mb-1">Cover Image URL (Optional)</label>
            <input name="coverImage" placeholder="https://..." className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2">
            <label className="block uppercase font-bold text-gray-400 mb-1">Short Excerpt (Optional)</label>
            <textarea name="excerpt" placeholder="A brief summary for social preview cards and list cards..." rows={2} className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] font-sans" />
          </div>

          <div className="md:col-span-2">
            <label className="block uppercase font-bold text-gray-400 mb-1">Article Content (Markdown / Text) *</label>
            <textarea required name="content" placeholder="Write full article body here..." rows={8} className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] font-sans text-sm" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">SEO Title Tag (Optional)</label>
            <input name="seoTitle" placeholder="Microservices Architecture 2026 | NovaMac Insights" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">SEO Meta Description (Optional)</label>
            <input name="seoDesc" placeholder="Learn how to structure high-throughput cloud architectures..." className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2 pt-2">
            <button type="submit" className="px-6 py-3.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2">
              <Plus className="w-4 h-4" /> Publish Blog Post
            </button>
          </div>
        </form>
      </div>

      {/* ARTICLES TABLE */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Published Articles</h2>
              <p className="text-xs text-gray-400 font-mono">Total published posts ({posts.length})</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-black/40 text-gray-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-semibold">Article Title</th>
                <th className="px-6 py-4 font-semibold">URL Slug</th>
                <th className="px-6 py-4 font-semibold">Published Date</th>
                <th className="px-6 py-4 font-semibold text-right">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {posts.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-400 font-mono">
                    No articles published yet. Write your first post above.
                  </td>
                </tr>
              ) : (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-white text-sm">{post.title}</td>
                    <td className="px-6 py-4 font-mono text-[#FF5733]">/{post.slug}</td>
                    <td className="px-6 py-4 text-gray-400 font-mono">{new Date(post.createdAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <form action={async () => {
                        "use server";
                        await deleteBlogPost(post.id);
                      }}>
                        <button type="submit" className="p-2 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
