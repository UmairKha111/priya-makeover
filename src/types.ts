/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  included: string[];
  image: string;
  category: "makeup" | "hair" | "draping" | "bridal";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "bridal" | "engagement" | "reception" | "party" | "fashion" | "editorial";
  image: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: "bridal" | "engagement" | "party" | "reception"; // ✅ NEW
  beforeImage: string;
  afterImage: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}
