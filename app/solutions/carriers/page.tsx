import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import CarriersHero from '@/components/solutions/carriers/CarriersHero'
import PainPoints from '@/components/solutions/carriers/PainPoints'
import WhatYouGet from '@/components/solutions/carriers/WhatYouGet'
import SLADetails from '@/components/solutions/carriers/SLADetails'
import CarrierTestimonial from '@/components/solutions/carriers/CarrierTestimonial'
import CarriersCTABand from '@/components/solutions/carriers/CarriersCTABand'

export const metadata = {
  title: 'For Carriers - Callvox',
  description: 'Carrier-grade infrastructure and carrier-grade relationships. 500+ direct routes, 99.99% uptime SLA, 24/7 NOC support.',
}

export default function CarriersPage() {
  return (
    <>
      <Nav />
      <main>
        <CarriersHero />
        <PainPoints />
        <WhatYouGet />
        <SLADetails />
        <CarrierTestimonial />
        <CarriersCTABand />
      </main>
      <Footer />
    </>
  )
}
