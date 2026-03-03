'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    quote: 'Tutaj pokazujemy nasze inspiracje - od zestawow prezentowych po drinki.',
    gifts: 'Zestawy prezentowe',
    giftsText: 'Szukasz idealnego zestawu? Wybierz gotowy box albo napisz do nas po wersje custom.',
    contact: 'Skontaktuj sie - pomozemy dobrac zestaw',
    cocktails: 'Koktajle Filleo',
    cocktailsText: 'Lacz i miksuj skladniki, aby stworzyc swoj ulubiony styl.',
    play: 'Odtworz film',
  },
  en: {
    quote: 'Here we present our inspirations - from gift sets to cocktail ideas.',
    gifts: 'Gift sets',
    giftsText: 'Looking for a perfect set? Choose a ready box or contact us for a custom one.',
    contact: 'Contact us - we will help you choose',
    cocktails: 'Filleo cocktails',
    cocktailsText: 'Mix and combine ingredients to create your own style.',
    play: 'Play video',
  },
  it: {
    quote: 'Qui presentiamo le nostre ispirazioni - dai gift set alle idee cocktail.',
    gifts: 'Gift set',
    giftsText: 'Cerchi il set perfetto? Scegli un box pronto o contattaci per una versione personalizzata.',
    contact: 'Contattaci - ti aiutiamo a scegliere',
    cocktails: 'Cocktail Filleo',
    cocktailsText: 'Combina gli ingredienti per creare il tuo stile preferito.',
    play: 'Riproduci video',
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
              {['/images/gift1.jpg', '/images/gift2.JPG', '/images/gift3.JPG', '/images/gift4.JPG', '/images/gift5.JPG', '/images/gift6.JPG'].map((src, i) => (
                <li key={i} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                  <div className={i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                    <Image src={src} alt={`Gift ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <Link href="/kontakt" className="inline-flex items-center rounded-md bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige">
                {t.contact}
              </Link>
            </div>

            <div className="my-12 h-px w-full bg-black/10" />

            <header className="mb-6 text-center">
              <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.cocktails}</h2>
              <p className="mx-auto mt-3 max-w-3xl text-black/70">{t.cocktailsText}</p>
            </header>

            <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <li key={i} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                  <div className="aspect-[4/5] md:aspect-square">
                    <Image src="/images/drink.jpg" alt={`Drink ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                </li>
              ))}
            </ul>

            <div className="my-12 h-px w-full bg-black/10" />

            <section aria-labelledby="film-900" className="space-y-4">
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow ring-1 ring-black/10">
                <Image src="/images/wine.jpg" alt="Video" fill className="object-cover" />
                <div className="absolute inset-0 grid place-items-center">
                  <button className="rounded-full bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow-lg">{t.play}</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

