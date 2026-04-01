import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, ChatDots, Wallet, SimCard, Phone as DID } from '@phosphor-icons/react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResellerAdvantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const products = [
    { name: 'Voice', icon: Phone, min: 15, max: 35 },
    { name: 'SMS', icon: ChatDots, min: 20, max: 45 },
    { name: 'Airtime', icon: Wallet, min: 5, max: 15 },
    { name: 'eSIM', icon: SimCard, min: 25, max: 50 },
    { name: 'DIDs', icon: DID, min: 30, max: 60 },
  ];

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-sans font-bold text-navy-DEFAULT text-4xl mb-4"
        >
          Five revenue streams. One wholesale relationship.
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-200 text-lg max-w-3xl mb-16"
        >
          Most resellers manage multiple wholesale accounts across fragmented providers. Callvox consolidates all five product lines — letting you offer more to clients while reducing your back-office overhead.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                custom={2 + i}
                variants={fadeUpVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                className="bg-navy-50/50 p-6 rounded-lg border border-navy-100"
              >
                <Icon weight="duotone" size={32} className="text-cyan-500 mb-4" />
                <h3 className="font-semibold text-navy-DEFAULT text-lg mb-3">{product.name}</h3>
                <div className="mb-4">
                  <div className="text-sm text-navy-200 mb-2">{product.min}–{product.max}% margin</div>
                  <div className="w-full bg-navy-200/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-2 rounded-full"
                      style={{
                        width: `${((product.max - product.min) / 100) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          custom={7}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-sm text-navy-300 mt-8 italic"
        >
          Indicative ranges. Actual margins depend on volume tier and destination mix.
        </motion.p>
      </div>
    </section>
  );
}
