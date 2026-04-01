'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';

export default function EnterprisesHero() {
  return (
    <section className="relative bg-navy-DEFAULT py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-cyan-DEFAULT rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="text-sm font-semibold text-navy-400">
              Solutions → For Enterprises
            </span>
          </div>

          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-DEFAULT/20 border border-cyan-DEFAULT/40 text-cyan-DEFAULT text-xs font-semibold uppercase tracking-wider">
              For Enterprise Businesses
            </span>
          </div>

          <h1 className="text-white font-bold mb-6" style={{ fontSize: 'clamp(36px, 8vw, 52px)' }}>
            Enterprise-grade voice and numbers. Without enterprise procurement cycles.
          </h1>

          <p className="text-navy-200 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            SIP trunking, virtual numbers, and HD voice for businesses running on legacy PSTN or fragmented UCaaS providers. 40–70% cost reduction. 24/7 support. ISO 27001 certified.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-navy-DEFAULT hover:bg-gray-100"
            >
              Get a Quote <ArrowRight size={20} className="ml-2" weight="bold" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
