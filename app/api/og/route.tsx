import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  try {
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
            fontFamily: '"Helvetica Neue", Arial, sans-serif',
            position: 'relative',
          }}
        >
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
              fontFamily: '"Helvetica Neue", Arial, sans-serif',
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

          {/* Bottom accent bar */}
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
  } catch (error) {
    return new Response('Failed to generate OG image', { status: 500 })
  }
}
