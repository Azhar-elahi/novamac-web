"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { COOKIE_CONSENT_KEY, COOKIE_CONSENT_EVENT } from "@/components/compliance/CookieConsent";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Read initial consent state
    setHasConsent(localStorage.getItem(COOKIE_CONSENT_KEY) === "true");

    // React immediately if the user accepts/declines while browsing
    const onConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      setHasConsent(detail === "true");
    };
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsentChange);
  }, []);

  useEffect(() => {
    // Never track admin routes, and never track without explicit consent
    if (pathname.includes("7222-@dm1nl0g1n")) return;
    if (!hasConsent) return;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname })
    }).catch(() => {
      // Ignore errors silently
    });
  }, [pathname, hasConsent]);

  return null; // Invisible component
}
