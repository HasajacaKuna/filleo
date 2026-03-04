'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useLanguage } from '../components/LanguageProvider';

type FormState = {
  name: string;
  email: string;
  message: string;
  file: File | null;
};

const COPY = {
  pl: {
    thanks: 'Dziękujemy!',
    thanksText: 'Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się, jeśli będziemy mieli dopasowaną rekrutację.',
    title: 'Jesteśmy\nw kontakcie',
    intro: 'Dołącz do Filleo. Jeśli kochasz włoską kulturę kulinarną i pracę z gastronomią, wyślij nam wiadomość i CV.',
    b1: 'Elastyczna współpraca (B2B / umowa)',
    b2: 'Realny wpływ na ofertę i marki',
    b3: 'Wydarzenia, degustacje, targi',
    name: 'Imię i nazwisko*',
    email: 'Adres e-mail*',
    message: 'Wiadomość*',
    file: 'CV / portfolio (PDF, DOCX, max 8 MB)*',
    fileAdd: 'Kliknij, aby dodać plik...',
    choose: 'Wybierz',
    send: 'Wyślij',
    sending: 'Wysyłanie...',
    eName: 'Podaj imię i nazwisko',
    eEmail: 'Podaj poprawny e-mail',
    eMessage: 'Napisz kilka zdań o sobie',
    eFile: 'Dodaj CV lub portfolio',
    eSize: 'Maksymalny rozmiar: 8 MB',
    pName: 'Wprowadź swoje imię i nazwisko',
    pEmail: 'Wprowadź adres e-mail',
    pMessage: 'Kilka zdań o doświadczeniu i motywacji',
    eSend: 'Nie udało się wysłać formularza. Spróbuj ponownie.',
  },
  en: {
    thanks: 'Thank you!',
    thanksText: 'We received your application. We will contact you if we have a matching role.',
    title: 'Lets stay\nin touch',
    intro: 'Join Filleo. If you love Italian culinary culture and working with hospitality, send us a short message and CV.',
    b1: 'Flexible cooperation (B2B / contract)',
    b2: 'Real impact on offer and brands',
    b3: 'Events, tastings, trade fairs',
    name: 'Full name*',
    email: 'E-mail address*',
    message: 'Message*',
    file: 'CV / portfolio (PDF, DOCX, max 8 MB)*',
    fileAdd: 'Click to add file...',
    choose: 'Choose',
    send: 'Send',
    sending: 'Sending...',
    eName: 'Enter your full name',
    eEmail: 'Enter a valid e-mail',
    eMessage: 'Write a few lines about yourself',
    eFile: 'Add CV or portfolio',
    eSize: 'Maximum size is 8 MB',
    pName: 'Enter your full name',
    pEmail: 'Enter your e-mail address',
    pMessage: 'A few lines about your experience and motivation',
    eSend: 'Could not send the form. Please try again.',
  },
  it: {
    thanks: 'Grazie!',
    thanksText: 'Abbiamo ricevuto la tua candidatura. Ti contatteremo se avremo una selezione adatta.',
    title: 'Restiamo\nin contatto',
    intro: 'Unisciti a Filleo. Se ami la cultura culinaria italiana e il settore horeca, inviaci un messaggio e il CV.',
    b1: 'Collaborazione flessibile (B2B / contratto)',
    b2: 'Impatto reale su offerta e marchi',
    b3: 'Eventi, degustazioni, fiere',
    name: 'Nome e cognome*',
    email: 'Indirizzo e-mail*',
    message: 'Messaggio*',
    file: 'CV / portfolio (PDF, DOCX, max 8 MB)*',
    fileAdd: 'Clicca per aggiungere il file...',
    choose: 'Scegli',
    send: 'Invia',
    sending: 'Invio in corso...',
    eName: 'Inserisci nome e cognome',
    eEmail: 'Inserisci una e-mail valida',
    eMessage: 'Scrivi alcune righe su di te',
    eFile: 'Aggiungi CV o portfolio',
    eSize: 'Dimensione massima 8 MB',
    pName: 'Inserisci nome e cognome',
    pEmail: 'Inserisci indirizzo e-mail',
    pMessage: 'Alcune righe su esperienza e motivazione',
    eSend: 'Impossibile inviare il modulo. Riprova.',
  },
} as const;

