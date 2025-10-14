// src/lib/brands.ts
export type Brand = {
  slug: string;
  name: string;
  logo: string;
  tagline?: string;
  description?: string;
  url?: string;        // opcjonalny link do strony marki
  images?: string[];   // opcjonalna galeria
  body?: string;       // dłuższy opis (Markdown)
};

const placeholderLogo = '/images/logoprzyklad.jpg';

export const brands: Brand[] = [
  {
    slug: '900wine',
    name: '900WINE',
    logo: placeholderLogo,
    tagline: 'Doskonałe bąbelki z Veneto i Lombardii',
    url: 'https://www.900wine.com',
    description:
      'Nowoczesna marka win musujących łącząca włoską tradycję z innowacją.',
    // opcjonalnie, jeśli chcesz mieć mini-galerię na stronie szczegółowej:
    // images: ['/images/gallery/1.jpg', '/images/gallery/2.jpg'],
    body: `
900wine to nie tylko nowoczesna marka win musujących, ale przede wszystkim rodzinny biznes, z którym jesteście związani od pierwszych lat jego powstawania. Marka harmonijnie integruje włoską tradycję z innowacyjnym podejściem do produkcji, oferując wyjątkowe produkty w duchu „Made in Italy” – doskonałe połączenie smaku, designu i autentyczności.

## Pochodzenie i filozofia marki
Marka 900wine pochodzi z rejonu Conegliano-Valdobbiadene w prowincji Treviso (Veneto), w malowniczym otoczeniu Dolomitów. To obszar o idealnym mikroklimacie: słońce, alpejski chłód i delikatny wiatr sprzyjają jakości winogron. Produkty powstają z pełnym poszanowaniem technik enologicznych – od ręcznego zbioru winogron, przez precyzyjną kontrolę każdej fazy produkcji, aż po efektowny wygląd i design butelki.

## Oferta i walory sensoryczne
W portfolio znajdziesz szeroki zakres win musujących:
• Gran Cuvée (różne warianty)  
• DOC Millesimato (Extra Dry, Brut)  
• DOCG Valdobbiadene Superiore (Extra Dry, Brut)  
• Rosé: standardowy oraz elegancki Rare Rosé Extra Dry

Rare Rosé Extra Dry zachwyca delikatnym różowym kolorem z fioletowymi refleksami. Aromaty są finezyjne, owocowe – truskawka, malina, róża. W smaku wino jest złożone i eleganckie, z doskonałą równowagą między kwasowością a subtelną słodyczą. Idealne do ryb, owoców morza, białych mięs i na happy hour.

## Atuty i wyróżniki marki
• Autentyczność Made in Italy  
• Kontrola na każdym etapie  
• Różnorodność stylów  
• Elegancja i finezja
    `,
  },
  // + 19 placeholderów (razem 20 pozycji)
  ...Array.from({ length: 19 }).map((_, i): Brand => ({
    slug: `brand-${i + 1}`,
    name: `Marka ${i + 1}`,
    logo: placeholderLogo,
    tagline: 'Krótki opis marki',
    description: 'Opis w przygotowaniu.',
  })),
];
