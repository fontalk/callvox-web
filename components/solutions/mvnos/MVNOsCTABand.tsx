'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Button from '@/components/callvox-ui/Button';

export default function MVNOsCTABand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold mb-4" style={{ fontSize: 'clamp(28px, 4vw, 36px)' }}>
            Talk to an MVNO specialist.
          </h2>
          <p className="text-navy-600 text-lg mb-8 max-w-2xl mx-auto">
            We work with MVNOs at every stage — from pre-launch planning to established operators optimising costs. No pitch deck required for the first call.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-cyan-500 text-white hover:bg-cyan-600"
            >
              Talk to an MVNO specialist →
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-navy-DEFAULT border-navy-300 hover:bg-navy-50"
            >
              Download MVNO platform guide
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
