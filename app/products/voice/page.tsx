import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { VoiceHero } from '@/components/products/VoiceHero';
import { QualityMetricsStrip } from '@/components/products/QualityMetricsStrip';
import { HowItWorks } from '@/components/products/HowItWorks';
import { TechnicalSpecs } from '@/components/products/TechnicalSpecs';
import { RouteCoverage } from '@/components/products/RouteCoverage';
import { PricingModel } from '@/components/products/PricingModel';
import { CTABand } from '@/components/products/CTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Wholesale Voice Termination',
  description:
    'Premium CLI voice routes across 500+ direct interconnects. Africa, LatAm, South Asia & MENA. 99.99% ASR uptime. STIR/SHAKEN compliant.',
  openGraph: {
    title: 'Wholesale Voice Termination | Callvox',
    description:
      'Premium CLI voice routes across 500+ direct interconnects. Africa, LatAm, South Asia & MENA. 99.99% ASR uptime.',
    type: 'website',
  },
};

export default function VoicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <VoiceHero />
        <QualityMetricsStrip />
        <HowItWorks />
        <TechnicalSpecs />
        <RouteCoverage />
        <PricingModel />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
