'use client';

import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

export function TechnicalArchitecture() {
  const specs = [
    'GSMA SGP.22 (consumer)',
    'GSMA SGP.32 (IoT)',
    'SAS-SM certified',
    'TLS + HSM key management',
  ];

  const layers = [
    {
      title: 'Your Platform / MVNO / Device',
      bgColor: 'bg-navy-100',
      isHighlight: false,
    },
    {
      title: 'LPA (Local Profile Assistant)',
      subtitle: 'device-side',
      bgColor: 'bg-navy-50',
      isHighlight: false,
    },
    {
      title: 'Callvox SM-DP+',
      subtitle: 'GSMA SAS-SM certified',
      bgColor: 'bg-navy-50',
      borderColor: 'border-cyan-DEFAULT',
      isHighlight: true,
    },
    {
      title: 'eUICC',
      subtitle: 'embedded SIM chip in device',
      bgColor: 'bg-navy-50',
      isHighlight: false,
    },
  ];

  return (
    <section className="bg-navy-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-xs font-semibold text-cyan-DEFAULT uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-DEFAULT mb-6">
            The eSIM stack, explained.
          </h2>
          <p className="text-navy-600 text-lg leading-relaxed">
            eSIM provisioning requires certified infrastructure at every layer. Callvox operates SM-DP+ (Subscription Manager Data Preparation+) infrastructure certified to GSMA SAS-SM standards.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {layers.map((layer, idx) => (
                <div key={idx}>
                  <div
                    className={`${layer.bgColor} ${
                      layer.isHighlight ? `border-2 ${layer.borderColor}` : 'border border-navy-100'
                    } rounded-lg p-6`}
                  >
                    <h3 className={`font-semibold text-base ${layer.isHighlight ? 'text-navy-DEFAULT' : 'text-navy-600'}`}>
                      {layer.title}
                    </h3>
                    {layer.subtitle && (
                      <p className="text-sm text-navy-500 mt-1">{layer.subtitle}</p>
                    )}
                  </div>
                  {idx < layers.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="text-cyan-DEFAULT text-lg">↕</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="border border-navy-100 bg-white rounded-lg px-4 py-3 flex items-start gap-3"
              >
                <Check weight="bold" size={18} className="text-cyan-DEFAULT flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-600">{spec}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
