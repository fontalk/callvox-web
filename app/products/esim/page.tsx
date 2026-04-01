'use client';

import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { ESIMHero } from '@/components/products/esim/ESIMHero';
import { MarketContextESIM } from '@/components/products/esim/MarketContextESIM';
import { WhoItsForESIM } from '@/components/products/esim/WhoItsForESIM';
import { TechnicalArchitecture } from '@/components/products/esim/TechnicalArchitecture';
import { TechnicalSpecsESIM } from '@/components/products/esim/TechnicalSpecsESIM';
import { BusinessModels } from '@/components/products/esim/BusinessModels';
import { ESIMCTABand } from '@/components/products/esim/ESIMCTABand';

export default function ESIMPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <ESIMHero />
      <MarketContextESIM />
      <WhoItsForESIM />
      <TechnicalArchitecture />
      <TechnicalSpecsESIM />
      <BusinessModels />
      <ESIMCTABand />
      <Footer />
    </main>
  );
}
