// app/o-nas/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-brand-light text-brand-dark">
      {/* HISTORIA FILLEO */}
      <section className="container py-16 md:py-24">
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
                src="/images/filleo2.png" // ten sam obraz co na homepage
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
            <h1 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              Historia Filleo
            </h1>
            <div className="mt-4 space-y-4 leading-relaxed text-base/7 text-brand-dark/90">
              <p>
                Filleo to firma zrodzona z autentycznej pasji do włoskiej kultury kulinarnej. W
                ostatnich latach wyspecjalizowaliśmy się w imporcie najwyższej jakości win oraz
                produktów spożywczych, sprowadzanych bezpośrednio z Włoch i dedykowanych sektorowi
                gastronomicznemu.
              </p>
              <p>
                Dzięki współpracy z renomowanymi producentami, dostarczamy na polski rynek prawdziwe
                smaki Italii, zachowując ich autentyczność i wyjątkowy charakter. Oferujemy również
                spersonalizowane zestawy prezentowe, idealne na śluby, eventy czy wydarzenia
                biznesowe – tworzone z dbałością o szczegóły i potrzeby Klienta.
              </p>
              <p>
                Nasza oferta dynamicznie się rozwija – wychodzimy poza granice Polski, poszerzając
                działalność na rynki międzynarodowe. Wspieramy gastronomię oraz sektor biznesowy,
                zawsze stawiając na jakość, autentyczność i dopasowanie do oczekiwań odbiorców.
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
            <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-wide">
              Karolina Filoniuk-Leonardi
            </h2>
            <p className="mt-3 text-brand-red font-semibold">
              Założycielka marki Filleo
            </p>
            <div className="mt-4 space-y-4 leading-relaxed text-base/7 text-brand-dark/90">
              <p>
                Karolina Filoniuk-Leonardi jest założycielką marki Filleo, specjalizującej się w
                imporcie i dystrybucji włoskich produktów Premium na rynku polskim. Od ponad 20 lat
                mieszka i pracuje we Włoszech, gdzie zdobywa doświadczenie w branży gastronomicznej,
                logistycznej i marketingowej.
              </p>
              <p>
                Dzięki wieloletniej obecności na włoskim rynku łączy autentyczne, lokalne tradycje
                kulinarne z nowoczesnym podejściem biznesowym, tworząc wyjątkowe oferty dla
                klientów indywidualnych i firm.
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
                src="/images/karolina2.jpg" // to samo zdjęcie co na homepage
                alt="Karolina Filoniuk-Leonardi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
