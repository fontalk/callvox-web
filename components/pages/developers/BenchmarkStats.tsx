'use client';

import { motion } from 'framer-motion';

const stats = [
  {
    metric: '<10 min',
    label: 'Time to first API call',
    description: 'From signup to first successful request'
  },
  {
    metric: '99%',
    label: 'API reference coverage',
    description: 'Every endpoint documented with examples'
  },
  {
    metric: 'Sandbox = Production',
    label: 'Test environment parity',
    description: 'No surprises at go-live'
  }
];

export default function BenchmarkStats() {
  return (
    <section className="bg-[#0a2847] py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex-1 text-center">
              {idx > 0 && <div className="hidden md:block absolute h-12 w-px bg-navy-500 -ml-6"></div>}
              <div className="text-cyan-DEFAULT font-bold text-2xl md:text-3xl mb-2">
                {stat.metric}
              </div>
              <div className="text-white font-semibold text-sm mb-1">
                {stat.label}
              </div>
              <div className="text-navy-300 text-xs">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
