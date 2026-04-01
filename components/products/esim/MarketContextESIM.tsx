'use client';

import { motion } from 'framer-motion';

export function MarketContextESIM() {
  const stats = [
    {
      number: '65%',
      label: 'New smartphones support eSIM',
    },
    {
      number: '16.5%',
      label: 'Market CAGR through 2033',
    },
    {
      number: '68%',
      label: 'eSIM shipments are M2M/IoT',
    },
    {
      number: '<10',
      label: 'Wholesale providers offer eSIM + voice + SMS',
      highlight: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-navy-100">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`p-6 rounded-lg ${
                stat.highlight
                  ? 'bg-cyan-50 border-2 border-cyan-DEFAULT'
                  : 'bg-white border border-navy-100'
              }`}
            >
              <div className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.highlight ? 'text-cyan-DEFAULT' : 'text-navy-DEFAULT'}`}>
                {stat.number}
              </div>
              <p className={`text-sm sm:text-base ${stat.highlight ? 'text-cyan-900' : 'text-navy-600'}`}>
                {stat.label}
              </p>
              {stat.highlight && (
                <p className="text-xs text-cyan-DEFAULT font-semibold mt-3">
                  Callvox is one of them.
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
