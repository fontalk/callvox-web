'use client';

import { motion } from 'framer-motion';

const markets = [
  { name: 'Lagos', x: 25, y: 55 },
  { name: 'Nairobi', x: 35, y: 50 },
  { name: 'Johannesburg', x: 32, y: 70 },
  { name: 'Mumbai', x: 50, y: 40 },
  { name: 'Delhi', x: 48, y: 35 },
  { name: 'Dhaka', x: 55, y: 38 },
  { name: 'Mexico City', x: 15, y: 45 },
  { name: 'São Paulo', x: 20, y: 62 },
  { name: 'Dubai', x: 42, y: 42 },
  { name: 'Cairo', x: 38, y: 42 }
];

export default function InteractiveMap() {
  return (
    <section className="bg-white py-8">
      <style>{`
        @keyframes pulse-dot {
          0% { r: 8; opacity: 1; }
          50% { r: 12; opacity: 0.5; }
          100% { r: 8; opacity: 1; }
        }
        .pulse-market {
          animation: pulse-dot 2s infinite;
        }
      `}</style>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-navy-900 rounded-2xl p-8 min-h-96"
        >
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full min-h-96"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified world map outline */}
            <rect width="100" height="60" fill="#0f1419" />
            
            {/* Africa highlight */}
            <circle cx="28" cy="50" r="15" fill="#06b6d4" opacity="0.2" />
            
            {/* South Asia highlight */}
            <circle cx="52" cy="38" r="12" fill="#06b6d4" opacity="0.2" />
            
            {/* LatAm highlight */}
            <circle cx="18" cy="45" r="10" fill="#06b6d4" opacity="0.2" />
            
            {/* Middle East highlight */}
            <circle cx="40" cy="40" r="8" fill="#06b6d4" opacity="0.2" />

            {/* Pulsing market dots */}
            {markets.map((market, idx) => (
              <circle
                key={idx}
                cx={market.x}
                cy={market.y}
                r="8"
                fill="#06b6d4"
                className="pulse-market"
                style={{ animationDelay: `${idx * 0.1}s` }}
              />
            ))}
          </svg>

          {/* Legend */}
          <div className="mt-6 flex gap-6 text-sm text-navy-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-DEFAULT"></div>
              <span>Active coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-navy-600"></div>
              <span>Limited coverage</span>
            </div>
          </div>

          {/* Note */}
          <p className="text-xs text-navy-400 italic mt-4">
            Full interactive map launching with developer portal. Check coverage by destination →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
