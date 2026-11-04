import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

export default function Web3Page() {
  const { language } = useLanguage();
  const isIt = language === "it";
  const blockchainFrames = [
    "/assets/blockchain/Blockchain_1.png",
    "/assets/blockchain/Blockchain_2.png",
    "/assets/blockchain/Blockchain_3.png",
    "/assets/blockchain/Blockchain_4.png",
    "/assets/blockchain/Blockchain_5.png",
    "/assets/blockchain/Blockchain_6.png",
    "/assets/blockchain/Blockchain_7.png",
    "/assets/blockchain/Blockchain_8.png",
  ];

  const content: ServicePageContent = {
    seo: {
      titleIt:
        "Soluzioni Blockchain e Web3 per Aziende | Arras Industries",
      titleEn:
        "Blockchain & Web3 Solutions for Business | Arras Industries",
      descriptionIt:
        "Integriamo blockchain e web3 nelle aziende italiane: tracciabilità di filiera, notarizzazione documenti, identità digitale e automazioni verificabili.",
      descriptionEn:
        "We integrate blockchain and web3 into businesses: supply chain traceability, document notarization, digital identity, and verifiable automations.",
      keywordsIt: [
        "soluzioni blockchain per aziende",
        "integrazioni web3 per imprese",
        "tracciabilità blockchain",
        "notarizzazione documentale blockchain",
        "identità digitale decentralizzata",
        "smart contract per processi aziendali",
        "integrazione wallet aziendale",
      ],
      keywordsEn: [
        "blockchain solutions for businesses",
        "web3 integration services",
        "blockchain traceability systems",
        "document notarization on blockchain",
        "digital identity solutions",
        "smart contract development for business",
        "wallet integration for platforms",
      ],
      path: "/web3",
      ogImagePath: blockchainFrames[0],
      jsonLd: [
        {
          "@type": "Service",
          "@id": "https://arrasindustries.com/web3#service",
          name: isIt
            ? "Soluzioni Blockchain e Web3"
            : "Blockchain & Web3 Solutions",
          description: isIt
            ? "Integrazione blockchain e web3 per aziende: tracciabilità, notarizzazione e automazioni verificabili."
            : "Blockchain and web3 integration for businesses: traceability, notarization, and verifiable automations.",
          provider: {
            "@type": "Organization",
            "@id": "https://arrasindustries.com/#organization",
          },
          serviceType: isIt
            ? "Integrazioni blockchain e web3"
            : "Blockchain and web3 integrations",
          areaServed: "IT",
          url: "https://arrasindustries.com/web3",
        },
      ],
    },
    theme: {
      accent: "#8B5CF6",
      accentLight: "#A78BFA",
      accentGlow: "rgba(139,92,246,0.35)",
    },
    hero: {
      icon: <Sparkles className="h-4 w-4" />,
      eyebrow: isIt ? "Blockchain & Web3" : "Blockchain & Web3",
      title: isIt
        ? "Blockchain dove serve una prova, e solo lì."
        : "Blockchain where you need proof, and only there.",
      subtitle: isIt
        ? "Notarizzazione, tracciabilità, smart contract. Il nostro tech lead ha un dottorato su blockchain e DLT: ti diciamo anche quando non conviene usarla."
        : "Notarization, traceability, smart contracts. Our tech lead holds a PhD in blockchain and DLT, so we will also tell you when it is not worth using.",
      image: blockchainFrames[0],
      animationFrames: blockchainFrames,
      visual: "verification",
    },
    sections: isIt
      ? [
          {
            heading: "Quando la blockchain ha senso",
            body: "La blockchain non è un database migliore. Serve quando più parti devono fidarsi degli stessi dati senza fidarsi l'una dell'altra, o quando bisogna dimostrare che un documento non è stato modificato.\n\nI casi più comuni: tracciabilità di filiera, notarizzazione di documenti con data certa, registri di audit per la conformità, regole eseguite automaticamente da uno smart contract.\n\nSe il vostro caso non ha queste esigenze, ve lo diciamo e proponiamo una soluzione tradizionale, più semplice ed economica.",
          },
          {
            heading: "Cosa facciamo",
            body: "Notarizzazione, tracciabilità di eventi, identità digitale e controllo degli accessi. Integriamo wallet e pagamenti in crypto quando c'è un motivo concreto.\n\nPer ogni progetto definiamo cosa va registrato on-chain e cosa resta fuori, quale rete usare, quanto costerà ogni transazione e come si collega ai sistemi che avete già.\n\nFormiamo anche il vostro team: come leggere e verificare le prove registrate, e come gestire i casi particolari.",
          },
          {
            heading: "Come valutiamo un progetto",
            body: "Prima di sviluppare rispondiamo ad alcune domande: c'è un obbligo legale o di audit? Quanti soggetti sono coinvolti? Quante scritture al giorno? Qual è il costo massimo accettabile per transazione? Quali dati devono restare privati?\n\nAlla consegna trovate documentazione tecnica, monitoraggio e un piano di manutenzione, così il sistema resta gestibile anche dopo il rilascio.",
          },
        ]
      : [
          {
            heading: "When blockchain makes sense",
            body: "Blockchain is not a better database. It is useful when several parties need to trust the same data without trusting each other, or when you must prove a document has not been altered.\n\nThe most common cases: supply-chain traceability, document notarization with a reliable timestamp, audit trails for compliance, and rules executed automatically by a smart contract.\n\nIf your case does not need any of this, we will tell you and propose a traditional solution that is simpler and cheaper.",
          },
          {
            heading: "What we do",
            body: "Notarization, event traceability, digital identity and access control. We integrate wallets and crypto payments when there is a concrete reason.\n\nFor each project we define what goes on-chain and what stays off it, which network to use, what each transaction will cost and how it connects to the systems you already have.\n\nWe also train your team: how to read and verify the recorded proofs, and how to handle edge cases.",
          },
          {
            heading: "How we assess a project",
            body: "Before building we answer a few questions: is there a legal or audit requirement? How many parties are involved? How many writes per day? What is the maximum acceptable cost per transaction? Which data must stay private?\n\nAt handover you get technical documentation, monitoring and a maintenance plan, so the system stays manageable after release.",
          },
        ],
    useCases: {
      title: isIt ? "Casi d'uso concreti" : "Concrete use cases",
      items: isIt
        ? [
            {
              title: "Tracciabilità agroalimentare",
              description:
                "Dal campo alla tavola: ogni passaggio registrato e verificabile dal consumatore finale.",
            },
            {
              title: "Notarizzazione contratti",
              description:
                "Timestamp immutabile per contratti, accordi e documenti legali con valore probatorio.",
            },
            {
              title: "Supply chain manifatturiera",
              description:
                "Tracciamento componenti, certificazioni di origine e conformità lungo tutta la catena.",
            },
            {
              title: "Audit e conformità",
              description:
                "Trail immutabile per audit regolamentari, compliance e verifiche esterne.",
            },
            {
              title: "Identità digitale",
              description:
                "Sistemi di accesso verificabili dove ogni azione è attribuibile e dimostrabile.",
            },
            {
              title: "Pagamenti internazionali",
              description:
                "Wallet crypto per transazioni globali senza barriere valutarie, con ricevute on-chain.",
            },
          ]
        : [
            {
              title: "Food & agriculture traceability",
              description:
                "From field to table: every step recorded and verifiable by the end consumer.",
            },
            {
              title: "Contract notarization",
              description:
                "Immutable timestamp for contracts, agreements, and legal documents with evidential value.",
            },
            {
              title: "Manufacturing supply chain",
              description:
                "Component tracking, origin certifications, and compliance along the entire chain.",
            },
            {
              title: "Audit & compliance",
              description:
                "Immutable trail for regulatory audits, compliance, and external verifications.",
            },
            {
              title: "Digital identity",
              description:
                "Verifiable access systems where every action is attributable and provable.",
            },
            {
              title: "International payments",
              description:
                "Crypto wallets for global transactions without currency barriers, with on-chain receipts.",
            },
          ],
    },
    process: {
      title: isIt ? "Come lavoriamo" : "How we work",
      steps: isIt
        ? [
            {
              number: "01",
              title: "Valutazione",
              desc: "Capiamo se la blockchain serve davvero al vostro caso. Se non serve, ve lo diciamo e proponiamo un'alternativa.",
              deliverable: "Analisi di fattibilità",
            },
            {
              number: "02",
              title: "Prototipo",
              desc: "Realizziamo una prima versione su una rete di test, per provare il flusso senza costi reali.",
              deliverable: "Prototipo funzionante su testnet",
            },
            {
              number: "03",
              title: "Integrazione",
              desc: "Colleghiamo la soluzione ai vostri sistemi, la pubblichiamo sulla rete principale e formiamo il team.",
              deliverable: "Sistema in produzione e documentazione",
            },
            {
              number: "04",
              title: "Monitoraggio",
              desc: "Teniamo d'occhio transazioni, costi e funzionamento, e interveniamo quando serve.",
              deliverable: "Monitoraggio e assistenza",
            },
          ]
        : [
            {
              number: "01",
              title: "Assessment",
              desc: "We find out whether blockchain really fits your case. If it does not, we tell you and propose an alternative.",
              deliverable: "Feasibility analysis",
            },
            {
              number: "02",
              title: "Prototype",
              desc: "We build a first version on a test network, so the flow can be tried without real costs.",
              deliverable: "Working prototype on testnet",
            },
            {
              number: "03",
              title: "Integration",
              desc: "We connect the solution to your systems, deploy it on mainnet and train your team.",
              deliverable: "Production system and documentation",
            },
            {
              number: "04",
              title: "Monitoring",
              desc: "We keep an eye on transactions, costs and behaviour, and step in when needed.",
              deliverable: "Monitoring and support",
            },
          ],
    },
    faq: {
      title: isIt
        ? "Domande frequenti su blockchain e web3"
        : "Blockchain & Web3 FAQ",
      subtitle: isIt
        ? "Risposte dirette su requisiti, costi e limiti."
        : "Direct answers on requirements, costs, and limits.",
      items: isIt
        ? [
            {
              title: "Serve davvero la blockchain per la mia azienda?",
              content:
                "Forse no. La blockchain ha senso solo per tracciabilità, notarizzazione o auditabilità. Se il problema si risolve con un database tradizionale, lo diciamo subito.",
            },
            {
              title: "Quanto costa integrare la blockchain?",
              content:
                "Dipende dal caso d'uso. Un proof of concept parte da poche settimane di lavoro. Forniamo preventivo dettagliato dopo una call gratuita di valutazione.",
            },
            {
              title: "Quale blockchain usate?",
              content:
                "Scegliamo la chain più adatta al caso: Ethereum per massima sicurezza, Polygon o Arbitrum per costi ridotti, chain private per dati sensibili. La scelta è motivata, non ideologica.",
            },
            {
              title: "I miei clienti devono avere un wallet crypto?",
              content:
                "Non necessariamente. Possiamo astrarre la complessità blockchain dietro interfacce familiari. I tuoi clienti usano il sistema senza sapere che c'è una blockchain sotto.",
            },
            {
              title: "È sicuro?",
              content:
                "La blockchain è intrinsecamente sicura per design. Ma come qualsiasi tecnologia, richiede implementazione corretta. Seguiamo best practice di sicurezza e facciamo audit del codice.",
            },
          ]
        : [
            {
              title: "Does my business really need blockchain?",
              content:
                "Maybe not. Blockchain makes sense only for traceability, notarization, or auditability. If the problem can be solved with a traditional database, we say so upfront.",
            },
            {
              title: "How much does blockchain integration cost?",
              content:
                "It depends on the use case. A proof of concept starts at a few weeks of work. We provide a detailed quote after a free assessment call.",
            },
            {
              title: "Which blockchain do you use?",
              content:
                "We choose the most suitable chain for the case: Ethereum for maximum security, Polygon or Arbitrum for reduced costs, private chains for sensitive data. The choice is motivated, not ideological.",
            },
            {
              title: "Do my clients need a crypto wallet?",
              content:
                "Not necessarily. We can abstract blockchain complexity behind familiar interfaces. Your clients use the system without knowing there's a blockchain underneath.",
            },
            {
              title: "Is it secure?",
              content:
                "Blockchain is inherently secure by design. But like any technology, it requires correct implementation. We follow security best practices and audit the code.",
            },
          ],
    },
    cta: {
      title: isIt
        ? "Valutiamo insieme il tuo caso."
        : "Let's look at your use case.",
      subtitle: isIt
        ? "In 20 minuti capiamo se la blockchain risolve davvero il tuo problema, o se esiste una strada più semplice."
        : "In 20 minutes we work out whether blockchain really solves your problem, or whether there is a simpler route.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
