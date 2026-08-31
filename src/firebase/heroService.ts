import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export async function getHero(): Promise<HeroData | null> {
  const heroRef = doc(db, "hero", "main");
  const snapshot = await getDoc(heroRef);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data() as HeroData;
}