// src/components/Footer.tsx
'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-brand-light">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-black/60">
          © {new Date().getFullYear()} Filleo. Wszelkie prawa zastrzeżone.
        </p>

        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <Link
            href="/o-nas"
            className="font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded px-1"
          >
            O nas
          </Link>
          <Link
            href="/sklep"
            className="font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded px-1"
          >
            Sklep
          </Link>
          <Link
            href="/kontakt"
            className="font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded px-1"
          >
            Kontakt
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded px-1"
          >
            Polityka prywatności
          </Link>

          {/* separator desktopowy */}
          <span className="hidden h-5 w-px bg-neutral-300 md:block" aria-hidden="true" />

          {/* socialki w stopce */}
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/filleo/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="https://www.instagram.com/filleo.pl?igsh=cHd0YTlidWJ2ZDk%3D"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige rounded"
              title="Instagram"
            >
              <Instagram className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
