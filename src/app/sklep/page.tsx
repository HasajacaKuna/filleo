// app/sklep/page.tsx
'use client';

import Link from 'next/link';

export default function ShopComingSoon() {
  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-wider text-brand-dark/50">Sklep</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight uppercase">
            Sklep w przygotowaniu
          </h1>
          <p className="mt-4 text-lg text-brand-dark/70">
            Intensywnie nad nim pracujemy. Zapraszamy wkrótce!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/subskrybuj"
              className="inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
            >
              Powiadom mnie, gdy ruszy
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full border border-brand-dark/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
