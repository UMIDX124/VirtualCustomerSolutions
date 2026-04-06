'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Lock, Loader2, ShieldCheck, User as UserIcon } from 'lucide-react'
import { motion } from 'framer-motion'

function LoginInner() {
  const router = useRouter()
  const search = useSearchParams()
  const next = search.get('next') || '/admin/leads'

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, pass }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Login failed')
      }
      router.push(next)
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center px-4">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#22C55E]/[0.05] blur-[130px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#22C55E]/30 bg-[#22C55E]/10 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
            <ShieldCheck className="h-7 w-7 text-[#22C55E]" />
          </div>
          <h1 className="font-display text-2xl font-bold text-white">
            VCS Admin
          </h1>
          <p className="mt-1 text-sm text-white/50">
            Sign in to manage leads
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0C0C0C]/90 p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Username
              </label>
              <div className="relative">
                <UserIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white/80">
                Password
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.02] py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-white/30 focus:border-[#22C55E] focus:outline-none focus:ring-2 focus:ring-[#22C55E]/20"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#059669] py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(34,197,94,0.35)] transition-all hover:shadow-[0_0_45px_rgba(34,197,94,0.5)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          Protected area · Session expires after 8 hours
        </p>
      </motion.div>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-[#22C55E]" />
        </div>
      }
    >
      <LoginInner />
    </Suspense>
  )
}
