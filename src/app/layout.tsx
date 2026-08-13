import type { Metadata } from "next";
import { Inter, Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import CustomCursor from "@/components/ui/CustomCursor";
import { AnalyticsTracker } from "@/components/seo/AnalyticsTracker";
import SmoothScroll from "@/components/nexora/SmoothScroll";
import { SEO_AEO_GEO_Schemas } from "@/components/seo/SEO_AEO_GEO_Schemas";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://novamacsolutions.com"),
  title: {
    default: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    template: "%s | NovaMac Solutions",
  },
  description: "NovaMac Solutions builds custom Next.js web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms engineered for sub-second speeds.",
  keywords: [
    "NovaMac Solutions",
    "Custom Web Development",
    "Next.js 15 Developers",
    "UI/UX Design Studio",
    "SaaS Web Applications",
    "Custom CRM Automation",
    "AI Agents & LLM Integration",
    "Headless Shopify E-Commerce",
    "High Performance Web Engineering",
    "React 19 Developers"
  ],
  authors: [{ name: "NovaMac Engineering Team", url: "https://novamacsolutions.com" }],
  creator: "NovaMac Solutions",
  publisher: "NovaMac Solutions",
  alternates: {
    canonical: "https://novamacsolutions.com",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms engineered for sub-second speed and scale.",
    type: "website",
    siteName: "NovaMac Solutions",
    url: "https://novamacsolutions.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NovaMac Solutions — Software Engineering & Creative Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaMac Solutions — Custom Web Development & AI Engineering Studio",
    description: "Custom web applications, UI/UX design systems, AI CRMs, and headless e-commerce platforms.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} ${plusJakarta.variable} antialiased`}
    >
      <head>
        <SEO_AEO_GEO_Schemas />
      </head>
      <body className="min-h-screen bg-[#F0EDE6] text-[#1C1917] font-sans selection:bg-[#0F52BA] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <SmoothScroll />
          <CustomCursor />
          <AnalyticsTracker />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
