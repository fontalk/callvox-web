'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from '@phosphor-icons/react';

const compliances = [
  {
    title: 'ISO 27001',
    description: 'Certified information security management',
    detail: 'annual audit'
  },
  {
    title: 'SOC 2 Type II',
    description: 'Security, availability, confidentiality controls',
    detail: 'available on NDA'
  },
  {
    title: 'GDPR / HIPAA',
    description: 'Data processing agreements available',
    detail: 'HIPAA BAA on enterprise tier'
  }
];

export default function ComplianceSecurity() {
  return (
    <section className="bg-navy-DEFAULT py-20 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {compliances.map((compliance, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-navy-800 rounded-xl border border-navy-700"
            >
              <CheckCircle size={32} weight="duotone" className="text-cyan-DEFAULT mb-4" />
              <h3 className="text-white font-bold text-xl mb-3">
                {compliance.title}
              </h3>
              <p className="text-navy-200 mb-2">
                {compliance.description}
              </p>
              <p className="text-navy-400 text-sm">
                {compliance.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
