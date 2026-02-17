import { motion, useScroll } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  Shield,
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
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { grid, fadeUp, type ContactRequest } from "@/types/types";
import { scrollToId, openWhatsApp } from "@/lib/utils";
import { Hero } from "@/components/Hero/Hero";
import { ValuesSection } from "@/components/Section/ValuesSection";
import { SectionBridge } from "@/components/Section/SectionBridge";
import { ScrollyStory } from "@/components/Card/ScrollyStory";
import { TimelineSection } from "@/components/Timeline/TimelineSection";
import { TimelineFeature } from "@/components/Timeline/TimelineFeature";
import { ServiceHero } from "@/components/Hero/ServiceHero";
import { ProcessShowcase } from "@/components/Process/ProcessShowcase";
import { InnovationSection } from "@/components/Section/InnovationSection";
import { SupportSection } from "@/components/SupportUs";
import { InputLike } from "@/components/Input/InputLike";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useTheme } from "@/contexts/useTheme";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const threeAreasRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: threeAreasProgress } = useScroll({
    target: threeAreasRef,
    offset: ["start 0.8", "end 0.2"],
  });
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
    titleIt: "Arras Industries | Software gestionali, siti web, web3",
    titleEn: "Arras Industries | Software, Websites, Web3",
    descriptionIt:
      "Arras Industries realizza software gestionali, siti web performanti e soluzioni web3 per PMI con obiettivi chiari e risultati misurabili.",
    descriptionEn:
      "Arras Industries builds management software, high-performance websites, and web3 solutions for SMBs with clear goals and measurable outcomes.",
    keywordsIt: [
      "software gestionale",
      "gestionale PMI",
      "sviluppo siti web",
      "web developer Italia",
      "azienda IT specializzata",
      "soluzioni blockchain",
      "integrazione web3",
      "software su misura",
      "sviluppo applicazioni aziendali",
      "consulenza IT aziende",
    ],
    keywordsEn: [
      "custom management software",
      "SMB software development",
      "website development company",
      "web developer agency",
      "specialized IT company",
      "blockchain solutions",
      "web3 integration services",
      "custom software development",
      "business software developer",
      "IT consulting for companies",
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
        // sameAs: ["https://linkedin.com/company/..."],
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

  return (
    <>
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

      <section className="relative mx-auto max-w-6xl px-4 py-16">
        <div ref={threeAreasRef}>
          <motion.div {...fadeUp} className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {t.threeAreas.title}
            </h2>
            <p className="max-w-2xl text-[var(--muted)]">
              {t.threeAreas.description}
            </p>
          </motion.div>

          <TimelineSection progress={threeAreasProgress}>
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
          <p className="mt-2 text-[var(--muted)]">{t.services.subtitle}</p>
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
            title={t.services.services[0].title}
            subtitle={t.services.services[0].subtitle}
            points={t.services.services[0].points}
            outcomes={t.services.services[0].outcomes}
            detailLink="/gestionali"
          />

          <ServiceHero
            align="right"
            image="/images/process.jpg"
            title={t.services.services[1].title}
            subtitle={t.services.services[1].subtitle}
            points={t.services.services[1].points}
            outcomes={t.services.services[1].outcomes}
            detailLink="/siti-web"
            blurImageToRight
          />

          <ServiceHero
            align="left"
            image="/images/usecase.jpg"
            title={t.services.services[2].title}
            subtitle={t.services.services[2].subtitle}
            points={t.services.services[2].points}
            outcomes={t.services.services[2].outcomes}
            detailLink="/web3"
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
            <p className="mt-2 text-[var(--muted)]">{t.faq.subtitle}</p>
          </div>
          <Accordion items={t.faq.items} />{" "}
        </motion.div>
      </section>

      <SupportSection />

      <section id="contatto" className="mx-auto max-w-6xl px-4 pb-24">
        <motion.div {...fadeUp}>
          <Card
            className={`relative overflow-hidden backdrop-blur ${
              theme === "dark"
                ? "border-white/10 bg-white/5"
                : "border-[var(--border)] bg-[var(--surface)] shadow-[0_22px_52px_-32px_rgba(35,49,73,0.24)]"
            }`}
          >
            {theme === "light" ? (
              <>
                <div className="pointer-events-none absolute -top-20 -right-12 h-56 w-56 rounded-full bg-[#5f7ba8]/16 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 left-12 h-48 w-48 rounded-full bg-[#8a7c62]/14 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(47,94,168,0.14),transparent_50%),radial-gradient(circle_at_82%_80%,rgba(138,124,98,0.13),transparent_45%)]" />
              </>
            ) : null}
            <CardHeader>
              <CardTitle className="mt-3 text-2xl md:text-3xl">
                {t.contact.title}
              </CardTitle>
              <CardDescription className="mt-2 text-[var(--muted)]">
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
                <div className="text-xs text-[var(--muted)]">
                  {t.contact.responseTime}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => scrollToId("servizi")}
                    className="hover:-translate-y-[1px] hover:shadow-[0_12px_24px_-18px_rgba(47,94,168,0.35)] active:translate-y-0 active:scale-[0.98]"
                  >
                    {t.nav.services}
                  </Button>
                  <Button
                    onClick={() => openWhatsApp(contactForm, language)}
                    className="bg-[var(--accent)] text-white shadow-[0_12px_28px_-18px_rgba(47,94,168,0.45)] hover:scale-[1.02] hover:bg-[var(--accent-strong)] active:scale-[0.98]"
                  >
                    {t.contact.evaluate} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>

            <div className="pointer-events-none absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-[#5f7ba8]/14 blur-2xl" />
          </Card>

          <div className="mt-12">
            <Footer />
          </div>
        </motion.div>
      </section>
    </>
  );
}
