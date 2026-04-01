'use client';

import { motion } from 'framer-motion';
import { FileText, SimCard, Phone, Globe, ArrowRight } from '@phosphor-icons/react';

const assets = [
  { icon: FileText, title: 'SMS Compliance Guide 2026', desc: '10DLC, TCPA, GDPR, African sender ID — everything in one doc.' },
  { icon: SimCard, title: 'eSIM Wholesale Buyer\'s Guide', desc: 'GSMA certification explained, SM-DP+ architecture, business models.' },
  { icon: Phone, title: 'Wholesale Voice Rate Deck', desc: 'Indicative per-minute rates by destination and volume tier.', gated: true },
  { icon: Globe, title: 'Airtime Remittance Market Overview', desc: 'Cross-border airtime market sizing, operator coverage, remittance corridors.' }
];

export default function GatedAssets() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16"
        >
          Downloadable guides.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {assets.map((asset, idx) => {
            const Icon = asset.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                {asset.gated && (
                  <div className="absolute top-3 right-3 bg-cyan-DEFAULT text-navy-DEFAULT text-xs font-bold px-2 py-1 rounded">
                    Email
                  </div>
                )}
                <div className="bg-navy-50/40 rounded-xl p-8 border border-navy-100 h-full flex flex-col justify-between">
                  <div>
                    <Icon size={40} weight="duotone" className="text-cyan-DEFAULT mb-4" />
                    <h3 className="text-navy-DEFAULT font-bold text-lg mb-2">
                      {asset.title}
                    </h3>
                    <p className="text-navy-600 text-sm">
                      {asset.desc}
                    </p>
                  </div>
                  <a href="#" className="text-cyan-DEFAULT font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all mt-6">
                    Download PDF <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
