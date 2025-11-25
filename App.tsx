import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { MarketTimingSection } from './components/MarketTimingSection';
import { ProcessSection } from './components/ProcessSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ExitDiagnosSection } from './components/ExitDiagnosSection';
import { BuyerGuideSection } from './components/BuyerGuideSection';
import { FitSection } from './components/FitSection';
import { FAQSection } from './components/FAQSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { StickyMobileCTA } from './components/StickyMobileCTA';

function App() {
  return (
    <div className="font-sans">
      <Navigation />
      
      <main>
        <HeroSection />
        <StatsSection />
        <MarketTimingSection />
        <ProcessSection />
        <CaseStudiesSection />
        <ExitDiagnosSection />
        <BuyerGuideSection />
        <FitSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>

      <StickyMobileCTA />
    </div>
  );
}

export default App;