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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const onChange =
    (name: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value =
        e.currentTarget instanceof HTMLInputElement && e.currentTarget.type === 'checkbox'
          ? (e.currentTarget as HTMLInputElement).checked
          : e.currentTarget.value;
      setForm((f) => ({ ...f, [name]: value as any }));
      setErrors((er) => ({ ...er, [name]: '' }));
    };

  function validate(): boolean {
    const er: Record<string, string> = {};
    if (!form.firstName.trim()) er.firstName = 'Podaj imię';
    if (!form.lastName.trim()) er.lastName = 'Podaj nazwisko';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Podaj poprawny e-mail';
    if (!/^\d{1,2}$/.test(form.day) || +form.day < 1 || +form.day > 31) er.day = 'DD 1–31';
    if (!/^\d{1,2}$/.test(form.month) || +form.month < 1 || +form.month > 12) er.month = 'MM 1–12';
    if (!/^\d{4}$/.test(form.year) || +form.year < 1900) er.year = 'Rok 1900+';
    if (!form.zip.trim()) er.zip = 'Podaj kod pocztowy';
    if (!form.country.trim()) er.country = 'Wybierz kraj';
    if (!form.consent) er.consent = 'Wymagana zgoda';
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 900)); // TODO: podłącz API
      setSent(true);
    } finally {
      setSending(false);
    }
  }

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

  const inputBase =
    'w-full rounded-md bg-white px-4 py-3 border border-brand-dark/15 placeholder:text-black/40 outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-beige/60';
  const labelBase = 'mb-2 block text-sm font-semibold text-brand-dark';

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-16 md:py-24">
        {/* Nagłówek */}
        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-[0.95] uppercase">
          Zostań <br className="hidden md:block" />
          przyjacielem <br className="hidden md:block" />
          Filleo
        </h1>
        <p className="mt-4 max-w-2xl text-brand-dark/70">
          Dołącz do grona przyjaciół Filleo — otrzymuj przepisy, inspiracje, zaproszenia oraz oferty
          specjalne.
        </p>

        {/* Formularz */}
        <form onSubmit={onSubmit} className="mt-10 max-w-3xl space-y-6">
          <div>
            <label className={labelBase}>Imię*</label>
            <input type="text" value={form.firstName} onChange={onChange('firstName')} className={inputBase}
              placeholder="Wprowadź swoje imię" aria-invalid={!!errors.firstName} />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          <div>
            <label className={labelBase}>Nazwisko*</label>
            <input type="text" value={form.lastName} onChange={onChange('lastName')} className={inputBase}
              placeholder="Wprowadź swoje nazwisko" aria-invalid={!!errors.lastName} />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          <div>
            <label className={labelBase}>Adres e-mail*</label>
            <input type="email" value={form.email} onChange={onChange('email')} className={inputBase}
              placeholder="Wprowadź swój adres e-mail" aria-invalid={!!errors.email} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className={labelBase}>Data urodzenia*</label>
            <div className="grid grid-cols-3 gap-3">
              <input inputMode="numeric" maxLength={2} value={form.day} onChange={onChange('day')}
                className={inputBase} placeholder="DD" aria-invalid={!!errors.day} />
              <input inputMode="numeric" maxLength={2} value={form.month} onChange={onChange('month')}
                className={inputBase} placeholder="MM" aria-invalid={!!errors.month} />
              <input inputMode="numeric" maxLength={4} value={form.year} onChange={onChange('year')}
                className={inputBase} placeholder="YYYY" aria-invalid={!!errors.year} />
            </div>
            {(errors.day || errors.month || errors.year) && (
              <p className="mt-1 text-xs text-red-600">{errors.day || errors.month || errors.year}</p>
            )}
          </div>

          <div>
            <label className={labelBase}>Kod pocztowy*</label>
            <input type="text" value={form.zip} onChange={onChange('zip')} className={inputBase}
              placeholder="Wprowadź swój kod pocztowy" aria-invalid={!!errors.zip} />
            {errors.zip && <p className="mt-1 text-xs text-red-600">{errors.zip}</p>}
          </div>

          <div>
            <label className={labelBase}>Kraj*</label>
            <select value={form.country} onChange={onChange('country')}
              className={`${inputBase} appearance-none`}>
              <option className="bg-white text-brand-dark" value="Poland">Poland</option>
              <option className="bg-white text-brand-dark" value="Italy">Italy</option>
              <option className="bg-white text-brand-dark" value="Germany">Germany</option>
              <option className="bg-white text-brand-dark" value="Other">Other</option>
            </select>
            {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
          </div>

          <div>
            <label className={labelBase}>Stan/województwo/terytorium (poza USA)</label>
            <input type="text" value={form.region} onChange={onChange('region')} className={inputBase}
              placeholder="Wprowadź swój stan/województwo/terytorium" />
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 text-sm leading-6">
              <input type="checkbox" checked={form.consent} onChange={onChange('consent')}
                className="mt-1 h-4 w-4 rounded border-brand-dark/30 accent-brand-red" />
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

          <button type="submit" disabled={sending}
            className="mt-2 inline-flex items-center rounded-full bg-brand-dark px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige disabled:opacity-50">
            {sending ? 'Wysyłanie…' : 'Wyślij'}
          </button>
        </form>
      </section>
    </main>
  );
}
