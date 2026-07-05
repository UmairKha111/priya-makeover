/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, X, Sparkles, BookOpen } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { ServiceItem } from "../types";

interface ServicesProps {
  onPageChange: (page: string) => void;
}

export default function Services({ onPageChange }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(null);
    onPageChange("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="services-section" className="py-24 bg-soft-beige relative">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-vibrant-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-luxury-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Service Menu
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            Curated Beauty Experiences
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Combining absolute luxury products with award-winning technical application to illuminate your natural contours.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white/50 border border-vibrant-pink/20 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:bg-white hover:border-vibrant-pink"
            >
              <div>
             {/* Service Image Frame */}
<div className="aspect-[16/10] overflow-hidden bg-soft-beige relative">
  <img
    src={service.image}
    alt={service.title}
    referrerPolicy="no-referrer"
    className="
      w-full 
      h-full 
      object-cover 
      object-top
      transition-transform 
      duration-1000 
      group-hover:scale-105
    "
  />

  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Subtle hover icon */}
                  <div className="absolute top-4 right-4 bg-deep-black/80 backdrop-blur-md text-vibrant-pink p-2 border border-vibrant-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <BookOpen size={14} />
                  </div>
                </div>

                {/* Content info */}
                <div className="p-8 space-y-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-vibrant-pink font-semibold">
                      {service.subtitle}
                    </span>
                    <h3 className="font-serif-luxury text-xl text-deep-black font-light tracking-wide mt-1">
                      {service.title}
                    </h3>
                    <div className="h-[1px] w-full bg-vibrant-pink/20 group-hover:bg-vibrant-pink transition-all mt-3" />
                  </div>
                  <p className="text-xs text-dark-gray/80 font-sans leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-8 pb-8 pt-2">
                <button
                  id={`view-details-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 border border-vibrant-pink/30 text-xs font-semibold uppercase tracking-widest text-deep-black hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore Details</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global Travel Policy Banner */}
        <div className="mt-20 border border-vibrant-pink/20 p-8 sm:p-12 bg-soft-beige/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-vibrant-pink font-semibold">
              <Sparkles size={12} className="text-vibrant-pink" />
              <span>International Bridal Desk</span>
            </span>
            <h3 className="font-serif-luxury text-2xl text-deep-black font-light tracking-wide">
              Planning a Destination Wedding? We Travel Globally.
            </h3>
            <p className="text-xs text-dark-gray/80 leading-relaxed font-sans">
              From the heritage palaces of Jaipur and Udaipur to modern skyscrapers of Dubai or scenic settings of London and Goa, Priya and her elite squad travel fully equipped with customized lighting, high-end makeup kits, and strict hygiene protocols.
            </p>
          </div>
          <button
            onClick={() => handleBookService("Destination inquiry")}
            className="px-8 py-4 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest hover:bg-vibrant-pink hover:text-white transition-colors shrink-0 w-full lg:w-auto cursor-pointer"
          >
            Inquire for Destination Weddings
          </button>
        </div>

      </div>

      {/* Extensive Side Drawer for Selected Service */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 z-50 bg-deep-black"
            />

            {/* Sliding Panel container */}
            <motion.div
              id="service-drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-xl bg-luxury-white shadow-2xl p-8 sm:p-12 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                {/* Header title */}
                <div className="flex items-center justify-between border-b border-vibrant-pink/15 pb-6 mb-8">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-vibrant-pink font-semibold block">
                      {selectedService.subtitle}
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-light text-deep-black tracking-wide mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    id="close-service-drawer"
                    onClick={() => setSelectedService(null)}
                    className="p-2 border border-vibrant-pink/20 text-dark-gray hover:text-vibrant-pink hover:border-vibrant-pink transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Cover visual banner */}
                <div className="aspect-[16/9] overflow-hidden bg-soft-beige mb-8">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Narrative Description */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-deep-black font-sans">
                      Artistry Statement
                    </h4>
                    <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Highlights benefits */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-deep-black font-sans">
                      Core Experience &amp; Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs text-dark-gray">
                          <Check size={14} className="text-vibrant-pink shrink-0 mt-0.5" />
                          <span className="font-sans leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What is fully included list */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-semibold tracking-wider uppercase text-deep-black font-sans">
                      What is Fully Included
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.included.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-xs text-dark-gray">
                          <div className="w-1.5 h-1.5 bg-vibrant-pink rounded-full shrink-0 mt-1.5" />
                          <span className="font-sans leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Closing Booking buttons */}
              <div className="pt-10 border-t border-vibrant-pink/15 mt-10 flex gap-4">
                <button
                  id="drawer-book-button"
                  onClick={() => handleBookService(selectedService.title)}
                  className="flex-1 py-4 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest hover:bg-vibrant-pink hover:text-white transition-colors rounded-none cursor-pointer"
                >
                  Book Services
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-4 border border-vibrant-pink/20 text-xs font-semibold uppercase tracking-widest text-dark-gray hover:bg-soft-beige hover:text-vibrant-pink hover:border-vibrant-pink transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
