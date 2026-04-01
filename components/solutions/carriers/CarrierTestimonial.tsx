'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CarrierTestimonial() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="bg-navy-800/50 border border-navy-700 rounded-lg p-8 md:p-12"
        >
          <blockquote className="space-y-6">
            <p className="text-2xl md:text-3xl font-light text-white leading-relaxed">
              "The NOC team is the real differentiator. I've worked with four wholesale voice providers. Callvox is the only one where I actually reach a carrier engineer — not a level-1 ticket queue — when something goes wrong at 2am."
            </p>
            <footer className="space-y-2">
              <p className="text-cyan-DEFAULT font-semibold">
                Head of Interconnect, West African Carrier
              </p>
              <p className="text-navy-200 text-sm">
                38% cost reduction on Africa termination
              </p>
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
