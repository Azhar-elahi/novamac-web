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
    <div className="fixed bottom-24 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:w-[380px] p-5 sm:p-6 rounded-2xl border border-[#1E2E4A] border-t-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#070D18]/95 backdrop-blur-xl z-[9990] flex flex-col gap-3 text-[#F8FAFC] animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5 text-[#3B82F6]">
          <Cookie className="w-5 h-5" />
          <h3 className="font-heading font-bold text-sm text-[#F8FAFC]">Cookie Preferences</h3>
        </div>
        <button
          onClick={handleDecline}
          className="text-[#94A3B8] hover:text-white transition-colors p-1"
          aria-label="Decline and dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-[#94A3B8] leading-relaxed">
        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
      </p>

      <div className="flex items-center gap-2.5 mt-1">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 bg-[#3B82F6] text-white text-xs font-bold rounded-xl hover:bg-[#2563EB] transition-colors shadow-md"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 py-2 bg-[#0F1C33] text-[#F8FAFC] text-xs font-medium rounded-xl hover:bg-[#1E2E4A] border border-[#1E2E4A] transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
