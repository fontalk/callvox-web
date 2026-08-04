'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'
import { Button } from '@/components/callvox-ui/Button'

export default function AirtimePricingTeaser() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="bg-navy-50/40 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-navy-DEFAULT mb-3"
        >
          Volume-based pricing, no public commission rates.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2 }}
          className="text-navy-600 max-w-3xl mx-auto mb-8"
        >
          Starter, Growth, and Enterprise tiers based on monthly transaction volume — exact
          commission and FX spreads come in your rate deck.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/products/airtime/pricing">
            <Button variant="primary">
              See pricing tiers <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
