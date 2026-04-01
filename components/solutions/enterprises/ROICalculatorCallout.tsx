'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

export default function ROICalculatorCallout() {
  return (
    <section className="py-16 md:py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-10 rounded-2xl border border-cyan-DEFAULT/30 bg-cyan-DEFAULT/10"
      >
        <h3 className="text-navy-DEFAULT font-bold text-2xl mb-4">
          Estimate your savings.
        </h3>
        
        <p className="text-navy-600 mb-8">
          Enter your current monthly call volume and per-minute rate. We&apos;ll show you what Callvox costs — and what you save.
        </p>

        <a
          href="/pricing#calculator"
          className="inline-flex items-center px-6 py-3 bg-navy-DEFAULT text-white font-medium rounded-lg hover:bg-navy-800 transition-colors"
        >
          Use the ROI calculator <ArrowRight size={20} className="ml-2" weight="bold" />
        </a>
      </motion.div>
    </section>
  );
}
