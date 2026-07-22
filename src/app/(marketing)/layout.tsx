import Link from "next/link";
import { ChatWidget } from "@/components/chat/ChatWidget";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 relative">
      {/* Noise Overlay */}
      <div className="noise-bg" />

      {/* ── HEADER ───────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 xl:px-20 h-[72px] bg-white/70 backdrop-blur-md border-b border-slate-200">

        <Link href="/" className="hover-trigger flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center shrink-0 border border-slate-300 group-hover:border-white transition-colors duration-300">
            <span className="font-heading font-black text-slate-900 text-xs">NM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-slate-900 group-hover:text-slate-700 transition-colors duration-300 leading-none">NovaMac</span>
            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none mt-1 group-hover:text-slate-600 transition-colors">solutions</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.18em] text-gray-500">
          {[
            { href: "/services", label: "Services" },
            { href: "/work",     label: "Work"     },
            { href: "/about",    label: "About"    },
            { href: "/blog",     label: "Blog"     },
            { href: "/faq",      label: "FAQ"      },
          ].map((link) => (
            <Link key={link.href} href={link.href}
              className="hover-trigger hover:text-blue-600 transition-colors duration-300 relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">

          <Link href="/contact"
            className="hover-trigger inline-flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest px-5 py-2.5 bg-blue-600 text-slate-900 hover:bg-gray-200 transition-all duration-300">
            Start Project
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200">
        <div className="px-6 md:px-12 xl:px-20 pt-20 pb-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">

            <div className="col-span-2">
              <Link href="/" className="hover-trigger flex items-center gap-3 mb-6 group">
                <div className="w-9 h-9 flex items-center justify-center border border-slate-300 group-hover:border-white transition-colors">
                  <span className="font-heading font-black text-slate-900 text-sm">NM</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-lg tracking-tight group-hover:text-slate-700 transition-colors leading-none">NovaMac</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-none mt-1 group-hover:text-slate-600 transition-colors">solutions</span>
                </div>
              </Link>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs font-light mb-8">
                Elite software engineering studio. Premium digital products for brands that refuse to compromise.
              </p>
              <div className="space-y-1">
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">hello@novamacsolutions.com</p>
                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">415 480 4281</p>
              </div>
            </div>

            {[
              {
                title: "Company",
                links: [{ href: "/about", label: "About Us" }, { href: "/blog", label: "Blog" }, { href: "/faq", label: "FAQ" }, { href: "/contact", label: "Contact" }],
              },
              {
                title: "Services",
                links: [{ href: "/services", label: "Web Development" }, { href: "/services", label: "E-Commerce" }, { href: "/services", label: "Custom Software" }, { href: "/work", label: "Case Studies" }],
              },
              {
                title: "Legal",
                links: [{ href: "/terms", label: "Terms of Service" }, { href: "/privacy", label: "Privacy Policy" }],
              },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="font-mono text-[9px] tracking-[0.3em] uppercase mb-6 text-gray-500">{col.title}</h4>
                <ul className="space-y-4 text-sm text-slate-600">
                  {col.links.map((link, j) => (
                    <li key={j}><Link href={link.href} className="hover-trigger hover:text-blue-600 transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">
              © {new Date().getFullYear()} NovaMac Technologies Inc.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">Accepting new projects</p>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
