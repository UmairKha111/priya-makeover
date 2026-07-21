/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="brand-footer" className="bg-deep-black text-luxury-white border-t border-vibrant-pink/20 pt-20 pb-12 relative overflow-hidden">
      
      {/* Soft branding ambient background lighting */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-vibrant-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-luxury-pink/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
        
        {/* Column 1: Brand details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="font-serif-luxury text-2xl tracking-[0.2em] text-vibrant-pink font-light">
              PRIYA CHANDRA
            </h3>
            <p className="text-[10px] uppercase tracking-[0.35em] text-luxury-white/50 mt-1">
              Makeovers &amp; Academy
            </p>
          </div>
          <p className="text-xs text-luxury-white/60 leading-relaxed font-light max-w-sm font-sans">
            Crafting premium luxury beauty transformations and masterclasses for bridal, high-fashion, and celebrity clients worldwide. Based in Delhi NCR, India.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/priya.makeovers935"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 border border-vibrant-pink/30 flex items-center justify-center text-vibrant-pink hover:bg-vibrant-pink hover:text-white transition-all duration-300 rounded-none cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="font-serif-luxury text-sm tracking-[0.15em] text-luxury-white uppercase font-medium mb-6">
            Explore
          </h4>
          <ul className="space-y-3.5">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "The Artist" },
              { id: "services", label: "Services & Masterclasses" },
              { id: "portfolio", label: "Artistry Portfolio" },
              { id: "testimonials", label: "Featured Brides" },
              { id: "contact", label: "Inquire & Book" }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className="text-xs text-luxury-white/60 hover:text-vibrant-pink transition-colors tracking-wide text-left cursor-pointer font-sans"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Premium Services */}
        <div>
          <h4 className="font-serif-luxury text-sm tracking-[0.15em] text-luxury-white uppercase font-medium mb-6">
            Artistry Services
          </h4>
          <ul className="space-y-3.5">
            {[
              "Royal Bridal HD Makeup",
              "Destination Airbrush Makeup",
              "Sagan & Engagement Glow",
              "Cocktail & Party Glam",
              "Celebrity & Editorial Couture",
              "Professional Hair Artistry",
              "Precision Saree Draping"
            ].map((service, index) => (
              <li key={index} className="text-xs text-luxury-white/60 hover:text-vibrant-pink transition-all duration-300 font-sans">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Travel */}
        <div className="flex flex-col space-y-6">
          <div>
            <h4 className="font-serif-luxury text-sm tracking-[0.15em] text-luxury-white uppercase font-medium mb-6">
              Bridal Desk
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3.5 font-sans">
                <MapPin size={14} className="text-vibrant-pink shrink-0 mt-0.5" />
                <span className="text-xs text-luxury-white/60 leading-relaxed font-light">
                Sector 41 Noida 201303, Delhi NCR, India &bull; Global Availability
                </span>
              </li>
              <li className="flex items-center space-x-3.5 font-sans">
                <Mail size={14} className="text-vibrant-pink shrink-0" />
                <a
                  href="mailto:priya.makeovers935@gmail.com"
                  className="text-xs text-luxury-white/60 hover:text-vibrant-pink transition-colors"
                >
                  priya.makeovers935@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3.5 font-sans">
                <Phone size={14} className="text-vibrant-pink shrink-0" />
                <a
                  href="tel:+919354208154"
                  className="text-xs text-luxury-white/60 hover:text-vibrant-pink transition-colors"
                >
                  +91 93542 08154
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-2 border-t border-luxury-white/10">
            <p className="text-[10px] text-vibrant-pink tracking-widest uppercase font-semibold">
              Bridal Bookings Open 2026
            </p>
          </div>
        </div>

      </div>

    {/* Luxury Bottom Footer */}
<div className="max-w-7xl mx-auto px-6 sm:px-12 mt-16 pt-10 border-t border-vibrant-pink/10 relative z-10">

  <div className="flex flex-col items-center justify-center text-center space-y-4">

    {/* Copyright */}
    <p className="text-[11px] tracking-[0.25em] uppercase text-luxury-white/45 font-light">
      © {new Date().getFullYear()} Priya Chandra Makeovers &amp; Academy
      <br className="sm:hidden" />
      <span className="hidden sm:inline"> • </span>
      All Rights Reserved
    </p>

    {/* Crafted By */}
    <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-vibrant-pink/30"></div>

      <p className="text-[11px] tracking-[0.35em] uppercase text-luxury-white/60">
        Crafted by
      </p>

      <div className="h-px w-12 bg-vibrant-pink/30"></div>
    </div>

    <a
      href="https://umanztechnology.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-serif-luxury text-vibrant-pink hover:text-luxury-pink transition-all duration-300 tracking-[0.15em]"
    >
      UMANZ TECHNOLOGY
    </a>

    {/* Links */}
    <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-luxury-white/50">

      <a
        href="https://umanztechnology.in"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-vibrant-pink transition-colors"
      >
        umanztechnology.in
      </a>

      <span className="text-vibrant-pink/40">•</span>

      <a
        href="https://www.instagram.com/umanztechnology/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-vibrant-pink transition-colors"
      >
       @umanztechnology
      </a>

      <span className="text-vibrant-pink/40">•</span>

      <a
        href="https://wa.me/916391157751"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-vibrant-pink transition-colors"
      >
        +91 63911 57751
      </a>

    </div>

  </div>

</div>
    </footer>
  );
}
