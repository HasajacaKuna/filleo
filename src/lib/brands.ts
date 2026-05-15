export type Locale = 'pl' | 'en' | 'it';

export type LocalizedText = Partial<Record<Locale, string>>;

export type Brand = {
  slug: string;
  name: string;
  logo: string;
  tagline?: LocalizedText;
  description?: LocalizedText;
  url?: string;
  urlLabel?: LocalizedText;
  extraLinks?: { label: LocalizedText; url: string }[];
  images?: string[];
  body?: LocalizedText;
};

export const brands: Brand[] = [
  {
    slug: 'food-loop',
    name: 'Food Loop',
    logo: '/images/logos/foodloop.jpg',
    tagline: {
      pl: 'Italian Gourmet',
      en: 'Italian Gourmet',
      it: 'Italian Gourmet',
    },
    description: {
      pl: 'W\u0142oska marka delikatesowa komunikowana jako "Italian Gourmet", nastawiona na nowoczesn\u0105 prezentacj\u0119 i selekcj\u0119 produkt\u00f3w spo\u017cywczych.',
      en: 'An Italian delicatessen brand presented as "Italian Gourmet", focused on modern presentation and a curated food selection.',
      it: 'Un marchio gastronomico italiano presentato come "Italian Gourmet", focalizzato su una presentazione moderna e una selezione curata di prodotti alimentari.',
    },
    body: {
      pl: 'Food Loop buduje wizerunek wok\u00f3\u0142 prostego, wyrazistego brandingu i w\u0142oskiego pochodzenia. Publicznie dost\u0119pnych materia\u0142\u00f3w o marce jest niewiele, dlatego ten opis opiera si\u0119 g\u0142\u00f3wnie na identyfikacji wizualnej i nazwie marki.',
      en: 'Food Loop builds its image around a simple, distinctive visual identity and its Italian origin. Public information about the brand is limited, so this summary is based mainly on the brand name and visual presentation.',
      it: 'Food Loop costruisce la propria immagine attorno a un\u2019identit\u00e0 visiva semplice e riconoscibile e alle sue origini italiane. Le informazioni pubbliche sul marchio sono limitate, quindi questa sintesi si basa soprattutto sul nome e sulla presentazione visiva.',
    },
    images: ['/images/foodloop/WhatsApp Video 2026-05-09 at 14.51.46.mp4'],
  },
  {
    slug: 'la-dispensa-toscana',
    name: 'La Dispensa Toscana',
    logo: '/images/logos/la dispansa toscania.png',
    tagline: {
      pl: 'Prosto z serca Toskanii',
      en: 'Straight from the heart of Tuscany',
      it: 'Direttamente dal cuore della Toscana',
    },
    description: {
      pl: 'W\u0142oska manufaktura z Toskanii specjalizuj\u0105ca si\u0119 w rzemie\u015blniczych sosach, rag\u00f9, p\u00e2t\u00e9 i tradycyjnych przetworach.',
      en: 'An Italian workshop from Tuscany specializing in artisanal sauces, rag\u00f9, p\u00e2t\u00e9s, and traditional preserves.',
      it: 'Una manifattura toscana specializzata in sughi artigianali, rag\u00f9, p\u00e2t\u00e9 e conserve tradizionali.',
    },
    url: 'https://www.fabbricasughi.com/',
    extraLinks: [
      {
        label: {
          pl: 'Katalog sughi (ITA/ENG)',
          en: 'Sughi catalog (ITA/ENG)',
          it: 'Catalogo sughi (ITA/ENG)',
        },
        url: '/images/la dispansa toscania/Catalogo sughi DT ITA _ ENG pagine singole bassa_.pdf',
      },
      {
        label: {
          pl: 'Katalog PDF',
          en: 'Catalog PDF',
          it: 'Catalogo PDF',
        },
        url: '/images/la dispansa toscania/PDF.pdf',
      },
      {
        label: {
          pl: 'Prezentacja Nonna Lena',
          en: 'Nonna Lena presentation',
          it: 'Presentazione Nonna Lena',
        },
        url: '/images/la dispansa toscania/prezentacja - Nonna Lena.pdf',
      },
    ],
    images: ['/images/fabbrica sughi/1.jpg'],
    body: {
      pl: 'La Dispensa Toscana to w\u0142oska manufaktura z regionu Toskanii, specjalizuj\u0105ca si\u0119 w produkcji rzemie\u015blniczych sos\u00f3w, rag\u00f9, p\u00e2t\u00e9 oraz tradycyjnych przetwor\u00f3w inspirowanych autentyczn\u0105 kuchni\u0105 w\u0142osk\u0105. Zak\u0142ad produkcyjny firmy znajduje si\u0119 w Vicopisano, w prowincji Piza, miejscu, gdzie od pokole\u0144 piel\u0119gnowana jest kultura prostych, ale wyj\u0105tkowo aromatycznych potraw.\n\nProdukty marki powstaj\u0105 z najwy\u017cszej jako\u015bci, starannie wyselekcjonowanych sk\u0142adnik\u00f3w. W procesie produkcji nie stosuje si\u0119 konserwant\u00f3w ani sztucznych barwnik\u00f3w. Receptury opieraj\u0105 si\u0119 na tradycyjnych, domowych przepisach charakterystycznych dla toska\u0144skiej kuchni. Dzi\u0119ki temu sosy i przetwory zachowuj\u0105 autentyczny smak, kt\u00f3ry przywodzi na my\u015bl domowe dania przygotowywane we w\u0142oskich rodzinach.\n\nW ofercie producenta znajduj\u0105 si\u0119 mi\u0119dzy innymi klasyczne sosy pomidorowe, mi\u0119sne rag\u00f9, p\u00e2t\u00e9 oraz dania inspirowane tradycyjnymi recepturami regionu. Produkty te doskonale sprawdzaj\u0105 si\u0119 zar\u00f3wno w kuchni domowej, jak i w gastronomii, pozwalaj\u0105c w prosty spos\u00f3b przygotowa\u0107 dania o prawdziwie w\u0142oskim charakterze.\n\nW portfolio La Dispensa Toscana znajduj\u0105 si\u0119 r\u00f3wnie\u017c linie premium, kt\u00f3re reprezentuj\u0105 najwy\u017csz\u0105 jako\u015b\u0107 i rzemie\u015blnicze podej\u015bcie do produkcji \u017cywno\u015bci, oddaj\u0105c esencj\u0119 toska\u0144skiej tradycji kulinarnej.',
      en: 'La Dispensa Toscana is an Italian workshop from Tuscany specializing in artisanal sauces, rag\u00f9, p\u00e2t\u00e9s, and traditional preserves inspired by authentic Italian cuisine. The company\u2019s production facility is located in Vicopisano, in the province of Pisa, a place where the culture of simple yet exceptionally aromatic dishes has been cultivated for generations.\n\nThe products are made from top-quality, carefully selected ingredients. No preservatives or artificial colorings are used in production. The recipes are based on traditional homemade formulas characteristic of Tuscan cuisine. Thanks to this, the sauces and preserves retain an authentic taste that recalls home-cooked meals prepared in Italian families.\n\nThe producer\u2019s range includes classic tomato sauces, meat rag\u00f9, p\u00e2t\u00e9s, and dishes inspired by the region\u2019s traditional recipes. These products work perfectly both in home cooking and in gastronomy, making it easy to prepare dishes with a truly Italian character.\n\nThe La Dispensa Toscana portfolio also includes premium lines that represent the highest quality and an artisanal approach to food production, expressing the essence of Tuscan culinary tradition.',
      it: 'La Dispensa Toscana \u00e8 una manifattura italiana della Toscana specializzata nella produzione di sughi artigianali, rag\u00f9, p\u00e2t\u00e9 e conserve tradizionali ispirate all\u2019autentica cucina italiana. Lo stabilimento produttivo dell\u2019azienda si trova a Vicopisano, in provincia di Pisa, un luogo in cui da generazioni si coltiva la cultura di piatti semplici ma straordinariamente aromatici.\n\nI prodotti nascono da ingredienti di altissima qualit\u00e0, accuratamente selezionati. Nel processo produttivo non vengono utilizzati conservanti n\u00e9 coloranti artificiali. Le ricette si basano su preparazioni tradizionali e domestiche tipiche della cucina toscana. In questo modo, sughi e conserve mantengono un gusto autentico che richiama i piatti fatti in casa preparati nelle famiglie italiane.\n\nL\u2019offerta del produttore comprende, tra l\u2019altro, classici sughi al pomodoro, rag\u00f9 di carne, p\u00e2t\u00e9 e preparazioni ispirate alle ricette tradizionali della regione. Questi prodotti si prestano perfettamente sia alla cucina domestica sia alla ristorazione, permettendo di preparare con facilit\u00e0 piatti dal vero carattere italiano.\n\nNel portfolio di La Dispensa Toscana si trovano anche linee premium che rappresentano la massima qualit\u00e0 e un approccio artigianale alla produzione alimentare, esprimendo l\u2019essenza della tradizione culinaria toscana.',
    },
  },
  {
    slug: 'lilly-milly-zero',
    name: 'Lilly Milly Zero',
    logo: '/images/logos/lilly milly.jpeg',
    tagline: {
      pl: 'W\u0142oska dusza. Polski projekt. Zero alkoholu!',
      en: 'Italian soul. Polish project. Zero alcohol!',
      it: 'Anima italiana. Progetto polacco. Zero alcol!',
    },
    description: {
      pl: 'Lilly Milly - W\u0142oska dusza. Polski projekt. Zero alkoholu! Wino bezalkoholowe.',
      en: 'Lilly Milly - Italian soul. Polish project. Zero alcohol! Alcohol-free wine.',
      it: 'Lilly Milly - Anima italiana. Progetto polacco. Zero alcol! Vino analcolico.',
    },
    images: ['/images/lilly milly/1.jpg'],
    body: {
      pl: 'Polska marka, toska\u0144ska dusza. Prawdziwe wino z ekologicznych winnic, kt\u00f3re delikatnie pozbawili\u015bmy jedynie alkoholu za pomoc\u0105 membrany. Zero dodatk\u00f3w, zero cukru, zero alkoholu, 100% wina, 100% natury. Czysty smak i pe\u0142nia charakteru.',
      en: 'A Polish project with a Tuscan soul. Authentic wine from organic vineyards, from which we have gently removed only the alcohol. No additives, no sugar, no alcohol, 100% taste. The pure essence of Italy.',
      it: 'Un progetto polacco con un\u2019anima toscana. Vero vino proveniente da vigneti biologici, dal quale abbiamo delicatamente rimosso soltanto l\u2019alcol. Zero additivi, zero zucchero, zero alcol, 100% gusto. La pura essenza dell\u2019Italia.',
    },
  },
  {
    slug: 'don-giovannino',
    name: 'Don Giovannino Bakery',
    logo: '/images/logos/don giovannino.avif',
    tagline: {
      pl: 'Rzemie\u015blnicze w\u0142oskie panettoni z serca Kalabrii',
      en: 'Artisanal Italian panettoni from the heart of Calabria',
      it: 'Panettoni artigianali italiani dal cuore della Calabria',
    },
    description: {
      pl: 'Rodzinna manufaktura z Kalabrii specjalizuj\u0105ca si\u0119 w rzemie\u015blniczych w\u0142oskich wypiekach premium.',
      en: 'A family-run workshop from Calabria specializing in premium artisanal Italian baked goods.',
      it: 'Una manifattura familiare calabrese specializzata in prodotti da forno italiani premium e artigianali.',
    },
    url: 'https://shop.dongiovannino.it/',
    images: ['/images/don giovannino/1.jpg'],
    body: {
      pl: 'Don Giovannino Bakery to rodzinna manufaktura z Kalabrii specjalizuj\u0105ca si\u0119 w produkcji rzemie\u015blniczych w\u0142oskich wypiek\u00f3w premium. Marka powsta\u0142a z pasji do tradycyjnego piekarnictwa i opiera si\u0119 na starannie wyselekcjonowanych sk\u0142adnikach oraz d\u0142ugiej, naturalnej fermentacji.\n\nFlagowymi produktami producenta s\u0105 panettoni i colomby artigianali, przygotowywane wed\u0142ug tradycyjnych w\u0142oskich receptur i cz\u0119sto wzbogacone charakterystycznymi sk\u0142adnikami regionu, takimi jak bergamotka, figi czy wysokiej jako\u015bci czekolada.\n\nProdukty Don Giovannino wyr\u00f3\u017cniaj\u0105 si\u0119 wyj\u0105tkow\u0105 lekko\u015bci\u0105, aromatem oraz rzemie\u015blniczym charakterem, dzi\u0119ki czemu stanowi\u0105 doskona\u0142\u0105 propozycj\u0119 dla delikates\u00f3w premium, gastronomii oraz zestaw\u00f3w prezentowych.',
      en: 'Don Giovannino Bakery is a family-run workshop from Calabria specializing in premium artisanal Italian baked goods. The brand was born from a passion for traditional baking and is built on carefully selected ingredients and long, natural fermentation.\n\nIts flagship products are artisanal panettoni and colombe, prepared according to traditional Italian recipes and often enriched with characteristic regional ingredients such as bergamot, figs, or high-quality chocolate.\n\nDon Giovannino products stand out for their exceptional lightness, aroma, and artisanal character, making them an excellent choice for premium delicatessens, gastronomy, and gift sets.',
      it: 'Don Giovannino Bakery \u00e8 una manifattura familiare della Calabria specializzata nella produzione di prodotti da forno italiani premium e artigianali. Il marchio nasce dalla passione per la panificazione tradizionale e si fonda su ingredienti accuratamente selezionati e su una lunga fermentazione naturale.\n\nI prodotti di punta del produttore sono i panettoni e le colombe artigianali, preparati secondo le tradizionali ricette italiane e spesso arricchiti con ingredienti tipici del territorio, come bergamotto, fichi o cioccolato di alta qualit\u00e0.\n\nI prodotti Don Giovannino si distinguono per leggerezza, profumo e carattere artigianale, risultando una proposta ideale per gastronomie premium, ristorazione e confezioni regalo.',
    },
  },
  {
    slug: 'morelli',
    name: 'Pasta od 1860.',
    logo: '/images/logos/morelli tuscany.png',
    tagline: {
      pl: 'Tradycja toska\u0144skiego makaronu z kie\u0142kami pszenicy',
      en: 'Tuscan pasta tradition with wheat germ',
      it: 'Tradizione toscana della pasta con germe di grano',
    },
    description: {
      pl: 'Rodzinna manufaktura z Toskanii, kt\u00f3ra od sze\u015bciu pokole\u0144 produkuje rzemie\u015blniczy makaron wed\u0142ug tradycyjnych w\u0142oskich metod.',
      en: 'A family-run Tuscan workshop that has been producing artisanal pasta for six generations using traditional Italian methods.',
      it: 'Una manifattura familiare toscana che da sei generazioni produce pasta artigianale secondo i metodi tradizionali italiani.',
    },
    url: 'https://www.pastamorelli.it/',
    extraLinks: [
      {
        label: {
          pl: 'Oryginalne przepisy',
          en: 'Original recipes',
          it: 'Ricette originali',
        },
        url: 'https://www.pastamorelli.it/it/ricette/',
      },
      {
        label: {
          pl: 'Folder restauracyjny 2026 (PL)',
          en: 'Restaurant folder 2026 (PL)',
          it: 'Catalogo ristorazione 2026 (PL)',
        },
        url: '/images/morelli tuscany/folder-restauracyjny-2026-pl.pdf',
      },
      {
        label: {
          pl: 'Makarony Morelli (PDF)',
          en: 'Morelli pasta (PDF)',
          it: 'Pasta Morelli (PDF)',
        },
        url: '/images/morelli tuscany/makarony-morelli.pdf',
      },
    ],
    images: ['/images/morelli tuscany/1.jpg'],
    body: {
      pl: 'Antico Pastificio Morelli 1860 to rodzinna manufaktura z Toskanii, kt\u00f3ra od sze\u015bciu pokole\u0144 produkuje rzemie\u015blniczy makaron wed\u0142ug tradycyjnych w\u0142oskich metod. Sekretem wyj\u0105tkowego smaku makaronu Morelli jest dodatek kie\u0142k\u00f3w pszenicy (germe di grano), najbardziej warto\u015bciowej cz\u0119\u015bci ziarna, bogatej w aromat i sk\u0142adniki od\u017cywcze.\n\nMakaron powstaje z w\u0142oskiej i toska\u0144skiej semoliny, jest wolno wyrabiany, formowany w matrycach z br\u0105zu i suszony w niskiej temperaturze do 50\u00b0C przez oko\u0142o 36 godzin, co pozwala zachowa\u0107 naturalny smak i w\u0142a\u015bciwo\u015bci produktu.\n\nW ofercie Morelli znajduj\u0105 si\u0119 zar\u00f3wno klasyczne w\u0142oskie kszta\u0142ty makaronu, jak i szeroka gama makaron\u00f3w specjalnych: z trufl\u0105, szafranem, cytryn\u0105, kakao, warzywami czy czarn\u0105 sepi\u0105. Producent oferuje r\u00f3wnie\u017c linie BIO, bezglutenowe oraz makarony z ro\u015blin str\u0105czkowych.',
      en: 'Antico Pastificio Morelli 1860 is a family-run workshop from Tuscany that has been producing artisanal pasta for six generations using traditional Italian methods. The secret of Morelli pasta\u2019s distinctive flavor is the addition of wheat germ (germe di grano), the most valuable part of the grain, rich in aroma and nutrients.\n\nThe pasta is made from Italian and Tuscan semolina, slowly kneaded, shaped through bronze dies, and dried at a low temperature of up to 50\u00b0C for around 36 hours, which helps preserve the product\u2019s natural taste and properties.\n\nThe Morelli range includes both classic Italian pasta shapes and a wide variety of specialty pasta: with truffle, saffron, lemon, cocoa, vegetables, or black squid ink. The producer also offers organic, gluten-free, and legume-based pasta lines.',
      it: 'Antico Pastificio Morelli 1860 \u00e8 una manifattura familiare toscana che da sei generazioni produce pasta artigianale secondo i metodi tradizionali italiani. Il segreto del gusto unico della pasta Morelli \u00e8 l\u2019aggiunta del germe di grano, la parte pi\u00f9 preziosa del chicco, ricca di aroma e sostanze nutritive.\n\nLa pasta viene prodotta con semola italiana e toscana, lavorata lentamente, trafilata al bronzo ed essiccata a bassa temperatura fino a 50\u00b0C per circa 36 ore, cos\u00ec da preservare il sapore naturale e le propriet\u00e0 del prodotto.\n\nL\u2019offerta Morelli comprende sia i classici formati italiani sia un\u2019ampia gamma di paste speciali: al tartufo, allo zafferano, al limone, al cacao, alle verdure o al nero di seppia. Il produttore propone anche linee BIO, senza glutine e paste a base di legumi.',
    },
  },
  {
    slug: 'novecento-900',
    name: '900wine',
    logo: '/images/logos/900wine.jpg',
    tagline: {
      pl: 'Tradycja i nowoczesno\u015b\u0107 w jednym kieliszku',
      en: 'Tradition and modernity in one glass',
      it: 'Tradizione e modernit\u00e0 in un solo calice',
    },
    description: {
      pl: 'Marka 900wine \u0142\u0105czy w\u0142oskie dziedzictwo winiarskie z nowoczesnym stylem i energi\u0105 wsp\u00f3\u0142czesno\u015bci.',
      en: 'The 900wine brand combines Italian winemaking heritage with modern style and the energy of contemporary times.',
      it: 'Il marchio 900wine unisce il patrimonio enologico italiano allo stile moderno e all\u2019energia della contemporaneit\u00e0.',
    },
    url: 'https://900wine.com/',
    images: [
      '/images/900wine/Projekt bez nazwy (1).jpg',
      '/images/900wine/900 new.jpeg',
      '/images/900wine/DSC04842.JPG',
      '/images/900wine/Filleo_900_Luminous_slide.jpg',
    ],
    body: {
      pl: 'Marka 900wine czerpie swoj\u0105 nazw\u0119 z liczby 900, kt\u00f3ra symbolicznie nawi\u0105zuje do prze\u0142omowych wydarze\u0144, idei i moment\u00f3w XX wieku, epoki niezwyk\u0142ych zmian, innowacji i rozwoju. To w\u0142a\u015bnie w tym czasie powsta\u0142y fundamenty wsp\u00f3\u0142czesnego \u015bwiata, a tak\u017ce zacz\u0119\u0142a si\u0119 historia win musuj\u0105cych w regionie Veneto.\n\nDo najwa\u017cniejszych wydarze\u0144, kt\u00f3re inspiruj\u0105 filozofi\u0119 marki, nale\u017c\u0105 mi\u0119dzy innymi narodziny produkcji win musuj\u0105cych w Veneto, powstanie pierwszej winiarni Prosecco Valdobbiadene w 1919 roku, zako\u0144czenie II wojny \u015bwiatowej, l\u0105dowanie cz\u0142owieka na Ksi\u0119\u017cycu czy dynamiczny rozw\u00f3j technologii i pocz\u0105tek ery Internetu.\n\nLiczba 900 symbolizuje harmonijne po\u0142\u0105czenie tradycji i nowoczesno\u015bci. Z jednej strony odnosi si\u0119 do historycznych korzeni produkcji win musuj\u0105cych, z drugiej do nowoczesnych technologii kontroli jako\u015bci, innowacyjnego podej\u015bcia do produkcji oraz charakterystycznego, wsp\u00f3\u0142czesnego designu.\n\nDzi\u0119ki temu 900wine tworzy wina musuj\u0105ce, kt\u00f3re \u0142\u0105cz\u0105 w\u0142oskie dziedzictwo winiarskie z nowoczesnym stylem i energi\u0105 wsp\u00f3\u0142czesno\u015bci.',
      en: 'The 900wine brand takes its name from the number 900, which symbolically refers to the landmark events, ideas, and moments of the 20th century, an era of extraordinary change, innovation, and development. It was during this period that the foundations of the modern world were laid, and the history of sparkling wines in the Veneto region also began.\n\nAmong the most important events inspiring the brand\u2019s philosophy are the birth of sparkling wine production in Veneto, the founding of the first Prosecco Valdobbiadene winery in 1919, the end of World War II, the moon landing, and the dynamic development of technology together with the beginning of the Internet era.\n\nThe number 900 symbolizes a harmonious blend of tradition and modernity. On one hand, it refers to the historical roots of sparkling wine production; on the other, it points to modern quality-control technologies, an innovative approach to production, and a distinctive contemporary design.\n\nThis is why 900wine creates sparkling wines that combine Italian winemaking heritage with modern style and the energy of contemporary times.',
      it: 'Il marchio 900wine trae il suo nome dal numero 900, che richiama simbolicamente gli eventi, le idee e i momenti cruciali del XX secolo, un\u2019epoca di straordinari cambiamenti, innovazione e sviluppo. \u00c8 proprio in quel periodo che sono nate le fondamenta del mondo contemporaneo e ha avuto inizio anche la storia dei vini spumanti nella regione del Veneto.\n\nTra gli eventi pi\u00f9 importanti che ispirano la filosofia del marchio figurano la nascita della produzione di vini spumanti in Veneto, la fondazione della prima cantina Prosecco Valdobbiadene nel 1919, la fine della Seconda guerra mondiale, lo sbarco dell\u2019uomo sulla Luna e il rapido sviluppo della tecnologia con l\u2019inizio dell\u2019era di Internet.\n\nIl numero 900 simboleggia l\u2019armoniosa unione tra tradizione e modernit\u00e0. Da un lato richiama le radici storiche della produzione di vini spumanti, dall\u2019altro rimanda alle moderne tecnologie di controllo qualit\u00e0, a un approccio innovativo alla produzione e a un design contemporaneo e distintivo.\n\nPer questo 900wine crea vini spumanti che uniscono il patrimonio enologico italiano allo stile moderno e all\u2019energia della contemporaneit\u00e0.',
    },
  },
  {
    slug: 'barone-di-bolaro',
    name: 'Barone di Bolaro Vini',
    logo: '/images/logos/barone balaro.png',
    tagline: {
      pl: 'Esencja Kalabrii w kieliszku',
      en: 'The essence of Calabria in a glass',
      it: 'L\u2019essenza della Calabria in un calice',
    },
    description: {
      pl: 'Wina Barone di Bolaro oddaj\u0105 prawdziwy charakter Kalabrii, pe\u0142en s\u0142o\u0144ca, energii i \u015br\u00f3dziemnomorskiej elegancji.',
      en: 'Barone di Bolaro wines express the true character of Calabria, full of sunshine, energy, and Mediterranean elegance.',
      it: 'I vini Barone di Bolaro esprimono il vero carattere della Calabria, ricco di sole, energia ed eleganza mediterranea.',
    },
    url: 'https://www.baronedibolaro.it/',
    images: [
      '/images/barone balaro/IMG-20250626-WA0083.jpg',
      '/images/barone balaro/IMG-20250626-WA0086.jpg',
      '/images/barone balaro/IMG-20250626-WA0089.jpg',
      '/images/barone balaro/IMG-20250626-WA0091 (1).jpg',
      '/images/barone balaro/IMG-20250626-WA0092 (2).jpg',
      '/images/barone balaro/IMG-20250626-WA0093.jpg',
    ],
    body: {
      pl: 'Barone di Bolaro Vini powsta\u0142o z pragnienia po\u0142\u0105czenia g\u0142\u0119bokiej mi\u0142o\u015bci do rodzinnej ziemi z autentyczn\u0105 pasj\u0105 do kultury winiarskiej. Winnice po\u0142o\u017cone s\u0105 w wyj\u0105tkowym regionie Kalabrii, gdzie niezwyk\u0142e warunki naturalne, intensywne s\u0142o\u0144ce, blisko\u015b\u0107 morza, sta\u0142a bryza oraz specyficzne ukszta\u0142towanie terenu, tworz\u0105 idealne \u015brodowisko do uprawy winoro\u015bli o wyj\u0105tkowej jako\u015bci.\n\nFilozofia producenta opiera si\u0119 na szacunku dla natury, tradycji oraz lokalnego dziedzictwa winiarskiego. W Barone di Bolaro tradycyjne metody produkcji wina s\u0105 harmonijnie \u0142\u0105czone z nowoczesnymi technologiami enologicznymi, dzi\u0119ki czemu powstaj\u0105 wina o autentycznym charakterze i wysokiej jako\u015bci.\n\nKa\u017cda butelka jest wyrazem pasji, zaanga\u017cowania i nieustannego d\u0105\u017cenia do doskona\u0142o\u015bci. Producent konsekwentnie inwestuje w rozw\u00f3j i jako\u015b\u0107 swoich win, kontynuuj\u0105c histori\u0119, kt\u00f3ra \u0142\u0105czy tradycj\u0119 regionu z nowoczesnym podej\u015bciem do winiarstwa.\n\nWina Barone di Bolaro oddaj\u0105 prawdziwy charakter Kalabrii, pe\u0142en s\u0142o\u0144ca, energii i \u015br\u00f3dziemnomorskiej elegancji.',
      en: 'Barone di Bolaro Vini was born from the desire to combine a deep love for its native land with an authentic passion for wine culture. The vineyards are located in the unique region of Calabria, where extraordinary natural conditions, intense sunshine, proximity to the sea, constant breeze, and distinctive terrain create an ideal environment for growing vines of exceptional quality.\n\nThe producer\u2019s philosophy is based on respect for nature, tradition, and local winemaking heritage. At Barone di Bolaro, traditional wine production methods are harmoniously combined with modern oenological technologies, resulting in wines of authentic character and high quality.\n\nEach bottle is an expression of passion, dedication, and a constant pursuit of excellence. The producer consistently invests in the development and quality of its wines, continuing a story that connects regional tradition with a modern approach to winemaking.\n\nBarone di Bolaro wines reflect the true character of Calabria, full of sunshine, energy, and Mediterranean elegance.',
      it: 'Barone di Bolaro Vini nasce dal desiderio di unire un profondo amore per la propria terra a un\u2019autentica passione per la cultura del vino. I vigneti si trovano nella straordinaria regione della Calabria, dove condizioni naturali uniche, sole intenso, vicinanza al mare, brezza costante e una particolare conformazione del territorio creano un ambiente ideale per la coltivazione di uve di qualit\u00e0 eccezionale.\n\nLa filosofia del produttore si basa sul rispetto per la natura, la tradizione e il patrimonio enologico locale. In Barone di Bolaro i metodi tradizionali di produzione del vino si uniscono armoniosamente alle moderne tecnologie enologiche, dando vita a vini dal carattere autentico e di alta qualit\u00e0.\n\nOgni bottiglia \u00e8 espressione di passione, impegno e di una costante ricerca dell\u2019eccellenza. Il produttore investe con continuit\u00e0 nello sviluppo e nella qualit\u00e0 dei propri vini, portando avanti una storia che unisce la tradizione del territorio a un approccio moderno al mondo del vino.\n\nI vini Barone di Bolaro esprimono il vero carattere della Calabria, ricco di sole, energia ed eleganza mediterranea.',
    },
  },
  {
    slug: 'urbani-tartufi',
    name: 'Urbani Tartufi',
    logo: '/images/logos/urbani tartufi.png',
    description: {
      pl: 'Urbani Tartufi to jeden z najbardziej renomowanych producent\u00f3w trufli na \u015bwiecie, od pokole\u0144 specjalizuj\u0105cy si\u0119 w selekcji i dystrybucji najwy\u017cszej jako\u015bci trufli.',
      en: 'Urbani Tartufi is one of the most renowned truffle producers in the world, specializing for generations in the selection and distribution of top-quality truffles.',
      it: 'Urbani Tartufi \u00e8 uno dei produttori di tartufo pi\u00f9 rinomati al mondo, specializzato da generazioni nella selezione e distribuzione di tartufi di altissima qualit\u00e0.',
    },
    url: 'https://www.urbanitartufi.it/en/',
    images: [
      '/images/urbani tartufi/1.jpg',
      '/images/urbani tartufi/2.jpg',
      '/images/urbani tartufi/3.jpg',
      '/images/urbani tartufi/4.jpg',
    ],
    body: {
      pl: 'Urbani Tartufi to jeden z najbardziej renomowanych producent\u00f3w trufli na \u015bwiecie, od pokole\u0144 specjalizuj\u0105cy si\u0119 w selekcji i dystrybucji najwy\u017cszej jako\u015bci trufli. Marka oferuje zar\u00f3wno \u015bwie\u017ce trufle, jak i szerok\u0105 gam\u0119 produkt\u00f3w na bazie trufli - od sos\u00f3w i krem\u00f3w po oliwy i przyprawy.\n\nDzi\u0119ki wieloletniemu do\u015bwiadczeniu oraz rygorystycznej selekcji surowca Urbani dostarcza produkty cenione przez szef\u00f3w kuchni i mi\u0142o\u015bnik\u00f3w kuchni premium na ca\u0142ym \u015bwiecie, gwarantuj\u0105c autentyczny smak i najwy\u017csz\u0105 jako\u015b\u0107.',
      en: 'Urbani Tartufi is one of the most renowned truffle producers in the world, specializing for generations in the selection and distribution of top-quality truffles. The brand offers both fresh truffles and a wide range of truffle-based products, from sauces and creams to oils and seasonings.\n\nThanks to many years of experience and rigorous raw material selection, Urbani delivers products appreciated by chefs and lovers of premium cuisine all over the world, guaranteeing authentic flavor and the highest quality.',
      it: 'Urbani Tartufi \u00e8 uno dei produttori di tartufo pi\u00f9 rinomati al mondo, specializzato da generazioni nella selezione e distribuzione di tartufi di altissima qualit\u00e0. Il marchio offre sia tartufi freschi sia un\u2019ampia gamma di prodotti a base di tartufo, dai sughi e dalle creme fino agli oli e ai condimenti.\n\nGrazie a una lunga esperienza e a una rigorosa selezione della materia prima, Urbani propone prodotti apprezzati da chef e amanti della cucina premium in tutto il mondo, garantendo gusto autentico e qualit\u00e0 superiore.',
    },
  },
  {
    slug: 'fattoria-le-poggette',
    name: 'Fattoria Le Poggette',
    logo: '/images/logos/fattoria le poggette.png',
    description: {
      pl: 'Winnica z Umbrii, \u0142\u0105cz\u0105ca tradycj\u0119 regionu z nowoczesnym podej\u015bciem do winifikacji.',
      en: 'A winery from Umbria that combines regional tradition with a modern approach to winemaking.',
      it: 'Una cantina umbra che unisce la tradizione del territorio a un approccio moderno alla vinificazione.',
    },
    url: 'https://www.fattorialepoggette.it/',
    images: [
      '/images/fattoria le poggette/1.jpg',
      '/images/fattoria le poggette/2.jpg',
      '/images/fattoria le poggette/3.jpg',
      '/images/fattoria le poggette/05.jpg',
      '/images/fattoria le poggette/AMELIA SANGIOVESE .jpg',
      '/images/fattoria le poggette/CANAIOLO.jpg',
      '/images/fattoria le poggette/GRECHETTO.jpg',
      '/images/fattoria le poggette/ROSALYDDA - ROSE.jpg',
      '/images/fattoria le poggette/SANGIOVESE.jpg',
      '/images/fattoria le poggette/TORRE MAGGIORE - MONTEPULCIANO.jpg',
      '/images/fattoria le poggette/Torre Maggiore MAGNUM.jpg',
      '/images/fattoria le poggette/UMBRIA ROSSO IGT.jpg',
    ],
    body: {
      pl: 'Fattoria Le Poggette to winnica po\u0142o\u017cona w regionie Umbria, mi\u0119dzy Montecastrilli a Terni, w otoczeniu wzg\u00f3rz tworz\u0105cych naturalny amfiteatr. Ta wyj\u0105tkowa lokalizacja zapewnia mikroklimat sprzyjaj\u0105cy uprawie winoro\u015bli, z glebami gliniastymi, piaszczystymi i wapiennymi.\n\nW latach 60. XX wieku Giorgio Lanzetta, pochodz\u0105cy z Abruzji, naby\u0142 te tereny i zasadzi\u0142 szczepy Montepulciano, kt\u00f3re doskonale si\u0119 tu przyj\u0119\u0142y. W kolejnych latach wprowadzono r\u00f3wnie\u017c odmiany Sangiovese i Canaiolo, co zaowocowa\u0142o produkcj\u0105 wysokiej jako\u015bci win czerwonych o eleganckim charakterze.\n\nDzi\u015b winnica \u0142\u0105czy szacunek do tradycji z nowoczesnym podej\u015bciem do winifikacji, koncentruj\u0105c si\u0119 na wydobyciu pe\u0142nego potencja\u0142u umbryjskiego terroir. Wina Fattoria Le Poggette wyr\u00f3\u017cniaj\u0105 si\u0119 intensywnym aromatem dojrza\u0142ych owoc\u00f3w, dobr\u0105 struktur\u0105 i harmonijn\u0105 tanin\u0105, dzi\u0119ki czemu doskonale sprawdzaj\u0105 si\u0119 w gastronomii.\n\nProducent oferuje wina w ramach apelacji Umbria IGT oraz DOC Amelia, kieruj\u0105c swoj\u0105 ofert\u0119 do rynku premium, restauracji oraz klient\u00f3w poszukuj\u0105cych autentycznego, regionalnego charakteru w kieliszku.',
      en: 'Fattoria Le Poggette is a winery located in the Umbria region, between Montecastrilli and Terni, surrounded by hills that form a natural amphitheater. This unique setting creates a microclimate that favors vine growing, with clay, sandy, and limestone soils.\n\nIn the 1960s, Giorgio Lanzetta, originally from Abruzzo, acquired these lands and planted Montepulciano vines, which adapted here exceptionally well. In the following years, Sangiovese and Canaiolo were also introduced, resulting in elegant, high-quality red wines.\n\nToday, the winery combines respect for tradition with a modern approach to winemaking, focusing on expressing the full potential of Umbrian terroir. Fattoria Le Poggette wines stand out for their intense aromas of ripe fruit, solid structure, and harmonious tannins, making them especially well suited to gastronomy.\n\nThe producer offers wines under the Umbria IGT and DOC Amelia appellations, addressing the premium market, restaurants, and customers seeking authentic regional character in the glass.',
      it: 'Fattoria Le Poggette \u00e8 una cantina situata in Umbria, tra Montecastrilli e Terni, circondata da colline che formano un anfiteatro naturale. Questa posizione unica garantisce un microclima favorevole alla coltivazione della vite, con terreni argillosi, sabbiosi e calcarei.\n\nNegli anni Sessanta Giorgio Lanzetta, originario dell\u2019Abruzzo, acquist\u00f2 questi terreni e vi piant\u00f2 vitigni Montepulciano, che si adattarono perfettamente al territorio. Negli anni successivi furono introdotte anche le variet\u00e0 Sangiovese e Canaiolo, dando vita a vini rossi eleganti e di alta qualit\u00e0.\n\nOggi la cantina unisce il rispetto per la tradizione a un approccio moderno alla vinificazione, concentrandosi sull\u2019espressione del pieno potenziale del terroir umbro. I vini Fattoria Le Poggette si distinguono per gli intensi aromi di frutta matura, la buona struttura e i tannini armoniosi, qualit\u00e0 che li rendono ideali per la gastronomia.\n\nIl produttore propone vini nelle denominazioni Umbria IGT e DOC Amelia, rivolgendosi al mercato premium, alla ristorazione e ai clienti che cercano nel calice un carattere autentico e profondamente territoriale.',
    },
  },
];
