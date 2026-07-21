"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Package, LifeBuoy, LogOut, ShieldAlert, Briefcase, FileText } from "lucide-react";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { name: "Dashboard", href: "/7222-@dm1nl0g1n", icon: LayoutDashboard },
  { name: "Orders", href: "/7222-@dm1nl0g1n/orders", icon: Package },
  { name: "Clients", href: "/7222-@dm1nl0g1n/clients", icon: Users },
  { name: "Tickets", href: "/7222-@dm1nl0g1n/tickets", icon: LifeBuoy },
  { name: "Projects", href: "/7222-@dm1nl0g1n/projects", icon: Briefcase },
  { name: "Blog", href: "/7222-@dm1nl0g1n/blog", icon: FileText },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-border bg-red-500/10">
          <Link href="/7222-@dm1nl0g1n" className="flex items-center gap-2 font-heading font-bold text-xl text-red-500">
            <ShieldAlert className="w-5 h-5" />
            NovaMac Admin
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {adminNavItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/7222-@dm1nl0g1n" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-red-500/10 text-red-500" 
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-medium text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center px-6 border-b border-border bg-card md:hidden">
          <Link href="/7222-@dm1nl0g1n" className="flex items-center gap-2 font-heading font-bold text-xl text-red-500">
            <ShieldAlert className="w-5 h-5" />
            Admin
          </Link>
        </header>
        <div className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
