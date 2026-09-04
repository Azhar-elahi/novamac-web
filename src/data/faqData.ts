import { FAQItem } from "@/types";

export const FAQ_DATA: FAQItem[] = [
  {
    id: "tech-stack",
    question: "What technology stack does NovaMac Solutions build on?",
    answer: "We engineer exclusively on Next.js 15, React 19, TypeScript, Tailwind CSS, PostgreSQL, and Node.js. For e-commerce, we utilize Headless Shopify Storefront API and Stripe. For AI automation, we integrate OpenAI GPT-4o, Claude 3.5 Sonnet, and Pinecone vector databases.",
    category: "Technical"
  },
  {
    id: "timeline",
    question: "How fast can you deliver a custom web application or CRM?",
    answer: "Our typical delivery timeline ranges from 2 to 4 weeks depending on scope complexity. Starter platforms are delivered in 10–14 business days, while enterprise SaaS and custom AI CRMs are delivered in 3–4 weeks.",
    category: "Process"
  },
  {
    id: "ownership",
    question: "Do I own 100% of the code and intellectual property?",
    answer: "Yes, absolutely. Unlike agencies that lock you into proprietary CMS platforms or recurring license fees, NovaMac transfers 100% full Git repository access, database schemas, and IP rights upon project completion.",
    category: "General"
  },
  {
    id: "speed-guarantee",
    question: "What is your sub-second performance SLA guarantee?",
    answer: "Every platform we build is benchmarked to achieve sub-0.8s Largest Contentful Paint (LCP), <50ms edge server response times, and 95+ score on Google PageSpeed Insights for both desktop and mobile.",
    category: "Technical"
  },
  {
    id: "revisions",
    question: "How do revisions and milestone reviews work during production?",
    answer: "We run transparent sprint cycles with direct Slack/WhatsApp channels. You receive interactive Figma design prototypes and live staging site previews to approve before any final deployment.",
    category: "Process"
  }
];
