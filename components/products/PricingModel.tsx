'use client';

import { motion } from 'framer-motion';

export function PricingModel() {
  const pricingTiers = [
    {
      title: 'US & Canada Domestic',
      price: '$0.01–0.03',
      unit: 'per minute',
      description: 'Competitive blended rates. STIR/SHAKEN included.',
    },
    {
      title: 'Europe (major markets)',
      price: '$0.02–0.06',
      unit: 'per minute',
      description: 'Direct interconnects to all major EU carriers.',
    },
    {
      title: 'Africa & Emerging Markets',
      price: 'From $0.05',
      unit: 'per minute',
      description: 'Premium CLI routes to 40+ African destinations.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-navy-DEFAULT mb-4">Transparent pricing. No surprises.</h2>
          <p className="text-lg text-navy-600">
            Per-minute rates vary by destination. Volume discounts applied automatically. No setup fees, no monthly minimums for established carriers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-50/50 rounded-xl p-8 border border-navy-100"
            >
              <h3 className="text-lg font-semibold text-navy-DEFAULT mb-4">{tier.title}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold text-cyan-DEFAULT">{tier.price}</p>
                <p className="text-sm text-navy-600 mt-1">{tier.unit}</p>
              </div>
              <p className="text-navy-600">{tier.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-navy-100"
        >
          <p className="text-navy-600 mb-6">
            All rates vary by volume tier, route type, and destination.
          </p>
          <button className="inline-block bg-navy-DEFAULT hover:bg-navy-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Talk to a specialist →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
