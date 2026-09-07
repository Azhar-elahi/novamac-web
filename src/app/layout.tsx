import type { Metadata } from "next";
import { Fira_Code, Albert_Sans, Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { AnalyticsTracker } from "@/components/seo/AnalyticsTracker";
import { SEO_AEO_GEO_Schemas } from "@/components/seo/SEO_AEO_GEO_Schemas";
import { ClientProviders } from "@/components/providers/ClientProviders";

const albertSans = Albert_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-mono",
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
    languages: {
      "en-US": "https://novamacsolutions.com/us",
      "en-GB": "https://novamacsolutions.com/uk",
      "en-CA": "https://novamacsolutions.com/ca",
      "en-EU": "https://novamacsolutions.com/eu",
      "x-default": "https://novamacsolutions.com",
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo-500x500.png", sizes: "500x500", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/logo-500x500.png", sizes: "500x500", type: "image/png" },
      { url: "/apple-touch-icon.png" }
    ],
    shortcut: ["/logo.png"]
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
      className={`${albertSans.variable} ${raleway.variable} ${firaCode.variable} antialiased`}
    >
      <head>
        <SEO_AEO_GEO_Schemas />
      </head>
      <body className="min-h-screen bg-[#F0EDE6] text-[#1C1917] font-sans selection:bg-[#FF5733] selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <AnalyticsTracker />
          <ClientProviders>
            {children}
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}

