'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingHero() {
  const [segment, setSegment] = useState<'carrier' | 'mvno'>('carrier');

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-navy-DEFAULT font-bold text-5xl md:text-6xl mb-6">
            Transparent pricing. No surprises.
          </h1>

          <p className="text-navy-600 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            Wholesale per-unit pricing across all five services. Volume discounts apply automatically. No setup fees on any product.
          </p>

          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-navy-50/40 rounded-full p-1">
              <button
                onClick={() => setSegment('carrier')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  segment === 'carrier'
                    ? 'bg-navy-DEFAULT text-white'
                    : 'text-navy-600 hover:text-navy-DEFAULT'
                }`}
              >
                Carrier
              </button>
              <button
                onClick={() => setSegment('mvno')}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  segment === 'mvno'
                    ? 'bg-navy-DEFAULT text-white'
                    : 'text-navy-600 hover:text-navy-DEFAULT'
                }`}
              >
                MVNO
              </button>
            </div>
          </div>

          <p className="text-navy-400 text-sm">
            Viewing {segment === 'carrier' ? 'Carrier' : 'MVNO'} pricing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
