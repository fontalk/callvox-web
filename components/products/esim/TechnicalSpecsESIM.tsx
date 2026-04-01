'use client';

import { motion } from 'framer-motion';

export function TechnicalSpecsESIM() {
  const specs = [
    {
      label: 'Specification',
      value: 'GSMA SGP.22 (consumer), SGP.32 (IoT)',
    },
    {
      label: 'Certification',
      value: 'SAS-SM (Subscription Manager Security)',
    },
    {
      label: 'Profile delivery',
      value: 'Over-the-air (OTA), no physical shipping',
    },
    {
      label: 'Multi-profile',
      value: 'Yes — up to 8 profiles per eUICC',
    },
    {
      label: 'Encryption',
      value: 'TLS 1.3, HSM-based key management',
    },
    {
      label: 'Device compatibility',
      value: 'Apple, Samsung, Google Pixel, Qualcomm-based IoT',
    },
    {
      label: 'API',
      value: 'REST + GSMA-standard ES2+ / ES9+ interfaces',
    },
    {
      label: 'White-label',
      value: 'Full RSP platform white-labelling available',
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="border-b border-navy-100 pb-4 last:border-0">
                  <div className="text-sm font-semibold text-navy-600 mb-2">{spec.label}</div>
                  <div className="text-base text-navy-DEFAULT">{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-navy-DEFAULT text-white rounded-lg p-8">
              <div className="text-xs font-bold uppercase tracking-wider mb-4 opacity-80">
                Certification
              </div>
              <h3 className="text-xl font-bold mb-6">GSMA SAS-SM Certified</h3>
              <p className="text-sm text-navy-100 leading-relaxed mb-6">
                The GSMA Security Accreditation Scheme for Subscription Management is the mandatory certification for operating SM-DP+ platforms. Without it, eSIM provisioning is not possible at commercial scale.
              </p>
              <a href="#" className="text-cyan-DEFAULT text-sm font-semibold hover:opacity-80 transition-opacity">
                certification details →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
