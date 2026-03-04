'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import { useLanguage } from './LanguageProvider';

const STORAGE_KEY = 'filleo-age-confirmed';

const COPY = {
  pl: {
    question: 'Czy jesteś pełnoletni?',
    text: 'Strona Filleo jest przeznaczona wyłącznie dla osób pełnoletnich.',
    yes: 'Tak, mam 18 lat',
    no: 'Nie mam 18 lat',
    denied: 'Dostęp do serwisu jest dostępny wyłącznie dla osób pełnoletnich.',
  },
  en: {
    question: 'Are you over 18?',
    text: 'The Filleo website is intended for adults only.',
    yes: 'Yes, I am 18+',
    no: 'No, I am under 18',
    denied: 'Access to this website is available to adults only.',
  },
  it: {
    question: 'Sei maggiorenne?',
    text: 'Il sito Filleo è riservato esclusivamente ai maggiorenni.',
    yes: 'Sì, ho 18 anni',
    no: 'No, non sono maggiorenne',
    denied: 'L’accesso a questo sito è consentito solo ai maggiorenni.',
  },
} as const;

export default function AgeGate({ children }: { children: ReactNode }) {
  const { language } = useLanguage();
  const t = COPY[language];
  const [isAllowed, setIsAllowed] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);
  const [isDenied, setIsDenied] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) === 'true';
    setIsAllowed(saved);
    setIsReady(true);
  }, []);

  const allowAccess = () => {
    window.localStorage.setItem(STORAGE_KEY, 'true');
    setIsAllowed(true);
    setIsDenied(false);
  };

  const denyAccess = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setIsAllowed(false);
    setIsDenied(true);
  };

  if (!isReady || !isAllowed) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-brand-dark text-brand-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_45%),linear-gradient(135deg,_#111214_0%,_#331313_45%,_#111214_100%)]" />
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur md:p-10">
            <Image src="/images/xd.png" alt="Filleo" width={120} height={120} className="mx-auto h-24 w-24" priority />
            <h1 className="mt-6 text-3xl font-bold uppercase tracking-wide md:text-4xl">{t.question}</h1>
            <p className="mt-4 text-sm text-white/80 md:text-base">{isDenied ? t.denied : t.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={allowAccess}
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:opacity-90"
              >
                {t.yes}
              </button>
              <button
                type="button"
                onClick={denyAccess}
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/10"
              >
                {t.no}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
