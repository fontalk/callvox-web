'use client';

import { motion } from 'framer-motion';

const timeline = [
  { year: '2007', label: 'Founded as voice-only carrier, LatAm & Africa focus' },
  { year: '2012', label: '100+ direct routes, expanded to South Asia & MENA' },
  { year: '2019', label: 'Launched SMS / A2P messaging product' },
  { year: '2024', label: 'Full platform: eSIM, Airtime, DIDs added' }
];

export default function FoundingStory() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-navy-DEFAULT font-bold text-4xl mb-12">
            Built for the routes everyone else under-invested in.
          </h2>

          <div className="space-y-6 mb-16 text-navy-600 leading-relaxed text-lg">
            <p>
              Callvox was founded in 2007 with a specific thesis: the wholesale telecom industry was obsessed with US and European traffic, and almost everyone was under-investing in Latin America, Africa, South Asia, and the Middle East. These were the fastest-growing mobile markets in the world — and they were being served by aggregators with shallow coverage and inconsistent quality.
            </p>
            <p>
              We built direct interconnects in these markets before it was fashionable. We developed carrier relationships in Nigeria, Ghana, Kenya, India, Pakistan, Mexico, and Brazil when most wholesale providers were routing through aggregators. That depth is what makes our coverage different — and it's why carriers and MVNOs in these corridors choose us.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8"
        >
          {timeline.map((item, idx) => (
            <div key={idx} className="relative">
              {idx < timeline.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-DEFAULT/40 to-transparent"></div>
              )}
              <div className="relative z-10 bg-cyan-DEFAULT/10 border border-cyan-DEFAULT/30 rounded-lg p-6">
                <div className="text-cyan-DEFAULT font-bold text-2xl mb-2">{item.year}</div>
                <p className="text-navy-600">{item.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
