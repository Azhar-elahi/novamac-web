import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import CustomCursor from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnalyticsTracker } from "@/components/seo/AnalyticsTracker";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NovaMac — Elite Software Engineering Studio",
  description: "We design and engineer premium digital products for ambitious brands. Custom web apps, e-commerce, and software solutions.",
  openGraph: {
    title: "NovaMac — Elite Software Engineering Studio",
    description: "We design and engineer premium digital products for ambitious brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NovaMac Solutions",
    "url": "https://novamacsolutions.com",
    "logo": "https://novamacsolutions.com/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-415-480-4281",
      "contactType": "customer service",
      "email": "hello@novamacsolutions.com",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.linkedin.com/company/novamac-solutions",
      "https://twitter.com/novamacsolutions"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <JsonLd data={orgSchema} />
          <AnalyticsTracker />
          <CustomCursor />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
