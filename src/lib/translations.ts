export type Language = "it" | "en";

export const translations = {
  it: {
    // Navigation and Header
    nav: {
      services: "Servizi",
      about: "Chi siamo",
      path: "Percorso",
      process: "Processo",
      innovation: "Innovazione",
      faq: "FAQ",
      letsTalk: "Parliamone",
    },
    // Hero Section
    hero: {
      words: ["gestionali", "siti web", "web3"],
      subtitle:
        "Gestionali, siti web e soluzioni web3 progettati su obiettivi di business chiari: meno costi operativi, più lead qualificati e processi più affidabili. Consegna rapida, KPI tracciati, risultati misurabili.",
      requestCall: "Richiedi una call",
      quote2:
        "Il nostro lavoro finisce quando il vostro team lo usa senza pensarci.",
      imageAlt: "Mockup gestionale",
    },
    // Values Section
    values: {
      title: "Cosa costruiamo",
      subtitle: "Soluzioni con impatto misurabile",
      values: [
        {
          title: "Gestionali su misura",
          desc: "Backoffice, ordini, turni e scorte in un unico flusso: meno errori, più controllo e decisioni basate su dati.",
        },
        {
          title: "Siti web & presenza digitale",
          desc: "Siti orientati alla conversione: performance, SEO tecnica, analytics e funnel per trasformare traffico in opportunità commerciali.",
        },
        {
          title: "Web3 & blockchain",
          desc: "Integriamo web3 solo dove crea vantaggio reale: tracciabilità, notarizzazione, identità digitale e pagamenti verificabili.",
        },
      ],
    },
    // Section Bridge
    sectionBridge: {
      pillars: {
        eyebrow: "Tre aree, un metodo",
        title: "Prima misuriamo impatto e rischi, poi scriviamo codice.",
        subtitle:
          "Gestionale, sito o web3: scegliamo lo stack con il miglior rapporto tra ROI, tempi e complessità.",
      },
      fromStrategy: {
        eyebrow: "Dalla strategia al rilascio",
        title: "Strategia, delivery e metriche allineate.",
        subtitle:
          "Qui sotto trovi servizi, output e risultati attesi per ogni area.",
      },
    },
    // Three Areas
    threeAreas: {
      title: "Tre aree concrete, tre risultati misurabili.",
      description:
        "Operazioni interne, presenza digitale e tracciabilità: scegliamo l'area dove serve più impatto, senza sovrastrutture.",
      features: [
        {
          title: "Efficienza operativa",
          desc: "Gestionale e automazioni per ridurre costi, errori e tempi di lavoro.",
        },
        {
          title: "Acquisizione digitale",
          desc: "Siti e funnel che trasformano visite in lead qualificati e trattative.",
        },
        {
          title: "Fiducia e verifica",
          desc: "Audit e notarizzazione quando servono compliance, trasparenza o prova esterna.",
        },
      ],
    },
    // Services Section
    services: {
      title: "Cosa consegniamo e come crea valore.",
      subtitle:
        "Ogni servizio include scope, milestone, KPI e criteri di accettazione. Nessuna area grigia.",
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
            "Per aziende che vogliono una pipeline commerciale digitale e misurabile.",
          points: [
            "Sito vetrina o piattaforma avanzata con CMS e sezioni gestibili.",
            "Form, tracciamento eventi, analytics e attribution di base.",
            "SEO tecnica, performance e UX orientata alla conversione.",
          ],
          outcomes: [
            "Più lead qualificati e costo acquisizione più sostenibile",
            "ROI misurabile su traffico e campagne",
            "Canale digitale che supporta vendite e brand",
          ],
        },
        {
          title: "Blockchain / Web3",
          subtitle:
            "Per organizzazioni che richiedono verificabilità o settlement digitale.",
          points: [
            "Tracciabilità eventi e notarizzazione di evidenze critiche.",
            "Identità digitale, auditabilità processi e accessi firmati.",
            "Formazione e integrazione con sistemi esistenti.",
          ],
          outcomes: [
            "Maggiore trasparenza verso partner e stakeholder",
            "Riduzione del rischio operativo su processi sensibili",
            "Adozione web3 solo quando il vantaggio è concreto",
          ],
        },
      ],
    },
    // Process
    process: {
      title: "Metodo operativo, output chiari, governance semplice.",
      subtitle:
        "Ogni fase ha obiettivi, deliverable e decision gate condivisi.",
      steps: [
        {
          number: "01",
          title: "Discovery breve",
          desc: "Obiettivi, KPI, scope e vincoli. Decisioni veloci in 1-2 settimane.",
        },
        {
          number: "02",
          title: "MVP",
          desc: "Prima release usabile sui flussi core. 2-6 settimane.",
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
          desc: "Allineiamo obiettivo economico, KPI e vincoli reali.",
          metric: "Output: scope, timeline, rischi e criterio di successo.",
        },
        {
          title: "2) MVP usabile",
          desc: "Costruiamo la prima release che il team può usare subito.",
          metric: "Output: release, training veloce, feedback strutturato.",
        },
        {
          title: "3) Stabilizzazione + handover",
          desc: "Hardening, ruoli, backup, documentazione e training operativo.",
          metric: "Output: documentazione, monitoraggio e ownership condivisa.",
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
      title: "Web3 quando migliora il business, non per hype.",
      subtitle:
        "Lo usiamo solo se porta vantaggi concreti su governance, tracciabilità, auditabilità, notarizzazione o automazioni verificabili. Altrimenti restiamo su stack tradizionali.",
      useCases: "Use case tipici",
      useCasesTitle: "Quando serve prova tecnica dei dati.",
      useCasesDesc:
        "Audit, tracciabilità, notarizzazione e settlement: attiviamo web3 solo con un requisito reale.",
      conceptual:
        "Visualizzazione concettuale di flussi verificabili e auditabili.",
      digitalPayments: "Pagamenti digitali (opzionali)",
      checkoutTitle: "Checkout con wallet, quando serve",
      checkoutDesc:
        "Integriamo wallet quando migliorano conversione internazionale, velocità di incasso o tracciabilità del pagamento.",
      wallet: "Wallet: MetaMask",
      cryptoReady: "Pronto per pagamenti crypto",
      step: "Fase",
      focus: "Focus",
      features: [
        {
          title: "Tracciabilità eventi",
          desc: "Quando ogni passaggio deve essere verificabile.",
        },
        {
          title: "Notarizzazione",
          desc: "Quando data e ora devono essere indiscutibili.",
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
        "Accesso a clienti globali con opzioni di pagamento aggiuntive.",
        "Transazioni verificabili con ricevute on-chain.",
        "Scelta pragmatica: web3 solo dove aumenta valore e controllo.",
      ],
    },
    // FAQ
    faq: {
      title: "Domande che contano davvero.",
      subtitle:
        "Budget, rischio e tempi: risposte chiare per decidere in modo informato.",
      items: [
        {
          title: "Quanto costa?",
          content:
            "Partiamo da una discovery a prezzo fisso. Poi proponiamo milestone con budget, scope e output verificabili, così il rischio economico resta sotto controllo.",
        },
        {
          title: "In quanto tempo consegnate?",
          content:
            "Discovery 1–2 settimane, MVP 2–6 settimane. I tempi dipendono da complessità e disponibilità dei dati.",
        },
        {
          title: "E se poi serve assistenza?",
          content:
            "Offriamo manutenzione con monitoraggio o handover completo con documentazione e training. Scegliete voi il livello di autonomia.",
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
      title: "Valutiamo allineamento, impatto e priorità in una call.",
      subtitle:
        "20 minuti gratuiti: capiamo obiettivi, vincoli e ROI atteso. Se non c'è allineamento, lo diciamo subito.",
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
        "Costruiamo gestionali, siti web e soluzioni web3 con impatto misurabile su efficienza, acquisizione e controllo operativo.",
      copyright: "© {year} Arras Industries",
      sections: "Sezioni",
      contacts: "Contatti",
      email: "arras.industries.info@gmail.com",
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
      method: "Metodo di donazione",
      metaMaskMode: "MetaMask",
      payPalMode: "PayPal",
      supportedWallets: "Wallet supportati",
      sendMetaMask: "Invia con MetaMask",
      sendPayPal: "Dona con PayPal",
      selectedNetwork: "Rete selezionata",
      paypalCurrency: "PayPal in EUR",
      paypalDesc:
        "Dona in modo rapido con PayPal. L'importo viene inviato in EUR.",
      transparency: "Trasparenza totale",
      transparencyDesc:
        "Tutte le donazioni sono pubbliche e tracciabili on‑chain.",
      destinationWallet: "MetaMask Arras",
      errors: {
        noMetaMask: "MetaMask non trovato. Installa l'estensione e riprova.",
        ethOnly: "Demo: solo ETH. I token ERC20 verranno aggiunti in seguito.",
        invalidAmount: "Inserisci un importo valido.",
        txSent: "Transazione inviata. Grazie per il supporto.",
        txFailed: "Transazione annullata o non riuscita.",
        networkAdd: "Impossibile aggiungere la rete selezionata.",
        networkSwitch: "Cambio rete annullato.",
        paypalConfig:
          "Link PayPal non configurato. Imposta VITE_PAYPAL_DONATION_URL.",
        paypalRedirect:
          "PayPal aperto in una nuova scheda. Completa il pagamento lì.",
        paypalBlocked:
          "Popup bloccato dal browser. Consenti i popup per questo sito e riprova.",
      },
    },
  },
  en: {
    // Navigation and Header
    nav: {
      services: "Services",
      about: "About us",
      path: "Path",
      process: "Process",
      innovation: "Innovation",
      faq: "FAQ",
      letsTalk: "Let's talk",
    },
    // Hero Section
    hero: {
      words: ["management systems", "websites", "web3"],
      subtitle:
        "Management systems, websites, and web3 solutions designed around clear business outcomes: lower operating costs, more qualified leads, and more reliable processes. Fast delivery, tracked KPIs, measurable results.",
      requestCall: "Request a call",
      quote2:
        "Our work is done when your team uses it without thinking about it.",
      imageAlt: "Management system mockup",
    },
    // Values Section
    values: {
      title: "What we build",
      subtitle: "Solutions with measurable impact",
      values: [
        {
          title: "Custom management systems",
          desc: "Backoffice, orders, shifts, and inventory in one workflow: fewer errors, more control, and data-driven decisions.",
        },
        {
          title: "Websites & digital presence",
          desc: "Conversion-oriented websites: performance, technical SEO, analytics, and funnels that turn traffic into real opportunities.",
        },
        {
          title: "Web3 & blockchain",
          desc: "We integrate web3 only where it creates real advantage: traceability, notarization, digital identity, and verifiable payments.",
        },
      ],
    },
    // Section Bridge
    sectionBridge: {
      pillars: {
        eyebrow: "Three areas, one method",
        title: "First we measure impact and risk, then we write code.",
        subtitle:
          "Management system, website, or web3: we choose the stack with the best ROI-time-complexity ratio.",
      },
      fromStrategy: {
        eyebrow: "From strategy to release",
        title: "Strategy, delivery, and metrics aligned.",
        subtitle:
          "Below you will find services, outputs, and expected results for each area.",
      },
    },
    // Three Areas
    threeAreas: {
      title: "Three concrete areas, three measurable results.",
      description:
        "Internal operations, digital presence, and traceability: we choose the area where impact is most needed, without unnecessary complexity.",
      features: [
        {
          title: "Operational efficiency",
          desc: "Management systems and automations to cut costs, errors, and response times.",
        },
        {
          title: "Digital acquisition",
          desc: "Websites and funnels that turn visits into qualified leads and opportunities.",
        },
        {
          title: "Trust and verification",
          desc: "Audits and notarization when compliance, transparency, or external proof is required.",
        },
      ],
    },
    // Services Section
    services: {
      title: "What we deliver and how it creates value.",
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
            "For companies that need a measurable digital sales pipeline.",
          points: [
            "Showcase website or advanced platform with manageable sections.",
            "Forms, event tracking, analytics, and basic attribution.",
            "Technical SEO, performance, and conversion-oriented UX.",
          ],
          outcomes: [
            "More qualified inbound leads and healthier acquisition costs",
            "Measurable ROI across traffic and campaigns",
            "A digital channel that supports sales and brand",
          ],
        },
        {
          title: "Blockchain / Web3",
          subtitle:
            "For organizations that require verifiability or digital settlement.",
          points: [
            "Event traceability and notarization of critical evidence.",
            "Digital identity, process auditability, and signed access flows.",
            "Training and integration with existing systems.",
          ],
          outcomes: [
            "Greater transparency for partners and stakeholders",
            "Lower operational risk on sensitive processes",
            "Web3 adoption only when the business case is concrete",
          ],
        },
      ],
    },
    // Process
    process: {
      title: "Operational method, clear outputs, simple governance.",
      subtitle:
        "Each phase has shared goals, deliverables, and decision gates.",
      steps: [
        {
          number: "01",
          title: "Short discovery",
          desc: "Objectives, KPIs, scope, and constraints. Fast decisions in 1-2 weeks.",
        },
        {
          number: "02",
          title: "MVP",
          desc: "First usable release on core flows. 2-6 weeks.",
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
          desc: "We align on business objective, KPIs, and real constraints.",
          metric: "Output: scope, timeline, risks, and success criteria.",
        },
        {
          title: "2) Usable MVP",
          desc: "We build the first release your team can use right away.",
          metric: "Output: release, quick training, structured feedback.",
        },
        {
          title: "3) Stabilization + handover",
          desc: "Hardening, roles, backups, documentation, and operational training.",
          metric: "Output: documentation, monitoring, and shared ownership.",
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
      title: "Web3 when it improves the business, not for hype.",
      subtitle:
        "We use it only if it brings concrete advantages for governance, traceability, auditability, notarization, or verifiable automations. Otherwise, we stick to traditional stacks.",
      useCases: "Typical use cases",
      useCasesTitle: "When technical proof of data is required.",
      useCasesDesc:
        "Audits, traceability, notarization, and settlement: we activate web3 only with a real requirement.",
      conceptual: "Conceptual visualization of verifiable and auditable flows.",
      digitalPayments: "Digital payments (optional)",
      checkoutTitle: "Checkout with wallet, when needed",
      checkoutDesc:
        "We integrate wallets when they improve international conversion, settlement speed, or payment traceability.",
      wallet: "Wallet: MetaMask",
      cryptoReady: "Crypto-ready",
      step: "Step",
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
        "Access to global customers with additional payment options.",
        "Verifiable transactions with on-chain receipts.",
        "Pragmatic choice: web3 only where it increases value and control.",
      ],
    },
    // FAQ
    faq: {
      title: "Questions that really matter.",
      subtitle:
        "Budget, risk, and timelines: clear answers for informed decisions.",
      items: [
        {
          title: "How much does it cost?",
          content:
            "We start with a fixed-price discovery. Then we propose milestones with budget, scope, and verifiable outputs, so financial risk stays controlled.",
        },
        {
          title: "How long to deliver?",
          content:
            "Discovery 1–2 weeks, MVP 2–6 weeks. Timeline depends on complexity and data availability.",
        },
        {
          title: "What if we need support later?",
          content:
            "We offer maintenance with monitoring, or full handover with documentation and training. You choose your autonomy level.",
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
      title: "Let's evaluate fit, impact, and priorities in one call.",
      subtitle:
        "Free 20-minute call: we align on goals, constraints, and expected ROI. If there is no fit, we say it clearly.",
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
        "We build management systems, websites, and web3 solutions with measurable impact on efficiency, acquisition, and operational control.",
      copyright: "© {year} Arras Industries",
      sections: "Sections",
      contacts: "Contacts",
      email: "arras.industries.info@gmail.com",
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
      method: "Donation method",
      metaMaskMode: "MetaMask",
      payPalMode: "PayPal",
      supportedWallets: "Supported wallets",
      sendMetaMask: "Send with MetaMask",
      sendPayPal: "Donate with PayPal",
      selectedNetwork: "Selected network",
      paypalCurrency: "PayPal in EUR",
      paypalDesc:
        "Donate quickly with PayPal. The entered amount is sent in EUR.",
      transparency: "Total transparency",
      transparencyDesc: "All donations are public and traceable on-chain.",
      destinationWallet: "MetaMask Arras",
      errors: {
        noMetaMask: "MetaMask not found. Install the extension and try again.",
        ethOnly: "Demo: ETH only. ERC20 tokens will be added later.",
        invalidAmount: "Enter a valid amount.",
        txSent: "Transaction sent. Thank you for your support.",
        txFailed: "Transaction cancelled or failed.",
        networkAdd: "Unable to add the selected network.",
        networkSwitch: "Network switch cancelled.",
        paypalConfig:
          "PayPal link is not configured. Set VITE_PAYPAL_DONATION_URL.",
        paypalRedirect:
          "PayPal opened in a new tab. Complete the payment there.",
        paypalBlocked:
          "Popup blocked by the browser. Allow popups for this site and try again.",
      },
    },
  },
};
