'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type PageRoute =
  | 'home'
  | 'services'
  | 'pricing'
  | 'about'
  | 'blog'
  | 'contact'
  | 'careers'
  | 'free-audit'
  | 'performance-marketing'
  | 'remote-workforce'
  | 'systems-reporting'
  | 'results'
  | 'free-growth-audit';

export const pathToPage: Record<string, PageRoute> = {
  '/': 'home',
  '/services': 'services',
  '/pricing': 'pricing',
  '/about': 'about',
  '/blog': 'blog',
  '/contact': 'contact',
  '/careers': 'careers',
  '/free-audit': 'free-audit',
  '/performance-marketing': 'performance-marketing',
  '/remote-workforce': 'remote-workforce',
  '/systems-reporting': 'systems-reporting',
  '/results': 'results',
  '/free-growth-audit': 'free-growth-audit',
};

export const pageToPath: Record<PageRoute, string> = {
  home: '/',
  services: '/services',
  pricing: '/pricing',
  about: '/about',
  blog: '/blog',
  contact: '/contact',
  careers: '/careers',
  'free-audit': '/free-audit',
  'performance-marketing': '/performance-marketing',
  'remote-workforce': '/remote-workforce',
  'systems-reporting': '/systems-reporting',
  results: '/results',
  'free-growth-audit': '/free-growth-audit',
};

export const pageNames: Record<PageRoute, string> = {
  home: 'Home',
  services: 'Services',
  pricing: 'Pricing',
  about: 'About',
  blog: 'Blog',
  contact: 'Contact',
  careers: 'Careers',
  'free-audit': 'Free Audit',
  'performance-marketing': 'Performance Marketing',
  'remote-workforce': 'Remote Workforce',
  'systems-reporting': 'Systems & Reporting',
  results: 'Results',
  'free-growth-audit': 'Free Growth Audit',
};

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = useMemo<PageRoute>(() => pathToPage[pathname] || 'home', [pathname]);

  const navigateTo = useCallback(
    (page: PageRoute) => {
      router.push(pageToPath[page]);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [router],
  );

  return { currentPage, navigateTo };
}
