'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '$80B', label: 'A2P market size 2024' },
  { value: '90%+', label: 'SMS open rate' },
  { value: '62%', label: 'businesses using SMS 2FA' },
  { value: '44%', label: 'promotional messages blocked by grey routes', isWarning: true },
];

export default function MarketContextStrip() {
  return (
    <section className="bg-white border-b border-navy-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className={`text-3xl font-bold ${stat.isWarning ? 'text-navy-600' : 'text-navy-DEFAULT'}`}>
                {stat.value}
              </div>
              <p className="text-navy-600 text-sm font-medium">
                {stat.isWarning && <span className="inline-block px-2 py-0.5 bg-coral/10 rounded mr-2">why compliance matters</span>}
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
