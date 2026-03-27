"use client";

import Link from "next/link";
import {
  BarChart3,
  TrendingUp,
  Target,
  ArrowRight,
  FileText,
  Calendar,
  Clock,
  Users,
  Zap,
  DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const reports = [
  {
    title: "Remote Work Statistics 2025",
    description:
      "Comprehensive data on remote work adoption rates, productivity metrics, and cost savings across 12 industries. Featuring interactive line charts, bar charts, and pie charts with 2,400+ data points.",
    href: "/research/remote-work-statistics",
    icon: BarChart3,
    category: "Workforce",
    readTime: "8 min read",
    date: "March 2025",
    color: "#22C55E",
    stats: [
      { label: "Data Points", value: "2,400+" },
      { label: "Industries", value: "12" },
      { label: "Charts", value: "5" },
    ],
    highlights: [
      "Remote adoption hit 36.2% in 2025",
      "Fully remote teams 22% more productive",
      "$13.1K avg savings per employee",
    ],
  },
  {
    title: "Marketing ROI Benchmarks by Channel",
    description:
      "Detailed ROI comparison across SEO, PPC, Social Media, Email Marketing, and Content Marketing. Includes grouped bar charts, area trend charts, and radar comparisons from 850+ companies.",
    href: "/research/marketing-roi-benchmarks",
    icon: Target,
    category: "Marketing",
    readTime: "6 min read",
    date: "February 2025",
    color: "#10B981",
    stats: [
      { label: "Channels Analyzed", value: "5" },
      { label: "Companies Surveyed", value: "850+" },
      { label: "Quarters Tracked", value: "8" },
    ],
    highlights: [
      "SEO delivers 748% avg ROI",
      "Email marketing: $14 cost per lead",
      "PPC fastest time-to-results",
    ],
  },
  {
    title: "Business Automation Trends 2025",
    description:
      "Explore how businesses are adopting automation: area charts showing adoption growth, bar charts comparing time savings, and line charts tracking cost reduction across labor, operations, and errors.",
    href: "/research/business-automation-trends",
    icon: TrendingUp,
    category: "Technology",
    readTime: "7 min read",
    date: "January 2025",
    color: "#8B5CF6",
    stats: [
      { label: "Processes Tracked", value: "1,200+" },
      { label: "Avg. Time Saved", value: "34%" },
      { label: "ROI at 12mo", value: "150%" },
    ],
    highlights: [
      "72% of businesses now automating",
      "Data entry hours cut by 80%",
      "Error costs reduced 52%",
    ],
  },
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.12),transparent_70%)]" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="badge mb-6 mx-auto w-fit">
                <FileText className="w-4 h-4" />
                Data-Driven Insights
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#F8FAFC]">
                Research &{" "}
                <span className="text-gradient">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-[#CBD5E1] max-w-2xl mx-auto mb-8">
                Actionable research reports backed by real-world data. Each
                report features interactive Recharts visualizations, key
                statistics, and practical takeaways.
              </p>
            </motion.div>

            {/* Aggregate stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10"
            >
              {[
                { icon: Users, label: "Data Points Analyzed", value: "4,800+" },
                { icon: DollarSign, label: "Companies Surveyed", value: "850+" },
                { icon: Zap, label: "Interactive Charts", value: "15+" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.12)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#22C55E]" />
                    </div>
                    <div className="text-left">
                      <div className="font-mono text-lg font-bold text-[#F8FAFC]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[#94A3B8]">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-6">
            {reports.map((report, i) => {
              const Icon = report.icon;
              return (
                <motion.div
                  key={report.href}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fade}
                >
                  <Link
                    href={report.href}
                    className="group card-accent p-0 hover:border-[#22C55E] transition-[border-color] duration-300 flex flex-col h-full overflow-hidden"
                  >
                    {/* Color bar */}
                    <div
                      className="h-1 w-full"
                      style={{ background: report.color }}
                    />

                    <div className="p-6 pb-4 flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${report.color}20` }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: report.color }}
                          />
                        </div>
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: report.color }}
                        >
                          {report.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#22C55E] transition-colors">
                        {report.title}
                      </h2>
                      <p className="text-sm text-[#94A3B8] mb-4 leading-relaxed">
                        {report.description}
                      </p>

                      {/* Key highlights */}
                      <div className="space-y-1.5 mb-4">
                        {report.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-xs text-[#CBD5E1]"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: report.color }}
                            />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="px-6 py-3 border-t border-[rgba(255,255,255,0.06)] flex gap-6">
                      {report.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-mono text-sm font-semibold text-[#F8FAFC]">
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#64748B]">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-3 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-[#64748B]">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {report.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {report.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#22C55E]">
                        Read Report
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="glass-panel p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
              Want Custom Research for Your Business?
            </h2>
            <p className="text-[#CBD5E1] mb-6 max-w-xl mx-auto">
              Our team can provide tailored research and data analysis specific
              to your industry and business goals.
            </p>
            <Link href="/free-audit" className="btn-primary gap-2">
              Get a Free Growth Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
