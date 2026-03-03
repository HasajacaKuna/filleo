'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageProvider';

const COPY = {
  pl: {
    title: 'Historia Filleo',
    p1: 'Filleo to firma zrodzona z autentycznej pasji do włoskiej kultury kulinarnej. W ostatnich latach wyspecjalizowaliśmy się w imporcie najwyższej jakości win oraz produktów spożywczych, sprowadzanych bezpośrednio z Włoch i dedykowanych sektorowi gastronomicznemu.',
    p2: 'Dzięki współpracy z renomowanymi producentami, dostarczamy na polski rynek prawdziwe smaki Italii, zachowując ich autentyczność i wyjątkowy charakter. Oferujemy również spersonalizowane zestawy prezentowe, idealne na śluby, eventy czy wydarzenia biznesowe - tworzone z dbałością o szczegóły i potrzeby Klienta.',
    p3: 'Nasza oferta dynamicznie się rozwija - wychodzimy poza granice Polski, poszerzając działalność na rynki międzynarodowe. Wspieramy gastronomię oraz sektor biznesowy, zawsze stawiając na jakość, autentyczność i dopasowanie do oczekiwań odbiorców.',
    founderRole: 'Założycielka marki Filleo',
    founderP1: 'Karolina Filoniuk‑Leonardi jest założycielką marki Filleo, specjalizującej się w imporcie i dystrybucji włoskich produktów Premium na rynku polskim. Od ponad 20 lat mieszka i pracuje we Włoszech, gdzie zdobywa doświadczenie w branży gastronomicznej, logistycznej i marketingowej.',
    founderP2: 'Dzięki wieloletniej obecności na włoskim rynku łączy autentyczne, lokalne tradycje kulinarne z nowoczesnym podejściem biznesowym, tworząc wyjątkowe oferty dla klientów indywidualnych i firm.',
  },
  en: {
    title: 'Filleo Story',
    p1: 'Filleo is a company born from an authentic passion for Italian culinary culture. In recent years, we have specialized in importing top-quality wines and food products, sourced directly from Italy and dedicated to the HoReCa sector.',
    p2: 'Thanks to partnerships with renowned producers, we bring true Italian flavors to the Polish market while preserving their authenticity and unique character. We also offer personalized gift sets, ideal for weddings, events, and business occasions, crafted with attention to detail and each client\'s needs.',
    p3: 'Our offer is constantly evolving. We are expanding beyond Poland and growing our presence in international markets. We support both gastronomy and business clients, always focused on quality, authenticity, and tailored solutions.',
    founderRole: 'Founder of the Filleo brand',
    founderP1: 'Karolina Filoniuk‑Leonardi is the founder of the Filleo brand, specializing in the import and distribution of premium Italian products on the Polish market. She has lived and worked in Italy for over 20 years, gaining experience in the gastronomy, logistics, and marketing sectors.',
    founderP2: 'Thanks to her long-term presence in the Italian market, she combines authentic local culinary traditions with a modern business approach, creating distinctive offers for individual and corporate clients.',
  },
  it: {
    title: 'Storia di Filleo',
    p1: 'Filleo e un\'azienda nata da un\'autentica passione per la cultura culinaria italiana. Negli ultimi anni ci siamo specializzati nell\'importazione di vini e prodotti alimentari di altissima qualita, provenienti direttamente dall\'Italia e dedicati al settore della ristorazione.',
    p2: 'Grazie alla collaborazione con produttori rinomati, portiamo sul mercato polacco i veri sapori d\'Italia, preservandone autenticita e carattere unico. Offriamo anche confezioni regalo personalizzate, ideali per matrimoni, eventi e occasioni aziendali, realizzate con attenzione ai dettagli e alle esigenze del cliente.',
    p3: 'La nostra offerta e in costante sviluppo: andiamo oltre i confini della Polonia, ampliando la nostra attivita sui mercati internazionali. Supportiamo il settore della ristorazione e quello business, puntando sempre su qualita, autenticita e soluzioni su misura.',
    founderRole: 'Fondatrice del marchio Filleo',
    founderP1: 'Karolina Filoniuk‑Leonardi e la fondatrice del marchio Filleo, specializzato nell\'importazione e distribuzione di prodotti premium italiani sul mercato polacco. Vive e lavora in Italia da oltre 20 anni, dove ha maturato esperienza nei settori della ristorazione, della logistica e del marketing.',
    founderP2: 'Grazie alla sua lunga presenza sul mercato italiano, unisce autentiche tradizioni culinarie locali a un moderno approccio imprenditoriale, creando offerte distintive per clienti privati e aziende.',
  },
} as const;

export default function AboutPage() {
  const { language } = useLanguage();
  const t = COPY[language];

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-16 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="md:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src="/images/filleo2.png" alt="Filleo products" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="md:col-span-7">
            <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">{t.title}</h1>
            <div className="mt-4 space-y-4 text-base/7 leading-relaxed text-brand-dark/90">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brand-beige/10 py-16 md:py-24">
        <div className="container grid items-center gap-10 md:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="order-2 md:order-1 md:col-span-7">
            <h2 className="text-2xl font-semibold uppercase tracking-wide md:text-3xl">Karolina Filoniuk‑Leonardi</h2>
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
    </main>
  );
}

