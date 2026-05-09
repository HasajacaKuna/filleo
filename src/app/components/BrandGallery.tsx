'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type BrandGalleryProps = {
  brandName: string;
  images: string[];
};

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.mov'];

function isVideoAsset(path: string) {
  const normalized = path.toLowerCase();
  return VIDEO_EXTENSIONS.some((ext) => normalized.endsWith(ext));
}

export function BrandGallery({ brandName, images }: BrandGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

  return (
    <>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((imagePath, index) => (
          <button
            key={imagePath}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:scale-[1.01] hover:shadow-md"
          >
            {isVideoAsset(imagePath) ? (
              <video className="h-full w-full object-cover" muted playsInline preload="metadata">
                <source src={imagePath} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={imagePath}
                alt={`${brandName} ${index + 1}`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            )}
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${brandName} media preview`}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            Zamknij
          </button>

          <div
            className="relative h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {isVideoAsset(images[activeIndex]) ? (
              <video className="h-full w-full object-contain" controls playsInline autoPlay>
                <source src={images[activeIndex]} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={images[activeIndex]}
                alt={`${brandName} ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
