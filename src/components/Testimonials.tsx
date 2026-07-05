/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, Instagram, ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Curated list of realistic, beautifully formatted Instagram Mentions
  const instagramReviews = [
    {
      handle: "@ananya_shah",
      tag: "#PriyaBride",
      review: "Can we talk about my wedding hair and makeup? Priya literally made me feel like royalty! Her precision and dedication are unmatched.",
      likes: "1,204 likes"
    },
    {
      handle: "@pooja_mehta_22",
      tag: "#DelhiNCRWeddings",
      review: "Priya's touch-up kit is an actual lifesaver. Saree was draped so perfectly I danced for 5 hours without a single pleat slipping!",
      likes: "842 likes"
    }
  ];

  return (
    <section id="testimonials-section" className="py-24 bg-soft-beige relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-vibrant-pink/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-luxury-pink/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Client Love
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            The Brides Speak
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Hear from our elite luxury brides and runway models on their custom beauty transformations.
          </p>
        </div>

        {/* Dynamic Reviews Carousel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Carousel */}
          <div className="lg:col-span-8">
            <div className="bg-soft-beige/25 border border-vibrant-pink/15 p-8 sm:p-12 relative shadow-sm min-h-[340px] flex flex-col justify-between">
              
              {/* Luxury Quote Indicator */}
              <div className="absolute top-8 right-8 text-vibrant-pink/10">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Gold Rating Stars */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: TESTIMONIALS_DATA[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-vibrant-pink text-vibrant-pink" />
                  ))}
                </div>

                {/* Testimonial body review */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="font-serif-luxury text-lg sm:text-xl font-light text-deep-black italic leading-relaxed"
                  >
                    &ldquo;{TESTIMONIALS_DATA[activeIndex].text}&rdquo;
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Client meta & Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pt-8 mt-8 border-t border-vibrant-pink/15 relative z-10">
                
                {/* Client Profile */}
                <div className="flex items-center space-x-4">
                  <img
                    src={TESTIMONIALS_DATA[activeIndex].image}
                    alt={TESTIMONIALS_DATA[activeIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-vibrant-pink/20"
                  />
                  <div>
                    <h4 className="font-serif-luxury text-sm font-semibold tracking-wider text-deep-black">
                      {TESTIMONIALS_DATA[activeIndex].name}
                    </h4>
                    <p className="text-[10px] text-dark-gray/60 uppercase tracking-widest font-sans">
                      {TESTIMONIALS_DATA[activeIndex].role} &bull; {TESTIMONIALS_DATA[activeIndex].location}
                    </p>
                  </div>
                </div>

                {/* Carousel Controls Buttons */}
                <div className="flex items-center space-x-3.5 self-end sm:self-auto font-sans">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 border border-vibrant-pink/20 text-dark-gray hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-colors cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="font-mono text-xs text-dark-gray/60">
                    0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
                  </span>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 border border-vibrant-pink/20 text-dark-gray hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-colors cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Google & Instagram Badges */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Google review trust box */}
            <div className="bg-white p-6 border border-vibrant-pink/15 flex items-center space-x-4 shadow-sm">
              <div className="w-12 h-12 bg-vibrant-pink/10 rounded-full flex items-center justify-center text-vibrant-pink shrink-0">
                <ShieldCheck size={24} className="text-vibrant-pink" />
              </div>
              <div>
                <div className="flex items-center space-x-1 text-vibrant-pink mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-vibrant-pink text-vibrant-pink" />
                  ))}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-deep-black font-sans">
                  Google Verified
                </h4>
                <p className="text-[11px] text-dark-gray/60 mt-0.5 font-sans">
                  5.0 Rating based on 240+ bridal reviews.
                </p>
              </div>
            </div>

            {/* Simulated Instagram Mentions cards */}
            <div className="space-y-4">
              <h4 className="text-[10px] uppercase tracking-widest text-dark-gray/60 font-bold flex items-center space-x-2">
                <Instagram size={12} className="text-vibrant-pink" />
                <span>Instagram Stories & Mentions</span>
              </h4>

              {instagramReviews.map((post, i) => (
                <div key={i} className="bg-soft-beige/10 border border-vibrant-pink/5 p-5 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-deep-black font-sans hover:text-vibrant-pink cursor-pointer">
                      {post.handle}
                    </span>
                    <span className="text-[9px] text-vibrant-pink uppercase font-bold tracking-widest">
                      {post.tag}
                    </span>
                  </div>
                  <p className="text-xs text-dark-gray/80 leading-relaxed font-sans italic">
                    &ldquo;{post.review}&rdquo;
                  </p>
                  <p className="text-[9px] text-dark-gray/40 font-mono mt-3">
                    Liked by {post.likes}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
