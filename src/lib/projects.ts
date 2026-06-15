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
];
