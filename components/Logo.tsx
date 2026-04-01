'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  reversed?: boolean
}

export function Logo({ className, reversed = false }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Callvox_Logo_transbg-Sl48Jcsp1HCNUZws5X8aOSTHHKTYEq.png"
        alt="Callvox"
        width={180}
        height={40}
        priority
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '180px',
        }}
      />
    </div>
  )
}
