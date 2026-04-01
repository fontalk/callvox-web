'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SimCard, Truck, ArrowsClockwise } from '@phosphor-icons/react';

const benefits = [
  {
    icon: SimCard,
    title: 'White-label RSP platform',
    desc: 'Full branded eSIM provisioning under your MVNO identity. Subscribers see your brand, not ours.',
  },
  {
    icon: Truck,
    title: 'Eliminate SIM logistics',
    desc: 'No physical SIM printing, warehousing, or distribution. OTA delivery from day one.',
  },
  {
    icon: ArrowsClockwise,
    title: 'Instant profile switching',
    desc: 'Subscribers can switch between your plans — or switch to you from a competitor — without visiting a store.',
  },
];

export default function ESIMFocus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-navy-50/40 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-navy-DEFAULT font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            eSIM — your biggest growth lever.
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            65% of new smartphones now support eSIM. MVNOs that can provision eSIM profiles have a meaningful competitive advantage over those still shipping physical SIMs. Callvox&apos;s SM-DP+ infrastructure is GSMA SAS-SM certified — the mandatory certification for commercial eSIM at scale.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="bg-white rounded-lg p-8 border border-navy-100"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-DEFAULT/10 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-cyan-DEFAULT" weight="duotone" />
                </div>
                <h3 className="text-navy-DEFAULT font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-navy-600">{benefit.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
