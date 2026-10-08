import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import ServicePageClient from "@/components/services/ServicePageClient";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

const SERVICE_META_OVERRIDES: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    faqs: { question: string; answer: string }[];
  }
> = {
  "website-development": {
    title: "Custom Website Development Agency | Sub-0.8s Next.js Web Platforms | NovaMac",
    description: "High-performance custom Next.js 16 web development with sub-0.8s load speeds, 98+ PageSpeed scores, built-in SEO and zero template bloat. Serving US, UK, EU & Middle East.",
    keywords: [
      "custom website development company",
      "hire Next.js developers USA UK",
      "bespoke web development studio",
      "WordPress to Next.js migration",
      "high conversion business website",
      "enterprise Next.js agency"
    ],
    faqs: [
      {
        question: "Why should my company choose custom Next.js over WordPress or Webflow?",
        answer: "Custom Next.js web applications load in under 0.8 seconds (3x faster than WordPress), have zero plugin vulnerabilities, achieve 98+ Google PageSpeed scores, and convert visitors at significantly higher rates with zero recurring template license fees."
      },
      {
        question: "How long does a custom business website project take?",
        answer: "Our standard Next.js sprint delivers a fully functioning, responsive, SEO-optimized staging platform in 10 to 14 business days with weekly live demo milestones."
      },
      {
        question: "Who owns the website source code and design?",
        answer: "You retain 100% intellectual property and full Git repository ownership upon project completion with zero vendor lock-in."
      }
    ]
  },
  "custom-software": {
    title: "Custom Software Development Company | Full-Stack Engineering Studio | NovaMac",
    description: "Bespoke business software, internal operations portals & cloud web applications engineered precisely for your workflows with 100% source code ownership. US, UK, EU & UAE.",
    keywords: [
      "custom software development company",
      "bespoke software development UK US",
      "custom business software developers",
      "offshore software engineering team",
      "full stack web app development",
      "hire dedicated software developers"
    ],
    faqs: [
      {
        question: "How do you scope and quote custom software projects?",
        answer: "We perform a thorough architectural discovery session to outline database schemas, API integrations, user roles, and security protocols. Projects are quoted on transparent, fixed-milestone pricing with zero surprise hourly bills."
      },
      {
        question: "Can your team integrate with our existing APIs and databases?",
        answer: "Yes. We regularly connect custom applications with existing PostgreSQL/MySQL databases, legacy software, third-party payment gateways, and third-party SaaS APIs."
      },
      {
        question: "How do you handle ongoing maintenance and support?",
        answer: "Every custom software build includes 30 days of post-launch SLA monitoring and bug fixes. We also offer flexible monthly maintenance retainers for continuous feature iterations."
      }
    ]
  },
  "crm-development": {
    title: "Custom CRM Software Development & Sales Pipelines | NovaMac Solutions",
    description: "Bespoke CRM software replacing spreadsheets and expensive Salesforce licenses. Automated lead qualification, WhatsApp Meta API integration & sales pipeline tracking.",
    keywords: [
      "custom CRM development company",
      "bespoke CRM software developers",
      "custom real estate CRM development",
      "replace Salesforce with custom CRM",
      "WhatsApp CRM integration",
      "sales pipeline software development"
    ],
    faqs: [
      {
        question: "Why build a custom CRM instead of paying for Salesforce or HubSpot?",
        answer: "Off-the-shelf CRMs charge $150–$300 per seat every month as your team grows. A custom NovaMac CRM has ZERO per-user licensing fees, is tailored 100% to your sales funnel, and runs on your own private cloud database."
      },
      {
        question: "Can you integrate WhatsApp for automated lead qualification?",
        answer: "Yes. We integrate the official Meta Cloud WhatsApp Business API directly into your CRM, enabling 24/7 instant automated replies, brochure distribution, and automatic agent routing."
      },
      {
        question: "Can we import our existing leads from Excel or previous CRMs?",
        answer: "Yes, our team handles complete CSV/Excel data cleaning, validation, and migration into your new custom CRM database without data loss."
      }
    ]
  },
  "erp-development": {
    title: "Custom ERP Software Development & Enterprise Portals | NovaMac Solutions",
    description: "Enterprise cloud ERP systems for inventory, supply chain, multi-branch operations, retail & finance with zero recurring per-user fees. US, UK, EU & UAE.",
    keywords: [
      "custom ERP development company",
      "enterprise resource planning software development",
      "cloud ERP developers Dubai UAE USA",
      "bespoke ERP systems for retail and manufacturing",
      "supply chain ERP software",
      "multi branch inventory ERP development"
    ],
    faqs: [
      {
        question: "What modules are included in a custom NovaMac ERP system?",
        answer: "Modules are fully tailored to your operations, typically including Multi-Location Inventory, Purchase Order Automation, Supplier Management, Sales Invoicing, Financial Reports, and Role-Based Employee Access Control."
      },
      {
        question: "Is your ERP compliant with tax and invoice regulations in US, UK, and UAE?",
        answer: "Yes. We engineer compliant invoicing including UAE VAT & ZATCA e-invoicing standards, UK VAT, and US sales tax calculation integrations."
      },
      {
        question: "How does NovaMac prevent ERP system lag with large datasets?",
        answer: "We architect our systems with PostgreSQL connection pooling, Redis caching, and edge-distributed API endpoints, ensuring sub-second response times even with millions of stock records."
      }
    ]
  },
  "pos-development": {
    title: "Custom POS Software Development & Cloud Point of Sale Systems | NovaMac Solutions",
    description: "High-speed cloud POS software, multi-branch retail & restaurant systems with offline sync, barcode scanning, thermal printing and zero per-terminal monthly fees. US, UK & UAE.",
    keywords: [
      "custom POS software development company",
      "cloud point of sale systems developers",
      "retail POS software development",
      "restaurant POS software development",
      "multi store POS system development",
      "offline first cloud POS software",
      "replace Square Clover POS custom software"
    ],
    faqs: [
      {
        question: "Can the POS terminal operate when internet connection goes down?",
        answer: "Yes. We architect an offline-first IndexedDB engine that records transactions, prints thermal receipts, and opens cash drawers offline, automatically syncing transactions to the cloud once connectivity resumes."
      },
      {
        question: "Do you charge monthly fees per cash register or terminal?",
        answer: "No. Unlike Square, Clover, or Toast which charge $60–$120/month per terminal, a NovaMac custom POS has ZERO per-terminal licensing fees. You own the code and deploy to as many registers as you need."
      },
      {
        question: "Does the POS synchronize stock in real time with our online store?",
        answer: "Yes. Whenever an item is sold in-store or online, inventory quantities automatically reconcile across all physical branches and e-commerce platforms in real time."
      }
    ]
  },
  "ai-automation": {
    title: "Custom AI Development & Agent Automation | NovaMac Solutions",
    description: "Bespoke AI applications, autonomous agents, RAG knowledge bases, and LLM integrations engineered to automate repetitive business workflows. US, UK, EU & UAE.",
    keywords: [
      "custom AI development company",
      "AI workflow automation agency",
      "autonomous AI agents for business",
      "RAG knowledge base development",
      "hire OpenAI Claude developers",
      "AI customer service automation"
    ],
    faqs: [
      {
        question: "How do custom AI agents differ from simple ChatGPT prompts?",
        answer: "Our AI agents are integrated directly into your private business data, databases, and APIs via secure RAG architecture, allowing them to read invoices, qualify leads, trigger CRM updates, and send emails autonomously."
      },
      {
        question: "Is our proprietary business data protected and private?",
        answer: "Yes. We use zero-retention enterprise API endpoints where customer and internal company data is never used to train public foundation models."
      }
    ]
  },
  "digital-marketing": {
    title: "Technical SEO, GEO & Digital Growth Systems | NovaMac Solutions",
    description: "Data-driven technical SEO, Generative Engine Optimization (AI Search) & high-conversion lead generation systems built for measurable ROI.",
    keywords: [
      "technical SEO agency",
      "generative engine optimization GEO agency",
      "AEO answer engine optimization",
      "high conversion landing page optimization",
      "B2B search engine marketing"
    ],
    faqs: [
      {
        question: "What is GEO (Generative Engine Optimization)?",
        answer: "GEO optimizes your digital presence to be cited and recommended by AI answer engines like ChatGPT Search, Perplexity AI, Claude, and Google AI Overviews using structured schemas, citations, and authority signals."
      }
    ]
  },
  "saas-development": {
    title: "Custom SaaS Development & MVP Engineering Studio | NovaMac Solutions",
    description: "Production-ready SaaS software engineering, multi-tenant cloud architecture, Stripe subscription billing and rapid MVP launches in 4 weeks.",
    keywords: [
      "custom SaaS development company",
      "SaaS MVP development studio",
      "hire SaaS engineers",
      "multi tenant SaaS architecture Next.js",
      "Stripe billing SaaS development"
    ],
    faqs: [
      {
        question: "How quickly can you develop and launch a SaaS MVP?",
        answer: "Our core SaaS MVP framework delivers a production-ready application with multi-tenant auth, database schemas, Stripe billing, and user dashboards in 3 to 4 weeks."
      }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const override = SERVICE_META_OVERRIDES[slug];
  const title = override ? override.title : `${service.title} | Software Engineering & Design | NovaMac Solutions`;
  const description = override ? override.description : service.tagline;
  const keywords = override ? override.keywords : [service.title, service.shortTitle, service.category, "NovaMac Solutions", "Custom Software Development"];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://novamacsolutions.com/services/${service.slug}`,
      languages: {
        "en-US": "https://novamacsolutions.com/us",
        "en-GB": "https://novamacsolutions.com/uk",
        "en-CA": "https://novamacsolutions.com/ca",
        "en-EU": "https://novamacsolutions.com/eu",
        "en-AE": "https://novamacsolutions.com/middle-east",
        "en-PK": "https://novamacsolutions.com/pk",
        "x-default": "https://novamacsolutions.com",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://novamacsolutions.com/services/${service.slug}`,
      locale: "en_US",
      images: [
        {
          url: "https://novamacsolutions.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} by NovaMac Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://novamacsolutions.com/og-image.png"],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const override = SERVICE_META_OVERRIDES[slug];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": override ? override.title : service.title,
    "serviceType": service.category,
    "provider": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "description": override ? override.description : service.tagline,
    "url": `https://novamacsolutions.com/services/${service.slug}`,
    "areaServed": [
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" },
      { "@type": "Country", "name": "Canada" },
      { "@type": "Country", "name": "Germany" }
    ],
    "offers": {
      "@type": "Offer",
      "price": service.startingPrice,
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://novamacsolutions.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://novamacsolutions.com/services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://novamacsolutions.com/services/${service.slug}`,
      },
    ],
  };

  const faqSchema = override?.faqs && override.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": override.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <ServicePageClient service={service} />
    </>
  );
}
