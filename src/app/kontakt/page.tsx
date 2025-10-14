// app/kontakt/page.tsx
'use client';

import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  User2,
  ArrowRight,
  MessageCircle,
  Instagram,
} from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="bg-brand-light text-brand-dark">
      {/* NAGŁÓWEK */}
      <section className="container py-12 md:py-16">
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold uppercase leading-tight">
          Kontakt
        </h1>
        <p className="mt-4 max-w-2xl text-brand-dark/70">
          Jesteśmy do Twojej dyspozycji — poniżej znajdziesz pełne dane kontaktowe Filleo
          oraz bezpośredni kontakt do CEO.
        </p>
      </section>

      {/* GŁÓWNY UKŁAD */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-6 md:gap-8 md:grid-cols-12 items-stretch">
          {/* LEWA KOLUMNA: Firma + CEO */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            {/* Firma */}
            <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/5">
              <header className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-dark text-brand-light">
                  <Building2 size={20} />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wide">
                  Filleo Sp. z o.o.
                </h2>
              </header>

              <ul className="space-y-4 text-[15px] leading-6">
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-brand-red" />
                  <div>
                    Ul. Michałowicza 13/9<br />
                    43-502 Czechowice-Dziedzice, Polska
                  </div>
                </li>
                <li className="flex gap-3">
                  <User2 className="mt-1 h-5 w-5 text-brand-red" />
                  <div className="flex flex-wrap gap-x-4">
                    <span>NIP 6521745384</span>
                    <span>KRS 0000789267</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 text-brand-red" />
                  <div className="flex flex-col">
                    <a className="hover:underline" href="mailto:sales@filleo.pl">sales@filleo.pl</a>
                    <a className="hover:underline" href="mailto:marketing@filleo.pl">marketing@filleo.pl</a>
                  </div>
                </li>
              </ul>
            </article>

            {/* CEO */}
            <article className="rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/5">
              <header className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-red text-white">
                  <User2 size={20} />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wide">
                    CEO
                  </h2>
                  <p className="text-brand-dark/80">Karolina Filoniuk-Leonardi</p>
                </div>
              </header>

              <ul className="space-y-4 text-[15px] leading-6">
                <li className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 text-brand-red" />
                  <div className="flex flex-col">
                    <a className="hover:underline" href="tel:+48691100235">PL +48 691 100 235</a>
                    <a className="hover:underline" href="tel:+393473305511">IT +39 347 3305511</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 text-brand-red" />
                  <a className="hover:underline" href="mailto:karolina@filleo.pl">karolina@filleo.pl</a>
                </li>
              </ul>
            </article>
          </div>

          {/* PRAWA KOLUMNA: Szybki kontakt – pełna wysokość rzędu */}
          <aside className="md:col-span-5 lg:col-span-4 self-stretch">
            <div className="h-full rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/5 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
                Szybki kontakt
              </h3>
              <p className="mt-2 text-sm text-brand-dark/70">
                Wolisz zadzwonić czy napisać? Wybierz wygodny kanał.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="tel:+48691100235"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
                >
                  <Phone className="h-4 w-4" />
                  Zadzwoń (PL)
                </a>
                <a
                  href="mailto:sales@filleo.pl"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"
                >
                  <Mail className="h-4 w-4" />
                  Napisz do sprzedaży
                </a>
                <a
                  href="mailto:marketing@filleo.pl"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"
                >
                  <Mail className="h-4 w-4" />
                  Napisz do marketingu
                </a>

                {/* NOWE: WhatsApp */}
                <a
                  href="https://wa.me/48691100235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-emerald-500/40 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-emerald-50"
                >
                  <MessageCircle className="h-4 w-4" />
                  Napisz na WhatsApp
                </a>

                {/* NOWE: Instagram DM (podmień USERNAME na właściwy) */}
                <a
                  href="https://ig.me/m/USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-pink-500/40 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-pink-50"
                >
                  <Instagram className="h-4 w-4" />
                  Napisz na Instagramie
                </a>

                <Link
                  href="/subskrybuj"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-light px-5 py-3 text-sm font-semibold uppercase tracking-wide ring-1 ring-black/10 hover:bg-black/5"
                >
                  Zostań przyjacielem Filleo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* „Dorabiamy” przestrzeń, by panel wypełnił całą wysokość kolumny */}
              <div className="mt-auto pt-4 text-xs text-brand-dark/50">
                Odpowiadamy zazwyczaj tego samego dnia roboczego.
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* MAPA */}
      <section className="bg-white/60 py-10 md:py-14">
        <div className="container">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow">
            <iframe
              title="Mapa — Filleo Sp. z o.o."
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
