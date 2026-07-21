import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Plus, Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" }
  });

  async function addPost(formData: FormData) {
    "use server";
    
    // Auto-generate slug from title if not provided
    const title = formData.get("title") as string;
    let slug = formData.get("slug") as string;
    if (!slug) {
      slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }

    await prisma.blogPost.create({
      data: {
        title,
        slug,
        content: formData.get("content") as string,
        excerpt: (formData.get("excerpt") as string) || null,
        coverImage: (formData.get("coverImage") as string) || null,
        seoTitle: (formData.get("seoTitle") as string) || null,
        seoDesc: (formData.get("seoDesc") as string) || null,
        published: true, // Auto publish for simplicity
      }
    });
    revalidatePath("/7222-@dm1nl0g1n/blog");
    revalidatePath("/blog");
  }

  async function deletePost(formData: FormData) {
    "use server";
    await prisma.blogPost.delete({
      where: { id: formData.get("id") as string }
    });
    revalidatePath("/7222-@dm1nl0g1n/blog");
    revalidatePath("/blog");
  }

  return (
    <div className="space-y-12 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Manage Blog</h1>
        <p className="text-muted-foreground mt-2">Publish new articles and manage existing ones.</p>
      </div>

      <div className="glass-card p-6 border border-border rounded-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="w-5 h-5"/> Write New Post</h2>
        <form action={addPost} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required name="title" placeholder="Post Title" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input name="slug" placeholder="Custom Slug (optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          
          <input name="coverImage" placeholder="Cover Image URL (optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border md:col-span-2" />
          <textarea name="excerpt" placeholder="Short Excerpt..." rows={2} className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border md:col-span-2" />
          
          <textarea required name="content" placeholder="Full Content (Markdown or Text)..." rows={8} className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border md:col-span-2 font-mono text-sm" />
          
          {/* SEO Fields */}
          <input name="seoTitle" placeholder="SEO Title (Optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input name="seoDesc" placeholder="SEO Description (Optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />

          <div className="md:col-span-2 mt-2">
            <button type="submit" className="bg-brand text-black font-bold px-6 py-3 rounded-lg hover:bg-brand/90 transition">
              Publish Post
            </button>
          </div>
        </form>
      </div>

      <div className="border border-border rounded-xl glass-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/50 text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {posts.map(post => (
              <tr key={post.id} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4 font-medium">{post.title} <br/><span className="text-xs text-muted-foreground">/{post.slug}</span></td>
                <td className="px-6 py-4 text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  <form action={deletePost}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit" className="text-red-500 hover:text-red-400 p-2 rounded-md hover:bg-red-500/10 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={3} className="px-6 py-8 text-center text-muted-foreground">No blog posts found. Write one above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
