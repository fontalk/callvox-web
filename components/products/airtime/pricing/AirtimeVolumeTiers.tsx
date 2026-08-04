'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from '@phosphor-icons/react'

const tiers = [
  {
    name: 'Starter',
    volume: '<$25,000 / mo transaction volume',
    description: 'Self-serve onboarding, standard aggregator commission rates.',
    features: ['REST API + webhook confirmation', 'Standard KYC tier', 'Email support', 'Self-serve portal'],
  },
  {
    name: 'Growth',
    volume: '$25,000–$250,000 / mo transaction volume',
    description: 'Improved commission rates negotiated per corridor.',
    features: ['Everything in Starter', 'Dedicated account manager', 'Priority delivery routing', 'Custom daily limit tiers'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    volume: '$250,000+ / mo transaction volume',
    description: 'Custom commercial terms across all active corridors.',
    features: ['Everything in Growth', 'Named compliance contact', 'Multi-tenant sub-accounts', 'Custom SLA documentation'],
  },
]

export default function AirtimeVolumeTiers() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-3xl md:text-4xl mb-12"
        >
          Three tiers, based on committed monthly volume.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border ${
                tier.highlighted
                  ? 'bg-navy-DEFAULT border-navy-DEFAULT text-white'
                  : 'bg-white border-navy-100'
              }`}
            >
              <h3
                className={`font-bold text-xl mb-2 ${tier.highlighted ? 'text-white' : 'text-navy-DEFAULT'}`}
              >
                {tier.name}
              </h3>
              <p className={`text-sm mb-4 ${tier.highlighted ? 'text-navy-200' : 'text-navy-400'}`}>
                {tier.volume}
              </p>
              <p className={`text-sm mb-6 ${tier.highlighted ? 'text-navy-100' : 'text-navy-600'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-3 items-start">
                    <CheckCircle
                      size={16}
                      weight="fill"
                      className={`flex-shrink-0 mt-1 ${tier.highlighted ? 'text-cyan-DEFAULT' : 'text-cyan-DEFAULT'}`}
                    />
                    <span className={`text-sm ${tier.highlighted ? 'text-navy-100' : 'text-navy-600'}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-navy-400 text-xs text-center mt-8"
        >
          Tier thresholds and inclusions are indicative and subject to your actual account terms.
          Exact commission rates are issued in your rate deck, not published here.
        </motion.p>
      </div>
    </section>
  )
}
