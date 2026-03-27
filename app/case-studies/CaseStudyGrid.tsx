"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Filter } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyGridProps {
  caseStudies: CaseStudy[];
  services: string[];
  industries: string[];
}

export function CaseStudyGrid({ caseStudies, services, industries }: CaseStudyGridProps) {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filtered = caseStudies.filter((cs) => {
    if (activeService && !cs.servicesUsed.includes(activeService)) return false;
    if (activeIndustry && cs.industry !== activeIndustry) return false;
    return true;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center gap-2 text-sm font-medium text-[var(--text-muted)]">
          <Filter className="h-4 w-4" />
          <span>Filter by</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setActiveService(null);
              setActiveIndustry(null);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeService && !activeIndustry
                ? "bg-[var(--red-primary)] text-black"
                : "border border-[var(--border-strong)] text-[var(--text-secondary)] hover:border-[var(--red-primary)] hover:text-[var(--text-primary)]"
            }`}
          >
            All
          </button>
          {services.map((service) => (
            <button
              key={service}
              onClick={() => {
                setActiveService(activeService === service ? null : service);
                setActiveIndustry(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeService === service
                  ? "bg-[var(--red-primary)] text-black"
                  : "border border-[var(--border-strong)] text-[var(--text-secondary)] hover:border-[var(--red-primary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {service}
            </button>
          ))}
          <span className="hidden items-center text-[var(--border-strong)] sm:flex">|</span>
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => {
                setActiveIndustry(activeIndustry === industry ? null : industry);
                setActiveService(null);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeIndustry === industry
                  ? "bg-[var(--red-primary)] text-black"
                  : "border border-[var(--border-strong)] text-[var(--text-secondary)] hover:border-[var(--red-primary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((cs) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] transition-[border-color,box-shadow] duration-300 hover:border-[var(--red-primary)] hover:shadow-[0_0_40px_var(--red-glow)]"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[var(--red-dark)] to-[var(--red-primary)]" />

            <div className="flex flex-1 flex-col p-6">
              {/* Meta */}
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-full bg-[var(--surface-glass-strong)] px-3 py-1 text-xs font-medium text-[var(--red-primary)]">
                  {cs.industry}
                </span>
                <span className="text-xs text-[var(--text-light)]">{cs.duration}</span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-bold leading-snug text-[var(--text-primary)] transition-colors group-hover:text-[var(--red-primary)]">
                {cs.title}
              </h3>

              {/* Client Type */}
              <p className="mb-4 text-sm text-[var(--text-muted)]">{cs.client}</p>

              {/* Key Metrics */}
              <div className="mb-6 grid grid-cols-2 gap-3">
                {cs.results.slice(0, 2).map((result) => (
                  <div
                    key={result.metric}
                    className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-3"
                  >
                    <div className="font-mono text-xl font-bold text-[var(--red-primary)]">
                      {result.value}
                    </div>
                    <div className="mt-1 text-xs text-[var(--text-muted)]">{result.metric}</div>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="mt-auto flex flex-wrap gap-1.5">
                {cs.servicesUsed.map((service) => (
                  <span
                    key={service}
                    className="rounded-md bg-[var(--surface-glass)] px-2 py-0.5 text-[11px] font-medium text-[var(--text-light)]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {/* Read More */}
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--red-primary)] opacity-0 transition-opacity group-hover:opacity-100">
                Read Case Study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-[var(--text-muted)]">
            No case studies match your current filters.
          </p>
          <button
            onClick={() => {
              setActiveService(null);
              setActiveIndustry(null);
            }}
            className="mt-4 text-sm font-medium text-[var(--red-primary)] underline underline-offset-4"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
