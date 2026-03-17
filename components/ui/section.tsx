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
      className={cn("relative scroll-mt-28 py-20 md:scroll-mt-36 md:py-[104px] lg:scroll-mt-40 lg:py-[120px]", className)}
    >
      {children}
    </section>
  );
}
