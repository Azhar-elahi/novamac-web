import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[#140D07] text-[#FAF6F0] relative font-sans">
      <span className="px-3.5 py-1 bg-[#0A0A0A] border border-[#D49B6A]/40 text-[#D49B6A] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-4 shadow-sm">
        404 ERROR // PAGE NOT FOUND
      </span>
      <h1 className="text-7xl sm:text-9xl font-black leading-none text-[#D49B6A] mb-4">404</h1>
      <h2 className="text-2xl font-bold text-[#FAF6F0] mb-4">Page Not Found.</h2>
      <p className="text-[#C2B4A3] font-light mb-10 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
        We couldn&rsquo;t find the page you were looking for. It might have been moved or doesn&rsquo;t exist.
      </p>
      <Link href="/" className="group inline-flex items-center gap-2 bg-[#D49B6A] text-[#0A0A0A] font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full hover:bg-[#FAF6F0] transition-all duration-300 shadow-lg">
        Return Home <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
