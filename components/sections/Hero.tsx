'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/callvox-ui/Badge'
import { Button } from '@/components/callvox-ui/Button'

const stats = [
  { value: '500+', label: 'Routes' },
  { value: '2 decades', label: 'Track record' },
  { value: '99.99%', label: 'Uptime SLA' },
  { value: '150+', label: 'Countries' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section className="relative min-h-[88vh] bg-white overflow-hidden">
      {/* Animated Globe Background */}
      <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
        <svg 
          className="w-[800px] h-[800px] opacity-[0.08] animate-globe origin-center"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Globe grid pattern */}
          <circle cx="200" cy="200" r="180" stroke="#0d2b4e" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="#0d2b4e" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="100" stroke="#0d2b4e" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60" stroke="#0d2b4e" strokeWidth="0.5" />
          {/* Vertical arcs */}
          <ellipse cx="200" cy="200" rx="180" ry="60" stroke="#0d2b4e" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="180" ry="120" stroke="#0d2b4e" strokeWidth="0.5" />
          <ellipse cx="200" cy="200" rx="60" ry="180" stroke="#0d2b4e" strokeWidth="0.5" transform="rotate(90 200 200)" />
          <ellipse cx="200" cy="200" rx="120" ry="180" stroke="#0d2b4e" strokeWidth="0.5" transform="rotate(90 200 200)" />
          {/* Diagonal lines */}
          <line x1="20" y1="200" x2="380" y2="200" stroke="#0d2b4e" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#0d2b4e" strokeWidth="0.5" />
          <line x1="60" y1="60" x2="340" y2="340" stroke="#0d2b4e" strokeWidth="0.5" />
          <line x1="340" y1="60" x2="60" y2="340" stroke="#0d2b4e" strokeWidth="0.5" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative hero-inner pt-32 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <Badge variant="default" className="text-xs">
              Trusted by 150+ carriers & MVNOs
            </Badge>
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={fadeUp} 
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-6 text-[clamp(40px,6vw,72px)] font-semibold text-navy-DEFAULT leading-[1.08] tracking-[-1.5px]"
          >
            The unified wholesale platform for the world&apos;s fastest-growing markets.
          </motion.h1>
          
          {/* Sub-headline */}
          <motion.p 
            variants={fadeUp} 
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-6 text-xl text-navy-600 leading-relaxed max-w-2xl"
          >
            Wholesale voice, messaging, airtime, eSIM & DIDs — unified
            for carriers, MVNOs & resellers in the world&apos;s fastest-growing markets.
          </motion.p>
          
          {/* Stats Strip */}
          <motion.div 
            variants={fadeUp} 
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap items-center gap-6 lg:gap-0"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="text-center lg:text-left">
                  <div className="text-[28px] font-semibold text-navy-DEFAULT">{stat.value}</div>
                  <div className="text-xs text-navy-400">{stat.label}</div>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden lg:block w-px h-10 bg-navy-200 mx-8" />
                )}
              </div>
            ))}
          </motion.div>
          
          {/* CTAs */}
          <motion.div 
            variants={fadeUp} 
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary" size="lg">
              Work with us &rarr;
            </Button>
            <Button variant="ghost" size="lg">
              Explore Products
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
