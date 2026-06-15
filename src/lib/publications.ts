export type PublicationType = "journal" | "conference" | "workshop" | "preprint";

export type Publication = {
  /** Full paper title. */
  title: string;
  /** Authors in order. */
  authors: string[];
  /** Journal or conference name. */
  venue: string;
  year: number;
  type: PublicationType;
  /** Link to the paper (IEEE, ACM, DOI, arXiv, ...). */
  url: string;
  /** DOI without the https://doi.org/ prefix, optional. */
  doi?: string;
};

// Render order of the type groups on the Publications tab.
export const publicationTypeOrder: PublicationType[] = [
  "journal",
  "conference",
  "workshop",
  "preprint",
];

export const publicationTypeLabels: Record<
  PublicationType,
  { it: string; en: string }
> = {
  journal: { it: "Riviste", en: "Journals" },
  conference: { it: "Conferenze", en: "Conferences" },
  workshop: { it: "Workshop", en: "Workshops" },
  preprint: { it: "Preprint", en: "Preprints" },
};

// Add new publications here. Only `doi` is optional.
export const publications: Publication[] = [
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
];
