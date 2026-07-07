/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
 
// Page/Section imports
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Portfolio from "./components/Portfolio";
import BookingProcess from "./components/BookingProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
 
import { IMAGES } from "./data";
import { ArrowRight } from "lucide-react";
 
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");
 
  useEffect(() => {
    if (!isLoading) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [currentPage, isLoading]);
 
  const handlePageChange = (pageId: string) => {
    setCurrentPage(pageId);
  };
 
  const handleGoHome = () => setCurrentPage("home");
 
  const renderPageContent = () => {
    switch (currentPage) {
      case "home":
        return (
          <div key="home-page" className="space-y-0">
            <Hero onPageChange={handlePageChange} />
 
            {/* About Teaser */}
            <section id="about-teaser-section" className="py-24 bg-soft-beige relative">
              <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5 relative group">
                  <div className="absolute top-4 -left-4 w-full h-full border border-rose-gold/20 pointer-events-none rounded-none translate-x-2 translate-y-2" />
                  <div className="relative aspect-[3/4] overflow-hidden shadow-xl bg-white">
                    <img
                      src={IMAGES.portrait}
                      alt="Maithili Gosavi Masterclass"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                    />
                  </div>
                </div>
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-bold">
                    The Artist Narrative
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury text-deep-black tracking-wide leading-tight">
                    Crafting Couture Beauty for the Discerning Bride
                  </h2>
                  <div className="w-12 h-[1px] bg-rose-gold" />
                  <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans font-light">
                    Based in Bandra, Mumbai, Maithili Gosavi is a globally certified professional makeup architect specializing in radiant high-definition bridal transformations, custom saree drapery, and high-contrast evening reception statements.
                  </p>
                  <p className="text-xs sm:text-sm text-dark-gray/80 leading-relaxed font-sans font-light">
                    Every client receives a curated cosmetic catalog—utilizing Dior, Chanel, and Charlotte Tilbury formulations designed strictly to withstand heat, motion, and emotional joy for a flawless 16-hour display.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => handlePageChange("about")}
                      className="inline-flex items-center space-x-2.5 pb-2 border-b border-rose-gold text-xs font-semibold uppercase tracking-widest text-deep-black hover:text-rose-gold transition-colors"
                    >
                      <span>Read My Full Journey</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
 
            <Services onPageChange={handlePageChange} />
            <BeforeAfter />
 
            {/* ✅ Home par sirf 8 images + "Explore Full Portfolio" button */}
            <Portfolio onPageChange={handlePageChange} limit={8} />
 
            <Testimonials />
            <BookingProcess onPageChange={handlePageChange} />
            <FAQ />
            <Contact />
          </div>
        );
 
      case "about":
        return (
          <div key="about-page">
            <About onPageChange={handlePageChange} />
            <BookingProcess onPageChange={handlePageChange} />
            <FAQ />
          </div>
        );
 
      case "services":
        return (
          <div key="services-page">
            <Services onPageChange={handlePageChange} />
            <BeforeAfter />
            <FAQ />
          </div>
        );
 
      case "portfolio":
        return (
          <div key="portfolio-page">
            {/* ✅ Full portfolio — no limit, category filter dikhega */}
            <Portfolio />
          </div>
        );
 
      case "testimonials":
        return (
          <div key="testimonials-page">
            <Testimonials />
            <BeforeAfter />
          </div>
        );
 
      case "contact":
        return (
          <div key="contact-page">
            <Contact />
            <FAQ />
          </div>
        );
 
      default:
        return (
          <div key="404-page" className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-luxury-white">
            <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-bold">
              Error Code 404
            </span>
            <h2 className="text-4xl sm:text-5xl font-light font-serif-luxury tracking-wide text-deep-black mt-2 mb-4">
              Aesthetic Lost
            </h2>
            <p className="text-xs text-dark-gray/60 font-sans max-w-sm leading-relaxed mb-8">
              The premium layout or bridal lookbook you are trying to access has been relocated or is currently under private viewing.
            </p>
            <button
              onClick={handleGoHome}
              className="px-8 py-3.5 bg-deep-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-rose-gold hover:text-deep-black transition-colors rounded-none"
            >
              Return to Gallery
            </button>
          </div>
        );
    }
  };
 
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <div className="bg-soft-beige flex flex-col min-h-screen relative font-sans text-deep-black">
            <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
            <main className="flex-grow pt-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {renderPageContent()}
                </motion.div>
              </AnimatePresence>
            </main>
            <FloatingWhatsApp />
            <ScrollToTop />
            <Footer onPageChange={handlePageChange} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}