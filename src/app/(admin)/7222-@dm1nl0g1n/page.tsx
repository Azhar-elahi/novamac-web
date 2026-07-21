import { prisma } from "@/lib/prisma";
import { Users, Package, LifeBuoy, DollarSign } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const totalUsers = await prisma.user.count();
  const totalOrders = await prisma.order.count();
  const totalTickets = await prisma.ticket.count({ where: { status: "OPEN" } });
  
  const payments = await prisma.payment.findMany({ where: { status: "succeeded" }});
  const totalRevenue = payments.reduce((acc, curr) => acc + curr.amount, 0);

  const stats = [
    { title: "Total Users", value: totalUsers, icon: Users },
    { title: "Total Orders", value: totalOrders, icon: Package },
    { title: "Open Tickets", value: totalTickets, icon: LifeBuoy },
    { title: "Revenue", value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2">Overview of NovaMac metrics.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.title} className="p-6 border border-border rounded-xl glass-card flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
