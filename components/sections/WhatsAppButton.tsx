'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const handleClick = () => {
    const message = "Hi! I'm interested in Virtual Customer Solution's services.";
    const url = `https://wa.me/923151407896?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-[background-color,box-shadow,transform] duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
