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
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Callvox_Logo_small-TlBNvrQx6nx3HXswnZHOFPpZFmhiXF.png"
        alt="Callvox"
        width={160}
        height={32}
        priority
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '160px',
        }}
      />
    </div>
  )
}
