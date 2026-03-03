'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Building2, User2, ArrowRight, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    title: 'Kontakt',
    subtitle: 'Jestesmy do Twojej dyspozycji. Ponizej znajdziesz pelne dane kontaktowe.',
    quick: 'Szybki kontakt',
    quickText: 'Wolisz zadzwonic czy napisac? Wybierz kanal.',
    call: 'Zadzwon (PL)',
    writeSales: 'Napisz do sprzedazy',
    writeMarketing: 'Napisz do marketingu',
    whatsapp: 'Napisz na WhatsApp',
    instagram: 'Napisz na Instagramie',
    friend: 'Zostan przyjacielem Filleo',
    response: 'Odpowiadamy zazwyczaj tego samego dnia roboczego.',
  },
  en: {
    title: 'Contact',
    subtitle: 'We are at your disposal. Below you can find full contact details.',
    quick: 'Quick contact',
    quickText: 'Prefer a call or a message? Choose your channel.',
    call: 'Call (PL)',
    writeSales: 'Email sales',
    writeMarketing: 'Email marketing',
    whatsapp: 'Write on WhatsApp',
    instagram: 'Write on Instagram',
    friend: 'Become a Filleo friend',
    response: 'We usually reply on the same business day.',
  },
  it: {
    title: 'Contatti',
    subtitle: 'Siamo a tua disposizione. Qui trovi i nostri dati completi.',
    quick: 'Contatto rapido',
    quickText: 'Preferisci chiamare o scrivere? Scegli il canale.',
    call: 'Chiama (PL)',
    writeSales: 'Scrivi alle vendite',
    writeMarketing: 'Scrivi al marketing',
    whatsapp: 'Scrivi su WhatsApp',
    instagram: 'Scrivi su Instagram',
    friend: 'Diventa amico di Filleo',
    response: 'Di solito rispondiamo entro la stessa giornata lavorativa.',
  },
} as const;

export default function ContactPage() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-12 md:py-16">
        <h1 className="mt-3 text-4xl font-extrabold uppercase leading-tight md:text-6xl">{t.title}</h1>
        <p className="mt-4 max-w-2xl text-brand-dark/70">{t.subtitle}</p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid items-stretch gap-6 md:grid-cols-12 md:gap-8">
          <div className="space-y-6 md:col-span-7 lg:col-span-8">
            <article className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
              <header className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-dark text-brand-light"><Building2 size={20} /></div>
                <h2 className="text-xl font-semibold uppercase tracking-wide md:text-2xl">Filleo Sp. z o.o.</h2>
              </header>

              <ul className="space-y-4 text-[15px] leading-6">
                <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 text-brand-red" /><div>Ul. Michalowicza 13/9<br />43-502 Czechowice-Dziedzice, Polska</div></li>
                <li className="flex gap-3"><User2 className="mt-1 h-5 w-5 text-brand-red" /><div className="flex flex-wrap gap-x-4"><span>NIP 6521745384</span><span>KRS 0000789267</span></div></li>
                <li className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-brand-red" /><div className="flex flex-col"><a className="hover:underline" href="mailto:sales@filleo.pl">sales@filleo.pl</a><a className="hover:underline" href="mailto:marketing@filleo.pl">marketing@filleo.pl</a></div></li>
              </ul>
            </article>

            <article className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
              <header className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-red text-white"><User2 size={20} /></div>
                <div>
                  <h2 className="text-xl font-semibold uppercase tracking-wide md:text-2xl">CEO</h2>
                  <p className="text-brand-dark/80">Karolina Filoniuk-Leonardi</p>
                </div>
              </header>

              <ul className="space-y-4 text-[15px] leading-6">
                <li className="flex gap-3"><Phone className="mt-1 h-5 w-5 text-brand-red" /><div className="flex flex-col"><a className="hover:underline" href="tel:+48691100235">PL +48 691 100 235</a><a className="hover:underline" href="tel:+393473305511">IT +39 347 3305511</a></div></li>
                <li className="flex gap-3"><Mail className="mt-1 h-5 w-5 text-brand-red" /><a className="hover:underline" href="mailto:karolina@filleo.pl">karolina@filleo.pl</a></li>
              </ul>
            </article>
          </div>

          <aside className="self-stretch md:col-span-5 lg:col-span-4">
            <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8">
              <h3 className="text-lg font-semibold uppercase tracking-wide md:text-xl">{t.quick}</h3>
              <p className="mt-2 text-sm text-brand-dark/70">{t.quickText}</p>

              <div className="mt-6 grid gap-3">
                <a href="tel:+48691100235" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"><Phone className="h-4 w-4" />{t.call}</a>
                <a href="mailto:sales@filleo.pl" className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"><Mail className="h-4 w-4" />{t.writeSales}</a>
                <a href="mailto:marketing@filleo.pl" className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"><Mail className="h-4 w-4" />{t.writeMarketing}</a>
                <a href="https://wa.me/48691100235" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500/40 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-emerald-50"><MessageCircle className="h-4 w-4" />{t.whatsapp}</a>
                <a href="https://ig.me/m/USERNAME" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-pink-500/40 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-pink-50"><Instagram className="h-4 w-4" />{t.instagram}</a>
                <Link href="/subskrybuj" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-light px-5 py-3 text-sm font-semibold uppercase tracking-wide ring-1 ring-black/10 hover:bg-black/5">{t.friend} <ArrowRight className="h-4 w-4" /></Link>
              </div>

              <div className="mt-auto pt-4 text-xs text-brand-dark/50">{t.response}</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white/60 py-10 md:py-14">
        <div className="container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow ring-1 ring-black/10">
            <iframe
              title="Map - Filleo"
              src="https://www.google.com/maps?q=Ul.%20Micha%C5%82owicza%2013/9,%2043-502%20Czechowice-Dziedzice,%20Polska&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

