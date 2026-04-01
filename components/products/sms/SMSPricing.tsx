'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import Button from '@/components/callvox-ui/Button';

const pricingCards = [
  {
    region: 'US Domestic',
    rate: 'from $0.007/SMS',
    features: ['+ carrier fees disclosed', '10DLC registration included'],
  },
  {
    region: 'Europe',
    rate: 'from $0.02/SMS',
    features: ['Direct carrier routes to all major EU markets'],
  },
  {
    region: 'Africa & Asia',
    rate: 'from $0.04/SMS',
    features: ['Direct carrier connections across 80+ markets'],
  },
];

export default function SMSPricing() {
  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white font-semibold text-4xl mb-4">Volume pricing. No hidden surcharges.</h2>
          <p className="text-navy-200 text-lg">
            Wholesale per-message rates. Carrier surcharges disclosed upfront. Volume tiers unlock automatically.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pricingCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg p-8 space-y-4"
            >
              <h3 className="text-white font-semibold text-lg">{card.region}</h3>
              <div className="space-y-3">
                <p className="text-cyan font-semibold">{card.rate}</p>
                <ul className="space-y-2">
                  {card.features.map((f, j) => (
                    <li key={j} className="text-navy-200 text-sm flex items-start gap-2">
                      <span className="text-cyan mt-1">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center pt-8"
        >
          <Button variant="primary" className="bg-white text-navy-DEFAULT hover:bg-gray-100">
            Get a full rate card <ArrowRight size={20} weight="bold" className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
