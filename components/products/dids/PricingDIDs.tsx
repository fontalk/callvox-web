'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PricingDIDs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const pricing = [
    {
      name: 'Local DIDs',
      price: '$1.50',
      period: '/number/month',
      desc: '+$0.01/min inbound',
    },
    {
      name: 'Toll-Free',
      price: '$3.00',
      period: '/number/month',
      desc: '+$0.02/min inbound',
    },
    {
      name: 'Mobile DIDs',
      price: '$4.00',
      period: '/number/month',
      desc: 'Voice + SMS',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-navy-DEFAULT text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Predictable monthly pricing.
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {pricing.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-navy-50 rounded-lg p-8 border border-navy-100"
            >
              <h3 className="font-bold text-navy-DEFAULT text-xl mb-4">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-cyan-DEFAULT">from {tier.price}</span>
                <span className="text-gray-600 ml-2">{tier.period}</span>
              </div>
              <p className="text-gray-600 text-sm">{tier.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-2xl mx-auto bg-navy-50 rounded-lg p-6 border border-navy-200 text-center text-sm text-gray-700"
        >
          <p className="mb-2">
            <span className="font-semibold">Volume discounts</span> from 100+ numbers.
          </p>
          <p className="mb-2">
            <span className="font-semibold">Custom enterprise pricing</span> for 1,000+ number deployments.
          </p>
          <p>
            <span className="font-semibold">Free porting</span> on all accounts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
