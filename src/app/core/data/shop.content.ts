import {
  Barber,
  GalleryShot,
  JournalPost,
  NavLink,
  PriceLine,
  ServiceItem,
  ShopProfile,
  VisitStep,
} from '../models/shop.models';

export const SHOP: ShopProfile = {
  name: 'Kammwerk',
  logoLead: 'Kamm',
  logoAccent: 'werk',
  phoneDisplay: '+49 40 3344 2190',
  phoneHref: 'tel:+494033442190',
  whatsappNumber: '494033442190',
  whatsappMessage: 'Guten Tag, ich möchte einen Termin im Kammwerk vereinbaren.',
  email: 'hallo@kammwerk.de',
  address: 'Große Bleichen 18',
  cityLine: '20354 Hamburg',
  mapEmbedUrl:
    'https://www.openstreetmap.org/export/embed.html?bbox=9.985%2C53.550%2C9.995%2C53.556&layer=mapnik&marker=53.5532%2C9.9902',
  openingHours: [
    { days: 'Dienstag – Freitag', hours: '10:00 – 20:00' },
    { days: 'Samstag', hours: '09:00 – 16:00' },
    { days: 'Sonntag & Montag', hours: 'geschlossen' },
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Start', path: '/' },
  { label: 'Über uns', path: '/ueber-uns' },
  { label: 'Leistungen', path: '/leistungen' },
  { label: 'Team', path: '/team' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'Journal', path: '/journal' },
  { label: 'Kontakt', path: '/kontakt' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'schnitt',
    title: 'Herrenhaarschnitt',
    summary: 'Schnitt nach Kopfform, mit Schere und Maschine, abgeschlossen mit Kontur.',
    details: 'Wir schauen zuerst, wie das Haar liegt und was im Alltag hält. Danach wird gewaschen, geschnitten und die Kontur trocken nachgezogen.',
    price: '32 €',
    icon: 'cut',
  },
  {
    id: 'bart',
    title: 'Bartpflege',
    summary: 'Kürzung, Linie und Pflegeöl, damit der Bart nicht ausfranst.',
    details: 'Die Linie folgt dem Gesicht, nicht einer Schablone. Zum Schluss kommt ein Öl, das nicht klebt.',
    price: '22 €',
    icon: 'beard',
  },
  {
    id: 'rasur',
    title: 'Nassrasur',
    summary: 'Warmes Tuch, Rasierschaum und Klinge. Für ein glattes Finish.',
    details: 'Die Rasur dauert so lange, wie die Haut braucht. Wir gehen nicht zweimal über dieselbe Stelle, wenn es nicht nötig ist.',
    price: '28 €',
    icon: 'shave',
  },
  {
    id: 'kombi',
    title: 'Schnitt und Bart',
    summary: 'Beides in einem Termin, damit Haar und Bart zusammenpassen.',
    details: 'Zuerst der Schnitt, dann der Bart. So sieht man die Proportion, bevor die Linie sitzt.',
    price: '48 €',
    icon: 'style',
  },
  {
    id: 'kinder',
    title: 'Kinderhaarschnitt',
    summary: 'Kurzer Termin, ruhige Erklärung, ohne Druck.',
    details: 'Für Kinder bis 12 Jahre. Eltern bleiben dabei. Wenn es an einem Tag nicht klappt, machen wir einen neuen Termin.',
    price: '22 €',
    icon: 'kids',
  },
  {
    id: 'pflege',
    title: 'Kopfhaut und Styling',
    summary: 'Waschen, leichte Massage und ein Produkt, das zum Haar passt.',
    details: 'Kein Paket und keine Mitgliedschaft. Wir zeigen, welches Produkt reicht, und lassen den Rest im Regal.',
    price: '18 €',
    icon: 'care',
  },
];

export const BARBERS: Barber[] = [
  {
    slug: 'jonas-frey',
    name: 'Jonas Frey',
    role: 'Inhaber · Schnitt',
    shortBio: 'Schneidet seit 14 Jahren und erklärt die Form, bevor die Schere ansetzt.',
    bio: [
      'Jonas Frey führt das Kammwerk. Sein Schwerpunkt sind klassische Schnitte, die nach zwei Wochen noch sitzen.',
      'Er nimmt sich am Anfang Zeit für die Kopfform und sagt auch, wenn ein Wunsch zum Haar nicht passt.',
    ],
    image: 'images/barber-1.png',
    focus: ['Herrenschnitt', 'Kontur', 'Beratung'],
  },
  {
    slug: 'malik-ozkan',
    name: 'Malik Özkan',
    role: 'Bart und Rasur',
    shortBio: 'Zieht Bartlinien und rasiert mit dem Messer, ohne die Haut zu reizen.',
    bio: [
      'Malik Özkan macht Bart und Nassrasur. Er arbeitet langsam an der Linie und schnell an den Flächen.',
      'Empfindliche Haut bekommt ein kühles Tuch und eine kürzere Klinge, kein Aftershave aus Gewohnheit.',
    ],
    image: 'images/barber-2.png',
    focus: ['Bartpflege', 'Nassrasur', 'Haut'],
  },
  {
    slug: 'lena-hartwig',
    name: 'Lena Hartwig',
    role: 'Farbe und Finish',
    shortBio: 'Setzt dezente Farbe und bringt das Haar in Form, ohne es zu verkleben.',
    bio: [
      'Lena Hartwig macht Ansätze, Grauabdeckung und das Finish nach dem Schnitt.',
      'Sie mischt wenig Produkt und zeigt, wie man das zu Hause wiederholt.',
    ],
    image: 'images/barber-3.png',
    focus: ['Ansatzfarbe', 'Styling', 'Pflege'],
  },
];

export const PRICES: PriceLine[] = [
  { name: 'Herrenhaarschnitt', price: '32 €' },
  { name: 'Maschinenschnitt', price: '24 €' },
  { name: 'Bartpflege', price: '22 €' },
  { name: 'Nassrasur', price: '28 €' },
  { name: 'Schnitt und Bart', price: '48 €' },
  { name: 'Kinderhaarschnitt', price: '22 €' },
  { name: 'Ansatzfarbe', price: 'ab 35 €' },
  { name: 'Waschen und Styling', price: '18 €' },
];

export const STEPS: VisitStep[] = [
  { step: '01', title: 'WhatsApp oder Anruf', text: 'Sie nennen Schnitt oder Bart und einen Wunschtag. Wir bestätigen einen Stuhl, keine Mitgliedschaft.' },
  { step: '02', title: 'Kurzes Gespräch', text: 'Am Stuhl zeigen Sie ein Foto oder beschreiben den Alltag. Dann erst die Schere.' },
  { step: '03', title: 'Schnitt und Kontur', text: 'Zum Schluss prüfen wir die Linie im Spiegel. Nachbessern gehört zum Termin.' },
];

export const GALLERY: GalleryShot[] = [
  { image: 'images/cut-1.png', alt: 'Haarschnitt im Kammwerk' },
  { image: 'images/cut-2.png', alt: 'Arbeit am Stuhl', wide: true },
  { image: 'images/cut-3.png', alt: 'Detail eines Schnitts', wide: true },
  { image: 'images/cut-4.png', alt: 'Bartkontur' },
];

export const POSTS: JournalPost[] = [
  {
    slug: 'bartlinie',
    title: 'Warum die Bartlinie am Ohr beginnt',
    excerpt: 'Eine saubere Linie folgt dem Knochen, nicht dem letzten Trendfoto.',
    date: '3. März 2026',
    author: 'Malik Özkan',
    image: 'images/journal-1.png',
    paragraphs: [
      'Viele Linien werden zu hoch angesetzt. Dann wirkt das Gesicht schmaler, als es ist, und der Bart wächst in die Wange zurück.',
      'Wir starten am Ohr und gehen zur Lippe. Was dazwischen nicht zum Knochen passt, bleibt stehen oder kommt weg – das entscheiden wir gemeinsam.',
      'Zu Hause reicht ein Trimmer an der gleichen Linie alle paar Tage. Ein neues Design braucht keinen neuen Termin jede Woche.',
    ],
  },
  {
    slug: 'zwei-wochen',
    title: 'Ein Schnitt, der nach zwei Wochen noch stimmt',
    excerpt: 'Die Länge planen wir für den Tag danach, nicht für das Foto im Salon.',
    date: '18. Januar 2026',
    author: 'Jonas Frey',
    image: 'images/journal-2.png',
    paragraphs: [
      'Frisch aus dem Stuhl sieht fast jeder Schnitt gut aus. Entscheidend ist die zweite Woche, wenn das Haar wieder Gewicht hat.',
      'Deshalb lassen wir an der Oberseite oft etwas mehr Länge und nehmen die Kontur enger. So fällt das Haar, statt abzustehen.',
      'Wenn Sie eine Mütze tragen oder einen Helm, sagen Sie das vorher. Der Schnitt wird dann an den Seiten anders.',
    ],
  },
  {
    slug: 'nassrasur',
    title: 'Nassrasur ohne rote Haut',
    excerpt: 'Wärme, wenig Züge und kein Alkohol direkt danach.',
    date: '9. November 2025',
    author: 'Malik Özkan',
    image: 'images/journal-3.png',
    paragraphs: [
      'Die Haut muss warm sein, bevor die Klinge kommt. Ein heißes Tuch macht mehr als eine zweite Schicht Schaum.',
      'Wir rasieren mit dem Strich und gehen nur dort gegen den Strich, wo Stoppeln sitzen bleiben.',
      'Danach ein kühles Tuch. Aftershave mit Alkohol lassen wir weg, wenn die Haut schon spannt.',
    ],
  },
];

export const ABOUT_POINTS = [
  'Drei feste Plätze, keine wechselnden Aushilfen am Samstag',
  'Preise hängen aus, bevor Sie sich setzen',
  'Termin per WhatsApp, ohne Mitgliedskarte',
];
