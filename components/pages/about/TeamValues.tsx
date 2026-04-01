'use client';

import { motion } from 'framer-motion';
import { Handshake, Globe, Code, Lock } from '@phosphor-icons/react';

const values = [
  {
    icon: Handshake,
    title: 'Carrier-grade accountability',
    description: 'We publish SLAs. We enforce them. Financial penalties for breach aren\'t in the fine print — they\'re in the headline.'
  },
  {
    icon: Globe,
    title: 'Emerging-market depth',
    description: 'We have carrier engineers who speak the language of every major market we serve. Coverage isn\'t just routes — it\'s relationships.'
  },
  {
    icon: Code,
    title: 'API-first always',
    description: 'Every product is built API-first. If it can\'t be automated, we haven\'t finished building it.'
  },
  {
    icon: Lock,
    title: 'Compliance by default',
    description: 'STIR/SHAKEN, 10DLC, GSMA SGP.32, ISO 27001 — compliance is engineered in, not bolted on.'
  }
];

export default function TeamValues() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16"
        >
          How we operate.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-navy-100"
              >
                <Icon size={40} weight="duotone" className="text-cyan-DEFAULT mb-6" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-4">{value.title}</h3>
                <p className="text-navy-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
