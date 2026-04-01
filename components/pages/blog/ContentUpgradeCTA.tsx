'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';

export default function ContentUpgradeCTA() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-navy-DEFAULT rounded-2xl p-12"
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Get the resources before your competitors do.
          </h2>

          <p className="text-navy-200 text-lg mb-8">
            Monthly compliance updates, regulatory changes, and market intelligence — delivered to wholesale operators who need to stay ahead.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white text-navy-DEFAULT placeholder-navy-400 focus:outline-none"
            />
            <button className="px-6 py-3 rounded-lg bg-white text-navy-DEFAULT font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
              Subscribe <ArrowRight size={18} weight="bold" />
            </button>
          </div>

          <p className="text-navy-400 text-xs">
            No marketing emails. Wholesale intelligence only. Unsubscribe any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
