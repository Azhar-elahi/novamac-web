import { PIPELINE_STEPS } from "./data";
import { ArrowRight } from "lucide-react";

export default function Pipeline() {
  return (
    <ol className="relative mt-4 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-8">
      {PIPELINE_STEPS.map((step, i) => (
        <li key={step} className="flex items-center gap-3 sm:gap-2">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="font-mono text-[11px] text-white/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="whitespace-nowrap text-sm text-white/80">
              {step}
            </span>
          </div>
          {i < PIPELINE_STEPS.length - 1 && (
            <ArrowRight className="h-4 w-4 shrink-0 text-white/20" />
          )}
        </li>
      ))}
    </ol>
  );
}
