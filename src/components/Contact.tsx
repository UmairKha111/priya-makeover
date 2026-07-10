/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Clock, Calendar, CheckCircle, Sparkles, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    eventType: "bridal",
    location: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please tell us your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please share your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please share a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please share your WhatsApp number";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "WhatsApp number must be at least 10 digits";
    }
    if (!formData.date) newErrors.date = "Please pick your wedding or event date";
    if (!formData.location.trim()) newErrors.location = "Please enter your venue city";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating API or EmailJS submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact-section" className="py-24 bg-soft-beige relative">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-rose-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold font-bold">
            Secure Your Date
          </span>
          <h2 className="text-3xl sm:text-4xl font-light font-serif-luxury tracking-wide mt-2 text-deep-black">
            Bespoke Consultation Booking
          </h2>
          <div className="w-16 h-[1.5px] bg-rose-gold mx-auto mt-4" />
          <p className="text-xs text-dark-gray/60 leading-relaxed font-sans mt-4">
            Our calendars for the 2026 wedding season are filling quickly. Share your plans, and our bridal desk will respond in 2 to 4 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Interactive validated Inquiry form */}
          <div className="lg:col-span-7 bg-white/50 border border-[#D4AF8C]/30 p-8 sm:p-12 relative rounded-none shadow-sm">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-serif-luxury text-2xl text-deep-black font-light tracking-wide border-b border-rose-gold/10 pb-4 mb-4">
                    The Bridal Enquiry
                  </h3>

                  {/* Dual Name & Email input rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.name ? "border-red-500 focus:border-red-500" : "border-rose-gold/20 focus:border-rose-gold"
                        } text-xs outline-none transition-colors rounded-none`}
                        placeholder="e.g. Aishwarya Sharma"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-sans mt-1 block">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.email ? "border-red-500 focus:border-red-500" : "border-rose-gold/20 focus:border-rose-gold"
                        } text-xs outline-none transition-colors rounded-none`}
                        placeholder="e.g. aishwarya@gmail.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-sans mt-1 block">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Dual Phone & Date input rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.phone ? "border-red-500 focus:border-red-500" : "border-rose-gold/20 focus:border-rose-gold"
                        } text-xs outline-none transition-colors rounded-none`}
                        placeholder="e.g. +91 98765 43210"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-sans mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans font-sans">
                        Event / Wedding Date *
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 bg-white border ${
                            errors.date ? "border-red-500 focus:border-red-500" : "border-rose-gold/20 focus:border-rose-gold"
                          } text-xs outline-none transition-colors rounded-none`}
                        />
                      </div>
                      {errors.date && <span className="text-[10px] text-red-500 font-sans mt-1 block">{errors.date}</span>}
                    </div>
                  </div>

                  {/* Classification selection and Location venue */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                        Artistry Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-rose-gold/20 focus:border-rose-gold text-xs outline-none transition-colors rounded-none cursor-pointer"
                      >
                        <option value="bridal">Signature Bridal Look</option>
                        <option value="engagement">Engagement / Sagan Look</option>
                        <option value="reception">Reception Glamour</option>
                        <option value="party">Party / Bridesmaid Look</option>
                        <option value="fashion">Couture Fashion Shoot</option>
                        <option value="editorial">Editorial Campaign</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                        Venue / City *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-white border ${
                          errors.location ? "border-red-500 focus:border-red-500" : "border-rose-gold/20 focus:border-rose-gold"
                        } text-xs outline-none transition-colors rounded-none`}
                        placeholder="e.g. Bandra, Mumbai or Jaipur, Rajasthan"
                      />
                      {errors.location && <span className="text-[10px] text-red-500 font-sans mt-1 block">{errors.location}</span>}
                    </div>
                  </div>

                  {/* Message input */}
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-dark-gray font-semibold mb-2 font-sans">
                      Your Message & Inspiration (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-rose-gold/20 focus:border-rose-gold text-xs outline-none transition-colors rounded-none resize-none"
                      placeholder="Share your Pinterest boards, dress style, or specific bridal looks you love..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="submit-inquiry-button"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-deep-black text-luxury-white text-xs font-semibold uppercase tracking-widest hover:bg-rose-gold hover:text-deep-black transition-all duration-300 rounded-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <span>Validating and submitting...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </div>

                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6 bg-white space-y-6 border border-vibrant-pink/20"
                >
                  <CheckCircle size={56} className="text-vibrant-pink animate-bounce" />
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-vibrant-pink font-bold block">
                      Date Locked
                    </span>
                    <h3 className="font-serif-luxury text-2xl text-deep-black font-light tracking-wide">
                      Thank You, {formData.name}
                    </h3>
                    <p className="text-xs text-dark-gray max-w-sm mx-auto leading-relaxed font-sans">
                      We have received your luxurious bridal inquiry for the date of <strong className="text-vibrant-pink">{formData.date}</strong> in <strong className="text-vibrant-pink">{formData.location}</strong>.
                    </p>
                  </div>
                  <div className="w-12 h-[1px] bg-vibrant-pink" />
                  <p className="text-[11px] text-dark-gray/60 leading-relaxed font-sans max-w-sm">
                    Our lead bridal coordinator is already reviewing your skin-prep guidelines and styling goals. You will receive a bespoke availability quote on your registered WhatsApp number ({formData.phone}) within the next 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        eventType: "bridal",
                        location: "",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 border border-vibrant-pink text-xs uppercase tracking-widest font-semibold hover:bg-deep-black hover:text-luxury-white transition-colors rounded-none"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact Coordinates */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Branding details */}
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-vibrant-pink font-bold block">
                  Studio Coordinates
                </span>
                <h3 className="font-serif-luxury text-2xl text-deep-black font-light tracking-wide mt-1">
                  Connect with Priya Chandra
                </h3>
              </div>

              {/* Coordinates list */}
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-vibrant-pink/20 flex items-center justify-center text-vibrant-pink shrink-0 bg-white">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-dark-gray/50 font-bold font-sans">
                      Our Studio Address
                    </h4>
                    <p className="text-xs text-deep-black mt-1 leading-relaxed font-sans font-light">
                      Sector 41 Noida , Delhi NCR, India &bull; 201303
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-vibrant-pink/20 flex items-center justify-center text-vibrant-pink shrink-0 bg-white">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-dark-gray/50 font-bold font-sans">
                      WhatsApp & Calls
                    </h4>
                    <a
                      href="tel:+919354208154"
                      className="text-xs text-deep-black hover:text-vibrant-pink transition-colors mt-1 block font-sans"
                    >
                      +91 93542 08154
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-vibrant-pink/20 flex items-center justify-center text-vibrant-pink shrink-0 bg-white">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-dark-gray/50 font-bold font-sans">
                      E-mail Desk
                    </h4>
                    <a
                      href="mailto:priya.makeovers935@gmail.com"
                      className="text-xs text-deep-black hover:text-vibrant-pink transition-colors mt-1 block font-sans"
                    >
                      priya.makeovers935@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-vibrant-pink/20 flex items-center justify-center text-vibrant-pink shrink-0 bg-white">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-dark-gray/50 font-bold font-sans">
                      Studio Hours
                    </h4>
                    <p className="text-xs text-deep-black mt-1 leading-relaxed font-sans font-light">
                      Tuesday – Sunday: 10:00 AM – 08:00 PM <br />
                      Mondays: Closed for Studio Maintenance (Only Destination site visits)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Minimal Map Placeholder */}
            <div className="border border-vibrant-pink/20 p-6 bg-soft-beige/30 relative overflow-hidden aspect-[16/9] flex flex-col justify-between">
              {/* Subtle background grids */}
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#121212_1px,transparent_1px)] [background-size:16px_16px]" />
              
              <div className="relative z-10">
                <span className="text-[8px] uppercase tracking-[0.2em] text-vibrant-pink font-bold">
                  Saket Studio Map
                </span>
                <p className="text-xs text-dark-gray font-light font-serif-luxury tracking-wide mt-1">
                  Centrally located in South Delhi for elegant access. Valet parking available on-premises.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-vibrant-pink/15 pt-4">
                <span className="text-[10px] tracking-widest text-deep-black/60 font-mono font-bold">
                  COORD: 28.5244&deg; N, 77.2066&deg; E
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-sans font-semibold text-vibrant-pink hover:text-deep-black tracking-widest uppercase flex items-center space-x-1"
                >
                  <span>Open Maps</span>
                  <Sparkles size={10} className="text-vibrant-pink" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
