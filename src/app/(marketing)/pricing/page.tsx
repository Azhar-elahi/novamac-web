import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 mb-6">
        <Sparkles className="w-8 h-8 text-brand" />
      </div>
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Pricing Plans</h1>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
        Transparent pricing for modern businesses. (Tiers pending user decision)
      </p>
      <Link href="/contact" className="px-6 py-3 bg-brand text-slate-800 rounded-full font-medium">
        Contact Sales
      </Link>
    </div>
  );
}
