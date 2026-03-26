'use client';

import { motion } from 'framer-motion';

/**
 * VCS Mascot — Premium AI guardian character
 * Think Iron Man helmet meets corporate AI assistant
 * Sleek, futuristic, with subtle life animations
 */
export function Mascot({ size = 48 }: { size?: number }) {
  return (
    <motion.div
      className="relative"
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient glow — pointer-events-none, no layout impact */}
      <motion.div
        className="absolute -inset-2 bg-[#3B82F6]/20 blur-lg rounded-full pointer-events-none"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.35))' }}
      >
        <defs>
          <linearGradient id="mBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="mVisor" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="mShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mEyeGlow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <filter id="eyeGlow">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Head — sleek helmet shape */}
        <path
          d="M32 3C17 3 7 15 7 27c0 7 3 13 8 17l6 5c3 2.5 6 4 11 4s8-1.5 11-4l6-5c5-4 8-10 8-17C57 15 47 3 32 3z"
          fill="url(#mBody)"
        />

        {/* Top shine — premium feel */}
        <path
          d="M32 3C17 3 7 15 7 27c0 3 0.5 5.5 1.5 8C12 20 20 8 32 8s20 12 23.5 27c1-2.5 1.5-5 1.5-8C57 15 47 3 32 3z"
          fill="url(#mShine)"
        />

        {/* Visor — dark face plate */}
        <path
          d="M14 24c0-7 8-13 18-13s18 6 18 13c0 5-4 10-10 12l-3 1.5c-1.5 0.8-3.2 1.2-5 1.2s-3.5-0.4-5-1.2L24 36c-6-2-10-7-10-12z"
          fill="url(#mVisor)"
          stroke="#334155"
          strokeWidth="0.5"
        />

        {/* Left eye — glowing slit */}
        <motion.g filter="url(#eyeGlow)"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M19 23c0-2 2.5-4 5.5-4s5.5 2 5.5 4-2.5 3.5-5.5 3.5S19 25 19 23z"
            fill="url(#mEyeGlow)"
            opacity="0.15"
          />
          <ellipse cx="24.5" cy="23" rx="4" ry="2.8" fill="url(#mEyeGlow)" />
          {/* Highlight */}
          <ellipse cx="23" cy="22" rx="1.2" ry="0.8" fill="white" opacity="0.7" />
        </motion.g>

        {/* Right eye — glowing slit */}
        <motion.g filter="url(#eyeGlow)"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <path
            d="M34 23c0-2 2.5-4 5.5-4s5.5 2 5.5 4-2.5 3.5-5.5 3.5S34 25 34 23z"
            fill="url(#mEyeGlow)"
            opacity="0.15"
          />
          <ellipse cx="39.5" cy="23" rx="4" ry="2.8" fill="url(#mEyeGlow)" />
          {/* Highlight */}
          <ellipse cx="38" cy="22" rx="1.2" ry="0.8" fill="white" opacity="0.7" />
        </motion.g>

        {/* Center ridge — helmet detail */}
        <line x1="32" y1="6" x2="32" y2="16" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" opacity="0.25" />

        {/* Brow accent lines — aggressive/smart look */}
        <path d="M18 19l6-2" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        <path d="M46 19l-6-2" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

        {/* Chin V mark — brand identity */}
        <path
          d="M28 34l4 5 4-5"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.5"
        />

        {/* Side vents — tech detail */}
        <line x1="10" y1="28" x2="10" y2="32" stroke="#60A5FA" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
        <line x1="11.5" y1="29" x2="11.5" y2="33" stroke="#60A5FA" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />
        <line x1="54" y1="28" x2="54" y2="32" stroke="#60A5FA" strokeWidth="0.8" strokeLinecap="round" opacity="0.2" />
        <line x1="52.5" y1="29" x2="52.5" y2="33" stroke="#60A5FA" strokeWidth="0.8" strokeLinecap="round" opacity="0.15" />

        {/* Edge highlight */}
        <path
          d="M32 3C17 3 7 15 7 27c0 7 3 13 8 17l6 5c3 2.5 6 4 11 4s8-1.5 11-4l6-5c5-4 8-10 8-17C57 15 47 3 32 3z"
          fill="none"
          stroke="#60A5FA"
          strokeWidth="0.5"
          strokeOpacity="0.2"
        />
      </svg>
    </motion.div>
  );
}
