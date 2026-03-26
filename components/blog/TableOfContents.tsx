'use client';

import { useEffect, useState, useCallback } from 'react';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const headingIds = items.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting heading
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="sticky top-28 glass-panel p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-[#3B82F6]" />
        <h2 className="font-display text-sm font-semibold text-[#F8FAFC] uppercase tracking-wider">
          On This Page
        </h2>
      </div>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={`block text-sm py-1.5 transition-colors border-l-2 ${
                item.level === 3 ? 'pl-6' : 'pl-3'
              } ${
                activeId === item.id
                  ? 'border-[#3B82F6] text-[#3B82F6] font-medium'
                  : 'border-transparent text-[#94A3B8] hover:text-[#CBD5E1] hover:border-[#334155]'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
