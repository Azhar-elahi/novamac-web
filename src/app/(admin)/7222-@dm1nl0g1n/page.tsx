import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Users, Package, LifeBuoy, DollarSign, ArrowRight, Settings, BarChart, Mail, ShieldAlert, Sparkles, Activity, FileText, HelpCircle, Search } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let totalLeads = 0;
  let unreadLeads = 0;
  let highPriorityLeads = 0;
  let totalVisits = 0;
  let recentLeads: any[] = [];

  try {
    totalLeads = await prisma.contactMessage.count();
    unreadLeads = await prisma.contactMessage.count({ where: { status: "UNREAD" } });
    highPriorityLeads = await prisma.contactMessage.count({ where: { priority: "HIGH" } });
    totalVisits = await prisma.analyticsVisit.count();
    
    recentLeads = await prisma.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 5
    });
  } catch (e) {
    console.warn("Database query notice in NovaMac 2.0 Admin Dashboard:", e);
  }

  const stats = [
    { title: "Unread Leads", value: unreadLeads, label: `${totalLeads} Total Inquiries`, icon: Mail, href: "/7222-@dm1nl0g1n/leads", color: "#FF5733" },
    { title: "High Priority Deals", value: highPriorityLeads, label: "Score >= 75", icon: Sparkles, href: "/7222-@dm1nl0g1n/leads", color: "#FF5733" },
    { title: "Site Visitors Logged", value: totalVisits.toLocaleString(), label: "Page & Event Views", icon: Activity, href: "/7222-@dm1nl0g1n/intel", color: "#3B82F6" },
    { title: "Site Health Audit", value: "82/100", label: "SEO & Growth Engine", icon: ShieldAlert, href: "/7222-@dm1nl0g1n/audit", color: "#10B981" },
  ];

  return (
    <div className="space-y-8 font-sans text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            NOVAMAC 2.0 GROWTH OS
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Executive Control Center</h1>
          <p className="text-gray-400 text-sm mt-1">Real-time Lead Intelligence, Site Health Audits, Content CMS, and Sales Conversion Analytics.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/7222-@dm1nl0g1n/leads"
            className="px-5 py-2.5 bg-[#FF5733] hover:bg-white hover:text-[#202020] text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg"
          >
            Manage Leads ({unreadLeads} New)
          </Link>
          <Link
            href="/7222-@dm1nl0g1n/audit"
            className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all border border-white/10"
          >
            Site Health Audit
          </Link>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            href={stat.href}
            className="p-6 bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl transition-all shadow-md group flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FF5733]/10 rounded-xl text-[#FF5733] border border-[#FF5733]/20 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400">{stat.title}</p>
                <p className="text-2xl font-black text-white mt-1">{stat.value}</p>
                <p className="text-[11px] font-mono text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#FF5733] group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>

      {/* QUICK MANAGEMENT PORTALS */}
      <div className="grid md:grid-cols-4 gap-6">
        <Link href="/7222-@dm1nl0g1n/leads" className="p-6 bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl space-y-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center border border-[#FF5733]/20">
            <Mail className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-lg text-white group-hover:text-[#FF5733] transition-colors">Lead Intelligence</h3>
          <p className="text-xs text-gray-400 font-light">Lead Scoring (0-100), AI briefs, and pipeline management.</p>
        </Link>

        <Link href="/7222-@dm1nl0g1n/audit" className="p-6 bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl space-y-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center border border-[#FF5733]/20">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-lg text-white group-hover:text-[#FF5733] transition-colors">Site Intelligence Audit</h3>
          <p className="text-xs text-gray-400 font-light">SEO, Speed, Content, AEO/GEO scores, and recommendations.</p>
        </Link>

        <Link href="/7222-@dm1nl0g1n/faq" className="p-6 bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl space-y-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center border border-[#FF5733]/20">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-lg text-white group-hover:text-[#FF5733] transition-colors">FAQ CMS</h3>
          <p className="text-xs text-gray-400 font-light">Manage FAQ items and auto-generate FAQPage JSON-LD schema.</p>
        </Link>

        <Link href="/7222-@dm1nl0g1n/blog" className="p-6 bg-[#202020] border border-white/10 hover:border-[#FF5733] rounded-2xl space-y-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center border border-[#FF5733]/20">
            <FileText className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-lg text-white group-hover:text-[#FF5733] transition-colors">Blog CMS</h3>
          <p className="text-xs text-gray-400 font-light">Create and publish SEO articles linked directly to service funnels.</p>
        </Link>
      </div>

      {/* RECENT INCOMING LEADS SHOWCASE */}
      <div className="bg-[#202020] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[#FF5733] font-mono text-xs uppercase font-bold tracking-wider">LIVE INCOMING LEADS</span>
            <h3 className="text-2xl font-black text-white">Recent Lead Intelligence</h3>
          </div>
          <Link
            href="/7222-@dm1nl0g1n/leads"
            className="text-xs font-mono text-[#FF5733] uppercase font-bold hover:underline flex items-center gap-1"
          >
            <span>View All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm font-mono">
            No leads received yet. Test your contact form at <Link href="/contact" className="text-[#FF5733] underline">/contact</Link>.
          </div>
        ) : (
          <div className="space-y-3 font-mono">
            {recentLeads.map((lead: any) => (
              <div key={lead.id} className="p-4 bg-[#141414] border border-white/10 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold text-sm">{lead.name}</span>
                    <span className="text-xs text-gray-400">&lt;{lead.email}&gt;</span>
                    <span className={`px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase ${
                      lead.priority === "HIGH" ? "bg-red-500/20 text-red-400 border border-red-500/40" : "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                    }`}>
                      {lead.score || 50}/100 SCORE
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 line-clamp-1">{lead.subject} — {lead.message}</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-gray-500">{new Date(lead.createdAt).toLocaleDateString()}</span>
                  <Link
                    href="/7222-@dm1nl0g1n/leads"
                    className="px-3.5 py-1.5 bg-[#FF5733]/10 text-[#FF5733] border border-[#FF5733]/30 hover:bg-[#FF5733] hover:text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    View Brief
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
