"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export const COOKIE_CONSENT_KEY = "novamac_cookie_consent";
export const COOKIE_CONSENT_EVENT = "novamac-cookie-consent-change";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const setConsent = (value: "true" | "false") => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    // Notify other components (e.g. AnalyticsTracker) in the same session
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setIsVisible(false);
  };

  const handleAccept = () => setConsent("true");
  const handleDecline = () => setConsent("false");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-[400px] p-6 rounded-2xl border border-slate-200 shadow-2xl bg-slate-50 z-[100] flex flex-col gap-4 animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 text-brand">
          <Cookie className="w-6 h-6" />
          <h3 className="font-heading font-semibold text-foreground">Cookie Preferences</h3>
        </div>
        <button
          onClick={handleDecline}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Decline and dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-sm text-muted-foreground">
        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
      </p>

      <div className="flex items-center gap-3 mt-2">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 bg-brand text-slate-800 text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 border border-border transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
