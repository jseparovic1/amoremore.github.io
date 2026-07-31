export const locales = ['en', 'hr', 'de', 'pl', 'cs', 'it'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hr: 'Hrvatski',
  de: 'Deutsch',
  pl: 'Polski',
  cs: 'Čeština',
  it: 'Italiano',
};

export const contactEmail = 'amoremore.st@gmail.com';

export const bookingUrls: Record<Locale, string> = {
  en: 'https://www.booking.com/hotel/hr/amoremore-apartments.en-gb.html',
  hr: 'https://www.booking.com/hotel/hr/amoremore-apartments.hr.html',
  de: 'https://www.booking.com/hotel/hr/amoremore-apartments.de.html',
  pl: 'https://www.booking.com/hotel/hr/amoremore-apartments.pl.html',
  cs: 'https://www.booking.com/hotel/hr/amoremore-apartments.cs.html',
  it: 'https://www.booking.com/hotel/hr/amoremore-apartments.it.html',
};

const en = {
  meta: {
    title: 'AmoreMore Apartments - swim, love and sleep in the charming Split',
    description:
      'Two brand new luxury apartments in the heart of Split, Croatia. Seven minutes from Bacvice beach, steps from Diocletian’s Palace.',
    ogImageAlt: 'Interior of the AmoreMore apartments in Split, Croatia',
  },
  nav: {
    home: 'Home',
    amore: 'Amore',
    more: 'More',
    location: 'Location',
    contact: 'Contact',
    book: 'Book now',
    tips: 'Tips',
    guest: 'Guest portal',
  },
  hero: {
    kicker: 'Split · Croatia',
    tagline: 'Swim, love and sleep in the charming Split',
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
  recs: {
    metaTitle: 'Our Split recommendations - AmoreMore Apartments',
    metaDescription:
      'Where to eat and what to do in Split - our honest local favourites, from konobas and burgers to beaches, boat tours and sunset spots.',
    kicker: 'Recommendations',
    title: 'Split, the way we live it',
    intro:
      'The places we send our friends to - all tested by us, all close to the house or worth the walk.',
    eatTitle: 'Where to eat & drink',
    doTitle: 'What to do',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Homemade grill',
        blurb:
          'A no-fuss local bistro loved for handmade grilled meat and sausages from small farms. This is where Split actually eats.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burgers & craft beer',
        blurb:
          'The living room of the Gripe neighbourhood, right by the old fortress: big burgers, Croatian craft beers and zero tourist markup.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Traditional Dalmatian',
        blurb:
          'An old-school konoba that has been feeding the Varoš neighbourhood for decades - grilled fish and meat, and dishes the way grandmothers used to make them.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistro & wine bar',
        blurb:
          'A lively, good-looking bistro near Pjaca - Mediterranean plates and one of the best wine lists in town.',
      },
      riva: {
        name: 'Riva',
        tag: 'The promenade',
        blurb:
          'Split’s seafront living room. Grab a coffee, watch the ferries glide out and do absolutely nothing - that is the point.',
      },
      palace: {
        name: 'Diocletian’s Palace',
        tag: 'World heritage',
        blurb:
          'A 1,700-year-old Roman palace that is still the living centre of town. Get lost in the alleys, then find Peristil at golden hour.',
      },
      marjan: {
        name: 'Marjan hill',
        tag: 'Views & pine forest',
        blurb:
          'Climb the stairs from Varoš for the best view of the city and the islands. Go early in the morning or for sunset.',
      },
      bacvice: {
        name: 'Bačvice & picigin',
        tag: 'Swimming',
        blurb:
          'Your local beach, seven minutes away. Watch the locals play picigin - a ball game invented right here in the shallows.',
      },
      znjan: {
        name: 'Žnjan promenade',
        tag: 'Seaside walk',
        blurb:
          'A long, freshly renovated waterfront perfect for a morning run or an evening stroll along the sea.',
      },
      boat: {
        name: 'Boat tour to the islands',
        tag: 'Day trip',
        blurb:
          'From the harbour you can reach Hvar, Brač or the Blue Lagoon in no time. Book a day tour and pack your swimsuit.',
      },
    },
  },
  guest: {
    metaTitle: 'Guest portal - AmoreMore Apartments',
    metaDescription: 'Everything you need during your stay at AmoreMore Apartments.',
    kicker: 'Guest portal',
    loginTitle: 'Welcome, dear guest',
    loginBody: 'Enter the password from your check-in message.',
    password: 'Password',
    enter: 'Enter',
    wrong: 'That is not it - try again.',
    chooseTitle: 'Where are you staying?',
    wifi: 'WiFi',
    network: 'Network',
    wifiPassword: 'Password',
    checkin: 'Check-in',
    checkout: 'Check-out',
    from: 'from',
    until: 'until',
    entrance: 'Entrance',
    entranceBody: 'The code for the green front door',
    lockerNote: 'You will receive the locker code at check-in.',
    contact: 'We are here for you',
    contactBody: 'Anything you need during your stay - write to us and we will answer quickly.',
    recsTitle: 'Hungry? Bored? Never.',
    recsCta: 'See our Split recommendations',
    switch: 'Switch apartment',
    logout: 'Log out',
  },
};

export type Translation = typeof en;

