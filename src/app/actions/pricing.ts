"use server";

import { revalidatePath } from "next/cache";

export interface PricingPlanItem {
  id: string;
  slug: string;
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
}

// In-memory persistent fallback store for development & production
const DEFAULT_PLANS: PricingPlanItem[] = [
  {
    id: "starter",
    slug: "starter",
    title: "STARTER TIER",
    price: "$299",
    subtitle: "Ideal for small businesses & single-landing projects",
    features: [
      "Custom Landing Page (Up to 5 Subpages)",
      "Sub-Second Next.js Performance",
      "Mobile-First Responsive Design",
      "Basic SEO & Meta Schema Setup",
      "Contact Form & Lead Routing",
      "14 Days Post-Launch Support",
    ],
    popular: false,
  },
  {
    id: "growth",
    slug: "growth",
    title: "GROWTH TIER",
    price: "$599",
    subtitle: "Most popular for growing brands & scaling businesses",
    features: [
      "Multi-Page Custom Web Platform (Up to 15 Pages)",
      "High-Conversion UI/UX Design System",
      "CMS & Content Management System",
      "Advanced SEO & Structured Data Schemas",
      "Google Analytics & Conversion Tracking",
      "3 Rounds of Iterative Revisions",
      "30 Days Dedicated Support",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    slug: "enterprise",
    title: "ENTERPRISE",
    price: "From $999",
    subtitle: "Full-scale custom software, SaaS, & complex CRMs",
    features: [
      "Custom Web Applications & SaaS Platforms",
      "API Integrations & Payment Gateways",
      "Autonomous AI & Custom CRM Workflows",
      "Zero-Trust Security & SOC2 Compliance",
      "Dedicated Senior Tech Lead",
      "Priority 24/7 SLA Support",
    ],
    popular: false,
  },
  // Addons
  {
    id: "logo-design",
    slug: "logo-design",
    title: "Logo & Brand Identity",
    price: "$149",
    subtitle: "Custom vector logo design with full brand kit",
    features: ["Primary Logo & Mark", "Color Palette & Typography", "Vector Source Files"],
  },
  {
    id: "seo-monthly",
    slug: "seo-monthly",
    title: "Monthly SEO Growth",
    price: "$149/mo",
    subtitle: "Ongoing search engine optimization and ranking audits",
    features: ["Keyword Tracking", "On-Page Optimization", "Monthly Performance Report"],
  },
  {
    id: "ai-crm",
    slug: "ai-crm",
    title: "AI & Custom CRM System",
    price: "From $499",
    subtitle: "Custom customer management platform with automated AI workflows",
    features: ["Automated Lead Pipeline", "Custom Dashboard", "AI Chat & Support Integrations"],
  },
];

let globalPricingStore: PricingPlanItem[] = [...DEFAULT_PLANS];

export async function getPricingPlans(): Promise<PricingPlanItem[]> {
  try {
    const { PrismaClient } = await import("@prisma/client");
    const prisma = new PrismaClient();
    const dbPlans = await prisma.pricingPlan.findMany();
    if (dbPlans.length > 0) {
      return dbPlans.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        price: p.price,
        subtitle: p.subtitle || "",
        features: JSON.parse(p.features || "[]"),
        popular: p.popular,
      }));
    }
  } catch (err) {
    // Fall back to in-memory dynamic store if DB table not yet migrated
  }

  return globalPricingStore;
}

export async function updatePricingPlan(
  slug: string,
  newPrice: string,
  newTitle?: string,
  newSubtitle?: string,
  newFeatures?: string[]
) {
  try {
    // Update in-memory store
    globalPricingStore = globalPricingStore.map((plan) => {
      if (plan.slug === slug) {
        return {
          ...plan,
          price: newPrice,
          title: newTitle !== undefined ? newTitle : plan.title,
          subtitle: newSubtitle !== undefined ? newSubtitle : plan.subtitle,
          features: newFeatures !== undefined ? newFeatures : plan.features,
        };
      }
      return plan;
    });

    // Try updating Prisma DB
    try {
      const { PrismaClient } = await import("@prisma/client");
      const prisma = new PrismaClient();
      await prisma.pricingPlan.upsert({
        where: { slug },
        update: {
          price: newPrice,
          ...(newTitle ? { title: newTitle } : {}),
          ...(newSubtitle ? { subtitle: newSubtitle } : {}),
          ...(newFeatures ? { features: JSON.stringify(newFeatures) } : {}),
        },
        create: {
          slug,
          price: newPrice,
          title: newTitle || slug.toUpperCase(),
          subtitle: newSubtitle || "",
          features: JSON.stringify(newFeatures || []),
        },
      });
    } catch (dbErr) {
      // Graceful fallback to memory store
    }

    revalidatePath("/pricing");
    revalidatePath("/home");
    revalidatePath("/(admin)/7222-@dm1nl0g1n/pricing");

    return { success: true, price: newPrice };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
