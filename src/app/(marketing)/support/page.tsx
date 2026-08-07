import { ArrowRight, MessageSquare, LifeBuoy } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | NovaMac Solutions",
  description: "Get help with your NovaMac Solutions projects.",
};

export default function SupportPage() {
  return (
    <main className="bg-[#05060c] text-white min-h-screen pt-36 pb-20 px-6 gradient-mesh">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">/ Help Center</p>
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl tracking-tighter mb-6 text-white">How can we help?</h1>
          <p className="text-xl text-white/55 font-light max-w-xl mx-auto">
            Whether you need technical support, have a billing question, or want to report an issue, our team is here for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="card-vibrant p-8 rounded-2xl">
            <LifeBuoy className="w-8 h-8 text-brand mb-6" />
            <h3 className="text-2xl font-bold mb-3 text-white">Existing Clients</h3>
            <p className="text-white/55 font-light mb-8">
              If you are an existing client with an active project, please contact your assigned project manager directly, or reach out via email for a high-priority response.
            </p>
            <a href="mailto:hello@novamacsolutions.com" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">
              Email Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="card-vibrant p-8 rounded-2xl">
            <MessageSquare className="w-8 h-8 text-brand mb-6" />
            <h3 className="text-2xl font-bold mb-3 text-white">General Inquiries</h3>
            <p className="text-white/55 font-light mb-8">
              For general questions or if you don't have an account, please reach out via our contact form.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/70 hover:text-white transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
