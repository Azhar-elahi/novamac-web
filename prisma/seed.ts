import { PrismaClient } from "@prisma/client";
import { MASTER_BLOG_POSTS } from "../src/lib/blog-data";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting NovaMac 2.0 Database Seeding...");

  // 1. Seed Master Blog Articles
  for (const post of MASTER_BLOG_POSTS) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        seoTitle: post.seoTitle,
        seoDesc: post.seoDesc,
        published: true,
      },
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        coverImage: post.coverImage,
        seoTitle: post.seoTitle,
        seoDesc: post.seoDesc,
        published: true,
      },
    });
  }
  console.log(`Successfully seeded ${MASTER_BLOG_POSTS.length} master blog articles.`);

  // 2. Seed Master FAQ Items
  const FAQS_DATA = [
    {
      question: "Why choose custom Next.js web applications over WordPress or Wix?",
      answer: "Unlike template page builders that depend on 30+ bloated plugins and slow database queries, NovaMac hand-codes Next.js 15 web systems deployed on edge networks. This guarantees sub-second response speeds, 98+ Google Core Web Vitals, zero plugin vulnerability risks, and significantly higher conversion rates for your paid and organic traffic.",
      category: "Capabilities",
      service: "website-development",
    },
    {
      question: "How does a custom CRM or ERP replace expensive SaaS monthly fees?",
      answer: "Off-the-shelf platforms like Salesforce or HubSpot charge per-seat monthly fees that scale into thousands of dollars per month as your team grows. NovaMac builds bespoke CRM and ERP operational portals tailored 100% around your exact business logic. You pay once for development with zero monthly seat licensing fees, saving your company over $20,000 annually.",
      category: "Business Systems",
      service: "crm-development",
    },
    {
      question: "How can AI Automation Agents be integrated into our business?",
      answer: "We develop autonomous LLM agents and Retrieval-Augmented Generation (RAG) knowledge systems that connect directly into your CRM, website, or backend. They operate 24/7 to automatically qualify leads, generate project briefs, process incoming documents, and answer customer support inquiries based on your private company documentation.",
      category: "AI Automation",
      service: "ai-automation",
    },
    {
      question: "Do you build complete SaaS MVPs from scratch?",
      answer: "Yes. We engineer production-ready SaaS platforms — from initial database schema architecture and Figma UI/UX to multi-tenant user authentication, Stripe subscription billing, and edge cloud deployment in 4 weeks.",
      category: "SaaS Products",
      service: "saas-development",
    },
    {
      question: "Do clients get 100% full source code and database IP ownership?",
      answer: "Yes. Upon project completion, NovaMac transfers full 100% intellectual property and Git repository ownership directly to your company. There are zero proprietary locks, zero vendor holdbacks, and zero recurring royalty fees. Your software belongs entirely to your business asset portfolio.",
      category: "Code Ownership",
      service: "custom-software",
    },
    {
      question: "How do you guarantee sub-second page speed and Core Web Vitals?",
      answer: "Every build undergoes rigorous performance optimization: automatic WebP image compression, edge CDN routing, server-side route pre-fetching, and zero render-blocking scripts. We guarantee sub-0.8s LCP and top Google PageSpeed scores on all production launches.",
      category: "Performance",
      service: "website-development",
    },
    {
      question: "What ongoing post-launch maintenance and security support do you offer?",
      answer: "We provide comprehensive post-launch retainer packages including 24/7 uptime monitoring, security updates, database backups, cloud hosting management, and ongoing feature enhancements so your systems scale smoothly.",
      category: "Support",
      service: "website-development",
    },
    {
      question: "How do you manage projects across US, UK, Middle East, and Asia timezones?",
      answer: "We maintain dedicated async-first communication workflows with daily Slack updates, weekly live video demos, and transparent milestone tracking. Whether your team operates in PST, EST, GMT, GST, or PKT, communication is seamless and zero friction.",
      category: "Global Operations",
      service: "custom-software",
    },
    {
      question: "How is project pricing determined and do you offer fixed-scope quotes?",
      answer: "All pricing is transparent and project-scoped based on technical requirements. Web projects start from $1,500, while custom software, CRMs, and SaaS products receive fixed-scope blueprints before coding begins — ensuring zero surprise costs.",
      category: "Pricing",
      service: "custom-software",
    },
    {
      question: "What is the exact process to start our project?",
      answer: "Starting is simple. Book a 30-minute Discovery Call or fill out our quick intake form. Our engineering lead analyzes your goals, identifies operational bottlenecks, and delivers a complete technical blueprint and timeline estimate within 24 hours.",
      category: "Process",
      service: "website-development",
    },
  ];

  for (const faq of FAQS_DATA) {
    const existing = await prisma.faqItem.findFirst({ where: { question: faq.question } });
    if (!existing) {
      await prisma.faqItem.create({
        data: {
          question: faq.question,
          answer: faq.answer,
          category: faq.category,
          service: faq.service,
          published: true,
        },
      });
    }
  }
  console.log(`Successfully seeded ${FAQS_DATA.length} master FAQ items.`);

  console.log("Database seeding completed cleanly.");
}

main()
  .catch((e) => {
    console.error("Database seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
