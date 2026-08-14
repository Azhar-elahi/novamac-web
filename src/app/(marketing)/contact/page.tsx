import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Book a Call | NovaMac Solutions",
  description: "Initiate your project sequence with NovaMac Solutions. Tell us about your web development, UI/UX design, or AI automation goals. We reply within 24 hours.",
  keywords: [
    "Contact NovaMac Solutions",
    "Book Web Development Call",
    "Hire Next.js Developers",
    "UI/UX Design Consultation",
    "NovaMac Contact Phone Email"
  ],
  alternates: {
    canonical: "https://novamacsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us & Book a Strategy Call | NovaMac Solutions",
    description: "Tell us about your project — we reply within 24 hours with a clear, honest architectural assessment.",
    url: "https://novamacsolutions.com/contact",
  },
  twitter: {
    title: "Contact Us | NovaMac Solutions",
    description: "Book a call or send your inquiry — response within 24 hours.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact NovaMac Solutions",
    "url": "https://novamacsolutions.com/contact",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "NovaMac Solutions",
      "telephone": ["+1-510-585-4258", "+92-317-4723510"],
      "email": "hello@novamacsolutions.com"
    }
  };

  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClient />
    </>
  );
}
