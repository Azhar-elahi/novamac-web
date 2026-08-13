import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";
import ServicePageClient from "@/components/services/ServicePageClient";
import { JsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  
  return {
    title: `${service.title} | Software Engineering & Design | NovaMac Solutions`,
    description: service.tagline,
    keywords: [
      service.title,
      service.shortTitle,
      service.category,
      "NovaMac Solutions",
      "Custom Software Development"
    ],
    alternates: {
      canonical: `https://novamacsolutions.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | NovaMac Solutions`,
      description: service.tagline,
      url: `https://novamacsolutions.com/services/${service.slug}`,
    },
    twitter: {
      title: `${service.title} | NovaMac Solutions`,
      description: service.tagline,
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.category,
    "provider": {
      "@type": "Organization",
      "name": "NovaMac Solutions",
      "url": "https://novamacsolutions.com"
    },
    "description": service.tagline,
    "url": `https://novamacsolutions.com/services/${service.slug}`,
    "offers": {
      "@type": "Offer",
      "price": service.startingPrice,
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <ServicePageClient service={service} />
    </>
  );
}
