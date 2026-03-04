'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from './components/LanguageProvider';

const COPY = {
  pl: {
    heroTitle: 'FILLEO - IMPORTUJEMY PASJĘ I DOSTARCZAMY JAKOŚĆ',
    heroText: 'Włoskie wina i produkty premium bezpośrednio od producentów.',
    discover: 'Poznaj nas',
    historyTitle: 'Historia Filleo',
    historyP1: 'Filleo to firma zrodzona z autentycznej pasji do włoskiej kultury kulinarnej. W ostatnich latach wyspecjalizowaliśmy się w imporcie najwyższej jakości win oraz produktów spożywczych, sprowadzanych bezpośrednio z Włoch i dedykowanych sektorowi gastronomicznemu.',
    historyP2: 'Dzięki współpracy z renomowanymi producentami, dostarczamy na polski rynek prawdziwe smaki Italii, zachowując ich autentyczność i wyjątkowy charakter. Oferujemy również spersonalizowane zestawy prezentowe, idealne na śluby, eventy czy wydarzenia biznesowe - tworzone z dbałością o szczegóły i potrzeby Klienta.',
    historyP3: 'Nasza oferta dynamicznie się rozwija - wychodzimy poza granice Polski, poszerzając działalność na rynki międzynarodowe. Wspieramy gastronomię oraz sektor biznesowy, zawsze stawiając na jakość, autentyczność i dopasowanie do oczekiwań odbiorców.',
    founderRole: 'Założycielka marki Filleo',
    founderP1: 'Karolina Filoniuk‑Leonardi jest założycielką marki Filleo, specjalizującej się w imporcie i dystrybucji włoskich produktów Premium na rynku polskim. Od ponad 20 lat mieszka i pracuje we Włoszech, gdzie zdobywa doświadczenie w branży gastronomicznej, logistycznej i marketingowej.',
    founderP2: 'Dzięki wieloletniej obecności na włoskim rynku łączy autentyczne, lokalne tradycje kulinarne z nowoczesnym podejściem biznesowym, tworząc wyjątkowe oferty dla klientów indywidualnych i firm.',
    galleryTitle: 'Z życia naszych marek',
    seeMore: 'Zobacz więcej',
    playVideo: 'Odtwórz film',
    ctaTitle: 'Chcesz zamówić zestawy prezentowe lub nawiązać współpracę?',
    ctaContact: 'Skontaktuj się z nami',
    ctaAbout: 'Więcej o Filleo',
  },
  en: {
    heroTitle: 'FILLEO - WE IMPORT PASSION AND DELIVER QUALITY',
    heroText: 'Italian wines and premium products sourced directly from producers.',
    discover: 'Discover us',
    historyTitle: 'Filleo Story',
    historyP1: 'Filleo is a company born from an authentic passion for Italian culinary culture. In recent years, we have specialized in importing top-quality wines and food products, sourced directly from Italy and dedicated to the HoReCa sector.',
    historyP2: 'Thanks to partnerships with renowned producers, we bring true Italian flavors to the Polish market while preserving their authenticity and unique character. We also offer personalized gift sets, ideal for weddings, events, and business occasions, crafted with attention to detail and each client\'s needs.',
    historyP3: 'Our offer is constantly evolving. We are expanding beyond Poland and growing our presence in international markets. We support both gastronomy and business clients, always focused on quality, authenticity, and tailored solutions.',
    founderRole: 'Founder of the Filleo brand',
    founderP1: 'Karolina Filoniuk‑Leonardi is the founder of the Filleo brand, specializing in the import and distribution of premium Italian products on the Polish market. She has lived and worked in Italy for over 20 years, gaining experience in the gastronomy, logistics, and marketing sectors.',
    founderP2: 'Thanks to her long-term presence in the Italian market, she combines authentic local culinary traditions with a modern business approach, creating distinctive offers for individual and corporate clients.',
    galleryTitle: 'Life of our brands',
    seeMore: 'See more',
    playVideo: 'Play video',
    ctaTitle: 'Do you want to order gift sets or start cooperation?',
    ctaContact: 'Contact us',
    ctaAbout: 'More about Filleo',
  },
  it: {
    heroTitle: 'FILLEO - IMPORTIAMO PASSIONE E CONSEGNIAMO QUALITA',
    heroText: 'Vini italiani e prodotti premium direttamente dai produttori.',
    discover: 'Scopri chi siamo',
    historyTitle: 'Storia di Filleo',
    historyP1: 'Filleo e un\'azienda nata da un\'autentica passione per la cultura culinaria italiana. Negli ultimi anni ci siamo specializzati nell\'importazione di vini e prodotti alimentari di altissima qualita, provenienti direttamente dall\'Italia e dedicati al settore della ristorazione.',
    historyP2: 'Grazie alla collaborazione con produttori rinomati, portiamo sul mercato polacco i veri sapori d\'Italia, preservandone autenticita e carattere unico. Offriamo anche confezioni regalo personalizzate, ideali per matrimoni, eventi e occasioni aziendali, realizzate con attenzione ai dettagli e alle esigenze del cliente.',
    historyP3: 'La nostra offerta e in costante sviluppo: andiamo oltre i confini della Polonia, ampliando la nostra attivita sui mercati internazionali. Supportiamo il settore della ristorazione e quello business, puntando sempre su qualita, autenticita e soluzioni su misura.',
    founderRole: 'Fondatrice del marchio Filleo',
    founderP1: 'Karolina Filoniuk‑Leonardi e la fondatrice del marchio Filleo, specializzato nell\'importazione e distribuzione di prodotti premium italiani sul mercato polacco. Vive e lavora in Italia da oltre 20 anni, dove ha maturato esperienza nei settori della ristorazione, della logistica e del marketing.',
    founderP2: 'Grazie alla sua lunga presenza sul mercato italiano, unisce autentiche tradizioni culinarie locali a un moderno approccio imprenditoriale, creando offerte distintive per clienti privati e aziende.',
    galleryTitle: 'Vita dei nostri marchi',
    seeMore: 'Vedi di piu',
    playVideo: 'Riproduci video',
    ctaTitle: 'Vuoi ordinare gift box o avviare una collaborazione?',
    ctaContact: 'Contattaci',
    ctaAbout: 'Piu su Filleo',
  },
} as const;

