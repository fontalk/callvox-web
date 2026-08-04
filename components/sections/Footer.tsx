'use client'

import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Voice', href: '/products/voice' },
      { label: 'SMS / Messaging', href: '/products/sms' },
      { label: 'Airtime Top-Ups', href: '/products/airtime' },
      { label: 'eSIM', href: '/products/esim' },
      { label: 'DIDs / Numbers', href: '/products/dids' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'For Carriers', href: '/solutions/carriers' },
      { label: 'For MVNOs', href: '/solutions/mvnos' },
      { label: 'For Resellers', href: '/solutions/resellers' },
      { label: 'For Enterprises', href: '/solutions/enterprises' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Coverage', href: '/coverage' },
      { label: 'Developers', href: '/developers' },
      { label: 'Resources', href: '/resources' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#122C51] text-navy-200 pt-24 pb-12 border-t border-navy-800/50">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column — wider on large screens */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Callvox_logo_dark_sm-I1oKEm7SW72RmSC0iuxr5tVTsSmIPh.png"
                alt="Callvox"
                width={180}
                height={36}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '160px',
                }}
              />
            </Link>
            <p className="text-sm text-navy-300 mt-6 leading-relaxed">
              The unified wholesale platform for the world&apos;s fastest-growing markets.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-[11px] uppercase tracking-widest text-navy-300 font-semibold mb-6">
                {title}
              </h4>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-navy-300 hover:text-white hover:translate-x-0.5 transition-all duration-200 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800/30 pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-navy-400">
          <p>&copy; 2026 Callvox. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
