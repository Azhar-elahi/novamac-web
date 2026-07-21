import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { CookieConsent } from "@/components/compliance/CookieConsent";
import CustomCursor from "@/components/ui/CustomCursor";

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
          <CustomCursor />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
