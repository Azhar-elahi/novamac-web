import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-screen text-center px-6 bg-[#f6f1e7] text-[#211f1a] gradient-mesh">
      <span className="annotation-label -rotate-2 inline-block mb-4">— lost?</span>
      <h1 className="font-heading font-medium text-[clamp(3.5rem,10vw,7rem)] leading-none text-script mb-4">404</h1>
      <h2 className="font-heading text-2xl font-medium mb-4">Page not found.</h2>
      <p className="text-[#211f1a]/55 font-light mb-10 max-w-md mx-auto leading-relaxed">
        We couldn&rsquo;t find the page you were looking for. It might have been moved or doesn&rsquo;t exist.
      </p>
      <Link href="/" className="hover-trigger group inline-flex items-center gap-2 bg-[#211f1a] text-[#f6f1e7] font-medium text-sm px-7 py-3.5 rounded-full hover:bg-[#2f6b45] transition-all duration-300">
        Return Home <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
