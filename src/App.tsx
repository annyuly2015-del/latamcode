/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import FeaturedCase from './components/FeaturedCase';
import Process from './components/Process';
import Differentials from './components/Differentials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import GlobalLiquidCursorTrail from './components/GlobalLiquidCursorTrail';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialInterest, setInitialInterest] = useState<string>('software-a-medida');

  const handleOpenContact = (interestId?: string) => {
    if (interestId) {
      setInitialInterest(interestId);
    } else {
      setInitialInterest('software-a-medida');
    }
    setIsContactOpen(true);
  };

  return (
    <div id="latamcode-app" className="relative min-h-screen bg-slate-1000 bg-brand-dark flex flex-col text-slate-100 overflow-hidden select-none">
      
      {/* Global liquid cursor trail for premium oil smear / oil slick iridescence */}
      <GlobalLiquidCursorTrail />

      {/* Fixed top Header bar */}
      <Header onOpenContact={() => handleOpenContact()} />

      {/* Main layout contents */}
      <main className="flex-1 relative z-10">
        {/* Row 1: Hero split-layout */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Row 2: Services customized cards */}
        <Services onOpenContact={handleOpenContact} />

        {/* Row 3: Technologies dashboard selection */}
        <Technologies onOpenContact={() => handleOpenContact()} />

        {/* Row 4: Outstanding case study mockup */}
        <FeaturedCase onOpenContact={handleOpenContact} />

        {/* Row 5: Process work timeline */}
        <Process />

        {/* Row 6: Differential metric bento boxes */}
        <Differentials />

        {/* Row 7: Grand Final CTA block */}
        <CTA onOpenContact={handleOpenContact} />
      </main>

      {/* Row 8: Fine printed local footer */}
      <Footer />

      {/* Contextual workspace modular form contact popup */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialInterest={initialInterest}
      />

    </div>
  );
}

