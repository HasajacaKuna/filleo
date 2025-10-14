// app/subskrybuj/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  day: string;
  month: string;
  year: string;
  zip: string;
  country: string;
  region: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState | 'birth', string>>;

export default function SubscribePage() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    day: '',
    month: '',
    year: '',
    zip: '',
    country: 'Poland',
    region: '',
    consent: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  // --- Handlery BEZ any ---
  type TextKeys = Exclude<keyof FormState, 'consent'>;

  const onFieldChange =
    (name: TextKeys) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [name]: e.currentTarget.value }));
      setErrors((er) => ({ ...er, [name]: '' } as Errors));
      if (name === 'day' || name === 'month' || name === 'year') {
        setErrors((er) => ({ ...er, birth: '' }));
      }
    };

  const onConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, consent: e.currentTarget.checked }));
    setErrors((er) => ({ ...er, consent: '' } as Errors));
  };

  // --- Walidacja ---
  function validate(): boolean {
    const er: Errors = {};
    if (!form.firstName.trim()) er.firstName = 'Podaj imię';
    if (!form.lastName.trim()) er.lastName = 'Podaj nazwisko';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Podaj poprawny e-mail';

    const d = Number(form.day);
    const m = Number(form.month);
    const y = Number(form.year);
    const validDay = Number.isInteger(d) && d >= 1 && d <= 31;
    const validMonth = Number.isInteger(m) && m >= 1 && m <= 12;
    const validYear = Number.isInteger(y) && y >= 1900 && y <= new Date().getFullYear();
    if (!validDay || !validMonth || !validYear) {
      er.birth = 'Podaj prawidłową datę (DD/MM/RRRR)';
    } else {
      const date = new Date(y, m - 1, d);
      if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
        er.birth = 'Nieprawidłowa data';
      }
    }

    if (!form.zip.trim()) er.zip = 'Podaj kod pocztowy';
    if (!form.country.trim()) er.country = 'Wybierz kraj';
    if (!form.consent) er.consent = 'Wymagana zgoda';

    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      // TODO: podłącz realne API, np. POST /api/subscribe
      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  // --- Style pomocnicze ---
  const inputBase =
    'w-full rounded-md bg-white px-4 py-3 border border-brand-dark/15 placeholder:text-black/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-beige/60';
  const labelBase = 'mb-2 block text-sm font-semibold text-brand-dark';

  if (sent) {
    return (
      <main className="bg-brand-light text-brand-dark">
        <section className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">
            Zostań przyjacielem Filleo
          </h1>
          <p className="mt-6 max-w-2xl text-brand-dark/70">
            Dziękujemy za dołączenie! Wkrótce odezwiemy się z nowościami, inspiracjami i
            zaproszeniami na wydarzenia.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-16 md:py-24">
        {/* Nagłówek */}
        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95] uppercase">
          Zostań <br className="hidden md:block" />
          przyjacielem <br className="hidden md:block" />
          Filleo
        </h1>

        <h2 className="mt-8 text-xl font-semibold uppercase tracking-wide text-brand-red">
          Subskrybuj
        </h2>
        <p className="mt-4 max-w-2xl text-brand-dark/70">
          Dołącz do grona przyjaciół Filleo — otrzymuj przepisy, inspiracje, zaproszenia oraz oferty
          specjalne.
        </p>

        {/* Formularz */}
        <form onSubmit={onSubmit} className="mt-10 max-w-3xl space-y-6">
          <div>
            <label className={labelBase}>Imię*</label>
            <input
              type="text"
              value={form.firstName}
              onChange={onFieldChange('firstName')}
              className={inputBase}
              placeholder="Wprowadź swoje imię"
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          <div>
            <label className={labelBase}>Nazwisko*</label>
            <input
              type="text"
              value={form.lastName}
              onChange={onFieldChange('lastName')}
              className={inputBase}
              placeholder="Wprowadź swoje nazwisko"
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          <div>
            <label className={labelBase}>Adres e-mail*</label>
            <input
              type="email"
              value={form.email}
              onChange={onFieldChange('email')}
              className={inputBase}
              placeholder="Wprowadź swój adres e-mail"
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className={labelBase}>Data urodzenia*</label>
            <div className="grid grid-cols-3 gap-3">
              <input
                inputMode="numeric"
                maxLength={2}
                value={form.day}
                onChange={onFieldChange('day')}
                className={inputBase}
                placeholder="DD"
                aria-invalid={!!errors.birth}
              />
              <input
                inputMode="numeric"
                maxLength={2}
                value={form.month}
                onChange={onFieldChange('month')}
                className={inputBase}
                placeholder="MM"
                aria-invalid={!!errors.birth}
              />
              <input
                inputMode="numeric"
                maxLength={4}
                value={form.year}
                onChange={onFieldChange('year')}
                className={inputBase}
                placeholder="RRRR"
                aria-invalid={!!errors.birth}
              />
            </div>
            {errors.birth && <p className="mt-1 text-xs text-red-600">{errors.birth}</p>}
          </div>

          <div>
            <label className={labelBase}>Kod pocztowy*</label>
            <input
              type="text"
              value={form.zip}
              onChange={onFieldChange('zip')}
              className={inputBase}
              placeholder="Wprowadź swój kod pocztowy"
              aria-invalid={!!errors.zip}
            />
            {errors.zip && <p className="mt-1 text-xs text-red-600">{errors.zip}</p>}
          </div>

          <div>
            <label className={labelBase}>Kraj*</label>
            <select
              value={form.country}
              onChange={onFieldChange('country')}
              className={`${inputBase} appearance-none`}
              aria-invalid={!!errors.country}
            >
              <option className="bg-white text-brand-dark" value="Poland">Poland</option>
              <option className="bg-white text-brand-dark" value="Italy">Italy</option>
              <option className="bg-white text-brand-dark" value="Germany">Germany</option>
              <option className="bg-white text-brand-dark" value="Other">Other</option>
            </select>
            {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
          </div>

          <div>
            <label className={labelBase}>Stan/województwo/terytorium (poza USA)</label>
            <input
              type="text"
              value={form.region}
              onChange={onFieldChange('region')}
              className={inputBase}
              placeholder="Wprowadź swój stan/województwo/terytorium"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 text-sm leading-6">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={onConsentChange}
                className="mt-1 h-4 w-4 rounded border-brand-dark/30 accent-brand-red"
              />
              <span className="text-brand-dark/80">
                Chcę otrzymywać wiadomości e-mail od Filleo. Zgadzam się na informacje marketingowe
                o produktach, usługach i wydarzeniach. Zgodę mogę wycofać w dowolnym momencie.
                Administratorem danych jest Filleo. Szczegóły w{' '}
                <Link href="/polityka-prywatnosci" className="underline text-brand-red">
                  Polityce prywatności
                </Link>.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-2 inline-flex items-center rounded-full bg-brand-dark px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige disabled:opacity-50"
          >
            {sending ? 'Wysyłanie…' : 'Wyślij'}
          </button>
        </form>
      </section>
    </main>
  );
}
