/**
 * About.tsx — Luxury Cinematic About Section
 * Deep crimson / velvet red aesthetic matching the portrait image
 * Refined layering so the portrait, quote card, and award badge never collide
 */
 
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { Award, Globe, ShieldCheck, Heart, Sparkles, Star } from "lucide-react";
import { IMAGES } from "../data";
 
interface AboutProps {
  onPageChange: (page: string) => void;
}
 
// ── Floating particle component ───────────────────────────────
function Particle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size,
        background: `radial-gradient(circle, rgba(212,175,55,0.8), rgba(180,20,30,0.4))` }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        opacity: [0, 0.8, 0.4, 0.9, 0],
        scale: [0, 1.2, 0.8, 1.1, 0],
      }}
      transition={{ duration: 5 + delay, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}
 
// ── Crimson ring ornament ─────────────────────────────────────
function CrimsonRing({ size, delay, className }: { size: number; delay: number; className?: string }) {
  return (
    <motion.div
      className={`absolute rounded-full border pointer-events-none ${className}`}
      style={{ width: size, height: size, borderColor: "rgba(180,20,30,0.3)" }}
      animate={{ rotate: 360, scale: [1, 1.05, 1] }}
      transition={{ rotate: { duration: 20 + delay * 5, repeat: Infinity, ease: "linear" },
        scale: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" } }}
    />
  );
}
 
// ── Counter animation ─────────────────────────────────────────
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
 
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
 
  return <span ref={ref}>{count}{suffix}</span>;
}
 
const qualities = [
  {
    icon: Award,
    title: "Highly Certified Master Artist",
    description: "Globally certified by Lakmé Academy, Kryolan India, and CSA (Cosmetics & Styling Association).",
    color: "#D4AF37",
  },
  {
    icon: Globe,
    title: "Global Travel Access",
    description: "Based in Delhi NCR, traveling globally to destination weddings in Rajasthan, Europe, UAE, and beyond.",
    color: "#B4141E",
  },
  {
    icon: ShieldCheck,
    title: "Elite Kit Hygiene",
    description: "Sterilized high-end cosmetics (Dior, Chanel, Charlotte Tilbury, Kryolan) cleaned with pro-grade sanitizers.",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Couture Makeup & Education",
    description: "Dedicated educator teaching modern makeup masterclasses, hair styling design, and precise saree draping.",
    color: "#B4141E",
  },
];
 
const stats = [
  { value: 500, suffix: "+", label: "Brides Transformed" },
  { value: 8,   suffix: "+", label: "Years of Artistry" },
  { value: 12,  suffix: "+", label: "States Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];
 
export default function About({ onPageChange }: AboutProps) {
  const containerRef = useRef(null);
  const imageRef     = useRef(null);
  const imageInView  = useInView(imageRef, { once: true });
 
  // Parallax on scroll
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY   = useTransform(scrollYProgress, [0, 1], ["0px", "-40px"]);
  const imageY  = useTransform(scrollYProgress, [0, 1], ["0px", "30px"]);
 
  // Particles — kept subtle so they don't distract from a "professional" feel
  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
  }));
 
  return (
    <section
      ref={containerRef}
      id="about-section"
      className="relative min-h-screen overflow-hidden text-[#FAF9F6]"
      style={{ background: "#050505" }}
    >
 
      {/* ── CINEMATIC BACKGROUND — matches the red velvet portrait ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 65% 50%, #6B0A0A 0%, #3D0505 35%, #1A0202 60%, #050505 100%)"
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.35,
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(180,20,30,0.03) 0px, rgba(180,20,30,0.03) 1px, transparent 1px, transparent 8px),
            repeating-linear-gradient(-45deg, rgba(100,5,5,0.05) 0px, rgba(100,5,5,0.05) 1px, transparent 1px, transparent 8px)
          `
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: "linear-gradient(90deg, transparent, #D4AF37, #F0D060, #D4AF37, transparent)"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)"
        }} />
      </motion.div>
 
      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => <Particle key={i} {...p} />)}
      </div>
 
      {/* ── Rotating ornament rings ── */}
      <CrimsonRing size={400} delay={0} className="-top-32 -right-32 opacity-20" />
      <CrimsonRing size={250} delay={1} className="bottom-20 -left-20 opacity-15" />
      <motion.div
        className="absolute top-1/2 right-[35%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-10"
        style={{
          border: "1px solid rgba(212,175,55,0.4)",
          transform: "translate(50%, -50%)"
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
 
      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 lg:py-32">
 
        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
          style={{ y: textY }}
        >
          <motion.div className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, transparent, #D4AF37)", maxWidth: 80 }} />
            <motion.div animate={{ rotate: [0, 180, 360] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </motion.div>
            <span className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#D4AF37]">
              The Creative Director
            </span>
            <motion.div animate={{ rotate: [360, 180, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </motion.div>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg, #D4AF37, transparent)", maxWidth: 80 }} />
          </motion.div>
 
          <motion.h2
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="text-[#FAF9F6]">Priya Chandra</span>
            <br />
            <em className="font-light not-italic"
              style={{ WebkitTextStroke: "1px rgba(212,175,55,0.6)", color: "transparent" }}>
              Makeovers
            </em>
          </motion.h2>
 
          <motion.div className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}>
            <motion.div
              style={{ height: 2, background: "linear-gradient(90deg, transparent, #B4141E, #D4AF37, #B4141E, transparent)" }}
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            />
          </motion.div>
        </motion.div>
 
        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center mb-20">
 
          {/* ── LEFT: Portrait with clean, properly-layered framing ── */}
          <motion.div
            ref={imageRef}
            className="lg:col-span-5 relative flex justify-center pb-8 pr-4 pt-4 pl-2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
          >
            {/* Static offset accent frame — sits BEHIND the photo, never overlaps content */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: 24, left: -8, right: -8, bottom: 8,
                border: "1px solid rgba(180,20,30,0.35)",
                zIndex: 0,
              }}
            />
 
            {/* Portrait image frame — everything inside is safely clipped */}
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden shadow-2xl group z-10 border border-[#D4AF37]/25">
              {/* Red glow behind image */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 0,
                background: "radial-gradient(ellipse at center, #6B0A0A 0%, #1A0202 100%)"
              }} />
 
              <motion.img
                src={IMAGES.portrait}
                alt="Professional Makeup Artist Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top relative z-10"
                style={{ filter: "contrast(1.05) saturate(1.1)" }}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
 
              {/* Cinematic gradient overlay */}
              <div style={{
                position: "absolute", inset: 0, zIndex: 20,
                background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, rgba(5,5,5,0.1) 40%, transparent 70%)"
              }} />
 
              {/* Slow shimmer sweep instead of a hard scan line — subtler, more premium */}
              <motion.div
                style={{
                  position: "absolute", top: 0, bottom: 0, width: "40%", zIndex: 25,
                  background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent)",
                }}
                animate={{ left: ["-40%", "120%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              />
 
              {/* Corner accents — clipped within the frame */}
              {[
                { top: 12, left: 12, borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37", width: 24, height: 24 },
                { top: 12, right: 12, borderTop: "2px solid #D4AF37", borderRight: "2px solid #D4AF37", width: 24, height: 24 },
                { bottom: 12, left: 12, borderBottom: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37", width: 24, height: 24 },
                { bottom: 12, right: 12, borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37", width: 24, height: 24 },
              ].map((style, i) => (
                <motion.div
                  key={i}
                  style={{ position: "absolute", zIndex: 30, ...style }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={imageInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                />
              ))}
            </div>
 
            {/* Award badge — anchored top-left, fully outside the photo, own stacking layer */}
            <motion.div
              className="absolute top-0 left-0 z-20"
              style={{
                background: "linear-gradient(135deg, #B4141E, #6B0A0A)",
                border: "1px solid rgba(212,175,55,0.5)",
                padding: "10px 14px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              }}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              animate={{ boxShadow: ["0 8px 24px rgba(0,0,0,0.4)", "0 8px 28px rgba(180,20,30,0.55)", "0 8px 24px rgba(0,0,0,0.4)"] }}
            >
              <Award className="w-5 h-5 text-[#D4AF37] mx-auto" />
              <p className="text-[8px] uppercase tracking-widest text-[#FAF9F6]/80 mt-1 text-center whitespace-nowrap">
                Certified Artist
              </p>
            </motion.div>
 
            {/* Quote card — anchored bottom-right, fully outside the photo, own stacking layer */}
            <motion.div
              className="absolute bottom-0 right-0 z-20 max-w-[190px]"
              style={{
                background: "#0A0505",
                border: "1px solid rgba(212,175,55,0.35)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
                padding: "16px 20px",
              }}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ rotate: 1, scale: 1.03 }}
            >
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-3 h-3 text-[#D4AF37] mb-2" />
              </motion.div>
              <p className="font-serif italic text-xs text-[#D4AF37] leading-relaxed">
                &ldquo;Beauty isn't about masking; it's about illuminating your authentic majesty.&rdquo;
              </p>
              <div style={{ width: 30, height: 1, background: "#D4AF37", margin: "8px 0" }} />
              <p className="text-[9px] uppercase tracking-widest text-[#FAF9F6]/50">— Priya Chandra</p>
            </motion.div>
          </motion.div>
 
          {/* ── RIGHT: Bio content ── */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="space-y-5">
              <motion.h3
                className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-snug"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.9 }}
              >
                A Legacy of Artistry,{" "}
                <span style={{
                  background: "linear-gradient(135deg, #D4AF37, #F0D060, #B4141E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>
                  Flawless Finishes
                </span>
                {" "}&amp; Empowering Education
              </motion.h3>
 
              {["As an acclaimed Delhi NCR celebrity makeup artist and professional educator, Priya Chandra has built a sterling reputation for defining the absolute height of modern bridal luxury. Certified by Lakmé Academy, Kryolan India, and CSA, Priya specializes in weightless HD bridal airbrushing, sleek red-carpet makeovers, and custom saree drapery.",
                "Her hallmark is personalized cosmetic architecture — studying your unique bone structure and skin chemistry to sculpt looks that radiate emotional warmth and stay flawless under demanding strobe lights for 16+ hours."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-xs sm:text-sm text-[#FAF9F6]/70 leading-relaxed font-sans font-light"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.8 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
 
            {/* Qualities grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {qualities.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="flex gap-3.5 items-start group cursor-default"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.7 }}
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                      style={{
                        background: `rgba(${item.color === "#D4AF37" ? "212,175,55" : "180,20,30"},0.1)`,
                        border: `1px solid rgba(${item.color === "#D4AF37" ? "212,175,55" : "180,20,30"},0.3)`
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon style={{ color: item.color }} className="w-4 h-4" />
                    </motion.div>
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#FAF9F6] font-sans mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-[#FAF9F6]/55 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
 
            {/* CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <motion.button
                onClick={() => { onPageChange("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="relative overflow-hidden px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#050505] group"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)" }}
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-none"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
                Inquire About Dates
              </motion.button>
 
              <motion.button
                onClick={() => { onPageChange("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-[#D4AF37]"
                style={{ border: "1px solid rgba(212,175,55,0.4)", background: "transparent" }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "rgba(212,175,55,0.8)",
                  backgroundColor: "rgba(212,175,55,0.08)",
                  boxShadow: "0 0 20px rgba(212,175,55,0.15)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                View Service Menu
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
 
        {/* ── ANIMATED STATS ROW ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-8"
          style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.15)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center py-8 px-4 relative group"
              style={{ background: "rgba(5,5,5,0.9)" }}
              whileHover={{ background: "rgba(180,20,30,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, #B4141E, #D4AF37, #B4141E)",
                  scaleX: 0, transformOrigin: "left"
                }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="font-serif text-3xl md:text-4xl font-light"
                style={{ background: "linear-gradient(135deg, #D4AF37, #F0D060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-[#FAF9F6]/50 mt-2 font-sans">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
 
      </div>
    </section>
  );
}
