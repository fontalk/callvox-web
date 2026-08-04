'use client';

import { motion } from 'framer-motion';

export function ESIMCTABand() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-DEFAULT mb-6">
          The fewest wholesale providers offer this. Get in early.
        </h2>

        <p className="text-lg text-navy-600 mb-8 leading-relaxed">
          eSIM is the fastest-growing segment in wholesale telecom. Fewer than 10 providers globally offer eSIM alongside voice and messaging — none combine it with airtime.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-cyan-DEFAULT text-navy-DEFAULT font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Talk to an eSIM specialist
          </button>
          <button className="px-6 py-3 border-2 border-navy-DEFAULT text-navy-DEFAULT font-semibold rounded-lg hover:bg-navy-50 transition-colors">
            Download the eSIM buyer's guide
          </button>
        </div>
      </motion.div>
    </section>
  );
}
