'use client';

import {
  useRef,
  useState,
  useEffect,
  type ReactNode,
  type CSSProperties,
} from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  type Variant,
} from 'framer-motion';

const SMOOTH_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ─── ParallaxSection ────────────────────────────────────── */

export function ParallaxSection({
  children,
  offset = 50,
  className = '',
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const y = useSpring(raw, { stiffness: 100, damping: 30, mass: 0.5 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ─── RevealOnScroll ─────────────────────────────────────── */

type RevealVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'blur-in';

const revealVariants: Record<RevealVariant, { hidden: Variant; visible: Variant }> = {
  'fade-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  'blur-in': {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
};

export function RevealOnScroll({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const v = revealVariants[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: { duration, delay, ease: SMOOTH_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerChildren + StaggerItem ──────────────────────── */

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = '',
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: SMOOTH_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── FloatingElement ────────────────────────────────────── */

export function FloatingElement({
  children,
  amplitude = 8,
  duration = 6,
  className = '',
  style,
}: {
  children?: ReactNode;
  amplitude?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      animate={{ y: [0, -amplitude, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── TextReveal ─────────────────────────────────────────── */

export function TextReveal({
  text,
  className = '',
  as: Tag = 'h2',
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(' ');

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            ease: SMOOTH_EASE,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ─── CountUpOnView ──────────────────────────────────────── */

export function CountUpOnView({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out with slight bounce
      const eased =
        progress < 0.8
          ? 1 - Math.pow(1 - progress / 0.8, 3)
          : 1 + Math.sin((progress - 0.8) * Math.PI * 5) * 0.02 * (1 - progress);
      start = Math.round(target * Math.min(eased, 1));
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/* ─── MagneticHover ──────────────────────────────────────── */

export function MagneticHover({
  children,
  strength = 0.3,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── ScrollLine ─────────────────────────────────────────── */

export function ScrollLine({
  className = '',
  color = '#3B82F6',
}: {
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className={`absolute left-8 top-0 bottom-0 w-px ${className}`}>
      <svg
        width="2"
        height="100%"
        className="absolute inset-0"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100%"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
