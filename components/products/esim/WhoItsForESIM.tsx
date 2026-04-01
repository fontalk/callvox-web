'use client';

import { motion } from 'framer-motion';
import { Sim as SimCard, Airplane, HardDrives } from '@phosphor-icons/react';

export function WhoItsForESIM() {
  const cards = [
    {
      icon: SimCard,
      title: 'MVNOs',
      description: 'Launch or expand your MVNO with a white-label RSP (Remote SIM Provisioning) platform. Over-the-air profile delivery, subscriber management, and multi-carrier connectivity bundled.',
    },
    {
      icon: Airplane,
      title: 'Travel operators',
      description: 'Offer eSIM data plans to travellers without physical SIM inventory. Instant profile delivery to SGP.22-compatible devices at point of booking.',
    },
    {
      icon: HardDrives,
      title: 'Enterprise IoT',
      description: 'Deploy connected devices at scale with GSMA SGP.32 (eSIM IoT spec). Eliminate SIM logistics. Manage profiles OTA across your entire device fleet.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-DEFAULT">
            Three entry points. One platform.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="rounded-lg border border-navy-100 bg-white p-8 hover:shadow-lg transition-shadow">
                <Icon weight="duotone" size={40} className="text-cyan-DEFAULT mb-4" />
                <h3 className="text-xl font-semibold text-navy-DEFAULT mb-3">{card.title}</h3>
                <p className="text-navy-600 text-base leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
