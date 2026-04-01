import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import ResellersHero from '@/components/solutions/resellers/ResellersHero';
import ResellerAdvantage from '@/components/solutions/resellers/ResellerAdvantage';
import WhiteLabelCapabilities from '@/components/solutions/resellers/WhiteLabelCapabilities';
import TechnicalIntegration from '@/components/solutions/resellers/TechnicalIntegration';
import PartnerProgram from '@/components/solutions/resellers/PartnerProgram';
import ResellerTestimonial from '@/components/solutions/resellers/ResellerTestimonial';
import ResellersCTABand from '@/components/solutions/resellers/ResellersCTABand';

export const metadata = {
  title: 'For Resellers & Aggregators | Callvox',
  description: 'Wholesale voice, SMS, airtime, eSIM, and DIDs with white-label portal and multi-tenant billing.',
};

export default function ResellersPage() {
  return (
    <main>
      <Nav />
      <ResellersHero />
      <ResellerAdvantage />
      <WhiteLabelCapabilities />
      <TechnicalIntegration />
      <PartnerProgram />
      <ResellerTestimonial />
      <ResellersCTABand />
      <Footer />
    </main>
  );
}
