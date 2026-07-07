import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, ArrowRight, Images } from "lucide-react";
import { GALLERY_IMAGES } from "../data";
 
interface PortfolioProps {
  onPageChange?: (pageId: string) => void;
  limit?: number;
}
 
export default function Portfolio({ onPageChange, limit }: PortfolioProps) {
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
 
  // Full page: filter by category. Home: sirf first 'limit' images, no filter
  const allFiltered = !limit
    ? (activeCategory === "all" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(i => i.category === activeCategory))
    : GALLERY_IMAGES;
 
  const displayItems = limit ? allFiltered.slice(0, limit) : allFiltered;
 
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
 
  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % displayItems.length);
  };
 
  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + displayItems.length) % displayItems.length);
  };
 
  return (
    <section id="portfolio-section" className="py-24 bg-soft-beige relative">
 
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full bg-rose-gold/5 blur-[100px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-12 relative z-10">
 
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-bold">
            Artistry Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            {limit ? 'Portfolio Highlights' : 'Full Portfolio'}
          </h2>
          <div className="w-16 h-[1.5px] bg-rose-gold mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            {limit
              ? 'A curated selection of bridal transformations, editorial looks, and luxury events.'
              : `${GALLERY_IMAGES.length} works — weddings, editorials, and luxury events by Maithili Gosavi.`
            }
          </p>
        </div>
 
        {/* Category Filter — sirf full portfolio page par */}
        {!limit && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null); }}
                className={`px-3 sm:px-5 py-2 text-[9px] sm:text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-deep-black text-white border-deep-black font-semibold"
                    : "bg-white text-dark-gray border-rose-gold/20 hover:border-rose-gold hover:text-rose-gold"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
 
        {/* Count — sirf full portfolio par */}
        {!limit && (
          <p className="text-center text-[10px] text-dark-gray/40 font-mono mb-8">
            Showing {displayItems.length} {activeCategory !== "all" ? `"${activeCategory}"` : ""} works
          </p>
        )}
 
        {/* Grid — 2 cols mobile, 4 cols desktop */}
        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[3/4] overflow-hidden bg-soft-beige cursor-pointer shadow-md hover:shadow-2xl border border-rose-gold/5"
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
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-rose-gold font-bold flex items-center gap-1">
                      <Sparkles size={9} />
                      <span>{item.category}</span>
                    </span>
                    <h3 className="font-serif-luxury text-sm sm:text-lg text-white font-light tracking-wide leading-tight">
                      {item.title}
                    </h3>
                    <p className="hidden sm:flex text-[10px] text-white/50 tracking-wider items-center gap-2">
                      <Maximize2 size={10} />
                      <span>View Fullscreen</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
 
        {/* ✅ See Full Portfolio button — sirf home par */}
        {limit && onPageChange && GALLERY_IMAGES.length > limit && (
          <div className="text-center mt-14 space-y-3">
            <button
              onClick={() => {
                onPageChange("portfolio");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-deep-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-rose-gold transition-all duration-300 group"
            >
              <Images size={15} />
              <span>Explore Full Portfolio</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[10px] text-dark-gray/40 font-mono">
              {limit} highlights shown · {GALLERY_IMAGES.length} total works available
            </p>
          </div>
        )}
 
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
            <div className="flex items-center justify-between text-white relative z-10 w-full">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-rose-gold font-bold">
                  Portfolio Showcase
                </span>
                <h4 className="font-serif-luxury text-sm sm:text-lg font-light tracking-wide">
                  {displayItems[lightboxIndex].title}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 border border-white/15 text-white/70 hover:text-rose-gold hover:border-rose-gold transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
 
            <div className="flex-1 flex items-center justify-center relative my-4 sm:my-6">
              <button onClick={prevImage} className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3 border border-white/10 text-white hover:bg-rose-gold hover:border-rose-gold transition-all rounded-full cursor-pointer">
                <ChevronLeft size={20} />
              </button>
              <div className="relative w-full max-w-4xl max-h-[65vh] overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                  src={displayItems[lightboxIndex].image}
                  alt={displayItems[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[65vh] object-contain shadow-2xl"
                />
              </div>
              <button onClick={nextImage} className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3 border border-white/10 text-white hover:bg-rose-gold hover:border-rose-gold transition-all rounded-full cursor-pointer">
                <ChevronRight size={20} />
              </button>
            </div>
 
            <div className="flex items-center justify-between text-white/50 text-[9px] sm:text-[10px] tracking-wider relative z-10 w-full border-t border-white/10 pt-3 sm:pt-4">
              <span>CATEGORY: <strong className="text-rose-gold uppercase">{displayItems[lightboxIndex].category}</strong></span>
              <span>{lightboxIndex + 1} / {displayItems.length}</span>
              <span className="hidden sm:inline">STUDIO: BANDRA, MUMBAI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}