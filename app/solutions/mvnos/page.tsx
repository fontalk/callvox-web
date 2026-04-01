import { Metadata } from 'next';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import MVNOsHero from '@/components/solutions/mvnos/MVNOsHero';
import MVNOStack from '@/components/solutions/mvnos/MVNOStack';
import ESIMFocus from '@/components/solutions/mvnos/ESIMFocus';
import PricingPhilosophy from '@/components/solutions/mvnos/PricingPhilosophy';
import MVNOTestimonial from '@/components/solutions/mvnos/MVNOTestimonial';
import MVNOsCTABand from '@/components/solutions/mvnos/MVNOsCTABand';

export const metadata: Metadata = {
  title: 'For MVNOs',
  description:
    'Voice, SMS, eSIM, airtime and DIDs in one wholesale relationship. Cloud-native APIs. White-label ready. No long-term commitment to start.',
  openGraph: {
    title: 'For MVNOs | Callvox',
    description:
      'Voice, SMS, eSIM, airtime and DIDs in one wholesale relationship. Cloud-native APIs. White-label ready.',
    type: 'website',
  },
};

export default function MVNOsPage() {
  return (
    <>
      <Nav />
      <main>
        <MVNOsHero />
        <MVNOStack />
        <ESIMFocus />
        <PricingPhilosophy />
        <MVNOTestimonial />
        <MVNOsCTABand />
      </main>
      <Footer />
    </>
  );
}
