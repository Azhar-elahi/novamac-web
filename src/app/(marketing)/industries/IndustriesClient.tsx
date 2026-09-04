"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Building2, ShoppingBag, Laptop, ShieldCheck, Stethoscope } from "lucide-react";

const INDUSTRIES = [
  {
    slug: "real-estate-wholesaling",
    icon: MapPin,
    title: "Real Estate & Wholesaling",
    desc: "Automated deal pipelines, direct-to-seller landing pages, and lead intake CRMs built for wholesalers and real estate investors.",
    live: true,
  },
  {
    slug: "e-commerce",
    icon: ShoppingBag,
    title: "E-Commerce & Digital Retail",
    desc: "Sub-second Next.js storefronts, custom Shopify integrations, and high-converting checkout flows built for fast catalog browsing.",
    live: true,
  },
  {
    slug: "saas-tech",
    icon: Laptop,
    title: "SaaS & Software Startups",
    desc: "Clean product landing pages, customer portals, user onboarding flows, and API-driven dashboard interfaces.",
    live: true,
  },
  {
    slug: "agencies-consultancies",
    icon: Building2,
    title: "Agencies & Professional Services",
    desc: "High-impact portfolio showcases, client intake forms, and automated proposal request drawers for B2B consultancies.",
    live: true,
  },
  {
    slug: "finance-legal",
    icon: ShieldCheck,
    title: "Financial & Legal Firms",
    desc: "Secure, compliant web platforms with fast page loads, trust indicators, and structured contact workflows.",
    live: true,
  },
  {
    slug: "health-wellness",
    icon: Stethoscope,
    title: "Healthcare & Wellness",
    desc: "Patient appointment scheduling portals, mobile-first service directories, and responsive HIPAA-compliant forms.",
    live: true,
  },
];

export default function IndustriesClient() {
  return (
    <div className="bg-[#FAF2F2] text-[#202020] min-h-screen pt-0 pb-20 overflow-hidden font-sans">
      
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 border-b border-white/10 overflow-hidden min-h-[50vh] flex items-center bg-[#0D0D0D] text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
            <source src="/videos/city-traffic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
          <span className="px-4 py-1.5 bg-[#FF5733]/10 border border-[#FF5733]/30 text-[#FF5733] font-mono text-xs font-bold uppercase tracking-widest rounded-full inline-block mb-6">
            INDUSTRIES WE SERVE
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Tailored Engineering for Your Specific Industry.
          </h1>

          <p className="text-gray-300 text-base sm:text-xl font-light leading-relaxed mb-10 max-w-2xl">
            We build web applications and digital systems aligned with how your industry operates — focused on usability, reliability, and real results.
          </p>
        </motion.div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.slug}
                className="bg-white border border-[#F0DCDC] text-[#202020] rounded-3xl p-8 flex flex-col justify-between hover:border-[#FF5733] transition-all duration-300 group shadow-sm"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/30 flex items-center justify-center text-[#FF5733] mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#202020] mb-3 group-hover:text-[#FF5733] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-gray-600 text-xs font-light leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#FF5733] hover:text-[#202020] transition-colors"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CUSTOM INDUSTRY CTA */}
        <div className="mt-16 bg-[#FAF2F2] text-[#0D0D0D] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#F0DCDC]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-[#0D0D0D]">Don&apos;t See Your Industry Listed?</h3>
            <p className="text-gray-600 text-xs sm:text-sm font-light">
              We design and engineer bespoke web platforms for custom workflows and unique business models.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#FF5733] text-white hover:bg-[#202020] font-extrabold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-lg whitespace-nowrap"
          >
            Discuss Your Custom Project
          </Link>
        </div>
      </section>

    </div>
  );
}
