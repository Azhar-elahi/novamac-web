import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Users, Package, LifeBuoy, DollarSign, ArrowRight, Settings, BarChart, Mail } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  let totalUsers = 0;
  let totalOrders = 0;
  let totalTickets = 0;
  let totalRevenue = 0;

  try {
    totalUsers = await prisma.user.count();
    totalOrders = await prisma.order.count();
    totalTickets = await prisma.ticket.count({ where: { status: "OPEN" } });
    
    const payments = await prisma.payment.findMany({ where: { status: "succeeded" }});
    totalRevenue = payments.reduce((acc, curr) => acc + curr.amount, 0);
  } catch (e) {
    console.warn("Database notice in admin dashboard:", e);
  }

  const stats = [
    { title: "Total Clients", value: totalUsers, icon: Users, href: "/7222-@dm1nl0g1n/clients" },
    { title: "Active Orders", value: totalOrders, icon: Package, href: "/7222-@dm1nl0g1n/orders" },
    { title: "Open Support Tickets", value: totalTickets, icon: LifeBuoy, href: "/7222-@dm1nl0g1n/tickets" },
    { title: "Revenue Processed", value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, href: "/7222-@dm1nl0g1n/pricing" },
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="px-3.5 py-1 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-wider rounded-full inline-block mb-2">
            ADMIN CONTROL PORTAL
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">NovaMac Management Center</h1>
          <p className="text-gray-400 text-sm mt-1">Full control over site content, pricing tiers, client tickets, and web analytics.</p>
        </div>
      </div>

      {/* Stats Cards Grid */}
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
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#FF5733] group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>

      {/* Quick Customization Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-[#FF5733]">
            <DollarSign className="w-5 h-5" />
            <h3 className="font-bold text-lg text-white">Pricing & Scope Manager</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Update package rates ($299 / $599 / $999+), feature lists, and SLA timelines in real-time.
          </p>
          <Link
            href="/7222-@dm1nl0g1n/pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5733] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#202020] transition-colors"
          >
            Edit Packages <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-[#FF5733]">
            <BarChart className="w-5 h-5" />
            <h3 className="font-bold text-lg text-white">Web Intel Analytics</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Monitor live visitor traffic, page conversion rates, traffic sources, and performance SLA metrics.
          </p>
          <Link
            href="/7222-@dm1nl0g1n/intel"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5733] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#202020] transition-colors"
          >
            View Analytics <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="p-6 bg-[#202020] border border-white/10 rounded-2xl space-y-4">
          <div className="flex items-center gap-3 text-[#FF5733]">
            <Mail className="w-5 h-5" />
            <h3 className="font-bold text-lg text-white">Client Messages & Inquiries</h3>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Review incoming proposal requests, WhatsApp inquiries, and direct client communications.
          </p>
          <Link
            href="/7222-@dm1nl0g1n/messages"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5733] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-[#202020] transition-colors"
          >
            Inbox & Messages <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
