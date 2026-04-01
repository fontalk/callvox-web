import { Metadata } from 'next';
import Nav from '@/components/Nav';
import AboutHero from '@/components/pages/about/AboutHero';
import FoundingStory from '@/components/pages/about/FoundingStory';
import ByTheNumbers from '@/components/pages/about/ByTheNumbers';
import MissionSection from '@/components/pages/about/MissionSection';
import TeamValues from '@/components/pages/about/TeamValues';
import AboutCTABand from '@/components/pages/about/AboutCTABand';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'About Callvox | 17 Years in Emerging Markets',
  description: 'Founded in 2007, Callvox is a unified voice, SMS, eSIM, airtime, and DID platform built for carriers and MVNOs in Latin America, Africa, South Asia, and the Middle East.',
};

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <AboutHero />
      <FoundingStory />
      <ByTheNumbers />
      <MissionSection />
      <TeamValues />
      <AboutCTABand />
      <Footer />
    </main>
  );
}
