import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card/Card";
import { Footer } from "@/components/Footer";
import { usePageSeo, type PageSeoConfig } from "@/hooks/usePageSeo";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

export interface ServiceTheme {
  accent: string;
  accentLight: string;
  accentGlow: string;
}

export interface ServicePageContent {
  seo: PageSeoConfig;
  theme: ServiceTheme;
  hero: {
    icon: React.ReactNode;
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
  };
  sections: Array<{ heading: string; body: string }>;
  useCases: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  process: {
    title: string;
    steps: Array<{ number: string; title: string; desc: string }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; content: string }>;
  };
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export default function ServicePageLayout({
  content,
}: {
  content: ServicePageContent;
}) {
  const { language } = useLanguage();
  const siteOrigin = (
    (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() ||
    "https://arrasindustries.com"
  ).replace(/\/+$/, "");
  const canonicalUrl = `${siteOrigin}${content.seo.path}`;

  const seoWithFaq: PageSeoConfig = {
    ...content.seo,
    jsonLd: [
      ...content.seo.jsonLd,
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: content.faq.items.map((item) => ({
          "@type": "Question",
          name: item.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.content,
          },
        })),
      },
    ],
  };

  usePageSeo(seoWithFaq);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-10 md:pb-24 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <motion.div {...reveal} className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]"
              style={{
                borderColor: `${content.theme.accent}33`,
                color: content.theme.accent,
                backgroundColor: `${content.theme.accent}12`,
              }}
            >
              {content.hero.icon}
              {content.hero.eyebrow}
            </div>
            <h1 className="mt-5 text-5xl leading-[0.96] md:text-7xl">
              {content.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {content.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/#contatto">
                <Button>
                  {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <p className="text-sm text-[var(--text-soft)]">
                {language === "it"
                  ? "Call iniziale di 20 minuti, senza impegno."
                  : "Initial 20-minute call, no commitment."}
              </p>
            </div>
          </motion.div>

          <motion.aside
            {...reveal}
            className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)] md:p-6"
          >
            <div className="overflow-hidden rounded-[26px]">
              <img
                src={content.hero.image}
                alt={content.hero.title}
                className="h-[340px] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {language === "it" ? "Ambito" : "Scope"}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {content.sections[0]?.heading}
                </p>
              </div>
              <div className="rounded-[22px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {language === "it" ? "Use case" : "Use cases"}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {content.useCases.items.length}{" "}
                  {language === "it" ? "situazioni tipiche coperte" : "typical scenarios covered"}
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <motion.aside {...reveal}>
            <Card className="sticky top-28 bg-[var(--surface-strong)]">
              <CardHeader>
                <CardTitle className="text-3xl">
                  {content.process.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content.process.steps.map((step) => (
                    <div key={step.number} className="border-t border-[var(--border)] pt-4 first:border-t-0 first:pt-0">
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        {step.number}
                      </div>
                      <div className="mt-2 text-lg font-semibold text-[var(--text)]">
                        {step.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.aside>

          <article className="space-y-12">
            {content.sections.map((section) => (
              <motion.div key={section.heading} {...reveal}>
                <p
                  className="text-xs font-semibold uppercase tracking-[0.24em]"
                  style={{ color: content.theme.accent }}
                >
                  {content.hero.eyebrow}
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl">{section.heading}</h2>
                <div className="mt-5 space-y-4">
                  {section.body.split("\n\n").map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-3xl text-base leading-8 text-[var(--text-muted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div {...reveal}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
            {content.useCases.title}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {content.useCases.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] px-5 py-5 shadow-[var(--shadow)]"
              >
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
        <motion.div {...reveal} className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">{content.faq.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
              {content.faq.subtitle}
            </p>
          </div>
          <Accordion items={content.faq.items} accentColor={content.theme.accent} />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24">
        <motion.div {...reveal}>
          <Card className="bg-[var(--surface-strong)]">
            <div className="grid gap-8 p-7 md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
                  {language === "it" ? "Prossimo passo" : "Next step"}
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl">{content.cta.title}</h2>
              </div>
              <div>
                <p className="text-base leading-8 text-[var(--text-muted)]">
                  {content.cta.subtitle}
                </p>
                <div className="mt-6">
                  <Link to="/#contatto">
                    <Button>
                      {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
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
