import { motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  Laptop,
  MessageSquare,
  Shield,
  Sparkles,
  Timer,
} from "lucide-react";
import { Button } from "@/components/Button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import { Accordion } from "@/components/Accordion";
import { useEffect, useRef, useState } from "react";
import { Mascot } from "@/components/Mascot";
import { useLanguage } from "@/contexts/LanguageContext";
import { grid, fadeUp, type ContactRequest } from "@/types/types";
import { StickyHeader } from "./components/Mobile/StickyHeader";
import { scrollToId } from "./lib/utils";
import { Hero } from "./components/Hero/Hero";
import { ValuesSection } from "./components/Section/ValuesSection";
import { SectionBridge } from "./components/Section/SectionBridge";
import { ScrollyStory } from "./components/Card/ScrollyStory";
import { TimelineSection } from "./components/Timeline/TimelineSection";
import { TimelineFeature } from "./components/Timeline/TimelineFeature";
import { ServiceHero } from "./components/Hero/ServiceHero";
import { ProcessShowcase } from "./components/Process/ProcessShowcase";
import { InnovationSection } from "./components/Section/InnovationSection";
import { SupportSection } from "./components/SupportUs";
import { InputLike } from "./components/Input/InputLike";

export default function App() {
  const { t, toggleLanguage, language } = useLanguage();
  const threeAreasRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: threeAreasProgress } = useScroll({
    target: threeAreasRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const [contactForm, setContactForm] = useState({
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

  useEffect(() => {
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}/`;
    const isItalian = language === "it";
    const title = isItalian
      ? "Arras Industries | Software gestionali, siti web, web3"
      : "Arras Industries | Software, Websites, Web3";
    const description = isItalian
      ? "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari e risultati misurabili."
      : "Arras Industries builds management software, high-performance websites, and web3 solutions for SMBs with clear goals and measurable outcomes.";

    document.title = title;
    document.documentElement.lang = isItalian ? "it" : "en";

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector) as HTMLMetaElement | null;
      if (el) {
        el.content = content;
      }
    };

    setMeta('meta[name="description"]', description);
    setMeta("meta[property='og:title']", title);
    setMeta("meta[property='og:description']", description);
    setMeta("meta[property='og:url']", canonicalUrl);
    setMeta(
      "meta[property='og:locale']",
      isItalian ? "it_IT" : "en_US",
    );
    setMeta("meta[name='twitter:title']", title);
    setMeta("meta[name='twitter:description']", description);

    const canonical = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = canonicalUrl;
    }

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${canonicalUrl}#organization`,
          name: "Arras Industries",
          url: canonicalUrl,
          logo: `${baseUrl}/favicon-1-arc-reactor-512px.png`,
          email: "arras.industries.info@gmail.com",
          telephone: "+39 334 116 8370",
          sameAs: [],
        },
        {
          "@type": "WebSite",
          "@id": `${canonicalUrl}#website`,
          url: canonicalUrl,
          name: "Arras Industries",
          inLanguage: isItalian ? "it" : "en",
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
    };

    let script = document.getElementById(
      "ld-json-arras",
    ) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-arras";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);
  }, [language]);

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-[60px] text-[#F5F7FA]">
      <BackgroundFX />
      <Mascot pose="point" />

      <StickyHeader t={t} language={language} toggleLanguage={toggleLanguage} />

      <main>
        <Hero />
        <ValuesSection />
        <SectionBridge
          eyebrow={t.sectionBridge.pillars.eyebrow}
          title={t.sectionBridge.pillars.title}
          subtitle={t.sectionBridge.pillars.subtitle}
        />
        <ScrollyStory />
        <SectionBridge
          eyebrow={t.sectionBridge.fromStrategy.eyebrow}
          title={t.sectionBridge.fromStrategy.title}
          subtitle={t.sectionBridge.fromStrategy.subtitle}
        />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div ref={threeAreasRef}>
            <motion.div {...fadeUp} className="flex flex-col gap-3">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {t.threeAreas.title}
              </h2>
              <p className="max-w-2xl text-white/70">
                {t.threeAreas.description}
              </p>
            </motion.div>

            <TimelineSection progress={threeAreasProgress}>
              {/* linea centrale unica per tutta la timeline */}
              <TimelineFeature
                side="left"
                icon={<Timer className="h-5 w-5" />}
                title={t.threeAreas.features[0].title}
                desc={t.threeAreas.features[0].desc}
                imageSrc="/images/hero.jpg"
              />

              <TimelineFeature
                side="right"
                icon={<CircleDollarSign className="h-5 w-5" />}
                title={t.threeAreas.features[1].title}
                desc={t.threeAreas.features[1].desc}
                imageSrc="/images/process.jpg"
              />

              <TimelineFeature
                side="left"
                icon={<Shield className="h-5 w-5" />}
                title={t.threeAreas.features[2].title}
                desc={t.threeAreas.features[2].desc}
                imageSrc="/images/notarization.jpg"
              />
            </TimelineSection>
          </div>
        </section>

        <section id="servizi" className="mx-auto max-w-6xl px-4 pb-20">
          <motion.div {...fadeUp} className="max-w-3xl">
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {t.services.title}
            </h2>
            <p className="mt-2 text-white/70">{t.services.subtitle}</p>
          </motion.div>

          <motion.div
            className="mt-10 space-y-6"
            variants={grid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            <ServiceHero
              align="left"
              image="/images/hero.jpg"
              icon={<Laptop className="h-5 w-5" />}
              title={t.services.services[0].title}
              subtitle={t.services.services[0].subtitle}
              points={t.services.services[0].points}
              outcomes={t.services.services[0].outcomes}
            />

            <ServiceHero
              align="right"
              image="/images/process.jpg"
              icon={<MessageSquare className="h-5 w-5" />}
              title={t.services.services[1].title}
              subtitle={t.services.services[1].subtitle}
              points={t.services.services[1].points}
              outcomes={t.services.services[1].outcomes}
            />

            <ServiceHero
              align="left"
              image="/images/usecase.jpg"
              icon={<Sparkles className="h-5 w-5" />}
              title={t.services.services[2].title}
              subtitle={t.services.services[2].subtitle}
              points={t.services.services[2].points}
              outcomes={t.services.services[2].outcomes}
            />
          </motion.div>
        </section>

        <section id="processo" className="mx-auto max-w-6xl px-4 pb-20">
          <ProcessShowcase />
        </section>

        <InnovationSection />

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
          <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {t.faq.title}
              </h2>
              <p className="mt-2 text-white/70">{t.faq.subtitle}</p>
            </div>
            <Accordion items={t.faq.items} />{" "}
          </motion.div>
        </section>

        <SupportSection />

        <section id="contatto" className="mx-auto max-w-6xl px-4 pb-24">
          <motion.div {...fadeUp}>
            <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="mt-3 text-2xl md:text-3xl">
                  {t.contact.title}
                </CardTitle>
                <CardDescription className="mt-2 text-white/70">
                  {t.contact.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-3">
                  <InputLike
                    label={t.contact.formLabels.name}
                    placeholder={t.contact.formPlaceholders.name}
                    value={contactForm.name}
                    onChange={(value) => setContactField("name", value)}
                  />
                  <InputLike
                    label={t.contact.formLabels.activity}
                    placeholder={t.contact.formPlaceholders.activity}
                    value={contactForm.activity}
                    onChange={(value) => setContactField("activity", value)}
                  />
                  <InputLike
                    label={t.contact.formLabels.contact}
                    placeholder={t.contact.formPlaceholders.contact}
                    value={contactForm.contact}
                    onChange={(value) => setContactField("contact", value)}
                  />
                  <div className="md:col-span-3">
                    <InputLike
                      label={t.contact.formLabels.objective}
                      placeholder={t.contact.formPlaceholders.objective}
                      value={contactForm.objective}
                      onChange={(value) => setContactField("objective", value)}
                      tall
                    />
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-white/60">
                    {t.contact.responseTime}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => scrollToId("servizi")}
                      className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                    >
                      {t.nav.seeServices}
                    </Button>
                    <Button
                      onClick={() => openWhatsApp(contactForm, language)}
                      className="bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97]"
                    >
                      {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>

              <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#3B82F6]/20 blur-2xl" />
            </Card>

            <footer className="mt-10 grid grid-cols-2 gap-3 text-sm text-white/60 md:gap-6 md:grid-cols-[1.2fr_1fr_1fr]">
              <div className="col-span-2 space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:col-span-1 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.company}</div>
                <div>{t.footer.description}</div>
                <div className="text-xs text-white/50">
                  {t.footer.copyright.replace(
                    "{year}",
                    String(new Date().getFullYear()),
                  )}
                </div>
              </div>

              <div className="space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.sections}</div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:flex-col">
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#servizi"
                  >
                    {t.nav.services}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#storia"
                  >
                    {t.nav.path}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#processo"
                  >
                    {t.nav.process}
                  </a>
                  <a
                    className="rounded-[10px] bg-white/5 px-2 py-1.5 transition-colors hover:bg-white/10 hover:text-white md:rounded-none md:bg-transparent md:px-0 md:py-0"
                    href="#faq"
                  >
                    FAQ
                  </a>
                </div>
              </div>

              <div className="space-y-2 rounded-[14px] border border-white/10 bg-white/[0.03] p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0">
                <div className="text-white/80">{t.footer.contacts}</div>
                <div className="flex flex-col gap-2">
                  <span className="break-words rounded-[10px] bg-white/5 px-2 py-1.5 [overflow-wrap:anywhere] md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.email}
                  </span>
                  <span className="break-words rounded-[10px] bg-white/5 px-2 py-1.5 [overflow-wrap:anywhere] md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.phone}
                  </span>
                  <span className="break-words rounded-[10px] bg-white/5 px-2 py-1.5 [overflow-wrap:anywhere] md:rounded-none md:bg-transparent md:px-0 md:py-0">
                    {t.footer.location}
                  </span>
                </div>
              </div>
            </footer>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-[-120px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1D2B64] blur-[120px] opacity-50" />
      <div className="absolute right-[-160px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#3B82F6] blur-[140px] opacity-35" />
      <div className="absolute bottom-[-200px] left-[10%] h-[520px] w-[520px] rounded-full bg-[#7C3AED] blur-[160px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)]" />
    </div>
  );
}

function openWhatsApp(form?: ContactRequest, selectedLanguage?: string) {
  const lang = selectedLanguage || localStorage.getItem("language") || "en";
  const phone = "393341168370";
  const hasFormData =
    !!form && Object.values(form).some((value) => value.trim().length > 0);
  const userMessage = form?.objective?.trim();

  const message = hasFormData
    ? lang === "it"
      ? [
          userMessage && userMessage.length > 0
            ? userMessage
            : "Ciao! Vorrei prenotare una call gratuita.",
          "",
          `Nome: ${form?.name || "-"}`,
          `Attivita: ${form?.activity || "-"}`,
          `Contatto: ${form?.contact || "-"}`,
          ...(userMessage && userMessage.length > 0
            ? []
            : [`Obiettivo + vincoli: ${form?.objective || "-"}`]),
        ].join("\n")
      : [
          userMessage && userMessage.length > 0
            ? userMessage
            : "Hi! I'd like to book a free call.",
          "",
          `Name: ${form?.name || "-"}`,
          `Business: ${form?.activity || "-"}`,
          `Contact: ${form?.contact || "-"}`,
          ...(userMessage && userMessage.length > 0
            ? []
            : [`Objective + constraints: ${form?.objective || "-"}`]),
        ].join("\n")
    : lang === "it"
      ? "Ciao! Vorrei informazioni sui vostri servizi."
      : "Hi! I'd like information about your services.";

  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
}
