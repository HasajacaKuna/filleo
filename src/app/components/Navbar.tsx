// src/components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Linkedin, Instagram } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/marki', label: 'Nasze marki' },
  { href: '/inspiracje', label: 'Nasze inspiracje' },
  { href: '/subskrybuj', label: 'Subskrybuj' },
  { href: '/kariera', label: 'Kariera' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-light/90 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        {/* LEWA STRONA: logo + cały nav */}
        <div className="flex min-w-0 items-center gap-5">
          {/* Logo (bez efektu underline i focusów) */}
          <Link href="/" className="flex items-center gap-3 shrink-0 mr-6 focus:outline-none focus-visible:outline-none">
            <Image
              src="/images/logo.png"
              alt="Filleo"
              width={56}
              height={56}
              className="h-14 w-14"
              priority
            />
            <span className="sr-only">Filleo</span>
          </Link>

          {/* Desktop nav przy logo */}
          <nav className="hidden items-center gap-5 lg:flex">
            {/* SKLEP ONLINE – przycisk (bez focus ring) */}
            <Link
              href="/sklep"
              className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow-sm transition hover:bg-brand-red focus:outline-none focus-visible:outline-none"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
              Sklep on-line
            </Link>

            {/* separator */}
            <span className="mx-1 h-6 w-px bg-neutral-300" aria-hidden="true" />

            {/* Linki z animacją kreski (bez zmiany koloru i bez focus ring) */}
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
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* PRAWA STRONA: social ikony + hamburger */}
        <div className="flex items-center gap-4">
          {/* Social icons (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/company/filleo"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none rounded"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.instagram.com/filleo"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark/90 transition-colors hover:text-brand-red focus:outline-none focus-visible:outline-none rounded"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile hamburger (bez outline po kliknięciu) */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 focus:outline-none focus-visible:outline-none"
            aria-label="Otwórz menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-brand-light">
          <div className="container py-4">
            <Link
              href="/sklep"
              className="mb-3 block rounded-md bg-brand-dark px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus-visible:outline-none"
              onClick={() => setOpen(false)}
            >
              🛒 Sklep on-line
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
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sociale w mobile */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/company/filleo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-brand-dark/90 hover:text-brand-red transition-colors focus:outline-none focus-visible:outline-none"
              >
                <Linkedin className="h-6 w-6" aria-hidden />
              </Link>
              <Link
                href="https://www.instagram.com/filleo.pl?igsh=cHd0YTlidWJ2ZDk%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-brand-dark/90 hover:text-brand-red transition-colors focus:outline-none focus-visible:outline-none"
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
