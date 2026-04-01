'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const categories = ['All', 'Educational', 'Compliance', 'Comparison', 'Market Intelligence', 'Case Studies', 'Regulatory Updates'];

export default function CategoryFilter() {
  const [active, setActive] = useState('All');

  return (
    <section className="sticky top-16 md:top-[68px] bg-white py-4 border-b border-navy-100 z-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex gap-2 overflow-x-auto pb-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                active === cat
                  ? 'bg-navy-DEFAULT text-white'
                  : 'border border-navy-200 text-navy-600 hover:border-navy-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
