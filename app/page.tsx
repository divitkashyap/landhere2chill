"use client";

import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionPreview from "@/components/sections/SolutionPreview";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import PricingPreview from "@/components/sections/PricingPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full bg-gradient-to-br from-primary-blue via-primary-purple to-accent-orange text-white font-inter">
      <HeroSection />
      <ProblemSection />
      <SolutionPreview />
      <FeaturesSection />
      <SocialProofSection />
      <PricingPreview />
      <FinalCTA />
    </main>
  );
} 