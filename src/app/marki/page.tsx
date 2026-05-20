'use client';

import Image from 'next/image';
import Link from 'next/link';
import { brands } from '@/lib/brands';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    introTitle: 'Poznaj producentów, których reprezentujemy',
    introText: 'Współpracujemy z wyselekcjonowanymi włoskimi producentami i rodzinnymi manufakturami, które łączą tradycję, jakość oraz autentyczny włoski charakter.',
  },
  en: {
    introTitle: 'Meet the producers we represent',
    introText: 'We work with selected Italian producers and family-run manufacturers who combine tradition, quality, and authentic Italian character.',
  },
  it: {
    introTitle: 'Scopri i produttori che rappresentiamo',
    introText: 'Collaboriamo con produttori italiani selezionati e manifatture familiari che uniscono tradizione, qualità e autentico carattere italiano.',
  },
} as const;

export default function BrandsPage() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/Filleo%20strona.png" alt="Brands banner" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />

        <div className="container relative z-20 flex h-[42vh] items-center justify-center text-center md:h-[52vh]">
          <figure className="max-w-3xl px-4 text-white">
            <figcaption className="mt-20 px-3 text-center text-white md:mt-40">
              <div className="flex items-center justify-center gap-3">
                <span className="inline-block h-px w-8 bg-white/60" />
                <p className="text-sm font-semibold uppercase tracking-wide md:text-base">{t.introTitle}</p>
                <span className="inline-block h-px w-8 bg-white/60" />
              </div>
              <p className="mt-2 text-xs font-normal leading-relaxed text-white/90 md:text-sm">{t.introText}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative">
        <div className="container relative z-30 mt-4 md:-mt-24 lg:-mt-36">
          <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 md:p-6 lg:p-8">
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-6">
              {brands.slice(0, 20).map((b) => (
                <li key={b.slug}>
                  <Link href={`/marki/${b.slug}`} className="group block overflow-hidden rounded-lg transition" aria-label={b.name} title={b.name}>
                    <div className="relative aspect-[4/3] bg-white">
                      <Image src={b.logo} alt={b.name} fill className="object-contain p-2 transition group-hover:scale-105 md:p-3" sizes="(min-width: 1024px) 16vw, (min-width: 768px) 20vw, 33vw" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

