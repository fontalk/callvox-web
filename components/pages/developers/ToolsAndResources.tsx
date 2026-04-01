'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlass, ArrowsClockwise, Flask, ClockCounterClockwise } from '@phosphor-icons/react';

const tools = [
  {
    icon: MagnifyingGlass,
    title: 'Interactive API explorer',
    description: 'Test every endpoint in the browser. No Postman required.'
  },
  {
    icon: ArrowsClockwise,
    title: 'Webhook testing',
    description: 'Inspect delivery receipts and event payloads in real time.'
  },
  {
    icon: Flask,
    title: 'Sandbox environment',
    description: 'Identical to production. Fake traffic, real responses.'
  },
  {
    icon: ClockCounterClockwise,
    title: 'Public changelog',
    description: 'Versioned API updates, deprecation notices, migration guides.'
  }
];

export default function ToolsAndResources() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white font-bold text-4xl md:text-5xl mb-16"
        >
          Everything a developer needs.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#0a2847] rounded-xl p-8 border border-[#1a3a52] hover:border-cyan-DEFAULT/50 transition-colors"
              >
                <Icon size={36} weight="duotone" className="text-cyan-DEFAULT mb-6" />
                <h3 className="text-white font-bold text-lg mb-3">
                  {tool.title}
                </h3>
                <p className="text-navy-300 text-sm">
                  {tool.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
