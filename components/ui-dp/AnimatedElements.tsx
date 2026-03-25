'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

const premiumEase = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FadeUp({ children, className, delay = 0, duration = 0.6 }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay, ease: premiumEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className, staggerDelay = 0.1 }: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: premiumEase },
  },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'relative bg-surface-glass backdrop-blur-xl border border-border-glass rounded-2xl overflow-hidden',
        hover && 'transition-all duration-300 hover:border-border-active hover:shadow-xl hover:shadow-black/20',
        className
      )}
    >
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface MetricDisplayProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function MetricDisplay({ value, label, prefix, suffix, className }: MetricDisplayProps) {
  return (
    <div className={cn('text-center', className)}>
      <div className="font-display text-3xl md:text-4xl font-bold text-text-primary tabular-nums">
        {prefix && <span className="text-[#1F7D53]">{prefix}</span>}
        {value}
        {suffix && <span className="text-text-secondary text-xl">{suffix}</span>}
      </div>
      <p className="text-text-secondary text-sm mt-1">{label}</p>
    </div>
  );
}

interface SignalPointProps {
  className?: string;
  pulse?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function SignalPoint({ className, pulse = true, size = 'md' }: SignalPointProps) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full bg-signal',
        pulse && 'animate-pulse',
        sizeClasses[size],
        className
      )}
    />
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'none' | 'gradient' | 'grid';
}

export function Section({ children, className, id, background = 'none' }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-padding relative',
        background === 'gradient' && 'radial-glow',
        background === 'grid' && 'grid-bg',
        className
      )}
    >
      {children}
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'narrow' | 'wide' | 'full';
}

export function Container({ children, className, size = 'wide' }: ContainerProps) {
  const sizeClasses = {
    narrow: 'container-narrow',
    wide: 'container-wide',
    full: 'w-full px-4 sm:px-6 lg:px-8',
  };

  return <div className={cn(sizeClasses[size], className)}>{children}</div>;
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, align = 'center', className }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16', align === 'center' && 'text-center max-w-3xl mx-auto', className)}>
      {eyebrow && (
        <span className="text-[#1F7D53] text-sm font-medium uppercase tracking-wider mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-lg mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