const hr: Translation = {
  meta: {
    title: 'AmoreMore Apartments - more, ljubav i san u srcu Splita',
    description:
      'Dva potpuno nova luksuzna apartmana u srcu Splita. Sedam minuta od Bačvica, nekoliko koraka od Dioklecijanove palače.',
    ogImageAlt: 'Interijer apartmana AmoreMore u Splitu',
  },
  nav: {
    home: 'Početna',
    amore: 'Amore',
    more: 'More',
    location: 'Lokacija',
    contact: 'Kontakt',
    book: 'Rezerviraj',
    tips: 'Preporuke',
    guest: 'Portal za goste',
  },
  hero: {
    kicker: 'Split · Hrvatska',
    tagline: 'More, ljubav i san u šarmantnom Splitu',
    scroll: 'Listaj',
  },
  story: {
    kicker: 'Priča',
    title: 'Ljubav i more, pod istim krovom',
    p1: 'Amore je ljubav na talijanskom. More je ono po čemu Split živi. U mirnoj ulici između Dioklecijanove palače i Bačvica, naša obiteljska kuća krije dva potpuno nova apartmana nazvana po onome što Split radi najbolje.',
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
  recs: {
    metaTitle: 'Naše preporuke za Split - AmoreMore Apartments',
    metaDescription:
      'Gdje jesti i što raditi u Splitu - naši iskreni favoriti, od konoba i burgera do plaža, izleta brodom i mjesta za zalazak sunca.',
    kicker: 'Preporuke',
    title: 'Split, onako kako ga mi živimo',
    intro:
      'Mjesta na koja šaljemo svoje prijatelje - sva provjerena, sva blizu kuće ili vrijedna šetnje.',
    eatTitle: 'Gdje jesti i piti',
    doTitle: 'Što raditi',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Domaći grill',
        blurb:
          'Bistro bez pretenzija, poznat po domaćem mesu i kobasicama s roštilja, s malih farmi. Ovdje Split stvarno jede.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burgeri i craft pivo',
        blurb:
          'Dnevni boravak Gripa, odmah uz staru tvrđavu: veliki burgeri, hrvatska craft piva i nula turističke marže.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Tradicionalna dalmatinska',
        blurb:
          'Konoba stare škole koja Varoš hrani desetljećima - riba i meso s gradela i jela kakva su radile none.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistro i vinski bar',
        blurb:
          'Živahan, lijepo uređen bistro kod Pjace - mediteranski tanjuri i jedna od najboljih vinskih karata u gradu.',
      },
      riva: {
        name: 'Riva',
        tag: 'Šetnica',
        blurb:
          'Splitski dnevni boravak uz more. Uzmite kavu, gledajte trajekte kako isplovljavaju i ne radite baš ništa - u tome je poanta.',
      },
      palace: {
        name: 'Dioklecijanova palača',
        tag: 'Svjetska baština',
        blurb:
          'Rimska palača stara 1700 godina koja je i dalje živo srce grada. Izgubite se u kalama, pa nađite Peristil u zlatni sat.',
      },
      marjan: {
        name: 'Marjan',
        tag: 'Vidikovci i borova šuma',
        blurb:
          'Popnite se stubama iz Varoša do najboljeg pogleda na grad i otoke. Idite rano ujutro ili na zalazak.',
      },
      bacvice: {
        name: 'Bačvice i picigin',
        tag: 'Kupanje',
        blurb:
          'Vaša kvartovska plaža, sedam minuta hoda. Gledajte lokalce kako igraju picigin - igru izmišljenu baš u ovom plićaku.',
      },
      znjan: {
        name: 'Žnjanska šetnica',
        tag: 'Šetnja uz more',
        blurb:
          'Duga, svježe uređena obala savršena za jutarnje trčanje ili večernju šetnju uz more.',
      },
      boat: {
        name: 'Izlet brodom na otoke',
        tag: 'Jednodnevni izlet',
        blurb:
          'Iz luke ste za čas na Hvaru, Braču ili u Modroj laguni. Rezervirajte izlet i ponesite kupaći.',
      },
    },
  },
  guest: {
    metaTitle: 'Portal za goste - AmoreMore Apartments',
    metaDescription: 'Sve što vam treba tijekom boravka u AmoreMore apartmanima.',
    kicker: 'Portal za goste',
    loginTitle: 'Dobro došli, dragi goste',
    loginBody: 'Upišite lozinku iz poruke s uputama za prijavu.',
    password: 'Lozinka',
    enter: 'Uđi',
    wrong: 'Nije to - pokušajte ponovno.',
    chooseTitle: 'Gdje ste smješteni?',
    wifi: 'WiFi',
    network: 'Mreža',
    wifiPassword: 'Lozinka',
    checkin: 'Prijava',
    checkout: 'Odjava',
    from: 'od',
    until: 'do',
    entrance: 'Ulaz',
    entranceBody: 'Šifra za zelena ulazna vrata',
    lockerNote: 'Šifru lockera dobit ćete prilikom prijave.',
    contact: 'Tu smo za vas',
    contactBody: 'Što god vam zatreba tijekom boravka - pišite nam i brzo odgovaramo.',
    recsTitle: 'Gladni? Dosadno? Nikad.',
    recsCta: 'Pogledajte naše preporuke za Split',
    switch: 'Promijeni apartman',
    logout: 'Odjavi se',
  },
};

