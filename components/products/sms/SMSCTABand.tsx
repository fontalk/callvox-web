'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/callvox-ui/Button';

export default function SMSCTABand() {
  return (
    <section className="bg-white py-16 border-t border-navy-100">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-navy-DEFAULT font-semibold text-4xl">Stop losing revenue to failed deliveries.</h2>
          <p className="text-navy-600 text-lg">
            Talk to a messaging specialist within 1 business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button variant="primary">
            Talk to a specialist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
