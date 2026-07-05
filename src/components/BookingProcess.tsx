/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROCESS_STEPS } from "../data";
import { ArrowDown, HelpCircle } from "lucide-react";

interface BookingProcessProps {
  onPageChange: (page: string) => void;
}

export default function BookingProcess({ onPageChange }: BookingProcessProps) {
  const steps = PROCESS_STEPS;

  return (
    <section id="booking-process-section" className="py-24 bg-soft-beige relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Client Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            The Booking Process
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            How we translate your inspiration into a flawless, long-lasting wedding day beauty signature.
          </p>
        </div>

        {/* Chronological Steps Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central connector line (for screens md and larger) */}
          <div className="absolute left-[29px] md:left-1/2 top-10 bottom-10 w-[1px] bg-vibrant-pink/20 -translate-x-1/2 pointer-events-none hidden md:block" />

          <div className="space-y-16 relative">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.stepNumber}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Central Node Circle */}
                  <div className="absolute left-[29px] md:left-1/2 -translate-x-1/2 w-14 h-14 bg-deep-black text-vibrant-pink border border-vibrant-pink/40 rounded-full flex items-center justify-center font-serif-luxury text-lg font-light z-10 shadow-xl">
                    {step.stepNumber}
                  </div>

                  {/* Left/Right Text Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? "md:pl-12" : "md:pr-12"
                  }`}>
                    <div className="bg-white/50 p-8 border border-vibrant-pink/20 hover:border-vibrant-pink transition-all duration-500 relative group rounded-none">
                      
                      {/* Accent corner pink line */}
                      <div className="absolute top-0 right-0 w-8 h-[1px] bg-vibrant-pink/40 group-hover:bg-vibrant-pink transition-colors duration-500" />
                      <div className="absolute top-0 right-0 h-8 w-[1px] bg-vibrant-pink/40 group-hover:bg-vibrant-pink transition-colors duration-500" />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-vibrant-pink font-bold">
                        Step 0{step.stepNumber}
                      </span>
                      <h3 className="font-serif-luxury text-xl font-light tracking-wide text-deep-black mt-1 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs text-dark-gray/80 leading-relaxed font-sans">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty placeholder column for balance on desktop */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive CTA Trigger Box */}
        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center p-8 sm:p-12 border border-vibrant-pink/30 bg-white max-w-xl">
            <HelpCircle size={20} className="text-vibrant-pink mb-3 animate-pulse" />
            <h3 className="font-serif-luxury text-xl text-deep-black font-light tracking-wide">
              Have Questions Before Booking?
            </h3>
            <p className="text-xs text-dark-gray/70 leading-relaxed font-sans mt-2 mb-6">
              Read our frequently asked questions below or directly get in touch with our bridal coordinator on WhatsApp for quick pricing guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center font-sans">
              <button
                onClick={() => {
                  onPageChange("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest hover:bg-vibrant-pink hover:text-white transition-colors rounded-none cursor-pointer"
              >
                Inquire Now
              </button>
              <a
                href="https://wa.me/919354208154"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 border border-vibrant-pink text-deep-black text-xs font-semibold uppercase tracking-widest hover:bg-blush-pink hover:text-vibrant-pink hover:border-vibrant-pink transition-colors text-center cursor-pointer"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
