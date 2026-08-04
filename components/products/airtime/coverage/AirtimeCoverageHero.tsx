'use client'

import { motion } from 'framer-motion'
import { summarize, airtimeCoverage } from '@/lib/data/airtime-coverage'

export default function AirtimeCoverageHero() {
  const { live, comingSoon, countries } = summarize(airtimeCoverage)

  return (
    <section className="bg-navy-DEFAULT px-4 py-20 md:py-28">
      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-navy-300 mb-6"
        >
          Products → Airtime Top-Ups → Coverage
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-white font-bold leading-tight mb-4 text-balance"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)' }}
        >
          Operator coverage, by corridor.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-navy-200 text-lg max-w-2xl mb-10"
        >
          {live} operators are live today across {countries} countries. {comingSoon} more are in
          active onboarding — we don&apos;t treat &quot;coming soon&quot; the same as &quot;live.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-6"
        >
          <div>
            <div className="text-3xl font-bold text-white">{live}</div>
            <div className="text-sm text-navy-300">Live operators</div>
          </div>
          <div className="w-px bg-navy-600" />
          <div>
            <div className="text-3xl font-bold text-white">{comingSoon}</div>
            <div className="text-sm text-navy-300">Onboarding</div>
          </div>
          <div className="w-px bg-navy-600" />
          <div>
            <div className="text-3xl font-bold text-white">{countries}</div>
            <div className="text-sm text-navy-300">Countries represented</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
