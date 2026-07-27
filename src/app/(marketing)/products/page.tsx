import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NovaMac Engine | Proprietary CRM & Automation Platform",
  description: "NovaMac Engine is our proprietary CRM and business automation platform, built to streamline client management, AI workflows, and operations.",
};

export default function ProductsPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 mb-6">
        <Sparkles className="w-8 h-8 text-brand" />
      </div>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">NovaMac Engine</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Discover the power of our proprietary CRM and automation engine. (Content pending)
      </p>
    </div>
  );
}
