'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check } from '@phosphor-icons/react'

const audiences = [
  {
    name: 'Carriers',
    points: ['Direct interconnects, not aggregated routes', '24/7 NOC with carrier-grade SLAs'],
    cta: 'View interconnect details',
  },
  {
    name: 'MVNOs',
    points: ['Cloud-native, elastic infrastructure', 'White-label ready, no vendor lock-in'],
    cta: 'Talk to an MVNO specialist',
  },
  {
    name: 'Resellers',
    points: ['Margin-friendly wholesale rates', 'Multi-tenant portal & automated billing'],
    cta: 'Become a partner',
  },
  {
    name: 'Enterprises',
    points: ['40–70% cost savings over legacy PSTN', 'HD voice + compliance certifications'],
    cta: 'Get a quote',
  },
]

export function AudiencePaths() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[2px] text-cyan-DEFAULT mb-3">Who We Serve</p>
          <h2 className="text-[40px] font-semibold text-navy-DEFAULT">
            Built for your business model.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="border border-navy-100 rounded-2xl p-8 hover:border-cyan-DEFAULT hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-navy-DEFAULT">{audience.name}</h3>
              <div className="mt-4 space-y-3">
                {audience.points.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <Check weight="bold" className="w-4 h-4 text-cyan-DEFAULT mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-navy-600">{point}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="inline-block mt-6 text-[13px] font-semibold text-cyan-DEFAULT hover:underline">
                &rarr; {audience.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
