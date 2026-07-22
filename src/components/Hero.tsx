
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
 
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { IMAGES } from "../data";
 
interface HeroProps {
  onPageChange: (page: string) => void;
}
 
export default function Hero({ onPageChange }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
 
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };
 
  const imageRevealVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
    }
  };
 
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-soft-beige overflow-hidden pt-24 pb-16 lg:py-0"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* ── Structured data: helps Google understand this is a bridal makeup artist business ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Priya Chandra Makeovers",
            "image": IMAGES.hero,
            "description":
              "Exquisite High-Definition & Airbrush bridal makeup artist based in Noida, Delhi NCR, serving destination weddings and editorial couture. Certified by Lakmé Academy, Kryolan, and CSA.",
            "areaServed": ["Noida", "Delhi NCR", "India"],
            "priceRange": "$$$",
            "knowsAbout": [
              "Bridal Makeup",
              "HD Makeup",
              "Airbrush Makeup",
              "Destination Wedding Makeup",
              "Editorial Makeup",
            ],
          }),
        }}
      />
 
      {/* Background soft ambient glows with a gorgeous luxury pink theme */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-luxury-pink/15 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-vibrant-pink/10 blur-[120px] pointer-events-none" />
 
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Text layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 flex flex-col items-start space-y-6 sm:space-y-8"
        >
          {/* Accent Pink/Gold Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 border border-vibrant-pink/30 bg-blush-pink px-4 py-1.5 rounded-none"
          >
            <Sparkles size={12} className="text-vibrant-pink animate-spin" style={{ animationDuration: '4s' }} />
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.25em] text-vibrant-pink">
            Noida Delhi NCR &bull; Travel Globally 🌍
            </span>
          </motion.div>
 
          {/* Majestic Hero Typography */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif-luxury tracking-normal leading-[1.1] text-deep-black"
              itemProp="name"
            >
              The Art of <br />
              <span className="italic font-normal font-display text-vibrant-pink">Exquisite</span> Bridal <br />
              Mastery
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm font-light text-dark-gray/80 leading-relaxed tracking-wide max-w-lg font-sans"
              itemProp="description"
            >
              Exquisite High-Definition & Airbrush makeup designed for luxury brides, destination weddings, and editorial couture. Painted with global certifications by Lakmé Academy, Kryolan, and CSA.
            </motion.p>
          </div>
 
          {/* Bullet achievements panel */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 py-6 border-y border-vibrant-pink/20 w-full max-w-md"
          >
            <div>
              <p className="font-serif-luxury text-xl sm:text-2xl text-vibrant-pink font-semibold">1,000+</p>
              <p className="text-[9px] uppercase tracking-wider text-dark-gray/60 font-medium">Brides Styled</p>
            </div>
            <div>
              <p className="font-serif-luxury text-xl sm:text-2xl text-vibrant-pink font-semibold">12+</p>
              <p className="text-[9px] uppercase tracking-wider text-dark-gray/60 font-medium">Years Experience</p>
            </div>
            <div>
              <p className="font-serif-luxury text-xl sm:text-2xl text-vibrant-pink font-semibold">100%</p>
              <p className="text-[9px] uppercase tracking-wider text-dark-gray/60 font-medium">Elite Hygiene</p>
            </div>
          </motion.div>
 
          {/* Dual Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              id="hero-primary-cta"
              aria-label="Book bridal makeup appointment with Priya Chandra"
              onClick={() => {
                onPageChange("contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-vibrant-pink hover:text-white transition-all duration-300 rounded-none shadow-lg shadow-deep-black/10 cursor-pointer"
            >
              <span>Book Priya Chandra</span>
              <ArrowRight size={14} />
            </button>
            <button
              id="hero-secondary-cta"
              aria-label="Explore Priya Chandra's bridal makeup portfolio"
              onClick={() => {
                onPageChange("portfolio");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-8 py-4 border border-vibrant-pink/50 text-deep-black text-xs font-semibold uppercase tracking-widest hover:bg-blush-pink hover:text-vibrant-pink hover:border-vibrant-pink transition-all duration-300 rounded-none cursor-pointer"
            >
              Explore Portfolio
            </button>
          </motion.div>
        </motion.div>
 
        {/* Right Column: Editorial Portrait layout */}
        <div className="lg:col-span-6 relative w-full flex justify-center">
          {/* Subtle framed backdrop elements */}
          <div className="absolute -top-4 -left-4 w-full h-full border border-vibrant-pink/20 pointer-events-none translate-x-8 translate-y-8" />
          
          <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden shadow-2xl bg-soft-beige">
            <motion.img
              variants={imageRevealVariants}
              initial="hidden"
              animate="visible"
              src={IMAGES.hero}
              alt="Priya Chandra, professional bridal makeup artist in Noida Delhi NCR, applying HD airbrush bridal makeup"
              title="Priya Chandra Bridal Makeup Artist — Noida, Delhi NCR"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              itemProp="image"
              className="w-full h-full object-cover"
            />
            {/* Elegant overlay shadow border */}
            <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none" />
          </div>
 
          {/* Absolute floating micro badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -bottom-6 -left-4 sm:left-4 bg-deep-black text-vibrant-pink px-5 py-4 flex flex-col justify-center items-center text-center shadow-2xl border border-vibrant-pink/30 min-w-[140px]"
          >
            <span className="font-serif-luxury text-xs tracking-wider">BRIDAL BOOKINGS</span>
            <span className="font-sans text-[11px] uppercase text-luxury-white font-bold tracking-[0.2em] mt-1">OPEN FOR 2026</span>
          </motion.div>
        </div>
 
      </div>
    </section>
  );
}