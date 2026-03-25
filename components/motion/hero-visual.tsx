"use client";

import { m } from "framer-motion";

import { cn } from "@/lib/utils";

const cardMotion = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
};

const floatTransition = {
  duration: 3.6,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

function MetricRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-3">
      <span className="text-[14px] font-medium leading-[1.45] text-white/72">{label}</span>
      <span className="text-[14px] font-semibold leading-none text-white">{value}</span>
    </div>
  );
}

function VisualCard({
  className,
  title,
  subtitle,
  children,
}: {
  className?: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(25,12,29,0.92),rgba(46,17,39,0.84))] p-6 shadow-[0_24px_70px_rgba(8,4,18,0.3)] backdrop-blur-xl",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[21px] font-semibold leading-[1.08] tracking-[-0.04em] text-white">{title}</h3>
          <p className="mt-3 max-w-[28ch] text-[14px] leading-[1.6] text-white/62">{subtitle}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3">{children}</div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(81,29,67,0.16),rgba(144,30,62,0.08))] p-4 shadow-[0_30px_90px_rgba(8,4,18,0.22)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(155,192,156,0.08),transparent_22%),radial-gradient(circle_at_82%_16%,rgba(220,37,37,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]"
      />

      <div className="relative grid gap-4 md:grid-cols-2 md:grid-rows-[auto_auto]">
        <m.div
          {...cardMotion}
          animate={{ y: [0, -4, 0], opacity: 1 }}
          transition={floatTransition}
          className="md:col-span-2"
        >
          <VisualCard
            title="Revenue Dashboard"
            subtitle="Pipeline value, forecast, campaigns, and conversion metrics"
          >
            <div className="grid grid-cols-4 gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4">
              {[44, 62, 53, 78].map((height, index) => (
                <div key={height} className="flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-full bg-[linear-gradient(180deg,rgba(155,192,156,0.95),rgba(220,37,37,0.9))]"
                    style={{ height }}
                  />
                  <span className="text-[11px] font-medium text-white/48">Q{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <MetricRow label="Pipeline value" value="$184K" />
              <MetricRow label="Forecast" value="86%" />
              <MetricRow label="Active campaigns" value="12" />
              <MetricRow label="Lead conversion" value="18.4%" />
            </div>
          </VisualCard>
        </m.div>

        <m.div
          {...cardMotion}
          animate={{ y: [0, 3, 0], opacity: 1 }}
          transition={{ ...floatTransition, duration: 4 }}
        >
          <VisualCard
            title="Marketing Automation"
            subtitle="Workflow automation features such as CRM sync, campaign automation, and attribution"
            className="h-full"
          >
            <MetricRow label="CRM sync" value="Live" />
            <MetricRow label="Lead routing" value="Automated" />
            <MetricRow label="Attribution" value="Tracked" />
          </VisualCard>
        </m.div>

        <m.div
          {...cardMotion}
          animate={{ y: [0, -3, 0], opacity: 1 }}
          transition={{ ...floatTransition, duration: 3.8 }}
        >
          <VisualCard
            title="Execution Layer"
            subtitle="Operational support tasks like reporting updates, campaign operations, and system maintenance"
            className="h-full"
          >
            <MetricRow label="Reporting updates" value="Weekly" />
            <MetricRow label="Campaign ops" value="Active" />
            <MetricRow label="System maintenance" value="Ongoing" />
          </VisualCard>
        </m.div>
      </div>
    </div>
  );
}
