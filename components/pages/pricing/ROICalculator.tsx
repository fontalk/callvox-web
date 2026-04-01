'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const rates: Record<string, number> = {
  'US/Canada': 0.015,
  'Europe': 0.025,
  'Africa': 0.055,
  'South Asia': 0.04,
  'Latin America': 0.04,
  'Middle East': 0.05
};

export default function ROICalculator() {
  const [minutes, setMinutes] = useState('');
  const [currentRate, setCurrentRate] = useState('');
  const [region, setRegion] = useState('US/Canada');

  const results = useMemo(() => {
    if (!minutes || !currentRate) return null;
    
    const minNum = parseFloat(minutes);
    const rateNum = parseFloat(currentRate);
    const callvoxRate = rates[region] || 0.015;

    const currentSpend = minNum * rateNum;
    const callvoxSpend = minNum * callvoxRate;
    const monthlySaving = currentSpend - callvoxSpend;
    const annualSaving = monthlySaving * 12;

    return { currentSpend, callvoxSpend, monthlySaving, annualSaving };
  }, [minutes, currentRate, region]);

  return (
    <section id="calculator" className="bg-white py-20 md:py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-navy-DEFAULT font-bold text-4xl md:text-5xl mb-16"
        >
          Estimate your savings vs. current provider.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-navy-DEFAULT font-semibold mb-2">Monthly call minutes</label>
              <input
                type="number"
                placeholder="e.g. 500,000"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:border-cyan-DEFAULT"
              />
            </div>

            <div>
              <label className="block text-navy-DEFAULT font-semibold mb-2">Current per-minute rate ($)</label>
              <input
                type="number"
                placeholder="e.g. 0.05"
                step="0.001"
                value={currentRate}
                onChange={(e) => setCurrentRate(e.target.value)}
                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:border-cyan-DEFAULT"
              />
            </div>

            <div>
              <label className="block text-navy-DEFAULT font-semibold mb-2">Primary destination region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full px-4 py-3 border border-navy-200 rounded-lg focus:outline-none focus:border-cyan-DEFAULT"
              >
                {Object.keys(rates).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {results && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-DEFAULT text-white rounded-xl p-8"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-navy-200 text-sm mb-1">Your current spend</p>
                  <p className="text-3xl font-bold">${results.currentSpend.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / month</p>
                </div>

                <div>
                  <p className="text-navy-200 text-sm mb-1">Estimated Callvox cost</p>
                  <p className="text-3xl font-bold">${results.callvoxSpend.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / month</p>
                </div>

                <div className="border-t border-navy-400 pt-6">
                  <p className="text-navy-200 text-sm mb-2">Estimated monthly saving</p>
                  <p className="text-4xl font-bold text-cyan-DEFAULT mb-4">${results.monthlySaving.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className="text-navy-200 text-sm">Estimated annual saving: <span className="font-semibold text-white">${results.annualSaving.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></p>
                </div>

                <a href="#" className="inline-flex items-center gap-2 text-cyan-DEFAULT font-semibold hover:gap-3 transition-all mt-6">
                  Get an exact quote based on your actual routes <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
