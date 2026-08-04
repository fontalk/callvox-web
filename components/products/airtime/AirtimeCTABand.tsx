'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'

export default function AirtimeCTABand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white text-balance mb-4"
        >
          Start delivering airtime in under 24 hours.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-navy-200 max-w-2xl mx-auto mb-8"
        >
          Sandbox access available immediately. Production activation within one business day for verified accounts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button variant="white">
            Get API Access
          </Button>
          <Button variant="white-ghost">
            View full operator list
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
