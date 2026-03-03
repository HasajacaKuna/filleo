// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '../app/components/Navbar' // <- nasz komponent z poprzedniej wiadomoĹ›ci
import Footer from '../app/components/Footer' // <- nasz komponent z poprzedniej wiadomoĹ›ci
import { LanguageProvider } from '../app/components/LanguageProvider'

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Filleo - wloskie produkty premium',
  description:
    'Filleo: import win i wloskich produktow premium. Zestawy prezentowe, oferta dla gastronomii i biznesu.',
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
      {/* font-sans bierze Nunito z tailwinda (patrz config niĹĽej) */}
      <body className={`${nunito.variable} font-sans bg-brand-light text-brand-dark antialiased`}>
        <LanguageProvider>
          <Navbar />

          {/* Nie dodajÄ™ globalnej .container, bo sekcje na stronie jÄ… juĹĽ majÄ… */}
          <main className="min-h-[60vh]">{children}</main>

          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}

