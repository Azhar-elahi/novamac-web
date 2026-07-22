"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("novamac_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("novamac_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:w-[400px] p-6 rounded-2xl border border-slate-200 shadow-2xl bg-white z-[100] flex flex-col gap-4 animate-in slide-in-from-bottom-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 text-brand">
          <Cookie className="w-6 h-6" />
          <h3 className="font-heading font-semibold text-foreground">Cookie Preferences</h3>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors"
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
          className="flex-1 py-2 bg-brand text-slate-900 text-sm font-medium rounded-lg hover:bg-brand/90 transition-colors"
        >
          Accept All
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 border border-border transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
