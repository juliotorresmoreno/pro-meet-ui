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
        <Hero />

        {/* How It Works */}
        <HowItWorks />

        {/* Core Features */}
        <CoreFeatures />

        {/* Use Cases */}
        <UseCases />

        {/* Pricing */}
        <Pricing />

        {/* Final CTA */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
