// app/marki/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { brands } from '@/lib/brands';

export default function BrandsPage() {
  return (
    <main className="bg-brand-light text-brand-dark">
      {/* BANNER */}
      <section className="relative">
        {/* tło */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.jpg" // lub /images/brands-banner.jpg
            alt="Nasze marki — baner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* przyciemnienie */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-black/35" />

{/* copy na środku */}
<div className="relative z-20 container h-[42vh] md:h-[52vh] flex items-center justify-center text-center">
  <figure className="max-w-3xl px-4 text-white">
    <blockquote className="italic text-lg md:text-2xl leading-relaxed tracking-wide text-white/95">
      Oferując ponad 200 marek i prowadząc sprzedaż w niemal 180 krajach,
      oferujemy coś na każdy gust i każdą okazję.
    </blockquote>

    {/* Podpis w stylu liniowym */}
    <figcaption className="mt-24 flex items-center justify-center gap-3 opacity-90">
      <span className="inline-block h-px w-8 bg-white/60" />
      <span className="text-sm font-semibold uppercase tracking-wide">Nasze marki</span>
      <span className="inline-block h-px w-8 bg-white/60" />
    </figcaption>
  </figure>
</div>

      </section>

      {/* PANEL Z LOGAMI – nachodzi na banner, wyżej w z-index */}
      <section className="relative">
        <div className="container relative z-30 -mt-24 md:-mt-24 lg:-mt-36">
          <div className="rounded-2xl bg-white p-4 md:p-6 lg:p-8 shadow-xl ring-1 ring-black/5">
            {/* same loga, gęsto */}
            <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3">
              {brands.slice(0, 20).map((b) => (
                <li key={b.slug}>
                  <Link
                    href="/marki/900wine" // testowo: wszystkie logotypy prowadzą do 900wine
                    className="group block overflow-hidden rounded-lg transition"
                    aria-label={b.name}
                    title={b.name}
                  >
                    <div className="relative aspect-[4/3] bg-white">
                      <Image
                        src={b.logo}
                        alt={b.name}
                        fill
                        className="object-contain p-2 md:p-3 transition group-hover:scale-105"
                        sizes="(min-width: 1024px) 16vw, (min-width: 768px) 20vw, 33vw"
                      />
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
