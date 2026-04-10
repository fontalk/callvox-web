'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function EnterprisesCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Talk to a solutions engineer.
          </h2>

          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            We&apos;ll review your current voice setup and show you exactly what migration to Callvox looks like — technically and commercially.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
            >
              Get a quote <ArrowRight size={20} className="ml-2" weight="bold" />
            </Button>
            <Button
              variant="white-ghost"
              size="lg"
            >
              Start free trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
