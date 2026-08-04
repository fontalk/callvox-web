'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'

const certifications = [
  'ISO 27001',
  'STIR/SHAKEN',
  'GDPR Compliant',
  '10DLC Ready',
  'GSMA SGP.32',
]

export function TrustBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white border-t border-navy-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8"
        >
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-[13px] font-medium text-navy-600">
              <ShieldCheck weight="bold" className="w-5 h-5 text-cyan-DEFAULT" />
              {cert}
            </div>
          ))}
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.08 }}
          className="flex items-center justify-center gap-2 mt-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot" />
          <span className="text-[13px] text-navy-600">All systems operational</span>
          <a href="#" className="text-[13px] text-cyan-DEFAULT hover:underline ml-1">
            status.callvox.net
          </a>
        </motion.div>

        {/* Bottom CTA Band */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.16 }}
          className="mt-16 bg-navy-DEFAULT rounded-2xl p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-[32px] font-semibold text-white">
            Ready to simplify your wholesale stack?
          </h2>
          <p className="text-base text-navy-200 mt-3">
            Join 150+ carriers, MVNOs and resellers already on the platform.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="white" size="lg">
              Work with us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
