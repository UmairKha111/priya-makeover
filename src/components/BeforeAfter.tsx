/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
 
import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { BEFORE_AFTER_DATA } from "../data";
 
// Single slider component — reusable
function SliderItem({ item }: { item: typeof BEFORE_AFTER_DATA[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
 
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };
 
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };
 
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };
 
  const handleMouseUp = () => setIsDragging(false);
 
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);
 
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };
 
  return (
    <div className="flex flex-col gap-4">
      {/* Slider title */}
      <div className="text-center">
        <span className="text-[9px] uppercase tracking-[0.2em] text-rose-gold font-bold flex items-center justify-center gap-1.5">
          <Sparkles size={10} />
          {item.title}
        </span>
      </div>
 
      {/* Slider box */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        className="relative w-full aspect-[3/4] overflow-hidden shadow-xl cursor-ew-resize select-none border border-rose-gold/10 bg-white rounded-xl"
      >
        {/* Before Image */}
        <img
          src={item.beforeImage}
          alt="Before"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute top-3 left-3 z-20 bg-deep-black/60 backdrop-blur-md text-[8px] uppercase tracking-[0.2em] text-white px-2.5 py-1">
          Before
        </div>
 
        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.afterImage}
            alt="After"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          <div className="absolute top-3 right-3 z-20 bg-rose-gold text-white text-[8px] uppercase tracking-[0.2em] px-2.5 py-1 font-bold">
            After
          </div>
        </div>
 
        {/* Divider line + handle */}
        <div
          className="absolute inset-y-0 z-30 w-[2px] bg-rose-gold"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-deep-black rounded-full flex items-center justify-center border border-rose-gold/50 shadow-xl">
            <ArrowLeftRight size={14} className="text-rose-gold" />
          </div>
        </div>
      </div>
 
      {/* Slide hint */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-rose-gold">
        <ArrowLeftRight size={12} className="animate-pulse" />
        <span>Slide to compare</span>
      </div>
    </div>
  );
}
 
export default function BeforeAfter() {
  // Show first 2 items side by side, fallback to duplicate if only 1
  const item1 = BEFORE_AFTER_DATA[0];
  const item2 = BEFORE_AFTER_DATA[1] || BEFORE_AFTER_DATA[0];
 
  return (
    <section id="before-after-section" className="py-24 bg-soft-beige relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
 
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-bold">
            Flawless Transformations
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            The Power of Precision
          </h2>
          <div className="w-16 h-[1.5px] bg-rose-gold mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Interactive sliders showing natural beauty enhanced with our lightweight, luminous high-definition airbrush techniques.
          </p>
        </div>
 
        {/* ✅ 2 sliders side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <SliderItem item={item1} />
          <SliderItem item={item2} />
        </div>
 
        {/* Bottom info strip */}
        <div className="mt-12 p-5 border-l-2 border-rose-gold bg-white/50 max-w-2xl mx-auto">
          <h4 className="text-xs font-semibold uppercase mb-3">Specialized Care Included:</h4>
          <ul className="grid grid-cols-2 gap-1.5 text-xs text-dark-gray">
            <li>• Structural highlight mapping</li>
            <li>• Eye symmetry balancing</li>
            <li>• Corrective color filtering</li>
            <li>• Matte-to-luminous satin fusion</li>
          </ul>
        </div>
 
      </div>
    </section>
  );
}