import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServicePageLayout, {
  type ServicePageContent,
} from "./ServicePageLayout";

export default function Web3Page() {
  const { language } = useLanguage();
  const isIt = language === "it";

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
      ogImagePath: "/images/usecase.jpg",
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
        ? "Blockchain quando serve, non per moda"
        : "Blockchain when it matters, not for trends",
      subtitle: isIt
        ? "Blockchain e web3 vengono adottati solo con requisiti chiari: verificabilità dei dati, tracciabilità condivisa o automazioni con regole non modificabili."
        : "Blockchain and web3 are used only when requirements are explicit: data verifiability, shared traceability, or automations with non-editable rules.",
      image: "/images/usecase.jpg",
    },
    sections: isIt
      ? [
          {
            heading: "Quando la blockchain ha senso per la tua azienda",
            body: "La blockchain non sostituisce ogni sistema dati. È utile quando serve una prova verificabile da terzi e non alterabile nel tempo.\n\nI casi tipici sono: tracciabilità di filiera, notarizzazione documentale con timestamp, audit trail per conformità, regole automatiche eseguite via smart contract.\n\nSe i requisiti non richiedono queste proprietà, la soluzione resta su architettura tradizionale. La scelta tecnica viene fatta su vincoli reali, non su trend.",
          },
          {
            heading: "I nostri servizi blockchain e web3",
            body: "I servizi coprono tracciabilità eventi, notarizzazione, identità digitale e controllo accessi, oltre a integrazioni wallet quando richieste da un caso operativo.\n\nOgni implementazione include modello dati, scelta rete, costi transazionali attesi, politiche di sicurezza e integrazione con sistemi esistenti.\n\nLa parte formativa è orientata al team interno: cosa viene registrato, cosa resta off-chain, come leggere evidenze e come gestire eccezioni operative.",
          },
          {
            heading: "Criteri di valutazione e output",
            body: "Prima dello sviluppo definiamo criteri di adozione: requisito legale o audit, numero attori coinvolti, frequenza scritture, limiti di costo per transazione, requisiti di privacy.\n\nL'output del progetto include documentazione tecnica, monitoraggio operativo e piano di gestione. In questo modo la soluzione resta mantenibile anche dopo il rilascio.",
          },
        ]
      : [
          {
            heading: "When blockchain makes sense for your business",
            body: "Blockchain does not replace every data system. It is useful when records must be verifiable by third parties and resistant to later edits.\n\nCommon cases are supply-chain traceability, document notarization with timestamp, compliance audit trails, and rule-based execution through smart contracts.\n\nIf those requirements are absent, traditional architecture is usually the correct choice. Technical decisions are based on constraints, not trend pressure.",
          },
          {
            heading: "Our blockchain and web3 services",
            body: "Scope includes event traceability, notarization, digital identity, access control, and wallet integrations when there is an operational need.\n\nEach implementation defines data model, network selection, expected transaction costs, security policies, and integration points with existing systems.\n\nTraining is practical: what is stored on-chain, what remains off-chain, how to verify evidence, and how to handle operational exceptions.",
          },
          {
            heading: "Evaluation criteria and deliverables",
            body: "Before development we define adoption criteria: legal or audit requirement, number of involved actors, write frequency, transaction cost limits, and privacy constraints.\n\nProject output includes technical documentation, operational monitoring, and a maintenance plan so the system remains manageable after release.",
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
              desc: "Verifichiamo se la blockchain è la scelta giusta per il tuo caso. Se no, proponiamo alternative. 1 settimana.",
            },
            {
              number: "02",
              title: "Prototipo",
              desc: "Proof of concept su testnet per validare il flusso prima di andare in produzione. 2-4 settimane.",
            },
            {
              number: "03",
              title: "Integrazione",
              desc: "Collegamento con i sistemi esistenti, deploy su mainnet e formazione del team.",
            },
            {
              number: "04",
              title: "Monitoraggio",
              desc: "Dashboard per tracciare transazioni, costi gas e performance del sistema.",
            },
          ]
        : [
            {
              number: "01",
              title: "Assessment",
              desc: "We verify if blockchain is the right choice for your case. If not, we propose alternatives. 1 week.",
            },
            {
              number: "02",
              title: "Prototype",
              desc: "Proof of concept on testnet to validate the flow before going to production. 2-4 weeks.",
            },
            {
              number: "03",
              title: "Integration",
              desc: "Connection with existing systems, mainnet deploy, and team training.",
            },
            {
              number: "04",
              title: "Monitoring",
              desc: "Dashboard to track transactions, gas costs, and system performance.",
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
        ? "Verifica preliminare del caso d'uso"
        : "Preliminary use-case assessment",
      subtitle: isIt
        ? "Call di 20 minuti per valutare requisiti, vincoli normativi, costi operativi e fattibilità."
        : "20-minute call to review requirements, compliance constraints, operational costs, and feasibility.",
      buttonText: isIt ? "Prenota una call gratuita" : "Book a free call",
    },
  };

  return <ServicePageLayout content={content} />;
}
