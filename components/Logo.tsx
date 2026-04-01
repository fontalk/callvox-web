'use client'

interface LogoProps {
  className?: string
  reversed?: boolean
}

export function Logo({ className, reversed = false }: LogoProps) {
  const navyColor = reversed ? '#ffffff' : '#0d2b4e'
  const cyanColor = '#0ea5e9'
  
  return (
    <svg viewBox="0 0 220 48" fill="none" className={className} aria-label="Callvox">
      {/* Arc 5 - outermost (DIDs) */}
      <path d="M 4 24 A 20 20 0 0 1 24 4" stroke={cyanColor} strokeWidth="3" strokeLinecap="round" opacity="0.28"/>
      {/* Arc 4 (eSIM) */}
      <path d="M 7 24 A 17 17 0 0 1 24 7" stroke={cyanColor} strokeWidth="3" strokeLinecap="round" opacity="0.46"/>
      {/* Arc 3 (Airtime) */}
      <path d="M 10 24 A 14 14 0 0 1 24 10" stroke={cyanColor} strokeWidth="3" strokeLinecap="round" opacity="0.65"/>
      {/* Arc 2 (SMS) */}
      <path d="M 13 24 A 11 11 0 0 1 24 13" stroke={navyColor} strokeWidth="3" strokeLinecap="round" opacity="0.70"/>
      {/* Arc 1 - innermost (Voice) */}
      <path d="M 16 24 A 8 8 0 0 1 24 16" stroke={navyColor} strokeWidth="3" strokeLinecap="round"/>
      {/* Convergence node */}
      <circle cx="24" cy="24" r="4" fill={navyColor}/>
      <circle cx="24" cy="24" r="2" fill={cyanColor}/>
      {/* Signal line */}
      <line x1="24" y1="24" x2="38" y2="24" stroke={navyColor} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="24" r="2" fill={cyanColor}/>
      {/* Wordmark */}
      <text x="52" y="31" fontFamily="DM Sans, Helvetica Neue, Arial, sans-serif" fontSize="22" fontWeight="600" letterSpacing="-0.5" fill={navyColor}>callvox</text>
      {/* Cyan accent dot above "o" */}
      <circle cx="158" cy="12" r="2.5" fill={cyanColor}/>
    </svg>
  )
}
