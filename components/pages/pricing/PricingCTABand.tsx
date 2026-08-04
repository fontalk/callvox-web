'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/callvox-ui/Button';

export default function PricingCTABand() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-navy-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-6">
            Need a custom quote?
          </h2>

          <p className="text-navy-600 text-lg mb-12 leading-relaxed">
            Rate decks for specific destinations, volume-based pricing, and enterprise contract structures — available within one business day.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
            >
              Talk to a specialist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
