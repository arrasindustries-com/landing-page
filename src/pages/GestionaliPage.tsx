import { Laptop } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

export default function GestionaliPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  const content: ServicePageContent = {
    seo: {
      titleIt:
        "Software Gestionale su Misura per PMI | Arras Industries",
      titleEn:
        "Custom Management Software for SMBs | Arras Industries",
      descriptionIt:
        "Sviluppiamo software gestionali personalizzati per PMI italiane: backoffice, ordini, turni, scorte e dashboard operative. Risultati misurabili in 2-6 settimane.",
      descriptionEn:
        "We build custom management software for SMBs: backoffice, orders, shifts, inventory, and operational dashboards. Measurable results in 2-6 weeks.",
      keywordsIt: [
        "software gestionale su misura",
        "gestionale per PMI",
        "software ordini e magazzino",
        "gestione turni personale",
        "automazione processi aziendali",
        "sviluppo software aziendale",
      ],
      keywordsEn: [
        "custom management software",
        "SMB management software",
        "operations workflow software",
        "inventory and order management software",
        "staff scheduling software",
        "business software automation",
        "management software development agency",
      ],
      path: "/gestionali",
      ogImagePath: "/images/hero.jpg",
      jsonLd: [
        {
          "@type": "Service",
          "@id": "https://arrasindustries.com/gestionali#service",
          name: isIt
            ? "Software Gestionale su Misura"
            : "Custom Management Software",
          description: isIt
            ? "Sviluppo software gestionali personalizzati per PMI con processi ripetitivi e dati sparsi."
            : "Custom management software development for SMBs with repetitive processes and scattered data.",
          provider: {
            "@type": "Organization",
            "@id": "https://arrasindustries.com/#organization",
          },
          serviceType: isIt
            ? "Sviluppo software gestionale"
            : "Management software development",
          areaServed: "IT",
          url: "https://arrasindustries.com/gestionali",
        },
      ],
    },
    theme: {
      accent: "#3B82F6",
      accentLight: "#60A5FA",
      accentGlow: "rgba(59,130,246,0.35)",
    },
    hero: {
      icon: <Laptop className="h-4 w-4" />,
      eyebrow: isIt ? "Software gestionale" : "Management software",
      title: isIt
        ? "Il gestionale costruito sui tuoi flussi reali"
        : "Management software built around your real workflows",
      subtitle: isIt
        ? "Progettiamo gestionali sui processi operativi reali: ordini, turni, scorte, ruoli e report. Prima definiamo scope, integrazioni e metriche; poi sviluppiamo."
        : "We build management software around actual operations: orders, shifts, inventory, roles, and reporting. Scope, integrations, and metrics are defined before development.",
      image: "/images/hero.jpg",
    },
    sections: isIt
      ? [
          {
            heading: "Quando serve un gestionale su misura",
            body: "Un gestionale su misura ha senso quando il team lavora con fogli separati, doppio inserimento dati o procedure manuali non standardizzate. In questi casi il costo non è solo tecnico: aumenta il tempo operativo e cala la qualità del dato.\n\nLa fase iniziale è di analisi: mappa dei flussi attuali, ruoli coinvolti, eccezioni operative e sistemi già presenti. Il risultato è uno scope chiaro, con priorità e dipendenze.\n\nL'obiettivo non è aggiungere funzioni, ma ridurre passaggi inutili. Ogni modulo viene introdotto solo se migliora un processo misurabile.",
          },
          {
            heading: "Cosa viene implementato",
            body: "Il nucleo tipico include backoffice ordini, magazzino, turni e report operativi. Le integrazioni coprono strumenti esistenti come POS, canali email, export e calendari.\n\nSono inclusi ruoli e permessi, log eventi e backup. La consegna prevede ambiente di produzione, documentazione essenziale e passaggio operativo al team.\n\nIl rilascio è incrementale: prima versione utilizzabile, poi iterazioni su dati reali di utilizzo. Questo riduce il rischio di sviluppare funzionalità non usate.",
          },
          {
            heading: "Come si misura il risultato",
            body: "Le metriche principali sono ore manuali risparmiate, errori di inserimento ridotti, tempi medi di gestione e puntualità operativa. Questi indicatori vengono definiti prima del rilascio.\n\nDopo l'avvio, il monitoraggio mostra quali flussi migliorano e quali richiedono correzioni. In questo modo ogni iterazione è legata a un obiettivo operativo, non a una preferenza estetica.",
          },
        ]
      : [
          {
            heading: "When custom software is needed",
            body: "Custom software is useful when teams work with disconnected files, duplicate data entry, or manual procedures that are hard to standardize. In that setup, costs grow in operations and data quality.\n\nThe first step is process mapping: current workflows, responsible roles, edge cases, and existing systems. Output is a scoped plan with priorities and dependencies.\n\nThe goal is not adding features by default. A module is implemented only when it improves a measurable operational step.",
          },
          {
            heading: "What gets implemented",
            body: "Typical scope includes order backoffice, inventory, shifts, and operational reporting. Integrations cover existing tools such as POS, email channels, exports, and calendars.\n\nDelivery includes roles and permissions, event logs, and backup policies. Handover includes production deployment, essential documentation, and team onboarding.\n\nRelease is incremental: first usable version, then iterations based on usage data. This reduces the risk of building unused features.",
          },
          {
            heading: "How outcomes are measured",
            body: "Primary metrics are manual hours reduced, data-entry errors reduced, average handling time, and operational punctuality. These KPIs are defined before release.\n\nAfter go-live, tracking shows which flows improve and which still need correction. Each iteration is linked to an operational target, not to generic redesign.",
          },
        ],
    useCases: {
      title: isIt ? "Per chi è pensato" : "Who it's for",
      items: isIt
        ? [
            {
              title: "Ristoranti e locali",
              description:
                "Gestione prenotazioni, turni del personale, scorte di magazzino e ordini fornitori in un unico pannello.",
            },
            {
              title: "Studi professionali",
              description:
                "Agenda condivisa, gestione clienti, fatturazione e documenti con accessi differenziati per ruolo.",
            },
            {
              title: "Retail e negozi",
              description:
                "Inventario in tempo reale, integrazione POS, fidelizzazione clienti e reportistica vendite.",
            },
            {
              title: "Logistica e magazzini",
              description:
                "Tracciamento spedizioni, gestione scorte, ordini automatici e dashboard operative.",
            },
            {
              title: "Artigiani e produttori",
              description:
                "Gestione commesse, preventivi, stato avanzamento lavori e contabilità semplificata.",
            },
            {
              title: "Servizi e consulenza",
              description:
                "Timesheet, gestione progetti, fatturazione a consuntivo e CRM integrato.",
            },
          ]
        : [
            {
              title: "Restaurants & venues",
              description:
                "Booking management, staff shifts, inventory tracking, and supplier orders in a single dashboard.",
            },
            {
              title: "Professional studios",
              description:
                "Shared calendar, client management, invoicing, and documents with role-based access control.",
            },
            {
              title: "Retail & shops",
              description:
                "Real-time inventory, POS integration, customer loyalty, and sales reporting.",
            },
            {
              title: "Logistics & warehouses",
              description:
                "Shipment tracking, stock management, automated orders, and operational dashboards.",
            },
            {
              title: "Artisans & manufacturers",
              description:
                "Job management, quotes, work progress tracking, and simplified accounting.",
            },
            {
              title: "Services & consulting",
              description:
                "Timesheets, project management, time-based invoicing, and integrated CRM.",
            },
          ],
    },
    process: {
      title: isIt ? "Come lavoriamo" : "How we work",
      steps: isIt
        ? [
            {
              number: "01",
              title: "Discovery",
              desc: "Mappiamo i flussi, identifichiamo i colli di bottiglia e definiamo scope e metriche. 1-2 settimane.",
            },
            {
              number: "02",
              title: "MVP",
              desc: "Prima release usabile con i flussi principali. Il team inizia a usarlo subito. 2-6 settimane.",
            },
            {
              number: "03",
              title: "Stabilizzazione",
              desc: "Hardening, ruoli, backup, documentazione e formazione del team.",
            },
            {
              number: "04",
              title: "Iterazioni",
              desc: "Miglioramenti basati sui dati reali di utilizzo. Roadmap condivisa e priorità misurate.",
            },
          ]
        : [
            {
              number: "01",
              title: "Discovery",
              desc: "We map workflows, identify bottlenecks, and define scope and metrics. 1-2 weeks.",
            },
            {
              number: "02",
              title: "MVP",
              desc: "First usable release with core workflows. Your team starts using it immediately. 2-6 weeks.",
            },
            {
              number: "03",
              title: "Stabilization",
              desc: "Hardening, roles, backups, documentation, and team training.",
            },
            {
              number: "04",
              title: "Iterations",
              desc: "Improvements based on real usage data. Shared roadmap and measured priorities.",
            },
          ],
    },
    faq: {
      title: isIt
        ? "Domande frequenti sui gestionali"
        : "Management software FAQ",
      subtitle: isIt
        ? "Le risposte alle domande più comuni."
        : "Answers to the most common questions.",
      items: isIt
        ? [
            {
              title: "Quanto costa un gestionale su misura?",
              content:
                "Dipende dalla complessità. Partiamo da una call gratuita per capire le esigenze, poi forniamo un preventivo dettagliato con prezzo fisso per ogni fase. Nessuna sorpresa.",
            },
            {
              title: "Posso integrarlo con il mio POS / ERP attuale?",
              content:
                "Sì. Progettiamo il gestionale per integrarsi con gli strumenti esistenti: POS, sistemi di fatturazione, email, calendari e qualsiasi servizio con API disponibile.",
            },
            {
              title: "Quanto tempo serve per avere il gestionale funzionante?",
              content:
                "Il primo MVP usabile è pronto in 2-6 settimane, a seconda della complessità. Il team inizia a usarlo subito e iteriamo sulla base dei dati reali.",
            },
            {
              title: "Chi gestisce la manutenzione?",
              content:
                "Offriamo manutenzione continuativa con monitoraggio, oppure handover completo con documentazione e formazione. La scelta è vostra.",
            },
            {
              title: "Funziona anche da mobile?",
              content:
                "Sì. Tutti i nostri gestionali sono responsive e funzionano su qualsiasi dispositivo: desktop, tablet e smartphone.",
            },
          ]
        : [
            {
              title: "How much does custom management software cost?",
              content:
                "It depends on complexity. We start with a free call to understand needs, then provide a detailed quote with fixed pricing per phase. No surprises.",
            },
            {
              title: "Can I integrate it with my current POS / ERP?",
              content:
                "Yes. We design the system to integrate with existing tools: POS, billing systems, email, calendars, and any service with an available API.",
            },
            {
              title: "How long until the software is ready?",
              content:
                "The first usable MVP is ready in 2-6 weeks depending on complexity. Your team starts using it immediately, and we iterate based on real data.",
            },
            {
              title: "Who handles maintenance?",
              content:
                "We offer ongoing maintenance with monitoring, or complete handover with documentation and training. Your choice.",
            },
            {
              title: "Does it work on mobile?",
              content:
                "Yes. All our management systems are responsive and work on any device: desktop, tablet, and smartphone.",
            },
          ],
    },
    cta: {
      title: isIt
        ? "Valutiamo il tuo caso operativo"
        : "Assess your operational case",
      subtitle: isIt
        ? "Call di 20 minuti per analizzare flussi, vincoli tecnici, integrazioni e priorità di rilascio."
        : "A 20-minute call to review workflows, technical constraints, integrations, and release priorities.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
