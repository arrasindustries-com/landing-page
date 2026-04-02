import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function MetodoPage() {
  const { t, language } = useLanguage();
  const isItalian = language === "it";
  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");
  const canonicalUrl = `${siteOrigin}/metodo`;

  usePageSeo({
    titleIt: "Metodo | Arras Industries",
    titleEn: "Approach | Arras Industries",
    descriptionIt:
      "Scopri il metodo operativo di Arras Industries: discovery breve, MVP usabile, governance semplice e decisioni motivate per gestionali, siti web e web3.",
    descriptionEn:
      "Explore the Arras Industries delivery approach: short discovery, usable MVPs, simple governance, and grounded decisions for management software, websites, and web3.",
    keywordsIt: [
      "metodo sviluppo software",
      "discovery software PMI",
      "roadmap MVP software",
      "governance progetto digitale",
      "processo sviluppo gestionali e siti web",
    ],
    keywordsEn: [
      "software delivery approach",
      "SMB software discovery",
      "MVP roadmap planning",
      "digital project governance",
      "management software and website process",
    ],
    path: "/metodo",
    jsonLd: [
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.content,
          },
        })),
      },
    ],
  });

  const heroCopy = isItalian
    ? {
        eyebrow: "Metodo",
        title: "Prima allineiamo obiettivi, vincoli e priorità. Poi costruiamo.",
        body: "Il nostro metodo serve a rendere ogni progetto più leggibile e meno dispersivo: chiarire il problema, definire scope e vincoli, rilasciare presto e misurare l'impatto con criteri condivisi.",
        cardTitle: "Cosa allineiamo prima di partire",
        cta: "Parliamone",
      }
    : {
        eyebrow: "Approach",
        title: "First we align on goals, constraints, and priorities. Then we build.",
        body: "Our method is designed to make each project clearer and less wasteful: define the problem, frame scope and constraints, release early, and measure impact against shared criteria.",
        cardTitle: "What we align before kickoff",
        cta: "Let's talk",
      };

  const principles = isItalian
    ? [
        {
          title: "Partiamo da ciò che blocca il lavoro",
          desc: "Ogni progetto nasce da colli di bottiglia, perdita di tempo o opportunità perse. Non da trend grafici o feature decorative.",
        },
        {
          title: "Riduciamo complessità prima di aggiungere stack",
          desc: "Meno livelli inutili, meno tool scollegati, meno manutenzione opaca. La soluzione deve restare chiara anche dopo il rilascio.",
        },
        {
          title: "Misuriamo l’impatto con indicatori semplici",
          desc: "Ore risparmiate, lead qualificati, errori ridotti, tempi di risposta più bassi. Le metriche vengono concordate prima.",
        },
      ]
    : [
        {
          title: "We start from what is blocking the work",
          desc: "Every project starts from bottlenecks, wasted time, or missed commercial opportunities. Not from visual trends or decorative features.",
        },
        {
          title: "We reduce complexity before adding stack",
          desc: "Fewer unnecessary layers, fewer disconnected tools, less opaque maintenance. The solution should still feel clear after release.",
        },
        {
          title: "We measure impact with simple indicators",
          desc: "Hours saved, qualified leads, fewer errors, and lower response times. Metrics are agreed upfront.",
        },
      ];

  const alignmentChecks = isItalian
    ? [
        {
          label: "Obiettivo",
          text: "Quale costo, ritardo o opportunità stiamo cercando di correggere.",
        },
        {
          label: "Vincoli",
          text: "Budget, tempi, dati disponibili, strumenti già in uso e livelli di rischio.",
        },
        {
          label: "Scope iniziale",
          text: "Il minimo set di flussi che deve funzionare davvero nella prima release.",
        },
        {
          label: "KPI",
          text: "Indicatori semplici che dicono se il progetto sta migliorando il lavoro.",
        },
      ]
    : [
        {
          label: "Goal",
          text: "Which cost, delay, or missed opportunity we are trying to correct.",
        },
        {
          label: "Constraints",
          text: "Budget, timing, available data, existing tools, and risk level.",
        },
        {
          label: "Initial scope",
          text: "The minimum set of flows that must truly work in the first release.",
        },
        {
          label: "KPIs",
          text: "Simple indicators that tell us whether the project is improving the work.",
        },
      ];

  const decisionAreas = t.services.services.map((service, index) => ({
    href: ["/gestionali", "/siti-web", "/web3"][index],
    number: `0${index + 1}`,
    title: service.title,
    subtitle: service.subtitle,
    outcome: service.outcomes[0],
  }));

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div {...reveal} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {heroCopy.eyebrow}
            </p>
            <h1 className="mt-5 text-5xl leading-[0.95] md:text-7xl">
              {heroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {heroCopy.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/#contatto">
                <Button>
                  {heroCopy.cta} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-sm text-[var(--text-soft)]">
                {isItalian
                  ? "Pagina utile per capire se il nostro modo di lavorare è compatibile con il tuo contesto."
                  : "Useful if you want to assess whether our delivery model fits your context."}
              </p>
            </div>
          </motion.div>

          <motion.aside {...reveal}>
            <Card className="bg-[var(--surface)]">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  {heroCopy.cardTitle}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {alignmentChecks.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-3 border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0 md:grid-cols-[140px_1fr]"
                  >
                    <div className="text-sm font-semibold text-[var(--text)]">
                      {item.label}
                    </div>
                    <p className="text-sm leading-7 text-[var(--text-muted)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {isItalian ? "Principi" : "Principles"}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">
              {isItalian
                ? "Un’impostazione pensata per ridurre rumore e ambiguità."
                : "A setup designed to reduce noise and ambiguity."}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] lg:justify-self-end">
            {isItalian
              ? "Quando un progetto è impostato bene, il team capisce cosa stiamo facendo, perché lo stiamo facendo e quali decisioni restano davvero aperte."
              : "When a project is framed well, the team understands what we are doing, why we are doing it, and which decisions are still truly open."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map((item) => (
            <motion.div key={item.title} {...reveal}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div
          {...reveal}
          className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {t.nav.process}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">
              {t.process.title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
              {t.process.subtitle}
            </p>
            <div className="mt-8 rounded-[18px] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[var(--shadow)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                {isItalian ? "Governance" : "Governance"}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                {isItalian
                  ? "Ogni fase ha un output chiaro e una decisione condivisa. Questo riduce revisioni inutili e rende il progetto leggibile anche per chi non è tecnico."
                  : "Each phase has a clear output and a shared decision gate. That reduces unnecessary revisions and keeps the project readable even for non-technical stakeholders."}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            {t.process.phaseSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-t border-[var(--border)] px-6 py-6 first:border-t-0 md:grid-cols-[72px_minmax(0,1fr)_minmax(0,0.88fr)] md:gap-6"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {step.desc}
                  </p>
                </div>
                <div className="text-sm leading-7 text-[var(--text)] md:border-l md:border-[var(--border)] md:pl-6">
                  {step.metric}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div {...reveal} className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {isItalian ? "Scelta dell’area" : "Choosing the right area"}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
              {isItalian
                ? "Gestionali, siti web o web3: la scelta dipende dal tipo di attrito."
                : "Management software, websites, or web3: the choice depends on the kind of friction."}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] lg:justify-self-end">
            {isItalian
              ? "Non proponiamo la stessa risposta a problemi diversi. Prima identifichiamo il punto di impatto, poi scegliamo il formato giusto."
              : "We do not prescribe the same answer to different problems. First we identify the highest-impact friction point, then we choose the right format."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {decisionAreas.map((area) => (
            <motion.article key={area.title} {...reveal}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    {area.number}
                  </p>
                  <CardTitle className="mt-3 text-3xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm leading-7 text-[var(--text-muted)]">
                    {area.subtitle}
                  </p>
                  <div className="mt-6 border-t border-[var(--border)] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                      {t.services.result}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                      {area.outcome}
                    </p>
                  </div>
                  <div className="mt-8">
                    <Link
                      to={area.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-opacity hover:opacity-70"
                    >
                      {isItalian
                        ? "Approfondisci il servizio"
                        : "See service detail"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">{t.faq.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
              {t.faq.subtitle}
            </p>
          </div>
          <Accordion items={t.faq.items} />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <motion.div {...reveal}>
          <Card className="bg-[var(--surface-strong)]">
            <div className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                  {isItalian ? "Prossimo passo" : "Next step"}
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl">
                  {isItalian
                    ? "Se il contesto è concreto, capiamo in fretta se c’è allineamento."
                    : "If the context is concrete, we can assess fit quickly."}
                </h2>
              </div>
              <div>
                <p className="text-base leading-8 text-[var(--text-muted)]">
                  {isItalian
                    ? "Bastano un obiettivo, qualche vincolo reale e il livello di urgenza. Da lì possiamo dirti se ha senso procedere, con quale formato e con quale priorità."
                    : "A goal, a few real constraints, and the urgency level are enough. From there we can tell you whether it makes sense to proceed, in which format, and with what priority."}
                </p>
                <div className="mt-6">
                  <Link to="/#contatto">
                    <Button>
                      {isItalian ? "Prenota una call" : "Book a call"}{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
