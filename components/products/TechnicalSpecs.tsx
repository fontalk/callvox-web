'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Certificate } from '@phosphor-icons/react';

export function TechnicalSpecs() {
  const specs = [
    { label: 'Codecs', value: 'G.711 (a-law / μ-law), G.729, G.722 HD' },
    { label: 'Signalling', value: 'SIP (RFC 3261), TLS + SRTP' },
    { label: 'Transport', value: 'UDP, TCP, TLS' },
    { label: 'Latency', value: '<150ms one-way (tier-1 routes)' },
    { label: 'DTMF', value: 'RFC 2833, SIP INFO, In-band' },
    { label: 'Caller ID', value: 'Full CLI delivery, STIR/SHAKEN attestation A/B/C' },
    { label: 'Billing', value: '6-second increments, real-time CDRs' },
    { label: 'Failover', value: 'Automatic route failover <3 seconds' },
  ];

  const compliance = [
    {
      icon: ShieldCheck,
      title: 'STIR/SHAKEN',
      description: 'FCC-mandated caller ID authentication. All US-bound traffic carries full attestation. Compliant with the TRACED Act.',
    },
    {
      icon: Lock,
      title: 'GDPR',
      description: 'European CDR data processed and stored in compliance with GDPR Article 28. Data processing agreements available.',
    },
    {
      icon: Certificate,
      title: 'Country licensing',
      description: 'Active regulatory approvals and local partnerships across Nigeria, Ghana, Kenya, India, Brazil, and Mexico.',
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-cyan-DEFAULT font-medium mb-4">Technical Specifications</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-navy-DEFAULT">Everything a carrier needs to evaluate.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Spec table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-0">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className={`py-4 px-6 ${index !== specs.length - 1 ? 'border-b border-navy-100' : ''}`}
                >
                  <p className="text-sm font-semibold text-navy-DEFAULT mb-1">{spec.label}</p>
                  <p className="text-navy-600">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Compliance cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {compliance.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-navy-50/50 rounded-lg p-6 border border-navy-100"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon size={28} weight="duotone" className="text-cyan-DEFAULT mt-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-DEFAULT mb-2">{item.title}</h3>
                      <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
