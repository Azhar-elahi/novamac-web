import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Client Review Invitation | NovaMac Solutions",
  description: "Private verified review submission portal for NovaMac Solutions clients.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SubmitReviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
