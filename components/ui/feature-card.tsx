import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  headerSlot?: ReactNode;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "dark";
};

export function FeatureCard({
  title,
  description,
  eyebrow,
  headerSlot,
  children,
  className,
  tone = "default",
}: FeatureCardProps) {
  const isDark = tone === "dark";

  return (
    <Card
      className={cn(
        "flex h-full flex-col rounded-[22px] p-7 md:p-8",
        isDark ? "border-white/12 bg-white/12 text-white" : "border-white/72 bg-white/92",
        className,
      )}
    >
      {headerSlot ? <div className="flex items-start justify-between gap-4">{headerSlot}</div> : null}
      {eyebrow ? (
        <p
          className={cn(
            headerSlot ? "mt-6" : "",
            "text-[11px] font-semibold uppercase tracking-[0.18em]",
            isDark ? "text-white/56" : "text-brand-primary/62",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3
        className={cn(
          eyebrow || headerSlot ? "mt-5" : "",
          "text-[21px] font-semibold leading-[1.26] tracking-[-0.035em] md:text-[23px]",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h3>
      {description ? (
        <p className={cn("mt-4 text-[15px] leading-[1.78]", isDark ? "text-white/72" : "text-muted/92")}>{description}</p>
      ) : null}
      {children ? <div className="mt-6 flex flex-1 flex-col">{children}</div> : null}
    </Card>
  );
}
