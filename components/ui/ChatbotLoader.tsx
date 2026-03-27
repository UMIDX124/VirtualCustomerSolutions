'use client';

import dynamic from 'next/dynamic';

const SupportChatbot = dynamic(() => import('@/components/ui/SupportChatbot'), { ssr: false });

export function ChatbotLoader() {
  return <SupportChatbot />;
}
