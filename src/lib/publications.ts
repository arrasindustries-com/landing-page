export type PublicationType =
  | "journal"
  | "conference"
  | "workshop"
  | "chapter"
  | "preprint";

export type Publication = {
  /** Full paper title. */
  title: string;
  /** Authors in order. */
  authors: string[];
  /** Journal, conference or book name. */
  venue: string;
  year: number;
  type: PublicationType;
  /** Link to the paper (IEEE, ACM, DOI, arXiv, ...). Optional: some works have no public page. */
  url?: string;
  /** DOI without the https://doi.org/ prefix, optional. */
  doi?: string;
};

// Render order of the type groups on the Publications tab.
export const publicationTypeOrder: PublicationType[] = [
  "journal",
  "conference",
  "workshop",
  "chapter",
  "preprint",
];

export const publicationTypeLabels: Record<
  PublicationType,
  { it: string; en: string }
> = {
  journal: { it: "Riviste", en: "Journals" },
  conference: { it: "Conferenze", en: "Conferences" },
  workshop: { it: "Workshop", en: "Workshops" },
  chapter: { it: "Capitoli di libro", en: "Book chapters" },
  preprint: { it: "Preprint", en: "Preprints" },
};

// Add new publications here. Only `url` and `doi` are optional.
export const publications: Publication[] = [
  {
    title:
      "Integrating a dlt-based data marketplace with idsa for a unified energy dataspace: Towards silo-free energy data exchange within gaia-x",
    authors: [
      "Silvio Meneguzzo",
      "Alfredo Favenza",
      "Valentina Gatteschi",
      "Claudio Schifanella",
    ],
    venue:
      "2023 5th Conference on Blockchain Research & Applications for Innovative Networks and Services (BRAINS)",
    year: 2023,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/10316796",
  },
  {
    title:
      "Exploring the potential of energy data marketplaces: an approach based on the ocean protocol",
    authors: [
      "Silvio Meneguzzo",
      "Alfredo Favenza",
      "Valentina Gatteschi",
      "Claudio Schifanella",
    ],
    venue:
      "2023 IEEE 47th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2023,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/10196839",
  },
  {
    title:
      "Shaping the future of energy markets: Federated systems and blockchain synergy",
    authors: [
      "Silvio Meneguzzo",
      "Stefano Bergia",
      "Alfredo Favenza",
      "Claudio Schifanella",
      "Alessandro Mozzato",
      "Valentina Gatteschi",
    ],
    venue:
      "2024 IEEE 48th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2024,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/10633411",
  },
  {
    title: "Making Smart Contracts Easier To Understand",
    authors: [
      "Emanuele Antonio Napoli",
      "Lorenzo Gangemi",
      "Silvio Meneguzzo",
      "Noemi Romani",
      "Valentina Gatteschi",
    ],
    venue:
      "2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2025,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/11126772",
  },
  {
    title: "A Game-Theoretic Incentive Model for DAO Governance",
    authors: ["Silvio Meneguzzo", "Rachele Pierri"],
    venue:
      "2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2025,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/11126583",
  },
  {
    title:
      "A Blockchain-Powered Digital Twin Architecture for Consumer-Centric Energy Systems",
    authors: [
      "Silvio Meneguzzo",
      "Nicolò Bertozzi",
      "Marco Sacchet",
      "Lucio Rocco Inglese",
      "Alfredo Favenza",
    ],
    venue:
      "2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2025,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/11126857",
  },
  {
    title:
      "Design and Evaluation of a Sub-8 Second Decentralised Marketplace for Energy Data",
    authors: [
      "Silvio Meneguzzo",
      "Alfredo Favenza",
      "Claudio Schifanella",
      "Alessandro Mozzato",
      "Stefano Leto",
    ],
    venue:
      "2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)",
    year: 2025,
    type: "conference",
    url: "https://ieeexplore.ieee.org/document/11126861",
    doi: "10.1109/COMPSAC65507.2025.00233",
  },
  {
    title:
      "A Privacy-Preserving Blockchain Framework for Sustainable Supplier Evaluation in the Textile Industry",
    authors: [
      "Alberto Butera",
      "Noemi Romani",
      "Silvio Meneguzzo",
      "Valentina Gatteschi",
    ],
    venue:
      "Proceedings of the 2025 International Conference on Information Technology for Social Good",
    year: 2025,
    type: "conference",
    url: "https://dl.acm.org/doi/10.1145/3748699.3749769",
    doi: "10.1145/3748699.3749769",
  },
  {
    title:
      "Operationalising DAO Sustainability KPIs: A Multi-Chain Dashboard for Governance Analytics",
    authors: [
      "Silvio Meneguzzo",
      "Claudio Schifanella",
      "Valentina Gatteschi",
      "Giuseppe Destefanis",
    ],
    venue:
      "Proceedings of the 3rd IEEE/ACM Workshop on Software Engineering Challenges in Financial Firms",
    year: 2026,
    type: "workshop",
    url: "https://arxiv.org/abs/2601.14927",
  },
  {
    title:
      "Enabling citizen sustainable behaviors in urban mobility through blockchain and tokenization",
    authors: [
      "Silvio Meneguzzo",
      "Elvis Gerardin Konjoh Selabi",
      "Alfredo Favenza",
      "Valentina Gatteschi",
      "Claudio Schifanella",
    ],
    venue: "Blockchain technology in the automotive industry (CRC Press)",
    year: 2024,
    type: "chapter",
    url: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003450306-17/enabling-citizen-sustainable-behaviors-urban-mobility-blockchain-tokenization-silvio-meneguzzo-elvis-gerardin-konjoh-selabi-alfredo-favenza-valentina-gatteschi-claudio-schifanella",
    doi: "10.1201/9781003450306-17",
  },
  {
    title:
      "Blockchain for data marketplace: Enhancing security, privacy, and trust",
    authors: [
      "Silvio Meneguzzo",
      "Alfredo Favenza",
      "Valentina Gatteschi",
      "Claudio Schifanella",
    ],
    venue: "Journal Article",
    year: 2021,
    type: "journal",
    url: "https://dltgroup.it/DLTWorkshop/PDF23/DLT_2023_paper_8298.pdf",
  },
  {
    title:
      "Design and Implementation of a Cloud-based Test Executor of Microcontroller Algorithms",
    authors: ["Silvio Meneguzzo"],
    venue: "Journal Article",
    year: 2022,
    type: "journal",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=it&user=cFT2URcAAAAJ&citation_for_view=cFT2URcAAAAJ:9yKSN-GCB0IC",
  },
  {
    title:
      "Blockchain or Not? An Auditable Decision Framework for Organisations",
    authors: [
      "Silvio Meneguzzo",
      "Alfredo Favenza",
      "Stefan Leto",
      "Valentina Gatteschi",
      "Claudio Schifanella",
    ],
    venue: "SSRN",
    year: 2025,
    type: "preprint",
    url: "https://dx.doi.org/10.2139/ssrn.5668520",
    doi: "10.2139/ssrn.5668520",
  },
  {
    title:
      "Evaluating DAO sustainability and longevity through on-chain governance metrics",
    authors: [
      "Silvio Meneguzzo",
      "Claudio Schifanella",
      "Valentina Gatteschi",
      "Giuseppe Destefanis",
    ],
    venue: "arXiv preprint arXiv:2504.11341",
    year: 2025,
    type: "preprint",
    url: "https://arxiv.org/abs/2504.11341",
  },
];
