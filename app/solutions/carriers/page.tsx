import { Metadata } from 'next'
import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import CarriersHero from '@/components/solutions/carriers/CarriersHero'
import PainPoints from '@/components/solutions/carriers/PainPoints'
import WhatYouGet from '@/components/solutions/carriers/WhatYouGet'
import SLADetails from '@/components/solutions/carriers/SLADetails'
import CarrierTestimonial from '@/components/solutions/carriers/CarrierTestimonial'
import CarriersCTABand from '@/components/solutions/carriers/CarriersCTABand'

export const metadata: Metadata = {
  title: 'For Carriers & Telecom Operators',
  description:
    'Direct interconnects. 99.99% SLA. 24/7 NOC. Wholesale voice, SMS and numbers built for carrier-to-carrier relationships.',
  openGraph: {
    title: 'For Carriers & Telecom Operators | Callvox',
    description:
      'Direct interconnects. 99.99% SLA. 24/7 NOC. Carrier-grade infrastructure and relationships.',
    type: 'website',
  },
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
