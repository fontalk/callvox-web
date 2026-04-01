'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { Button } from '@/components/callvox-ui/Button';
import { useEffect, useState } from 'react';

export default function SMSHero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 98.4;
    const duration = 2000;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[60vh] bg-navy-DEFAULT overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-4">
                <div className="px-3 py-1.5 bg-cyan/10 border border-cyan/30 rounded-full">
                  <span className="text-cyan text-xs font-semibold uppercase tracking-wider">
                    A2P SMS & MESSAGING
                  </span>
                </div>
              </div>

              <h1 className="text-white font-semibold text-balance" style={{ fontSize: 'clamp(36px, 7vw, 56px)' }}>
                98%+ delivery. Zero grey routes. Full compliance.
              </h1>
            </div>

            <p className="text-navy-200 text-lg max-w-xl">
              Wholesale A2P messaging infrastructure for carriers, aggregators and platforms. Direct carrier connections across 200+ countries. 10DLC, TCPA and GDPR compliance built in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" className="bg-white text-navy-DEFAULT hover:bg-gray-100">
                Download SMS Rate Card <ArrowRight size={20} weight="bold" className="ml-2" />
              </Button>
              <Button variant="ghost" className="text-white border-white hover:bg-white/10">
                View API Docs
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="text-center space-y-4">
              <div className="text-8xl font-bold text-cyan">
                {count.toFixed(1)}%
              </div>
              <div className="space-y-2">
                <p className="text-navy-200 text-sm">average delivery rate</p>
                <p className="text-navy-400 text-xs">last 30 days</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
