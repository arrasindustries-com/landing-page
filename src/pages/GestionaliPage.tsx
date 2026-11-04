import { Laptop } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

const gestionaliFrames = [
  "/assets/gestionali/Gestionali_1.png",
  "/assets/gestionali/Gestionali_2.png",
  "/assets/gestionali/Gestionali_3.png",
  "/assets/gestionali/Gestionali_4.png",
  "/assets/gestionali/Gestionali_5.png",
  "/assets/gestionali/Gestionali_6.png",
  "/assets/gestionali/Gestionali_7.png",
  "/assets/gestionali/Gestionali_8.png",
];

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
      eyebrow: isIt ? "Gestionali" : "Management software",
      title: isIt
        ? "Un gestionale costruito su come lavorate voi."
        : "Management software built around how you actually work.",
      subtitle: isIt
        ? "Ordini, magazzino, turni, clienti e report in un unico strumento. Partiamo dai vostri processi, non da un software preconfezionato da adattare a forza."
        : "Orders, inventory, shifts, clients and reports in a single tool. We start from your processes, not from off-the-shelf software you have to bend to fit.",
      image: gestionaliFrames[0],
      animationFrames: gestionaliFrames,
      visual: "operations",
    },
    sections: isIt
      ? [
          {
            heading: "Quando conviene un gestionale su misura",
            body: "Se il team passa ore a copiare dati da un foglio all'altro, se le informazioni vivono in tre posti diversi o se ogni persona segue una procedura sua, il problema non è la buona volontà. Mancano gli strumenti giusti.\n\nPrima di scrivere codice ci sediamo con chi fa il lavoro ogni giorno. Guardiamo come gira oggi un ordine, un turno o una consegna, dove si inceppa e quali eccezioni capitano davvero.\n\nNe esce un piano con poche priorità chiare. Ogni modulo entra nel progetto solo se toglie lavoro a qualcuno.",
          },
          {
            heading: "Cosa costruiamo",
            body: "Di solito si parte da ordini, magazzino, turni e report. Il gestionale si collega agli strumenti che usate già: POS, fatturazione, email, calendari, export verso il commercialista.\n\nRuoli e permessi, registro delle operazioni e backup automatici sono inclusi fin dall'inizio, non venduti a parte. Alla consegna trovate il software in produzione, la documentazione e una formazione per chi lo userà.\n\nRilasciamo per gradi: prima una versione che si può usare, poi miglioramenti basati su come il team la usa davvero.",
          },
          {
            heading: "Come capiamo se funziona",
            body: "Prima del rilascio scegliamo insieme pochi numeri da tenere d'occhio: ore spese in attività manuali, errori di inserimento, tempo medio per evadere un ordine.\n\nDopo l'avvio li confrontiamo con la situazione di partenza. Così le modifiche successive si decidono guardando i dati, non a sensazione.",
          },
        ]
      : [
          {
            heading: "When custom software makes sense",
            body: "If your team spends hours copying data between spreadsheets, if information lives in three different places, or if everyone follows their own procedure, the problem is not effort. The right tools are missing.\n\nBefore writing any code we sit down with the people doing the work every day. We look at how an order, a shift or a delivery flows today, where it gets stuck and which exceptions really happen.\n\nThe result is a plan with a few clear priorities. A module makes it into the project only if it takes work off someone's plate.",
          },
          {
            heading: "What we build",
            body: "We usually start with orders, inventory, shifts and reports. The software connects to the tools you already use: POS, invoicing, email, calendars, exports for your accountant.\n\nRoles and permissions, an activity log and automatic backups are included from the start, not sold as extras. At handover you get the software in production, documentation and training for the people who will use it.\n\nWe release in stages: first a version you can use, then improvements based on how your team actually uses it.",
          },
          {
            heading: "How we know it works",
            body: "Before release we agree on a few numbers to watch: hours spent on manual tasks, data-entry errors, average time to process an order.\n\nAfter go-live we compare them with the starting point. Later changes are decided by looking at the data, not by gut feeling.",
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
              title: "Analisi",
              desc: "Passiamo del tempo con chi lavora ogni giorno su ordini, turni e magazzino. Capiamo cosa rallenta e cosa serve davvero.",
              deliverable: "Mappa dei processi e preventivo",
            },
            {
              number: "02",
              title: "Prima versione",
              desc: "Costruiamo i flussi principali e il team inizia a usarli su dati veri. I commenti di chi lo usa guidano le modifiche.",
              deliverable: "Gestionale funzionante da provare",
            },
            {
              number: "03",
              title: "Messa in produzione",
              desc: "Impostiamo ruoli, permessi e backup, colleghiamo gli strumenti che usate già e formiamo il personale.",
              deliverable: "Software in uso e formazione",
            },
            {
              number: "04",
              title: "Assistenza",
              desc: "Correggiamo, aggiorniamo e aggiungiamo funzioni quando servono, in base a come il gestionale viene usato.",
              deliverable: "Manutenzione e nuove funzioni",
            },
          ]
        : [
            {
              number: "01",
              title: "Analysis",
              desc: "We spend time with the people who handle orders, shifts and stock every day. We find out what slows them down and what is really needed.",
              deliverable: "Process map and quote",
            },
            {
              number: "02",
              title: "First version",
              desc: "We build the main workflows and your team starts using them on real data. Feedback from the people using it drives the changes.",
              deliverable: "Working software to try out",
            },
            {
              number: "03",
              title: "Go-live",
              desc: "We set up roles, permissions and backups, connect the tools you already use and train your staff.",
              deliverable: "Software in use and training",
            },
            {
              number: "04",
              title: "Support",
              desc: "We fix, update and add features when needed, based on how the software is actually used.",
              deliverable: "Maintenance and new features",
            },
          ],
    },
    faq: {
      title: isIt
        ? "Domande frequenti sui gestionali"
        : "Management software FAQ",
      subtitle: isIt
        ? "Quello che ci chiedono più spesso prima di iniziare."
        : "What people ask us most before getting started.",
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
        ? "Parliamo del tuo gestionale."
        : "Let's talk about your software.",
      subtitle: isIt
        ? "In 20 minuti capiamo come lavorate oggi, quali strumenti usate e da dove conviene partire."
        : "In 20 minutes we learn how you work today, which tools you use and where it makes sense to start.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
