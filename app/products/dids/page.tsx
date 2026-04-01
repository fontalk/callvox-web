'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/sections/Footer';
import DIDsHero from '@/components/products/dids/DIDsHero';
import CoverageStats from '@/components/products/dids/CoverageStats';
import NumberTypes from '@/components/products/dids/NumberTypes';
import TechnicalSpecsDIDs from '@/components/products/dids/TechnicalSpecsDIDs';
import ComplianceByRegion from '@/components/products/dids/ComplianceByRegion';
import PricingDIDs from '@/components/products/dids/PricingDIDs';
import DIDsCTABand from '@/components/products/dids/DIDsCTABand';

export default function DIDsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <DIDsHero />
      <CoverageStats />
      <NumberTypes />
      <TechnicalSpecsDIDs />
      <ComplianceByRegion />
      <PricingDIDs />
      <DIDsCTABand />
      <Footer />
    </main>
  );
}
