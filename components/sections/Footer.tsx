'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LinkedinLogo, XLogo } from '@phosphor-icons/react'

const footerLinks = {
  products: {
    title: 'Products',
    links: [
      { label: 'Voice', href: '/products/voice' },
      { label: 'SMS / Messaging', href: '/products/sms' },
      { label: 'Airtime Top-Ups', href: '/products/airtime' },
      { label: 'eSIM', href: '/products/esim' },
      { label: 'DIDs / Numbers', href: '/products/dids' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'For Carriers', href: '/solutions/carriers' },
      { label: 'For MVNOs', href: '/solutions/mvnos' },
      { label: 'For Resellers', href: '/solutions/resellers' },
      { label: 'For Enterprises', href: '/solutions/enterprises' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Coverage', href: '/coverage' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Developers', href: '/developers' },
      { label: 'Resources', href: '/resources' },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Callvox_logo_dark_sm-I1oKEm7SW72RmSC0iuxr5tVTsSmIPh.png"
                alt="Callvox"
                width={180}
                height={36}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '180px',
                }}
              />
            </Link>
            <p className="text-sm text-navy-400 mt-4 max-w-xs leading-relaxed">
              The unified wholesale platform for the world&apos;s fastest-growing markets.
            </p>
            <p className="text-xs text-navy-400 mt-8">
              &copy; 2026 Callvox LLC. All rights reserved.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[2px] text-navy-400 mb-4">
              {footerLinks.products.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[2px] text-navy-400 mb-4">
              {footerLinks.solutions.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.solutions.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[2px] text-navy-400 mb-4">
              {footerLinks.company.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-navy-200 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-navy-400">
            ISO 27001 · SOC 2 Type II · STIR/SHAKEN · GDPR
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/callvox" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinLogo weight="fill" className="w-5 h-5" />
            </a>
            <a href="https://x.com/callvoxnet" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" aria-label="X (Twitter)">
              <XLogo weight="fill" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
