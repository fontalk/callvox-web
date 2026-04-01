'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'white' | 'white-ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer'
    
    const variantStyles = {
      primary: 'bg-navy-DEFAULT hover:bg-navy-800 text-white',
      ghost: 'border border-navy-DEFAULT text-navy-DEFAULT hover:bg-navy-50',
      white: 'bg-white text-navy-DEFAULT hover:bg-navy-50',
      'white-ghost': 'border border-white text-white hover:bg-white/10',
    }
    
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm h-9',
      md: 'px-6 py-2.5 text-sm h-9',
      lg: 'px-8 py-3.5 text-base',
    }
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
