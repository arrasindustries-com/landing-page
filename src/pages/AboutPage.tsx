import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Footer } from "@/components/Footer";
import { Eyebrow, Index, PageHero, reveal } from "@/components/Ui";
import { publications } from "@/lib/publications";
import { projects } from "@/lib/projects";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  imagePosition: string;
  description: string;
};

export default function AboutPage() {
  const { language } = useLanguage();
  const isIt = language === "it";
  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");

  const team: TeamMember[] = isIt
    ? [
        {
          name: "Silvio Meneguzzo",
          role: "Software Architect · Tech Lead",
          image: "/images/silvio.jpeg",
          imagePosition: "center 22%",
          description:
            "Ha un PhD in Computer Science nel Programma Nazionale su Blockchain e DLT, una laurea magistrale in ICT - Ingegneria delle Telecomunicazioni e una laurea triennale in Informatica. Guida la direzione tecnica come Tech Lead, con responsabilità su strategia prodotto, architettura tecnica e priorità di sviluppo.",
        },
        {
          name: "Alessandro Mozzato",
          role: "Cybersecurity Engineer",
          image: "/images/AlessandroFoto.png",
          imagePosition: "center 18%",
          description:
            "Laureato in Ingegneria Informatica e specializzato con laurea magistrale in Cybersecurity. Si occupa di sicurezza applicativa e infrastrutturale, revisione delle superfici di rischio e definizione delle misure di protezione nei progetti software.",
        },
        {
          name: "Stefano Leto",
          role: "Software Engineer",
          image: "/images/ste.jpeg",
          imagePosition: "center 18%",
          description:
            "Laureato in Ingegneria Informatica e specializzato con laurea magistrale in Cybersecurity. Contribuisce allo sviluppo di applicazioni web lato back end e front end, alle integrazioni tra moduli (inclusa l'infrastruttura blockchain per progetti web3) e alla manutenzione evolutiva del codice.",
        },
      ]
    : [
        {
          name: "Silvio Meneguzzo",
          role: "Software Architect · Tech Lead",
          image: "/images/silvio.jpeg",
          imagePosition: "center 22%",
          description:
            "He holds a PhD in Computer Science in the Italian National Program on Blockchain and DLT, an MSc in ICT - Telecommunications Engineering, and a BSc in Computer Science. He leads technical direction as Tech Lead, with responsibility for product strategy, technical architecture, and development priorities.",
        },
        {
          name: "Alessandro Mozzato",
          role: "Cybersecurity Engineer",
          image: "/images/AlessandroFoto.png",
          imagePosition: "center 18%",
          description:
            "He holds a BSc in Computer Engineering and an MSc in Cybersecurity. He works on application and infrastructure security, risk-surface review, and definition of protection measures within software projects.",
        },
        {
          name: "Stefano Leto",
          role: "Software Engineer",
          image: "/images/ste.jpeg",
          imagePosition: "center 18%",
          description:
            "He holds a BSc in Computer Engineering and an MSc in Cybersecurity. He contributes to back-end and front-end web application development, cross-module integrations (including blockchain infrastructure for web3 projects), and ongoing codebase maintenance.",
        },
      ];

  usePageSeo({
    titleIt: "Chi siamo | Arras Industries",
    titleEn: "About us | Arras Industries",
    descriptionIt:
      "Conosci il team Arras Industries: competenze in sviluppo software gestionale, siti web, cybersecurity e integrazioni web3.",
    descriptionEn:
      "Meet the Arras Industries team: expertise in management software, website development, cybersecurity, and web3 integrations.",
    keywordsIt: [
      "team arras industries",
      "silvio meneguzzo",
      "silvio meneguzzo blockchain dlt",
      "società sviluppo software Italia",
      "software architect italy",
      "team cybersecurity e sviluppo web",
      "sviluppo gestionali e siti web",
    ],
    keywordsEn: [
      "arras industries team",
      "silvio meneguzzo",
      "silvio meneguzzo blockchain dlt",
      "software development company italy",
      "software architect italy",
      "cybersecurity and web development team",
      "custom software experts italy",
    ],
    path: "/about",
    ogImagePath: "/images/silvio.jpeg",
    jsonLd: [
      {
        "@type": "AboutPage",
        "@id": `${siteOrigin}/about#about`,
        url: `${siteOrigin}/about`,
        name: isIt ? "Chi siamo" : "About us",
        inLanguage: isIt ? "it-IT" : "en-US",
      },
      {
        "@type": "Organization",
        "@id": `${siteOrigin}/#organization`,
        name: "Arras Industries",
        url: `${siteOrigin}/`,
        founder: {
          "@type": "Person",
          name: "Silvio Meneguzzo",
        },
        member: [
          {
            "@type": "Person",
            name: "Silvio Meneguzzo",
            jobTitle: "Founder, Software Architect, Tech Lead & Senior Developer",
            alumniOf: [
              {
                "@type": "EducationalOrganization",
                name: "National Program in Blockchain and DLT",
              },
              {
                "@type": "EducationalOrganization",
                name: "MSc in ICT - Telecommunications Engineering",
              },
              {
                "@type": "EducationalOrganization",
                name: "BSc in Computer Science",
              },
            ],
            knowsAbout: [
              "Software architecture",
              "Blockchain",
              "DLT",
              "Product strategy",
            ],
          },
          {
            "@type": "Person",
            name: "Alessandro Mozzato",
            jobTitle: "Cybersecurity Engineer",
            knowsAbout: [
              "Application security",
              "Infrastructure security",
              "Cybersecurity",
            ],
          },
          {
            "@type": "Person",
            name: "Stefano Leto",
            jobTitle: "Software Engineer",
            knowsAbout: [
              "Software development",
              "Technical integration",
              "Codebase maintenance",
            ],
          },
        ],
      },
    ],
  });

  const principles = isIt
    ? [
        {
          title: "Prima capire, poi scrivere codice",
          desc: "Passiamo il tempo necessario a capire come lavorate. Un software giusto per il problema sbagliato non serve a nessuno.",
        },
        {
          title: "Scelte tecniche spiegate",
          desc: "Ogni scelta di architettura o tecnologia ha un motivo, e ve lo spieghiamo in parole semplici.",
        },
        {
          title: "Software che resta vostro",
          desc: "Codice documentato, accessi vostri, nessun vincolo artificiale. Se un giorno volete cambiare fornitore, potete farlo.",
        },
      ]
    : [
        {
          title: "Understand first, code second",
          desc: "We take the time to understand how you work. The right software for the wrong problem helps nobody.",
        },
        {
          title: "Technical choices, explained",
          desc: "Every architecture or technology decision has a reason, and we explain it in plain words.",
        },
        {
          title: "Software that stays yours",
          desc: "Documented code, your own credentials, no artificial lock-in. If you ever want to switch provider, you can.",
        },
      ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 md:px-6 md:pt-20">
        <PageHero
          eyebrow={isIt ? "Chi siamo" : "About us"}
          title={
            isIt ? (
              <>
                Tre ingegneri, <span className="hl">un solo standard</span> di qualità.
              </>
            ) : (
              <>
                Three engineers, <span className="hl">one standard</span> of quality.
              </>
            )
          }
          description={
            isIt
              ? "Arras Industries unisce architettura software, blockchain e cybersecurity. Lavoriamo con aziende che vogliono software fatto bene, spiegato bene e mantenuto nel tempo."
              : "Arras Industries brings together software architecture, blockchain and cybersecurity. We work with companies that want software that is well built, well explained and maintained over time."
          }
        />

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col border border-[var(--border)] bg-[var(--surface-strong)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                  style={{ objectPosition: member.imagePosition }}
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 bg-[var(--surface-strong)] px-2 py-1 font-mono text-[11px] tracking-[0.1em] text-[var(--text)]">
                  0{index + 1}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7">
                <h2 className="text-2xl">{member.name}</h2>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)]">
                  {member.role}
                </p>
                <p className="mt-5 border-t border-[var(--border)] pt-5 text-sm leading-6 text-[var(--text-muted)]">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{isIt ? "Come lavoriamo" : "How we work"}</Eyebrow>
            <h2 className="mt-5 text-[2.25rem] leading-[1.02] md:text-[3.2rem]">
              {isIt ? (
                <>
                  Pochi principi, <span className="hl">rispettati sempre.</span>
                </>
              ) : (
                <>
                  A few principles, <span className="hl">always kept.</span>
                </>
              )}
            </h2>
            <dl className="mt-10 grid grid-cols-2 border-t border-[var(--border)]">
              <div className="py-6 pr-4">
                <dd className="font-display text-4xl font-semibold tracking-[-0.04em]">{publications.length}</dd>
                <dt className="mt-1 text-sm text-[var(--text-muted)]">
                  {isIt ? "pubblicazioni scientifiche" : "scientific publications"}
                </dt>
              </div>
              <div className="border-l border-[var(--border)] py-6 pl-6">
                <dd className="font-display text-4xl font-semibold tracking-[-0.04em]">{projects.length}</dd>
                <dt className="mt-1 text-sm text-[var(--text-muted)]">
                  {isIt ? "progetti open source" : "open-source projects"}
                </dt>
              </div>
            </dl>
          </motion.div>

          <div className="border-t border-[var(--border)]">
            {principles.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                className="grid gap-5 border-b border-[var(--border)] py-9 md:grid-cols-[64px_1fr] md:py-11"
              >
                <Index n={index + 1} className="mt-1" />
                <div>
                  <h3 className="text-2xl md:text-[1.75rem]">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-[15px] leading-7 text-[var(--text-muted)]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
