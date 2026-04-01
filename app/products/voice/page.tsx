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
  title: 'Wholesale Voice Routes | Callvox',
  description: '500+ direct voice routes across Africa, Latin America, South Asia & the Middle East. Premium CLI delivery with 99.99% ASR uptime.',
  openGraph: {
    title: 'Wholesale Voice Routes | Callvox',
    description: '500+ direct voice routes across Africa, Latin America, South Asia & the Middle East.',
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
