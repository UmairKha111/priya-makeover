/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { ArrowLeftRight, Sparkles } from "lucide-react";
import { BEFORE_AFTER_DATA } from "../data";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = BEFORE_AFTER_DATA[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;

    const position = Math.max(
      0,
      Math.min(100, (x / rect.width) * 100)
    );

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

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener(
        "mousemove",
        handleMouseMove
      );

      window.addEventListener(
        "mouseup",
        handleMouseUp
      );

      window.addEventListener(
        "touchmove",
        handleTouchMove,
        { passive: true }
      );

      window.addEventListener(
        "touchend",
        handleMouseUp
      );
    }

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      window.removeEventListener(
        "touchend",
        handleMouseUp
      );
    };
  }, [isDragging]);

  const handlePointerDown = (
    e: React.PointerEvent
  ) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  return (
    <section
      id="before-after-section"
      className="py-24 bg-soft-beige relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Heading */}

        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Flawless Transformations
          </span>

          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            The Power of Precision
          </h2>

          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />

          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Interactive slider showing natural beauty
            enhanced with our lightweight,
            luminous high-definition airbrush techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left details */}

          <div className="lg:col-span-4 space-y-6">

            <div className="inline-flex items-center space-x-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-vibrant-pink">
              <Sparkles
                size={12}
                className="text-vibrant-pink"
              />
              <span>
                Royal Bridal Transformation
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl text-deep-black font-light">
              {activeItem.title}
            </h3>

            <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed">
              {activeItem.description}
            </p>

            <div className="p-5 border-l-2 border-vibrant-pink bg-white/50">

              <h4 className="text-xs font-semibold uppercase mb-3">
                Specialized Care Included:
              </h4>

              <ul className="space-y-2 text-xs text-dark-gray">
                <li>• Structural highlight mapping</li>
                <li>• Eye symmetry balancing</li>
                <li>• Corrective color filtering</li>
                <li>• Matte-to-luminous satin fusion</li>
              </ul>

            </div>

            <div className="flex items-center space-x-3 text-xs text-vibrant-pink">
              <ArrowLeftRight
                size={14}
                className="animate-pulse"
              />

              <span>
                Slide horizontally to interact
              </span>
            </div>

          </div>

     {/* Interactive slider side */}
<div className="lg:col-span-8 flex justify-center">

  <div
    ref={containerRef}
    onPointerDown={handlePointerDown}
    className="
      relative
      w-full
      max-w-[500px]
      h-[75vh]
      overflow-hidden
      shadow-2xl
      cursor-ew-resize
      select-none
      border
      border-vibrant-pink/10
      bg-white
      rounded-xl
    "
  >

    {/* Before Image */}
    <img
      src={activeItem.beforeImage}
      alt="Before"
      draggable={false}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-contain
        object-center
        pointer-events-none
      "
    />

    <div className="absolute top-4 left-4 z-20 bg-deep-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-[0.25em] text-white px-3 py-1.5">
      Before / Natural
    </div>

    {/* After Image */}
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        clipPath: `polygon(
          0 0,
          ${sliderPosition}% 0,
          ${sliderPosition}% 100%,
          0 100%
        )`,
      }}
    >
      <img
        src={activeItem.afterImage}
        alt="After"
        draggable={false}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-contain
          object-center
          pointer-events-none
        "
      />

      <div className="absolute top-4 right-4 z-20 bg-vibrant-pink text-white text-[9px] uppercase tracking-[0.25em] px-3 py-1.5 font-bold">
        After / Airbrush Glam
      </div>
    </div>

    {/* Divider */}
    <div
      className="absolute inset-y-0 z-30 w-[2px] bg-vibrant-pink"
      style={{
        left: `${sliderPosition}%`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-deep-black rounded-full flex items-center justify-center border border-vibrant-pink/50 shadow-xl">
        <ArrowLeftRight
          size={16}
          className="text-vibrant-pink"
        />
      </div>
    </div>

  </div>

</div>
        </div>
      </div>
    </section>
  );
}