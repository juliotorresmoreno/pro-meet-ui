// app/page.tsx
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import CoreFeatures from "@/components/CoreFeatures";
import UseCases from "@/components/UseCases";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { getLanguage } from "@/lib/lang";

export default function HomePage() {
  const language = getLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      <main>
        {/* Hero Section */}
        <Hero language={language} />

        {/* How It Works */}
        <HowItWorks language={language} />

        {/* Core Features */}
        <CoreFeatures language={language} />

        {/* Use Cases */}
        <UseCases language={language} />

        {/* Pricing */}
        <Pricing language={language} />

        {/* Final CTA */}
        <CallToAction language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
