'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './Logo'
import { Button } from './callvox-ui/Button'
import {
  Phone,
  ChatDots,
  Lightning,
  SimCard,
  PhoneIncoming,
  Buildings,
  Broadcast,
  Users,
  ArrowUpRight,
  List,
  X,
  CaretDown,
  ArrowRight,
} from '@phosphor-icons/react'

const products = [
  { icon: Phone,         name: 'Wholesale Voice',    desc: 'Termination & origination across 500+ routes', href: '/products/voice' },
  { icon: ChatDots,      name: 'SMS / Messaging',    desc: 'A2P SMS, SMPP & REST delivery at scale',        href: '/products/sms' },
  { icon: Lightning,     name: 'Airtime Top-Ups',    desc: 'International mobile recharge via API',          href: '/products/airtime' },
  { icon: SimCard,       name: 'eSIM',               desc: 'Wholesale eSIM provisioning (SGP.32)',           href: '/products/esim' },
  { icon: PhoneIncoming, name: 'DIDs / Numbers',     desc: 'Virtual numbers in 90+ countries',              href: '/products/dids' },
]

const solutions = [
  { icon: Broadcast, name: 'For Carriers',    href: '/solutions/carriers' },
  { icon: SimCard,   name: 'For MVNOs',       href: '/solutions/mvnos' },
  { icon: ArrowUpRight, name: 'For Resellers', href: '/solutions/resellers' },
  { icon: Buildings, name: 'For Enterprises', href: '/solutions/enterprises' },
]

const simpleLinks = [
  { name: 'Coverage',   href: '/coverage' },
  { name: 'Developers', href: '/developers' },
  { name: 'Resources',  href: '/resources' },
  { name: 'Pricing',    href: '/pricing' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen]         = useState(false)
  const [mobileProducts, setMobileProducts] = useState(false)
  const [mobileSolutions, setMobileSolutions] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 h-[68px]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">

        {/* ── Logo ── */}
        <Link href="/" aria-label="Callvox home">
          <Logo className="w-[136px] h-auto flex-shrink-0" />
        </Link>

        {/* ── Desktop links ── */}
        <div className="hidden lg:flex items-center gap-0.5 flex-1">

          {/* Products — mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('Products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-cyan-DEFAULT transition-colors flex items-center gap-1">
              Products
              <CaretDown weight="bold" className={`w-3 h-3 transition-transform ${activeDropdown === 'Products' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'Products' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-white rounded-2xl shadow-xl border border-navy-100 p-6 z-50">
                <p className="text-[11px] font-bold uppercase tracking-widest text-navy-400 mb-4">All Products</p>
                <div className="grid grid-cols-1 gap-1">
                  {products.map((p) => {
                    const Icon = p.icon
                    return (
                      <Link
                        key={p.name}
                        href={p.href}
                        className="flex items-start gap-4 px-3 py-3 rounded-xl hover:bg-navy-50 transition-colors group"
                      >
                        <span className="mt-0.5 w-8 h-8 rounded-lg bg-cyan-DEFAULT/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={18} weight="duotone" className="text-cyan-DEFAULT" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-navy-DEFAULT group-hover:text-cyan-DEFAULT transition-colors">{p.name}</span>
                          <span className="block text-xs text-navy-500 mt-0.5">{p.desc}</span>
                        </span>
                      </Link>
                    )
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-navy-100 flex items-center justify-between">
                  <span className="text-xs text-navy-400">One API. All five products.</span>
                  <Link href="/developers" className="text-xs font-semibold text-cyan-DEFAULT flex items-center gap-1 hover:gap-2 transition-all">
                    View API docs <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Solutions — compact dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('Solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-cyan-DEFAULT transition-colors flex items-center gap-1">
              Solutions
              <CaretDown weight="bold" className={`w-3 h-3 transition-transform ${activeDropdown === 'Solutions' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'Solutions' && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-navy-100 p-3 z-50">
                {solutions.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.name}
                      href={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-navy-700 hover:bg-navy-50 hover:text-cyan-DEFAULT transition-colors group"
                    >
                      <Icon size={16} weight="duotone" className="text-navy-400 group-hover:text-cyan-DEFAULT transition-colors flex-shrink-0" />
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* Simple links */}
          {simpleLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-cyan-DEFAULT transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTAs ── */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <Button variant="ghost" size="md">Login</Button>
          <Button variant="primary" size="md">Get a Quote</Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden p-2 text-navy-DEFAULT rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X weight="bold" size={24} /> : <List weight="bold" size={24} />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[68px] left-0 right-0 bg-white border-b border-navy-100 shadow-lg overflow-y-auto max-h-[calc(100vh-68px)]">
          <div className="px-4 py-6 space-y-1">

            {/* Products accordion */}
            <button
              onClick={() => setMobileProducts(!mobileProducts)}
              className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
            >
              Products
              <CaretDown weight="bold" className={`w-4 h-4 transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
            </button>
            {mobileProducts && (
              <div className="pl-4 space-y-1 pb-2">
                {products.map((p) => {
                  const Icon = p.icon
                  return (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
                    >
                      <Icon size={16} weight="duotone" className="text-cyan-DEFAULT" />
                      {p.name}
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Solutions accordion */}
            <button
              onClick={() => setMobileSolutions(!mobileSolutions)}
              className="w-full flex items-center justify-between px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50"
            >
              Solutions
              <CaretDown weight="bold" className={`w-4 h-4 transition-transform ${mobileSolutions ? 'rotate-180' : ''}`} />
            </button>
            {mobileSolutions && (
              <div className="pl-4 space-y-1 pb-2">
                {solutions.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.name}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-navy-700 rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
                    >
                      <Icon size={16} weight="duotone" className="text-navy-400" />
                      {s.name}
                    </Link>
                  )
                })}
              </div>
            )}

            {/* Simple links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-navy-800 font-medium rounded-lg hover:bg-navy-50 hover:text-cyan-DEFAULT"
              >
                {link.name}
              </Link>
            ))}

            {/* CTAs */}
            <div className="pt-4 border-t border-navy-100 space-y-3 mt-4">
              <Button variant="ghost" size="lg" className="w-full">Login</Button>
              <Button variant="primary" size="lg" className="w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
