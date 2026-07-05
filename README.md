# Maithili Gosavi Artistry Portal &mdash; Premium Luxury Frontend

This repository houses the award-winning, premium editorial web presence for **Maithili Gosavi (@maithiligosavi_makeup_artist)**, Certified Professional Makeup & Hair Artist based in Mumbai, India.

Designed with an ultra-luxury, high-contrast, minimalist magazine-inspired aesthetic, the system features smooth motion curves, interactive transformations, and a secure booking inquiry interface.

---

## 💎 Design Concept

- **Color Palette**: Luxury Ivory white (`#FAFAFA`), Deep Velvet Black (`#121212`), Warm Soft Beige (`#F7F2EC`), and fine accents of Rose Gold (`#D4AF8C`) & Sovereign Gold (`#C9A227`).
- **Typography**: Paired serif headings (**Cormorant Garamond** & **Playfair Display**) for high-fashion elegance, combined with clean sans-serif (**Inter**) for readable text.
- **Animations**: Fluid micro-animations, text reveals, floating grids, and custom slide drawers powered by **Framer Motion**.

---

## 📂 Project Architecture

```bash
/
├── assets/                  # Public static branding assets
├── src/
│   ├── assets/
│   │   └── images/          # High-resolution generated editorial photographs
│   ├── components/          # Modular UI components
│   │   ├── LoadingScreen.tsx # Elegant initial brand loader
│   │   ├── Navbar.tsx        # Dynamic scroll header with mobile drawer
│   │   ├── FloatingWhatsApp.tsx # Expandable boutique WhatsApp assistant
│   │   ├── ScrollToTop.tsx   # Floating scroll back arrow
│   │   ├── Hero.tsx         # Magazine-style widescreen introduction
│   │   ├── About.tsx        # Career biography & certification cards
│   │   ├── Services.tsx     # Bento services grid & comprehensive side drawers
│   │   ├── BeforeAfter.tsx   # Drag-and-slide transformation slider
│   │   ├── Portfolio.tsx    # Filterable portfolio & fullscreen Lightbox
│   │   ├── BookingProcess.tsx # Connected 5-step visual timeline
│   │   ├── Testimonials.tsx # Verified quote slider & Instagram mentions
│   │   ├── FAQ.tsx          # Smooth-height accordion queries
│   │   └── Contact.tsx      # Verified booking form & salon coordinates
│   ├── types.ts             # Strict TypeScript data structures
│   ├── data.ts              # Curated professional copywriting & image feeds
│   ├── App.tsx              # Application orchestrator & page routing
│   ├── index.css            # Google Font imports & Tailwind custom configurations
│   └── main.tsx             # Application mount hub
├── index.html               # Main webpage frame
├── metadata.json            # SEO & platform capabilities configuration
├── tsconfig.json            # TypeScript build rules
└── README.md                # System documentation
```

---

## 🛠️ Installation & Execution

Ensure you have **Node.js (v18+)** installed.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Boot Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to preview.

3. **Compile Production Build**:
   ```bash
   npm run build
   ```

---

## 📸 Content Configuration Guide

To ensure the brand team can easily update content without breaking layouts, all datasets are strictly separated from UI logic.

### 1. Replacing Branding & Profile Images
To swap out any principal photographs (like Maithili's studio portrait, cosmetic flat lays, or the widescreen bridal cover), upload your high-resolution crop into `/src/assets/images/` and update the reference paths inside `/src/data.ts`:

```typescript
export const IMAGES = {
  hero: "/src/assets/images/your_new_bride_hero.jpg",
  flatlay: "/src/assets/images/your_new_cosmetics_flatlay.jpg",
  portrait: "/src/assets/images/your_new_about_portrait.jpg",
  editorial: "/src/assets/images/your_new_editorial_makeup.jpg"
};
```

### 2. Adding Portfolio & Lightbox Assets
To append a new client portrait to the filterable masonry gallery, add a new record to the `GALLERY_IMAGES` feed inside `/src/data.ts`:

```typescript
export const GALLERY_IMAGES: GalleryItem[] = [
  // Add your new item here:
  {
    id: "g9",
    title: "Sleek Royal Marwari Bride",
    category: "bridal", // Category tags: 'bridal', 'engagement', 'reception', 'party', 'fashion', 'editorial'
    image: "https://your-domain.com/path-to-image.jpg" // High-quality CDN URL or local asset path
  },
  ...
]
```

### 3. Modifying Services & Treatment Benefits
To update descriptions, add custom packages, or edit what is included, adjust the records inside the `SERVICES_DATA` block in `/src/data.ts`. The UI automatically renders new drawers and lists:

```typescript
{
  id: "s1",
  title: "Bespoke Bridal Airbrushing",
  subtitle: "HD Masterpiece",
  description: "Detailed description of cosmetics used...",
  benefits: [
    "Benefit 1...",
    "Benefit 2..."
  ],
  included: [
    "Included item 1...",
    "Included item 2..."
  ],
  image: IMAGES.hero,
  category: "bridal"
}
```

---

## ⚡ Future Backend & Integration Recommendations

1. **EmailJS Booking System**:
   Inside `/src/components/Contact.tsx`, the inquiry submission handler is built ready to integrate with EmailJS. Replace the mock timer with EmailJS parameters to receive elegant formatted emails containing date and phone numbers:
   ```typescript
   import emailjs from '@emailjs/browser';

   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
     .then((result) => {
         setIsSubmitted(true);
     }, (error) => {
         console.error(error.text);
     });
   ```

2. **Persistent Database (Firebase Integration)**:
   For long-term tracking of date requests, analytics, and CRM logs, we recommend initializing Firebase Firestore and mapping submissions directly to a secure `bookings` collection.
