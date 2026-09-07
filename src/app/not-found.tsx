import Link from "next/link";
import { ArrowRight, Compass, FileText, HelpCircle, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 bg-[#FAF2F2] text-[#202020] relative font-sans">
      
      {/* 404 Error Tag */}
      <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-sm">
        HTTP 404 // ROUTE NOT FOUND
      </span>

      {/* Main Headings */}
      <h1 className="text-6xl sm:text-8xl font-black leading-none text-[#202020] mb-3 tracking-tight">
        404 Page Not Found
      </h1>
      
      <h2 className="text-xl sm:text-2xl font-extrabold text-[#FF5733] mb-4">
        Resource Recovery Index for AI Agents & Visitors
      </h2>

      <p className="text-gray-600 font-normal mb-10 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
        The requested path does not exist on this server. If you are an AI crawler or automated agent, use the recovery links below to locate site resources, machine specifications, and documentation index.
      </p>

      {/* Recovery Links Grid for AI Crawlers & Agents */}
      <div className="w-full max-w-2xl bg-white border border-[#F0DCDC] rounded-3xl p-6 mb-10 shadow-sm text-left">
        <div className="font-mono text-xs text-[#FF5733] font-bold uppercase tracking-wider mb-4 border-b border-[#F0DCDC] pb-2 flex items-center gap-2">
          <Compass className="w-4 h-4 text-[#FF5733]" />
          <span>Machine-Readable Recovery Routes</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
          <a href="https://novamacsolutions.com/sitemap.xml" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>sitemap.xml</span>
            <span className="text-[#FF5733]">Sitemap Index</span>
          </a>

          <a href="https://novamacsolutions.com/llms.txt" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>llms.txt</span>
            <span className="text-[#FF5733]">LLM Specification</span>
          </a>

          <a href="https://novamacsolutions.com/agent-instructions.md" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>agent-instructions.md</span>
            <span className="text-[#FF5733]">Agent Rules</span>
          </a>

          <Link href="/services" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>/services</span>
            <span className="text-[#FF5733]">Capabilities</span>
          </Link>

          <Link href="/process" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>/process</span>
            <span className="text-[#FF5733]">6-Step Process</span>
          </Link>

          <Link href="/contact" className="p-3 bg-[#FAF2F2] border border-[#F0DCDC] hover:border-[#FF5733] rounded-xl text-[#202020] flex items-center justify-between transition-colors">
            <span>/contact</span>
            <span className="text-[#FF5733]">Contact Studio</span>
          </Link>
        </div>
      </div>

      {/* Return Home Button */}
      <Link href="/" className="group inline-flex items-center gap-2 bg-[#FF5733] text-white font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#202020] transition-all duration-300 shadow-lg min-h-[44px]">
        <span>Return to Homepage</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>

    </div>
  );
}

