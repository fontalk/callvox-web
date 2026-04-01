'use client'

import { useState } from 'react'
import { Logo } from './Logo'
import { Button } from './callvox-ui/Button'
import { 
  Phone, 
  ChatDots, 
  Lightning, 
  SimCard, 
  Globe,
  List,
  X,
  CaretDown
} from '@phosphor-icons/react'

const products = [
  { icon: Phone, name: 'Voice', desc: 'Wholesale termination & origination' },
  { icon: ChatDots, name: 'SMS / Messaging', desc: 'A2P SMS & bulk messaging' },
  { icon: Lightning, name: 'Airtime Top-Ups', desc: 'International mobile recharge' },
  { icon: SimCard, name: 'eSIM', desc: 'Wholesale eSIM provisioning' },
  { icon: Globe, name: 'DIDs / Numbers', desc: 'Virtual phone numbers' },
]

const solutions = [
  'For Carriers',
  'For MVNOs',
  'For Resellers',
  'For Enterprises',
]

const navLinks = [
  { name: 'Products', hasDropdown: true },
  { name: 'Solutions', hasDropdown: true },
  { name: 'Coverage', hasDropdown: false },
  { name: 'Developers', hasDropdown: false },
  { name: 'Resources', hasDropdown: false },
  { name: 'Pricing', hasDropdown: false },
]

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/90 border-b border-navy-50 h-16">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Logo className="w-[140px] h-auto" />
        
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 text-sm text-navy-800 hover:text-cyan-DEFAULT transition-colors flex items-center gap-1">
                {link.name}
                {link.hasDropdown && <CaretDown weight="bold" className="w-3 h-3" />}
              </button>
              
              {/* Products Mega Menu */}
              {link.name === 'Products' && activeDropdown === 'Products' && (
                <div className="absolute top-full left-0 w-[600px] bg-white shadow-lg rounded-xl border border-navy-100 p-6 -translate-x-1/4">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-4">Products</h3>
                      <div className="space-y-3">
                        {products.map((product) => (
                          <a key={product.name} href="#" className="flex items-start gap-3 p-2 rounded-lg hover:bg-navy-50 transition-colors group">
                            <product.icon weight="duotone" className="w-6 h-6 text-navy-600 mt-0.5" />
                            <div>
                              <div className="text-sm font-semibold text-navy-DEFAULT group-hover:text-cyan-DEFAULT">{product.name}</div>
                              <div className="text-xs text-navy-600">{product.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-400 mb-4">Solutions</h3>
                      <div className="space-y-2">
                        {solutions.map((solution) => (
                          <a key={solution} href="#" className="block px-2 py-2 text-sm text-navy-600 hover:text-cyan-DEFAULT transition-colors">
                            {solution}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Solutions Dropdown */}
              {link.name === 'Solutions' && activeDropdown === 'Solutions' && (
                <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-xl border border-navy-100 p-3">
                  <div className="space-y-1">
                    {solutions.map((solution) => (
                      <a key={solution} href="#" className="block px-3 py-2 text-sm text-navy-600 hover:text-cyan-DEFAULT hover:bg-navy-50 rounded-lg transition-colors">
                        {solution}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="md">Login</Button>
          <Button variant="primary" size="md">Get a Quote</Button>
        </div>
        
        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 text-navy-DEFAULT"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-navy-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href="#" className="block px-4 py-2 text-navy-800 hover:text-cyan-DEFAULT">
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-navy-100 space-y-3">
              <Button variant="ghost" size="lg" className="w-full">Login</Button>
              <Button variant="primary" size="lg" className="w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
