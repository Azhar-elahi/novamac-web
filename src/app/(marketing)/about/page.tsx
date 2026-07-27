import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | NovaMac Solutions — Elite Software Engineering Studio",
  description: "NovaMac is a remote-first collective of senior developers, designers, and growth strategists building custom web apps, e-commerce, and AI automation for ambitious brands.",
};

export default function AboutPage() {
  return <AboutClient />;
}
