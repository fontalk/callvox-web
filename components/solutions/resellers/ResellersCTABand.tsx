import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResellersCTABand() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-white py-20 border-t border-navy-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="font-sans font-bold text-navy-DEFAULT text-4xl mb-4"
        >
          Ready to add five new revenue streams?
        </motion.h2>

        <motion.p
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto"
        >
          Partner onboarding takes under 48 hours. API access, portal setup, and your first rate deck included.
        </motion.p>

        <motion.div
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="bg-navy-DEFAULT text-white px-8 py-3 font-semibold rounded-lg hover:bg-navy-800 transition">
            Become a partner →
          </button>
          <button className="border-2 border-navy-300 text-navy-DEFAULT px-8 py-3 font-semibold rounded-lg hover:bg-navy-50 transition">
            See white-label options
          </button>
        </motion.div>
      </div>
    </section>
  );
}
