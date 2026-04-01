'use client';

import { motion } from 'framer-motion';

export function QualityMetricsStrip() {
  const metrics = [
    {
      label: 'ASR 92%+',
      description: 'Answer-seizure ratio on premium routes',
    },
    {
      label: 'PDD <5s',
      description: 'Post-dial delay across all destinations',
    },
    {
      label: 'ACD 4.2 min',
      description: 'Average call duration (network health signal)',
    },
    {
      label: 'NER 99.1%',
      description: 'Network effectiveness ratio',
    },
  ];

  return (
    <section className="bg-white border-b border-navy-100 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs uppercase tracking-widest text-cyan-DEFAULT font-medium mb-12">The Numbers Carriers Care About</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`text-center ${index < metrics.length - 1 ? 'border-r border-navy-100 pr-8' : ''}`}
            >
              <p className="text-2xl md:text-3xl font-bold text-navy-DEFAULT mb-2">{metric.label}</p>
              <p className="text-sm text-navy-600">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
