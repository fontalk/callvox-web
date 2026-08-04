import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import AirtimeApplyFlow from '@/components/products/airtime/apply/AirtimeApplyFlow'

export const metadata = {
  title: 'Get API Access — Airtime | Callvox',
  description:
    'Start delivering airtime top-ups: qualification, business verification, and instant sandbox credentials.',
}

export default function AirtimeApplyPage() {
  return (
    <>
      <Nav />
      <section className="bg-navy-DEFAULT px-4 py-16 md:py-20">
        <div className="hero-inner">
          <div className="text-sm text-navy-300 mb-4">Products → Airtime Top-Ups → Get API Access</div>
          <h1 className="text-white font-bold text-3xl md:text-4xl mb-3">
            Start delivering airtime in under 24 hours.
          </h1>
          <p className="text-navy-200 max-w-2xl">
            Sandbox access is issued immediately. Production activation follows KYC review —
            typically within one business day for verified accounts.
          </p>
        </div>
      </section>
      <AirtimeApplyFlow />
      <Footer />
    </>
  )
}
