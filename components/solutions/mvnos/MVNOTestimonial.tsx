'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MVNOTestimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-DEFAULT rounded-full mix-blend-screen blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <blockquote className="text-white text-xl md:text-2xl font-light leading-relaxed mb-6">
            &quot;We went from vendor chaos — four different contracts, four different support lines, four different invoices — to a single Callvox relationship covering everything. Our ops overhead dropped by 60%.&quot;
          </blockquote>
          <div className="space-y-1">
            <p className="text-cyan-DEFAULT font-semibold">CTO, South Asian MVNO</p>
            <p className="text-navy-200 text-sm">4 vendors consolidated to 1</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
