import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  labelledBy?: string;
};

export function Section({ children, id, className, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative scroll-mt-28 py-[72px] md:scroll-mt-32 md:py-24 lg:py-[120px]", className)}
    >
      {children}
    </section>
  );
}
