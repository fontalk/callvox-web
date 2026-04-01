'use client'

import { type ReactNode } from 'react'

interface BadgeProps {
  variant?: 'default' | 'cyan' | 'navy'
  children: ReactNode
  className?: string
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const variantStyles = {
    default: 'bg-navy-50 text-navy-600',
    cyan: 'bg-cyan-light text-cyan-DEFAULT',
    navy: 'bg-navy-DEFAULT text-white',
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
