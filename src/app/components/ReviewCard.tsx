import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date?: string;
}

export function ReviewCard({ name, rating, review, date }: ReviewCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-white/10 rounded-xl p-6 hover:border-[#DC2626]/30 transition-all duration-300">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-[#DC2626] fill-[#DC2626]' : 'text-white/20'}`}
          />
        ))}
      </div>
      <p className="text-white/80 mb-4 leading-relaxed">"{review}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-medium">{name}</p>
          {date && <p className="text-white/50 text-sm">{date}</p>}
        </div>
      </div>
    </div>
  );
}
