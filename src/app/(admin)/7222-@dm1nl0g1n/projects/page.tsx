import { prisma } from "@/lib/prisma";
import { createProject, deleteProject } from "../actions";
import { FolderGit2, Plus, Trash2, ExternalLink } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  let projects: any[] = [];
  try {
    projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" }
    });
  } catch (e) {
    console.warn("Error fetching projects:", e);
  }

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            AGENCY WORK SHOWCASE CMS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Manage Portfolio & Case Studies</h1>
          <p className="text-gray-400 text-sm mt-1">Publish client achievements, tech stack tags, image assets, and SEO metadata.</p>
        </div>
      </div>

      {/* CREATE NEW PROJECT FORM */}
      <div className="bg-[#202020] border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
            <Plus className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-extrabold text-lg text-white">Add New Case Study</h2>
            <p className="text-xs text-gray-400">Fill in project details to feature on /work showcase page</p>
          </div>
        </div>

        <form action={async (formData: FormData) => {
          "use server";
          await createProject(formData);
        }} className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Project Title *</label>
            <input required name="title" placeholder="e.g. Apex Global Logistics Platform" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Tech Stack *</label>
            <input required name="tech" placeholder="e.g. Next.js, Node.js, PostgreSQL, Tailwind" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Category *</label>
            <input required name="category" placeholder="e.g. Custom SaaS / ERP Architecture" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">Year / Timeline *</label>
            <input required name="year" defaultValue={new Date().getFullYear().toString()} placeholder="2026" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2">
            <label className="block uppercase font-bold text-gray-400 mb-1">Image Asset URL *</label>
            <input required name="img" placeholder="https://..." className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2">
            <label className="block uppercase font-bold text-gray-400 mb-1">Project Description *</label>
            <textarea required name="desc" placeholder="Describe client goals, architecture, performance metrics, and results..." rows={4} className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733] font-sans" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">SEO Title Tag (Optional)</label>
            <input name="seoTitle" placeholder="Apex Logistics ERP | NovaMac Case Study" className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div>
            <label className="block uppercase font-bold text-gray-400 mb-1">SEO Meta Description (Optional)</label>
            <input name="seoDesc" placeholder="How NovaMac engineered a high-performance logistics SaaS..." className="w-full px-4 py-3 bg-[#141414] border border-white/15 rounded-xl text-white outline-none focus:border-[#FF5733]" />
          </div>

          <div className="md:col-span-2 pt-2">
            <button type="submit" className="px-6 py-3.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center gap-2">
              <Plus className="w-4 h-4" /> Publish Case Study
            </button>
          </div>
        </form>
      </div>

      {/* PROJECTS TABLE */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#FF5733]/10 text-[#FF5733] rounded-xl border border-[#FF5733]/20">
              <FolderGit2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">Live Portfolio Showcase</h2>
              <p className="text-xs text-gray-400">Total published case studies ({projects.length})</p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-black/40 text-gray-400 font-mono text-[10px] uppercase tracking-wider border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-semibold">Preview</th>
                <th className="px-6 py-4 font-semibold">Project Title</th>
                <th className="px-6 py-4 font-semibold">Category / Tech</th>
                <th className="px-6 py-4 font-semibold text-right">Delete</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              {projects.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-400 font-mono">
                    No portfolio projects added yet. Add your first case study above.
                  </td>
                </tr>
              ) : (
                projects.map((proj) => (
                  <tr key={proj.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <img src={proj.img} alt={proj.title} className="w-16 h-12 object-cover rounded-lg border border-white/15" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-sm">{proj.title}</div>
                      <div className="text-gray-400 font-mono text-[11px]">{proj.year}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-mono text-[#FF5733] font-bold">{proj.category}</div>
                      <div className="text-gray-400 font-mono text-[11px]">{proj.tech}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <form action={async () => {
                        "use server";
                        await deleteProject(proj.id);
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
