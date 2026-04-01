'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/callvox-ui/Button';

export default function RateFinderCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-navy-DEFAULT py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl p-12 border border-cyan-DEFAULT/20"
        >
          <h2 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Get destination-level rates.
          </h2>

          <p className="text-navy-200 text-lg mb-8">
            Enter your email and target destinations. We'll send a custom rate deck within 4 business hours.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-3 rounded-lg bg-white text-navy-DEFAULT placeholder-navy-400 border-none outline-none"
            />
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-navy-DEFAULT hover:bg-gray-100 whitespace-nowrap"
            >
              {submitted ? 'Sent!' : 'Send my rate deck'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
