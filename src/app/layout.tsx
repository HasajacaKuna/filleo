// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Nunito } from 'next/font/google'
import Navbar from '../app/components/Navbar' // <- nasz komponent z poprzedniej wiadomości
import Link from 'next/link'
import Footer from '../app/components/Footer' // <- nasz komponent z poprzedniej wiadomości

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'Filleo — włoskie produkty premium',
  description:
    'Filleo: import win i włoskich produktów premium. Zestawy prezentowe, oferta dla gastronomii i biznesu.',
  metadataBase:
    new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      {/* font-sans bierze Nunito z tailwinda (patrz config niżej) */}
      <body className={`${nunito.variable} font-sans bg-brand-light text-brand-dark antialiased`}>
        <Navbar />

        {/* Nie dodaję globalnej .container, bo sekcje na stronie ją już mają */}
        <main className="min-h-[60vh]">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
