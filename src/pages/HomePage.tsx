import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Footer } from "@/components/Footer";
import { InputLike } from "@/components/Input/InputLike";
import { SupportSection } from "@/components/SupportUs";
import { StopMotion } from "@/components/Visual/StopMotion";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { openWhatsApp, scrollToId } from "@/lib/utils";
import type { ContactRequest } from "@/types/types";

const HOME_FRAMES = [
  "/assets/home/Home_1.png",
  "/assets/home/Home_2.png",
  "/assets/home/Home_3.png",
  "/assets/home/Home_4.png",
  "/assets/home/Home_5.png",
  "/assets/home/Home_6.png",
  "/assets/home/Home_7.png",
  "/assets/home/Home_8.png",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
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
        body: "Gestionali, siti o layer web3: partiamo da obiettivi operativi chiari, definiamo cosa deve cambiare davvero e consegniamo una soluzione leggibile, usabile e misurabile.",
        primary: "Prenota una call",
        secondary: "Scopri il metodo",
      }
    : {
        eyebrow: "Software for SMBs that need order, speed, and control",
        title: "We build digital tools that simplify operations.",
        body: "Management software, websites, or web3 layers: we start from operational goals, define what actually needs to change, and deliver a solution that is readable, usable, and measurable.",
        primary: "Book a call",
        secondary: "See the approach",
      };

  const approachTeaser = isItalian
    ? {
        title: "Metodo operativo, decisioni chiare, rilascio misurabile.",
        body: "Allineiamo obiettivi, vincoli, scope iniziale e criteri di successo prima di sviluppare. Questo rende il progetto più leggibile, più governabile e più veloce da valutare.",
        link: "Scopri come lavoriamo",
      }
    : {
        title: "Operational method, clear decisions, measurable delivery.",
        body: "We align goals, constraints, initial scope, and success criteria before development starts. That makes the project easier to govern, easier to evaluate, and faster to move forward.",
        link: "See how we work",
      };

  const heroAreas = t.threeAreas.features.map((feature, index) => ({
    number: `0${index + 1}`,
    title: feature.title,
    desc: feature.desc,
  }));

  const serviceLinks = ["/gestionali", "/siti-web", "/web3"];
  const serviceCards = t.services.services.map((service, index) => ({
    href: serviceLinks[index],
    title: service.title,
    subtitle: service.subtitle,
    points: service.points.slice(0, 3),
    number: `0${index + 1}`,
  }));

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-18 md:px-6 md:pb-24 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
              {heroCopy.eyebrow}
            </p>
            <h1 className="mt-6 text-5xl leading-[0.94] md:text-[4.55rem]">
              {heroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {heroCopy.body}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => scrollToId("contatto")}>
                {heroCopy.primary}
              </Button>
              <Button variant="outline" onClick={() => navigate("/metodo")}>
                {heroCopy.secondary}
              </Button>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border border-[var(--border)] bg-[var(--surface-strong)]"
          >
            <div className="relative h-[320px] overflow-hidden md:h-[420px]">
              <StopMotion
                frames={HOME_FRAMES}
                alt={isItalian ? "Animazione interfaccia digitale" : "Digital interface animation"}
                className="h-full w-full"
                float={false}
                objectPosition="top"
              />
            </div>
          </motion.aside>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {heroAreas.map((item) => (
            <motion.div key={item.number} {...reveal}>
              <Card className="h-full bg-[var(--surface-strong)]">
                <div className="p-6">
                  <div className="text-4xl leading-none text-[var(--accent)]/70">
                    {item.number}
                  </div>
                  <h2 className="mt-5 text-[2rem] leading-tight md:text-[2.1rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                    {item.desc}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="servizi" className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <motion.div {...reveal} className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl leading-tight md:text-6xl">
            {isItalian
              ? "Tre aree di lavoro, tre modi concreti per creare valore."
              : "Three areas of work, three concrete ways to create value."}
          </h2>
        </motion.div>

        <motion.div
          {...reveal}
          className="mt-12 border-t border-[var(--border)] md:grid md:grid-cols-3"
        >
          {serviceCards.map((service, index) => (
            <article
              key={service.title}
              className={[
                "px-0 py-6 md:px-8 md:py-8",
                index > 0 ? "border-t border-[var(--border)] md:border-l md:border-t-0" : "",
              ].join(" ")}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                {service.number}
              </p>
              <h3 className="mt-3 text-[2rem] leading-tight">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]">
                {service.subtitle}
              </p>

              <div className="mt-5 space-y-3">
                {service.points.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--text)]" />
                    <p className="text-sm leading-6 text-[var(--text-muted)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to={service.href}
                className="mt-8 inline-flex items-center gap-2 border-b border-[var(--border-strong)] pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text)] transition-colors hover:text-[var(--accent-strong)]"
              >
                {isItalian ? "Approfondisci il servizio" : "Explore the service"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-[#11110f] py-22 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_42%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div {...reveal} className="relative z-10">
            <h2 className="max-w-xl text-4xl leading-tight text-[#f5f0e6] md:text-6xl">
              {approachTeaser.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#d2c6b7]">
              {approachTeaser.body}
            </p>
            <div className="mt-8">
              <Link
                to="/metodo"
                className="inline-flex items-center gap-2 border border-[#f0eadf] bg-[#f0eadf] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#11110f] transition-colors hover:bg-white"
              >
                {approachTeaser.link}
              </Link>
            </div>
          </motion.div>

          <motion.div {...reveal} className="relative z-10">
            {t.process.steps.map((step, index) => (
              <div
                key={step.number}
                className={[
                  "grid gap-4 border-[#3b3832] py-5 md:grid-cols-[84px_1fr] md:gap-6",
                  index > 0 ? "border-t" : "",
                ].join(" ")}
              >
                <div className="text-5xl leading-none text-[#c2a777]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[2rem] leading-tight text-[#f5f0e6]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#c8bcaf]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SupportSection />

      <section id="contatto" className="mx-auto max-w-7xl px-4 pb-10 pt-20 md:px-6 md:pb-14">
        <motion.div {...reveal}>
          <Card className="bg-[var(--surface)]">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
              <div className="min-w-0 flex flex-col gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
                    {isItalian ? "Contatto" : "Contact"}
                  </p>
                  <h2 className="mt-4 text-4xl leading-tight md:text-5xl">
                    {t.contact.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                    {t.contact.subtitle}
                  </p>
                </div>

                <div className="grid gap-3">
                  <div className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
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
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                        {isItalian ? "Tempi" : "Timing"}
                      </div>
                      <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                        {t.contact.responseTime}
                      </p>
                    </div>
                    <div className="border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
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
