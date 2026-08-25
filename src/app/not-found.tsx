import Link from "next/link";
import { ArrowRight, Compass, FileText, HelpCircle, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 bg-[#0B1220] text-[#F8FAFC] relative font-sans">
      
      {/* 404 Error Tag */}
      <span className="px-4 py-1.5 bg-[#0F1C33] border border-[#1E2E4A] text-[#3B82F6] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-sm">
        HTTP 404 // ROUTE NOT FOUND
      </span>

      {/* Main Headings */}
      <h1 className="text-6xl sm:text-8xl font-black leading-none text-[#F8FAFC] mb-3 tracking-tight">
        404 Page Not Found
      </h1>
      
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#3B82F6] mb-4">
        Resource Recovery Index for AI Agents & Visitors
      </h2>

      <p className="text-[#94A3B8] font-normal mb-10 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
        The requested path does not exist on this server. If you are an AI crawler or automated agent, use the recovery links below to locate site resources, machine specifications, and documentation index.
      </p>

      {/* Recovery Links Grid for AI Crawlers & Agents */}
      <div className="w-full max-w-2xl bg-[#0F1C33]/90 border border-[#1E2E4A] border-t-white/10 rounded-3xl p-6 mb-10 shadow-2xl text-left">
        <div className="font-mono text-xs text-[#3B82F6] font-bold uppercase tracking-wider mb-4 border-b border-[#1E2E4A] pb-2 flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#3B82F6]" />
          <span>Machine-Readable Recovery Routes</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
          <a href="https://novamacsolutions.com/sitemap.xml" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>sitemap.xml</span>
            <span className="text-[#3B82F6]">Sitemap Index</span>
          </a>

          <a href="https://novamacsolutions.com/llms.txt" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>llms.txt</span>
            <span className="text-[#3B82F6]">LLM Specification</span>
          </a>

          <a href="https://novamacsolutions.com/agent-instructions.md" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>agent-instructions.md</span>
            <span className="text-[#3B82F6]">Agent Rules</span>
          </a>

          <Link href="/services" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>/services</span>
            <span className="text-[#3B82F6]">Capabilities</span>
          </Link>

          <Link href="/pricing" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>/pricing</span>
            <span className="text-[#3B82F6]">Pricing Tiers</span>
          </Link>

          <Link href="/contact" className="p-3 bg-[#070D18] border border-[#1E2E4A] hover:border-[#3B82F6] rounded-xl text-[#F8FAFC] flex items-center justify-between transition-colors">
            <span>/contact</span>
            <span className="text-[#3B82F6]">Contact Studio</span>
          </Link>
        </div>
      </div>

      {/* Return Home Button */}
      <Link href="/" className="group inline-flex items-center gap-2 bg-[#3B82F6] text-white font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-white hover:text-[#0B1220] transition-all duration-300 shadow-lg min-h-[44px]">
        <span>Return to Homepage</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

    </div>
  );
}
