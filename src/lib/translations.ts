export type Language = "it" | "en";

export const translations = {
  it: {
    // Navigation and Header
    nav: {
      services: "Servizi",
      management: "Gestionali",
      websites: "Siti web",
      about: "Chi siamo",
      portfolio: "Portfolio",
      path: "Metodo",
      process: "Processo",
      innovation: "Web3",
      support: "Supporto",
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
          subtitle: "Per chi lavora ancora tra fogli Excel, email e doppi inserimenti.",
          points: [
            "Ordini, magazzino, turni e clienti in un unico pannello.",
            "Si collega a ciò che usate già: POS, fatturazione, email.",
            "Ruoli, permessi, log e backup inclusi.",
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
            "Per aziende che vogliono un sito che porti richieste, non solo visite.",
          points: [
            "Siti veloci, curati e semplici da aggiornare.",
            "SEO tecnica e struttura pensata per farsi trovare.",
            "Form, analytics e tracciamento già configurati.",
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
            "Quando serve una prova che nessuno può alterare.",
          points: [
            "Notarizzazione di documenti ed eventi.",
            "Tracciabilità di filiera e di processo.",
            "Smart contract e wallet integrati nei vostri sistemi.",
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
          title: "Analisi",
          desc: "Capiamo come lavorate oggi, cosa non funziona e cosa serve davvero. Ne esce un piano con priorità e costi chiari.",
          duration: "1–2 settimane",
        },
        {
          number: "02",
          title: "Prima versione",
          desc: "Una versione funzionante sui flussi principali, che il team può iniziare a usare subito.",
          duration: "2–6 settimane",
        },
        {
          number: "03",
          title: "Messa in sicurezza",
          desc: "Ruoli e permessi, backup, documentazione e formazione per chi lo userà.",
          duration: "Prima del go-live",
        },
        {
          number: "04",
          title: "Evoluzione",
          desc: "Miglioriamo il software in base a come viene usato davvero, non a ipotesi fatte all'inizio.",
          duration: "Continuativa",
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
      title: "Raccontaci il progetto.",
      subtitle:
        "Una call di 20 minuti, gratuita. Ci spieghi di cosa hai bisogno e ti diciamo con franchezza se e come possiamo aiutarti.",
      responseTime: "Rispondiamo entro 1–2 giorni lavorativi.",
      formLabels: {
        name: "Nome",
        activity: "Azienda o settore",
        contact: "Email o telefono",
        objective: "Di cosa hai bisogno?",
      },
      formPlaceholders: {
        name: "Mario Rossi",
        activity: "Es. studio tecnico, ristorante, e-commerce…",
        contact: "nome@azienda.it",
        objective: "Es. oggi gestiamo ordini e magazzino su Excel e vorremmo un gestionale collegato al sito…",
      },
      evaluate: "Prenota una call gratuita",
    },
    // Footer
    footer: {
      company: "Arras Industries",
      description:
        "Studio di ingegneria software. Progettiamo e sviluppiamo gestionali, siti web e integrazioni blockchain per aziende.",
      copyright: "© {year} Arras Industries",
      sections: "Sezioni",
      contacts: "Contatti",
      email: "arras.industries.info@gmail.com",
      phone: "+39 334 116 8370",
      location: "Italia · lavoriamo da remoto",
    },
    // Support Section
    support: {
      title: "Sostieni la nostra ricerca",
      subtitle:
        "Una parte del nostro tempo va in prototipi e progetti open source. Se il nostro lavoro ti è utile, puoi contribuire.",
      amount: "Importo",
      network: "Rete",
      token: "Token",
      method: "Metodo di donazione",
      metaMaskMode: "Wallet",
      payPalMode: "PayPal",
      supportedWallets: "Compatibilità",
      sendMetaMask: "Invia con wallet",
      sendPayPal: "Dona con PayPal",
      selectedNetwork: "Rete selezionata",
      paypalCurrency: "PayPal in EUR",
      paypalDesc:
        "Dona in modo rapido con PayPal. L'importo viene inviato in EUR.",
      transparency: "Trasparenza",
      transparencyDesc:
        "Tutte le donazioni sono pubbliche e tracciabili on‑chain.",
      destinationWallet: "Indirizzi on-chain",
      errors: {
        noMetaMask:
          "Wallet non rilevato. Se usi MetaMask, installa l'estensione e riprova.",
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
      management: "Management",
      websites: "Websites",
      about: "About us",
      portfolio: "Portfolio",
      path: "Approach",
      process: "Process",
      innovation: "Web3",
      support: "Support",
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
          subtitle: "For teams still juggling spreadsheets, email and double data entry.",
          points: [
            "Orders, inventory, shifts and clients in one place.",
            "Connects to what you already use: POS, invoicing, email.",
            "Roles, permissions, logs and backups included.",
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
            "For companies that want a website that brings enquiries, not just visits.",
          points: [
            "Fast, well-crafted sites that are easy to update.",
            "Technical SEO and a structure built to be found.",
            "Forms, analytics and tracking set up from day one.",
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
            "When you need proof that nobody can tamper with.",
          points: [
            "Notarization of documents and events.",
            "Supply-chain and process traceability.",
            "Smart contracts and wallets wired into your systems.",
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
          title: "Analysis",
          desc: "We learn how you work today, what is broken and what you actually need. You get a plan with clear priorities and costs.",
          duration: "1–2 weeks",
        },
        {
          number: "02",
          title: "First version",
          desc: "A working version of the core workflows that your team can start using right away.",
          duration: "2–6 weeks",
        },
        {
          number: "03",
          title: "Hardening",
          desc: "Roles and permissions, backups, documentation and training for the people who will use it.",
          duration: "Before go-live",
        },
        {
          number: "04",
          title: "Evolution",
          desc: "We improve the software based on how it is really used, not on assumptions made at the start.",
          duration: "Ongoing",
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
      title: "Tell us about your project.",
      subtitle:
        "A free 20-minute call. You tell us what you need, and we tell you honestly whether and how we can help.",
      responseTime: "We reply within 1–2 business days.",
      formLabels: {
        name: "Name",
        activity: "Company or industry",
        contact: "Email or phone",
        objective: "What do you need?",
      },
      formPlaceholders: {
        name: "John Smith",
        activity: "E.g. engineering firm, restaurant, e-commerce…",
        contact: "name@company.com",
        objective: "E.g. we track orders and stock in spreadsheets and want software connected to our website…",
      },
      evaluate: "Book a free call",
    },
    // Footer
    footer: {
      company: "Arras Industries",
      description:
        "Software engineering studio. We design and build management software, websites and blockchain integrations for companies.",
      copyright: "© {year} Arras Industries",
      sections: "Sections",
      contacts: "Contacts",
      email: "arras.industries.info@gmail.com",
      phone: "+39 334 116 8370",
      location: "Italy · working remotely",
    },
    // Support Section
    support: {
      title: "Support our research",
      subtitle:
        "Part of our time goes into prototypes and open-source projects. If our work is useful to you, you can contribute.",
      amount: "Amount",
      network: "Network",
      token: "Token",
      method: "Donation method",
      metaMaskMode: "Wallet",
      payPalMode: "PayPal",
      supportedWallets: "Compatibility",
      sendMetaMask: "Send with wallet",
      sendPayPal: "Donate with PayPal",
      selectedNetwork: "Selected network",
      paypalCurrency: "PayPal in EUR",
      paypalDesc:
        "Donate quickly with PayPal. The entered amount is sent in EUR.",
      transparency: "Transparency",
      transparencyDesc: "All donations are public and traceable on-chain.",
      destinationWallet: "On-chain addresses",
      errors: {
        noMetaMask:
          "No wallet detected. If you use MetaMask, install the extension and try again.",
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
