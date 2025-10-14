// src/app/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="bg-brand-light text-brand-dark">
      {/* HERO */}
{/* HERO */}
{/* HERO */}
<section className="relative">
  {/* TŁO */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/banner.jpg"
      alt="Filleo — włoskie smaki"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  </div>

  {/* OVERLAY (nad zdjęciem, pod treścią) */}
  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="absolute inset-0 bg-black/45" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
  </div>

  {/* TREŚĆ */}
  <div className="container relative z-20 flex min-h-[78vh] flex-col items-center justify-center gap-6 py-20 text-center text-white">
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center"
    >
<Image
  src="/images/filleo4.png"
  alt="Filleo"
  width={240}
  height={240}
  className="mb-6 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]"
  priority
/>

      <h1 className="max-w-5xl text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide">
        FILLEO – IMPORTUJEMY PASJĘ I DOSTARCZAMY JAKOŚĆ
      </h1>
      <p className="mt-4 max-w-3xl text-base md:text-lg text-white/90">
        Włoskie wina i produkty premium bezpośrednio od producentów – z pasją i autentycznością.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="#o-nas"
          className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide backdrop-blur hover:bg-white/20"
        >
          Poznaj nas
        </Link>
      </div>
    </motion.div>
  </div>
</section>



      {/* O NAS / HISTORIA */}
      <section id="o-nas" className="container py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/filleo2.png" // zdjęcie tła sekcji / food shot
                alt="Włoskie produkty Filleo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              historia Filleo
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-base/7 text-brand-dark/90">
              <p>
                Filleo to firma zrodzona z autentycznej pasji do włoskiej kultury kulinarnej. W ostatnich latach wyspecjalizowaliśmy się w imporcie najwyższej jakości win oraz produktów spożywczych, sprowadzanych bezpośrednio z Włoch i dedykowanych sektorowi gastronomicznemu.
              </p>
              <p>
                Dzięki współpracy z renomowanymi producentami, dostarczamy na polski rynek prawdziwe smaki Italii, zachowując ich autentyczność i wyjątkowy charakter. Oferujemy również spersonalizowane zestawy prezentowe, idealne na śluby, eventy czy wydarzenia biznesowe – tworzone z dbałością o szczegóły i potrzeby Klienta.
              </p>
              <p>
                Nasza oferta dynamicznie się rozwija – wychodzimy poza granice Polski, poszerzając działalność na rynki międzynarodowe. Wspieramy gastronomię oraz sektor biznesowy, zawsze stawiając na jakość, autentyczność i dopasowanie do oczekiwań odbiorców.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZAŁOŻYCIELKA */}
      <section className="bg-brand-beige/10 py-16 md:py-24">
        <div className="container grid items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              Karolina Filoniuk‑Leonardi
            </h3>
            <p className="mt-3 text-brand-red font-semibold">
              Założycielka marki Filleo
            </p>
            <div className="mt-4 space-y-4 leading-relaxed text-base/7 text-brand-dark/90">
              <p>
                Karolina Filoniuk‑Leonardi jest założycielką marki Filleo, specjalizującej się w imporcie i dystrybucji włoskich produktów Premium na rynku polskim. Od ponad 20 lat mieszka i pracuje we Włoszech, gdzie zdobywa doświadczenie w branży gastronomicznej, logistycznej i marketingowej.
              </p>
              <p>
                Dzięki wieloletniej obecności na włoskim rynku łączy autentyczne, lokalne tradycje kulinarne z nowoczesnym podejściem biznesowym, tworząc wyjątkowe oferty dla klientów indywidualnych i firm.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 order-1 md:order-2"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg">
              <Image
                src="/images/karolina2.jpg" // podmień na prawdziwe zdjęcie
                alt="Karolina Filoniuk‑Leonardi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

{/* GALERIA / KAFELKI */}
<section className="container py-16 md:py-24">
  <div className="mb-8 flex items-center justify-between">
    <h4 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
      Z życia naszych marek
    </h4>
    <Link href="/galeria" className="text-sm font-semibold uppercase tracking-wide text-brand-red hover:underline">
      Zobacz więcej
    </Link>
  </div>

  <div className="grid gap-4">
    {/* RZĄD 1: dwa prostokąty */}
    <div className="grid gap-4 md:grid-cols-2">
      <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3]">
        <Image src="/images/photo.jpg" alt="kadr 1" fill className="object-cover" />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[4/3]">
        <Image src="/images/photo.jpg" alt="kadr 2" fill className="object-cover" />
      </div>
    </div>

    {/* RZĄD 2: jeden szeroki panoramiczny */}
    <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[21/9]">
      <Image src="/images/photo.jpg" alt="kadr panoramiczny" fill className="object-cover" />
    </div>

{/* RZĄD 3: lewo pion, prawo dwa prostokąty jeden pod drugim */}
<div className="grid gap-4 md:grid-cols-2">
  {/* lewa kolumna – pion */}
  <div className="relative overflow-hidden rounded-2xl shadow-sm aspect-[3/4]">
    <Image src="/images/photo.jpg" alt="kadr pionowy" fill className="object-cover" />
  </div>

  {/* prawa kolumna – dwa prostokąty wewnątrz kolumny o tej samej proporcji */}
  <div className="relative aspect-[3/4]">
    <div className="absolute inset-0 grid grid-rows-2 gap-4">
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <Image src="/images/photo.jpg" alt="kadr 3" fill className="object-cover" />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-sm">
        <Image src="/images/photo.jpg" alt="kadr 4" fill className="object-cover" />
      </div>
    </div>
  </div>
</div>


  </div>

  {/* przerwa i film */}
  <div className="h-10 md:h-12" />
  <div className="rounded-2xl border border-black/10 bg-black/5 p-3">
    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
      {/* podmień na iframe YouTube/Vimeo kiedy będziesz mieć link */}
      <Image src="/images/photo.jpg" alt="Materiał wideo" fill className="object-cover" />
      <div className="absolute inset-0 grid place-items-center">
        <button className="rounded-full bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light shadow-lg">
          Odtwórz film
        </button>
      </div>
    </div>
  </div>
</section>



      {/* CTA DO KONTAKTU */}
      <section className="bg-brand-dark py-14 text-brand-light">
        <div className="container grid items-center gap-6 md:grid-cols-2">
          <h5 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
            Chcesz zamówić zestawy prezentowe lub nawiązać współpracę?
          </h5>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <Link href="/kontakt" className="rounded-md bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:opacity-90">
              Skontaktuj się z nami
            </Link>
            <Link href="/o-nas" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10">
              Więcej o Filleo
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
