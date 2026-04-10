'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function DeveloperCTABand() {
  return (
    <section className="bg-white border-t border-navy-100 py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-6">
            Ready to build?
          </h2>

          <p className="text-navy-600 text-lg mb-12">
            Sandbox access is instant. Production activation within one business day for verified accounts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
            >
              Get API Keys <ArrowRight size={20} className="ml-2" weight="bold" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
            >
              Read the Docs <ArrowRight size={20} className="ml-2" weight="bold" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
