"use client";

import { AnimatePresence, m } from "framer-motion";
import { useId, useState } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        const triggerId = `${baseId}-trigger-${index}`;
        const contentId = `${baseId}-content-${index}`;

        return (
          <Card key={item.question} className="overflow-hidden rounded-[24px]">
            <button
              type="button"
              id={triggerId}
              aria-expanded={isActive}
              aria-controls={contentId}
              onClick={() => setActiveIndex(isActive ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8 md:py-7"
            >
              <span className="max-w-[46rem] text-[16px] font-semibold leading-[1.65] tracking-[-0.015em] text-ink">{item.question}</span>
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border text-base text-brand-primary transition duration-300",
                  isActive ? "border-brand-primary/20 bg-brand-primary text-white" : "border-brand-primary/12 bg-white/70",
                )}
                aria-hidden="true"
              >
                {isActive ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <m.div
                  id={contentId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="border-t border-brand-primary/10 px-6 pb-8 pt-5 md:px-8">
                    <p className="max-w-[44rem] text-[15px] leading-[1.82] text-muted">{item.answer}</p>
                  </div>
                </m.div>
              ) : null}
            </AnimatePresence>
          </Card>
        );
      })}
    </div>
  );
}
