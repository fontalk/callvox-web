'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function DIDsCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Provision your first number in under 60 seconds.
          </h2>
          <p className="text-navy-200 text-lg mb-10 leading-relaxed">
            Self-service via portal. API access included on all accounts. Free porting — no lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" className="group">
              Check Number Availability
            </Button>
            <Button variant="white-ghost">Get wholesale rates</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
