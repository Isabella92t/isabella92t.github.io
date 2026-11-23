// ALL TEXT PÅ SIDAN FINNS I DEN HÄR FILEN.
// Vill du ändra en text, lägga till ett projekt eller en bild,
// så gör du det här. Du behöver inte ändra något annat.
//
// Bilder: lägg bildfilen i mappen public/bilder/
// och skriv sökvägen utan "public/", till exempel "bilder/min-bild.jpg".

export type Link = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  // Vilken plattform appen är byggd för, till exempel "iOS" eller "Android".
  platform: string;
  subtitle: string;
  tags: string[];
  description: string[];
  // Skärmbilder. Lämna listan tom om du inte har några bilder än.
  images: string[];
  links: Link[];
  // true = visas stort överst bland projekten.
  featured?: boolean;
};

export const person = {
  name: "Isabella Heidari",
  title: "Apputvecklare inom iOS och Android",
  intro:
    "Jag bygger mobilappar i React Native, Swift och Kotlin. Jag arbetar också som tolk sedan sex år, och min första egna app, TolkAppen, finns nu i App Store.",
  about: [
    "Jag studerar Programmering iPhone och Android på Malmö Yrkeshögskola. Vid sidan av studierna arbetar jag som tolk, vilket jag har gjort i sex år.",
    "Under min LIA byggde jag TolkAppen, ett digitalt hjälpmedel för tolkar. Jag tog appen hela vägen från idé och kravspecifikation till databas, design, testning och publicering i App Store.",
    "Jag gillar att bygga saker som löser riktiga problem, och jag vill att det jag gör ska vara enkelt och tydligt att använda.",
  ],
  email: "tolkenisabella@gmail.com",
  github: "https://github.com/Isabella92t",
  // Klistra in din LinkedIn-adress här. Tom text = ingen LinkedIn-knapp.
  linkedin: "",
};

export const education = [
  {
    school: "Malmö Yrkeshögskola",
    program: "Programmering iPhone och Android",
    // Skriv till exempel "2025 – 2027".
    years: "",
  },
];

export const skillGroups = [
  {
    title: "Apputveckling",
    items: ["React Native", "Expo", "Swift", "SwiftUI", "Kotlin", "Jetpack Compose"],
  },
  {
    title: "Språk och data",
    items: ["TypeScript", "JavaScript", "SQLite", "SQL"],
  },
  {
    title: "Verktyg",
    items: ["Git och GitHub", "Xcode", "Android Studio", "VS Code", "EAS Build", "App Store Connect"],
  },
];

export const languages = ["Svenska", "Spanska", "Engelska"];

export const projects: Project[] = [
  {
    title: "TolkAppen",
    platform: "React Native",
    subtitle: "Mitt LIA-projekt, publicerat i App Store",
    featured: true,
    tags: ["Expo", "TypeScript", "SQLite", "Expo Router"],
    description: [
      "TolkAppen är ett digitalt hjälpmedel för tolkar som arbetar mellan svenska och spanska. Idén kommer från mitt eget arbete som tolk, där jag ofta behövt hitta rätt ord snabbt.",
      "Appen har över 540 termer inom juridik, sjukvård, migration och samhällskunskap. Man söker på båda språken samtidigt och kan lägga till egna ord och kategorier, spara idiom, skriva anteckningar och öva med flashcards.",
      "All data sparas lokalt i en SQLite-databas i telefonen. Appen fungerar utan internet och har ingen inloggning. Gränssnittet finns på svenska, engelska och spanska.",
    ],
    images: [
      "bilder/tolkappen/startsida.jpg",
      "bilder/tolkappen/meny.jpg",
      "bilder/tolkappen/ordbok.jpg",
      "bilder/tolkappen/anteckningar.jpg",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/se/app/tolkappen/id6832765544" },
      { label: "GitHub", url: "https://github.com/Isabella92t/Interpreting-lia" },
    ],
  },
  {
    title: "StudySmart",
    platform: "iOS",
    subtitle: "Studieapp för iPhone",
    tags: ["Swift", "SwiftUI"],
    description: [
      "En studieapp där man samlar flashcards och glosor i mappar och övar på dem i olika lägen.",
    ],
    images: ["bilder/studysmart/start.jpg"],
    links: [{ label: "GitHub", url: "https://github.com/Isabella92t/StudySmart" }],
  },
  {
    title: "ParfymAppen",
    platform: "Android",
    subtitle: "Androidapp för parfymskapare",
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    description: [
      "description: [
  "En app där man samlar sina eteriska oljor i topp-, mellan- och basnoter och skapar egna doftrecept. Appen räknar ut fördelningen mellan noterna i procent, och de sparade parfymerna visas på en egen hylla.",
  "Grupparbete tillsammans med Catharina Jaunviksna. Min gruppmedlem kom med idén och ansvarade för informationssidan. Jag ansvarade för utvecklingen av appens övriga funktioner.",
],",
    ],
    images: ["bilder/parfymappen/framsida.jpg"],
    links: [{ label: "GitHub", url: "https://github.com/Isabella92t/parfym-appen" }],
  },
];
