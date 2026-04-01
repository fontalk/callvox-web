'use client'

import { Logo } from '@/components/Logo'
import { LinkedinLogo, XLogo } from '@phosphor-icons/react'

const footerLinks = {
  products: {
    title: 'Products',
    links: ['Voice', 'SMS / Messaging', 'Airtime Top-Ups', 'eSIM', 'DIDs / Numbers'],
  },
  solutions: {
    title: 'Solutions',
    links: ['For Carriers', 'For MVNOs', 'For Resellers', 'For Enterprises'],
  },
  company: {
    title: 'Company',
    links: ['About', 'Network', 'Compliance', 'Security', 'Pricing', 'Developers', 'Blog', 'Status'],
  },
}

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Logo className="w-[140px] h-auto" reversed />
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
              {footerLinks.products.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">
                    {link}
                  </a>
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
              {footerLinks.solutions.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">
                    {link}
                  </a>
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
              {footerLinks.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-navy-200 hover:text-white transition-colors">
                    {link}
                  </a>
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
            <a href="#" className="text-navy-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinLogo weight="fill" className="w-5 h-5" />
            </a>
            <a href="#" className="text-navy-400 hover:text-white transition-colors" aria-label="X (Twitter)">
              <XLogo weight="fill" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
