import Nav from '@/components/Nav'
import AirtimeHero from '@/components/products/airtime/AirtimeHero'
import MarketContextAirtime from '@/components/products/airtime/MarketContextAirtime'
import UseCasesAirtime from '@/components/products/airtime/UseCasesAirtime'
import HowItWorksAirtime from '@/components/products/airtime/HowItWorksAirtime'
import OperatorCoverageAirtime from '@/components/products/airtime/OperatorCoverageAirtime'
import TechnicalSpecsAirtime from '@/components/products/airtime/TechnicalSpecsAirtime'
import AirtimePricingTeaser from '@/components/products/airtime/AirtimePricingTeaser'
import CrossSellCallout from '@/components/products/airtime/CrossSellCallout'
import AirtimeCTABand from '@/components/products/airtime/AirtimeCTABand'
import { Footer } from '@/components/sections/Footer'

export const metadata = {
  title: 'Airtime Top-Ups | Callvox',
  description: 'Wholesale airtime top-up API for diaspora remittance platforms, mobile money operators, and international resellers. 800+ operators, sub-3-second delivery.',
}

export default function AirtimePage() {
  return (
    <>
      <Nav />
      <AirtimeHero />
      <MarketContextAirtime />
      <UseCasesAirtime />
      <HowItWorksAirtime />
      <OperatorCoverageAirtime />
      <TechnicalSpecsAirtime />
      <AirtimePricingTeaser />
      <CrossSellCallout />
      <AirtimeCTABand />
      <Footer />
    </>
  )
}
