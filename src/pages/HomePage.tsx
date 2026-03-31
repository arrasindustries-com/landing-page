import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
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
import { InputLike } from "@/components/Input/InputLike";
import { SupportSection } from "@/components/SupportUs";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { openWhatsApp, scrollToId } from "@/lib/utils";
import type { ContactRequest } from "@/types/types";
import { ServiceVisual } from "@/components/Visual/ServiceVisual";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function HomePage() {
  const { t, language } = useLanguage();
  const [contactForm, setContactForm] = useState<ContactRequest>({
    name: "",
    activity: "",
    contact: "",
    objective: "",
  });

  const setContactField = (
    field: "name" | "activity" | "contact" | "objective",
    value: string,
  ) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");
  const canonicalUrl = `${siteOrigin}/`;
  const isItalian = language === "it";

  usePageSeo({
    titleIt: "Arras Industries | Software gestionali, siti web e web3",
    titleEn: "Arras Industries | Management Software, Websites, Web3",
    descriptionIt:
      "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari, KPI tracciati e risultati misurabili.",
    descriptionEn:
      "Arras Industries builds management software, high-performance websites, and web3 solutions for SMBs with clear goals, tracked KPIs, and measurable outcomes.",
    keywordsIt: [
      "software gestionale su misura",
      "sviluppo software per PMI",
      "sviluppo siti web aziendali",
      "seo tecnico siti web",
      "automazione processi aziendali",
      "integrazioni blockchain e web3",
      "sviluppo applicazioni web business",
      "consulenza software Italia",
    ],
    keywordsEn: [
      "custom management software",
      "SMB software development",
      "business website development",
      "technical SEO services",
      "business process automation software",
      "blockchain and web3 integration",
      "custom web application development",
      "IT consulting for SMBs",
    ],
    path: "/",
    jsonLd: [
      {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: "Arras Industries",
        url: canonicalUrl,
        logo: `${siteOrigin}/favicon-1-arc-reactor-512px.png`,
        email: "arras.industries.info@gmail.com",
        telephone: "+39 334 116 8370",
      },
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: "Arras Industries",
        inLanguage: isItalian ? "it-IT" : "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#service`,
        name: "Arras Industries",
        url: canonicalUrl,
        serviceType: isItalian
          ? [
              "Sviluppo software gestionale",
              "Sviluppo siti web",
              "Integrazioni web3",
            ]
          : [
              "Management software development",
              "Website development",
              "Web3 integrations",
            ],
        areaServed: "IT",
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: t.faq.items.map((faq) => ({
          "@type": "Question",
          name: faq.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.content,
          },
        })),
      },
    ],
  });

  const heroCopy = isItalian
    ? {
        eyebrow: "Software per PMI che vogliono ordine, velocità e controllo",
        title: "Costruiamo strumenti digitali che semplificano i processi.",
        body: "Gestionale, sito o layer web3: partiamo da obiettivi operativi chiari, definiamo cosa deve cambiare davvero e consegniamo una soluzione che resta leggibile, usabile e misurabile.",
        primary: "Prenota una call",
        secondary: "Esplora i servizi",
        note: "Discovery breve, scope chiaro, rilascio misurabile.",
        panelTitle: "Dove interveniamo di solito",
        panelPoints: [
          "Processi manuali che rallentano il team.",
          "Siti che spiegano molto ma convertono poco.",
          "Requisiti di tracciabilità o audit che richiedono evidenze tecniche.",
        ],
      }
    : {
        eyebrow: "Software for SMBs that need order, speed, and control",
        title: "We build digital tools that simplify operations.",
        body: "Management software, websites, or web3 layers: we start from operational goals, define what actually needs to change, and deliver something that stays readable, usable, and measurable.",
        primary: "Book a call",
        secondary: "Explore services",
        note: "Short discovery, clear scope, measurable release.",
        panelTitle: "Where we usually intervene",
        panelPoints: [
          "Manual processes that slow teams down.",
          "Websites that explain a lot but convert little.",
          "Traceability or audit requirements that need technical evidence.",
        ],
      };

  const credibility = isItalian
    ? [
        { label: "Discovery", value: "1-2 settimane" },
        { label: "Prima release", value: "2-6 settimane" },
        { label: "Focus", value: "ROI operativo" },
      ]
    : [
        { label: "Discovery", value: "1-2 weeks" },
        { label: "First release", value: "2-6 weeks" },
        { label: "Focus", value: "Operational ROI" },
      ];

  const operatingPrinciples = isItalian
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
          desc: "Hours saved, qualified leads, fewer errors, lower response times. Metrics are agreed upfront.",
        },
      ];

  const serviceLinks = ["/gestionali", "/siti-web", "/web3"];

  const impactHighlights = t.threeAreas.features.map((feature, index) => ({
    step: `0${index + 1}`,
    title: feature.title,
    desc: feature.desc,
  }));

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 md:pb-28 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {heroCopy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              {heroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {heroCopy.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToId("contatto")}>
                {heroCopy.primary} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => scrollToId("servizi")}>
                {heroCopy.secondary}
              </Button>
            </div>

            <p className="mt-5 text-sm text-[var(--text-soft)]">
              {heroCopy.note}
            </p>

            <div className="mt-10 grid overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)] sm:grid-cols-3">
              {credibility.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-[var(--border)] px-5 py-4 first:border-t-0 sm:border-t-0 sm:border-l first:sm:border-l-0"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                    {item.label}
                  </div>
                  <div className="mt-2 text-lg font-semibold text-[var(--text)]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] md:p-6"
          >
            <ServiceVisual
              variant="overview"
              className="h-[320px] md:h-[360px]"
            />
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                {heroCopy.panelTitle}
              </p>
              <div className="mt-5 space-y-4">
                {heroCopy.panelPoints.map((point, index) => (
                  <div
                    key={point}
                    className="flex items-start gap-4 border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-6 text-[var(--text-muted)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="storia" className="mx-auto max-w-7xl px-4 pb-24 md:pb-28">
        <motion.div
          {...reveal}
          className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {isItalian ? "Metodo" : "Approach"}
            </p>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight md:text-5xl">
              {isItalian
                ? "Un’impostazione più vicina a uno studio tecnico che a una vetrina piena di effetti."
                : "A delivery model that feels closer to a technical studio than to a flashy showcase."}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--text-muted)]">
              {isItalian
                ? "Lavoriamo bene quando il problema è concreto: dati sparsi, procedure lente, sito che non sostiene il commerciale, requisito di verifica esterna. L’obiettivo è togliere attrito, non aggiungere interfacce rumorose."
                : "We do our best work when the problem is concrete: scattered data, slow procedures, a website that does not support sales, or the need for external verification. The goal is to remove friction, not add noisy interfaces."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {operatingPrinciples.map((item) => (
              <Card key={item.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-4 pb-24 md:pb-28">
        <motion.div
          {...reveal}
          className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {t.nav.services}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] lg:justify-self-end">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.services.services.map((service, index) => (
            <motion.article key={service.title} {...reveal}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    0{index + 1}
                  </p>
                  <CardTitle className="mt-3 text-3xl">
                    {service.title}
                  </CardTitle>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {service.subtitle}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--text)]" />
                        <p className="text-sm leading-6 text-[var(--text-muted)]">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-[var(--border)] pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                      {t.services.result}
                    </p>
                    <div className="mt-3 space-y-2">
                      {service.outcomes.map((outcome) => (
                        <p
                          key={outcome}
                          className="text-sm leading-6 text-[var(--text)]"
                        >
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={serviceLinks[index]}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-opacity hover:opacity-70"
                    >
                      {isItalian ? "Vai al dettaglio" : "View service detail"}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="processo" className="mx-auto max-w-7xl px-4 pb-24 md:pb-28">
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

      <section
        id="innovazione"
        className="mx-auto max-w-7xl px-4 pb-24 md:pb-28"
      >
        <motion.div
          {...reveal}
          className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <Card className="bg-[var(--surface-strong)]">
            <CardHeader>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                Web3
              </p>
              <CardTitle className="mt-4 text-4xl">
                {t.innovation.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="max-w-xl text-sm leading-8 text-[var(--text-muted)]">
                {t.innovation.subtitle}
              </p>
              <div className="mt-8 space-y-4 border-t border-[var(--border)] pt-6">
                {t.innovation.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="grid gap-2 border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0 md:grid-cols-[0.8fr_1.2fr]"
                  >
                    <div className="text-base font-semibold text-[var(--text)]">
                      {feature.title}
                    </div>
                    <p className="text-sm leading-6 text-[var(--text-muted)]">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="self-center overflow-hidden rounded-[22px] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
            {impactHighlights.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 border-t border-[var(--border)] px-6 py-6 first:border-t-0 md:grid-cols-[72px_1fr]"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 pb-24 md:pb-28">
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

      <SupportSection />

      <section id="contatto" className="mx-auto max-w-7xl px-4 pb-8 md:pb-10">
        <motion.div {...reveal}>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10 md:p-10">
              <div className="flex h-full flex-col">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                    {isItalian ? "Contatto" : "Contact"}
                  </p>
                  <h2 className="mt-4 max-w-md text-4xl md:text-5xl">
                    {t.contact.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-8 text-[var(--text-muted)]">
                    {t.contact.subtitle}
                  </p>
                </div>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                      {isItalian ? "Input utile" : "Helpful input"}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                      {isItalian
                        ? "Descrivi il problema operativo, i vincoli e ciò che oggi rallenta il team. Non serve avere già la soluzione."
                        : "Describe the operational problem, the constraints, and what is slowing the team down today. You do not need to have the solution already."}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        {isItalian ? "Tempi" : "Timing"}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        {t.contact.responseTime}
                      </p>
                    </div>
                    <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        {isItalian ? "Formato" : "Format"}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        {isItalian
                          ? "Messaggio breve e diretto. Poi, se serve, approfondiamo in call."
                          : "A short and direct message. If needed, we go deeper in the call."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-center rounded-[20px] border border-[var(--border)] bg-[var(--surface-strong)] p-5 md:p-6">
                <div className="grid gap-3 md:grid-cols-2">
                  <InputLike
                    label={t.contact.formLabels.name}
                    placeholder={t.contact.formPlaceholders.name}
                    value={contactForm.name}
                    onChange={(value) => setContactField("name", value)}
                  />
                  <InputLike
                    label={t.contact.formLabels.contact}
                    placeholder={t.contact.formPlaceholders.contact}
                    value={contactForm.contact}
                    onChange={(value) => setContactField("contact", value)}
                  />
                  <div className="md:col-span-2">
                    <InputLike
                      label={t.contact.formLabels.activity}
                      placeholder={t.contact.formPlaceholders.activity}
                      value={contactForm.activity}
                      onChange={(value) => setContactField("activity", value)}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <InputLike
                      label={t.contact.formLabels.objective}
                      placeholder={t.contact.formPlaceholders.objective}
                      value={contactForm.objective}
                      onChange={(value) => setContactField("objective", value)}
                      tall
                    />
                  </div>
                </div>

                <div className="mt-6 border-t border-[var(--border)] pt-6">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                      {isItalian
                        ? "Più il contesto è concreto, più velocemente possiamo dirti se esiste allineamento tra obiettivo, budget e tempi."
                        : "The more concrete the context, the faster we can tell you whether there is alignment between objective, budget, and timing."}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button onClick={() => openWhatsApp(contactForm, language)}>
                        {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => scrollToId("servizi")}
                      >
                        {t.nav.services}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8">
            <Footer />
          </div>
        </motion.div>
      </section>
    </>
  );
}
