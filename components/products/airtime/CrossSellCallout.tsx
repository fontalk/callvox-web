'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowsHorizontal } from '@phosphor-icons/react'
import Button from '@/components/callvox-ui/Button'

export default function CrossSellCallout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1 }}
          className="bg-cyan-50 border border-cyan-400/30 rounded-2xl p-10"
        >
          <div className="flex gap-6 items-start mb-6">
            <ArrowsHorizontal size={32} weight="bold" className="text-cyan-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-navy-DEFAULT mb-3">
                Already routing voice to Africa or South Asia?
              </h3>
              <p className="text-lg text-navy-600 mb-6">
                Callvox voice and airtime share the same operator relationships. Add airtime top-up to your existing account — no new contracts, no new APIs, one invoice.
              </p>
              <Button variant="primary" className="bg-navy-DEFAULT text-white hover:bg-navy-600">
                Talk to a specialist
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
