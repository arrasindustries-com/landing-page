import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

const websitesFrames = [
  "/assets/websites/Websites_1.png",
  "/assets/websites/Websites_2.png",
  "/assets/websites/Websites_3.png",
  "/assets/websites/Websites_4.png",
  "/assets/websites/Websites_5.png",
];

export default function SitiWebPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  const content: ServicePageContent = {
    seo: {
      titleIt: "Creazione Siti Web per Aziende e PMI | Arras Industries",
      titleEn: "Business Website Design & Development | Arras Industries",
      descriptionIt:
        "Creiamo siti web professionali per aziende e PMI italiane: SEO, lead generation, analytics e performance ottimizzate. Siti che portano contatti reali.",
      descriptionEn:
        "We create professional websites for businesses and SMBs: SEO, lead generation, analytics, and optimized performance. Sites that bring real contacts.",
      keywordsIt: [
        "realizzazione siti web aziendali",
        "sviluppo siti web aziendali",
        "agenzia web per PMI",
        "seo tecnico per siti web",
        "sviluppatore web Italia",
        "ottimizzazione conversioni sito",
        "lead generation sito aziendale",
      ],
      keywordsEn: [
        "business website development",
        "website design for SMBs",
        "technical SEO for websites",
        "conversion-focused web design",
        "lead generation website",
        "web development agency for businesses",
        "performance optimized websites",
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
          serviceType: isIt ? "Sviluppo siti web" : "Website development",
          areaServed: "IT",
          url: "https://arrasindustries.com/siti-web",
        },
      ],
    },
    theme: {
      accent: "#10B981",
      accentLight: "#34D399",
      accentGlow: "rgba(16,185,129,0.35)",
    },
    hero: {
      icon: <MessageSquare className="h-4 w-4" />,
      eyebrow: isIt ? "Siti web" : "Websites",
      title: isIt
        ? "Un sito che porta richieste, non solo visite."
        : "A website that brings enquiries, not just visits.",
      subtitle: isIt
        ? "Siti veloci, curati e facili da trovare su Google. Pensati per far capire subito cosa fate e far contattare chi è interessato."
        : "Fast, well-crafted websites that are easy to find on Google. Built to explain what you do at a glance and get the right people to reach out.",
      image: websitesFrames[0],
      animationFrames: websitesFrames,
      visual: "web",
    },
    sections: isIt
      ? [
          {
            heading: "A cosa serve il sito",
            body: "Un sito aziendale deve fare un lavoro preciso: portare richieste di preventivo, prenotazioni o contatti qualificati. Se non sappiamo qual è, nessuna grafica lo salverà.\n\nPer questo partiamo dal percorso di chi visita: da dove arriva, cosa cerca, cosa lo convince a scriverti. Ogni pagina accompagna al passo successivo.\n\nPrima di sviluppare definiamo a chi vi rivolgete, cosa cercano su Google e quali contenuti servono davvero. Meno pagine, ma utili.",
          },
          {
            heading: "Cosa ricevi",
            body: "Un sito veloce e curato su telefono e computer, con la struttura tecnica che serve a Google: meta tag, sitemap, dati strutturati e pagine servizio pensate per le ricerche giuste.\n\nModuli di contatto, analytics e tracciamento delle conversioni sono configurati dal primo giorno. Se fate campagne, aggiungiamo landing page dedicate.\n\nPrima della pubblicazione verifichiamo tempi di caricamento e Core Web Vitals.",
          },
          {
            heading: "Come capiamo se funziona",
            body: "Guardiamo pochi numeri: visite da Google sulle ricerche che contano, richieste ricevute e qualità dei contatti.\n\nConfrontiamo il prima e il dopo su periodi simili. Così si capisce cosa ha funzionato e dove intervenire.",
          },
        ]
      : [
          {
            heading: "What the website is for",
            body: "A business website has a specific job: bring in quote requests, bookings or qualified enquiries. If we do not know which one, no design will save it.\n\nThat is why we start from the visitor's path: where they come from, what they are looking for, what convinces them to get in touch. Every page leads to the next step.\n\nBefore building we define who you are talking to, what they search for on Google and which content is really needed. Fewer pages, but useful ones.",
          },
          {
            heading: "What you get",
            body: "A fast, well-crafted site on phone and desktop, with the technical structure Google needs: metadata, sitemap, structured data and service pages built around the right searches.\n\nContact forms, analytics and conversion tracking are set up from day one. If you run campaigns, we add dedicated landing pages.\n\nBefore launch we check loading times and Core Web Vitals.",
          },
          {
            heading: "How we know it works",
            body: "We watch a few numbers: Google traffic on the searches that matter, enquiries received and lead quality.\n\nWe compare before and after over similar periods, so it is clear what worked and where to improve.",
          },
        ],
    useCases: {
      title: isIt ? "Per chi è pensato" : "Who it's for",
      items: isIt
        ? [
            {
              title: "Attività locali",
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
                "Catalogo prodotti, carrello e pagamenti integrati per vendite online senza complessità.",
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
      title: isIt ? "Domande frequenti sui siti web" : "Website FAQ",
      subtitle: isIt
        ? "Quello che ci chiedono più spesso prima di iniziare."
        : "What people ask us most before getting started.",
      items: isIt
        ? [
            {
              title: "Quanto costa un sito web professionale?",
              content:
                "Dipende dagli obiettivi e dalla complessità. Forniamo un preventivo dettagliato dopo una call gratuita. Prezzi fissi per ogni fase, nessuna sorpresa.",
            },
            {
              title: "Il sito sarà ottimizzato per Google?",
              content:
                "Sì. Ogni sito include SEO tecnico e on-page: struttura semantica, meta tag, sitemap, velocità di caricamento e contenuti ottimizzati per le keyword del tuo settore.",
            },
            {
              title: "Posso aggiornare i contenuti da solo?",
              content:
                "Sì. Costruiamo siti con sezioni gestibili. Ti forniamo formazione e documentazione per aggiornare testi, immagini e contenuti in autonomia.",
            },
            {
              title: "Quanto tempo serve per il lancio?",
              content:
                "Un sito professionale è pronto in 3-5 settimane: 1 settimana di analisi, 2-4 di design e sviluppo. Tempi più brevi per siti vetrina semplici.",
            },
            {
              title: "Include anche hosting e dominio?",
              content:
                "Vi guidiamo nella scelta e configurazione. Hosting e dominio restano di vostra proprietà, senza vincoli con noi.",
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
      title: isIt ? "Progettiamo il tuo sito." : "Let's plan your website.",
      subtitle: isIt
        ? "Una call breve per capire a chi vi rivolgete, cosa deve fare il sito e in che tempi."
        : "A short call to understand who you are talking to, what the site needs to do and by when.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