export default function HomePage() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/banner.jpg" alt="Filleo banner" fill priority sizes="100vw" className="object-cover" />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        <div className="container relative z-20 flex min-h-[78vh] flex-col items-center justify-center gap-6 py-20 text-center text-white">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center">
            <Image
              src="/images/xd.png"
              alt="Filleo"
              width={240}
              height={240}
              className="mb-6 h-24 w-24 rounded-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] md:h-32 md:w-32 lg:h-40 lg:w-40"
              priority
            />

            <h1 className="max-w-5xl text-3xl font-semibold leading-tight tracking-wide md:text-5xl lg:text-6xl">{t.heroTitle}</h1>
            <p className="mt-4 max-w-3xl text-base text-white/90 md:text-lg">{t.heroText}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="#o-nas" className="inline-flex items-center rounded-md bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide backdrop-blur hover:bg-white/20">
                {t.discover}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="o-nas" className="container py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src="/images/filleo2.png" alt="Filleo products" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="md:col-span-7">
            <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.historyTitle}</h2>
            <div className="mt-4 space-y-4 text-base/7 leading-relaxed text-brand-dark/90">
              <p>{t.historyP1}</p>
              <p>{t.historyP2}</p>
              <p>{t.historyP3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-beige/10 py-16 md:py-24">
        <div className="container grid items-center gap-10 md:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="order-2 md:order-1 md:col-span-7">
            <h3 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">Karolina Filoniuk‑Leonardi</h3>
            <p className="mt-3 font-semibold text-brand-red">{t.founderRole}</p>
            <div className="mt-4 space-y-4 text-base/7 leading-relaxed text-brand-dark/90">
              <p>{t.founderP1}</p>
              <p>{t.founderP2}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="order-1 md:order-2 md:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg">
              <Image src="/images/karolina3.jpg" alt="Karolina Filoniuk‑Leonardi" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <div className="mb-8 flex items-center justify-between">
          <h4 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.galleryTitle}</h4>
          <Link href="/marki" className="text-sm font-semibold uppercase tracking-wide text-brand-red hover:underline">
            {t.seeMore}
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
            <video className="aspect-[9/16] w-full object-cover" controls preload="metadata" playsInline>
              <source src="/images/video1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
            <video className="aspect-[9/16] w-full object-cover" controls preload="auto" playsInline>
              <source src="/images/video2.mp4#t=2" type="video/mp4" />
            </video>
          </div>
          <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl border border-black/10 bg-black shadow-sm">
            <video className="aspect-[9/16] w-full object-cover" controls preload="metadata" playsInline>
              <source src="/images/video4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-14 text-brand-light">
        <div className="container grid items-center gap-6 md:grid-cols-2">
          <h5 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.ctaTitle}</h5>
          <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
            <Link href="/kontakt" className="rounded-md bg-brand-red px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:opacity-90">
              {t.ctaContact}
            </Link>
            <Link href="/o-nas" className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-white/10">
              {t.ctaAbout}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

