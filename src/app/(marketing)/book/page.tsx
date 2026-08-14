import type { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
  title: "Book a Strategy Call | NovaMac Solutions",
  description: "Schedule a free 30-minute technical strategy call with senior software architects at NovaMac Solutions.",
};

export default function BookPage() {
  return <BookPageClient />;
}
