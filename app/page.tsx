import Nav from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { LogoBar } from '@/components/sections/LogoBar'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { WhyCallvox } from '@/components/sections/WhyCallvox'
import { AudiencePaths } from '@/components/sections/AudiencePaths'
import { TrustBar } from '@/components/sections/TrustBar'
import { Footer } from '@/components/sections/Footer'
import { OrganizationJsonLd } from '@/components/JsonLd'

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <Nav />
      <main id="main-content">
        <Hero />
        <LogoBar />
        <ProductGrid />
        <WhyCallvox />
        <AudiencePaths />
        <TrustBar />
      </main>
      <Footer />
    </>
  )
}
