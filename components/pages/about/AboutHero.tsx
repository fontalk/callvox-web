'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative bg-navy-DEFAULT min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-DEFAULT rounded-full blur-3xl"></div>
      </div>

      <div className="hero-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
              About Callvox
            </span>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(36px, 8vw, 52px)' }}>
            2 decades in the markets others treat as afterthoughts.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed max-w-3xl mx-auto">
            Founded in 2007 as a voice-only wholesale carrier focused on Latin America, Africa, South Asia, and the Middle East. Today, a unified five-product platform — built for the corridors where wholesale telecom actually grows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
