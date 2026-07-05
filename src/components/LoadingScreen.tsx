/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  key?: string;
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 600); // Wait for fadeout animation
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-black text-luxury-white"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Subtle glowing ambient spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-vibrant-pink/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-luxury-pink/5 blur-[120px]" />

          <div className="z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Elegant Subtitle */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 0.6, letterSpacing: "0.25em" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-xs uppercase text-vibrant-pink font-sans mb-3"
            >
              Certified Professional Artist &amp; Academy
            </motion.span>

            {/* Brand Name Title */}
            <h1 className="overflow-hidden mb-6 py-2">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block font-serif-luxury text-3xl sm:text-4xl font-light tracking-widest text-luxury-white"
              >
                PRIYA CHANDRA
              </motion.span>
            </h1>

            {/* Aesthetic Divider line */}
            <div className="w-24 h-[1px] bg-vibrant-pink/30 mb-8 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-vibrant-pink"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Location & Experience Indicator */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-xs font-light tracking-wide text-luxury-white/80 font-sans"
            >
              DELHI NCR &bull; AVAILABLE GLOBALLY
            </motion.p>

            {/* Progress Percentage */}
            <motion.span
              className="mt-12 font-mono text-xs text-vibrant-pink/70"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              {Math.min(progress, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
