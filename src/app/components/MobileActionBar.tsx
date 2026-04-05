import React from 'react';
import { Phone, Calendar, FileText } from 'lucide-react';
import { DetailButton } from '@/app/components/DetailButton';

interface MobileActionBarProps {
  onBookClick: () => void;
  onQuoteClick: () => void;
  onCallClick: () => void;
}

export function MobileActionBar({ onBookClick, onQuoteClick, onCallClick }: MobileActionBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-[#0a0a0b]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <button
            onClick={onCallClick}
            className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/20 text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-all"
            aria-label="Call or Text"
          >
            <Phone className="w-5 h-5" />
          </button>
          <button
            onClick={onQuoteClick}
            className="flex items-center justify-center gap-2 flex-1 h-12 rounded-lg border border-white/20 text-white hover:border-[#DC2626] hover:text-[#DC2626] transition-all font-heading tracking-wider uppercase text-sm"
          >
            <FileText className="w-4 h-4" />
            Quote
          </button>
          <button
            onClick={onBookClick}
            className="flex items-center justify-center gap-2 flex-1 h-12 rounded-lg bg-[#DC2626] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:bg-[#EF4444] transition-all font-heading tracking-wider uppercase text-sm"
          >
            <Calendar className="w-4 h-4" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
