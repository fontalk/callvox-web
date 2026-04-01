'use client';

import { motion } from 'framer-motion';

export default function CostSavingsProof() {
  return (
    <section className="bg-white border-b border-navy-100 py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-navy-DEFAULT font-bold mb-4" style={{ fontSize: '72px', lineHeight: 1 }}>
            40–70%
          </div>
          
          <p className="text-navy-600 text-lg font-medium mb-3">
            average cost reduction vs legacy PSTN for enterprise voice
          </p>

          <p className="text-navy-400 text-sm italic">
            Based on customer benchmarks across 50+ enterprise migrations. Results vary by current provider and call volume.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
