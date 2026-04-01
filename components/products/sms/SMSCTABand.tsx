'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function SMSCTABand() {
  return (
    <section className="bg-white py-16 border-t border-gray-200">
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
            Get a rate card and talk to a messaging specialist within 1 business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button variant="primary" className="bg-navy-DEFAULT text-white hover:bg-navy-600">
            Download SMS Rate Card <ArrowRight size={20} weight="bold" className="ml-2" />
          </Button>
          <Button variant="ghost" className="text-navy-DEFAULT border-navy-DEFAULT hover:bg-navy-50">
            Talk to a specialist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
