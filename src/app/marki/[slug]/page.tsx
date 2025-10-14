// src/app/marki/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { brands } from '@/lib/brands';

type RouteParams = { slug: string };

// Next 15: params są Promisem – trzeba je zawaitować
export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  const title = brand ? `${brand.name} — Filleo` : 'Marka — Filleo';
  const description =
    brand?.description ?? 'Marka z portfolio Filleo — więcej informacji wkrótce.';
  return { title, description, openGraph: { title, description } };
}

export default async function BrandPage(
  { params }: { params: Promise<RouteParams> }
) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) return notFound();

  return (
    <main className="bg-brand-light text-brand-dark">
      {/* Powrót */}
      <section className="container py-6 md:py-8">
        <Link
          href="/marki"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide hover:underline"
        >
          ← Wróć do „Nasze marki”
        </Link>
      </section>

      {/* Treść */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Logo / karta */}
          <div className="md:col-span-4">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow">
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                priority
                sizes="(min-width: 768px) 320px, 60vw"
                className="object-contain p-6"
              />
            </div>
          </div>

          {/* Opis */}
          <div className="md:col-span-8">
            <h1 className="text-2xl md:text-4xl font-semibold uppercase tracking-wide">
              {brand.name}
            </h1>

            {brand.tagline ? (
              <p className="mt-2 text-brand-red font-semibold">{brand.tagline}</p>
            ) : null}

            <div className="mt-5 space-y-4 leading-relaxed text-brand-dark/90">
              <p>
                {brand.description ??
                  'Opis tej marki pojawi się wkrótce. Zapraszamy niebawem po więcej informacji.'}
              </p>
            </div>

            {brand.url ? (
              <div className="mt-6">
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
                >
                  Zobacz stronę marki
                </a>
              </div>
            ) : null}
          </div>
        </div>

        {/* Galeria opcjonalnie */}
        {brand.images?.length ? (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {brand.images.map((src, i) => (
              <div
                key={`${brand.slug}-img-${i}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm"
              >
                <Image src={src} alt={`${brand.name} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
