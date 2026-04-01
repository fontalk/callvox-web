'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function MarketContextAirtime() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: '$25B', label: 'Cross-border airtime market' },
    { value: '2.5B', label: 'Active prepaid subscribers' },
    { value: '75%', label: 'Mobile remittances are airtime' },
    { value: '800+', label: 'Operators covered' },
  ]

  return (
    <section ref={ref} className="bg-white py-12 border-b border-navy-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-navy-DEFAULT mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-navy-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
