import Nav from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <>
      <Nav />
      <main id="main-content" className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
