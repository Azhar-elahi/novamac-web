"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });
const CookieConsent = dynamic(() => import("@/components/compliance/CookieConsent").then((m) => m.CookieConsent), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/nexora/SmoothScroll"), { ssr: false });

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      {children}
      <CookieConsent />
    </>
  );
}
