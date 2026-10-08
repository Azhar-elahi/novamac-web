import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF2F2",
};
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
    default: "NovaMac Solutions — Custom Web, Software, ERP, POS & CRM Studio",
    template: "%s | NovaMac Solutions",
  },
  description: "Enterprise software engineering: Custom Next.js Web Development, Bespoke Software, Cloud ERP Systems, POS Terminals, and AI CRMs. Engineered for sub-second speeds.",
  keywords: [
    "NovaMac Solutions",
    "Custom Web Development",
    "Custom Software Development",
    "ERP Software Development",
    "POS Software Development",
    "Custom CRM Development",
    "Next.js 16 Developers",
    "Cloud ERP Systems",
    "Retail POS Systems",
    "AI Automation Studio",
    "SaaS Web Applications",
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
      "en-AE": "https://novamacsolutions.com/middle-east",
      "en-PK": "https://novamacsolutions.com/pk",
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
        url: "https://novamacsolutions.com/og-image.png",
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
    images: ["https://novamacsolutions.com/og-image.png"],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "3A74D4C5D6E7F8E9A0B1C2D3E4F5A6B7",
    },
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
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-500x500.png" />
        <link rel="shortcut icon" href="/logo.png" />
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

