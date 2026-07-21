import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Plus, Trash2 } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" }
  });

  async function addProject(formData: FormData) {
    "use server";
    await prisma.project.create({
      data: {
        title: formData.get("title") as string,
        tech: formData.get("tech") as string,
        category: formData.get("category") as string,
        year: formData.get("year") as string,
        desc: formData.get("desc") as string,
        img: formData.get("img") as string,
        seoTitle: (formData.get("seoTitle") as string) || null,
        seoDesc: (formData.get("seoDesc") as string) || null,
      }
    });
    revalidatePath("/7222-@dm1nl0g1n/projects");
    revalidatePath("/work");
  }

  async function deleteProject(formData: FormData) {
    "use server";
    await prisma.project.delete({
      where: { id: formData.get("id") as string }
    });
    revalidatePath("/7222-@dm1nl0g1n/projects");
    revalidatePath("/work");
  }

  return (
    <div className="space-y-12 max-w-6xl">
      <div>
        <h1 className="text-3xl font-heading font-bold">Manage Projects</h1>
        <p className="text-muted-foreground mt-2">Add new portfolio items or remove old ones.</p>
      </div>

      <div className="glass-card p-6 border border-border rounded-xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2"><Plus className="w-5 h-5"/> Add New Project</h2>
        <form action={addProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required name="title" placeholder="Project Title" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input required name="tech" placeholder="Tech Stack (e.g. Next.js & Tailwind)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input required name="category" placeholder="Category (e.g. E-Commerce)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input required name="year" placeholder="Year" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input required name="img" placeholder="Image URL (e.g. https://...)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border md:col-span-2" />
          <textarea required name="desc" placeholder="Project Description..." rows={3} className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border md:col-span-2" />
          
          {/* SEO Fields */}
          <input name="seoTitle" placeholder="SEO Title (Optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />
          <input name="seoDesc" placeholder="SEO Description (Optional)" className="px-4 py-3 bg-secondary/50 rounded-lg outline-none focus:ring-1 focus:ring-brand border border-border" />

          <div className="md:col-span-2 mt-2">
            <button type="submit" className="bg-brand text-black font-bold px-6 py-3 rounded-lg hover:bg-brand/90 transition">
              Publish Project
            </button>
          </div>
        </form>
      </div>

      <div className="border border-border rounded-xl glass-card overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-secondary/50 text-muted-foreground uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Image</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Tech / Category</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {projects.map(proj => (
              <tr key={proj.id} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <img src={proj.img} alt={proj.title} className="w-16 h-12 object-cover rounded-md border border-border" />
                </td>
                <td className="px-6 py-4 font-medium">{proj.title} <br/><span className="text-xs text-muted-foreground">{proj.year}</span></td>
                <td className="px-6 py-4 text-muted-foreground">{proj.tech} <br/> <span className="text-xs">{proj.category}</span></td>
                <td className="px-6 py-4 text-right">
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={proj.id} />
                    <button type="submit" className="text-red-500 hover:text-red-400 p-2 rounded-md hover:bg-red-500/10 transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">No projects found. Add one above.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
