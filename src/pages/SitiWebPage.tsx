import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

export default function SitiWebPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  const content: ServicePageContent = {
    seo: {
      titleIt:
        "Creazione Siti Web per Aziende e PMI | Arras Industries",
      titleEn:
        "Business Website Design & Development | Arras Industries",
      descriptionIt:
        "Creiamo siti web professionali per aziende e PMI italiane: SEO, lead generation, analytics e performance ottimizzate. Siti che portano contatti reali.",
      descriptionEn:
        "We create professional websites for businesses and SMBs: SEO, lead generation, analytics, and optimized performance. Sites that bring real contacts.",
      keywordsIt: [
        "creazione siti web",
        "sviluppo siti web aziendali",
        "web designer per aziende",
        "agenzia sviluppo web",
        "seo tecnico sito web",
        "sviluppatore web Italia",
        "azienda IT sviluppo web",
      ],
      keywordsEn: [
        "website development company",
        "business website design",
        "web development agency",
        "technical seo website",
        "web developer for businesses",
        "SMB website development",
        "specialized IT web company",
      ],
      path: "/siti-web",
      ogImagePath: "/images/process.jpg",
      jsonLd: [
        {
          "@type": "Service",
          "@id": "https://arrasindustries.com/siti-web#service",
          name: isIt
            ? "Creazione Siti Web Professionali"
            : "Professional Website Development",
          description: isIt
            ? "Creazione siti web professionali per aziende e PMI con SEO, lead generation e performance ottimizzate."
            : "Professional website creation for businesses and SMBs with SEO, lead generation, and optimized performance.",
          provider: {
            "@type": "Organization",
            "@id": "https://arrasindustries.com/#organization",
          },
          serviceType: isIt
            ? "Sviluppo siti web"
            : "Website development",
          areaServed: "IT",
          url: "https://arrasindustries.com/siti-web",
        },
      ],
    },
    theme: {
      accent: "#8A7351",
      accentLight: "#A58E6E",
      accentGlow: "rgba(138,115,81,0.32)",
    },
    hero: {
      icon: <MessageSquare className="h-4 w-4" />,
      eyebrow: isIt ? "Siti web" : "Websites",
      title: isIt
        ? "Siti web che portano contatti, non solo visite"
        : "Websites that bring contacts, not just visits",
      subtitle: isIt
        ? "Progettiamo siti orientati a obiettivi operativi: richieste contatto, prenotazioni, lead qualificati e tracciamento dei risultati."
        : "We build websites with operational goals: contact requests, bookings, qualified leads, and measurable tracking.",
      image: "/images/process.jpg",
    },
    sections: isIt
      ? [
          {
            heading: "Obiettivo del sito",
            body: "Un sito aziendale efficace deve rispondere a una funzione chiara: generare richiesta, supportare vendita, ridurre tempi di contatto o qualificare lead.\n\nPer questo la struttura non parte dal layout ma dal percorso utente: ingresso, pagina servizio, prova sociale, conversione. Ogni sezione viene progettata in base al passaggio successivo.\n\nPrima dello sviluppo definiamo target, intent di ricerca e contenuti necessari. Questo evita pagine piene ma poco utili per utenti e motori di ricerca.",
          },
          {
            heading: "Cosa viene consegnato",
            body: "Consegniamo pagine responsive per mobile e desktop, struttura tecnica SEO di base, meta tag, sitemap e monitoraggio analytics.\n\nSono inclusi moduli contatto, CTA coerenti con il funnel e pagine di servizio ottimizzate per keyword specifiche. Se richiesto, includiamo landing page dedicate per campagne.\n\nLe prestazioni vengono verificate su tempi di caricamento e metriche core prima del rilascio.",
          },
          {
            heading: "Come misuriamo il risultato",
            body: "Le metriche principali sono traffico organico utile, tasso di conversione, volume di richieste e qualita dei lead.\n\nIl confronto viene fatto tra situazione pre-rilascio e post-rilascio, con finestre temporali comparabili. In questo modo la valutazione non e basata su impressioni ma su dati tracciati.",
          },
        ]
      : [
          {
            heading: "Website objective",
            body: "A business website needs a defined function: generate inquiries, support sales, reduce contact time, or qualify leads.\n\nStructure should follow user flow rather than visual preference: entry page, service detail, proof elements, conversion step. Each section is designed around the next action.\n\nBefore development we define audience, search intent, and required content. This avoids pages that are long but not useful for users or search engines.",
          },
          {
            heading: "What is delivered",
            body: "Delivery includes responsive pages, baseline technical SEO structure, metadata, sitemap, and analytics tracking.\n\nIt includes contact forms, CTA alignment with funnel stages, and service pages optimized for specific keyword clusters. Campaign landing pages can be added when needed.\n\nPerformance is checked against loading speed and core metrics before release.",
          },
          {
            heading: "How outcomes are measured",
            body: "Primary metrics are qualified organic traffic, conversion rate, inquiry volume, and lead quality.\n\nComparison is done between pre-launch and post-launch periods with similar windows. This keeps evaluation data-driven rather than subjective.",
          },
        ],
    useCases: {
      title: isIt ? "Per chi e pensato" : "Who it's for",
      items: isIt
        ? [
            {
              title: "Attivita locali",
              description:
                "Ristoranti, negozi, studi: un sito che genera prenotazioni e contatti dalla ricerca locale.",
            },
            {
              title: "Aziende B2B",
              description:
                "Siti con lead generation, case study e landing page per campagne commerciali.",
            },
            {
              title: "Professionisti",
              description:
                "Portfolio online, sistema di prenotazione e presenza professionale che genera fiducia.",
            },
            {
              title: "Startup e nuovi brand",
              description:
                "Lancio digitale completo: branding, sito, SEO e analytics dal giorno zero.",
            },
            {
              title: "E-commerce leggero",
              description:
                "Catalogo prodotti, carrello e pagamenti integrati per vendite online senza complessita.",
            },
            {
              title: "Associazioni e no-profit",
              description:
                "Siti informativi con form di iscrizione, eventi e raccolta fondi integrata.",
            },
          ]
        : [
            {
              title: "Local businesses",
              description:
                "Restaurants, shops, studios: a site that generates bookings and contacts from local search.",
            },
            {
              title: "B2B companies",
              description:
                "Sites with lead generation, case studies, and landing pages for commercial campaigns.",
            },
            {
              title: "Professionals",
              description:
                "Online portfolio, booking system, and professional presence that builds trust.",
            },
            {
              title: "Startups & new brands",
              description:
                "Complete digital launch: branding, website, SEO, and analytics from day zero.",
            },
            {
              title: "Light e-commerce",
              description:
                "Product catalog, cart, and integrated payments for online sales without complexity.",
            },
            {
              title: "Associations & nonprofits",
              description:
                "Informational sites with signup forms, events, and integrated fundraising.",
            },
          ],
    },
    process: {
      title: isIt ? "Come lavoriamo" : "How we work",
      steps: isIt
        ? [
            {
              number: "01",
              title: "Analisi",
              desc: "Obiettivi, pubblico target, competitor e keyword strategy. 1 settimana.",
            },
            {
              number: "02",
              title: "Design & sviluppo",
              desc: "Wireframe, design responsive e sviluppo con SEO integrato. 2-4 settimane.",
            },
            {
              number: "03",
              title: "Lancio",
              desc: "Test, ottimizzazione performance, deploy e configurazione analytics.",
            },
            {
              number: "04",
              title: "Crescita",
              desc: "Monitoraggio, A/B test, ottimizzazione continua basata sui dati.",
            },
          ]
        : [
            {
              number: "01",
              title: "Analysis",
              desc: "Goals, target audience, competitors, and keyword strategy. 1 week.",
            },
            {
              number: "02",
              title: "Design & development",
              desc: "Wireframe, responsive design, and development with integrated SEO. 2-4 weeks.",
            },
            {
              number: "03",
              title: "Launch",
              desc: "Testing, performance optimization, deploy, and analytics setup.",
            },
            {
              number: "04",
              title: "Growth",
              desc: "Monitoring, A/B testing, continuous data-driven optimization.",
            },
          ],
    },
    faq: {
      title: isIt
        ? "Domande frequenti sui siti web"
        : "Website FAQ",
      subtitle: isIt
        ? "Le risposte alle domande piu comuni."
        : "Answers to the most common questions.",
      items: isIt
        ? [
            {
              title: "Quanto costa un sito web professionale?",
              content:
                "Dipende dagli obiettivi e dalla complessita. Forniamo un preventivo dettagliato dopo una call gratuita. Prezzi fissi per ogni fase, nessuna sorpresa.",
            },
            {
              title: "Il sito sara ottimizzato per Google?",
              content:
                "Si. Ogni sito include SEO tecnico e on-page: struttura semantica, meta tag, sitemap, velocita di caricamento e contenuti ottimizzati per le keyword del tuo settore.",
            },
            {
              title: "Posso aggiornare i contenuti da solo?",
              content:
                "Si. Costruiamo siti con sezioni gestibili. Ti forniamo formazione e documentazione per aggiornare testi, immagini e contenuti in autonomia.",
            },
            {
              title: "Quanto tempo serve per il lancio?",
              content:
                "Un sito professionale e pronto in 3-5 settimane: 1 settimana di analisi, 2-4 di design e sviluppo. Tempi piu brevi per siti vetrina semplici.",
            },
            {
              title: "Include anche hosting e dominio?",
              content:
                "Vi guidiamo nella scelta e configurazione. L'hosting e il dominio restano di vostra proprieta, senza vincoli con noi.",
            },
          ]
        : [
            {
              title: "How much does a professional website cost?",
              content:
                "It depends on goals and complexity. We provide a detailed quote after a free call. Fixed pricing per phase, no surprises.",
            },
            {
              title: "Will the site be optimized for Google?",
              content:
                "Yes. Every site includes technical and on-page SEO: semantic structure, meta tags, sitemap, loading speed, and content optimized for your sector's keywords.",
            },
            {
              title: "Can I update content myself?",
              content:
                "Yes. We build sites with manageable sections. We provide training and documentation so you can update text, images, and content independently.",
            },
            {
              title: "How long until launch?",
              content:
                "A professional site is ready in 3-5 weeks: 1 week of analysis, 2-4 weeks of design and development. Shorter timelines for simple showcase sites.",
            },
            {
              title: "Does it include hosting and domain?",
              content:
                "We guide selection and setup. Hosting and domain remain your property, with no lock-in.",
            },
          ],
    },
    cta: {
      title: isIt
        ? "Definiamo il piano del sito"
        : "Define your website plan",
      subtitle: isIt
        ? "Call breve per allineare obiettivi, struttura pagine, contenuti prioritari e tempi di rilascio."
        : "Short call to align goals, page structure, priority content, and release timing.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
