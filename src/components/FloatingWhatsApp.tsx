/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send } from "lucide-react";
import { IMAGES } from "../data";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919354208154"; // Artist's real number from screenshot
  const rawMessage = "Hello Priya,\nI would like to book your makeup services.\nPlease share your availability.";
  const encodedMessage = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  const handleOpenChat = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div id="whatsapp-widget-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Interactive Expandable Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-box"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-80 mb-4 bg-luxury-white border border-vibrant-pink/20 shadow-2xl rounded-none overflow-hidden"
          >
            {/* Header portion */}
            <div className="bg-deep-black p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={IMAGES.portrait}
                    alt="Priya Chandra"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-vibrant-pink/30"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border border-deep-black rounded-full" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-sm font-medium text-luxury-white tracking-wider">
                    Priya Chandra
                  </h4>
                  <p className="text-[10px] text-vibrant-pink/80 font-sans tracking-wide">
                    Online &bull; Ready to Assist
                  </p>
                </div>
              </div>
              <button
                id="close-chat-widget"
                onClick={() => setIsOpen(false)}
                className="text-luxury-white/60 hover:text-luxury-white transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat body portion */}
            <div className="bg-soft-beige/50 p-4 min-h-[120px] flex flex-col justify-between">
              <div className="bg-white p-3 rounded-none border border-vibrant-pink/10 shadow-sm max-w-[90%]">
                <p className="text-[11px] uppercase tracking-wider text-vibrant-pink font-semibold mb-1">
                  Bridal Desk
                </p>
                <p className="text-xs text-dark-gray leading-relaxed font-sans">
                  Namaste! Thank you for reaching out. Let us co-create your absolute dream bridal, party, or editorial look. Share your dates below!
                </p>
              </div>

              <div className="text-[10px] text-dark-gray/40 text-right mt-2">
                Typically replies in minutes
              </div>
            </div>

            {/* CTA action footer */}
            <div className="p-3 bg-white border-t border-vibrant-pink/10">
              <button
                id="send-whatsapp-message"
                onClick={handleOpenChat}
                className="w-full py-2.5 px-4 bg-vibrant-pink text-white text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-2 hover:bg-deep-black hover:text-luxury-white transition-all duration-300 rounded-none cursor-pointer"
              >
                <span>Start Chat</span>
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        id="whatsapp-toggle-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-deep-black text-vibrant-pink shadow-2xl flex items-center justify-center border border-vibrant-pink/30 hover:bg-vibrant-pink hover:text-white hover:border-vibrant-pink transition-colors duration-500 rounded-full relative group cursor-pointer"
        aria-label="Chat with Priya on WhatsApp"
      >
        {/* Subtle glowing halo ring */}
        <span className="absolute inset-0 rounded-full bg-vibrant-pink/20 animate-ping group-hover:hidden duration-1000" />
        
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </motion.button>

    </div>
  );
}
