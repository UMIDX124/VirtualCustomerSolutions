"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { trackEvent, type AnalyticsParams } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
  trackingEventName?: string;
  trackingParams?: AnalyticsParams;
};

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "aria-label"> & {
    href: string;
  };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "aria-label"> & {
    href?: never;
  };

type CTAButtonProps = LinkProps | NativeButtonProps;

function isLinkProps(props: CTAButtonProps): props is LinkProps {
  return typeof (props as LinkProps).href === "string";
}

const variants = {
  primary:
    "border border-white/10 bg-[linear-gradient(135deg,#35165B_0%,#4E277F_44%,#E45A92_100%)] text-white shadow-[0_22px_58px_rgba(62,30,104,0.3)] hover:shadow-[0_26px_62px_rgba(62,30,104,0.2)]",
  secondary:
    "border border-brand-primary/14 bg-white/90 text-brand-primary shadow-[0_18px_48px_rgba(62,30,104,0.08)] hover:border-brand-primary/20 hover:bg-white",
  ghost:
    "border border-white/18 bg-white/10 text-white shadow-[0_12px_28px_rgba(15,8,28,0.08)] backdrop-blur-sm hover:border-white/26 hover:bg-white/12",
} as const;

const baseClassName =
  "relative inline-flex min-h-[58px] touch-manipulation items-center justify-center overflow-hidden rounded-full px-6 py-4 text-[15px] font-semibold leading-none tracking-[-0.018em] transition-[transform,box-shadow,border-color,background-color] duration-150 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function CTAButton(props: CTAButtonProps) {
  const innerGlow = <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent_42%)] opacity-70" />;

  if (isLinkProps(props)) {
    const { children, variant = "primary", className, ariaLabel, href, trackingEventName, trackingParams, onClick, ...linkProps } = props;
    const classes = cn(baseClassName, variants[variant], className);

    return (
      <a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented && trackingEventName) {
            trackEvent(trackingEventName, trackingParams);
          }
        }}
        {...linkProps}
      >
        {innerGlow}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  const { children, variant = "primary", className, ariaLabel, type = "button", trackingEventName, trackingParams, onClick, ...buttonProps } = props;
  const classes = cn(baseClassName, variants[variant], className);

  return (
    <button
      aria-label={ariaLabel}
      className={classes}
      type={type}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented && trackingEventName) {
          trackEvent(trackingEventName, trackingParams);
        }
      }}
      {...buttonProps}
    >
      {innerGlow}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
