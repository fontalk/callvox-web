'use client';

import { motion } from 'framer-motion';

const stats = [
  { number: '18', label: 'years', description: 'Track record. Founded 2007, operating continuously' },
  { number: '500+', label: 'direct routes', description: 'Voice termination across 4 continents' },
  { number: '800+', label: 'operators', description: 'Airtime top-up coverage' },
  { number: '90+', label: 'countries', description: 'DID number availability' },
  { number: '150+', label: 'carriers & MVNOs', description: 'Active wholesale relationships' },
  { number: '99.99%', label: 'uptime', description: 'SLA across all services' }
];

export default function ByTheNumbers() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-cyan-DEFAULT font-bold text-5xl md:text-6xl mb-3 leading-tight">
                {stat.number}
              </div>
              <div className="text-white font-semibold text-lg mb-2">{stat.label}</div>
              <p className="text-navy-200">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