const de: Translation = {
  meta: {
    title: 'AmoreMore Apartments - schwimmen, lieben und schlafen im charmanten Split',
    description:
      'Zwei brandneue Luxus-Apartments im Herzen von Split, Kroatien. Sieben Minuten zum Strand Bacvice, wenige Schritte zum Diokletianpalast.',
    ogImageAlt: 'Innenansicht der AmoreMore Apartments in Split, Kroatien',
  },
  nav: {
    home: 'Start',
    amore: 'Amore',
    more: 'More',
    location: 'Lage',
    contact: 'Kontakt',
    book: 'Jetzt buchen',
    tips: 'Tipps',
    guest: 'Gäste-Portal',
  },
  hero: {
    kicker: 'Split · Kroatien',
    tagline: 'Schwimmen, lieben und schlafen im charmanten Split',
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
  recs: {
    metaTitle: 'Unsere Split-Empfehlungen - AmoreMore Apartments',
    metaDescription:
      'Wo man in Split isst und was man unternimmt - unsere ehrlichen Favoriten, von Konobas und Burgern bis zu Stränden, Bootstouren und Sonnenuntergängen.',
    kicker: 'Empfehlungen',
    title: 'Split, wie wir es leben',
    intro:
      'Die Orte, zu denen wir unsere Freunde schicken - alle selbst getestet, alle nah am Haus oder den Weg wert.',
    eatTitle: 'Essen & Trinken',
    doTitle: 'Was man unternimmt',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Hausgemachter Grill',
        blurb:
          'Ein unprätentiöses lokales Bistro, geliebt für handgemachtes Grillfleisch und Würste von kleinen Höfen. Hier isst Split wirklich.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burger & Craft-Bier',
        blurb:
          'Das Wohnzimmer des Viertels Gripe, direkt an der alten Festung: große Burger, kroatische Craft-Biere und null Touristenaufschlag.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Traditionell dalmatinisch',
        blurb:
          'Eine Konoba alter Schule, die das Viertel Varoš seit Jahrzehnten satt macht - gegrillter Fisch und Fleisch, und Gerichte wie von der Großmutter.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistro & Weinbar',
        blurb:
          'Ein lebhaftes, schön gestaltetes Bistro nahe der Pjaca - mediterrane Teller und eine der besten Weinkarten der Stadt.',
      },
      riva: {
        name: 'Riva',
        tag: 'Die Promenade',
        blurb:
          'Splits Wohnzimmer am Meer. Kaffee holen, den Fähren beim Auslaufen zusehen und einfach gar nichts tun - genau darum geht es.',
      },
      palace: {
        name: 'Diokletianpalast',
        tag: 'Weltkulturerbe',
        blurb:
          'Ein 1700 Jahre alter Römerpalast, der noch immer das lebendige Zentrum der Stadt ist. Verlaufen Sie sich in den Gassen, dann zum Peristyl zur goldenen Stunde.',
      },
      marjan: {
        name: 'Marjan-Hügel',
        tag: 'Aussicht & Pinienwald',
        blurb:
          'Steigen Sie die Treppen von Varoš hinauf zum besten Blick auf Stadt und Inseln. Am besten früh morgens oder zum Sonnenuntergang.',
      },
      bacvice: {
        name: 'Bačvice & Picigin',
        tag: 'Baden',
        blurb:
          'Ihr Strand um die Ecke, sieben Minuten entfernt. Schauen Sie den Einheimischen beim Picigin zu - einem Ballspiel, das genau hier im flachen Wasser erfunden wurde.',
      },
      znjan: {
        name: 'Žnjan-Promenade',
        tag: 'Spaziergang am Meer',
        blurb:
          'Eine lange, frisch renovierte Uferpromenade - perfekt für den Morgenlauf oder den Abendspaziergang am Meer.',
      },
      boat: {
        name: 'Bootstour zu den Inseln',
        tag: 'Tagesausflug',
        blurb:
          'Vom Hafen aus erreichen Sie Hvar, Brač oder die Blaue Lagune im Handumdrehen. Tagestour buchen, Badesachen einpacken.',
      },
    },
  },
  guest: {
    metaTitle: 'Gäste-Portal - AmoreMore Apartments',
    metaDescription: 'Alles, was Sie während Ihres Aufenthalts in den AmoreMore Apartments brauchen.',
    kicker: 'Gäste-Portal',
    loginTitle: 'Willkommen, lieber Gast',
    loginBody: 'Geben Sie das Passwort aus Ihrer Check-in-Nachricht ein.',
    password: 'Passwort',
    enter: 'Eintreten',
    wrong: 'Das ist es nicht - versuchen Sie es noch einmal.',
    chooseTitle: 'Wo wohnen Sie?',
    wifi: 'WLAN',
    network: 'Netzwerk',
    wifiPassword: 'Passwort',
    checkin: 'Check-in',
    checkout: 'Check-out',
    from: 'ab',
    until: 'bis',
    entrance: 'Eingang',
    entranceBody: 'Der Code für die grüne Eingangstür',
    lockerNote: 'Den Code für den Locker erhalten Sie beim Check-in.',
    contact: 'Wir sind für Sie da',
    contactBody: 'Was immer Sie während Ihres Aufenthalts brauchen - schreiben Sie uns, wir antworten schnell.',
    recsTitle: 'Hungrig? Langweilig? Niemals.',
    recsCta: 'Unsere Split-Empfehlungen ansehen',
    switch: 'Apartment wechseln',
    logout: 'Abmelden',
  },
};

