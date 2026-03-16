import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SectionContainer({ children, className }: SectionContainerProps) {
  return <Container className={cn("relative", className)}>{children}</Container>;
}
