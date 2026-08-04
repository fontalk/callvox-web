'use client';

import { motion } from 'framer-motion';

const sdks = [
  { lang: 'Python', cmd: 'pip install callvox' },
  { lang: 'Node.js', cmd: 'npm install @callvox/sdk' },
  { lang: 'PHP', cmd: 'composer require callvox/callvox-php' },
  { lang: 'Go', cmd: 'go get github.com/callvox/callvox-go' }
];

export default function SDKQuickstarts() {
  return (
    <section className="bg-navy-50/40 py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16"
        >
          Start in your language.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sdks.map((sdk, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-navy-100 p-8 text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="text-navy-DEFAULT font-bold text-lg mb-6">
                {sdk.lang}
              </h3>
              <div className="bg-navy-50/60 rounded-lg p-4 font-mono text-xs text-navy-700 mb-6 overflow-x-auto">
                {sdk.cmd}
              </div>
              <a href="#" className="text-cyan-DEFAULT font-semibold text-sm flex items-center justify-center gap-2 hover:gap-3 transition-all">
                View quickstart
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-navy-600 text-center text-sm"
        >
          Postman collection available. GitHub examples repo. Full SDK source on GitHub (MIT licensed).
        </motion.p>
      </div>
    </section>
  );
}
