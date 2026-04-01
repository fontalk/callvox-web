'use client';

import { motion } from 'framer-motion';

export function CTABand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-navy-DEFAULT rounded-3xl px-8 md:px-16 py-16 md:py-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Ready to evaluate our voice routes?
          </h2>
          <p className="text-lg text-navy-200 mb-12 max-w-2xl mx-auto">
            Request a rate deck and we'll follow up with destination-level pricing within 4 business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-navy-DEFAULT px-8 py-3 rounded-lg font-semibold hover:bg-navy-50 transition-colors">
              Get Voice Rates →
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Talk to a carrier specialist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
