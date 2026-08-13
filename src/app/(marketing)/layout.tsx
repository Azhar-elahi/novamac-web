"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { useUIStore } from "@/store/useUIStore";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  const { isLandingMode } = useUIStore();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header & Footer are ALWAYS visible on /home and all inner pages!
  const isIntroPage = pathname === "/";
  const showNav = !isIntroPage || !isLandingMode;

  const NAV_LINKS = [
    { href: "/home",       label: "Home"       },
    { href: "/services",   label: "Services"   },
    { href: "/pricing",    label: "Pricing"     },
    { href: "/work",       label: "Work"       },
    { href: "/about",      label: "About"      },
    { href: "/contact",    label: "Contact"    },
  ];

  // Dynamic logo link: if already on /home, go to / (landing page); otherwise go to /home
  const logoHref = pathname === "/home" ? "/" : "/home";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F0EDE6] text-[#1C1917] selection:bg-[#0F52BA] selection:text-white relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* ── SINGLE UNIFIED STICKY HEADER ── */}
      <header className={`sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 xl:px-20 h-[76px] bg-[#F0EDE6]/95 backdrop-blur-md border-b border-[#D6D1C8] transition-opacity duration-500 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none hidden"}`}>
        
        {/* LOGO LINK: / if on /home, otherwise /home */}
        <Link href={logoHref} className="hover-trigger flex items-center gap-3 group relative z-10">
          <img src="/logo.png" alt="NovaMac Logo" className="w-10 h-10 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform" />
          <span className="font-heading font-bold text-xl tracking-tight text-[#1C1917]">
            NovaMac<br/><span className="text-[10px] font-mono tracking-widest text-[#78716C] leading-none block">SOLUTIONS</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 relative z-10 text-sm font-semibold text-[#57534E]">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`hover-trigger transition-colors duration-300 ${pathname === link.href ? "text-[#0F52BA] font-bold" : "hover:text-[#0F52BA]"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTON */}
        <Link 
          href="/contact"
          className="hover-trigger hidden lg:flex items-center justify-center px-6 py-2.5 bg-[#1C1917] text-white font-bold text-xs tracking-widest uppercase rounded-full hover:bg-[#0F52BA] transition-all duration-300 relative z-10 shadow-md hover:scale-105"
        >
          BOOK A CALL
        </Link>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white border border-[#D6D1C8] text-[#1C1917] hover:text-[#0F52BA] transition-all relative z-50"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* MOBILE MENU DRAWER OVERLAY (100% SOLID OPAQUE) */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-[#F0EDE6] z-[9999] opacity-100 p-6 flex flex-col justify-between border-t-2 border-[#D6D1C8] shadow-2xl overflow-y-auto">
            <nav className="flex flex-col gap-3 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-extrabold tracking-tight p-4 rounded-2xl border transition-all flex items-center justify-between shadow-sm ${pathname === link.href ? "bg-[#0F52BA] text-white border-[#0F52BA]" : "bg-white text-[#1C1917] border-[#D6D1C8] hover:border-[#0F52BA]"}`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-4 h-4 ${pathname === link.href ? "text-white" : "text-[#0F52BA]"}`} />
                </Link>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#D6D1C8] space-y-4">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#1C1917] text-white font-bold text-xs tracking-widest uppercase rounded-full text-center block shadow-lg hover:bg-[#0F52BA] transition-all"
              >
                BOOK A STRATEGY CALL
              </Link>
              <div className="text-center font-mono text-[10px] text-[#78716C] tracking-widest uppercase">
                NOVAMAC SOLUTIONS // SUB-50MS EDGE
              </div>
            </div>
          </div>
        )}

      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* ── FOOTER ── */}
      <footer className={`bg-[#1C1917] text-white border-t border-[#D6D1C8] pt-20 pb-10 transition-opacity duration-500 relative z-10 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none hidden"}`}>
        <div className="px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="NovaMac Logo" className="w-10 h-10 object-contain rounded-xl" />
                <span className="font-heading font-bold text-2xl tracking-tight text-white">
                  NovaMac<br/><span className="text-[10px] font-mono tracking-widest text-[#0F52BA] leading-none block">SOLUTIONS</span>
                </span>
              </Link>
              <p className="text-xs text-[#78716C] leading-relaxed max-w-sm font-normal">
                NovaMac Solutions is a remote-first software engineering collective building sub-second Next.js web platforms, UI/UX design systems, and AI automation.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-4">NAVIGATION</div>
              <ul className="space-y-2.5 text-xs text-[#78716C]">
                <li><Link href="/home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/work" className="hover:text-white transition-colors">Work</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-4">CAPABILITIES</div>
              <ul className="space-y-2.5 text-xs text-[#78716C]">
                <li><Link href="/services/custom-web-development" className="hover:text-white transition-colors">Web Engineering</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">UI/UX Studio</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">SaaS Applications</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">AI & CRM Automation</Link></li>
                <li><Link href="/services/ecommerce-development" className="hover:text-white transition-colors">Headless E-Commerce</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#0F52BA] uppercase tracking-widest mb-4">LEGAL</div>
              <ul className="space-y-2.5 text-xs text-[#78716C]">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Support & FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716C]">
            <div>© {new Date().getFullYear()} NovaMac Solutions. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0F52BA] animate-pulse" />
              <span>SUB-50MS GLOBAL EDGE CDN</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Widget */}
      <ChatWidget />
    </div>
  );
}
