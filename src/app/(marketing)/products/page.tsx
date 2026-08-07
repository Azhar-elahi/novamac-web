import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaMac Engine | Proprietary CRM & Automation Platform",
  description: "NovaMac Engine is our proprietary CRM and business automation platform, built to streamline client management, AI workflows, and operations.",
};

export default function ProductsPage() {
  return (
    <main className="bg-[#05060c] text-white min-h-screen gradient-mesh">
      <div className="flex-1 flex flex-col items-center justify-center py-40 text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl mb-8">
          <Sparkles className="w-8 h-8 text-brand" />
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight mb-6 text-white">NovaMac Engine</h1>
        <p className="text-white/55 text-lg max-w-2xl mx-auto font-light">
          Discover the power of our proprietary CRM and automation engine. (Content pending)
        </p>
      </div>
    </main>
  );
}
