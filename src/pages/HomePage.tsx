import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/Button/Button";
import { Footer } from "@/components/Footer";
import { InputLike } from "@/components/Input/InputLike";
import { SupportSection } from "@/components/SupportUs";
import { Eyebrow, Index, Marquee, PageHero, SectionHeading, reveal } from "@/components/Ui";
import { StopMotion } from "@/components/Visual/StopMotion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { projects } from "@/lib/projects";
import { publications } from "@/lib/publications";
import { openWhatsApp, scrollToId } from "@/lib/utils";
import type { ContactRequest } from "@/types/types";

const HOME_FRAMES = [
  "/assets/home/Home_1.png",
  "/assets/home/Home_2.png",
  "/assets/home/Home_3.png",
  "/assets/home/Home_4.png",
  "/assets/home/Home_5.png",
  "/assets/home/Home_6.png",
];

export default function HomePage() {
  const { t, language } = useLanguage();
  const [contactForm, setContactForm] = useState<ContactRequest>({
    name: "",
    activity: "",
    contact: "",
    objective: "",
  });

  const setContactField = (
    field: "name" | "activity" | "contact" | "objective",
    value: string,
  ) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");
  const canonicalUrl = `${siteOrigin}/`;
  const isItalian = language === "it";

  usePageSeo({
    titleIt: "Arras Industries | Software gestionali, siti web e web3",
    titleEn: "Arras Industries | Management Software, Websites, Web3",
    descriptionIt:
      "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari, KPI tracciati e risultati misurabili.",
    descriptionEn:
      "Arras Industries builds management software, high-performance websites, and web3 solutions for SMBs with clear goals, tracked KPIs, and measurable outcomes.",
    keywordsIt: [
      "software gestionale su misura",
      "sviluppo software per PMI",
      "sviluppo siti web aziendali",
      "seo tecnico siti web",
      "automazione processi aziendali",
      "integrazioni blockchain e web3",
      "sviluppo applicazioni web business",
      "consulenza software Italia",
    ],
    keywordsEn: [
      "custom management software",
      "SMB software development",
      "business website development",
      "technical SEO services",
      "business process automation software",
      "blockchain and web3 integration",
      "custom web application development",
      "IT consulting for SMBs",
    ],
    path: "/",
    jsonLd: [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: "Arras Industries",
        url: canonicalUrl,
        logo: `${siteOrigin}/favicon-512.png`,
        email: "arras.industries.info@gmail.com",
        telephone: "+39 334 116 8370",
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: "Arras Industries",
        inLanguage: isItalian ? "it-IT" : "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#service`,
        name: "Arras Industries",
        url: canonicalUrl,
        serviceType: isItalian
          ? [
              "Sviluppo software gestionale",
              "Sviluppo siti web",
              "Integrazioni web3",
            ]
          : [
              "Management software development",
              "Website development",
              "Web3 integrations",
            ],
        areaServed: "IT",
      },
    ],
  });

  const teamPhotos = [
    { src: "/images/silvio.jpeg", name: "Silvio Meneguzzo", pos: "center 22%" },
    { src: "/images/AlessandroFoto.png", name: "Alessandro Mozzato", pos: "center 18%" },
    { src: "/images/ste.jpeg", name: "Stefano Leto", pos: "center 18%" },
  ];

  const hero = isItalian
    ? {
        eyebrow: "Studio di ingegneria software · Italia",
        titleA: "Progettiamo e sviluppiamo il software che ",
        titleAccent: "fa lavorare meglio",
        titleB: " la tua azienda.",
        body: "Gestionali su misura, siti web e integrazioni blockchain. Siamo un team di ingegneri: parli direttamente con chi scrive il codice, dall'analisi fino al rilascio.",
        primary: "Prenota una call gratuita",
        secondary: "Guarda i progetti",
      }
    : {
        eyebrow: "Software engineering studio · Italy",
        titleA: "We design and build the software that ",
        titleAccent: "makes your business",
        titleB: " run better.",
        body: "Custom management software, websites and blockchain integrations. We are a team of engineers: you talk directly to the people writing the code, from analysis to release.",
        primary: "Book a free call",
        secondary: "See our work",
      };

  const credentials = isItalian
    ? [
        { value: "PhD", label: "in Blockchain e DLT" },
        { value: "2 MSc", label: "in Cybersecurity" },
        { value: String(publications.length), label: "pubblicazioni scientifiche" },
        { value: String(projects.length), label: "progetti open source" },
      ]
    : [
        { value: "PhD", label: "in Blockchain & DLT" },
        { value: "2 MSc", label: "in Cybersecurity" },
        { value: String(publications.length), label: "scientific publications" },
        { value: String(projects.length), label: "open-source projects" },
      ];

  const capabilities = isItalian
    ? [
        "Gestionali su misura",
        "Siti web e SEO tecnica",
        "Integrazioni API",
        "Dashboard e reportistica",
        "Smart contract",
        "Notarizzazione on-chain",
        "Sicurezza applicativa",
        "Automazione dei processi",
      ]
    : [
        "Custom management software",
        "Websites & technical SEO",
        "API integrations",
        "Dashboards & reporting",
        "Smart contracts",
        "On-chain notarization",
        "Application security",
        "Process automation",
      ];

  const serviceMeta = [
    { href: "/gestionali", image: "/assets/gestionali/Gestionali_1.png", pos: "70% center" },
    { href: "/siti-web", image: "/assets/websites/Websites_1.png", pos: "60% center" },
    { href: "/web3", image: "/assets/blockchain/Blockchain_1.png", pos: "65% center" },
  ];
  const serviceCards = t.services.services.map((service, index) => ({
    ...serviceMeta[index],
    title: service.title,
    subtitle: service.subtitle,
    points: service.points.slice(0, 3),
    number: `0${index + 1}`,
  }));

  const reasons = isItalian
    ? [
        {
          title: "Nessun intermediario",
          desc: "Niente account manager o passaggi di consegne. Chi ascolta il problema è chi poi progetta e scrive la soluzione.",
        },
        {
          title: "Basi solide",
          desc: "Il nostro tech lead ha un dottorato su blockchain e DLT. Pubblichiamo su riviste e conferenze, e portiamo quel rigore nei progetti dei clienti.",
        },
        {
          title: "Sicurezza fin dall'inizio",
          desc: "Due di noi sono specializzati in cybersecurity. La sicurezza è parte del progetto dal primo giorno, non una verifica fatta alla fine.",
        },
      ]
    : [
        {
          title: "No middlemen",
          desc: "No account managers, no hand-offs. The people who listen to the problem are the ones who design and write the solution.",
        },
        {
          title: "Solid foundations",
          desc: "Our tech lead holds a PhD in blockchain and DLT. We publish in journals and conferences, and bring that rigour to client work.",
        },
        {
          title: "Security from day one",
          desc: "Two of us specialise in cybersecurity. Security is part of the project from the first day, not a check done at the end.",
        },
      ];

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative mx-auto max-w-7xl px-4 pt-14 md:px-6 md:pt-24">
        <PageHero
          size="xl"
          eyebrow={hero.eyebrow}
          title={
            <>
              {hero.titleA}
              <span className="hl">{hero.titleAccent}</span>
              {hero.titleB}
            </>
          }
          description={hero.body}
          actions={
            <>
              <Button size="lg" onClick={() => scrollToId("contatto")}>
                {hero.primary} <ArrowRight className="h-4 w-4" />
              </Button>
              <Link to="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
                {hero.secondary}
              </Link>
            </>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 md:mt-20"
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)] sm:aspect-[16/9] lg:aspect-[21/9]">
            <StopMotion
              frames={HOME_FRAMES}
              alt={isItalian ? "Rappresentazione di sistemi software collegati" : "Illustration of connected software systems"}
              className="h-full w-full"
              float={false}
              objectPosition="center 40%"
            />
          </div>
        </motion.div>

        <motion.dl
          {...reveal}
          className="mt-14 grid grid-cols-2 border-t border-[var(--border)] md:grid-cols-4"
        >
          {credentials.map((item, index) => (
            <div
              key={item.label}
              className={[
                "py-7 pr-4",
                index % 2 === 1 ? "pl-6 border-l border-[var(--border)]" : "",
                index >= 2 ? "border-t border-[var(--border)] md:border-t-0" : "",
                index === 2 ? "md:pl-6 md:border-l" : "",
              ].join(" ")}
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                {item.value}
              </dd>
              <dd className="mt-2 text-sm text-[var(--text-muted)]">{item.label}</dd>
            </div>
          ))}
        </motion.dl>
      </section>

      {/* ───────────────────────── Capabilities marquee ───────────────────────── */}
      <div className="mt-6 border-y border-[var(--border)] bg-[var(--surface)] py-5">
        <Marquee>
          {capabilities.map((item) => (
            <span
              key={item}
              className="mx-7 inline-flex items-center gap-7 font-display text-lg font-medium tracking-[-0.02em] text-[var(--text-muted)] md:text-xl"
            >
              {item}
              <span className="h-1.5 w-1.5 rotate-45 bg-[var(--accent-bright)]" />
            </span>
          ))}
        </Marquee>
      </div>

      {/* ───────────────────────── Services ───────────────────────── */}
      <section id="servizi" className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <motion.div {...reveal}>
          <SectionHeading
            eyebrow={isItalian ? "01 — Servizi" : "01 — Services"}
            title={
              isItalian ? (
                <>
                  Tre aree, <span className="hl">un solo modo</span> di lavorare.
                </>
              ) : (
                <>
                  Three areas, <span className="hl">one way</span> of working.
                </>
              )
            }
            aside={
              isItalian
                ? "Ogni progetto parte da come lavorate oggi. La tecnologia la scegliamo dopo, in base a quello che serve davvero."
                : "Every project starts from how you work today. We pick the technology afterwards, based on what is actually needed."
            }
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {serviceCards.map((service, index) => (
            <motion.div
              key={service.href}
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
            >
              <Link
                to={service.href}
                className="group flex h-full flex-col border border-[var(--border)] bg-[var(--surface-strong)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-[var(--border)]">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    style={{ objectPosition: service.pos }}
                  />
                  <span className="absolute left-4 top-4 bg-[var(--surface-strong)] px-2 py-1 font-mono text-[11px] tracking-[0.1em] text-[var(--text)]">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <h3 className="text-[1.6rem] leading-tight">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-muted)]">
                    {service.subtitle}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]">
                        <span className="mt-[9px] h-px w-3 shrink-0 bg-[var(--accent-bright)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-[var(--text)]">
                    {isItalian ? "Scopri il servizio" : "Explore the service"}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Why us ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-6 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{isItalian ? "02 — Perché noi" : "02 — Why us"}</Eyebrow>
            <h2 className="mt-5 text-[2.25rem] leading-[1.02] md:text-[3.4rem]">
              {isItalian ? (
                <>
                  Parli con <span className="hl">chi scrive</span> il codice.
                </>
              ) : (
                <>
                  You talk to <span className="hl">the people</span> writing the code.
                </>
              )}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--text-muted)]">
              {isItalian
                ? "Siamo un team piccolo di ingegneri informatici. Seguiamo pochi progetti alla volta, e li seguiamo per intero."
                : "We are a small team of software engineers. We take on a few projects at a time, and see each one through."}
            </p>
            <div className="mt-8 flex items-center gap-5">
              <div className="flex -space-x-3">
                {teamPhotos.map((person) => (
                  <img
                    key={person.name}
                    src={person.src}
                    alt={person.name}
                    title={person.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full border-2 border-[var(--page-bg)] object-cover"
                    style={{ objectPosition: person.pos }}
                  />
                ))}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text)]"
              >
                <span className="border-b border-[var(--border-strong)] pb-0.5 transition-colors group-hover:border-[var(--accent-bright)]">
                  {isItalian ? "Conosci il team" : "Meet the team"}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          <div className="border-t border-[var(--border)]">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                {...reveal}
                className="grid gap-5 border-b border-[var(--border)] py-9 md:grid-cols-[64px_1fr] md:py-11"
              >
                <Index n={index + 1} className="mt-1" />
                <div>
                  <h3 className="text-2xl md:text-[1.75rem]">{reason.title}</h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-7 text-[var(--text-muted)]">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Method (dark) ───────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--ink)] py-24 text-[var(--ink-text)] md:py-32">
        <div className="bg-grid-ink pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <motion.div {...reveal}>
            <SectionHeading
              onInk
              eyebrow={isItalian ? "03 — Metodo" : "03 — Method"}
              title={
                isItalian ? (
                  <>
                    Si parte piccoli, <span className="hl-ink">si rilascia presto.</span>
                  </>
                ) : (
                  <>
                    Start small, <span className="hl-ink">ship early.</span>
                  </>
                )
              }
              aside={
                isItalian
                  ? "Niente progetti da un anno con consegna finale a sorpresa. Il team usa il software dopo poche settimane, e lo miglioriamo insieme."
                  : "No year-long projects with a surprise at the end. Your team uses the software within weeks, and we improve it together."
              }
            />
          </motion.div>

          <div className="mt-16 grid gap-px overflow-hidden border border-[var(--ink-border)] bg-[var(--ink-border)] md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.08 }}
                className="flex flex-col bg-[var(--ink)] p-7 md:p-8"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                  <span className="text-[var(--accent-bright)]">{step.number}</span>
                  <span className="text-[var(--ink-muted)]">{step.duration}</span>
                </div>
                <h3 className="mt-12 text-2xl text-[var(--ink-text)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Work ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <motion.div {...reveal}>
          <SectionHeading
            eyebrow={isItalian ? "04 — Progetti" : "04 — Work"}
            title={
              isItalian ? (
                <>
                  Alcuni lavori <span className="hl">recenti.</span>
                </>
              ) : (
                <>
                  Some <span className="hl">recent</span> work.
                </>
              )
            }
            action={
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 font-medium text-[var(--text)]"
              >
                <span className="border-b border-[var(--border-strong)] pb-0.5 transition-colors group-hover:border-[var(--accent-bright)]">
                  {isItalian ? "Portfolio e pubblicazioni" : "Portfolio and publications"}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            }
          />
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              {...reveal}
              transition={{ ...reveal.transition, delay: index * 0.08 }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-[var(--border)] bg-white transition-colors duration-300 group-hover:border-[var(--border-strong)]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : null}
                <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center bg-[var(--surface-strong)] text-[var(--text)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{project.name}</h3>
                <span className="font-mono text-[11px] text-[var(--text-soft)]">0{index + 1}</span>
              </div>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--text-muted)]">
                {isItalian ? project.description.it : project.description.en}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Contact ───────────────────────── */}
      <section id="contatto" className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:px-6 md:py-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div {...reveal} className="flex flex-col">
            <Eyebrow>{isItalian ? "05 — Contatti" : "05 — Contact"}</Eyebrow>
            <h2 className="mt-5 text-[2.25rem] leading-[1.02] md:text-[3.4rem]">
              {t.contact.title}
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-7 text-[var(--text-muted)]">
              {t.contact.subtitle}
            </p>

            <div className="mt-10 border-t border-[var(--border)]">
              <a
                href={`mailto:${t.footer.email}`}
                className="group flex items-center justify-between gap-4 border-b border-[var(--border)] py-5"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-[15px] text-[var(--text)]">
                    {t.footer.email}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-soft)] transition-colors group-hover:text-[var(--accent)]" />
              </a>
              <a
                href={`tel:${t.footer.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between gap-4 border-b border-[var(--border)] py-5"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    {isItalian ? "Telefono" : "Phone"}
                  </span>
                  <span className="mt-1 block text-[15px] text-[var(--text)]">{t.footer.phone}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-soft)] transition-colors group-hover:text-[var(--accent)]" />
              </a>
              <button
                type="button"
                onClick={() => openWhatsApp(undefined, language)}
                className="group flex w-full items-center justify-between gap-4 border-b border-[var(--border)] py-5 text-left"
              >
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    WhatsApp
                  </span>
                  <span className="mt-1 block text-[15px] text-[var(--text)]">
                    {isItalian ? "Scrivici direttamente" : "Message us directly"}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-soft)] transition-colors group-hover:text-[var(--accent)]" />
              </button>
            </div>

            <p className="mt-6 inline-flex items-center gap-2.5 text-sm text-[var(--text-muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {t.contact.responseTime}
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            className="border border-[var(--border)] bg-[var(--surface-strong)] p-6 shadow-[var(--shadow)] md:p-9"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <InputLike
                label={t.contact.formLabels.name}
                placeholder={t.contact.formPlaceholders.name}
                value={contactForm.name}
                onChange={(value) => setContactField("name", value)}
              />
              <InputLike
                label={t.contact.formLabels.contact}
                placeholder={t.contact.formPlaceholders.contact}
                value={contactForm.contact}
                onChange={(value) => setContactField("contact", value)}
              />
              <div className="md:col-span-2">
                <InputLike
                  label={t.contact.formLabels.activity}
                  placeholder={t.contact.formPlaceholders.activity}
                  value={contactForm.activity}
                  onChange={(value) => setContactField("activity", value)}
                />
              </div>
              <div className="md:col-span-2">
                <InputLike
                  label={t.contact.formLabels.objective}
                  placeholder={t.contact.formPlaceholders.objective}
                  value={contactForm.objective}
                  onChange={(value) => setContactField("objective", value)}
                  tall
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xs text-xs leading-5 text-[var(--text-soft)]">
                {isItalian
                  ? "Il messaggio si apre su WhatsApp, già compilato. Lo invii tu quando vuoi."
                  : "Your message opens in WhatsApp, already filled in. You send it when ready."}
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => openWhatsApp(contactForm, language)}
              >
                {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <SupportSection />

      <Footer />
    </>
  );
}
