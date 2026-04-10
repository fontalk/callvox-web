'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function AboutCTABand() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-6">
            17 years of wholesale experience. One platform.
          </h2>

          <p className="text-navy-200 text-lg mb-12 leading-relaxed">
            Talk to the team that's been routing traffic to these markets since before it was a growth story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="white"
              size="lg"
            >
              Get in touch <ArrowRight size={20} className="ml-2" weight="bold" />
            </Button>
            <Button
              variant="white-ghost"
              size="lg"
            >
              View the platform
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
