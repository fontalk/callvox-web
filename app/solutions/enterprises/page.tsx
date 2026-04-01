import EnterprisesHero from '@/components/solutions/enterprises/EnterprisesHero';
import CostSavingsProof from '@/components/solutions/enterprises/CostSavingsProof';
import EnterprisesFeatures from '@/components/solutions/enterprises/EnterprisesFeatures';
import EnterprisesUseCases from '@/components/solutions/enterprises/EnterprisesUseCases';
import IntegrationCompatibility from '@/components/solutions/enterprises/IntegrationCompatibility';
import ComplianceSecurity from '@/components/solutions/enterprises/ComplianceSecurity';
import ROICalculatorCallout from '@/components/solutions/enterprises/ROICalculatorCallout';
import EnterprisesCTABand from '@/components/solutions/enterprises/EnterprisesCTABand';
import Nav from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'Enterprise Voice & Numbers | Callvox',
  description: 'Enterprise-grade SIP trunking, virtual numbers, and HD voice without enterprise procurement cycles. 40-70% cost reduction with ISO 27001 certified security.',
};

export default function EnterprisesPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Nav />
      <EnterprisesHero />
      <CostSavingsProof />
      <EnterprisesFeatures />
      <EnterprisesUseCases />
      <IntegrationCompatibility />
      <ComplianceSecurity />
      <ROICalculatorCallout />
      <EnterprisesCTABand />
      <Footer />
    </main>
  );
}
