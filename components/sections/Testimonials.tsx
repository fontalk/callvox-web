'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from '@/components/callvox-ui/Badge'

const testimonials = [
  {
    quote: 'Switching our Africa termination to Callvox cut our per-minute cost by 38% while improving ASR. The NOC team is genuinely responsive.',
    name: 'Kwame A.',
    role: 'Head of Interconnect, West African MVNO',
    badge: '38% cost reduction',
  },
  {
    quote: "We went from 4 separate vendors to one platform. The API is clean, the portal is intuitive, and we haven't had a meaningful outage in 14 months.",
    name: 'Priya S.',
    role: 'CTO, South Asia Reseller',
    badge: '4 vendors → 1 platform',
  },
  {
    quote: "The airtime top-up coverage across our MENA remittance corridors is unmatched. Operators we couldn't reach before are now live.",
    name: 'Omar H.',
    role: 'CEO, MENA Aggregator',
    badge: '2.1M top-ups/month',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-navy-50/50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-[40px] font-semibold text-navy-DEFAULT text-center mb-16"
        >
          What our partners say.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-navy-100"
            >
              <span className="text-[64px] font-bold text-cyan-light leading-none">&ldquo;</span>
              <p className="text-base text-navy-800 italic leading-relaxed -mt-6">
                {testimonial.quote}
              </p>
              <div className="mt-6">
                <div className="text-sm font-semibold text-navy-DEFAULT">{testimonial.name}</div>
                <div className="text-[13px] text-navy-400">{testimonial.role}</div>
              </div>
              <Badge variant="cyan" className="mt-4">
                {testimonial.badge}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
