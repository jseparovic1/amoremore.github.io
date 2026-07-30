export const locales = ['en', 'hr', 'de'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hr: 'Hrvatski',
  de: 'Deutsch',
};

export const contactEmail = 'amoremore@gmail.com';

export const bookingUrls: Record<Locale, string> = {
  en: 'https://www.booking.com/hotel/hr/amoremore-apartments.en-gb.html',
  hr: 'https://www.booking.com/hotel/hr/amoremore-apartments.hr.html',
  de: 'https://www.booking.com/hotel/hr/amoremore-apartments.de.html',
};

const en = {
  meta: {
    title: 'AmoreMore Apartments - love, sleep and swim in the charming Split',
    description:
      'Two brand new luxury apartments in the heart of Split, Croatia. Seven minutes from Bacvice beach, steps from Diocletian’s Palace.',
  },
  nav: {
    home: 'Home',
    amore: 'Amore',
    more: 'More',
    location: 'Location',
    contact: 'Contact',
    book: 'Book now',
  },
  hero: {
    kicker: 'Split · Croatia',
    tagline: 'Love, sleep and swim in the charming Split',
    scroll: 'Scroll',
  },
  story: {
    kicker: 'The story',
    title: 'Love and the sea, under one roof',
    p1: 'Amore is love. More is the Croatian word for the sea. In a quiet street between Diocletian’s Palace and Bacvice beach, our family house hides two brand new apartments named after the two things Split does best.',
    p2: 'Both were renovated from the ground up - stone, oak and brass, cool air in the summer heat, and a bed you will write home about.',
  },
  apartments: {
    kicker: 'The apartments',
    title: 'Choose your side of the sea',
    explore: 'Explore',
    amore: {
      name: 'Amore',
      type: 'Studio apartment',
      blurb: 'A warm, intimate studio for two - everything you need within arm’s reach, nothing you don’t.',
      sleeps: 'Sleeps 2',
    },
    more: {
      name: 'More',
      type: 'One-bedroom apartment',
      blurb: 'A separate bedroom, a living room to linger in, and mornings that start slowly on the balcony.',
      sleeps: 'Sleeps 2',
    },
  },
  amenities: {
    kicker: 'Comforts',
    title: 'Everything, thought through',
    items: {
      wifi: 'Fast free WiFi',
      ac: 'Air conditioning',
      balcony: 'Balcony',
      coffee: 'Coffee machine',
      dishwasher: 'Dishwasher',
      oven: 'Oven & full kitchen',
      desk: 'Work desk',
      bathroom: 'Rain shower',
      sonos: 'Sonos sound (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Where you wake up',
    title: 'Between the palace and the beach',
    body: 'The house sits in a calm neighbourhood a short stroll from everything Split is loved for. Drop the bags, grab a towel and you are swimming before the coffee gets cold.',
    walkToBeach: 'minutes on foot to Bacvice beach',
    toPalace: 'km to Diocletian’s Palace',
    toAirport: 'km to Split Airport',
    mapLink: 'Open in Google Maps',
  },
  gallery: {
    kicker: 'Inside',
    title: 'Take a look around',
    viewPhoto: 'View photo',
  },
  contact: {
    kicker: 'Say hello',
    title: 'Ask us anything',
    body: 'Questions about dates, arrivals or the neighbourhood - write to us and we will answer quickly.',
    name: 'Your name',
    dates: 'Dates (e.g. 12 - 16 August)',
    apartment: 'Apartment',
    any: 'Either apartment',
    message: 'Message',
    send: 'Open email draft',
    hint: 'The button opens your email app with the message pre-filled - nothing is sent automatically.',
    emailLabel: 'or write directly to',
  },
  book: {
    title: 'The sea is waiting',
    body: 'Write to us with your dates - booking directly always gets you the best price.',
    cta: 'Check availability',
    alt: 'or book on',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Back to home',
    amenities: 'Amenities',
    book: 'Book this apartment',
    otherApartment: 'See the other apartment',
    amore: {
      intro:
        'The studio wears the name Amore for a reason: it is small in the way good things are - warm, considered and entirely yours. A full kitchen, a rain shower and a bed under soft brass light.',
    },
    more: {
      intro:
        'More means the sea, and this one-bedroom apartment flows like it: an open living room and kitchen, a bedroom behind its own door, and a balcony for slow breakfasts.',
    },
  },
};

export type Translation = typeof en;

const hr: Translation = {
  meta: {
    title: 'AmoreMore Apartments - ljubav, san i more u srcu Splita',
    description:
      'Dva potpuno nova luksuzna apartmana u srcu Splita. Sedam minuta od Bačvica, nekoliko koraka od Dioklecijanove palače.',
  },
  nav: {
    home: 'Početna',
    amore: 'Amore',
    more: 'More',
    location: 'Lokacija',
    contact: 'Kontakt',
    book: 'Rezerviraj',
  },
  hero: {
    kicker: 'Split · Hrvatska',
    tagline: 'Ljubav, san i more u šarmantnom Splitu',
    scroll: 'Listaj',
  },
  story: {
    kicker: 'Priča',
    title: 'Ljubav i more, pod istim krovom',
    p1: 'Amore je ljubav. More je - more. U mirnoj ulici između Dioklecijanove palače i Bačvica, naša obiteljska kuća krije dva potpuno nova apartmana nazvana po onome što Split radi najbolje.',
    p2: 'Oba su renovirana od temelja - kamen, hrast i mjed, svjež zrak u ljetnoj vrućini i krevet o kojem ćete pričati.',
  },
  apartments: {
    kicker: 'Apartmani',
    title: 'Odaberite svoju stranu mora',
    explore: 'Pogledaj',
    amore: {
      name: 'Amore',
      type: 'Studio apartman',
      blurb: 'Topao, intiman studio za dvoje - sve što trebate na dohvat ruke, i ništa što ne trebate.',
      sleeps: 'Za 2 osobe',
    },
    more: {
      name: 'More',
      type: 'Apartman s jednom spavaćom sobom',
      blurb: 'Odvojena spavaća soba, dnevni boravak za uživanje i jutra koja počinju polako na balkonu.',
      sleeps: 'Za 2 osobe',
    },
  },
  amenities: {
    kicker: 'Udobnost',
    title: 'Sve, do detalja',
    items: {
      wifi: 'Brzi besplatni WiFi',
      ac: 'Klima uređaj',
      balcony: 'Balkon',
      coffee: 'Aparat za kavu',
      dishwasher: 'Perilica posuđa',
      oven: 'Pećnica i kuhinja',
      desk: 'Radni stol',
      bathroom: 'Walk-in tuš',
      sonos: 'Sonos zvuk (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Gdje se budite',
    title: 'Između palače i plaže',
    body: 'Kuća se nalazi u mirnom kvartu, na kratkoj šetnji od svega po čemu je Split poznat. Ostavite torbe, zgrabite ručnik i plivate prije nego se kava ohladi.',
    walkToBeach: 'minuta pješice do Bačvica',
    toPalace: 'km do Dioklecijanove palače',
    toAirport: 'km do zračne luke Split',
    mapLink: 'Otvori u Google kartama',
  },
  gallery: {
    kicker: 'Unutra',
    title: 'Razgledajte',
    viewPhoto: 'Pogledaj fotografiju',
  },
  contact: {
    kicker: 'Javite se',
    title: 'Pitajte nas bilo što',
    body: 'Pitanja o terminima, dolasku ili kvartu - pišite nam i brzo odgovaramo.',
    name: 'Vaše ime',
    dates: 'Termin (npr. 12. - 16. kolovoza)',
    apartment: 'Apartman',
    any: 'Svejedno',
    message: 'Poruka',
    send: 'Otvori e-mail',
    hint: 'Gumb otvara vašu e-mail aplikaciju s pripremljenom porukom - ništa se ne šalje automatski.',
    emailLabel: 'ili pišite izravno na',
  },
  book: {
    title: 'More čeka',
    body: 'Pišite nam sa željenim terminom - izravna rezervacija uvijek znači najbolju cijenu.',
    cta: 'Provjeri dostupnost',
    alt: 'ili rezervirajte na',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Natrag na početnu',
    amenities: 'Sadržaji',
    book: 'Rezerviraj ovaj apartman',
    otherApartment: 'Pogledajte drugi apartman',
    amore: {
      intro:
        'Studio nosi ime Amore s razlogom: malen je onako kako su dobre stvari male - topao, promišljen i samo vaš. Potpuna kuhinja, walk-in tuš i krevet pod mekim mjedenim svjetlom.',
    },
    more: {
      intro:
        'More znači more, a ovaj apartman teče poput njega: otvoreni dnevni boravak s kuhinjom, spavaća soba iza vlastitih vrata i balkon za spora jutra.',
    },
  },
};

const de: Translation = {
  meta: {
    title: 'AmoreMore Apartments - lieben, schlafen und schwimmen im charmanten Split',
    description:
      'Zwei brandneue Luxus-Apartments im Herzen von Split, Kroatien. Sieben Minuten zum Strand Bacvice, wenige Schritte zum Diokletianpalast.',
  },
  nav: {
    home: 'Start',
    amore: 'Amore',
    more: 'More',
    location: 'Lage',
    contact: 'Kontakt',
    book: 'Jetzt buchen',
  },
  hero: {
    kicker: 'Split · Kroatien',
    tagline: 'Lieben, schlafen und schwimmen im charmanten Split',
    scroll: 'Scrollen',
  },
  story: {
    kicker: 'Die Geschichte',
    title: 'Liebe und Meer, unter einem Dach',
    p1: 'Amore ist die Liebe. More ist das kroatische Wort für das Meer. In einer ruhigen Straße zwischen Diokletianpalast und dem Strand Bacvice verbirgt unser Familienhaus zwei brandneue Apartments - benannt nach dem, was Split am besten kann.',
    p2: 'Beide wurden von Grund auf renoviert - Stein, Eiche und Messing, kühle Luft in der Sommerhitze und ein Bett, von dem Sie erzählen werden.',
  },
  apartments: {
    kicker: 'Die Apartments',
    title: 'Wählen Sie Ihre Seite des Meeres',
    explore: 'Entdecken',
    amore: {
      name: 'Amore',
      type: 'Studio-Apartment',
      blurb: 'Ein warmes, intimes Studio für zwei - alles Wichtige in Reichweite, nichts Überflüssiges.',
      sleeps: 'Für 2 Personen',
    },
    more: {
      name: 'More',
      type: 'Apartment mit Schlafzimmer',
      blurb: 'Ein separates Schlafzimmer, ein Wohnzimmer zum Verweilen und Morgen, die langsam auf dem Balkon beginnen.',
      sleeps: 'Für 2 Personen',
    },
  },
  amenities: {
    kicker: 'Komfort',
    title: 'Alles, durchdacht',
    items: {
      wifi: 'Schnelles gratis WLAN',
      ac: 'Klimaanlage',
      balcony: 'Balkon',
      coffee: 'Kaffeemaschine',
      dishwasher: 'Geschirrspüler',
      oven: 'Backofen & Küche',
      desk: 'Schreibtisch',
      bathroom: 'Regendusche',
      sonos: 'Sonos-Sound (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Wo Sie aufwachen',
    title: 'Zwischen Palast und Strand',
    body: 'Das Haus liegt in einem ruhigen Viertel, einen kurzen Spaziergang von allem entfernt, wofür Split geliebt wird. Taschen abstellen, Handtuch schnappen - Sie schwimmen, bevor der Kaffee kalt wird.',
    walkToBeach: 'Minuten zu Fuß zum Strand Bacvice',
    toPalace: 'km zum Diokletianpalast',
    toAirport: 'km zum Flughafen Split',
    mapLink: 'In Google Maps öffnen',
  },
  gallery: {
    kicker: 'Innen',
    title: 'Sehen Sie sich um',
    viewPhoto: 'Foto ansehen',
  },
  contact: {
    kicker: 'Sagen Sie hallo',
    title: 'Fragen Sie uns alles',
    body: 'Fragen zu Terminen, Anreise oder dem Viertel - schreiben Sie uns, wir antworten schnell.',
    name: 'Ihr Name',
    dates: 'Zeitraum (z. B. 12. - 16. August)',
    apartment: 'Apartment',
    any: 'Egal welches',
    message: 'Nachricht',
    send: 'E-Mail-Entwurf öffnen',
    hint: 'Der Button öffnet Ihre E-Mail-App mit vorbereiteter Nachricht - nichts wird automatisch gesendet.',
    emailLabel: 'oder schreiben Sie direkt an',
  },
  book: {
    title: 'Das Meer wartet',
    body: 'Schreiben Sie uns Ihre Wunschtermine - direkt buchen heißt immer der beste Preis.',
    cta: 'Verfügbarkeit anfragen',
    alt: 'oder buchen Sie auf',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Zurück zur Startseite',
    amenities: 'Ausstattung',
    book: 'Dieses Apartment buchen',
    otherApartment: 'Das andere Apartment ansehen',
    amore: {
      intro:
        'Das Studio trägt den Namen Amore aus gutem Grund: klein, wie gute Dinge klein sind - warm, durchdacht und ganz Ihres. Volle Küche, Regendusche und ein Bett unter weichem Messinglicht.',
    },
    more: {
      intro:
        'More bedeutet Meer, und dieses Apartment fließt wie das Wasser: offenes Wohnzimmer mit Küche, ein Schlafzimmer hinter eigener Tür und ein Balkon für langsame Frühstücke.',
    },
  },
};

export const translations: Record<Locale, Translation> = { en, hr, de };

export function useTranslations(locale: Locale): Translation {
  return translations[locale];
}

/** Prefix a root-relative path with Astro's base (relevant when deployed under a subpath). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(locale === 'en' ? clean : `/${locale}${clean === '/' ? '/' : clean}`);
}
