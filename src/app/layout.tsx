// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '../app/components/Navbar' // <- nasz komponent z poprzedniej wiadomoĹ›ci
import Footer from '../app/components/Footer' // <- nasz komponent z poprzedniej wiadomoĹ›ci
import { LanguageProvider } from '../app/components/LanguageProvider'
import AgeGate from '../app/components/AgeGate'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Filleo - włoskie produkty premium',
  description:
    'Filleo: import win i włoskich produktów premium. Zestawy prezentowe, oferta dla gastronomii i biznesu.',
  metadataBase:
    new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  icons: {
    icon: '/images/xd.ico',
    shortcut: '/images/xd.ico',
    apple: '/images/xd.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${nunito.variable} font-sans bg-brand-light text-brand-dark antialiased`}>
        <LanguageProvider>
          <AgeGate>
            <Navbar />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
          </AgeGate>
        </LanguageProvider>
      </body>
    </html>
  )
}

