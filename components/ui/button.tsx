import type { ReactNode } from "react";

import { CTAButton } from "@/components/ui/cta-button";
import type { AnalyticsParams } from "@/lib/analytics";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
  trackingEventName?: string;
  trackingParams?: AnalyticsParams;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
  trackingEventName,
  trackingParams,
}: ButtonProps) {
  return (
    <CTAButton
      href={href}
      variant={variant}
      className={className}
      ariaLabel={ariaLabel}
      trackingEventName={trackingEventName}
      trackingParams={trackingParams}
    >
      {children}
    </CTAButton>
  );
}
