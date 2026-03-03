export type Locale = 'pl' | 'en' | 'it';

export type LocalizedText = Partial<Record<Locale, string>>;

export type Brand = {
  slug: string;
  name: string;
  logo: string;
  tagline?: LocalizedText;
  description?: LocalizedText;
  url?: string;
  images?: string[];
  body?: LocalizedText;
};

export const brands: Brand[] = [
  {
    slug: 'food-loop',
    name: 'Food Loop',
    logo: '/images/logos/BNJB5040.png',
    tagline: {
      pl: 'Italian Gourmet',
      en: 'Italian Gourmet',
      it: 'Italian Gourmet',
    },
    description: {
      pl: 'Wloska marka delikatesowa komunikowana jako "Italian Gourmet", nastawiona na nowoczesna prezentacje i selekcje produktow spozywczych.',
      en: 'An Italian delicatessen brand presented as "Italian Gourmet", focused on modern presentation and a curated food selection.',
      it: 'Un marchio gastronomico italiano presentato come "Italian Gourmet", focalizzato su una presentazione moderna e una selezione curata di prodotti alimentari.',
    },
    body: {
      pl: 'Food Loop buduje wizerunek wokol prostego, wyrazistego brandingu i wloskiego pochodzenia. Publicznie dostepnych materialow o marce jest niewiele, dlatego ten opis opiera sie glownie na identyfikacji wizualnej i nazwie marki.',
      en: 'Food Loop builds its image around a simple, distinctive visual identity and its Italian origin. Public information about the brand is limited, so this summary is based mainly on the brand name and visual presentation.',
      it: 'Food Loop costruisce la propria immagine attorno a un’identita visiva semplice e riconoscibile e alle sue origini italiane. Le informazioni pubbliche sul marchio sono limitate, quindi questa sintesi si basa soprattutto sul nome e sulla presentazione visiva.',
    },
  },
  {
    slug: 'la-dispensa-toscana',
    name: 'La Dispensa Toscana',
    logo: '/images/logos/LDT_LOGO NUOVO.png',
    tagline: {
      pl: 'Od 1950 roku',
      en: 'Since 1950',
      it: 'Dal 1950',
    },
    description: {
      pl: 'Toskanska marka specjalizujaca sie w sosach, pesto, kremach i innych przetworach inspirowanych lokalna kuchnia.',
      en: 'A Tuscan brand specializing in sauces, pesto, spreads, and other preserved foods inspired by local cuisine.',
      it: 'Un marchio toscano specializzato in sughi, pesto, creme e altre conserve ispirate alla cucina locale.',
    },
    url: 'https://ladispensatoscana.eu/en/',
    body: {
      pl: 'La Dispensa Toscana komunikuje silne zakorzenienie w tradycji Toskanii i ofercie gotowych produktow premium do kuchni codziennej. Marka akcentuje receptury oparte na lokalnym charakterze oraz wygode korzystania z gotowych rozwiazan.',
      en: 'La Dispensa Toscana emphasizes its roots in Tuscan tradition and a portfolio of premium ready-to-use products for everyday cooking. The brand highlights recipes inspired by local character and the convenience of prepared solutions.',
      it: 'La Dispensa Toscana valorizza il proprio legame con la tradizione toscana e una gamma di prodotti premium pronti all’uso per la cucina quotidiana. Il marchio mette in evidenza ricette dal carattere locale e la praticita di soluzioni gia pronte.',
    },
  },
  {
    slug: 'lilly-milly-zero',
    name: 'Lilly Milly Zero',
    logo: '/images/logos/lilly milly.jpeg',
    description: {
      pl: 'Nowoczesna marka o minimalistycznym brandingu, budowana wokol linii oznaczonej jako "Zero".',
      en: 'A modern brand with minimalist branding, built around a line identified as "Zero".',
      it: 'Un marchio moderno dal branding minimalista, costruito attorno a una linea identificata come "Zero".',
    },
    body: {
      pl: 'Lilly Milly Zero wyroznia sie lekkim, nowoczesnym stylem komunikacji i bardzo prostym systemem wizualnym. Dostepnych publicznie materialow jest ograniczona ilosc, wiec opis pozostaje celowo zachowawczy i opiera sie glownie na prezentacji marki.',
      en: 'Lilly Milly Zero stands out through a light, contemporary communication style and a very simple visual system. Publicly available materials are limited, so this description stays intentionally conservative and is based mainly on the brand presentation.',
      it: 'Lilly Milly Zero si distingue per uno stile di comunicazione leggero e contemporaneo e per un sistema visivo molto essenziale. I materiali pubblicamente disponibili sono limitati, quindi questa descrizione resta volutamente prudente e si basa soprattutto sulla presentazione del marchio.',
    },
  },
  {
    slug: 'don-giovannino',
    name: 'Don Giovannino',
    logo: '/images/logos/logo-don-giovannino-trasp_300x300.avif',
    tagline: {
      pl: 'Rodzinne smaki',
      en: 'Family flavors',
      it: 'Sapori di Famiglia',
    },
    description: {
      pl: 'Wloska marka spozywcza akcentujaca rodzinny charakter, tradycyjne receptury i smaki kojarzone z domowa kuchnia.',
      en: 'An Italian food brand emphasizing a family-driven identity, traditional recipes, and flavors associated with home cooking.',
      it: 'Un marchio alimentare italiano che valorizza un’identita familiare, ricette tradizionali e sapori legati alla cucina di casa.',
    },
    url: 'https://www.dongiovannino.it/',
    body: {
      pl: 'Don Giovannino prowadzi komunikacje oparta na hasle "sapori di famiglia", czyli rodzinnych smakach. Marka stawia na klasyczny, cieply wizerunek oraz odwolanie do tradycji i codziennej przyjemnosci jedzenia.',
      en: 'Don Giovannino builds its communication around the idea of "family flavors". The brand leans on a classic, warm identity and a strong reference to tradition and the everyday pleasure of eating.',
      it: 'Don Giovannino costruisce la propria comunicazione attorno all’idea dei "sapori di famiglia". Il marchio punta su un’identita classica e calda, con un forte richiamo alla tradizione e al piacere quotidiano del buon cibo.',
    },
  },
  {
    slug: 'morelli',
    name: 'Morelli Tuscany Pasta 1860',
    logo: '/images/logos/logo-footer_5a9e120998fc9f6c963cd588f71ea373_t.png',
    tagline: {
      pl: 'Makaron od 1860 roku',
      en: 'Pasta since 1860',
      it: 'Pasta dal 1860',
    },
    description: {
      pl: 'Historyczny producent makaronu z Toskanii, znany z dlugiej tradycji i rzemieslniczego podejscia do produkcji.',
      en: 'A historic pasta producer from Tuscany, known for its long tradition and artisanal approach to production.',
      it: 'Uno storico produttore di pasta toscano, noto per la sua lunga tradizione e per l’approccio artigianale alla produzione.',
    },
    url: 'https://morellipasta.com/',
    body: {
      pl: 'Morelli podkresla swoja historie siegajaca XIX wieku i pozycjonuje sie jako marka premium w segmencie wloskiego makaronu. W komunikacji laczy dziedzictwo rodzinne z jakoscia surowca i klasyczna toskanska tozsamoscia.',
      en: 'Morelli highlights a history dating back to the 19th century and positions itself as a premium brand in Italian pasta. Its communication combines family heritage, raw material quality, and a classic Tuscan identity.',
      it: 'Morelli valorizza una storia che risale al XIX secolo e si posiziona come marchio premium nel segmento della pasta italiana. La sua comunicazione unisce eredita familiare, qualita della materia prima e una classica identita toscana.',
    },
  },
  {
    slug: 'fabbrica-sughi-toscana',
    name: 'Fabbrica Sughi Toscana',
    logo: '/images/logos/Logo-ufficiale-FS-01-2-1024x521.png',
    tagline: {
      pl: 'Od 1950 roku',
      en: 'Since 1950',
      it: 'Dal 1950',
    },
    description: {
      pl: 'Toskanski producent sosow i przetworow, budujacy oferte wokol tradycyjnych receptur i kuchni regionalnej.',
      en: 'A Tuscan producer of sauces and preserved foods, building its range around traditional recipes and regional cuisine.',
      it: 'Un produttore toscano di sughi e conserve, con una gamma costruita attorno a ricette tradizionali e cucina regionale.',
    },
    url: 'https://www.fabbricasughi.it/en/',
    body: {
      pl: 'Fabbrica Sughi Toscana eksponuje wieloletnie doswiadczenie w produkcji sosow, pesto i dodatkow do kuchni wloskiej. Marka komunikuje rzemieslniczy charakter, regionalne pochodzenie i portfolio produktow gotowych do uzycia.',
      en: 'Fabbrica Sughi Toscana highlights long-standing experience in sauces, pesto, and accompaniments for Italian cuisine. The brand communicates artisanal know-how, regional roots, and a ready-to-use product portfolio.',
      it: 'Fabbrica Sughi Toscana mette in evidenza una lunga esperienza nella produzione di sughi, pesto e accompagnamenti per la cucina italiana. Il marchio comunica competenza artigianale, radicamento territoriale e una gamma di prodotti pronti all’uso.',
    },
  },
  {
    slug: 'novecento-900',
    name: '900 Choose Yours',
    logo: '/images/logos/logoprzyklad.jpg',
    description: {
      pl: 'Marka o wyrazistym, lifestylowym brandingu, komunikowana pod nazwa "900 Choose Yours".',
      en: 'A brand with a strong lifestyle-oriented visual identity, presented under the name "900 Choose Yours".',
      it: 'Un marchio con una forte identita visiva lifestyle, presentato con il nome "900 Choose Yours".',
    },
    body: {
      pl: 'Dla tej marki nie ma latwo dostepnych, jednoznacznych materialow firmowych, dlatego opis jest celowo ostrozny. Na podstawie identyfikacji wizualnej mozna wnioskowac, ze nacisk kladziony jest na styl, wybor i nowoczesna prezentacje produktu.',
      en: 'There are no easily available, unambiguous corporate materials for this brand, so the summary is intentionally cautious. Based on the visual identity, the focus appears to be on style, choice, and a modern product presentation.',
      it: 'Per questo marchio non sono facilmente disponibili materiali aziendali chiari e univoci, quindi la sintesi resta volutamente prudente. Dall’identita visiva si puo dedurre un focus su stile, scelta e presentazione moderna del prodotto.',
    },
  },
  {
    slug: 'barone-di-bolaro',
    name: 'Barone di Bolaro',
    logo: '/images/logos/logo2.png',
    description: {
      pl: 'Wloska marka premium o silnie klasycznym wizerunku, budowana wokol elegancji i toskanskiego charakteru.',
      en: 'An Italian premium brand with a distinctly classic image, built around elegance and Tuscan character.',
      it: 'Un marchio premium italiano dall’immagine fortemente classica, costruito attorno all’eleganza e al carattere toscano.',
    },
    url: 'https://www.baronedibolaro.it/',
    body: {
      pl: 'Barone di Bolaro stawia na reprezentacyjny, tradycyjny branding i pozycjonowanie w segmencie premium. Komunikacja wizualna sugeruje produkt osadzony w wloskim dziedzictwie kulinarnym i estetyce wysokiej jakosci.',
      en: 'Barone di Bolaro relies on a formal, traditional identity and premium positioning. Its visual communication suggests a product rooted in Italian culinary heritage and a high-quality aesthetic.',
      it: 'Barone di Bolaro punta su un’identita formale e tradizionale e su un posizionamento premium. La comunicazione visiva suggerisce un prodotto radicato nell’eredita culinaria italiana e in un’estetica di alta qualita.',
    },
  },
  {
    slug: 'urbani-tartufi',
    name: 'Urbani Tartufi',
    logo: '/images/logos/logo3.png',
    description: {
      pl: 'Jedna z najbardziej rozpoznawalnych wloskich marek truflowych, specjalizujaca sie w truflach i produktach na ich bazie.',
      en: 'One of the best-known Italian truffle brands, specializing in truffles and truffle-based products.',
      it: 'Uno dei marchi italiani del tartufo piu riconosciuti, specializzato in tartufi e prodotti a base di tartufo.',
    },
    url: 'https://www.urbanitartufi.it/en/',
    body: {
      pl: 'Urbani Tartufi to marka znana z silnej specjalizacji w segmencie trufli, z dluga historia i miedzynarodowa rozpoznawalnoscia. W ofercie i komunikacji podkresla eksperckosc, pochodzenie surowca oraz premium charakter kategorii.',
      en: 'Urbani Tartufi is known for deep specialization in the truffle category, with a long history and international recognition. Its offer and communication emphasize expertise, ingredient origin, and the premium nature of the category.',
      it: 'Urbani Tartufi e un marchio noto per la forte specializzazione nel mondo del tartufo, con una lunga storia e una riconoscibilita internazionale. La sua offerta e comunicazione mettono in risalto competenza, origine della materia prima e il carattere premium della categoria.',
    },
  },
  {
    slug: 'fattoria-le-poggette',
    name: 'Fattoria Le Poggette',
    logo: '/images/logos/logo4.png',
    description: {
      pl: 'Toskanska marka odwolujaca sie do winnicy i gospodarstwa, z silnym naciskiem na tradycje regionu.',
      en: 'A Tuscan brand referencing vineyard and estate heritage, with a strong emphasis on regional tradition.',
      it: 'Un marchio toscano che richiama l’eredita di vigneto e fattoria, con una forte enfasi sulla tradizione regionale.',
    },
    url: 'https://www.fattorialepoggette.it/',
    body: {
      pl: 'Fattoria Le Poggette komunikuje sie poprzez klasyczna symbolike gospodarstwa i winorosli, budujac skojarzenia z Toskania oraz autentycznym pochodzeniem. To branding oparty na tradycji, naturalnosci i spokojnym, premium charakterze.',
      en: 'Fattoria Le Poggette communicates through classic estate and vine symbolism, building associations with Tuscany and authentic origin. Its branding is rooted in tradition, natural character, and a calm premium tone.',
      it: 'Fattoria Le Poggette comunica attraverso simboli classici legati alla fattoria e alla vite, creando associazioni con la Toscana e con un’origine autentica. Il suo branding si fonda su tradizione, naturalita e un tono premium misurato.',
    },
  },
];
