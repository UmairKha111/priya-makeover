/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Globe, Heart, ShieldCheck } from "lucide-react";
import { IMAGES } from "../data";

interface AboutProps {
  onPageChange: (page: string) => void;
}

export default function About({ onPageChange }: AboutProps) {
  const qualities = [
    {
      icon: <Award className="text-vibrant-pink w-5 h-5 shrink-0" />,
      title: "Highly Certified Master Artist",
      description: "Globally certified by Lakmé Academy, Kryolan India, and CSA (Cosmetics & Styling Association)."
    },
    {
      icon: <Globe className="text-vibrant-pink w-5 h-5 shrink-0" />,
      title: "Global Travel Access",
      description: "Based in Delhi NCR, traveling globally to destination weddings in Rajasthan, Europe, UAE, and beyond."
    },
    {
      icon: <ShieldCheck className="text-vibrant-pink w-5 h-5 shrink-0" />,
      title: "Elite Kit Hygiene",
      description: "Sterilized high-end cosmetics (Dior, Chanel, Charlotte Tilbury, Kryolan) cleaned with pro-grade sanitizers."
    },
    {
      icon: <Heart className="text-vibrant-pink w-5 h-5 shrink-0" />,
      title: "Couture Makeup & Education",
      description: "Dedicated educator teaching modern makeup masterclasses, hair styling design, and precise saree draping."
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-soft-beige relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-luxury-pink/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-vibrant-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-xl mx-auto mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink font-bold">
            The Creative Educator & Director
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            Priya Chandra Makeovers
          </h2>
          <div className="w-16 h-[1.5px] bg-vibrant-pink mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 font-sans mt-4 uppercase tracking-widest">
            Certified Makeup Artist & Beauty Educator
          </p>
        </motion.div>

        {/* Double Column Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait and credentials frame */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Elegant luxury framing */}
            <div className="absolute top-6 -left-6 w-full h-full border border-vibrant-pink/20 pointer-events-none rounded-none translate-x-3 translate-y-3" />
            
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl bg-white group">
              <img
                src={IMAGES.portrait}
                alt="Priya Chandra Professional Makeup Artist & Educator"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float signature tag */}
            <div className="absolute -bottom-6 right-4 sm:-right-4 bg-white p-5 shadow-xl border border-vibrant-pink/30 max-w-[200px] rounded-none">
              <p className="font-serif-luxury italic text-sm text-vibrant-pink">
                &ldquo;Beauty isn&apos;t about masking; it is about illuminating your authentic majesty.&rdquo;
              </p>
              <p className="text-[9px] uppercase tracking-widest text-dark-gray/60 mt-3 font-semibold">
                — Priya Chandra
              </p>
            </div>
          </motion.div>

          {/* Right Column: Biographical content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-light font-serif-luxury text-deep-black tracking-wide">
                A Legacy of Artistry, Flawless Finishes, and Empowering Education
              </h3>
              <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans font-light">
                As an acclaimed, Delhi NCR based celebrity makeup artist and professional educator, Priya Chandra has built a sterling reputation for defining the absolute height of modern bridal luxury. Certified by the world's most prestigious training hubs including Lakmé Academy, Kryolan India, and CSA, Priya specializes in weightless high-definition bridal airbrushing, sleek red-carpet makeovers, and custom saree drapery.
              </p>
              <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans font-light">
                Her hallmark is personalized cosmetic architecture—studying your unique bone structure and skin chemistry to sculpt looks that radiate emotional warmth, stay flawless under demanding production strobe lights, and withstand 16 hours of emotional tears and joy.
              </p>
            </div>

            {/* Qualities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {qualities.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex space-x-3.5 items-start"
                >
                  {item.icon}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-deep-black font-sans">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-dark-gray/70 leading-relaxed mt-1 font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  onPageChange("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-3.5 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest hover:bg-vibrant-pink hover:text-white transition-all duration-300 rounded-none cursor-pointer shadow-md hover:shadow-lg"
              >
                Inquire About Dates
              </button>
              <button
                onClick={() => {
                  onPageChange("services");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-8 py-3.5 border border-vibrant-pink/50 text-deep-black text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-vibrant-pink hover:border-vibrant-pink transition-all duration-300 rounded-none cursor-pointer"
              >
                View Service Menu
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
