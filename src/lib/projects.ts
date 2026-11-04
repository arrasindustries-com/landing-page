export type Project = {
  /** Display name of the project. */
  name: string;
  /** Logo or screenshot path (e.g. "/images/projects/foo.png"). Optional: a name-initial fallback is shown when missing. */
  image?: string;
  /** Short description, bilingual. */
  description: { it: string; en: string };
  /** External page opened when the card is clicked (devpost, site, etc.). */
  url: string;
  /** GitHub repository, optional. */
  repo?: string;
  /** Live demo / app URL, optional. */
  demo?: string;
};

// Add new projects here. Only `name`, `description`, and `url` are required.
export const projects: Project[] = [
  {
    name: "PQ Liquid Wallet",
    // Drop a logo at public/images/projects/pq-liquid-wallet.png and uncomment:
    image: "/images/projects/pq-liquid-wallet.jpg",
    description: {
      it: "Wallet post-quantum per Liquid: chiavi e firme quantum resistant, pensato per custodia di asset a lungo termine.",
      en: "Post-quantum wallet for Liquid: quantum-resistant keys and signatures, designed for long-term asset custody.",
    },
    url: "https://devpost.com/software/pq-liquid-wallet",
    repo: "https://github.com/smeneguz/pq-liquid-wallet",
  },
  {
    name: "Knaut",
    image: "/images/projects/knaut-icon.png",
    description: {
      it: "Controllo e notarizzazione interoperabili per le Electronic Bills of Lading (eBL): trasferimento sicuro dei documenti tra piattaforme e verifica anti-frode su un layer di settlement neutrale (IOTA Move).",
      en: "Interoperable control and notarization for electronic Bills of Lading (eBL): secure cross-platform document transfer and anti-fraud verification on a neutral settlement layer (IOTA Move).",
    },
    url: "https://knaut.org/",
    repo: "https://github.com/smeneguz/portus",
    demo: "https://portus-five.vercel.app/",
  },
  {
    name: "DAO Portal",
    image: "/images/projects/dao-portal.png",
    description: {
      it: "Piattaforma di analytics per le DAO: traccia e visualizza i KPI di governance on-chain, con dashboard per singola DAO, confronti multi-DAO e analisi della decentralizzazione.",
      en: "Analytics platform for DAOs: tracks and visualizes on-chain governance KPIs, with single-DAO dashboards, multi-DAO comparisons, and decentralization analysis.",
    },
    url: "http://130.192.84.45:8080/",
    repo: "https://github.com/smeneguz/dao-portal",
  },
];

export type Website = {
  /** Client or project name. */
  name: string;
  /** Screenshot of the live site (16:10 works best). */
  image: string;
  /** What the site is for, bilingual. */
  description: { it: string; en: string };
  /** Live URL. */
  url: string;
};

// Showcase websites ("siti vetrina") built by Arras Industries.
export const websites: Website[] = [
  {
    name: "Molinazzo",
    image: "/images/projects/molinazzo.jpg",
    description: {
      it: "Sito per il progetto di recupero di un vecchio mulino nella Valle del Curone, vicino a Milano. Galleria fotografica, visione del progetto, FAQ e donazioni via PayPal ed Ethereum, in italiano e inglese.",
      en: "Website for the restoration project of an old water mill in the Valle del Curone, near Milan. Photo gallery, project vision, FAQ and donations via PayPal and Ethereum, in Italian and English.",
    },
    url: "https://molinazzo.org/",
  },
];
