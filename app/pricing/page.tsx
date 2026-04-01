import { Metadata } from 'next';
import Nav from '@/components/Nav';
import PricingHero from '@/components/pages/pricing/PricingHero';
import ProductPricingCards from '@/components/pages/pricing/ProductPricingCards';
import VolumeTiers from '@/components/pages/pricing/VolumeTiers';
import ROICalculator from '@/components/pages/pricing/ROICalculator';
import IncludedFeatures from '@/components/pages/pricing/IncludedFeatures';
import PricingCTABand from '@/components/pages/pricing/PricingCTABand';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Pricing | Callvox',
  description: 'Transparent wholesale pricing for voice, SMS, airtime, eSIM, and virtual numbers. Volume discounts applied automatically.',
};

export default function PricingPage() {
  return (
    <main>
      <Nav />
      <PricingHero />
      <ProductPricingCards />
      <VolumeTiers />
      <ROICalculator />
      <IncludedFeatures />
      <PricingCTABand />
      <Footer />
    </main>
  );
}
