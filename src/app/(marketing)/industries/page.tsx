import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | NovaMac Solutions",
  description: "Custom CRM, lead automation, and AI-driven systems built for specific industries \u2014 starting with real estate wholesaling.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
