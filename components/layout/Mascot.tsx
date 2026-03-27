'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';

/**
 * VCS Mascot — Green/Cyan AI Robot
 * Duolingo-style interactive animations:
 * - Gentle breathing idle animation
 * - Bounces on hover
 * - Wiggles when clicked (like poking Duo)
 * - Eyes follow cursor on desktop
 * All CSS-based for performance
 */
export function Mascot({ size = 56 }: { size?: number }) {
  const [state, setState] = useState<'idle' | 'hover' | 'clicked'>('idle');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    setClickCount((c) => c + 1);
    setState('clicked');
    setTimeout(() => setState('idle'), 700);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (state !== 'clicked') setState('hover');
  }, [state]);

  const handleMouseLeave = useCallback(() => {
    if (state !== 'clicked') setState('idle');
  }, [state]);

  // Fun easter egg messages on repeated clicks
  const messages = ['Hey!', 'Stop it!', "I'm working!", 'Okay okay!', '😤'];
  const showMessage = state === 'clicked' && clickCount > 2;

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ width: size, height: size }}
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

      {/* Easter egg speech bubble */}
      {showMessage && (
        <div
          className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-lg text-[10px] font-bold text-white bg-[#22C55E] z-50"
          style={{ animation: 'mascot-bounce 0.4s ease-out' }}
        >
          {messages[Math.min(clickCount - 3, messages.length - 1)]}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#22C55E]" />
        </div>
      )}

      {/* Mascot image with eye glow overlay */}
      <div
        className={`
          relative w-full h-full will-change-transform
          ${state === 'idle' ? 'animate-mascot-breathe' : ''}
          ${state === 'hover' ? 'animate-mascot-bounce' : ''}
          ${state === 'clicked' ? 'animate-mascot-wiggle' : ''}
        `}
        style={{ filter: 'drop-shadow(0 2px 14px rgba(74,222,128,0.45))' }}
      >
        <Image
          src="/mascot.png"
          alt="VCS Mascot"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
        {/* Eye glow effect — two small glowing dots positioned over the mascot's eyes */}
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
