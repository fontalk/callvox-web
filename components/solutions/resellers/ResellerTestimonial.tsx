import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from '@phosphor-icons/react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ResellerTestimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-DEFAULT py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <Quote weight="duotone" size={40} className="text-cyan-500 mx-auto mb-8" />
          <blockquote className="text-white text-3xl font-semibold mb-8 leading-relaxed">
            The white-label portal is the product. We onboarded 12 enterprise clients in Q1 without adding a single person to our ops team. The automated billing alone saved us 20 hours a month.
          </blockquote>
          <p className="text-navy-200">
            <strong className="text-cyan-300">CEO, LatAm Telecom Reseller</strong> · 2.1M top-ups/month
          </p>
        </motion.div>
      </div>
    </section>
  );
}
