'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const partners = [
  'TelecomOne',
  'GlobalVoice',
  'NetLink Pro',
  'SkyMobile',
  'ConnectHub',
  'WaveNet',
  'PulseTel',
  'DataStream',
]

export function LogoBar() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-navy-50/40 border-y border-navy-100 py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="text-[11px] uppercase tracking-[1.5px] text-navy-400 text-center mb-6">
          Trusted by carriers, MVNOs & resellers in 150+ countries
        </p>
        
        {/* Desktop: Static Grid */}
        <div className="hidden md:flex justify-center items-center gap-8 max-w-5xl mx-auto px-4">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="w-[120px] h-12 flex items-center justify-center text-navy-200 text-xs font-medium"
            >
              {partner}
            </div>
          ))}
        </div>
        
        {/* Mobile: Marquee */}
        <div className="md:hidden relative">
          <div className="flex animate-marquee">
            {[...partners, ...partners].map((partner, i) => (
              <div 
                key={`${partner}-${i}`}
                className="flex-shrink-0 w-[120px] h-12 flex items-center justify-center text-navy-200 text-xs font-medium mx-4"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
