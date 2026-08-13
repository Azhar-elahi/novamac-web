"use client";

import { useUIStore } from "@/store/useUIStore";
import { ReactNode } from "react";

export default function ConditionalWrapper({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { isLandingMode } = useUIStore();
  
  return (
    <div className={`${className} transition-opacity duration-700 ease-in-out ${isLandingMode ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {children}
    </div>
  );
}
