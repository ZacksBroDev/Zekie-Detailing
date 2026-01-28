import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altText?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, altText = 'Before and After' }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-white/10 cursor-ew-resize select-none group"
      onTouchMove={handleTouchMove}
    >
      {/* After Image (background) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={`${altText} - After`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-[#DC2626] px-3 py-1 rounded-md text-white text-xs font-heading uppercase tracking-wider">
          After
        </div>
      </div>
      
      {/* Before Image (clipped) */}
      <div 
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${altText} - Before`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-md text-black text-xs font-heading uppercase tracking-wider">
          Before
        </div>
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#DC2626] cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#DC2626] rounded-full shadow-[0_0_20px_rgba(220,38,38,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform">
          <ChevronLeft className="w-4 h-4 text-white absolute -left-1" />
          <ChevronRight className="w-4 h-4 text-white absolute -right-1" />
        </div>
      </div>
    </div>
  );
}
