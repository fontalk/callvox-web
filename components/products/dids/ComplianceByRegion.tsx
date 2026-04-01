'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ComplianceByRegion() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const regions = [
    {
      name: 'USA',
      description: 'E911 mandatory for voice-capable numbers. CNAM registration. STIR/SHAKEN on all outbound. 10DLC for SMS.',
    },
    {
      name: 'Europe',
      description: 'Many EU markets require local address proof for geographic numbers. EEA data protection for CDRs. VAT number requirements for invoicing.',
    },
    {
      name: 'Africa & EM',
      description: 'Local licensing or partnership required in most markets. We hold or partner for active approvals in Nigeria, Kenya, South Africa, UAE, India.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Compliance varies by country. We handle it.
          </h2>
          <p className="text-navy-200 text-lg leading-relaxed">
            Many countries require proof of local presence, registered addresses, or local licensing for number assignment. We navigate the regulatory requirements in every market we operate.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-navy-800 rounded-lg p-6 border border-navy-700 hover:border-cyan-DEFAULT transition-colors"
            >
              <h3 className="text-white font-bold text-xl mb-3">{region.name}</h3>
              <p className="text-navy-200 leading-relaxed text-sm">{region.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
