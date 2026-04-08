// ── FAQ Fallback System ────────────────────────────────────────────────────────
// Keyword-matching for when AI is unavailable

interface FAQ {
  keywords: string[]
  answer: string
}

const FAQS: FAQ[] = [
  {
    keywords: [
      'services',
      'offer',
      'provide',
      'what do you do',
      'marketing',
      'growth systems',
      'performance marketing',
      'remote workforce',
    ],
    answer:
      "We offer three core services: **Growth Systems** (marketing automation & sales funnels), **Performance Marketing** (ROI-driven paid ads), and **Remote Workforce Solutions** (building & managing remote teams). Want to learn more about any of these? Visit our [services page](/services) or book a [free growth audit](/free-growth-audit)!",
  },
  {
    keywords: [
      'price',
      'pricing',
      'cost',
      'how much',
      'rate',
      'package',
      'fee',
      'afford',
      'budget',
    ],
    answer:
      "We don't do one-size-fits-all pricing. Every engagement starts with a **free growth audit** where we understand your needs and propose a custom plan. Typical work ranges from project-based to monthly retainers. Check our [pricing page](/pricing) or [book your free audit](/free-growth-audit) to get a tailored proposal!",
  },
  {
    keywords: [
      'free audit',
      'growth audit',
      'free consultation',
      'free analysis',
      'audit',
    ],
    answer:
      "Our **free growth audit** includes a full marketing funnel analysis, competitor benchmarking, quick-win identification, and a custom growth roadmap. No obligation, no pressure — just actionable insights. [Book yours here](/free-growth-audit)!",
  },
  {
    keywords: [
      'team',
      'founder',
      'who',
      'about',
      'faizan',
      'company',
      'about you',
    ],
    answer:
      "Virtual Customer Solution was founded in **2018 by M Faizan Rafiq**, a digital marketing strategist with 6+ years of experience. We're based in Pakistan with a global client reach, helping businesses grow through data-driven marketing and automation. Learn more on our [about page](/about)!",
  },
  {
    keywords: [
      'contact',
      'email',
      'reach',
      'get in touch',
      'talk',
      'call',
      'phone',
    ],
    answer:
      "You can reach us at **contact@virtualcustomersolution.com** or visit our [contact page](/contact). For a more structured conversation about your growth goals, [book a free audit](/free-growth-audit) — it's the best way to start!",
  },
  {
    keywords: [
      'process',
      'how does it work',
      'methodology',
      'steps',
      'how do you work',
      'approach',
    ],
    answer:
      "Our process is straightforward: **1)** Free Growth Audit **2)** Custom Strategy Design **3)** Implementation **4)** Optimization & Testing **5)** Scale What Works. Everything starts with understanding your business. [Book your free audit](/free-growth-audit) to get started!",
  },
  {
    keywords: [
      'results',
      'case study',
      'case studies',
      'proof',
      'roi',
      'outcome',
      'success',
    ],
    answer:
      "We're all about measurable results and transparent reporting. Check out our [case studies](/case-studies) to see how we've helped businesses grow. Every engagement is tracked with clear KPIs so you always know your ROI.",
  },
  {
    keywords: [
      'hello',
      'hi',
      'hey',
      'good morning',
      'good afternoon',
      'good evening',
      'howdy',
    ],
    answer:
      "Hey there! I'm Vico, the VCS assistant. I can help you learn about our services, pricing, or connect you with our team. What brings you here today?",
  },
  {
    keywords: [
      'support',
      'ticket',
      'bug',
      'issue',
      'problem',
      'help',
      'broken',
      'error',
    ],
    answer:
      "For support issues, please email us at **contact@virtualcustomersolution.com** with a clear subject line describing your issue. Our team will get back to you as soon as possible. If it's urgent, mention that in the subject!",
  },
]

// ── Matching Logic ─────────────────────────────────────────────────────────────

function scoreKeywords(message: string, keywords: string[]): number {
  const lower = message.toLowerCase()
  let score = 0

  for (const keyword of keywords) {
    if (lower.includes(keyword.toLowerCase())) {
      // Multi-word keywords score 2x
      const isMultiWord = keyword.includes(' ')
      score += isMultiWord ? 2 : 1
    }
  }

  return score
}

export function matchFAQ(message: string): string | null {
  let bestMatch: FAQ | null = null
  let bestScore = 0

  for (const faq of FAQS) {
    const score = scoreKeywords(message, faq.keywords)
    if (score > bestScore) {
      bestScore = score
      bestMatch = faq
    }
  }

  // Require at least some keyword overlap
  if (bestScore > 0 && bestMatch) {
    return bestMatch.answer
  }

  return null
}
