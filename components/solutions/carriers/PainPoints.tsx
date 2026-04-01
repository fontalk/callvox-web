'use client'

import { motion } from 'framer-motion'
import {
  ArrowFatDown,
  Clock,
  Warning,
  Headset,
} from '@phosphor-icons/react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const painPoints = [
  {
    icon: ArrowFatDown,
    title: 'Route quality degradation',
    description: 'Aggregated routes degrade under load. Our direct interconnects maintain consistent ASR because there are no intermediaries to introduce jitter or drop packets.',
  },
  {
    icon: Clock,
    title: 'Slow procurement cycles',
    description: 'Tier-1 carriers require 6–12 month procurement cycles. Callvox delivers interconnect agreements in days, not quarters — without compromising on quality.',
  },
  {
    icon: Warning,
    title: 'Fraud exposure',
    description: 'IRSF, CLI spoofing, and wangiri attacks cost carriers billions annually. We operate active fraud detection on all routes with real-time blocking.',
  },
  {
    icon: Headset,
    title: 'Poor support from wholesale providers',
    description: 'Most wholesale providers offer email tickets. We provide 24/7 NOC access with engineers who understand carrier infrastructure.',
  },
]

export default function PainPoints() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-navy-DEFAULT mb-16 text-balance"
        >
          We solve the problems carriers actually have.
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-0"
        >
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-6 py-8 border-b border-navy-50 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <Icon
                    size={32}
                    weight="duotone"
                    className="text-cyan-DEFAULT"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-navy-DEFAULT mb-2">
                    {point.title}
                  </h3>
                  <p className="text-navy-200 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
