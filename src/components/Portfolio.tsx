/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
import { GalleryItem } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);

  const categories = [
    { id: "all", label: "Show All" },
    { id: "bridal", label: "Royal Bride" },
    { id: "engagement", label: "Engagement" },
    { id: "reception", label: "Reception" },
    { id: "party", label: "Cocktail Party" },
    { id: "fashion", label: "Couture Fashion" },
    { id: "editorial", label: "Editorial" }
  ];

  // Filter gallery items
  const filteredItems = activeCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((item) => item.category === activeCategory);

  const openLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
    setZoom(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    setZoom(false);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    setZoom(false);
  };

  return (
    <section id="portfolio-section" className="py-24 bg-soft-beige relative">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-vibrant-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Artistry Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            The Portfolios
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Browse through real wedding chronicles, destination gala records, and editorial lookbooks designed by Priya Chandra.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 rounded-none border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-deep-black text-luxury-white border-deep-black font-semibold"
                  : "bg-white text-dark-gray border-vibrant-pink/15 hover:border-vibrant-pink hover:text-vibrant-pink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[3/4] overflow-hidden bg-soft-beige cursor-pointer shadow-md hover:shadow-2xl border border-vibrant-pink/5"
                onClick={() => openLightbox(index)}
              >
                {/* Visual Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Cover Overlay hover display */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] space-y-2">
                    <span className="text-[9px] uppercase tracking-widest text-vibrant-pink font-bold flex items-center space-x-1.5">
                      <Sparkles size={10} className="text-vibrant-pink" />
                      <span>{item.category}</span>
                    </span>
                    <h3 className="font-serif-luxury text-lg text-luxury-white font-light tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-luxury-white/50 tracking-wider flex items-center space-x-2">
                      <Maximize2 size={10} />
                      <span>View Fullscreen</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Full-Screen Interactive Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 select-none"
            onClick={closeLightbox}
          >
            {/* Top Bar of lightbox */}
            <div className="flex items-center justify-between text-luxury-white relative z-10 w-full">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-vibrant-pink font-bold">
                  Portfolio Showcase
                </span>
                <h4 className="font-serif-luxury text-lg font-light tracking-wide">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(!zoom);
                  }}
                  className="text-xs uppercase tracking-widest text-luxury-white/70 hover:text-vibrant-pink hover:border-vibrant-pink transition-colors p-2 border border-luxury-white/10 cursor-pointer"
                >
                  {zoom ? "Fit Screen" : "Zoom 2X"}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2 border border-luxury-white/15 text-luxury-white/70 hover:text-vibrant-pink hover:border-vibrant-pink transition-colors cursor-pointer"
                  aria-label="Close Lightbox"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Middle slider portion */}
            <div className="flex-1 flex items-center justify-center relative my-6">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 z-10 p-3 border border-luxury-white/10 text-luxury-white hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-all duration-300 rounded-full cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central high resolution image viewer */}
              <div
                className="relative max-w-4xl max-h-[70vh] aspect-[3/4] overflow-hidden flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: zoom ? 1.4 : 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className={`max-w-full max-h-[70vh] object-contain shadow-2xl transition-transform duration-500`}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 z-10 p-3 border border-luxury-white/10 text-luxury-white hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-all duration-300 rounded-full cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Info coordinates */}
            <div className="flex items-center justify-between text-luxury-white/50 text-[10px] tracking-wider relative z-10 w-full border-t border-luxury-white/10 pt-4">
              <span>CATEGORY: <strong className="text-vibrant-pink uppercase font-semibold">{filteredItems[lightboxIndex].category}</strong></span>
              <span>IMAGE {lightboxIndex + 1} OF {filteredItems.length}</span>
              <span className="hidden sm:inline">STUDIO: DELHI NCR, INDIA</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