const pl: Translation = {
  meta: {
    title: 'AmoreMore Apartments - morze, miłość i sen w urokliwym Splicie',
    description:
      'Dwa zupełnie nowe, luksusowe apartamenty w sercu Splitu. Siedem minut od plaży Bačvice, kilka kroków od Pałacu Dioklecjana.',
    ogImageAlt: 'Wnętrze apartamentów AmoreMore w Splicie',
  },
  nav: {
    home: 'Start',
    amore: 'Amore',
    more: 'More',
    location: 'Lokalizacja',
    contact: 'Kontakt',
    book: 'Zarezerwuj',
    tips: 'Polecamy',
    guest: 'Portal gościa',
  },
  hero: {
    kicker: 'Split · Chorwacja',
    tagline: 'Pływaj, kochaj i śpij w urokliwym Splicie',
    scroll: 'Przewiń',
  },
  story: {
    kicker: 'Historia',
    title: 'Miłość i morze pod jednym dachem',
    p1: 'Amore to po włosku miłość. More to po chorwacku morze. Przy spokojnej uliczce między Pałacem Dioklecjana a plażą Bačvice nasz rodzinny dom kryje dwa zupełnie nowe apartamenty, nazwane na cześć tego, co Split robi najlepiej.',
    p2: 'Oba wyremontowane od podstaw - kamień, dąb i mosiądz, chłodne powietrze w letnim upale i łóżko, o którym opowiesz znajomym.',
  },
  apartments: {
    kicker: 'Apartamenty',
    title: 'Wybierz swoją stronę morza',
    explore: 'Zobacz',
    amore: {
      name: 'Amore',
      type: 'Apartament typu studio',
      blurb: 'Ciepłe, kameralne studio dla dwojga - wszystko, czego potrzebujesz, w zasięgu ręki i nic ponadto.',
      sleeps: 'Dla 2 osób',
    },
    more: {
      name: 'More',
      type: 'Apartament z sypialnią',
      blurb: 'Osobna sypialnia, salon do leniuchowania i poranki, które zaczynają się powoli na balkonie.',
      sleeps: 'Dla 2 osób',
    },
  },
  amenities: {
    kicker: 'Komfort',
    title: 'Wszystko przemyślane',
    items: {
      wifi: 'Szybkie darmowe WiFi',
      ac: 'Klimatyzacja',
      balcony: 'Balkon',
      coffee: 'Ekspres do kawy',
      dishwasher: 'Zmywarka',
      oven: 'Piekarnik i pełna kuchnia',
      desk: 'Biurko do pracy',
      bathroom: 'Deszczownica',
      sonos: 'Nagłośnienie Sonos (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Gdzie się budzisz',
    title: 'Między pałacem a plażą',
    body: 'Dom stoi w spokojnej okolicy, krótki spacer od wszystkiego, za co kocha się Split. Zostaw bagaże, złap ręcznik - popływasz, zanim kawa zdąży ostygnąć.',
    walkToBeach: 'minut pieszo na plażę Bačvice',
    toPalace: 'km do Pałacu Dioklecjana',
    toAirport: 'km do lotniska Split',
    mapLink: 'Otwórz w Mapach Google',
  },
  gallery: {
    kicker: 'W środku',
    title: 'Rozejrzyj się',
    viewPhoto: 'Zobacz zdjęcie',
  },
  contact: {
    kicker: 'Napisz do nas',
    title: 'Pytaj o cokolwiek',
    body: 'Pytania o terminy, przyjazd czy okolicę - napisz, odpowiadamy szybko.',
    name: 'Twoje imię',
    dates: 'Termin (np. 12 - 16 sierpnia)',
    apartment: 'Apartament',
    any: 'Którykolwiek',
    message: 'Wiadomość',
    send: 'Otwórz szkic e-maila',
    hint: 'Przycisk otwiera Twoją aplikację pocztową z gotową wiadomością - nic nie wysyła się automatycznie.',
    emailLabel: 'lub napisz bezpośrednio na',
  },
  book: {
    title: 'Morze czeka',
    body: 'Napisz do nas z terminem - rezerwacja bezpośrednia to zawsze najlepsza cena.',
    cta: 'Sprawdź dostępność',
    alt: 'lub zarezerwuj na',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Wróć na stronę główną',
    amenities: 'Udogodnienia',
    book: 'Zarezerwuj ten apartament',
    otherApartment: 'Zobacz drugi apartament',
    amore: {
      intro:
        'Studio nie bez powodu nosi imię Amore: jest małe tak, jak małe bywają dobre rzeczy - ciepłe, przemyślane i całkowicie Twoje. Pełna kuchnia, deszczownica i łóżko w miękkim, mosiężnym świetle.',
    },
    more: {
      intro:
        'More znaczy morze, a ten apartament płynie jak ono: otwarty salon z kuchnią, sypialnia za własnymi drzwiami i balkon na powolne śniadania.',
    },
  },
  recs: {
    metaTitle: 'Nasze polecenia w Splicie - AmoreMore Apartments',
    metaDescription:
      'Gdzie zjeść i co robić w Splicie - nasi sprawdzeni faworyci, od konob i burgerów po plaże, rejsy i zachody słońca.',
    kicker: 'Polecamy',
    title: 'Split, jakim żyjemy na co dzień',
    intro:
      'Miejsca, do których wysyłamy przyjaciół - wszystkie sprawdzone, wszystkie blisko domu albo warte spaceru.',
    eatTitle: 'Gdzie zjeść i wypić',
    doTitle: 'Co robić',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Domowy grill',
        blurb:
          'Lokalne bistro bez zadęcia, słynące z ręcznie robionych mięs i kiełbas z grilla, z małych gospodarstw. Tu naprawdę jada Split.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burgery i piwo kraftowe',
        blurb:
          'Salon dzielnicy Gripe, tuż przy starej twierdzy: wielkie burgery, chorwackie piwa kraftowe i zero turystycznych cen.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Tradycyjna dalmatyńska',
        blurb:
          'Konoba starej szkoły, która od dekad karmi dzielnicę Varoš - ryby i mięso z grilla oraz dania jak u babci.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistro i winiarnia',
        blurb:
          'Tętniące życiem, pięknie urządzone bistro przy placu Pjaca - śródziemnomorskie talerze i jedna z najlepszych kart win w mieście.',
      },
      riva: {
        name: 'Riva',
        tag: 'Promenada',
        blurb:
          'Nadmorski salon Splitu. Weź kawę, patrz, jak wypływają promy, i nie rób kompletnie nic - o to właśnie chodzi.',
      },
      palace: {
        name: 'Pałac Dioklecjana',
        tag: 'Światowe dziedzictwo',
        blurb:
          'Rzymski pałac sprzed 1700 lat, wciąż żywe centrum miasta. Zgub się w uliczkach, a o złotej godzinie odszukaj Perystyl.',
      },
      marjan: {
        name: 'Wzgórze Marjan',
        tag: 'Widoki i las sosnowy',
        blurb:
          'Wejdź schodami z Varoša po najlepszy widok na miasto i wyspy. Najlepiej wcześnie rano albo o zachodzie słońca.',
      },
      bacvice: {
        name: 'Bačvice i picigin',
        tag: 'Kąpiel',
        blurb:
          'Twoja osiedlowa plaża, siedem minut stąd. Popatrz, jak miejscowi grają w picigin - grę wymyśloną właśnie na tej płyciźnie.',
      },
      znjan: {
        name: 'Promenada Žnjan',
        tag: 'Spacer nad morzem',
        blurb:
          'Długie, świeżo odnowione nabrzeże - idealne na poranny bieg albo wieczorny spacer nad samym morzem.',
      },
      boat: {
        name: 'Rejs na wyspy',
        tag: 'Wycieczka na dzień',
        blurb:
          'Z portu w mgnieniu oka dopłyniesz na Hvar, Brač albo do Błękitnej Laguny. Zarezerwuj rejs i spakuj strój kąpielowy.',
      },
    },
  },
  guest: {
    metaTitle: 'Portal gościa - AmoreMore Apartments',
    metaDescription: 'Wszystko, czego potrzebujesz podczas pobytu w AmoreMore Apartments.',
    kicker: 'Portal gościa',
    loginTitle: 'Witaj, drogi gościu',
    loginBody: 'Wpisz hasło z wiadomości z instrukcjami zameldowania.',
    password: 'Hasło',
    enter: 'Wejdź',
    wrong: 'To nie to - spróbuj jeszcze raz.',
    chooseTitle: 'Gdzie mieszkasz?',
    wifi: 'WiFi',
    network: 'Sieć',
    wifiPassword: 'Hasło',
    checkin: 'Zameldowanie',
    checkout: 'Wymeldowanie',
    from: 'od',
    until: 'do',
    entrance: 'Wejście',
    entranceBody: 'Kod do zielonych drzwi wejściowych',
    lockerNote: 'Kod do schowka otrzymasz przy zameldowaniu.',
    contact: 'Jesteśmy do dyspozycji',
    contactBody: 'Cokolwiek będzie Ci potrzebne podczas pobytu - napisz, odpowiadamy szybko.',
    recsTitle: 'Głód? Nuda? Nigdy.',
    recsCta: 'Zobacz nasze polecenia w Splicie',
    switch: 'Zmień apartament',
    logout: 'Wyloguj się',
  },
};

