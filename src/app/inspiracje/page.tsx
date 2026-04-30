'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    quote: 'Tutaj pokazujemy nasze inspiracje: zestawy prezentowe.',
    gifts: 'Zestawy prezentowe',
    giftsText: 'Szukasz idealnego zestawu? Wybierz gotowy box albo napisz do nas po wersję custom.',
    contact: 'Skontaktuj się, pomożemy dobrać zestaw',
  },
  en: {
    quote: 'Here we present our inspirations: gift sets.',
    gifts: 'Gift sets',
    giftsText: 'Looking for a perfect set? Choose a ready box or contact us for a custom one.',
    contact: 'Contact us - we will help you choose',
  },
  it: {
    quote: 'Qui presentiamo le nostre ispirazioni: gift set.',
    gifts: 'Gift set',
    giftsText: 'Cerchi il set perfetto? Scegli un box pronto o contattaci per una versione personalizzata.',
    contact: 'Contattaci - ti aiutiamo a scegliere',
  },
} as const;

export default function InspirationsPage() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/banner.jpg" alt="Inspirations banner" fill priority sizes="100vw" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />

        <div className="container relative z-20 flex h-[42vh] items-center justify-center text-center md:h-[52vh]">
          <figure className="max-w-3xl px-4 text-white">
            <blockquote className="text-lg italic leading-relaxed tracking-wide text-white/95 md:text-2xl">{t.quote}</blockquote>
          </figure>
        </div>
      </section>

      <section className="relative">
        <div className="container relative z-30 -mt-16 md:-mt-24 lg:-mt-28">
          <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 md:p-8 lg:p-10">
            <header className="mb-6 text-center">
              <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.gifts}</h1>
              <p className="mx-auto mt-3 max-w-3xl text-black/70">{t.giftsText}</p>
            </header>

            <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {['/images/gift1.jpg', '/images/gift2a.jpg', '/images/gift3a.jpg', '/images/gift4a.jpg', '/images/gift5a.jpg', '/images/gift6a.jpg'].map((src, i) => (
                <li key={i} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                  <div className={i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                    <Image src={src} alt={`Gift ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" unoptimized />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <Link href="/kontakt" className="inline-flex items-center rounded-md bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige">
                {t.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

