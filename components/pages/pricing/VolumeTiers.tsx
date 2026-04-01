'use client';

import { motion } from 'framer-motion';

const tiers = [
  {
    tier: 'Starter',
    volume: '<$1,000/mo',
    discount: 'Standard rates',
    features: 'Self-serve portal + email support'
  },
  {
    tier: 'Growth',
    volume: '$1,000–$10,000/mo',
    discount: '10–15% better rates',
    features: 'Dedicated account manager'
  },
  {
    tier: 'Scale',
    volume: '$10,000–$50,000/mo',
    discount: '20–25% better rates',
    features: 'Priority NOC + custom SLAs'
  },
  {
    tier: 'Enterprise',
    volume: '$50,000+/mo',
    discount: 'Custom rates',
    features: 'Named NOC contact + white-label available'
  }
];

export default function VolumeTiers() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-navy-DEFAULT font-bold text-5xl mb-4">
            Rates improve as you grow.
          </h2>
          <p className="text-navy-600 text-lg">
            Volume tiers apply automatically — no renegotiation required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-200">
                <th className="text-left py-4 px-6 font-bold text-navy-DEFAULT">Tier</th>
                <th className="text-left py-4 px-6 font-bold text-navy-DEFAULT">Monthly Volume</th>
                <th className="text-left py-4 px-6 font-bold text-navy-DEFAULT">Discount</th>
                <th className="text-left py-4 px-6 font-bold text-navy-DEFAULT">Features</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, idx) => (
                <tr key={idx} className="border-b border-navy-100 hover:bg-white/50 transition-colors">
                  <td className="py-4 px-6 font-semibold text-navy-DEFAULT">{tier.tier}</td>
                  <td className="py-4 px-6 text-navy-600">{tier.volume}</td>
                  <td className="py-4 px-6 text-navy-600">{tier.discount}</td>
                  <td className="py-4 px-6 text-navy-600">{tier.features}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
