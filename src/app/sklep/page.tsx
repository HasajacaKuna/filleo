'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    title: 'Sklep w przygotowaniu',
    text: 'Intensywnie nad nim pracujemy. Zapraszamy wkrotce!',
    notify: 'Powiadom mnie, gdy ruszy',
    contact: 'Skontaktuj sie z nami',
  },
  en: {
    title: 'Shop coming soon',
    text: 'We are working on it right now. Stay tuned!',
    notify: 'Notify me when it launches',
    contact: 'Contact us',
  },
  it: {
    title: 'Negozio in preparazione',
    text: 'Ci stiamo lavorando. Torna presto!',
    notify: 'Avvisami quando parte',
    contact: 'Contattaci',
  },
} as const;

export default function ShopComingSoon() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight md:text-6xl">{t.title}</h1>
          <p className="mt-4 text-lg text-brand-dark/70">{t.text}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/subskrybuj" className="inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red">{t.notify}</Link>
            <Link href="/kontakt" className="inline-flex items-center rounded-full border border-brand-dark/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5">{t.contact}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

