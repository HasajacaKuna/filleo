// app/marki/[slug]/page.tsx
'use client';

import { brands } from '@/lib/brands';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = { params: { slug: string } };

export default function BrandDetailPage({ params }: Props) {
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) {
    return (
      <main className="container py-16">
        <Link href="/marki" className="inline-flex items-center gap-2 text-brand-red hover:underline">
          <ArrowLeft className="h-4 w-4" /> Wróć do „Nasze marki”
        </Link>
        <h1 className="mt-6 text-2xl font-semibold">Marka nie została znaleziona.</h1>
      </main>
    );
  }

  return (
    <main className="bg-brand-light text-brand-dark">
      <section className="container py-8 md:py-12">
        {/* back */}
        <Link href="/marki" className="inline-flex items-center gap-2 text-brand-red hover:underline">
          <ArrowLeft className="h-4 w-4" /> Wróć do „Nasze marki”
        </Link>

        {/* header */}
        <div className="mt-6 grid gap-8 md:grid-cols-[220px,1fr]">
          <div className="relative w-[180px] md:w-[220px] aspect-square rounded-xl bg-white ring-1 ring-black/10 shadow overflow-hidden">
            <Image src={brand.logo} alt={brand.name} fill className="object-contain p-4" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold uppercase tracking-wide">
              {brand.name}
            </h1>
            {brand.tagline && (
              <p className="mt-2 text-brand-red font-semibold">{brand.tagline}</p>
            )}
            {brand.description && (
              <p className="mt-4 text-base/7 text-black/80">{brand.description}</p>
            )}

            <div className="mt-6 flex gap-3">
              {brand.link && (
                <a
                  href={brand.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
                >
                  Chcę wiedzieć więcej <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* dłuższy opis (markdown-owy w prostym <pre>) */}
        {brand.body && (
          <article className="prose prose-neutral max-w-none mt-10">
            {/* szybki render tekstu z zachowaniem nowych linii */}
            <pre className="whitespace-pre-wrap font-sans text-base leading-7 text-black/80">
              {brand.body}
            </pre>
          </article>
        )}

        {/* dwa przykładowe zdjęcia */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image src="/images/photo.jpg" alt="Przykładowe zdjęcie 1" fill className="object-cover" />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <Image src="/images/photo.jpg" alt="Przykładowe zdjęcie 2" fill className="object-cover" />
          </div>
        </div>
      </section>
    </main>
  );
}
