"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Never track admin panel internal routes
    if (pathname.includes("7222-@dm1nl0g1n")) return;

    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        path: pathname,
        referrer: document.referrer || "Direct / Bookmark"
      })
    }).catch(() => {
      // Ignore errors silently
    });
  }, [pathname]);

  return null; // Invisible tracker
}
