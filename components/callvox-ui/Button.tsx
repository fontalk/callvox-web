'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'white' | 'white-ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:ring-offset-2 active:scale-95'
    
    const variantStyles = {
      primary: 'bg-navy-DEFAULT text-white hover:bg-navy-800 hover:shadow-lg hover:-translate-y-0.5',
      ghost: 'border border-navy-DEFAULT text-navy-DEFAULT hover:bg-navy-50 hover:shadow-md hover:-translate-y-0.5',
      white: 'bg-white text-navy-DEFAULT hover:bg-navy-50 hover:shadow-xl hover:-translate-y-1',
      'white-ghost': 'border border-white text-white hover:bg-white/10 hover:shadow-lg hover:-translate-y-0.5',
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
