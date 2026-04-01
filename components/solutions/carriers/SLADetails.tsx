'use client'

import { motion } from 'framer-motion'
import { CaretRight } from '@phosphor-icons/react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const slaData = [
  {
    metric: 'Uptime',
    target: '99.99%',
    frequency: 'Monthly',
    credit: '10× the affected hour\'s charges',
  },
  {
    metric: 'ASR (premium routes)',
    target: '92%+',
    frequency: 'Daily',
    credit: 'Remediation within 4 hours',
  },
  {
    metric: 'NOC response',
    target: '<15 min',
    frequency: 'Per incident',
    credit: 'Escalation path defined in contract',
  },
  {
    metric: 'PDD',
    target: '<5 seconds',
    frequency: 'Per route',
    credit: 'Route replaced if sustained breach',
  },
]

export default function SLADetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-navy-DEFAULT mb-12 text-balance"
        >
          Published SLAs. Financial penalties for breaches.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto mb-8"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-200">
                <th className="text-left py-4 px-4 font-semibold text-navy-DEFAULT">
                  Metric
                </th>
                <th className="text-left py-4 px-4 font-semibold text-navy-DEFAULT">
                  Target
                </th>
                <th className="text-left py-4 px-4 font-semibold text-navy-DEFAULT">
                  Frequency
                </th>
                <th className="text-left py-4 px-4 font-semibold text-navy-DEFAULT">
                  Breach Remedy
                </th>
              </tr>
            </thead>
            <tbody>
              {slaData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-navy-50 hover:bg-navy-50/20 transition"
                >
                  <td className="py-4 px-4 text-navy-DEFAULT font-medium">
                    {row.metric}
                  </td>
                  <td className="py-4 px-4 text-navy-DEFAULT">{row.target}</td>
                  <td className="py-4 px-4 text-navy-200">{row.frequency}</td>
                  <td className="py-4 px-4 text-navy-200">{row.credit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-2 text-navy-200"
        >
          <p className="text-sm">
            Full SLA documentation available without a sales call.{' '}
            <a href="#" className="text-cyan-DEFAULT hover:text-cyan-600 font-semibold inline-flex items-center gap-1">
              Download
              <CaretRight size={16} weight="fill" />
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
