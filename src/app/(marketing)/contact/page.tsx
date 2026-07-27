import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Start Your Project | NovaMac Solutions",
  description: "Tell us about your project. We reply within 24 hours with a clear, honest assessment and a path forward — no sales fluff.",
};

export default function ContactPage() {
  return <ContactClient />;
}
