import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card/Card";
import { Footer } from "@/components/Footer";

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

  const capabilities = isIt
    ? [
        "Architettura software e direzione tecnica",
        "Cybersecurity applicativa e infrastrutturale",
        "Sviluppo web, integrazioni e manutenzione evolutiva",
      ]
    : [
        "Software architecture and technical direction",
        "Application and infrastructure cybersecurity",
        "Web development, integrations, and long-term maintenance",
      ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {isIt ? "Chi siamo" : "About us"}
            </p>
            <h1 className="mt-4 text-[2rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
              {isIt
                ? "Un team tecnico con impostazione operativa."
                : "A technical team with an operational mindset."}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-muted)]">
              {isIt
                ? "Arras Industries progetta e sviluppa software per aziende che vogliono processi più chiari, strumenti più affidabili e scelte tecniche motivate dal contesto. Lavoriamo su gestionali, siti web e integrazioni web3 quando servono davvero."
                : "Arras Industries designs and builds software for companies that want clearer processes, more reliable tools, and technical decisions grounded in context. We work on management software, websites, and web3 integrations when they genuinely help."}
            </p>
          </div>

          <Card className="bg-[var(--surface-strong)]">
            <CardHeader>
              <CardTitle className="text-3xl">
                {isIt ? "Competenze chiave" : "Core capabilities"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {capabilities.map((item) => (
                  <div
                    key={item}
                    className="border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm leading-6 text-[var(--text-muted)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-full object-cover"
                style={{ objectPosition: member.imagePosition }}
                loading="lazy"
              />
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--text)]">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm text-[var(--text-soft)]">{member.role}</p>
                </div>
                <p className="text-sm leading-7 text-[var(--text-muted)]">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
