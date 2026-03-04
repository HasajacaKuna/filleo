'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../components/LanguageProvider';

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

type Errors = Partial<Record<keyof FormState | 'birth' | 'submit', string>>;

const COPY = {
  pl: {
    hero: 'Zostań\nprzyjacielem\nFilleo',
    sub: 'Subskrybuj',
    text: 'Dołącz do grona przyjaciół Filleo i otrzymuj inspiracje oraz oferty specjalne.',
    sentTitle: 'Zostań przyjacielem Filleo',
    sentText: 'Dziękujemy za dołączenie! Wkrótce odezwiemy się z nowościami.',
    backHome: 'Wróć na stronę główną',
    firstName: 'Imię*',
    lastName: 'Nazwisko*',
    email: 'Adres e-mail*',
    birth: 'Data urodzenia*',
    zip: 'Kod pocztowy*',
    country: 'Kraj*',
    region: 'Stan/województwo/terytorium (poza USA)',
    consent: 'Chcę otrzymywać wiadomości e-mail od Filleo. Zgadzam się na informacje marketingowe i akceptuję zasady przetwarzania danych w ',
    privacy: 'Polityce prywatności',
    send: 'Wyślij',
    sending: 'Wysyłanie...',
    pFirst: 'Wprowadź swoje imię',
    pLast: 'Wprowadź swoje nazwisko',
    pEmail: 'Wprowadź swój adres e-mail',
    pZip: 'Wprowadź swój kod pocztowy',
    pRegion: 'Wprowadź swój region',
    eFirst: 'Podaj imię',
    eLast: 'Podaj nazwisko',
    eEmail: 'Podaj poprawny e-mail',
    eBirth: 'Podaj prawidłową datę (DD/MM/RRRR)',
    eBirthInvalid: 'Nieprawidłowa data',
    eZip: 'Podaj kod pocztowy',
    eCountry: 'Wybierz kraj',
    eConsent: 'Wymagana zgoda',
    eSend: 'Nie udało się wysłać formularza. Spróbuj ponownie.',
  },
  en: {
    hero: 'Become\na friend\nof Filleo',
    sub: 'Subscribe',
    text: 'Join the Filleo community and receive inspirations and special offers.',
    sentTitle: 'Become a friend of Filleo',
    sentText: 'Thank you for joining! We will contact you soon with updates.',
    backHome: 'Back to homepage',
    firstName: 'First name*',
    lastName: 'Last name*',
    email: 'E-mail address*',
    birth: 'Date of birth*',
    zip: 'Postal code*',
    country: 'Country*',
    region: 'State/region/territory (outside USA)',
    consent: 'I want to receive e-mails from Filleo and agree to marketing communication as described in the ',
    privacy: 'Privacy policy',
    send: 'Send',
    sending: 'Sending...',
    pFirst: 'Enter your first name',
    pLast: 'Enter your last name',
    pEmail: 'Enter your e-mail address',
    pZip: 'Enter your postal code',
    pRegion: 'Enter your region',
    eFirst: 'Enter first name',
    eLast: 'Enter last name',
    eEmail: 'Enter a valid e-mail',
    eBirth: 'Enter a valid date (DD/MM/YYYY)',
    eBirthInvalid: 'Invalid date',
    eZip: 'Enter postal code',
    eCountry: 'Choose country',
    eConsent: 'Consent is required',
    eSend: 'Could not send the form. Please try again.',
  },
  it: {
    hero: 'Diventa\namico\ndi Filleo',
    sub: 'Iscriviti',
    text: 'Entra nella community Filleo e ricevi ispirazioni e offerte speciali.',
    sentTitle: 'Diventa amico di Filleo',
    sentText: 'Grazie per esserti iscritto! Ti scriveremo presto con novita.',
    backHome: 'Torna alla homepage',
    firstName: 'Nome*',
    lastName: 'Cognome*',
    email: 'Indirizzo e-mail*',
    birth: 'Data di nascita*',
    zip: 'CAP*',
    country: 'Paese*',
    region: 'Stato/regione/territorio (fuori USA)',
    consent: 'Voglio ricevere e-mail da Filleo e acconsento alla comunicazione marketing secondo la ',
    privacy: 'Privacy policy',
    send: 'Invia',
    sending: 'Invio in corso...',
    pFirst: 'Inserisci il tuo nome',
    pLast: 'Inserisci il tuo cognome',
    pEmail: 'Inserisci il tuo indirizzo e-mail',
    pZip: 'Inserisci il tuo CAP',
    pRegion: 'Inserisci la tua regione',
    eFirst: 'Inserisci il nome',
    eLast: 'Inserisci il cognome',
    eEmail: 'Inserisci una e-mail valida',
    eBirth: 'Inserisci una data valida (GG/MM/AAAA)',
    eBirthInvalid: 'Data non valida',
    eZip: 'Inserisci il CAP',
    eCountry: 'Scegli il paese',
    eConsent: 'Il consenso e obbligatorio',
    eSend: 'Impossibile inviare il modulo. Riprova.',
  },
} as const;