export default function CareerPage() {
  const { language } = useLanguage();
  const t = COPY[language];

  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', file: null });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChangeField = (key: Exclude<keyof FormState, 'file'>) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => ({ ...er, [key]: '' }));
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0] ?? null;
    setForm((f) => ({ ...f, file }));
    setErrors((er) => ({ ...er, file: '' }));
  };

  function validate() {
    const er: Record<string, string> = {};
    if (!form.name.trim()) er.name = t.eName;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = t.eEmail;
    if (!form.message.trim()) er.message = t.eMessage;
    if (!form.file) er.file = t.eFile;
    else if (form.file.size > 8 * 1024 * 1024) er.file = t.eSize;
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      const payload = new FormData();
      payload.append('language', language);
      payload.append('name', form.name);
      payload.append('email', form.email);
      payload.append('message', form.message);
      if (form.file) {
        payload.append('file', form.file);
      }

      const res = await fetch('/api/career', {
        method: 'POST',
        body: payload,
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

  if (sent) {
    return (
      <main className="bg-brand-light text-brand-dark">
        <section className="container py-16 md:py-24">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide text-brand-red md:text-6xl">{t.thanks}</h1>
          <p className="mt-4 max-w-2xl text-brand-dark/70">{t.thanksText}</p>
        </section>
      </main>
    );
  }

  const inputBase = 'w-full rounded-md border border-brand-dark/15 bg-white px-4 py-3 outline-none placeholder:text-black/40 focus:border-brand-red focus:ring-2 focus:ring-brand-beige/60';
  const labelBase = 'mb-2 block text-sm font-semibold text-brand-dark';

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold uppercase leading-[0.98] text-brand-dark md:text-7xl">
              {t.title.split('\n').map((line, i) => (
                <span key={`${line}-${i}`}>
                  {line}
                  <br className="hidden md:block" />
                </span>
              ))}
            </h1>
            <p className="mt-4 max-w-md text-brand-dark/70">{t.intro}</p>
            <ul className="mt-6 space-y-2 text-sm text-brand-dark/70">
              <li>- {t.b1}</li>
              <li>- {t.b2}</li>
              <li>- {t.b3}</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 md:space-y-6">
            <div>
              <label className={labelBase} htmlFor="name">{t.name}</label>
              <input id="name" type="text" value={form.name} onChange={onChangeField('name')} className={inputBase} placeholder={t.pName} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {errors.name && <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className={labelBase} htmlFor="email">{t.email}</label>
              <input id="email" type="email" value={form.email} onChange={onChangeField('email')} className={inputBase} placeholder={t.pEmail} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined} />
              {errors.email && <p id="email-err" className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className={labelBase} htmlFor="message">{t.message}</label>
              <textarea id="message" value={form.message} onChange={onChangeField('message')} className={`${inputBase} min-h-[160px] resize-y`} placeholder={t.pMessage} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} />
              {errors.message && <p id="message-err" className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <div>
              <label className={labelBase}>{t.file}</label>
              <label className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-dashed border-brand-dark/25 bg-white px-4 py-3 hover:border-brand-red">
                <div className="text-sm text-brand-dark/70">
                  {form.file ? (
                    <>
                      <span className="font-semibold text-brand-dark">{form.file.name}</span>{' '}
                      <span className="text-xs">({(form.file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </>
                  ) : (
                    <>{t.fileAdd}</>
                  )}
                </div>
                <span className="rounded-full bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-light">{t.choose}</span>
                <input type="file" accept=".pdf,.doc,.docx,.rtf" onChange={onChangeFile} className="sr-only" />
              </label>
              {errors.file && <p className="mt-1 text-xs text-red-600">{errors.file}</p>}
            </div>

            <button type="submit" disabled={sending} className="inline-flex items-center rounded-full bg-brand-dark px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige disabled:opacity-50">
              {sending ? t.sending : t.send}
            </button>
            {errors.submit && <p className="text-xs text-red-600">{errors.submit}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}

