"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useUIStore } from "@/store/useUIStore";
import { BookingProvider, useBookingModal } from "@/components/booking/BookingContext";

const ChatWidget = dynamic(() => import("@/components/chat/ChatWidget").then((m) => m.ChatWidget), { ssr: false });
const BookingModal = dynamic(() => import("@/components/booking/BookingModal").then((m) => m.BookingModal), { ssr: false });
const WhatsAppWidget = dynamic(() => import("@/components/shared/WhatsAppWidget").then((m) => m.WhatsAppWidget), { ssr: false });
const LeadPopupModal = dynamic(() => import("@/components/shared/LeadPopupModal").then((m) => m.LeadPopupModal), { ssr: false });

function MarketingHeaderAndFooter({ children }: { children: React.ReactNode }) {
  const { isLandingMode } = useUIStore();
  const { openBooking } = useBookingModal();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/" || pathname === "/home";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Header is hidden at top of homepage hero, and appears smoothly when scrolled down! On subpages, it is always visible.
  const isHeaderVisible = isHomePage ? scrolled : true;

  const NAV_LINKS = [
    { href: "/",          label: "Home"       },
    { href: "/services",  label: "Services"   },
    { href: "/work",      label: "Work"       },
    { href: "/process",   label: "Process"    },
    { href: "/about",     label: "About"      },
    { href: "/contact",   label: "Contact"    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF2F2] text-[#0A2540] relative overflow-x-hidden">
      
      {/* ── FLOATING TOP HEADER (Appears on scroll for home, always on inner pages) ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-12 md:px-16 h-16 sm:h-20 bg-[#FAF2F2]/95 backdrop-blur-md shadow-lg border-b border-[#F0DCDC] rounded-b-2xl sm:rounded-b-3xl transition-all duration-500 transform ${
          isHeaderVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        
        {/* LOGO LINK */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <img src="/logo.png" alt="NovaMac Logo" className="w-7 h-7 sm:w-9 sm:h-9 object-contain group-hover:scale-105 transition-transform shrink-0" />
          <span className="font-heading font-black text-xl sm:text-3xl tracking-tight text-[#FF5733] truncate">
            NovaMac<span className="text-[#0A2540]">Solutions</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-8 font-extrabold text-sm uppercase tracking-wider text-[#0A2540]">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.label}
                href={link.href}
                className={`transition-colors py-2 relative hover:text-[#FF5733] ${isActive ? "text-[#FF5733]" : ""}`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5733] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => openBooking()}
            className="bg-[#FF5733] text-white hover:bg-[#202020] font-extrabold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            Start a Project
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full text-[#0A2540] hover:bg-gray-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-8 pb-12 flex flex-col justify-between lg:hidden">
          <div className="flex flex-col gap-6 text-2xl font-black uppercase text-[#0A2540]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#FF5733]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBooking();
              }}
              className="w-full bg-[#FF5733] text-white font-extrabold text-center text-sm uppercase py-4 rounded-full inline-block shadow-lg"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT (No pt-20 on homepage so hero fills edge-to-edge top bleed!) */}
      <main className={`flex-1 w-full ${isHomePage ? "pt-0" : "pt-20"}`}>
        {children}
      </main>

      {/* ── COMPACT LOUNGE LIZARD DARK FOOTER (Visual design preserved) ── */}
      <footer className="bg-[#0A0A0A] text-white border-t border-white/10 pt-12 pb-8 px-6 sm:px-12 lg:px-20 font-sans relative overflow-hidden">
        
        {/* MAIN FOOTER GRID */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <img src="/logo.png" alt="NovaMac Logo" className="w-9 h-9 object-contain rounded-lg shadow-md border border-white/10" />
              <span className="font-black text-xl text-[#FF5733]">
                NovaMac<span className="text-white">Solutions</span>
              </span>
            </Link>
            <p className="text-gray-400 text-xs font-light leading-relaxed max-w-sm mb-4">
              NovaMac Solutions is a digital engineering studio helping businesses build custom web platforms, software, and automated systems.
            </p>
            
            {/* LIVE SYSTEM STATUS PILL */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>

            <div className="text-[11px] font-mono text-gray-500 uppercase tracking-wider block">
              Digital Engineering Studio • Web & AI Systems
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-[11px] uppercase tracking-widest text-white mb-3 border-l-2 border-[#FF5733] pl-2.5">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="/services/website-development" className="hover:text-[#FF5733] transition-colors">Website Development</Link></li>
              <li><Link href="/services/custom-software" className="hover:text-[#FF5733] transition-colors">Custom Software</Link></li>
              <li><Link href="/services/crm-development" className="hover:text-[#FF5733] transition-colors">CRM Development</Link></li>
              <li><Link href="/services/erp-development" className="hover:text-[#FF5733] transition-colors">ERP Development</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-[#FF5733] transition-colors">AI Automation</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-[#FF5733] transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/saas-development" className="hover:text-[#FF5733] transition-colors">SaaS & Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-[11px] uppercase tracking-widest text-white mb-3 border-l-2 border-[#FF5733] pl-2.5">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="/about" className="hover:text-[#FF5733] transition-colors">About NovaMac</Link></li>
              <li><Link href="/work" className="hover:text-[#FF5733] transition-colors">Our Work</Link></li>
              <li><Link href="/process" className="hover:text-[#FF5733] transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF5733] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-[11px] uppercase tracking-widest text-white mb-3 border-l-2 border-[#FF5733] pl-2.5">
              Resources & Legal
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><Link href="/blog" className="hover:text-[#FF5733] transition-colors">Insights & Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#FF5733] transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-[#FF5733] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FF5733] transition-colors">Terms of Service</Link></li>
              <li className="pt-2 text-gray-300 font-bold">
                Email: <a href="mailto:hello@novamacsolutions.com" className="text-[#FF5733] hover:underline hover:text-white transition-colors">hello@novamacsolutions.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono gap-3">
          <div>© {new Date().getFullYear()} NovaMac Solutions. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Floating Widgets */}
      <WhatsAppWidget />
      <ChatWidget />
      <BookingModal />
      <LeadPopupModal />
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
