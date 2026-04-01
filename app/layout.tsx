import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans"
})

export const metadata: Metadata = {
  metadataBase: new URL('https://callvox.net'),
  title: {
    default: 'Callvox — Wholesale Voice, SMS, Airtime, eSIM & DIDs',
    template: '%s | Callvox',
  },
  description:
    'The unified wholesale platform built for the world\'s fastest-growing markets. Voice termination, A2P SMS, airtime top-ups, eSIM provisioning and DIDs — one API, one invoice.',
  keywords: [
    'wholesale voice termination',
    'A2P SMS wholesale',
    'airtime top-up API',
    'eSIM wholesale',
    'wholesale DID numbers',
    'wholesale telecom platform',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://callvox.net',
    siteName: 'Callvox',
    title: 'Callvox — The Unified Wholesale Telecom Platform',
    description:
      'The unified wholesale platform built for the world\'s fastest-growing markets. Voice, SMS, airtime, eSIM & DIDs — one platform.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Callvox — The unified wholesale platform for the world\'s fastest-growing markets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Callvox — The Unified Wholesale Telecom Platform',
    description:
      'The unified wholesale platform built for the world\'s fastest-growing markets.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    other: [
      {
        rel: 'icon',
        url: '/icon.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
