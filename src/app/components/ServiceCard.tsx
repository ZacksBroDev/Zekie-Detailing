import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageUrl?: string;
}

export function ServiceCard({ title, description, icon, imageUrl }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1c] to-[#0a0a0b] border border-white/10 hover:border-[#DC2626]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.2)]">
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/50 to-transparent z-10" />
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </div>
      )}
      <div className="p-6">
        {icon && (
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#DC2626]/10 border border-[#DC2626]/30 mb-4 text-[#DC2626]">
            {icon}
          </div>
        )}
        <h3 className="font-heading text-2xl mb-3 text-white uppercase tracking-wider">
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 text-[#DC2626] font-heading text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn More
          <span className="transform transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </div>
  );
}
