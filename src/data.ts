/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TestimonialItem, GalleryItem, BeforeAfterItem, FAQItem, ProcessStep } from "./types";

// Import our beautifully generated local assets statically so Vite builds and deploys them robustly
import heroImg from "./assets/images/luxury_bride_hero_1782799649213.jpg";
import flatlayImg from "./assets/images/makeup_artistry_detail_1782799666308.jpg";
import portraitImg from "./assets/images/about_portrait_1782799681075.jpg";
import editorialImg from "./assets/images/editorial_fashion_makeup_1782799693410.jpg";

export const IMAGES = {
  hero: heroImg,
  flatlay: flatlayImg,
  portrait: portraitImg,
  editorial: editorialImg
};

// Additional curated high-end beauty images from public sources to ensure rich, non-mocked variety
export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "g1",
    title: "The Regal Marwari Bride",
    category: "bridal",
    image: IMAGES.hero
  },
  {
    id: "g2",
    title: "Golden Hour Glow",
    category: "engagement",
    image: "https://i.ibb.co/jkwqNFw6/95667fb0-fd50-4c57-95fb-24065e033154.png"
   
  },
  {
    id: "g3",
    title: "Contemporary Reception Glam",
    category: "reception",
     image: "https://i.ibb.co/y9ht3gd/6e76af08-6c6a-40a0-94e2-ba8482102e75.png" 
  },
  {
    id: "g4",
    title: "Dewy Editorial Glow",
    category: "editorial",
    image: "https://i.ibb.co/BVYKyQLc/3346b219-e464-4ae8-89c6-d810bd888d3a.png"
  },
  {
    id: "g5",
    title: "Classic Royal Bridal Look",
    category: "bridal",
    image: "https://i.ibb.co/KcYJ7776/36943f32-6506-49ea-9677-a77daba4f5db.png"
  },
  {
    id: "g6",
    title: "High Fashion Graphic Artistry",
    category: "fashion",
    image: "https://i.ibb.co/C301B5nL/94754c11-6eaa-4834-9bf2-bc0fc3c52a92.png"
  },
  {
    id: "g7",
    title: "Cocktail Evening Sophistication",
    category: "party",
    image: "https://i.ibb.co/V0J5ZzV9/bf159db3-3de0-4ab8-87eb-801a1536e1e9.png"
  },
   {
    id: "g8",
    title: "Classic Royal Bridal Look",
    category: "bridal",
    image: "https://i.ibb.co/HD515Rvq/IMG-0339-JPG.jpg" 
  },
  {
    id: "g9",
    title: "Minimalist Pastel Bridal Look",
    category: "bridal",
    image: "https://i.ibb.co/ZpVc8W4H/b030576e-a6d4-4976-aa05-76f0b279e053.png"
  },
  {
  id: "g10",
  title: "Golden Engagement Glow",
  category: "engagement",
  image: "https://i.ibb.co/ymMXk8JK/IMG-5630-JPG.jpg"  
},
{
  id: "g11",
  title: "Luxury Reception Glam",
  category: "reception",
  image: "https://i.ibb.co/PGGcsBjb/IMG-4798-JPG.jpg"
},
{
  id: "g12",
  title: "Elegant Cocktail Party Makeup",
  category: "party",
  image: "https://i.ibb.co/HLvynM4N/39def8e4-1a9a-40d0-a65c-c29b423608b1.png"
},
{
  id: "g13",
  title: "Modern Couture Fashion Beauty",
  category: "fashion",
  image: "https://i.ibb.co/vxdRdcFt/IMG-6243-JPG.jpg" 
},
{
  id: "g14",
  title: "Luxury Editorial Beauty Portrait",
  category: "editorial",
  image: "https://i.ibb.co/pj9K7DKj/IMG-3168-JPG.jpg" 
},
{
  id: "g15",
  title: "Traditional Royal Bridal Elegance",
  category: "bridal",
  image: "https://i.ibb.co/60MjG4Lj/IMG-5310-JPG.jpg" 
},
{
  id: "g16",
  title: "Classic Red Lehenga Bridal Look",
  category: "bridal",
  image: "https://i.ibb.co/hxpQBcwv/IMG-4922-JPG.jpg" 
}
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "s1",
    title: "Signature Bridal Makeup",
    subtitle: "HD & Airbrush Masterclass",
    description: "Our signature bridal service is customized to your skin texture, facial structure, and bridal ensemble. Blending premium, water-resistant high-definition airbrush techniques with curated luxury brands (such as Chanel, Dior, and Charlotte Tilbury) to ensure 16-hour long-wear stability that photographs flawlessly.",
    benefits: [
      "Custom skin prepping based on your specific skin type",
      "Choice of HD or premium Airbrush finish",
      "Seamless blending for neck, shoulders, and back",
      "High-end lash application & premium setting"
    ],
    included: [
      "Initial digital face analysis",
      "Professional HD / Airbrush makeup session",
      "Luxury individual mink/silk eyelash clusters",
      "Mini touch-up kit (lipstick sample, blotting sheets, sponge)"
    ],
    image: IMAGES.hero,
    category: "bridal"
  },
  {
    id: "s2",
    title: "The Royal Engagement Aesthetic",
    subtitle: "Radiant & Romantic Glow",
    description: "An elegant, dreamy look designed for your engagement, roka, or sagan ceremony. This style focuses on luminous, glass-like skin, soft romantic eyes, and colors that beautifully complement pastel outfits and natural daylight.",
    benefits: [
      "Lightweight, breathable luxury formulations",
      "Soft, customized romantic color curation",
      "Long-lasting dewy skin finish",
      "Photogenic contouring for daytime lighting"
    ],
    included: [
      "Hydrating skin prep session",
      "Premium HD base with luxury pink highlight accents",
      "Custom dynamic eye makeup and lash definition",
      "Lip stain blending and gloss application"
    ],
    image: "https://i.ibb.co/tP2rzt35/Chat-GPT-Image-Jul-4-2026-11-53-13-PM11.png",
    category: "bridal"
  },
  {
    id: "s3",
    title: "The Grand Reception Glamour",
    subtitle: "High-Contrast Red Carpet Elegance",
    description: "A high-impact, glamorous look perfect for evening reception spotlights. Designed to turn heads, we focus on elegant structured eyes (e.g., modern metallic smoky, structured feline wing), flawless sculpting, and bold statement lips.",
    benefits: [
      "Dramatically sculpted high-contrast cheekbones",
      "Smudge-proof metallic eye contouring",
      "Perfect color harmony with heavy reception lehengas or gowns",
      "Long-wear lips that withstand dining and greetings"
    ],
    included: [
      "Deep hydration and glow boosting skin therapy",
      "Symmetry-perfect facial sculpting and highlighting",
      "Dramatic lash clusters and defined brow styling",
      "Pro-grade sealer for overnight performance"
    ],
    image: "https://i.ibb.co/ZpYGJPh9/IMG-5619-JPG.jpg" ,
    category: "bridal"
  },
  {
    id: "s4",
    title: "Luxury Party & Occasion Glam",
    subtitle: "Sleek, Polished Sophistication",
    description: "Perfect for premium wedding guests, bridesmaids, or cocktail parties. We design a clean, striking makeup look that emphasizes your natural beauty while incorporating current high-fashion trends.",
    benefits: [
      "Fast, elegant premium application",
      "Tailored to suit your party theme and outfit",
      "Flawless satin or matte texture option",
      "Flattering styling for on-camera and in-person presence"
    ],
    included: [
      "Classic skin priming",
      "Flawless HD custom foundation match",
      "Elegant classic eye makeup with standard lash accent",
      "Matte or glossy lip color"
    ],
    image: "https://i.ibb.co/0R0t8T5z/IMG-6133-JPG.jpg",
    category: "makeup"
  },
  {
    id: "s5",
    title: "Couture Hair Artistry",
    subtitle: "Architectural Waves & Buns",
    description: "Elevate your look with professional hair styling. From soft romantic textured waves and structured Hollywood curls to high-fashion bridal buns adorned with flowers or delicate accessories.",
    benefits: [
      "Volume optimization for all hair lengths",
      "Secure placement of extensions, floral designs, or hair jewelry",
      "Humidity-resistant, high-grade setting hold",
      "Heat protection to preserve hair health"
    ],
    included: [
      "Hair texture preparation & volumizing blow-dry",
      "Premium styling (waves, curls, classic bun, or fusion braid)",
      "Secure setting pins and hair padding insertion",
      "Premium glossy hold spray application"
    ],
    image: "https://i.ibb.co/Fbsd8YgJ/IMG-5329-JPG.jpg",
    category: "hair"
  },
  {
    id: "s6",
    title: "Precision Saree Draping",
    subtitle: "Clean Lines & Royal Folds",
    description: "Traditional and modern saree draping executed with absolute mathematical precision. Whether it is a heavy banarasi silk, lightweight organza, or a designer pre-stitched fusion saree, we ensure maximum comfort and graceful movement.",
    benefits: [
      "Secure pinning that prevents sliding or loosening",
      "Perfect pleating tailored to your height and walk",
      "Flattering silhouette structure",
      "Saves valuable dressing time on the wedding day"
    ],
    included: [
      "Pre-pressing and organizing pleat lines",
      "Custom draping style (Maharashtrian, Bengali, Gujarati, Mumtaz, or Modern)",
      "Secure safety pinning with premium hidden pins",
      "Waistbelt / Kamarbandh styling alignment"
    ],
    image: "https://i.ibb.co/qYqgk1Js/IMG-3605-JPG.jpg ",
    category: "draping"
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "ba1",
    title: "Minimalist Royal Transformation",
    beforeImage: "https://i.ibb.co/V08DdSJP/8d61cd6e-9da4-4004-bdc4-1b6a7593c0d5.png",
    afterImage: "https://i.ibb.co/NnHbxdjH/1febed8f-317b-4fa7-9097-2f5f4094e627.png" ,
    description: "Correcting uneven skin tones and emphasizing eye symmetry. Created a luminous, classic luxury pink look for a grand royal wedding."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Aishwarya Deshmukh",
    role: "Luxury Bride",
    location: "Delhi NCR",
    text: "Priya is an absolute magician! She styled me for my reception in South Delhi. The airbrush makeup was practically weightless and stayed pristine from 4 PM until the late-night dancing ended. Every guest raved about the glass skin glow. Truly worth every rupee!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "t2",
    name: "Rhea Singhania",
    role: "Destination Bride",
    location: "Jaipur Wedding",
    text: "Priya and her team traveled to Jaipur for my 3-day wedding festivities. She curated three completely distinct looks—a soft dewy pastel Mehendi glam, a majestic royal bridal red, and a sleek high-fashion Reception look. Her calm demeanor amidst wedding chaos was a lifesaver!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "t3",
    name: "Krupa Patel",
    role: "Fashion Model",
    location: "Delhi NCR",
    text: "As a professional model, I have sat in dozens of makeup chairs. Priya's attention to detail, hygienic tools, and speed are unmatched. Her contouring is soft yet looks razor-sharp under high-fashion editorial strobe lights. She is my go-to for all catalog shoots.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "f1",
    question: "Which luxury makeup brands do you use in your kit?",
    answer: "We believe in using only high-end, clinically tested, high-definition cosmetic brands. Our regular kit includes products from Chanel, Dior, Charlotte Tilbury, Tom Ford, NARS, MAC, Huda Beauty, Kryolan, Anastasia Beverly Hills, and Estée Lauder, customized to suit your unique skin chemistry."
  },
  {
    id: "f2",
    question: "Do you travel out of Delhi NCR for destination weddings?",
    answer: "Yes, absolutely! Priya Chandra is available to travel globally for destination weddings and masterclass workshops. Travel, lodging, and local transit costs are covered by the client, while we bring our premium kit and team directly to your venue."
  },
  {
    id: "f3",
    question: "How far in advance should I book my bridal makeup?",
    answer: "Our calendar for the wedding season (especially popular dates in 2026) fills up extremely quickly. We highly recommend booking 6 to 9 months in advance to secure your slot. Booking is confirmed only upon the receipt of an advance deposit."
  },
  {
    id: "f4",
    question: "What is the difference between HD and Airbrush makeup?",
    answer: "HD Makeup uses ultra-fine, light-reflecting pigments that look completely seamless on high-resolution cameras, applied with luxury brushes and sponges. Airbrush Makeup uses a specialized compressed air gun to spray a micro-fine mist of foundation, which provides a highly water-resistant, transfer-proof, velvet-matte finish that is ideal for humid climates or oily skin."
  },
  {
    id: "f5",
    question: "Do you offer a trial makeup session?",
    answer: "Yes, bridal trial sessions are available upon request and can be scheduled at our studio in Delhi NCR. The trial is charged, and if you confirm your booking on the same day, a portion of the trial fee can be adjusted against your final bridal package."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Elegant Inquiry",
    description: "Fill our digital booking form or contact us via WhatsApp with your wedding date, location, and desired services. We respond with initial pricing packages within 24 hours."
  },
  {
    stepNumber: 2,
    title: "Virtual Consultation",
    description: "We schedule a personalized video call to discuss your outfit designs, jewelry style, skin conditions, and Pinterest mood boards to conceptualize your custom look."
  },
  {
    stepNumber: 3,
    title: "Secure Booking",
    description: "Confirm your date with a formal booking agreement and a partial advance payment. This guarantees Priya Chandra's exclusive availability on your big day."
  },
  {
    stepNumber: 4,
    title: "Studio Trial & Fitting",
    description: "An optional, luxury trial session in our Delhi NCR studio to finalize the exact foundation tones, eyelash length, draping flow, and hair accessory placements."
  },
  {
    stepNumber: 5,
    title: "The Wedding Day",
    description: "Priya and her team arrive promptly at your venue with professional lighting rigs and premium kits to transform you into a flawless royal bride."
  }
];
