import type { Metadata } from "next";
import AuditClientPage from "./AuditClientPage";

export const metadata: Metadata = {
  title: "Free Website Growth Audit & Lead Assessment | NovaMac Solutions",
  description: "Enter your domain for a free technical SEO, mobile friction, speed target, and conversion audit by NovaMac Solutions.",
  alternates: {
    canonical: "https://novamacsolutions.com/audit",
  },
  openGraph: {
    title: "Free Website Growth Audit | NovaMac Solutions",
    description: "Discover what's holding back your website revenue and conversion flow.",
    url: "https://novamacsolutions.com/audit",
  },
};

export default function AuditPage() {
  return <AuditClientPage />;
}
