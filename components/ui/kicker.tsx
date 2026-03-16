import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type KickerProps = {
  children: ReactNode;
  tone?: "default" | "light";
  className?: string;
};

export function Kicker({ children, tone = "default", className }: KickerProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-[14px] font-medium uppercase tracking-[0.22em]",
        tone === "light"
          ? "border-white/20 bg-white/10 text-white/78"
          : "border-brand-primary/12 bg-white/78 text-brand-primary/78",
        className,
      )}
    >
      {children}
    </span>
  );
}
