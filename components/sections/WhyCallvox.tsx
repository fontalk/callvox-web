'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const proofs = [
  {
    number: '99.99%',
    label: 'Uptime SLA',
    body: 'Carrier-grade infrastructure with geo-redundant PoPs, 24/7 NOC support, and contractual SLA penalties. Your reputation depends on ours.',
  },
  {
    number: '17 years',
    label: 'Emerging-market depth',
    body: 'Direct routes across Latin America, Africa, South Asia & the Middle East — the corridors where prepaid mobile dominates and voice termination demand grows fastest.',
  },
  {
    number: '1 platform',
    label: 'One API. One invoice.',
    body: 'Replace 3–5 fragmented vendor relationships with a single platform, single API key, and single support contact across all five services.',
  },
]

export function WhyCallvox() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-32 lg:py-40 noise-overlay">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[2px] text-cyan-DEFAULT mb-3">Why Callvox</p>
          <h2 className="text-[40px] font-semibold text-white">
            Built for the markets others ignore.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofs.map((proof, i) => (
            <motion.div
              key={proof.label}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="text-left"
            >
              <div className="text-[52px] font-bold text-cyan-DEFAULT leading-none">{proof.number}</div>
              <div className="text-lg font-semibold text-white mt-2">{proof.label}</div>
              <p className="text-[15px] text-navy-200 mt-3 leading-relaxed">{proof.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
