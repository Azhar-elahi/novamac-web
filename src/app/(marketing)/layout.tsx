import Link from "next/link";
import { ChatWidget } from "@/components/chat/ChatWidget";
import Starfield from "@/components/nexora/Starfield";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#05060c] text-white relative">
      {/* Ambient starfield behind every marketing page */}
      <Starfield />

      {/* Noise Overlay */}
      <div className="noise-bg" />

      {/* ── HEADER ───────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 xl:px-20 h-[72px] bg-[#05060c]/70 backdrop-blur-md border-b border-white/10">

        <Link href="/" className="hover-trigger flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center shrink-0 rounded-lg border border-white/15 group-hover:border-[#7fa4ff] transition-colors duration-300">
            <span className="font-heading font-extrabold text-white text-xs">NM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-white leading-none">NovaMac</span>
            <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest leading-none mt-1 group-hover:text-[#7fa4ff] transition-colors">AI control center</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">
          {[
            { href: "/services",   label: "Services"   },
            { href: "/pricing",    label: "Pricing"     },
            { href: "/industries", label: "Industries" },
            { href: "/work",       label: "Work"       },
            { href: "/about",      label: "About"      },
            { href: "/blog",       label: "Blog"       },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="hover-trigger hover:text-[#7fa4ff] transition-colors duration-300 relative group">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact"
            className="hover-trigger inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-full bg-white text-[#05060c] hover:bg-white/90 transition-all duration-300">
            Book a Call
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col relative z-10">{children}</main>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="bg-[#05060c] border-t border-white/10 relative z-10">
        <div className="px-6 md:px-12 xl:px-20 pt-20 pb-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">

            <div className="col-span-2">
              <Link href="/" className="hover-trigger flex items-center gap-3 mb-6 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 group-hover:border-[#7fa4ff] transition-colors">
                  <span className="font-heading font-extrabold text-white text-sm">NM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg tracking-tight leading-none">NovaMac</span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none mt-1">AI control center</span>
                </div>
              </Link>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light mb-8">
                An AI-first software studio building web platforms, WhatsApp
                &amp; voice AI systems, and automation pipelines for
                growth-focused brands.
              </p>
              <div className="space-y-1">
                <a href="mailto:hello@novamacsolutions.com" className="hover-trigger block text-[10px] font-mono text-white/40 uppercase tracking-wider hover:text-[#7fa4ff] transition-colors">hello@novamacsolutions.com</a>
                <a href="tel:+14154804281" className="hover-trigger block text-[10px] font-mono text-white/40 uppercase tracking-wider hover:text-[#7fa4ff] transition-colors">415 480 4281</a>
              </div>
            </div>

            {[
              {
                title: "Company",
                links: [{ href: "/about", label: "About Us" }, { href: "/blog", label: "Blog" }, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" }],
              },
              {
                title: "Services",
                links: [{ href: "/services", label: "Web Development" }, { href: "/pricing", label: "AI Systems & Pricing" }, { href: "/industries", label: "Industries" }, { href: "/work", label: "Case Studies" }],
              },
              {
                title: "Legal",
                links: [{ href: "/terms", label: "Terms of Service" }, { href: "/privacy", label: "Privacy Policy" }],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase mb-6 text-white/40">{col.title}</h4>
                <ul className="space-y-4 text-sm text-white/60">
                  {col.links.map((link, j) => (
                    <li key={j}><Link href={link.href} className="hover-trigger hover:text-[#7fa4ff] transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider">
              © {new Date().getFullYear()} NovaMac Solutions.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#7fa4ff] animate-pulse" />
              <p className="text-[10px] font-mono text-white/35 uppercase tracking-wider">Accepting new projects</p>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
