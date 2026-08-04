'use client'

import { motion } from 'framer-motion'

export default function AirtimePricingHero() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-navy-400 mb-6"
        >
          Products → Airtime Top-Ups → Pricing
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-navy-DEFAULT font-bold mb-6 text-balance"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
        >
          Volume-based pricing. No public commission rates.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-navy-600 text-lg max-w-2xl leading-relaxed"
        >
          Airtime commission rates are aggregator- and corridor-dependent, so we don&apos;t publish
          a flat number. What you pay is set by your monthly volume tier and negotiated per
          corridor — request a rate deck for exact figures.
        </motion.p>
      </div>
    </section>
  )
}
