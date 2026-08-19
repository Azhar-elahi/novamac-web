"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useUIStore } from "@/store/useUIStore";
import { BookingProvider, useBookingModal } from "@/components/booking/BookingContext";

const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget").then((m) => m.ChatWidget), { ssr: false });
const BookingModal = dynamic(() => import("@/components/booking/BookingModal").then((m) => m.BookingModal), { ssr: false });
const WhatsAppWidget = dynamic(() => import("@/components/shared/WhatsAppWidget").then((m) => m.WhatsAppWidget), { ssr: false });

function MarketingHeaderAndFooter({ children }: { children: React.ReactNode }) {
  const { isLandingMode } = useUIStore();
  const { openBooking } = useBookingModal();
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
    { href: "/demo",       label: "ERP Demo"   },
    { href: "/about",      label: "About"      },
    { href: "/contact",    label: "Contact"    },
  ];

  // Dynamic logo link: if already on /home, go to / (landing page); otherwise go to /home
  const logoHref = pathname === "/home" ? "/" : "/home";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#0B1220] text-[#F8FAFC] selection:bg-[#3B82F6] selection:text-white relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      
      {/* ── SINGLE UNIFIED STICKY HEADER ── */}
      <header className={`sticky top-0 left-0 right-0 ${mobileMenuOpen ? "z-[99999]" : "z-50"} flex items-center justify-between px-4 sm:px-8 md:px-12 xl:px-20 h-[88px] bg-[#0B1220]/95 backdrop-blur-md border-b border-[#1E2E4A] transition-opacity duration-500 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none hidden"}`}>
        
        {/* LOGO LINK: / if on /home, otherwise /home */}
        <Link href={logoHref} onClick={() => setMobileMenuOpen(false)} className="hover-trigger flex items-center gap-3.5 group relative z-[100000]">
          <img src="/logo.png" alt="NovaMac Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform border border-[#1E2E4A]" />
          <span className="font-heading font-black text-xl sm:text-2xl tracking-tight text-[#F8FAFC]">
            NovaMac<br/><span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#3B82F6] leading-none block font-bold">SOLUTIONS</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10 relative z-10 text-base font-bold text-[#94A3B8]">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`hover-trigger transition-colors duration-300 ${pathname === link.href ? "text-[#3B82F6] font-extrabold" : "hover:text-[#3B82F6]"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTON (OPENS INTERACTIVE BOOKING MODAL OR GOES TO /book) */}
        <button 
          onClick={() => openBooking()}
          className="hover-trigger hidden lg:flex items-center justify-center px-8 py-3 bg-[#3B82F6] text-white font-black text-xs sm:text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 relative z-10 shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:scale-105"
        >
          BOOK A CALL
        </button>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden px-4 py-2.5 rounded-2xl bg-[#0F172A] text-[#F8FAFC] hover:bg-[#3B82F6] hover:text-white transition-all relative z-[100000] flex items-center justify-center gap-2 shadow-lg active:scale-95 border border-[#1E2E4A]"
          aria-label="Toggle Navigation Menu"
        >
          <span className="font-mono text-xs font-bold tracking-widest uppercase">
            {mobileMenuOpen ? "CLOSE" : "MENU"}
          </span>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* MOBILE MENU DRAWER OVERLAY */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-full bg-[#0B1220] z-[99998] p-6 pt-28 flex flex-col justify-between border-t-2 border-[#1E2E4A] shadow-2xl overflow-y-auto min-h-screen">
            <nav className="flex flex-col gap-3.5 pt-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-extrabold tracking-tight p-4.5 rounded-2xl border transition-all flex items-center justify-between shadow-sm ${pathname === link.href ? "bg-[#3B82F6] text-white border-[#3B82F6]" : "bg-[#070D18] text-[#F8FAFC] border-[#1E2E4A] hover:border-[#3B82F6]"}`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className={`w-5 h-5 ${pathname === link.href ? "text-white" : "text-[#3B82F6]"}`} />
                </Link>
              ))}
            </nav>

            <div className="pt-6 mt-6 border-t border-[#1E2E4A] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBooking();
                }}
                className="w-full py-4 bg-[#3B82F6] text-white font-black text-sm tracking-widest uppercase rounded-full text-center block shadow-lg hover:bg-white hover:text-[#0B1220] transition-all"
              >
                BOOK A STRATEGY CALL
              </button>
              <div className="text-center font-mono text-xs text-[#94A3B8] tracking-widest uppercase font-bold">
                NOVAMAC SOLUTIONS // SUB-50MS EDGE SYSTEM
              </div>
            </div>
          </div>
        )}

      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* ── FOOTER ── */}
      <footer className={`bg-[#070B14] text-[#F8FAFC] border-t border-[#1E2E4A] pt-20 pb-10 transition-opacity duration-500 relative z-10 ${showNav ? "opacity-100" : "opacity-0 pointer-events-none hidden"}`}>
        <div className="px-6 md:px-12 xl:px-20 max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="NovaMac Logo" className="w-10 h-10 object-contain rounded-xl border border-[#1E2E4A]" />
                <span className="font-heading font-bold text-2xl tracking-tight text-[#F8FAFC]">
                  NovaMac<br/><span className="text-[10px] font-mono tracking-widest text-[#3B82F6] leading-none block">SOLUTIONS</span>
                </span>
              </Link>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm font-normal">
                NovaMac Solutions is a remote-first software engineering studio building sub-second Next.js web platforms, custom CRMs, and autonomous AI agent workflows for clients across the US, UK, Canada, and Europe.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider">Accepting New Q3/Q4 Projects</span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4">NAVIGATION</div>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                <li><Link href="/home" className="hover:text-[#3B82F6] transition-colors">Home Studio</Link></li>
                <li><Link href="/services" className="hover:text-[#3B82F6] transition-colors">Services Directory</Link></li>
                <li><Link href="/pricing" className="hover:text-[#3B82F6] transition-colors">Pricing & Plans</Link></li>
                <li><Link href="/work" className="hover:text-[#3B82F6] transition-colors">Client Case Studies</Link></li>
                <li><Link href="/demo" className="hover:text-[#3B82F6] transition-colors text-[#25D366] font-bold">Live ERP Demo ⚡</Link></li>
                <li><Link href="/about" className="hover:text-[#3B82F6] transition-colors">About NovaMac</Link></li>
                <li><Link href="/contact" className="hover:text-[#3B82F6] transition-colors">Contact Engineering</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4">SERVICES</div>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                <li><Link href="/services/custom-web-development" className="hover:text-[#3B82F6] transition-colors">Custom Web Development</Link></li>
                <li><Link href="/services/ai-automation" className="hover:text-[#3B82F6] transition-colors">AI & Autonomous Agents</Link></li>
                <li><Link href="/services/crm-custom-software" className="hover:text-[#3B82F6] transition-colors">Custom CRM Software</Link></li>
                <li><Link href="/services/ecommerce-development" className="hover:text-[#3B82F6] transition-colors">Headless E-Commerce</Link></li>
                <li><Link href="/services/ui-ux-design" className="hover:text-[#3B82F6] transition-colors">UI/UX Design Studio</Link></li>
                <li><Link href="/services/mobile-app-development" className="hover:text-[#3B82F6] transition-colors">Mobile App Engineering</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-widest mb-4">GLOBAL REGIONS</div>
              <ul className="space-y-2 text-xs text-[#94A3B8]">
                <li><Link href="/us" className="hover:text-[#3B82F6] transition-colors">🇺🇸 United States (PST/EST)</Link></li>
                <li><Link href="/uk" className="hover:text-[#3B82F6] transition-colors">🇬🇧 United Kingdom (GMT)</Link></li>
                <li><Link href="/eu" className="hover:text-[#3B82F6] transition-colors">🇪🇺 Western Europe (CET)</Link></li>
                <li><Link href="/privacy" className="hover:text-[#3B82F6] transition-colors mt-2 block border-t border-[#1E2E4A] pt-2">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#3B82F6] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#1E2E4A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8]">
            <p>© {new Date().getFullYear()} NovaMac Solutions. All rights reserved.</p>
            <p className="font-mono text-[10px] tracking-widest uppercase mt-4 sm:mt-0 text-[#3B82F6]">
              SUB-SECOND NEXT.JS ENGINEERING · 100% SOURCE CODE OWNERSHIP
            </p>
          </div>
        </div>
      </footer>

      {/* ── GLOBAL INTERACTIVE FLOATING AI CHAT WIDGET, BOOKING MODAL & WHATSAPP MENU ── */}
      <ChatWidget />
      <BookingModal />
      <WhatsAppWidget />
    </div>
  );
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingProvider>
      <MarketingHeaderAndFooter>{children}</MarketingHeaderAndFooter>
    </BookingProvider>
  );
}
