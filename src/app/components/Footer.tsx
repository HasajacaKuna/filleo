'use client';

import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const COPY = {
  pl: {
    rights: 'Wszelkie prawa zastrzeżone.',
    about: 'O nas',
    shop: 'Sklep',
    contact: 'Kontakt',
    privacy: 'Polityka prywatności',
  },
  en: {
    rights: 'All rights reserved.',
    about: 'About us',
    shop: 'Shop',
    contact: 'Contact',
    privacy: 'Privacy policy',
  },
  it: {
    rights: 'Tutti i diritti riservati.',
    about: 'Chi siamo',
    shop: 'Negozio',
    contact: 'Contatti',
    privacy: 'Informativa privacy',
  },
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <footer className="mt-16 border-t border-black/10 bg-brand-light">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Filleo. {t.rights}</p>

        <nav className="flex flex-wrap items-center gap-5 text-sm">
          <Link
            href="/o-nas"
            className="rounded px-1 font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
          >
            {t.about}
          </Link>
          <Link
            href="/sklep"
            className="rounded px-1 font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
          >
            {t.shop}
          </Link>
          <Link
            href="/kontakt"
            className="rounded px-1 font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
          >
            {t.contact}
          </Link>
          <Link
            href="/polityka-prywatnosci"
            className="rounded px-1 font-medium uppercase tracking-wide text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
          >
            {t.privacy}
          </Link>

          <span className="hidden h-5 w-px bg-neutral-300 md:block" aria-hidden="true" />

          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/filleo/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              href="https://www.instagram.com/filleo.pl?igsh=cHd0YTlidWJ2ZDk%3D"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-brand-dark/90 transition hover:text-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
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

