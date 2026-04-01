'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlass } from '@phosphor-icons/react';

export default function BlogHero() {
  return (
    <section className="bg-white py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
              Resources
            </span>
          </div>

          <h1 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-4">
            Intelligence for wholesale telecom operators.
          </h1>

          <p className="text-navy-600 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Market analysis, compliance guides, regulatory updates, and technical primers — written for carriers, MVNOs, and resellers.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-400" />
            <input
              type="text"
              placeholder="Search guides and articles..."
              className="w-full px-4 py-3 pl-12 border border-navy-200 rounded-lg focus:outline-none focus:border-cyan-DEFAULT transition-colors"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
