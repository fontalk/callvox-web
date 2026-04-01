'use client';

import { Metadata } from 'next';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import SMSHero from '@/components/products/sms/SMSHero';
import MarketContextStrip from '@/components/products/sms/MarketContextStrip';
import DeliverabilitySection from '@/components/products/sms/DeliverabilitySection';
import ComplianceSection from '@/components/products/sms/ComplianceSection';
import SMSTechnicalSpecs from '@/components/products/sms/SMSTechnicalSpecs';
import SMSPricing from '@/components/products/sms/SMSPricing';
import SMSCTABand from '@/components/products/sms/SMSCTABand';

export const metadata: Metadata = {
  title: 'A2P SMS & Wholesale Messaging',
  description:
    '98%+ delivery rates. Direct carrier connections across 200+ countries. 10DLC, TCPA and GDPR compliance built in. SMPP + REST API.',
  openGraph: {
    title: 'A2P SMS & Wholesale Messaging | Callvox',
    description:
      '98%+ delivery rates. Direct carrier connections across 200+ countries. 10DLC, TCPA and GDPR compliance.',
    type: 'website',
  },
};

export default function SMSPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <SMSHero />
      <MarketContextStrip />
      <DeliverabilitySection />
      <ComplianceSection />
      <SMSTechnicalSpecs />
      <SMSPricing />
      <SMSCTABand />
      <Footer />
    </main>
  );
}
