'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, ArrowRight, X } from 'lucide-react'

const HIDDEN_PATHS = [
  '/free-consultation',
  '/admin',
  '/thank-you',
]

const DISMISSED_KEY = 'vcs.stickyCta.dismissed'

export default function StickyConsultationCTA() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Check dismissal state on mount
  useEffect(() => {
    try {
      const stored = sessionStorage.getItem(DISMISSED_KEY)
      if (stored === 'true') setDismissed(true)
    } catch {
      // ignore
    }
  }, [])

  // Show after scrolling past hero (~600px)
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const shouldHide =
    dismissed ||
    HIDDEN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`))

  if (shouldHide) return null

  const handleDismiss = () => {
    setDismissed(true)
    try {
      sessionStorage.setItem(DISMISSED_KEY, 'true')
    } catch {
      // ignore
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40 hidden sm:block"
        >
          <div className="group relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#22C55E]/20" />

            {/* Main button */}
            <Link
              href="/free-consultation"
              className="relative flex items-center gap-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#059669] py-3.5 pl-5 pr-14 text-sm font-bold text-black shadow-[0_8px_32px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_48px_rgba(34,197,94,0.55)]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Free Consultation</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              aria-label="Dismiss consultation CTA"
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#0A0A0A] text-white/60 shadow-lg transition-all hover:border-white/40 hover:text-white"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Mobile variant — bottom bar */}
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 sm:hidden"
        >
          <div className="relative rounded-2xl border border-[#22C55E]/30 bg-[#0A0A0A]/95 p-1 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <Link
              href="/free-consultation"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#059669] py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <Sparkles className="h-4 w-4" />
              Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss consultation CTA"
              className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#0A0A0A] text-white/60 shadow-lg"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
