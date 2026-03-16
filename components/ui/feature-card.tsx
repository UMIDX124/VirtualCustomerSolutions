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
    <Card className={cn("flex h-full flex-col p-8", isDark ? "border-white/10 bg-white/8 text-white" : "", className)}>
      {headerSlot ? <div className="flex items-start justify-between gap-4">{headerSlot}</div> : null}
      {eyebrow ? (
        <p
          className={cn(
            headerSlot ? "mt-6" : "",
            "text-sm font-medium uppercase tracking-[0.18em]",
            isDark ? "text-white/56" : "text-brand-primary/62",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h3 className={cn(eyebrow || headerSlot ? "mt-5" : "", "text-2xl font-semibold leading-[1.2]", isDark ? "text-white" : "text-ink")}>
        {title}
      </h3>
      {description ? (
        <p className={cn("mt-4 text-base leading-[1.7]", isDark ? "text-white/68" : "text-muted")}>{description}</p>
      ) : null}
      {children ? <div className="mt-6 flex flex-1 flex-col">{children}</div> : null}
    </Card>
  );
}
