import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services | Web Development, AI Automation & Marketing | NovaMac",
  description: "Custom web development, e-commerce architecture, AI & business automation, 360 performance marketing, social media, and cloud/DevOps — six disciplines, one studio.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
