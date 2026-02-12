export type Language = "it" | "en";

export const translations = {
  it: {
    // Navigation and Header
    nav: {
      services: "Servizi",
      path: "Percorso",
      process: "Processo",
      innovation: "Innovazione",
      faq: "FAQ",
      seeServices: "Vedi servizi",
      letsTalk: "Parliamone",
    },
    // Hero Section
    hero: {
      words: ["gestionali", "siti web", "web3"],
      subtitle:
        "Gestionali, siti web e soluzioni web3 costruiti sui flussi reali della tua attività. Il tuo team li usa subito, senza formazione infinita. Risultati misurabili, non promesse.",
      requestCall: "Richiedi una call",
      discoverInnovation: "Scopri l'innovazione",
      badges: ["prenotazioni", "fidelizzazione", "turni", "dashboard"],
      quote: "Automazioni piccole, margine grande.",
      quote2:
        "Il nostro lavoro finisce quando il vostro team lo usa senza pensarci.",
      imageAlt: "Mockup gestionale",
    },
    // Values Section
    values: {
      title: "Cosa costruiamo",
      subtitle: "Cosa facciamo",
      values: [
        {
          title: "Gestionali su misura",
          desc: "Backoffice, ordini, turni, scorte: software costruito sui flussi reali della tua attività, pronto da usare dal giorno uno.",
        },
        {
          title: "Siti web & presenza digitale",
          desc: "Siti che portano contatti reali: form, analytics, SEO, lead tracking. Non vetrine statiche.",
        },
        {
          title: "Web3 & blockchain",
          desc: "Integrazione e formazione su tracciabilità, notarizzazione, identità digitale e pagamenti crypto.",
        },
      ],
    },
    // Section Bridge
    sectionBridge: {
      pillars: {
        eyebrow: "Tre aree, un metodo",
        title: "Prima capiamo il problema, poi scegliamo lo strumento.",
        subtitle:
          "Gestionale, sito o web3: costruiamo solo ciò che porta risultati concreti.",
      },
      fromStrategy: {
        eyebrow: "Dalla strategia al rilascio",
        title: "Servizi chiari, risultati verificabili.",
        subtitle: "Qui sotto trovi cosa facciamo e cosa ricevi.",
      },
    },
    // Impact Section
    impact: {
      badge: "Per realtà piccole, impatto grande",
      title: "Tecnologia che riduce caos e aumenta margine.",
      description:
        "Niente 'software su misura' generico: partiamo dai vostri flussi reali, misuriamo il problema, costruiamo una soluzione semplice da usare e facile da mantenere.",
      features: [
        {
          title: "Meno tempo perso",
          desc: "Automazioni e dashboard per eliminare attività ripetitive e fogli sparsi.",
        },
        {
          title: "Più entrate",
          desc: "Upsell, fidelizzazione e canali digitali per aumentare scontrino e ritorno cliente.",
        },
        {
          title: "Controllo e sicurezza",
          desc: "Accessi, ruoli, audit e backup: soluzioni solide, non prototipi fragili.",
        },
      ],
    },
    // Three Areas
    threeAreas: {
      title: "Tre aree concrete, tre risultati misurabili.",
      description:
        "Operazioni interne, presenza digitale e tracciabilità: scegliamo l'area dove serve più impatto, senza sovrastrutture.",
      features: [
        {
          title: "Operazioni ordinate",
          desc: "Gestionale e automazioni per ridurre attività manuali e errori.",
        },
        {
          title: "Presenza digitale utile",
          desc: "Siti web con lead, analytics e form per trasformare visite in contatti.",
        },
        {
          title: "Tracciabilità quando serve",
          desc: "Audit e notarizzazione solo se portano valore concreto e misurabile.",
        },
      ],
    },
    // Services Section
    services: {
      title: "Cosa consegniamo, in concreto.",
      subtitle:
        "Ogni servizio ha destinatari, deliverable e risultati attesi. Niente promesse vaghe.",
      result: "Risultato",
      services: [
        {
          title: "Gestionale & automazioni",
          subtitle: "Per PMI con processi ripetitivi e dati sparsi.",
          points: [
            "Backoffice, ordini, scorte, dashboard operative.",
            "Integrazioni con strumenti esistenti (POS, export, email).",
            "Ruoli, log, backup e audit di base.",
          ],
          outcomes: [
            "Fino al 60% in meno di lavoro manuale",
            "Un'unica fonte di verità per tutti i dati",
            "Meno errori, decisioni più rapide",
          ],
        },
        {
          title: "Siti web & presenza digitale",
          subtitle:
            "Per aziende che vogliono contatti reali, non solo vetrina.",
          points: [
            "Sito vetrina o avanzato con sezioni gestibili.",
            "Form, lead tracking, analytics di base.",
            "SEO essenziale e performance ottimizzate.",
          ],
          outcomes: [
            "Più contatti in entrata, meno ricerca a freddo",
            "ROI misurabile sulla presenza digitale",
            "Un sito che lavora per te 24/7",
          ],
        },
        {
          title: "Blockchain / Web3",
          subtitle:
            "Per chi ha bisogno di tracciabilità o automazioni verificabili.",
          points: [
            "Tracciabilità e notarizzazione di eventi.",
            "Identità digitale e auditabilità dei processi.",
            "Formazione e integrazione con sistemi esistenti.",
          ],
          outcomes: [
            "Maggiore trasparenza operativa",
            "Processi verificabili quando serve",
            "Scelte tecniche motivate",
          ],
        },
      ],
    },
    // Process
    process: {
      title: "Metodo semplice. Output chiari. Tempi realistici.",
      subtitle:
        "Dal discovery alla release: ogni fase ha un output verificabile e condiviso.",
      steps: [
        {
          number: "01",
          title: "Discovery breve",
          desc: "Obiettivi, metriche, scope e vincoli. 1–2 settimane.",
        },
        {
          number: "02",
          title: "MVP",
          desc: "Release usabile con flussi principali. 2–6 settimane.",
        },
        {
          number: "03",
          title: "Stabilizzazione",
          desc: "Hardening, ruoli, backup, documentazione e handover.",
        },
        {
          number: "04",
          title: "Iterazioni",
          desc: "Roadmap basata su dati, non su ipotesi.",
        },
      ],
      phaseSteps: [
        {
          title: "1) Discovery breve",
          desc: "Allineiamo obiettivo, metriche e vincoli reali.",
          metric: "Output: documento, scope, timeline, team.",
        },
        {
          title: "2) MVP usabile",
          desc: "Costruiamo la prima release che il team può usare subito.",
          metric: "Output: release, training veloce, feedback.",
        },
        {
          title: "3) Stabilizzazione + handover",
          desc: "Hardening, ruoli, backup, documentazione e training.",
          metric: "Output: doc + monitoraggio + manutenzione opzionale.",
        },
        {
          title: "4) Iterazioni mirate",
          desc: "Miglioramenti basati sui dati, non su opinioni.",
          metric: "Output: roadmap trimestrale e priorità misurate.",
        },
      ],
    },
    // Innovation Section
    innovation: {
      title: "Web3 quando serve, non per moda.",
      subtitle:
        "Lo usiamo solo se porta vantaggi concreti: tracciabilità, auditabilità, notarizzazione o automazioni verificabili. Altrimenti restiamo su stack tradizionali.",
      useCases: "Use case tipici",
      useCasesTitle: "Quando i dati devono essere verificabili.",
      useCasesDesc:
        "Audit, tracciabilità e notarizzazione: utili solo quando la verifica esterna è un requisito reale.",
      conceptual:
        "Visualizzazione concettuale di flussi verificabili e auditabili.",
      digitalPayments: "Pagamenti digitali (opzionali)",
      checkoutTitle: "Checkout con wallet, quando serve",
      checkoutDesc:
        "Possiamo integrare wallet dove ha senso: clienti internazionali, community tech‑friendly, o tracciabilità del pagamento.",
      focus: "Focus",
      features: [
        {
          title: "Tracciabilità eventi",
          desc: "Quando ogni passaggio deve essere verificabile.",
        },
        {
          title: "Notarizzazione",
          desc: "Quando la data e l'ora devono essere indiscutibili.",
        },
        {
          title: "Identità e accessi",
          desc: "Quando chi fa cosa deve essere provabile.",
        },
        {
          title: "Automazioni verificabili",
          desc: "Quando le regole devono essere immutabili.",
        },
      ],
      cryptoFlow: {
        title: "Come funziona un pagamento in crypto nel gestionale",
        steps: [
          {
            title: "Utente",
            desc: "Seleziona crypto e importo",
            tip: "L'utente sceglie crypto e importo nel checkout.",
          },
          {
            title: "Wallet",
            desc: "Firma e conferma",
            tip: "La transazione viene firmata nel wallet.",
          },
          {
            title: "Gestionale",
            desc: "Riceve esito + riconcilia",
            tip: "Il gestionale registra e riconcilia l'esito.",
          },
        ],
      },
      benefits: [
        "Accesso a clienti globali, senza barriere valutarie.",
        "Pagamenti verificabili con ricevute on-chain.",
        "Opzione aggiuntiva, non obbligatoria.",
      ],
    },
    // FAQ
    faq: {
      title: "Domande che contano davvero.",
      subtitle:
        "Prezzi trasparenti, tempi realistici e risposte oneste. Ecco cosa ci chiedono di più.",
      items: [
        {
          title: "Quanto costa?",
          content:
            "Ogni cliente ha le sue esigenze, per questo partiamo da una chiamata gratuita di 20 minuti per capire meglio. Dopo la call, forniamo un preventivo chiaro e dettagliato, con prezzi fissi per ogni fase del progetto.",
        },
        {
          title: "In quanto tempo consegnate?",
          content:
            "Discovery 1–2 settimane, MVP 2–6 settimane. I tempi dipendono da complessità e disponibilità dei dati.",
        },
        {
          title: "E se poi serve assistenza?",
          content:
            "Offriamo manutenzione con monitoraggio o handover completo con documentazione. Scegliete voi.",
        },
        {
          title: "Quando ha senso usare web3?",
          content:
            "Solo se serve tracciabilità, notarizzazione o auditabilità. Se non serve, restiamo su stack tradizionali.",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Vediamo se siamo il partner giusto.",
      subtitle:
        "Call gratuita di 20 minuti. Mappiamo il problema, stimiamo l'effort e definiamo i prossimi passi.",
      responseTime: "Rispondiamo entro 24–48h lavorative.",
      formLabels: {
        name: "Nome",
        activity: "Attività / settore",
        contact: "Contatto",
        objective: "Obiettivo + vincoli",
      },
      formPlaceholders: {
        name: "Mario Rossi",
        activity: "Ristorante / Studio / Retail / Altro",
        contact: "Email o telefono",
        objective: "Es: ridurre no-show, budget, tempi, integrazioni...",
      },
      evaluate: "Prenota una call gratuita",
    },
    // Footer
    footer: {
      company: "Arras Industries",
      description:
        "Costruiamo software che riduce il caos e aumenta i margini per le PMI: gestionali, siti web e web3",
      copyright: "© {year} Arras Industries",
      sections: "Sezioni",
      contacts: "Contatti",
      email: "meneguzzosilvio@gmail.com",
      phone: "+39 334 116 8370",
      location: "Sede: Italia (remoto)",
    },
    // Support Section
    support: {
      title: "Supporta l'innovazione",
      subtitle:
        "Sostieni il progetto e aiutaci a costruire strumenti più aperti, veloci e decentralizzati.",
      amount: "Importo",
      network: "Rete",
      token: "Token",
      sendMetaMask: "Invia con MetaMask",
      selectedNetwork: "Rete selezionata",
      transparency: "Trasparenza totale",
      transparencyDesc:
        "Tutte le donazioni sono pubbliche e tracciabili on‑chain.",
      destinationWallet: "Wallet di destinazione:",
      errors: {
        noMetaMask: "MetaMask non trovato. Installa l'estensione e riprova.",
        ethOnly: "Demo: solo ETH. I token ERC20 verranno aggiunti in seguito.",
        invalidAmount: "Inserisci un importo valido.",
        txSent: "Transazione inviata. Grazie per il supporto.",
        txFailed: "Transazione annullata o non riuscita.",
        networkAdd: "Impossibile aggiungere la rete selezionata.",
        networkSwitch: "Cambio rete annullato.",
      },
      tagline: "Domande? Contiamo su WhatsApp o email.",
    },
  },
  en: {
    // Navigation and Header
    nav: {
      services: "Services",
      path: "Path",
      process: "Process",
      innovation: "Innovation",
      faq: "FAQ",
      seeServices: "See services",
      letsTalk: "Let's talk",
    },
    // Hero Section
    hero: {
      words: ["management systems", "websites", "web3"],
      subtitle:
        "Management systems, websites, and web3 solutions built around your actual workflows. Your team uses them from day one — no training marathons. Measurable results, not promises.",
      requestCall: "Request a call",
      discoverInnovation: "Discover innovation",
      badges: ["bookings", "loyalty", "shifts", "dashboard"],
      quote: "Small automations, big margins.",
      quote2:
        "Our work is done when your team uses it without thinking about it.",
      imageAlt: "Management system mockup",
    },
    // Values Section
    values: {
      title: "What we build",
      subtitle: "What we do",
      values: [
        {
          title: "Custom management systems",
          desc: "Backoffice, orders, shifts, inventory: software built around your actual workflows, ready to use from day one.",
        },
        {
          title: "Websites & digital presence",
          desc: "Sites that generate real contacts: forms, analytics, SEO, lead tracking. Not static showcases.",
        },
        {
          title: "Web3 & blockchain",
          desc: "Integration and training on traceability, notarization, digital identity, and crypto payments.",
        },
      ],
    },
    // Section Bridge
    sectionBridge: {
      pillars: {
        eyebrow: "Three areas, one method",
        title: "First we understand the problem, then we pick the right tool.",
        subtitle:
          "Management system, website, or web3: we only build what delivers concrete results.",
      },
      fromStrategy: {
        eyebrow: "From strategy to release",
        title: "Clear services, verifiable results.",
        subtitle: "Below you'll find what we do and what you get.",
      },
    },
    // Impact Section
    impact: {
      badge: "For small businesses, big impact",
      title: "Technology that reduces chaos and increases margins.",
      description:
        "No generic 'custom software': we start from your actual workflows, measure the problem, build a simple-to-use and easy-to-maintain solution.",
      features: [
        {
          title: "Less wasted time",
          desc: "Automations and dashboards to eliminate repetitive tasks and scattered spreadsheets.",
        },
        {
          title: "More revenue",
          desc: "Upselling, loyalty, and digital channels to increase average transaction and customer return.",
        },
        {
          title: "Control and security",
          desc: "Access, roles, audits, and backups: solid solutions, not fragile prototypes.",
        },
      ],
    },
    // Three Areas
    threeAreas: {
      title: "Three concrete areas, three measurable results.",
      description:
        "Internal operations, digital presence, and traceability: we choose the area where impact is most needed, without unnecessary complexity.",
      features: [
        {
          title: "Organized operations",
          desc: "Management system and automations to reduce manual work and errors.",
        },
        {
          title: "Useful digital presence",
          desc: "Websites with leads, analytics, and forms to turn visits into contacts.",
        },
        {
          title: "Traceability when needed",
          desc: "Audits and notarization only if they bring concrete, measurable value.",
        },
      ],
    },
    // Services Section
    services: {
      title: "What we deliver, concretely.",
      subtitle:
        "Each service has target users, deliverables, and expected outcomes. No vague promises.",
      result: "Result",
      services: [
        {
          title: "Management & automations",
          subtitle: "For SMBs with repetitive processes and scattered data.",
          points: [
            "Backoffice, orders, inventory, operational dashboards.",
            "Integrations with existing tools (POS, export, email).",
            "Roles, logs, basic backups, and audit.",
          ],
          outcomes: [
            "Up to 60% less manual work",
            "One source of truth for all data",
            "Fewer errors, faster decisions",
          ],
        },
        {
          title: "Websites & digital presence",
          subtitle:
            "For companies that want real contacts, not just a showpiece.",
          points: [
            "Showcase or advanced site with manageable sections.",
            "Forms, lead tracking, basic analytics.",
            "Essential SEO and optimized performance.",
          ],
          outcomes: [
            "More inbound leads, less cold outreach",
            "Measurable ROI on your digital presence",
            "A site that works for you 24/7",
          ],
        },
        {
          title: "Blockchain / Web3",
          subtitle:
            "For those who need traceability or verifiable automations.",
          points: [
            "Event traceability and notarization.",
            "Digital identity and process auditability.",
            "Training and integration with existing systems.",
          ],
          outcomes: [
            "Greater operational transparency",
            "Verifiable processes when needed",
            "Motivated technical choices",
          ],
        },
      ],
    },
    // Process
    process: {
      title: "Simple method. Clear outputs. Realistic timelines.",
      subtitle:
        "From discovery to release: each phase has a verifiable, shared output.",
      steps: [
        {
          number: "01",
          title: "Short discovery",
          desc: "Objectives, metrics, scope, and constraints. 1–2 weeks.",
        },
        {
          number: "02",
          title: "MVP",
          desc: "Usable release with main flows. 2–6 weeks.",
        },
        {
          number: "03",
          title: "Stabilization",
          desc: "Hardening, roles, backup, documentation, and handover.",
        },
        {
          number: "04",
          title: "Iterations",
          desc: "Roadmap based on data, not assumptions.",
        },
      ],
      phaseSteps: [
        {
          title: "1) Short discovery",
          desc: "We align on objective, metrics, and real constraints.",
          metric: "Output: document, scope, timeline, team.",
        },
        {
          title: "2) Usable MVP",
          desc: "We build the first release your team can use right away.",
          metric: "Output: release, quick training, feedback.",
        },
        {
          title: "3) Stabilization + handover",
          desc: "Hardening, roles, backups, documentation, and training.",
          metric: "Output: documentation + monitoring + optional maintenance.",
        },
        {
          title: "4) Targeted iterations",
          desc: "Improvements based on real data, not opinions.",
          metric: "Output: quarterly roadmap and measured priorities.",
        },
      ],
    },
    // Innovation Section
    innovation: {
      title: "Web3 when it makes sense, not for trends.",
      subtitle:
        "We use it only if it brings concrete advantages: traceability, auditability, notarization, or verifiable automations. Otherwise, we stick to traditional stacks.",
      useCases: "Typical use cases",
      useCasesTitle: "When data must be verifiable.",
      useCasesDesc:
        "Audits, traceability, and notarization: useful only when external verification is a real requirement.",
      conceptual: "Conceptual visualization of verifiable and auditable flows.",
      digitalPayments: "Digital payments (optional)",
      checkoutTitle: "Checkout with wallet, when needed",
      checkoutDesc:
        "We can integrate wallets where it makes sense: international clients, tech-friendly communities, or payment traceability.",
      focus: "Focus",
      features: [
        {
          title: "Event traceability",
          desc: "When every step must be verifiable.",
        },
        {
          title: "Notarization",
          desc: "When date and time must be indisputable.",
        },
        {
          title: "Identity and access",
          desc: "When who does what must be provable.",
        },
        {
          title: "Verifiable automations",
          desc: "When rules must be immutable.",
        },
      ],
      cryptoFlow: {
        title: "How a crypto payment works in the management system",
        steps: [
          {
            title: "User",
            desc: "Selects crypto and amount",
            tip: "The user chooses crypto and amount at checkout.",
          },
          {
            title: "Wallet",
            desc: "Signs and confirms",
            tip: "The transaction is signed in the wallet.",
          },
          {
            title: "Management system",
            desc: "Receives result + reconciles",
            tip: "The system records and reconciles the result.",
          },
        ],
      },
      benefits: [
        "Access to global customers, without currency barriers.",
        "Verifiable payments with on-chain receipts.",
        "Optional add-on, not mandatory.",
      ],
    },
    // FAQ
    faq: {
      title: "Questions that really matter.",
      subtitle:
        "Transparent pricing, realistic timelines, and honest answers. Here's what clients ask most.",
      items: [
        {
          title: "How much does it cost?",
          content:
            "We start with a fixed-price discovery, then move to clear milestones. Each phase has verifiable output.",
        },
        {
          title: "How long to deliver?",
          content:
            "Discovery 1–2 weeks, MVP 2–6 weeks. Timeline depends on complexity and data availability.",
        },
        {
          title: "What if we need support later?",
          content:
            "We offer maintenance with monitoring or complete handover with documentation. Your choice.",
        },
        {
          title: "When does web3 make sense?",
          content:
            "Only if you need traceability, notarization, or auditability. If not needed, we stick to traditional stacks.",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Let's see if we're the right fit.",
      subtitle:
        "Free 20-minute call. We'll map your problem, estimate effort, and define next steps — no obligation.",
      responseTime: "We respond within 24–48 business hours.",
      formLabels: {
        name: "Name",
        activity: "Activity / sector",
        contact: "Contact",
        objective: "Objective + constraints",
      },
      formPlaceholders: {
        name: "John Smith",
        activity: "Restaurant / Studio / Retail / Other",
        contact: "Email or phone",
        objective: "E.g., reduce no-shows, budget, timeline, integrations...",
      },
      evaluate: "Book a free call",
    },
    // Footer
    footer: {
      company: "Arras Industries",
      description:
        "We build software that reduces chaos and increases margins for SMBs: management systems, websites, and web3 — only when it adds real value.",
      copyright: "© {year} Arras Industries",
      sections: "Sections",
      contacts: "Contacts",
      email: "hello@arrasindustries.com",
      phone: "+39 334 116 8370",
      location: "Office: Italy (remote)",
    },
    // Support Section
    support: {
      title: "Support innovation",
      subtitle:
        "Support the project and help us build more open, fast, and decentralized tools.",
      amount: "Amount",
      network: "Network",
      token: "Token",
      sendMetaMask: "Send with MetaMask",
      selectedNetwork: "Selected network",
      transparency: "Total transparency",
      transparencyDesc: "All donations are public and traceable on-chain.",
      destinationWallet: "Destination wallet:",
      errors: {
        noMetaMask: "MetaMask not found. Install the extension and try again.",
        ethOnly: "Demo: ETH only. ERC20 tokens will be added later.",
        invalidAmount: "Enter a valid amount.",
        txSent: "Transaction sent. Thank you for your support.",
        txFailed: "Transaction cancelled or failed.",
        networkAdd: "Unable to add the selected network.",
        networkSwitch: "Network switch cancelled.",
      },
      tagline: "Questions? We're available on WhatsApp or email.",
    },
  },
};
