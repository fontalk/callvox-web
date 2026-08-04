import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimePricingHero from '@/components/products/airtime/pricing/AirtimePricingHero'
import AirtimeVolumeTiers from '@/components/products/airtime/pricing/AirtimeVolumeTiers'
import AirtimeFXNote from '@/components/products/airtime/pricing/AirtimeFXNote'
import AirtimeRateDeckForm from '@/components/products/airtime/pricing/AirtimeRateDeckForm'

export const metadata = {
  title: 'Airtime Pricing | Callvox',
  description:
    'Volume-based pricing tiers for wholesale airtime top-up. Request a rate deck for corridor-specific commission rates.',
}

export default function AirtimePricingPage() {
  return (
    <>
      <Nav />
      <AirtimePricingHero />
      <AirtimeVolumeTiers />
      <AirtimeFXNote />
      <AirtimeRateDeckForm />
      <Footer />
    </>
  )
}
