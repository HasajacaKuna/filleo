'use client';

import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

const SECTIONS = {
  pl: [
    ['1. Administrator danych', 'Administratorem danych jest Filleo Sp. z o.o. z siedziba w Czechowicach-Dziedzicach.'],
    ['2. Zakres i cele', 'Przetwarzamy dane do kontaktu, obslugi zapytan, subskrypcji, rekrutacji oraz realizacji relacji handlowych.'],
    ['3. Podstawy prawne', 'Podstawy: zgoda, realizacja umowy, obowiazki prawne oraz uzasadniony interes administratora.'],
    ['4. Odbiorcy danych', 'Dane moga byc przekazywane dostawcom IT, ksiegowosci, podmiotom logistycznym i doradcom.'],
    ['5. Okres przechowywania', 'Dane przechowujemy przez okres niezbedny do realizacji celu lub wymagany prawem.'],
    ['6. Twoje prawa', 'Masz prawo dostepu, sprostowania, usuniecia, ograniczenia, sprzeciwu i skargi do organu nadzorczego.'],
    ['7. Cookies', 'Uzywamy cookies niezbednych oraz - za zgoda - analitycznych i marketingowych.'],
    ['8. Kontakt', 'W sprawach danych osobowych: sales@filleo.pl oraz marketing@filleo.pl.'],
  ],
  en: [
    ['1. Data controller', 'The data controller is Filleo Sp. z o.o., based in Czechowice-Dziedzice, Poland.'],
    ['2. Scope and purpose', 'We process data for contact, inquiries, subscription, recruitment, and business cooperation.'],
    ['3. Legal basis', 'Legal basis: consent, contract performance, legal obligations, and legitimate interest.'],
    ['4. Data recipients', 'Data may be shared with IT providers, accounting, logistics operators, and advisors.'],
    ['5. Retention period', 'We keep data only as long as needed for the purpose or as required by law.'],
    ['6. Your rights', 'You have the right to access, rectify, erase, restrict, object, and file a complaint.'],
    ['7. Cookies', 'We use necessary cookies and, with consent, analytics and marketing cookies.'],
    ['8. Contact', 'For privacy matters: sales@filleo.pl and marketing@filleo.pl.'],
  ],
  it: [
    ['1. Titolare del trattamento', 'Il titolare del trattamento e Filleo Sp. z o.o., con sede a Czechowice-Dziedzice.'],
    ['2. Ambito e finalita', 'Trattiamo i dati per contatto, richieste, iscrizione, selezione e relazioni commerciali.'],
    ['3. Base giuridica', 'Basi giuridiche: consenso, esecuzione del contratto, obblighi legali e interesse legittimo.'],
    ['4. Destinatari dei dati', 'I dati possono essere condivisi con fornitori IT, contabilita, logistica e consulenti.'],
    ['5. Conservazione', 'Conserviamo i dati per il tempo necessario alla finalita o previsto dalla legge.'],
    ['6. I tuoi diritti', 'Hai diritto di accesso, rettifica, cancellazione, limitazione, opposizione e reclamo.'],
    ['7. Cookie', 'Usiamo cookie necessari e, con consenso, cookie analitici e marketing.'],
    ['8. Contatti', 'Per privacy: sales@filleo.pl e marketing@filleo.pl.'],
  ],
} as const;

const HEADER = {
  pl: {
    title: 'Polityka prywatnosci',
    desc: 'Dokument wyjasnia, jak przetwarzamy Twoje dane osobowe w serwisie Filleo.',
    update: 'Ostatnia aktualizacja: 24 lutego 2026',
    toc: 'Spis tresci',
    back: 'Wroc na strone glowna',
    sub: 'Zostan przyjacielem Filleo',
  },
  en: {
    title: 'Privacy policy',
    desc: 'This document explains how we process your personal data on the Filleo website.',
    update: 'Last update: February 24, 2026',
    toc: 'Table of contents',
    back: 'Back to homepage',
    sub: 'Become a Filleo friend',
  },
  it: {
    title: 'Informativa privacy',
    desc: 'Questo documento spiega come trattiamo i tuoi dati personali sul sito Filleo.',
    update: 'Ultimo aggiornamento: 24 febbraio 2026',
    toc: 'Indice',
    back: 'Torna alla homepage',
    sub: 'Diventa amico di Filleo',
  },
} as const;

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();
  const h = HEADER[language];
  const sections = SECTIONS[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-12 md:py-16">
        <h1 className="mt-3 text-3xl font-extrabold uppercase leading-tight md:text-5xl">{h.title}</h1>
        <p className="mt-3 text-brand-dark/70">{h.desc}</p>
        <p className="mt-2 text-sm text-brand-dark/60">{h.update}</p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          <aside className="md:col-span-4 lg:col-span-3">
            <nav className="sticky top-24 rounded-2xl bg-white p-4 text-sm shadow-xl ring-1 ring-black/5 md:p-5">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wide">{h.toc}</h2>
              <ul className="space-y-2">
                {sections.map(([label], index) => (
                  <li key={label}>
                    <a href={`#sec-${index + 1}`} className="hover:underline">{label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="prose prose-neutral max-w-none rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:col-span-8 md:p-8 lg:col-span-9">
            {sections.map(([title, text], index) => (
              <section key={title}>
                <h2 id={`sec-${index + 1}`} className={index === 0 ? '!mt-0' : ''}>{title}</h2>
                <p>{text}</p>
              </section>
            ))}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/" className="inline-flex items-center rounded-full border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5">{h.back}</Link>
              <Link href="/subskrybuj" className="inline-flex items-center rounded-full bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red">{h.sub}</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

