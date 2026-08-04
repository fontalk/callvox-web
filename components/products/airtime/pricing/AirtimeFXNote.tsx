'use client'

import { motion } from 'framer-motion'
import { Info } from '@phosphor-icons/react'

export default function AirtimeFXNote() {
  return (
    <section className="bg-white py-4 md:py-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex gap-4 items-start bg-navy-50/60 border border-navy-100 rounded-xl p-6"
        >
          <Info size={22} className="text-navy-600 flex-shrink-0 mt-0.5" />
          <p className="text-navy-600 text-sm leading-relaxed">
            <span className="font-semibold text-navy-DEFAULT">On currency conversion:</span>{' '}
            transactions across our 60+ supported currencies carry a small FX spread on top of the
            base commission. The exact spread depends on the corridor and underlying aggregator, so
            we don&apos;t publish one universal number — it&apos;s itemized in your rate deck and on
            every transaction&apos;s CDR.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
