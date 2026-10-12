"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function trackEvent(eventName: string, data: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      path: window.location.pathname,
      event: eventName,
      data,
      referrer: document.referrer || "Direct"
    })
  }).catch(() => {});
}

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Never track admin panel internal routes
    if (pathname.includes("7222-@dm1nl0g1n")) return;

    // Forward SPA route changes to Google Analytics (G-VYY4J7L4M6)
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("config", "G-VYY4J7L4M6", {
        page_path: pathname,
      });
    }

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        path: pathname,
        event: "page_view",
        referrer: document.referrer || "Direct / Bookmark"
      })
    }).catch(() => {
      // Ignore errors silently
    });
  }, [pathname]);

  return null; // Invisible tracker
}