const cs: Translation = {
  meta: {
    title: 'AmoreMore Apartments - moře, láska a spánek v okouzlujícím Splitu',
    description:
      'Dva zbrusu nové luxusní apartmány v srdci Splitu. Sedm minut od pláže Bačvice, pár kroků od Diokleciánova paláce.',
    ogImageAlt: 'Interiér apartmánů AmoreMore ve Splitu',
  },
  nav: {
    home: 'Úvod',
    amore: 'Amore',
    more: 'More',
    location: 'Poloha',
    contact: 'Kontakt',
    book: 'Rezervovat',
    tips: 'Tipy',
    guest: 'Portál pro hosty',
  },
  hero: {
    kicker: 'Split · Chorvatsko',
    tagline: 'Plavte, milujte a spěte v okouzlujícím Splitu',
    scroll: 'Posunout',
  },
  story: {
    kicker: 'Příběh',
    title: 'Láska a moře pod jednou střechou',
    p1: 'Amore je italsky láska. More je chorvatsky moře. V klidné uličce mezi Diokleciánovým palácem a pláží Bačvice ukrývá náš rodinný dům dva zbrusu nové apartmány, pojmenované po tom, co Split umí nejlépe.',
    p2: 'Oba prošly kompletní rekonstrukcí - kámen, dub a mosaz, chladný vzduch v letním vedru a postel, o které budete vyprávět.',
  },
  apartments: {
    kicker: 'Apartmány',
    title: 'Vyberte si svou stranu moře',
    explore: 'Prohlédnout',
    amore: {
      name: 'Amore',
      type: 'Studio',
      blurb: 'Teplé, útulné studio pro dva - vše, co potřebujete, na dosah ruky, a nic navíc.',
      sleeps: 'Pro 2 osoby',
    },
    more: {
      name: 'More',
      type: 'Apartmán s ložnicí',
      blurb: 'Samostatná ložnice, obývák na lenošení a rána, která začínají pomalu na balkoně.',
      sleeps: 'Pro 2 osoby',
    },
  },
  amenities: {
    kicker: 'Pohodlí',
    title: 'Vše promyšlené',
    items: {
      wifi: 'Rychlá WiFi zdarma',
      ac: 'Klimatizace',
      balcony: 'Balkon',
      coffee: 'Kávovar',
      dishwasher: 'Myčka',
      oven: 'Trouba a plně vybavená kuchyň',
      desk: 'Pracovní stůl',
      bathroom: 'Dešťová sprcha',
      sonos: 'Zvuk Sonos (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Kde se probouzíte',
    title: 'Mezi palácem a pláží',
    body: 'Dům stojí v klidné čtvrti, kousek pěšky od všeho, za co lidé Split milují. Odložte tašky, popadněte ručník a plavete dřív, než vám vystydne káva.',
    walkToBeach: 'minut pěšky na pláž Bačvice',
    toPalace: 'km k Diokleciánovu paláci',
    toAirport: 'km na letiště Split',
    mapLink: 'Otevřít v Mapách Google',
  },
  gallery: {
    kicker: 'Uvnitř',
    title: 'Rozhlédněte se',
    viewPhoto: 'Zobrazit fotku',
  },
  contact: {
    kicker: 'Ozvěte se',
    title: 'Zeptejte se na cokoli',
    body: 'Otázky k termínům, příjezdu nebo okolí - napište nám, odpovídáme rychle.',
    name: 'Vaše jméno',
    dates: 'Termín (např. 12. - 16. srpna)',
    apartment: 'Apartmán',
    any: 'Kterýkoli',
    message: 'Zpráva',
    send: 'Otevřít koncept e-mailu',
    hint: 'Tlačítko otevře vaši e-mailovou aplikaci s předvyplněnou zprávou - nic se neodesílá automaticky.',
    emailLabel: 'nebo napište přímo na',
  },
  book: {
    title: 'Moře čeká',
    body: 'Napište nám svůj termín - přímá rezervace znamená vždy nejlepší cenu.',
    cta: 'Ověřit dostupnost',
    alt: 'nebo rezervujte na',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Zpět na úvod',
    amenities: 'Vybavení',
    book: 'Rezervovat tento apartmán',
    otherApartment: 'Prohlédnout druhý apartmán',
    amore: {
      intro:
        'Studio nese jméno Amore z dobrého důvodu: je malé tak, jak bývají malé dobré věci - teplé, promyšlené a jen vaše. Plně vybavená kuchyň, dešťová sprcha a postel v měkkém mosazném světle.',
    },
    more: {
      intro:
        'More znamená moře a tento apartmán plyne jako ono: otevřený obývák s kuchyní, ložnice za vlastními dveřmi a balkon na pomalé snídaně.',
    },
  },
  recs: {
    metaTitle: 'Naše tipy na Split - AmoreMore Apartments',
    metaDescription:
      'Kde jíst a co dělat ve Splitu - naši poctiví favorité, od konob a burgerů po pláže, výlety lodí a západy slunce.',
    kicker: 'Tipy',
    title: 'Split, jak ho žijeme my',
    intro:
      'Místa, kam posíláme své přátele - všechna vyzkoušená, všechna blízko domu nebo stojí za procházku.',
    eatTitle: 'Kde jíst a pít',
    doTitle: 'Co podniknout',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Domácí gril',
        blurb:
          'Nenucené místní bistro proslulé ručně dělaným grilovaným masem a klobásami z malých farem. Tady Split opravdu jí.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burgery a craft pivo',
        blurb:
          'Obývák čtvrti Gripe hned u staré pevnosti: velké burgery, chorvatská craft piva a žádné turistické přirážky.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Tradiční dalmatská',
        blurb:
          'Konoba staré školy, která už desítky let sytí čtvrť Varoš - ryby a maso z grilu a jídla jako od babičky.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistro a vinný bar',
        blurb:
          'Živé, krásně zařízené bistro u náměstí Pjaca - středomořské talíře a jeden z nejlepších vinných lístků ve městě.',
      },
      riva: {
        name: 'Riva',
        tag: 'Promenáda',
        blurb:
          'Splitský obývák u moře. Dejte si kávu, sledujte vyplouvající trajekty a nedělejte vůbec nic - přesně o to jde.',
      },
      palace: {
        name: 'Diokleciánův palác',
        tag: 'Světové dědictví',
        blurb:
          'Římský palác starý 1700 let, který je stále živým centrem města. Ztraťte se v uličkách a při zlaté hodince najděte Peristyl.',
      },
      marjan: {
        name: 'Vrch Marjan',
        tag: 'Výhledy a borový les',
        blurb:
          'Vyjděte po schodech z Varoše za nejlepším výhledem na město a ostrovy. Nejlépe brzy ráno nebo při západu slunce.',
      },
      bacvice: {
        name: 'Bačvice a picigin',
        tag: 'Koupání',
        blurb:
          'Vaše místní pláž, sedm minut pěšky. Sledujte místní při hře picigin - hře vymyšlené právě v této mělčině.',
      },
      znjan: {
        name: 'Promenáda Žnjan',
        tag: 'Procházka u moře',
        blurb:
          'Dlouhé, čerstvě zrekonstruované nábřeží - ideální na ranní běh nebo večerní procházku u moře.',
      },
      boat: {
        name: 'Výlet lodí na ostrovy',
        tag: 'Celodenní výlet',
        blurb:
          'Z přístavu jste za chvíli na Hvaru, Brači nebo v Modré laguně. Zarezervujte si výlet a přibalte plavky.',
      },
    },
  },
  guest: {
    metaTitle: 'Portál pro hosty - AmoreMore Apartments',
    metaDescription: 'Vše, co během pobytu v AmoreMore Apartments potřebujete.',
    kicker: 'Portál pro hosty',
    loginTitle: 'Vítejte, milý hoste',
    loginBody: 'Zadejte heslo ze zprávy s pokyny k příjezdu.',
    password: 'Heslo',
    enter: 'Vstoupit',
    wrong: 'To není ono - zkuste to znovu.',
    chooseTitle: 'Kde jste ubytováni?',
    wifi: 'WiFi',
    network: 'Síť',
    wifiPassword: 'Heslo',
    checkin: 'Check-in',
    checkout: 'Check-out',
    from: 'od',
    until: 'do',
    entrance: 'Vchod',
    entranceBody: 'Kód k zeleným vchodovým dveřím',
    lockerNote: 'Kód od schránky dostanete při check-inu.',
    contact: 'Jsme tu pro vás',
    contactBody: 'Cokoli budete během pobytu potřebovat - napište nám, odpovídáme rychle.',
    recsTitle: 'Hlad? Nuda? Nikdy.',
    recsCta: 'Podívejte se na naše tipy na Split',
    switch: 'Změnit apartmán',
    logout: 'Odhlásit se',
  },
};

