'use client';

import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Clock, Headset } from '@phosphor-icons/react';

const features = [
  {
    icon: Phone,
    title: 'HD Voice',
    description: 'G.722 wideband audio. Crystal clear call quality for sales teams, contact centres, and executive communications.'
  },
  {
    icon: ShieldCheck,
    title: 'ISO 27001 Certified',
    description: 'Certified security posture. Data processing agreements for GDPR compliance. HIPAA guidance available.'
  },
  {
    icon: Clock,
    title: '99.99% SLA',
    description: 'Contractual uptime guarantee with financial penalties. 24/7 NOC. Failover routing in under 3 seconds.'
  },
  {
    icon: Headset,
    title: 'Named support contact',
    description: 'Dedicated account manager and priority NOC access. Not a ticket queue.'
  }
];

export default function EnterprisesFeatures() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl">
            Built for business continuity.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-navy-50/40 rounded-xl"
              >
                <Icon size={32} weight="duotone" className="text-cyan-DEFAULT mb-4" />
                <h3 className="text-navy-DEFAULT font-bold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
