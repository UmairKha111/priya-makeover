/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "The Artist" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "testimonials", label: "Brides" },
    { id: "contact", label: "Inquire" }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        id="main-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-soft-beige/85 backdrop-blur-md border-b border-vibrant-pink/20 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <button
            id="nav-logo"
            onClick={() => handleNavClick("home")}
            className="flex flex-col items-start text-left cursor-pointer group animate-fade-in"
          >
            <span className="font-serif-luxury text-xl sm:text-2xl font-light tracking-[0.25em] text-deep-black transition-colors duration-300 group-hover:text-vibrant-pink">
              PRIYA CHANDRA
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-vibrant-pink -mt-1 font-bold">
              Makeovers &amp; Academy
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="relative text-xs uppercase tracking-[0.2em] font-sans font-medium text-dark-gray hover:text-vibrant-pink transition-colors duration-300 py-1 cursor-pointer"
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-vibrant-pink"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Call To Action & Social Link */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://www.instagram.com/priya.makeovers935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-gray hover:text-vibrant-pink transition-colors duration-300 p-1 cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            <button
              id="cta-nav-button"
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2.5 border border-vibrant-pink/50 text-xs uppercase tracking-widest font-semibold text-deep-black hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-all duration-300 rounded-none cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex md:hidden items-center space-x-4">
            <a
              href="https://www.instagram.com/priya.makeovers935"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-gray hover:text-vibrant-pink transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} />
            </a>
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-deep-black hover:text-vibrant-pink transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-deep-black/95 backdrop-blur-md flex flex-col justify-between p-8 pt-28"
          >
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-vibrant-pink/10 blur-[80px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-luxury-pink/5 blur-[80px]" />

            <div className="relative z-10 flex flex-col space-y-6 text-center mt-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, ease: "easeOut" }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-2xl font-serif-luxury tracking-widest py-2 transition-colors cursor-pointer ${
                    currentPage === item.id ? "text-vibrant-pink font-semibold" : "text-luxury-white/70 hover:text-luxury-white"
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="relative z-10 flex flex-col items-center space-y-6 mb-8 text-center border-t border-luxury-white/10 pt-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-vibrant-pink">
                Delhi NCR, India &bull; Available Globally
              </span>
              <button
                id="mobile-menu-cta"
                onClick={() => handleNavClick("contact")}
                className="w-full max-w-xs py-3.5 bg-vibrant-pink text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-deep-black transition-all duration-300 rounded-none cursor-pointer"
              >
                Book Bridal 2026
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
