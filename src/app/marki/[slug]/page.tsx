import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { brands, type LocalizedText } from '@/lib/brands';

type RouteParams = { slug: string };
type Locale = 'pl' | 'en' | 'it';

const COPY = {
  pl: {
    back: 'Wróć do "Nasze marki"',
    visit: 'Zobacz strone marki',
    fallbackDescription: 'Marka z portfolio Filleo - wiecej informacji wkrotce.',
    fallbackTitle: 'Marka - Filleo',
  },
  en: {
    back: 'Back to "Our brands"',
    visit: 'Visit brand website',
    fallbackDescription: 'Brand from Filleo portfolio - more details soon.',
    fallbackTitle: 'Brand - Filleo',
  },
  it: {
    back: 'Torna a "I nostri marchi"',
    visit: 'Vai al sito del marchio',
    fallbackDescription: 'Marchio del portfolio Filleo - maggiori dettagli presto.',
    fallbackTitle: 'Marchio - Filleo',
  },
} as const;

async function getLocaleFromCookie(): Promise<Locale> {
  const cookieStore = await cookies();
  const raw = cookieStore.get('filleo-language')?.value;
  if (raw === 'pl' || raw === 'en' || raw === 'it') return raw;
  return 'pl';
}

function getLocalizedText(content: LocalizedText | undefined, locale: Locale): string | undefined {
  if (!content) return undefined;
  return content[locale] ?? content.pl ?? content.en ?? content.it;
}

export async function generateMetadata({ params }: { params: Promise<RouteParams> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const locale = await getLocaleFromCookie();
  const t = COPY[locale];
  const title = brand ? `${brand.name} - Filleo` : t.fallbackTitle;
  const description = brand ? getLocalizedText(brand.description, locale) ?? getLocalizedText(brand.tagline, locale) ?? t.fallbackDescription : t.fallbackDescription;
  return { title, description, openGraph: { title, description } };
}

export default async function BrandPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  const locale = await getLocaleFromCookie();
  const t = COPY[locale];
  const tagline = getLocalizedText(brand.tagline, locale);
  const description = getLocalizedText(brand.description, locale);
  const body = getLocalizedText(brand.body, locale);

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-6 md:py-8">
        <Link href="/marki" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:underline">
          {'<-'} {t.back}
        </Link>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white shadow ring-1 ring-black/5">
              <Image src={brand.logo} alt={brand.name} fill priority sizes="(min-width: 768px) 320px, 60vw" className="object-contain p-6" />
            </div>
          </div>

          <div className="md:col-span-8">
            <h1 className="text-2xl font-semibold uppercase tracking-wide md:text-4xl">{brand.name}</h1>

            {tagline ? <p className="mt-2 font-semibold text-brand-red">{tagline}</p> : null}
            {description ? <p className="mt-5 leading-relaxed text-brand-dark/90">{description}</p> : null}

            {body ? (
              <div className="prose prose-neutral mt-6 max-w-none">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
              </div>
            ) : null}

            {brand.url ? (
              <div className="mt-6">
                <a href={brand.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red">
                  {t.visit}
                </a>
              </div>
            ) : null}
          </div>
        </div>

      </section>
    </main>
  );
}

