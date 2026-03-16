import type { ReactNode } from "react";

import { CTAButton } from "@/components/ui/cta-button";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <CTAButton href={href} variant={variant} className={className} ariaLabel={ariaLabel}>
      {children}
    </CTAButton>
  );
}
