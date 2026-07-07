/**
 * FullPortfolio.tsx — Dedicated portfolio page with ALL images + category filter
 * Yahan future mein aur images add karo GALLERY_IMAGES mein, sab yahan dikhenge
 */
 
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
 
export default function FullPortfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
 
  const categories = [
    { id: "all", label: "Show All" },
    { id: "bridal", label: "Royal Bride" },
    { id: "engagement", label: "Engagement" },
    { id: "reception", label: "Reception" },
    { id: "party", label: "Cocktail Party" },
    { id: "fashion", label: "Couture Fashion" },
    { id: "editorial", label: "Editorial" },
  ];
 
  const filteredItems = activeCategory === "all"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((item) => item.category === activeCategory);
 
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
 
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };
 
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };
 
  return (
    <section className="py-24 bg-soft-beige relative">
 
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-vibrant-pink/5 blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
 
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Complete Collection
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            Full Portfolio
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            {GALLERY_IMAGES.length} works — weddings, editorials, and luxury events by Priya Chandra.
          </p>
        </div>
 
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 text-[9px] sm:text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-deep-black text-luxury-white border-deep-black font-semibold"
                  : "bg-white text-dark-gray border-vibrant-pink/15 hover:border-vibrant-pink hover:text-vibrant-pink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
 
        {/* Count */}
        <p className="text-center text-[10px] text-dark-gray/40 font-mono mb-8">
          Showing {filteredItems.length} {activeCategory !== "all" ? `"${activeCategory}"` : ""} works
        </p>
 
        {/* Full Grid — 2 cols mobile, 4 cols desktop */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-3 sm:p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-1 sm:space-y-2">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-vibrant-pink font-bold flex items-center gap-1">
                      <Sparkles size={9} />
                      <span>{item.category}</span>
                    </span>
                    <h3 className="font-serif-luxury text-sm sm:text-lg text-luxury-white font-light tracking-wide leading-tight">
                      {item.title}
                    </h3>
                    <p className="hidden sm:flex text-[10px] text-luxury-white/50 tracking-wider items-center gap-2">
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
 
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-10 select-none"
            onClick={closeLightbox}
          >
            <div className="flex items-center justify-between text-luxury-white relative z-10 w-full">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-vibrant-pink font-bold">Portfolio Showcase</span>
                <h4 className="font-serif-luxury text-sm sm:text-lg font-light tracking-wide">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <button onClick={closeLightbox} className="p-2 border border-luxury-white/15 text-luxury-white/70 hover:text-vibrant-pink hover:border-vibrant-pink transition-colors cursor-pointer">
                <X size={20} />
              </button>
            </div>
 
            <div className="flex-1 flex items-center justify-center relative my-4 sm:my-6">
              <button onClick={prevImage} className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3 border border-luxury-white/10 text-luxury-white hover:bg-vibrant-pink hover:border-vibrant-pink transition-all rounded-full cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <div className="relative w-full max-w-4xl max-h-[65vh] overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[65vh] object-contain shadow-2xl"
                />
              </div>
              <button onClick={nextImage} className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3 border border-luxury-white/10 text-luxury-white hover:bg-vibrant-pink hover:border-vibrant-pink transition-all rounded-full cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
 
            <div className="flex items-center justify-between text-luxury-white/50 text-[9px] sm:text-[10px] tracking-wider relative z-10 w-full border-t border-luxury-white/10 pt-3 sm:pt-4">
              <span>CATEGORY: <strong className="text-vibrant-pink uppercase">{filteredItems[lightboxIndex].category}</strong></span>
              <span>{lightboxIndex + 1} / {filteredItems.length}</span>
              <span className="hidden sm:inline">STUDIO: DELHI NCR, INDIA</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}