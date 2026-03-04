'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Linkedin, Instagram } from 'lucide-react';
import { useLanguage, type Language } from './LanguageProvider';

const NAV_ITEMS = [
  { href: '/marki', key: 'brands' },
  { href: '/inspiracje', key: 'inspirations' },
  { href: '/subskrybuj', key: 'subscribe' },
  { href: '/kariera', key: 'career' },
  { href: '/o-nas', key: 'about' },
  { href: '/kontakt', key: 'contact' },
] as const;

const LANGUAGE_OPTIONS: Array<{ code: Language; flagCode: 'pl' | 'gb' | 'it' }> = [
  { code: 'pl', flagCode: 'pl' },
  { code: 'en', flagCode: 'gb' },
  { code: 'it', flagCode: 'it' },
];

const TRANSLATIONS = {
  pl: {
    brands: 'Nasze marki',
    inspirations: 'Nasze inspiracje',
    subscribe: 'Subskrybuj',
    career: 'Kariera',
    about: 'O nas',
    contact: 'Kontakt',
    shopOnline: 'Sklep online',
    openMenu: 'Otwórz menu',
    language: 'Język',
  },
  en: {
    brands: 'Our brands',
    inspirations: 'Our inspirations',
    subscribe: 'Subscribe',
    career: 'Career',
    about: 'About us',
    contact: 'Contact',
    shopOnline: 'Online shop',
    openMenu: 'Open menu',
    language: 'Language',
  },
  it: {
    brands: 'I nostri marchi',
    inspirations: 'Le nostre ispirazioni',
    subscribe: 'Iscriviti',
    career: 'Carriera',
    about: 'Chi siamo',
    contact: 'Contatti',
    shopOnline: 'Negozio online',
    openMenu: 'Apri menu',
    language: 'Lingua',
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <header className="sticky top-0 z-50 bg-brand-light/90 backdrop-blur">
      <div>
        <div className="container flex h-10 items-center justify-end">
          <div className="inline-flex items-center gap-1 rounded-lg bg-white/60 p-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
            {LANGUAGE_OPTIONS.map((option) => {
              const isActive = option.code === language;
              const optionTitle = option.code === 'pl' ? 'Polski' : option.code === 'en' ? 'English' : 'Italiano';
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLanguage(option.code)}
                  className={`rounded-md px-2.5 py-1 transition ${
                    isActive
                      ? 'bg-white text-brand-dark shadow-sm ring-1 ring-black/10'
                      : 'text-brand-dark/80 hover:bg-white/70'
                  }`}
                  aria-label={optionTitle}
                  title={optionTitle}
                  aria-pressed={isActive}
                >
                  <Image
                    src={`https://flagcdn.com/${option.flagCode}.svg`}
                    alt=""
                    width={20}
                    height={14}
                    className="h-[14px] w-5 rounded-[3px] object-cover"
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-5">
          <Link href="/" className="mr-6 flex shrink-0 items-center gap-3 focus:outline-none focus-visible:outline-none">
            <Image src="/images/filogo.png" alt="Filleo" width={56} height={56} className="h-14 w-14" priority />
            <span className="sr-only">Filleo</span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            <Link
              href="/sklep"
              className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow-sm transition hover:bg-brand-red focus:outline-none focus-visible:outline-none"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              {t.shopOnline}
            </Link>

            <span className="mx-1 h-6 w-px bg-neutral-300" aria-hidden="true" />

            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="text-sm">
                  <Link
                    href={item.href}
                    className="
                      relative font-medium uppercase tracking-wide text-brand-dark/90
                      transition-colors focus:outline-none focus-visible:outline-none
                      after:absolute after:left-0 after:-bottom-[6px] after:h-[2px] after:w-0
                      after:bg-brand-dark/80 after:transition-all after:duration-300
                      hover:after:w-full
                    "
                  >
                    {t[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="https://www.linkedin.com/company/filleo/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/filleo.pl?igsh=cHd0YTlidWJ2ZDk%3D"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 focus:outline-none focus-visible:outline-none lg:hidden"
            aria-label={t.openMenu}
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-brand-light lg:hidden">
          <div className="container py-4">
            <Link
              href="/sklep"
              className="mb-3 block rounded-md bg-brand-dark px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus-visible:outline-none"
              onClick={() => setOpen(false)}
            >
              {t.shopOnline}
            </Link>

            <ul className="grid gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      relative block rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wide
                      text-brand-dark/90 hover:bg-black/5 transition-colors
                      focus:outline-none focus-visible:outline-none
                      after:absolute after:left-2 after:-bottom-0.5 after:h-[2px] after:w-0
                      after:bg-brand-dark/80 after:transition-all after:duration-300
                      hover:after:w-[calc(100%-1rem)]
                    "
                    onClick={() => setOpen(false)}
                  >
                    {t[item.key]}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/filleo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none"
              >
                <Linkedin className="h-6 w-6" aria-hidden />
              </Link>
              <Link
                href="https://www.instagram.com/filleo.pl?igsh=cHd0YTlidWJ2ZDk%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none"
              >
                <Instagram className="h-6 w-6" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

