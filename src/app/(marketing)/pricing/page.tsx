import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing | NovaMac Solutions",
  description: "Transparent pricing for custom web development, AI automation, and digital marketing services. Project-based, retainer, and consulting engagement models available.",
};

export default function PricingPage() {
  return <PricingClient />;
}
