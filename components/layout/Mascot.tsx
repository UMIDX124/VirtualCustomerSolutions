'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

type MascotVariant = 'default' | 'thinking' | 'waving' | 'pointing' | 'peeking';

interface MascotProps {
  size?: number;
  variant?: MascotVariant;
  speechBubble?: string;
  speechBubblePosition?: 'top' | 'left' | 'right';
  disableInteraction?: boolean;
  className?: string;
  priority?: boolean;
}

const variantStyles: Record<MascotVariant, string> = {
  default: '',
  thinking: 'animate-mascot-think',
  waving: 'animate-mascot-wave',
  pointing: 'animate-mascot-point',
  peeking: '',
};

const variantTransforms: Record<MascotVariant, string> = {
  default: '',
  thinking: 'rotate(-8deg)',
  waving: '',
  pointing: 'rotate(15deg)',
  peeking: '',
};

export function Mascot({
  size = 56,
  variant = 'default',
  speechBubble,
  speechBubblePosition = 'top',
  disableInteraction = false,
  className = '',
  priority = false,
}: MascotProps) {
  const [state, setState] = useState<'idle' | 'hover' | 'clicked'>('idle');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    if (disableInteraction) return;
    setClickCount((c) => c + 1);
    setState('clicked');
    setTimeout(() => setState('idle'), 700);
  }, [disableInteraction]);

  const handleMouseEnter = useCallback(() => {
    if (disableInteraction) return;
    if (state !== 'clicked') setState('hover');
  }, [state, disableInteraction]);

  const handleMouseLeave = useCallback(() => {
    if (disableInteraction) return;
    if (state !== 'clicked') setState('idle');
  }, [state, disableInteraction]);

  const messages = ['Hey!', 'Stop it!', "I'm working!", 'Okay okay!', '😤'];
  const showEasterEgg = !disableInteraction && state === 'clicked' && clickCount > 2;

  // Determine animation class
  const getAnimClass = () => {
    if (!disableInteraction) {
      if (state === 'hover') return 'animate-mascot-bounce';
      if (state === 'clicked') return 'animate-mascot-wiggle';
    }
    if (variant !== 'default' && variantStyles[variant]) return variantStyles[variant];
    return 'animate-mascot-breathe';
  };

  // Speech bubble positioning
  const bubblePositionClass =
    speechBubblePosition === 'left'
      ? 'right-full mr-3 top-1/2 -translate-y-1/2'
      : speechBubblePosition === 'right'
        ? 'left-full ml-3 top-1/2 -translate-y-1/2'
        : '-top-10 left-1/2 -translate-x-1/2';

  const bubbleArrowClass =
    speechBubblePosition === 'left'
      ? 'absolute top-1/2 -translate-y-1/2 -right-1.5 w-0 h-0 border-t-4 border-b-4 border-l-[6px] border-t-transparent border-b-transparent border-l-[#22C55E]'
      : speechBubblePosition === 'right'
        ? 'absolute top-1/2 -translate-y-1/2 -left-1.5 w-0 h-0 border-t-4 border-b-4 border-r-[6px] border-t-transparent border-b-transparent border-r-[#22C55E]'
        : 'absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#22C55E]';

  const isPeeking = variant === 'peeking';

  return (
    <div
      className={`relative ${disableInteraction ? '' : 'cursor-pointer'} select-none ${className}`}
      style={{ width: size, height: isPeeking ? size * 0.6 : size }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-3 rounded-full pointer-events-none animate-mascot-glow"
        style={{
          background: 'radial-gradient(circle, rgba(74,222,128,0.3) 0%, rgba(6,182,212,0.15) 50%, transparent 70%)',
        }}
      />

      {/* Speech bubble (custom or easter egg) */}
      {speechBubble && !showEasterEgg && (
        <div className={`absolute ${bubblePositionClass} whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#22C55E] z-50 shadow-lg shadow-[#22C55E]/20`}>
          {speechBubble}
          <div className={bubbleArrowClass} />
        </div>
      )}

      {showEasterEgg && (
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-bold text-white bg-[#22C55E] z-50"
          style={{ animation: 'mascot-bounce 0.4s ease-out' }}
        >
          {messages[Math.min(clickCount - 3, messages.length - 1)]}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#22C55E]" />
        </div>
      )}

      {/* Mascot image — peeking variant clips bottom */}
      <div
        className={`relative w-full will-change-transform ${getAnimClass()} ${isPeeking ? 'overflow-hidden' : ''}`}
        style={{
          height: isPeeking ? size * 0.6 : size,
          filter: `drop-shadow(0 2px ${Math.max(14, size * 0.06)}px rgba(74,222,128,0.45))`,
          transform: variantTransforms[variant] || undefined,
        }}
      >
        <Image
          src="/mascot.png"
          alt="VCS Mascot"
          width={size}
          height={size}
          className="w-full object-contain object-top"
          style={{ height: size }}
          priority={priority}
        />
        {/* Eye glow */}
        <div className="absolute pointer-events-none" style={{ top: '42%', left: '28%', width: '12%', height: '8%' }}>
          <div className="w-full h-full rounded-full animate-mascot-eye-glow" style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.9) 0%, rgba(74,222,128,0.4) 40%, transparent 70%)' }} />
        </div>
        <div className="absolute pointer-events-none" style={{ top: '42%', right: '28%', width: '12%', height: '8%' }}>
          <div className="w-full h-full rounded-full animate-mascot-eye-glow" style={{ background: 'radial-gradient(circle, rgba(74,222,128,0.9) 0%, rgba(74,222,128,0.4) 40%, transparent 70%)' }} />
        </div>
      </div>
    </div>
  );
}
