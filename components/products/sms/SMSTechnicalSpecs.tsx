'use client';

import { motion } from 'framer-motion';

const specs = [
  { label: 'Protocols', value: 'REST API + SMPP v3.4 / v5.0' },
  { label: 'Throughput', value: 'Up to 25,000 msg/second' },
  { label: 'Sender ID types', value: 'Short codes, long codes, alphanumeric, toll-free' },
  { label: 'Concatenation', value: 'Up to 10 message segments' },
  { label: 'Unicode', value: 'Full UCS-2 / UTF-16 support' },
  { label: 'Encoding', value: 'GSM-7 (160 chars), UCS-2 (70 chars)' },
  { label: 'DLR support', value: 'Delivered, undelivered, buffered, expired, rejected' },
  { label: 'Failover', value: 'Automatic route failover with configurable retry logic' },
];

const senderComparison = [
  {
    type: 'Short Code',
    bestFor: '2FA, alerts',
    throughput: '100+ msg/sec',
    twoWay: 'Yes',
    setupTime: '4-6 weeks',
    countries: '15+',
  },
  {
    type: 'Long Code',
    bestFor: 'Transactional, SMS API',
    throughput: '1-3 msg/sec',
    twoWay: 'Yes',
    setupTime: '1-2 days',
    countries: '200+',
  },
  {
    type: 'Alphanumeric',
    bestFor: 'Brand messaging',
    throughput: '10-50 msg/sec',
    twoWay: 'No',
    setupTime: 'Instant',
    countries: '150+',
  },
];

export default function SMSTechnicalSpecs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-navy-DEFAULT font-semibold text-4xl mb-12">Technical specifications</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border-b border-navy-100 pb-4 last:border-b-0"
                >
                  <p className="text-navy-600 text-sm font-medium mb-1">{spec.label}</p>
                  <p className="text-navy-DEFAULT font-semibold">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-x-auto"
            >
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    {['Type', 'Best For', 'Throughput', '2-Way', 'Setup', 'Countries'].map((h) => (
                      <th key={h} className="text-left py-3 px-4 font-semibold text-navy-DEFAULT bg-navy-50">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {senderComparison.map((row, i) => (
                    <tr key={i} className="border-b border-navy-100 hover:bg-navy-50">
                      <td className="py-3 px-4 font-semibold text-navy-DEFAULT">{row.type}</td>
                      <td className="py-3 px-4 text-navy-600">{row.bestFor}</td>
                      <td className="py-3 px-4 text-navy-600">{row.throughput}</td>
                      <td className="py-3 px-4 text-navy-600">{row.twoWay}</td>
                      <td className="py-3 px-4 text-navy-600">{row.setupTime}</td>
                      <td className="py-3 px-4 text-navy-600">{row.countries}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
