'use client';

import { motion } from 'framer-motion';
import { Phone, ChatCircle, DeviceMobile, SimCard, PhoneIncoming, CheckCircle, ArrowRight } from '@phosphor-icons/react';

const products = [
  {
    icon: Phone,
    name: 'Voice',
    price: '0.01',
    unit: '/ min',
    features: [
      'Direct CLI routes',
      '500+ destinations',
      'Volume tiers available'
    ]
  },
  {
    icon: ChatCircle,
    name: 'SMS',
    price: '0.007',
    unit: '/ message',
    features: [
      '10DLC included',
      '200+ countries',
      'SMPP + REST API'
    ]
  },
  {
    icon: DeviceMobile,
    name: 'Airtime',
    price: '2–10%',
    unit: 'off face value',
    features: [
      '800+ operators',
      '<3s delivery',
      'Webhook confirmation'
    ]
  },
  {
    icon: SimCard,
    name: 'eSIM',
    price: 'Custom',
    unit: 'pricing',
    features: [
      'Per-profile + platform fee',
      'White-label available',
      'GSMA certified'
    ]
  },
  {
    icon: PhoneIncoming,
    name: 'DIDs',
    price: '1.50',
    unit: '/ number / month',
    features: [
      '90+ countries',
      'Free porting',
      'Voice + SMS'
    ]
  }
];

export default function ProductPricingCards() {
  return (
    <section className="bg-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-navy-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow"
              >
                <Icon size={36} weight="duotone" className="text-navy-600 mb-4" />
                <h3 className="text-navy-DEFAULT font-bold text-xl mb-3">{product.name}</h3>
                
                <div className="mb-6">
                  <span className="text-navy-DEFAULT font-bold text-3xl">from {product.price}</span>
                  <span className="text-navy-400 text-base ml-2">{product.unit}</span>
                </div>

                <ul className="mb-6 space-y-3">
                  {product.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-3 items-start">
                      <CheckCircle size={16} weight="fill" className="text-cyan-DEFAULT flex-shrink-0 mt-1" />
                      <span className="text-navy-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#" className="text-cyan-DEFAULT font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  Get rates <ArrowRight size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-navy-400 text-xs text-center mt-8 max-w-2xl mx-auto"
        >
          All prices are indicative wholesale rates. Final pricing depends on volume tier, destination, and account type. Request a custom rate deck for exact quotes.
        </motion.p>
      </div>
    </section>
  );
}
