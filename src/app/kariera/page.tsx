// app/kariera/page.tsx
'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
  file: File | null;
};

export default function CareerPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
    file: null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChangeField =
    (key: Exclude<keyof FormState, 'file'>) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.currentTarget.value }));
      setErrors((er) => ({ ...er, [key]: '' }));
    };

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0] ?? null;
    setForm((f) => ({ ...f, file }));
    setErrors((er) => ({ ...er, file: '' }));
  };

  function validate() {
    const er: Record<string, string> = {};
    if (!form.name.trim()) er.name = 'Podaj imię i nazwisko';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) er.email = 'Podaj poprawny e-mail';
    if (!form.message.trim()) er.message = 'Napisz kilka zdań o sobie';
    if (!form.file) er.file = 'Dodaj CV lub portfolio';
    else if (form.file.size > 8 * 1024 * 1024) er.file = 'Maksymalny rozmiar 8 MB';
    // (opcjonalnie) prosty whitelist typów
    // else if (!['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/rtf'].includes(form.file.type)) er.file = 'Dopuszczalne: PDF, DOC, DOCX, RTF';
    setErrors(er);
    return Object.keys(er).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      // TODO: wyślij do /api/career (FormData z plikiem)
      // const fd = new FormData();
      // fd.append('name', form.name);
      // fd.append('email', form.email);
      // fd.append('message', form.message);
      // if (form.file) fd.append('file', form.file);
      // await fetch('/api/career', { method: 'POST', body: fd });

      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <main className="bg-brand-light text-brand-dark">
        <section className="container py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-brand-red">
            Dziękujemy!
          </h1>
          <p className="mt-4 max-w-2xl text-brand-dark/70">
            Otrzymaliśmy Twoje zgłoszenie. Skontaktujemy się, jeśli będziemy mieli dopasowaną
            rekrutację.
          </p>
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
        <div className="grid items-start gap-10 md:grid-cols-2">
          {/* LEWA STRONA — nagłówek i opis */}
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[0.98] uppercase text-brand-dark ">
              Jesteśmy <br className="hidden md:block" />
              w kontakcie
            </h1>
            <p className="mt-4 max-w-md text-brand-dark/70">
              Dołącz do Filleo. Jeśli kochasz włoską kulturę kulinarną, wina i współpracę z
              gastronomią – wyślij nam krótką wiadomość i CV/portfolio. Szukamy ludzi z pasją do
              jakości i relacji.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-brand-dark/70">
              <li>• Elastyczna współpraca (B2B / umowa)</li>
              <li>• Realny wpływ na ofertę i marki</li>
              <li>• Wydarzenia, degustacje, targi</li>
            </ul>
          </div>

          {/* PRAWA STRONA — formularz */}
          <form onSubmit={onSubmit} className="space-y-5 md:space-y-6">
            <div>
              <label className={labelBase} htmlFor="name">Imię i nazwisko*</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={onChangeField('name')}
                className={inputBase}
                placeholder="Wprowadź swoje imię i nazwisko"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-err' : undefined}
              />
              {errors.name && <p id="name-err" className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            <div>
              <label className={labelBase} htmlFor="email">Adres e-mail*</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={onChangeField('email')}
                className={inputBase}
                placeholder="Wprowadź adres e-mail"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-err' : undefined}
              />
              {errors.email && <p id="email-err" className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>

            <div>
              <label className={labelBase} htmlFor="message">Wiadomość*</label>
              <textarea
                id="message"
                value={form.message}
                onChange={onChangeField('message')}
                className={`${inputBase} min-h-[160px] resize-y`}
                placeholder="Kilka zdań o doświadczeniu i motywacji"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-err' : undefined}
              />
              {errors.message && <p id="message-err" className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            {/* Upload pliku */}
            <div>
              <label className={labelBase}>CV / portfolio (PDF, DOCX, maks. 8 MB)*</label>

              <label
                className="flex cursor-pointer items-center justify-between gap-4 rounded-md border border-dashed border-brand-dark/25 bg-white px-4 py-3 hover:border-brand-red"
              >
                <div className="text-sm text-brand-dark/70">
                  {form.file ? (
                    <>
                      <span className="font-semibold text-brand-dark">{form.file.name}</span>{' '}
                      <span className="text-xs">({(form.file.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </>
                  ) : (
                    <>Kliknij, aby dodać plik…</>
                  )}
                </div>
                <span className="rounded-full bg-brand-dark px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-light">
                  Wybierz
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.rtf"
                  onChange={onChangeFile}
                  className="sr-only"
                />
              </label>
              {errors.file && <p className="mt-1 text-xs text-red-600">{errors.file}</p>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center rounded-full bg-brand-dark px-8 py-3 text-sm font-bold uppercase tracking-wide text-brand-light transition hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-brand-beige disabled:opacity-50"
            >
              {sending ? 'Wysyłanie…' : 'Wyślij'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
