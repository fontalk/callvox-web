'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CellSignalHigh } from '@phosphor-icons/react';

export default function FeaturedPost() {
  return (
    <section className="bg-navy-50/40 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-navy-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-DEFAULT/20 text-cyan-DEFAULT text-xs font-bold uppercase tracking-wider">
                  Compliance Guide
                </span>
              </div>

              <h2 className="text-navy-DEFAULT font-bold text-3xl md:text-4xl mb-4 leading-tight">
                10DLC Compliance in 2026: What SMS Resellers Must Know
              </h2>

              <p className="text-navy-600 text-lg leading-relaxed mb-6">
                T-Mobile now fines up to $10,000 per non-compliant message campaign. 44% of promotional SMS is blocked by carrier spam filters. This guide explains exactly what 10DLC registration requires — and how to stay compliant.
              </p>

              <div className="flex items-center gap-6 mb-6 text-sm text-navy-500">
                <span>Callvox Editorial</span>
                <span>•</span>
                <span>April 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>

              <a href="#" className="text-cyan-DEFAULT font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Read article
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center justify-center h-64"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="w-full h-full max-w-xs" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="150" cy="150" r="140" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.2" />
                  <circle cx="150" cy="150" r="100" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.3" />
                  <circle cx="150" cy="150" r="60" fill="none" stroke="#00D4FF" strokeWidth="2" opacity="0.4" />
                  <g className="animate-spin" style={{ transformOrigin: '150px 150px', animation: 'spin 4s linear infinite' }}>
                    <path d="M 150 90 L 155 100" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 210 150 L 200 155" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 150 210 L 145 200" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 90 150 L 100 145" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" />
                  </g>
                  <CellSignalHigh size={40} className="absolute text-cyan-DEFAULT opacity-60" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
