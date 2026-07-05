/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("f1"); // pre-open first item

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-soft-beige relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            Frequently Asked Queries
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
        </div>

        {/* Accordion List container */}
        <div className="space-y-4 border-t border-vibrant-pink/15 pt-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border-b border-vibrant-pink/15 pb-4 transition-all duration-300"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle size={16} className="text-vibrant-pink shrink-0 transition-colors group-hover:text-deep-black" />
                    <span className="font-serif-luxury text-base sm:text-lg text-deep-black font-light tracking-wide transition-colors group-hover:text-vibrant-pink">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-vibrant-pink shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Animated accordion panel height drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans font-light pl-8 pb-4 pr-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
