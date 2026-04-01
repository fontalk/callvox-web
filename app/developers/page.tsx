import { Metadata } from 'next';
import Nav from '@/components/Nav';
import DeveloperHero from '@/components/pages/developers/DeveloperHero';
import BenchmarkStats from '@/components/pages/developers/BenchmarkStats';
import FiveAPIsOneKey from '@/components/pages/developers/FiveAPIsOneKey';
import SDKQuickstarts from '@/components/pages/developers/SDKQuickstarts';
import OnboardingFlow from '@/components/pages/developers/OnboardingFlow';
import ToolsAndResources from '@/components/pages/developers/ToolsAndResources';
import DeveloperCTABand from '@/components/pages/developers/DeveloperCTABand';
import { Footer } from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Developer Portal | Callvox API',
  description: 'REST APIs for voice, SMS, airtime, eSIM and DIDs. Sandbox access in under 5 minutes. No sales call required.',
};

export default function DevelopersPage() {
  return (
    <main>
      <Nav />
      <DeveloperHero />
      <BenchmarkStats />
      <FiveAPIsOneKey />
      <SDKQuickstarts />
      <OnboardingFlow />
      <ToolsAndResources />
      <DeveloperCTABand />
      <Footer />
    </main>
  );
}