export default function SubscribePage() {
  const { language } = useLanguage();
  const t = COPY[language];

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

  type TextKeys = Exclude<keyof FormState, 'consent'>;

  const onFieldChange = (name: TextKeys) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: '' } as Errors));
    if (name === 'day' || name === 'month' || name === 'year') {
      setErrors((er) => ({ ...er, birth: '' }));
    }
  };

  const onConsentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked;
    setForm((f) => ({ ...f, consent: checked }));
    setErrors((er) => ({ ...er, consent: '' } as Errors));
  };

  function validate(): boolean {
    const er: Errors = {};
    if (!form.firstName.trim()) er.firstName = t.eFirst;
    if (!form.lastName.trim()) er.lastName = t.eLast;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = t.eEmail;

    const d = Number(form.day);
    const m = Number(form.month);
    const y = Number(form.year);
    const validDay = Number.isInteger(d) && d >= 1 && d <= 31;
    const validMonth = Number.isInteger(m) && m >= 1 && m <= 12;
    const validYear = Number.isInteger(y) && y >= 1900 && y <= new Date().getFullYear();
    if (!validDay || !validMonth || !validYear) {
      er.birth = t.eBirth;
    } else {
      const date = new Date(y, m - 1, d);
      if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) er.birth = t.eBirthInvalid;
    }

    if (!form.zip.trim()) er.zip = t.eZip;
    if (!form.country.trim()) er.country = t.eCountry;
    if (!form.consent) er.consent = t.eConsent;

    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          language,
          ...form,
        }),
      });

      if (!res.ok) {
        throw new Error('submit_failed');
      }
      setSent(true);
      setErrors({});
    } catch {
      setErrors((prev) => ({ ...prev, submit: t.eSend }));
    } finally {
      setSending(false);
    }
  }

  const inputBase = 'w-full rounded-md border border-brand-dark/15 bg-white px-4 py-3 outline-none placeholder:text-black/40 focus:border-brand-red focus:ring-2 focus:ring-brand-beige/60';
  const labelBase = 'mb-2 block text-sm font-semibold text-brand-dark';

  if (sent) {
    return (
      <main className="bg-brand-light text-brand-dark">
        <section className="container py-16 md:py-24">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide md:text-6xl">{t.sentTitle}</h1>
          <p className="mt-6 max-w-2xl text-brand-dark/70">{t.sentText}</p>
          <div className="mt-8">
            <Link href="/" className="inline-flex items-center rounded-full bg-brand-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red">{t.backHome}</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h1 className="mt-4 text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
              {t.hero.split('\n').map((line, i) => (
                <span key={`${line}-${i}`}>
                  {line}
                  <br className="hidden md:block" />
                </span>
              ))}
            </h1>

            <h2 className="mt-8 text-xl font-semibold uppercase tracking-wide text-brand-red">{t.sub}</h2>
            <p className="mt-4 max-w-2xl text-brand-dark/70">{t.text}</p>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <Image src="/images/horsePhoto.jpg" alt="Horse Filleo" fill className="object-cover" />
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-10 max-w-3xl space-y-6">
          <div>
            <label className={labelBase}>{t.firstName}</label>
            <input type="text" value={form.firstName} onChange={onFieldChange('firstName')} className={inputBase} placeholder={t.pFirst} aria-invalid={!!errors.firstName} />
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.lastName}</label>
            <input type="text" value={form.lastName} onChange={onFieldChange('lastName')} className={inputBase} placeholder={t.pLast} aria-invalid={!!errors.lastName} />
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.email}</label>
            <input type="email" value={form.email} onChange={onFieldChange('email')} className={inputBase} placeholder={t.pEmail} aria-invalid={!!errors.email} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.birth}</label>
            <div className="grid grid-cols-3 gap-3">
              <input inputMode="numeric" maxLength={2} value={form.day} onChange={onFieldChange('day')} className={inputBase} placeholder="DD" aria-invalid={!!errors.birth} />
              <input inputMode="numeric" maxLength={2} value={form.month} onChange={onFieldChange('month')} className={inputBase} placeholder="MM" aria-invalid={!!errors.birth} />
              <input inputMode="numeric" maxLength={4} value={form.year} onChange={onFieldChange('year')} className={inputBase} placeholder="YYYY" aria-invalid={!!errors.birth} />
            </div>
            {errors.birth && <p className="mt-1 text-xs text-red-600">{errors.birth}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.zip}</label>
            <input type="text" value={form.zip} onChange={onFieldChange('zip')} className={inputBase} placeholder={t.pZip} aria-invalid={!!errors.zip} />
            {errors.zip && <p className="mt-1 text-xs text-red-600">{errors.zip}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.country}</label>
            <select value={form.country} onChange={onFieldChange('country')} className={`${inputBase} appearance-none`} aria-invalid={!!errors.country}>
              <option className="bg-white text-brand-dark" value="Poland">Poland</option>
              <option className="bg-white text-brand-dark" value="Italy">Italy</option>
              <option className="bg-white text-brand-dark" value="Germany">Germany</option>
              <option className="bg-white text-brand-dark" value="Other">Other</option>
            </select>
            {errors.country && <p className="mt-1 text-xs text-red-600">{errors.country}</p>}
          </div>

          <div>
            <label className={labelBase}>{t.region}</label>
            <input type="text" value={form.region} onChange={onFieldChange('region')} className={inputBase} placeholder={t.pRegion} />
          </div>

          <div className="space-y-2">
            <label className="flex items-start gap-3 text-sm leading-6">
              <input type="checkbox" checked={form.consent} onChange={onConsentChange} className="mt-1 h-4 w-4 rounded border-brand-dark/30 accent-brand-red" />
              <span className="text-brand-dark/80">
                {t.consent}
                <Link href="/polityka-prywatnosci" className="text-brand-red underline">{t.privacy}</Link>.
              </span>
            </label>
            {errors.consent && <p className="text-xs text-red-600">{errors.consent}</p>}
          </div>

          <button type="submit" disabled={sending} className="mt-2 inline-flex items-center rounded-full bg-brand-dark px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige disabled:opacity-50">
            {sending ? t.sending : t.send}
          </button>
          {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
        </form>
      </section>
    </main>
  );
}

