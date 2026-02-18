import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
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
          role: "Software Architect",
          image: "/images/silvio.jpeg",
          imagePosition: "center 22%",
          description:
            "Ha un PhD in Computer Science nel Programma Nazionale su Blockchain e DLT, una laurea magistrale in ICT - Ingegneria delle Telecomunicazioni e una laurea triennale in Informatica. Si occupa di strategia prodotto, architettura tecnica e priorità di sviluppo.",
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
            "Laureato in Ingegneria Informatica e specializzato con laurea magistrale in Cybersecurity. Contribuisce all'implementazione di applicazioni web sia lato back end sia lato front end, alle integrazioni tecniche tra moduli compresa l'infrastuttura blockchain per migrazione web3 e alla manutenzione evolutiva del codice.",
        },
      ]
    : [
        {
          name: "Silvio Meneguzzo",
          role: "Software Architect",
          image: "/images/silvio.jpeg",
          imagePosition: "center 22%",
          description:
            "He holds a PhD in Computer Science in the Italian National Program on Blockchain and DLT, an MSc in ICT - Telecommunications Engineering, and a BSc in Computer Science. He works on product strategy, technical architecture, and development priorities.",
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
            "He holds a BSc in Computer Engineering and an MSc in Cybersecurity. He contributes to web application feature implementation back and front end side, technical integrations between modules, including blockchain infrastructure for web3 migration, and continuous codebase maintenance.",
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
      "chi siamo arras industries",
      "silvio meneguzzo",
      "phd computer science blockchain dlt",
      "founder arras industries",
      "team sviluppo software",
      "azienda IT specializzata",
      "competenze cybersecurity",
      "sviluppatori web e gestionali",
    ],
    keywordsEn: [
      "about arras industries",
      "silvio meneguzzo",
      "phd computer science blockchain dlt",
      "arras industries founder",
      "software development team",
      "specialized IT company team",
      "cybersecurity expertise",
      "web and management software developers",
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
            jobTitle: "Founder & Software Architect",
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
            name: "Alessandro",
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

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.16em] text-white/60">
            {isIt ? "Chi siamo" : "About us"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {isIt
              ? "Le persone dietro Arras Industries"
              : "The people behind Arras Industries"}
          </h1>
          <p className="mt-4 text-white/70">
            {isIt
              ? "Arras Industries progetta e sviluppa software con un approccio operativo: gestionali, siti web e integrazioni web3 quando richieste dal contesto."
              : "Arras Industries designs and develops software with an operational approach: management systems, websites, and web3 integrations when the context requires them."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
                style={{ objectPosition: member.imagePosition }}
                loading="lazy"
              />
              <div className="space-y-3 p-5">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {member.name}
                  </h2>
                  <p className="text-sm text-[#93C5FD]">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/75">
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