const it: Translation = {
  meta: {
    title: 'AmoreMore Apartments - mare, amore e sonno nell’incantevole Spalato',
    description:
      'Due appartamenti di lusso completamente nuovi nel cuore di Spalato. A sette minuti dalla spiaggia di Bačvice, a pochi passi dal Palazzo di Diocleziano.',
    ogImageAlt: 'Interni degli appartamenti AmoreMore a Spalato',
  },
  nav: {
    home: 'Home',
    amore: 'Amore',
    more: 'More',
    location: 'Posizione',
    contact: 'Contatti',
    book: 'Prenota ora',
    tips: 'Consigli',
    guest: 'Portale ospiti',
  },
  hero: {
    kicker: 'Spalato · Croazia',
    tagline: 'Nuota, ama e dormi nell’incantevole Spalato',
    scroll: 'Scorri',
  },
  story: {
    kicker: 'La storia',
    title: 'L’amore e il mare, sotto lo stesso tetto',
    p1: 'Amore è l’amore. More è il mare in croato. In una via tranquilla tra il Palazzo di Diocleziano e la spiaggia di Bačvice, la nostra casa di famiglia custodisce due appartamenti completamente nuovi, che portano il nome delle due cose che Spalato sa fare meglio.',
    p2: 'Entrambi ristrutturati da cima a fondo - pietra, rovere e ottone, aria fresca nella calura estiva e un letto di cui parlerete a lungo.',
  },
  apartments: {
    kicker: 'Gli appartamenti',
    title: 'Scegli il tuo lato del mare',
    explore: 'Scopri',
    amore: {
      name: 'Amore',
      type: 'Monolocale',
      blurb: 'Uno studio caldo e intimo per due - tutto ciò che serve a portata di mano, e niente di superfluo.',
      sleeps: 'Per 2 persone',
    },
    more: {
      name: 'More',
      type: 'Appartamento con camera da letto',
      blurb: 'Una camera separata, un soggiorno in cui indugiare e mattine che iniziano lente sul balcone.',
      sleeps: 'Per 2 persone',
    },
  },
  amenities: {
    kicker: 'Comfort',
    title: 'Tutto, pensato nei dettagli',
    items: {
      wifi: 'WiFi veloce e gratuito',
      ac: 'Aria condizionata',
      balcony: 'Balcone',
      coffee: 'Macchina del caffè',
      dishwasher: 'Lavastoviglie',
      oven: 'Forno e cucina completa',
      desk: 'Scrivania',
      bathroom: 'Doccia a pioggia',
      sonos: 'Audio Sonos (IKEA Symfonisk)',
    },
  },
  location: {
    kicker: 'Dove ti svegli',
    title: 'Tra il palazzo e la spiaggia',
    body: 'La casa si trova in un quartiere tranquillo, a due passi da tutto ciò per cui Spalato è amata. Posa le valigie, prendi un telo e sei in acqua prima che il caffè si raffreddi.',
    walkToBeach: 'minuti a piedi dalla spiaggia di Bačvice',
    toPalace: 'km dal Palazzo di Diocleziano',
    toAirport: 'km dall’aeroporto di Spalato',
    mapLink: 'Apri in Google Maps',
  },
  gallery: {
    kicker: 'Dentro',
    title: 'Dai un’occhiata',
    viewPhoto: 'Guarda la foto',
  },
  contact: {
    kicker: 'Scrivici',
    title: 'Chiedici qualsiasi cosa',
    body: 'Domande su date, arrivo o quartiere - scrivici e rispondiamo in fretta.',
    name: 'Il tuo nome',
    dates: 'Date (es. 12 - 16 agosto)',
    apartment: 'Appartamento',
    any: 'Uno qualsiasi',
    message: 'Messaggio',
    send: 'Apri bozza e-mail',
    hint: 'Il pulsante apre la tua app di posta con il messaggio già compilato - nulla viene inviato automaticamente.',
    emailLabel: 'oppure scrivi direttamente a',
  },
  book: {
    title: 'Il mare ti aspetta',
    body: 'Scrivici le tue date - prenotare direttamente significa sempre il miglior prezzo.',
    cta: 'Verifica disponibilità',
    alt: 'oppure prenota su',
  },
  footer: {
    rights: 'AmoreMore Apartments, Split',
  },
  apartmentPage: {
    backHome: 'Torna alla home',
    amenities: 'Servizi',
    book: 'Prenota questo appartamento',
    otherApartment: 'Guarda l’altro appartamento',
    amore: {
      intro:
        'Lo studio porta il nome Amore per una ragione: è piccolo come lo sono le cose belle - caldo, curato e tutto tuo. Cucina completa, doccia a pioggia e un letto sotto una morbida luce d’ottone.',
    },
    more: {
      intro:
        'More significa mare, e questo appartamento scorre come lui: soggiorno aperto con cucina, una camera dietro la propria porta e un balcone per colazioni lente.',
    },
  },
  recs: {
    metaTitle: 'I nostri consigli su Spalato - AmoreMore Apartments',
    metaDescription:
      'Dove mangiare e cosa fare a Spalato - i nostri veri preferiti, dalle konobe e i burger alle spiagge, alle gite in barca e ai tramonti.',
    kicker: 'Consigli',
    title: 'Spalato, come la viviamo noi',
    intro:
      'I posti dove mandiamo i nostri amici - tutti provati, tutti vicini a casa o degni di una passeggiata.',
    eatTitle: 'Dove mangiare e bere',
    doTitle: 'Cosa fare',
    items: {
      ciba: {
        name: 'Bistro Ćiba',
        tag: 'Griglia casereccia',
        blurb:
          'Un bistrot locale senza fronzoli, amato per carni e salsicce alla griglia fatte a mano, da piccole fattorie. È qui che Spalato mangia davvero.',
      },
      planb: {
        name: 'Plan B Pub',
        tag: 'Burger e birra artigianale',
        blurb:
          'Il salotto del quartiere Gripe, proprio accanto alla vecchia fortezza: burger generosi, birre artigianali croate e zero sovrapprezzi turistici.',
      },
      varos: {
        name: 'Konoba Varoš',
        tag: 'Tradizione dalmata',
        blurb:
          'Una konoba di vecchia scuola che sfama il quartiere Varoš da decenni - pesce e carne alla griglia e piatti come quelli della nonna.',
      },
      bokeria: {
        name: 'Bokeria',
        tag: 'Bistrot e wine bar',
        blurb:
          'Un bistrot vivace e curato vicino alla Pjaca - piatti mediterranei e una delle migliori carte dei vini della città.',
      },
      riva: {
        name: 'Riva',
        tag: 'La passeggiata',
        blurb:
          'Il salotto sul mare di Spalato. Prendi un caffè, guarda i traghetti salpare e non fare assolutamente niente - il punto è proprio questo.',
      },
      palace: {
        name: 'Palazzo di Diocleziano',
        tag: 'Patrimonio dell’umanità',
        blurb:
          'Un palazzo romano di 1700 anni che è ancora il cuore vivo della città. Perditi nei vicoli, poi trova il Peristilio all’ora dorata.',
      },
      marjan: {
        name: 'Collina Marjan',
        tag: 'Panorami e pineta',
        blurb:
          'Sali le scale dal Varoš per la vista più bella sulla città e sulle isole. Meglio al mattino presto o al tramonto.',
      },
      bacvice: {
        name: 'Bačvice e picigin',
        tag: 'Nuotare',
        blurb:
          'La tua spiaggia di quartiere, a sette minuti. Guarda i locali giocare a picigin - un gioco inventato proprio in questi bassi fondali.',
      },
      znjan: {
        name: 'Lungomare di Žnjan',
        tag: 'Passeggiata sul mare',
        blurb:
          'Un lungomare lungo e appena rinnovato, perfetto per la corsa mattutina o la passeggiata serale in riva al mare.',
      },
      boat: {
        name: 'In barca verso le isole',
        tag: 'Gita di un giorno',
        blurb:
          'Dal porto raggiungi in un attimo Hvar, Brač o la Laguna Blu. Prenota un’escursione e porta il costume.',
      },
    },
  },
  guest: {
    metaTitle: 'Portale ospiti - AmoreMore Apartments',
    metaDescription: 'Tutto ciò che ti serve durante il soggiorno agli AmoreMore Apartments.',
    kicker: 'Portale ospiti',
    loginTitle: 'Benvenuto, caro ospite',
    loginBody: 'Inserisci la password dal messaggio con le istruzioni per il check-in.',
    password: 'Password',
    enter: 'Entra',
    wrong: 'Non è questa - riprova.',
    chooseTitle: 'Dove alloggi?',
    wifi: 'WiFi',
    network: 'Rete',
    wifiPassword: 'Password',
    checkin: 'Check-in',
    checkout: 'Check-out',
    from: 'dalle',
    until: 'entro le',
    entrance: 'Ingresso',
    entranceBody: 'Il codice della porta d’ingresso verde',
    lockerNote: 'Il codice del locker ti verrà dato al check-in.',
    contact: 'Siamo qui per te',
    contactBody: 'Qualsiasi cosa ti serva durante il soggiorno - scrivici e rispondiamo in fretta.',
    recsTitle: 'Fame? Noia? Mai.',
    recsCta: 'Scopri i nostri consigli su Spalato',
    switch: 'Cambia appartamento',
    logout: 'Esci',
  },
};

export const translations: Record<Locale, Translation> = { en, hr, de, pl, cs, it };

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
  return withBase(locale === 'en' ? clean : `/${locale}${clean === '/' ? '' : clean}`);
}
