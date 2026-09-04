"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Package, LifeBuoy, LogOut, ShieldAlert, Briefcase, FileText, Mail, BarChart, DollarSign } from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { name: "Dashboard", href: "/7222-@dm1nl0g1n", icon: LayoutDashboard },
  { name: "Price Management", href: "/7222-@dm1nl0g1n/pricing", icon: DollarSign },
  { name: "Web Intel", href: "/7222-@dm1nl0g1n/intel", icon: BarChart },
  { name: "Messages", href: "/7222-@dm1nl0g1n/messages", icon: Mail },
  { name: "Orders", href: "/7222-@dm1nl0g1n/orders", icon: Package },
  { name: "Clients", href: "/7222-@dm1nl0g1n/clients", icon: Users },
  { name: "Tickets", href: "/7222-@dm1nl0g1n/tickets", icon: LifeBuoy },
  { name: "Projects", href: "/7222-@dm1nl0g1n/projects", icon: Briefcase },
  { name: "Blog", href: "/7222-@dm1nl0g1n/blog", icon: FileText },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#141414] text-white font-sans">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#1f1f1f] hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-white/10 bg-[#141414]">
          <Link href="/7222-@dm1nl0g1n" className="flex items-center gap-2.5 font-black text-lg tracking-wider text-[#FF5733] uppercase">
            <ShieldAlert className="w-5 h-5 text-[#FF5733]" />
            NOVAMAC ADMIN
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {adminNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/7222-@dm1nl0g1n" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all",
                  isActive 
                    ? "bg-[#FF5733] text-white shadow-md font-extrabold" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-white" : "text-gray-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-3 px-3.5 py-2.5 w-full rounded-xl text-xs font-mono font-bold uppercase tracking-wider text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#141414]">
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-[#1f1f1f] md:hidden">
          <Link href="/7222-@dm1nl0g1n" className="flex items-center gap-2 font-black text-lg text-[#FF5733] uppercase tracking-wider">
            <ShieldAlert className="w-5 h-5 text-[#FF5733]" />
            NOVAMAC ADMIN
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="text-xs text-red-400 font-bold uppercase font-mono"
          >
            Log Out
          </button>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
