// app/polityka-prywatnosci/page.tsx
'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const updated = '14 października 2025';

  return (
    <main className="bg-brand-light text-brand-dark">
      {/* Nagłówek */}
      <section className="container py-12 md:py-16">
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold uppercase leading-tight">
          Polityka prywatności
        </h1>
        <p className="mt-3 text-brand-dark/70">
          Niniejszy dokument wyjaśnia, jak przetwarzamy Twoje dane osobowe w serwisie Filleo.
        </p>
        <p className="mt-2 text-sm text-brand-dark/60">Ostatnia aktualizacja: {updated}</p>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Spis treści */}
          <aside className="md:col-span-4 lg:col-span-3">
            <nav className="sticky top-24 rounded-2xl bg-white p-4 md:p-5 shadow-xl ring-1 ring-black/5 text-sm">
              <h2 className="mb-3 text-base font-semibold uppercase tracking-wide">Spis treści</h2>
              <ul className="space-y-2">
                {[
                  ['1. Administrator danych', '#admin'],
                  ['2. Zakres i cele przetwarzania', '#cele'],
                  ['3. Podstawy prawne (RODO)', '#podstawy'],
                  ['4. Odbiorcy i przekazywanie danych', '#odbiorcy'],
                  ['5. Okres przechowywania', '#retencja'],
                  ['6. Twoje prawa', '#prawa'],
                  ['7. Pliki cookies i podobne technologie', '#cookies'],
                  ['8. Profilowanie i marketing', '#profilowanie'],
                  ['9. Bezpieczeństwo danych', '#bezpieczenstwo'],
                  ['10. Dobrowolność podania danych', '#dobrowolnosc'],
                  ['11. Zmiany polityki', '#zmiany'],
                  ['12. Kontakt', '#kontakt'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Treść */}
          <article className="md:col-span-8 lg:col-span-9 rounded-2xl bg-white p-6 md:p-8 shadow-xl ring-1 ring-black/5 prose prose-neutral max-w-none">
            <h2 id="admin" className="!mt-0">1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong>Filleo Sp. z o.o.</strong>, z siedzibą:
              <br />
              <span className="whitespace-pre-line">
                Ul. Michałowicza 13/9{'\n'}
                43-502 Czechowice-Dziedzice, Polska
              </span>
              <br />
              NIP 6521745384, KRS 0000789267. Kontakt: <a href="mailto:sales@filleo.pl">sales@filleo.pl</a>,
              <a className="ml-1" href="mailto:marketing@filleo.pl">marketing@filleo.pl</a>.
            </p>

            <h2 id="cele">2. Zakres i cele przetwarzania</h2>
            <p>Przetwarzamy dane osobowe w następujących celach:</p>
            <ul>
              <li><strong>Kontakt i zapytania</strong> (formularze, e-mail, telefon) – identyfikacja i obsługa zapytania.</li>
              <li><strong>Subskrypcja</strong> – wysyłka newslettera/informacji handlowych po wyrażeniu zgody.</li>
              <li><strong>Rekrutacja/Kariera</strong> – rozpatrzenie zgłoszeń kandydatów (CV/portfolio).</li>
              <li><strong>Relacje handlowe</strong> – przygotowanie ofert, realizacja zamówień, fakturowanie.</li>
              <li><strong>Analiza i statystyka</strong> – poprawa działania serwisu, pomiar ruchu (cookies/analityka).</li>
              <li><strong>Bezpieczeństwo</strong> – zapobieganie nadużyciom, dochodzenie roszczeń.</li>
            </ul>
            <p>Zakres danych obejmuje m.in. imię, nazwisko, e-mail, numer telefonu, adres korespondencyjny, dane firmy,
              treść wiadomości, dane o interakcji z serwisem (np. adres IP, identyfikatory cookies, logi).</p>

            <h2 id="podstawy">3. Podstawy prawne (RODO)</h2>
            <ul>
              <li><strong>Art. 6 ust. 1 lit. a RODO</strong> – zgoda (np. newsletter, marketing).</li>
              <li><strong>Art. 6 ust. 1 lit. b RODO</strong> – wykonanie umowy lub działania przedumowne (zapytania ofertowe, realizacja zamówień).</li>
              <li><strong>Art. 6 ust. 1 lit. c RODO</strong> – obowiązki prawne (np. podatkowe, rachunkowe).</li>
              <li><strong>Art. 6 ust. 1 lit. f RODO</strong> – prawnie uzasadniony interes Administratora (analiza statystyczna, zabezpieczenie roszczeń, komunikacja B2B, podstawowy marketing własny).</li>
            </ul>

            <h2 id="odbiorcy">4. Odbiorcy i przekazywanie danych</h2>
            <p>
              Dane mogą być powierzane dostawcom usług IT (hosting, poczta, analityka), księgowości, doradcom
              prawnym, firmom kurierskim, operatorom płatności, a w rekrutacji – dostawcom systemów HR. W razie
              korzystania z narzędzi mających serwery poza EOG, przekazanie odbywa się zgodnie z RODO (np. standardowe
              klauzule umowne, dodatkowe środki bezpieczeństwa).
            </p>

            <h2 id="retencja">5. Okres przechowywania</h2>
            <ul>
              <li>Korespondencja/zgłoszenia – przez czas potrzebny do obsługi sprawy i obrony roszczeń (zwykle do 3 lat).</li>
              <li>Dane subskrybentów – do czasu wycofania zgody, a następnie w ograniczonym zakresie dla rozliczalności.</li>
              <li>Dokumentacja księgowa – zgodnie z przepisami (zwykle 5 lat).</li>
              <li>Dane rekrutacyjne – do 6 miesięcy od zakończenia rekrutacji, chyba że wyrażono zgodę na dłużej.</li>
              <li>Cookies/analityka – zgodnie z cyklem życia ciasteczek lub do czasu ich usunięcia.</li>
            </ul>

            <h2 id="prawa">6. Twoje prawa</h2>
            <p>
              Przysługują Ci prawa: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia,
              sprzeciwu wobec przetwarzania (w tym wobec marketingu bezpośredniego), a także prawo wycofania zgody w
              dowolnym momencie (bez wpływu na zgodność z prawem wcześniejszego przetwarzania).
            </p>
            <p>
              Masz też prawo złożyć skargę do organu nadzorczego – Prezesa Urzędu Ochrony Danych Osobowych (UODO).
            </p>

            <h2 id="cookies">7. Pliki cookies i podobne technologie</h2>
            <p>
              Wykorzystujemy cookies niezbędne (zapewniające działanie serwisu) oraz – za Twoją zgodą – analityczne i
              marketingowe (pomiar ruchu, personalizacja treści). Możesz zarządzać cookies w ustawieniach przeglądarki
              lub przez banner/centrum preferencji (jeśli dostępne). Wyłączenie części cookies może ograniczyć funkcje serwisu.
            </p>
            <ul>
              <li><strong>Cookies sesyjne</strong> – usuwane po zamknięciu przeglądarki.</li>
              <li><strong>Cookies stałe</strong> – przechowywane dłużej (zgodnie z ich cyklem życia).</li>
              <li><strong>LocalStorage/SessionStorage</strong> – pamiętanie preferencji na urządzeniu użytkownika.</li>
            </ul>

            <h2 id="profilowanie">8. Profilowanie i marketing</h2>
            <p>
              Możemy prowadzić podstawowy marketing własny (np. dobór wiadomości do segmentu odbiorców). Nie podejmujemy
              decyzji wywołujących skutki prawne wyłącznie w oparciu o zautomatyzowane przetwarzanie. W każdym momencie
              możesz sprzeciwić się marketingowi bezpośredniemu.
            </p>

            <h2 id="bezpieczenstwo">9. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy środki techniczne i organizacyjne odpowiednie do ryzyka (m.in. szyfrowanie transmisji, kontrola
              dostępu, kopie bezpieczeństwa, zasada minimalizacji danych).
            </p>

            <h2 id="dobrowolnosc">10. Dobrowolność podania danych</h2>
            <p>
              Podanie danych jest dobrowolne, lecz może być niezbędne do: kontaktu, subskrypcji, realizacji umowy,
              rozliczeń czy rekrutacji. Brak danych może uniemożliwić realizację danej usługi/czynności.
            </p>

            <h2 id="zmiany">11. Zmiany polityki</h2>
            <p>
              Polityka może być aktualizowana w celu dostosowania do zmian prawa lub procesów. Nowa wersja będzie publikowana
              na tej stronie wraz z datą aktualizacji.
            </p>

            <h2 id="kontakt">12. Kontakt</h2>
            <p>
              W sprawach dotyczących danych osobowych skontaktuj się z nami:
              <br />
              <strong>E-mail:</strong> <a href="mailto:sales@filleo.pl">sales@filleo.pl</a>,{' '}
              <a href="mailto:marketing@filleo.pl">marketing@filleo.pl</a>
              <br />
              <strong>Adres korespondencyjny:</strong> Filleo Sp. z o.o., Ul. Michałowicza 13/9, 43-502 Czechowice-Dziedzice, Polska
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-black/5"
              >
                Wróć na stronę główną
              </Link>
              <Link
                href="/subskrybuj"
                className="inline-flex items-center rounded-full bg-brand-dark px-5 py-3 text-sm font-bold uppercase tracking-wide text-brand-light hover:bg-brand-red"
              >
                Zostań przyjacielem Filleo
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
