import { prisma } from "@/lib/prisma";
import FaqAdminClientPage from "./FaqAdminClientPage";

export const dynamic = "force-dynamic";

export default async function AdminFaqPage() {
  let faqs: any[] = [];
  try {
    faqs = await prisma.faqItem.findMany({
      orderBy: { order: "asc" }
    });
  } catch (e) {
    console.warn("Prisma query notice in FAQ page:", e);
  }

  // Fallback initial faqs if database empty
  if (faqs.length === 0) {
    faqs = [
      {
        id: "faq-1",
        question: "What capabilities does NovaMac Solutions specialize in?",
        answer: "NovaMac Solutions specializes in custom Next.js web development, custom software engineering, tailored CRM & ERP business portals, autonomous AI workflow automations, and scalable SaaS platforms.",
        category: "General",
        service: "website-development",
        published: true
      },
      {
        id: "faq-2",
        question: "How are custom CRM and ERP business systems structured?",
        answer: "Our CRM and ERP systems are custom-engineered around your exact lead stages, inventory logic, and team workflows without monthly per-seat licensing fees.",
        category: "Business Systems",
        service: "crm-development",
        published: true
      }
    ];
  }

  return <FaqAdminClientPage initialFaqs={faqs} />;
}
