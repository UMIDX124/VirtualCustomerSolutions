"use client";

import type { PointerEvent as ReactPointerEvent } from "react";

import { m, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { MOTION_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

import { useMotionProfile } from "./use-motion-profile";

const chartBars = [34, 62, 48, 74, 92, 66, 108];
const pipelineRows = [
  ["Inbound flow", "+34%"],
  ["SQL velocity", "2.1x"],
  ["Ops capacity", "Live"],
] as const;
const laneRows = [
  ["Campaigns", "Optimizing"],
  ["Remote pod", "Active"],
  ["Automation", "Syncing"],
] as const;
const scoreRows = [
  ["Acquisition", 84],
  ["Execution", 91],
  ["Visibility", 88],
] as const;
const focusChips = ["Demand engine", "Remote pod", "Automation", "Reporting"] as const;
const rhythmRows = [
  ["Strategy rhythm", "Weekly"],
  ["Capacity view", "Mapped"],
  ["Decision speed", "High"],
] as const;

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/8 px-3 py-2 text-center backdrop-blur-xl">
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}

function ScoreRow({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[11px] text-white/58">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/8">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,rgba(255,172,172,0.95)_0%,rgba(228,90,146,0.95)_100%)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative lg:hidden">
      <div className="absolute inset-x-[10%] top-5 h-32 rounded-full bg-[radial-gradient(circle,rgba(132,219,255,0.2),transparent_66%)] blur-3xl" />
      <div className="hero-dashboard relative overflow-hidden rounded-[28px] border border-white/12 bg-white/8 p-4 backdrop-blur-xl shadow-[0_30px_100px_rgba(12,6,24,0.32)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_34%),linear-gradient(160deg,rgba(93,47,119,0.28),transparent_52%)]" />
        <div className="absolute inset-0 grid-accent opacity-15" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/42">Growth cockpit</p>
              <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">One system. Clear momentum.</p>
              <p className="mt-2 max-w-[20rem] text-sm leading-6 text-white/60">
                Growth, remote support, and operational visibility aligned into one execution view.
              </p>
            </div>
            <div className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              Live
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-black/18 p-4">
              <div className="flex items-end gap-2">
                {chartBars.map((bar) => (
                  <span
                    key={bar}
                    className="w-full rounded-t-full bg-[linear-gradient(180deg,rgba(132,219,255,0.92),rgba(36,118,255,0.66)_58%,rgba(110,63,255,0.32)_100%)]"
                    style={{ height: bar * 0.58 }}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Pipeline</p>
                <div className="mt-4 space-y-3">
                  {pipelineRows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-3 py-2.5">
                      <span className="text-xs text-white/62">{label}</span>
                      <span className="text-xs font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Operating rhythm</p>
                <div className="mt-4 space-y-3">
                  {rhythmRows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-3 py-2.5">
                      <span className="text-xs text-white/62">{label}</span>
                      <span className="text-xs font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {laneRows.map(([label, value]) => (
                <StatPill key={label} label={label} value={value} />
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {focusChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/50"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { allowPointerParallax, allowScrollParallax, lowMotion } = useMotionProfile();

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 18, mass: 0.8 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 18, mass: 0.8 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const depthScale = allowScrollParallax ? 1 : 0;
  const bgY = useTransform(scrollYProgress, [0, 1], [14 * depthScale, -14 * depthScale]);
  const frontY = useTransform(scrollYProgress, [0, 1], [26 * depthScale, -22 * depthScale]);
  const sideY = useTransform(scrollYProgress, [0, 1], [18 * depthScale, -18 * depthScale]);
  const accentY = useTransform(scrollYProgress, [0, 1], [30 * depthScale, -28 * depthScale]);

  const centerX = useTransform(() => (allowPointerParallax ? smoothX.get() * 12 : 0));
  const centerY = useTransform(() => (allowPointerParallax ? smoothY.get() * 12 : 0) + frontY.get());
  const leftX = useTransform(() => (allowPointerParallax ? smoothX.get() * -18 : 0));
  const leftY = useTransform(() => (allowPointerParallax ? smoothY.get() * -10 : 0) + sideY.get());
  const rightX = useTransform(() => (allowPointerParallax ? smoothX.get() * 18 : 0));
  const rightY = useTransform(() => (allowPointerParallax ? smoothY.get() * 10 : 0) + sideY.get());
  const backX = useTransform(() => (allowPointerParallax ? smoothX.get() * -8 : 0));
  const backY = useTransform(() => (allowPointerParallax ? smoothY.get() * 8 : 0) + bgY.get());
  const accentLeftX = useTransform(() => (allowPointerParallax ? smoothX.get() * -24 : 0));
  const accentLeftY = useTransform(() => (allowPointerParallax ? smoothY.get() * -8 : 0) + accentY.get());
  const accentRightX = useTransform(() => (allowPointerParallax ? smoothX.get() * 24 : 0));
  const accentRightY = useTransform(() => (allowPointerParallax ? smoothY.get() * 14 : 0) + accentY.get());
  const centerRotateX = useTransform(() => (allowPointerParallax ? smoothY.get() * -2.2 : 0));
  const centerRotateY = useTransform(() => (allowPointerParallax ? smoothX.get() * 3.4 : 0));
  const leftRotate = useTransform(() => (allowPointerParallax ? smoothX.get() * -3.2 : -4));
  const rightRotate = useTransform(() => (allowPointerParallax ? smoothX.get() * 3.2 : 4));
  const accentLeftRotate = useTransform(() => (allowPointerParallax ? smoothX.get() * -2.8 : -2));
  const accentRightRotate = useTransform(() => (allowPointerParallax ? smoothX.get() * 2.8 : 2));

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!ref.current || !allowPointerParallax) {
      return;
    }

    const bounds = ref.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

    pointerX.set(x);
    pointerY.set(y);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div ref={ref} onPointerMove={handlePointerMove} onPointerLeave={resetPointer} className="relative">
      <MobileVisual />

      <div aria-hidden="true" className="relative hidden h-[560px] lg:block xl:h-[620px]" style={{ perspective: 1400 }}>
        <m.div
          className="hero-backplate absolute left-1/2 top-[8%] h-[72%] w-[78%] -translate-x-1/2 rounded-[38px]"
          style={lowMotion ? undefined : { x: backX, y: backY, willChange: "transform" }}
        />

        <m.div
          className="absolute left-[12%] top-[8%] w-[18%] rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl shadow-[0_24px_80px_rgba(10,6,22,0.24)]"
          style={
            lowMotion
              ? undefined
              : { x: accentLeftX, y: accentLeftY, rotate: accentLeftRotate, willChange: "transform" }
          }
          animate={lowMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 8.8, repeat: Number.POSITIVE_INFINITY, ease: MOTION_EASE }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">Signal layer</p>
          <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">Clarity in motion</p>
          <p className="mt-2 text-xs leading-5 text-white/58">Brand, media, delivery, and reporting aligned.</p>
        </m.div>

        <m.div
          className="absolute left-[6%] top-[18%] w-[27%] rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(10,6,22,0.28)]"
          style={
            lowMotion
              ? undefined
              : { x: leftX, y: leftY, rotate: leftRotate, transformPerspective: 1200, willChange: "transform" }
          }
          animate={lowMotion ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: MOTION_EASE }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Pipeline layer</p>
          <div className="mt-4 space-y-3">
            {pipelineRows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-3 py-3">
                <span className="text-xs text-white/60">{label}</span>
                <span className="text-xs font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-3">
            {scoreRows.map(([label, value]) => (
              <ScoreRow key={label} label={label} value={value} />
            ))}
          </div>
        </m.div>

        <m.div
          className="hero-dashboard absolute left-1/2 top-[10%] w-[52%] -translate-x-1/2 overflow-hidden rounded-[36px] border border-white/12 bg-white/8 p-6 backdrop-blur-xl shadow-[0_45px_140px_rgba(10,6,22,0.38)]"
          style={
            lowMotion
              ? undefined
              : {
                  x: centerX,
                  y: centerY,
                  rotateX: centerRotateX,
                  rotateY: centerRotateY,
                  transformPerspective: 1600,
                  willChange: "transform",
                }
          }
          animate={lowMotion ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: MOTION_EASE }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_32%),linear-gradient(155deg,rgba(93,47,119,0.24),transparent_50%)]" />
          <div className="absolute inset-0 grid-accent opacity-25" />
          <div className="absolute inset-x-[8%] top-5 h-16 rounded-full bg-[radial-gradient(circle,rgba(132,219,255,0.22),transparent_68%)] blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">Growth cockpit</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">Cinematic clarity across the growth engine</h3>
                <p className="mt-3 max-w-[26rem] text-sm leading-6 text-white/60">
                  A premium operating layer that keeps growth strategy, delivery capacity, and weekly execution in sync.
                </p>
              </div>
              <div className="rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                Systems live
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-black/18 p-5">
              <div className="flex items-end gap-2">
                {chartBars.map((bar, index) => (
                  <m.span
                    key={bar}
                    className="w-full rounded-t-full bg-[linear-gradient(180deg,rgba(132,219,255,0.95),rgba(36,118,255,0.72)_58%,rgba(110,63,255,0.28)_100%)]"
                    style={{ height: bar }}
                    animate={lowMotion ? undefined : { opacity: [0.78, 1, 0.84] }}
                    transition={{
                      duration: 2.4,
                      delay: index * 0.07,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "mirror",
                      ease: MOTION_EASE,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(220px,0.72fr)]">
              <div className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {laneRows.map(([label, value]) => (
                    <StatPill key={label} label={label} value={value} />
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusChips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/48"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/6 p-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Weekly rhythm</p>
                <div className="mt-4 space-y-3">
                  {rhythmRows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/5 px-3 py-2.5">
                      <span className="text-xs text-white/62">{label}</span>
                      <span className="text-xs font-semibold text-white">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-6 text-white/58">
                  Forecasting, execution capacity, and reporting brought into one premium operating cadence.
                </p>
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          className="absolute right-[5%] top-[20%] w-[24%] rounded-[28px] border border-white/10 bg-white/8 p-5 backdrop-blur-xl shadow-[0_24px_80px_rgba(10,6,22,0.28)]"
          style={
            lowMotion
              ? undefined
              : { x: rightX, y: rightY, rotate: rightRotate, transformPerspective: 1200, willChange: "transform" }
          }
          animate={lowMotion ? undefined : { y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: MOTION_EASE }}
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Execution lanes</p>
          <div className="mt-4 space-y-3">
            {laneRows.map(([label, value], index) => (
              <div
                key={label}
                className={cn(
                  "rounded-2xl border border-white/8 px-4 py-3",
                  index === 1 ? "bg-[linear-gradient(135deg,rgba(84,185,255,0.16),rgba(228,90,146,0.12))]" : "bg-white/6",
                )}
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">{label}</p>
                <p className="mt-2 text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </m.div>

        <m.div
          className="absolute bottom-[10%] right-[12%] w-[20%] rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-xl shadow-[0_24px_80px_rgba(10,6,22,0.24)]"
          style={
            lowMotion
              ? undefined
              : { x: accentRightX, y: accentRightY, rotate: accentRightRotate, willChange: "transform" }
          }
          animate={lowMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 9.6, repeat: Number.POSITIVE_INFINITY, ease: MOTION_EASE }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/42">Decision velocity</p>
          <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">Move faster without fragmentation.</p>
          <p className="mt-2 text-xs leading-5 text-white/58">
            Systems, support, and reporting layered into one executive view.
          </p>
        </m.div>
      </div>
    </div>
  );
}
