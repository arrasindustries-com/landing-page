import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export default function HomePage() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
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
    ],
  });

  const heroCopy = isItalian
    ? {
        eyebrow: "Software per PMI che vogliono ordine, velocità e controllo",
        title: "Costruiamo strumenti digitali che semplificano i processi.",
        body: "Gestionale, sito o layer web3: partiamo da obiettivi operativi chiari, definiamo cosa deve cambiare davvero e consegniamo una soluzione leggibile, usabile e misurabile.",
        primary: "Prenota una call",
        secondary: "Scopri il metodo",
        note: "Discovery breve, scope chiaro, rilascio misurabile.",
        panelTitle: "Dove interveniamo di solito",
      }
    : {
        eyebrow: "Software for SMBs that need order, speed, and control",
        title: "We build digital tools that simplify operations.",
        body: "Management software, websites, or web3 layers: we start from operational goals, define what actually needs to change, and deliver something readable, usable, and measurable.",
        primary: "Book a call",
        secondary: "See the approach",
        note: "Short discovery, clear scope, measurable release.",
        panelTitle: "Where we usually intervene",
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

  const approachTeaser = isItalian
    ? {
        title: "Metodo operativo, decisioni chiare, rilascio misurabile.",
        body: "Allineiamo obiettivi, vincoli, scope iniziale e criteri di successo prima di sviluppare. Questo rende il progetto più leggibile, più governabile e più veloce da valutare.",
        link: "Scopri come lavoriamo",
      }
    : {
        title: "Operational method, clear decisions, measurable delivery.",
        body: "We align on goals, constraints, initial scope, and success criteria before development starts. That makes the project easier to govern, evaluate, and move forward.",
        link: "See how we work",
      };

  const serviceLinks = ["/gestionali", "/siti-web", "/web3"];
  const serviceCards = t.services.services.map((service, index) => ({
    href: serviceLinks[index],
    number: `0${index + 1}`,
    title: service.title,
    subtitle: service.subtitle,
    points: service.points.slice(0, 2),
    outcome: service.outcomes[0],
  }));

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {heroCopy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-[2.4rem] leading-[0.95] sm:text-5xl md:text-7xl">
              {heroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {heroCopy.body}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToId("contatto")}>
                {heroCopy.primary} <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => navigate("/metodo")}>
                {heroCopy.secondary}
              </Button>
            </div>

            <p className="mt-5 text-sm text-[var(--text-soft)]">
              {heroCopy.note}
            </p>

            <div className="mt-10 grid overflow-hidden border border-[var(--border)] bg-[var(--surface)] sm:grid-cols-3">
              {credibility.map((item) => (
                <div
                  key={item.label}
                  className="border-t border-[var(--border)] px-5 py-4 first:border-t-0 sm:border-l sm:border-t-0 first:sm:border-l-0"
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
            className="overflow-hidden border border-[var(--border)] shadow-[var(--shadow)]"
          >
            <div className="relative h-[300px] overflow-hidden md:h-[340px]">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Digital engineering workspace"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover grayscale contrast-[1.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--page-bg)] via-transparent to-transparent opacity-60" />
            </div>
            <div className="bg-[var(--surface)] p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                {heroCopy.panelTitle}
              </p>
              <div className="mt-5 space-y-4">
                {t.threeAreas.features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[var(--text)]">
                        {feature.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servizi" className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div
          {...reveal}
          className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {t.sectionBridge.fromStrategy.eyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
              {isItalian
                ? "Tre aree di lavoro, tre modi concreti per creare valore."
                : "Three areas of work, three concrete ways to create value."}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text-muted)] lg:justify-self-end">
            {isItalian
              ? "Interveniamo dove il digitale può ridurre attrito operativo, migliorare l'acquisizione o introdurre requisiti di verifica e tracciabilità."
              : "We intervene where digital tools can reduce operational friction, improve acquisition, or add verification and traceability where they are required."}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <motion.article key={service.title} {...reveal}>
              <Card className="flex h-full flex-col">
                <CardHeader>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    {service.number}
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
                        <div className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--text)]" />
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
                    <p className="mt-3 text-sm leading-7 text-[var(--text)]">
                      {service.outcome}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text)] transition-opacity hover:opacity-70"
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

      {/* METHOD / PROCESS — dark section */}
      <section className="relative overflow-hidden bg-[#0f1113] py-20 md:py-24">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 relative z-10">
          <motion.div {...reveal}>
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e1c28e]">
                  {t.nav.path}
                </p>
                <h2 className="mt-4 max-w-xl text-4xl text-white md:text-5xl">
                  {approachTeaser.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
                  {approachTeaser.body}
                </p>
                <div className="mt-8">
                  <Link
                    to="/metodo"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#ffdea7] underline-offset-4 hover:underline transition-all"
                  >
                    {approachTeaser.link}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="border border-white/10">
                {t.process.steps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 border-t border-white/10 px-6 py-6 first:border-t-0 md:grid-cols-[72px_1fr] hover:bg-white/[0.03] transition-colors"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e1c28e]/60">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SupportSection />

      {/* CONTACT */}
      <section id="contatto" className="mx-auto max-w-7xl px-4 pb-10 md:pb-16">
        <motion.div {...reveal}>
          <Card>
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
              <div className="min-w-0 flex flex-col gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {isItalian ? "Contatto" : "Contact"}
                  </p>
                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl break-words">
                    {t.contact.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                    {t.contact.subtitle}
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
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
                    <div className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        {isItalian ? "Tempi" : "Timing"}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        {t.contact.responseTime}
                      </p>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
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

              <div className="min-w-0 border border-[var(--border)] bg-[var(--surface-strong)] p-5 md:p-6">
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
                  <div className="flex flex-col gap-4">
                    <p className="text-sm leading-7 text-[var(--text-muted)]">
                      {isItalian
                        ? "Più il contesto è concreto, più velocemente possiamo dirti se esiste allineamento tra obiettivo, budget e tempi."
                        : "The more concrete the context, the faster we can tell you whether there is alignment between objective, budget, and timing."}
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <Button
                        className="w-full sm:w-auto"
                        onClick={() => openWhatsApp(contactForm, language)}
                      >
                        {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto"
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
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
