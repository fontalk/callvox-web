import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#0d2b4e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
        }}
      >
        {/* Five signal arcs — simplified SVG decorative element, top-right */}
        <svg
          style={{ position: 'absolute', top: 40, right: 40, opacity: 0.15 }}
          width="320"
          height="320"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path d="M6 32 A26 26 0 0 1 32 6" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round"/>
          <path d="M12 32 A20 20 0 0 1 32 12" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round"/>
          <path d="M18 32 A14 14 0 0 1 32 18" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="5" fill="#ffffff"/>
          <circle cx="32" cy="32" r="2.5" fill="#0ea5e9"/>
          <line x1="32" y1="32" x2="52" y2="32" stroke="#ffffff" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="55" cy="32" r="2.5" fill="#0ea5e9"/>
        </svg>

        {/* Eyebrow */}
        <div
          style={{
            color: '#0ea5e9',
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            margin: '0 0 24px',
          }}
        >
          callvox.net
        </div>

        {/* Positioning statement */}
        <h1
          style={{
            color: '#ffffff',
            fontSize: '56px',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-1px',
            maxWidth: '800px',
            margin: '0 0 32px',
          }}
        >
          The unified wholesale platform built for the world&apos;s fastest-growing markets.
        </h1>

        {/* 5 product pills */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px', flexWrap: 'wrap' }}>
          {['Voice', 'SMS', 'Airtime', 'eSIM', 'DIDs'].map((product) => (
            <div
              key={product}
              style={{
                backgroundColor: 'rgba(14, 165, 233, 0.15)',
                border: '1px solid rgba(14, 165, 233, 0.4)',
                color: '#0ea5e9',
                fontSize: '16px',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '999px',
              }}
            >
              {product}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: '#0ea5e9',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
