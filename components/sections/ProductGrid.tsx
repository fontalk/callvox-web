'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, ChatDots, Lightning, SimCard, Globe } from '@phosphor-icons/react'

const products = [
  {
    icon: Phone,
    name: 'Voice',
    pitch: 'Wholesale termination & origination',
    stat: '500+ premium CLI routes · 99.99% ASR',
  },
  {
    icon: ChatDots,
    name: 'SMS / Messaging',
    pitch: 'A2P SMS & bulk messaging API',
    stat: '98%+ delivery · 200+ countries',
  },
  {
    icon: Lightning,
    name: 'Airtime Top-Ups',
    pitch: 'International mobile recharge',
    stat: '800+ operators · <3s delivery',
  },
  {
    icon: SimCard,
    name: 'eSIMs',
    pitch: 'Wholesale eSIM provisioning',
    stat: 'GSMA SGP.22/32 certified · IoT-ready',
  },
  {
    icon: Globe,
    name: 'DIDs / Numbers',
    pitch: 'Virtual phone numbers worldwide',
    stat: '90+ countries · instant provisioning',
  },
]

export function ProductGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-white py-32 lg:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[2px] text-cyan-DEFAULT mb-3">Platform</p>
          <h2 className="text-[40px] font-semibold text-navy-DEFAULT mb-4">
            Everything you need. One partner.
          </h2>
          <p className="text-lg text-navy-600">
            Five wholesale services. Single API. Single invoice. Single support contact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-white border border-navy-100 rounded-2xl p-10 hover:border-cyan-DEFAULT hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-navy-50 flex items-center justify-center">
                <product.icon weight="duotone" className="w-6 h-6 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-navy-DEFAULT mt-5">{product.name}</h3>
              <p className="text-[15px] text-navy-600 mt-2 leading-relaxed">{product.pitch}</p>
              <p className="text-[13px] font-semibold text-cyan-DEFAULT mt-4">{product.stat}</p>
              <p className="text-[13px] text-navy-600 group-hover:text-cyan-DEFAULT mt-6 transition-colors">
                Learn more
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
