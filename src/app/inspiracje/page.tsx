// app/inspiracje/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InspirationsPage() {
  return (
    <main className="bg-brand-light text-brand-dark">
      {/* BANNER */}
      <section className="relative">
        {/* tło */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.jpg" // podmień na dedykowany baner inspiracji
            alt="Nasze inspiracje — baner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* przyciemnienie */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-black/35" />

        {/* lead na środku */}
        <div className="relative z-20 container h-[42vh] md:h-[52vh] flex items-center justify-center text-center">
          <figure className="max-w-3xl px-4 text-white">
            <blockquote className="italic text-lg md:text-2xl leading-relaxed tracking-wide text-white/95">
              Tutaj pokażemy i opiszemy nasze inspiracje – od zestawów prezentowych po drinki.
            </blockquote>
          </figure>
        </div>
      </section>

      {/* PANEL – treść zachodząca na banner */}
      <section className="relative">
        <div className="container relative z-30 -mt-16 md:-mt-24 lg:-mt-28">
          <div className="rounded-2xl bg-white p-5 md:p-8 lg:p-10 shadow-xl ring-1 ring-black/5">
            {/* ZESTAWY PREZENTOWE */}
            <header className="mb-6 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
                Zestawy prezentowe
              </h1>
              <p className="mt-3 text-black/70 max-w-3xl mx-auto">
                Szukasz idealnego zestawu prezentowego na każdą okazję? Wybierz nasze wyjątkowe boxy
                lub skontaktuj się z nami, a pomożemy Ci skomponować swój zestaw, który łączy w sobie to co najlepsze.
              </p>
            </header>

            {/* siatka zdjęć – wstaw tu zdjęcia Karoli (paczki/boxy) */}
            <ul className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3">
              {[
                '/images/gift1.jpg',
                '/images/gift2.jpg',
                '/images/gift3.jpg',
                '/images/gift4.jpg',
                '/images/gift5.jpg',
                '/images/gift6.jpg',
              ].map((src, i) => (
                <li key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
                  <div className={i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}>
                    <Image src={src} alt={`Zestaw ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA do kontaktu */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-md bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige"
              >
                Skontaktuj się – pomożemy dobrać zestaw
              </Link>
            </div>

            {/* separator */}
            <div className="my-12 h-px w-full bg-black/10" />

            {/* KOKTAJLE FILLEO */}
            <header className="mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
                Koktajle Filleo
              </h2>
              <p className="mt-3 text-black/70 max-w-3xl mx-auto">
                Masz swoje ulubione dodatki? Łącz, miksuj, eksperymentuj z naszym 900 wine i stwórz wyjątkowy smak.
                Wykorzystaj głębię naszych koktajli jako fundament idealnego drinka, który najlepiej odda Twój charakter.
              </p>
            </header>

            {/* siatka zdjęć – wstaw tu zdjęcia drinków (ulotka Karoli) */}
            <ul className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
              {[
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
                '/images/drink.jpg',
              ].map((src, i) => (
                <li key={i} className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm">
                  <div className="aspect-[4/5] md:aspect-square">
                    <Image src={src} alt={`Koktajl ${i + 1}`} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  </div>
                </li>
              ))}
            </ul>

            {/* separator */}
            <div className="my-12 h-px w-full bg-black/10" />

            {/* FILMIK 900 */}
            <section aria-labelledby="film-900" className="space-y-4">

              {/* Placeholder – podmień na <iframe> YouTube/Vimeo, zachowaj rounded i aspekt */}
              <div className="relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
                <Image src="/images/wine.jpg" alt="Film 900 – placeholder" fill className="object-cover" />
                <div className="absolute inset-0 grid place-items-center">
                  <button className="rounded-full bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow-lg">
                    Odtwórz film
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
