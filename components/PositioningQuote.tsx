'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function PositioningQuote() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Opening quotation mark */}
        <motion.span
          className="block font-sans font-700 text-8xl leading-none text-cyan-300 select-none mb-4"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          "
        </motion.span>

        {/* The statement with left border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-DEFAULT origin-top" style={{ scaleY: isInView ? 1 : 0 }} />
          <p
            className="font-sans font-semibold text-3xl leading-snug text-navy-DEFAULT pl-8"
            style={{ letterSpacing: '-0.3px' }}
          >
            The unified wholesale platform built for the world&apos;s fastest-growing markets.
          </p>
        </motion.div>

        {/* Attribution */}
        <motion.p
          className="mt-8 pl-8 text-sm font-medium text-navy-400 uppercase tracking-widest"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Callvox — Brand positioning, 2026
        </motion.p>

        {/* Contextual body copy */}
        <motion.p
          className="mt-10 text-lg text-navy-600 leading-relaxed max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Not a tagline. An operating principle. Every product decision, every route we build, every market we enter is measured against it: does this make us more unified, and does it serve a market that&apos;s growing faster than the industry is paying attention to?
        </motion.p>
      </div>
    </section>
  );
}
