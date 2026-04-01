'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe } from '@phosphor-icons/react';

const complianceCards = [
  {
    title: 'US 10DLC',
    icon: ShieldCheck,
    desc: 'Full 10DLC registration support. Brand and campaign registration handled through our platform. Compliant with T-Mobile, AT&T, and Verizon requirements.',
  },
  {
    title: 'TCPA & GDPR',
    icon: Lock,
    desc: 'Consent management guidance. Opt-out handling. European ePrivacy Directive compliance for EU-bound traffic.',
  },
  {
    title: 'African Sender ID',
    icon: Globe,
    desc: 'Registered sender IDs for Nigeria (NCC), South Africa (ICASA), Kenya (CA), Ghana (NCA) and 12 more markets.',
  },
];

export default function ComplianceSection() {
  return (
    <section className="bg-navy-50 py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="mb-6">
            <span className="text-cyan text-xs font-semibold uppercase tracking-wider">Compliance</span>
          </div>
          <h2 className="text-navy-DEFAULT font-semibold text-4xl mb-6">
            The compliance burden is on us, not you.
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            44% of promotional SMS is now blocked by carrier spam filters. T-Mobile fines up to $10,000 per 10DLC violation. We handle the complexity so your platform doesn't carry the risk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {complianceCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 space-y-4"
              >
                <Icon size={32} weight="duotone" className="text-cyan" />
                <h3 className="font-semibold text-navy-DEFAULT text-lg">{card.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
