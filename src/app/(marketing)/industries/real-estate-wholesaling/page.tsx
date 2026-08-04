import type { Metadata } from "next";
import RealEstateClient from "./RealEstateClient";

export const metadata: Metadata = {
  title: "Real Estate Wholesaling Systems & Automation | NovaMac Solutions",
  description: "Custom CRM, automated lead pipelines, skip-tracing workflows, and buyer-matching systems built for real estate wholesalers. Stop losing deals to spreadsheets.",
};

export default function RealEstateWholesalingPage() {
  return <RealEstateClient />;
}
