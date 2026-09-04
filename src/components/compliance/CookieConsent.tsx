"use client";

import { useState } from "react";
import { Cookie, X } from "lucide-react";

export const COOKIE_CONSENT_KEY = "novamac_cookie_consent";
export const COOKIE_CONSENT_EVENT = "novamac-cookie-consent-change";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(COOKIE_CONSENT_KEY);
  });

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
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-md p-5 rounded-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#202020]/95 backdrop-blur-2xl z-[99999] flex flex-col gap-3 text-white animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5 text-[#FF5733]">
          <Cookie className="w-5 h-5 text-[#FF5733]" />
          <h3 className="font-heading font-bold text-sm text-white">Cookie Preferences</h3>
        </div>
        <button
          onClick={handleDecline}
          className="text-gray-400 hover:text-white transition-colors p-1"
          aria-label="Decline and dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-gray-300 leading-relaxed">
        We use essential cookies to optimize your experience, analyze traffic, and personalize our site. You can accept or decline below.
      </p>

      <div className="flex items-center gap-2.5 mt-1">
        <button
          onClick={handleAccept}
          className="flex-1 py-2.5 bg-[#FF5733] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-white hover:text-[#202020] transition-all shadow-md"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 py-2.5 bg-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white/20 border border-white/10 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
