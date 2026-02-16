import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePageSeo, type PageSeoConfig } from "@/hooks/usePageSeo";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { fadeUp } from "@/types/types";
import { Footer } from "@/components/Footer";

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
  const { accent, accentLight, accentGlow } = content.theme;

  const seoWithFaq: PageSeoConfig = {
    ...content.seo,
    jsonLd: [
      ...content.seo.jsonLd,
      {
        "@type": "FAQPage",
        "@id": `https://arrasindustries.com${content.seo.path}#faq`,
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
      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20">
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <img
            src={content.hero.image}
            alt={content.hero.title}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-20 saturate-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F11]/60 via-[#0F0F11]/80 to-[#0F0F11]" />
          {/* Accent-colored ambient glow */}
          <div
            className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full opacity-[0.12] blur-[120px]"
            style={{ background: accent }}
          />
        </div>

        <motion.div {...fadeUp} className="relative z-10 max-w-3xl py-12">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{
              borderColor: `${accent}40`,
              color: accentLight,
            }}
          >
            {content.hero.icon}
            {content.hero.eyebrow}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 text-lg text-white/70 md:text-xl">
            {content.hero.subtitle}
          </p>
          <div className="mt-8">
            <Link to="/#contatto">
              <Button
                className="text-white hover:scale-[1.04] active:scale-[0.97]"
                style={{
                  background: accent,
                  boxShadow: `0 0 28px ${accentGlow}`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = accentLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = accent)
                }
              >
                {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Long-form content sections */}
      <article className="mx-auto max-w-4xl px-4 pb-16">
        {content.sections.map((section, i) => (
          <motion.div key={i} {...fadeUp} className="mb-12">
            <div className="flex items-start gap-4">
              <div
                className="mt-2 hidden h-8 w-[3px] shrink-0 rounded-full md:block"
                style={{ background: accent }}
              />
              <div>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="space-y-4 leading-relaxed text-white/70">
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </article>

      {/* Use Cases */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div {...fadeUp}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
            {content.useCases.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.useCases.items.map((uc) => (
              <div
                key={uc.title}
                className="group rounded-[14px] border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:border-white/20"
                style={
                  {
                    "--uc-glow": accentGlow,
                  } as React.CSSProperties
                }
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px -20px ${accentGlow}`;
                  e.currentTarget.style.borderColor = `${accent}50`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                <h3 className="text-lg font-semibold tracking-tight">
                  {uc.title}
                </h3>
                <p className="mt-2 text-sm text-white/70">{uc.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div {...fadeUp}>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
            {content.process.title}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div
                  className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
                  style={{
                    background: `${accent}18`,
                    color: accentLight,
                  }}
                >
                  {step.number}
                </div>
                <div className="font-semibold">{step.title}</div>
                <p className="mt-1 text-sm text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <motion.div {...fadeUp} className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {content.faq.title}
            </h2>
            <p className="mt-2 text-white/70">{content.faq.subtitle}</p>
          </div>
          <Accordion items={content.faq.items} accentColor={accent} />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24">
        <motion.div {...fadeUp}>
          <Card className="relative overflow-hidden border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {content.cta.title}
            </h2>
            <p className="mt-2 text-white/70">{content.cta.subtitle}</p>
            <div className="mt-6">
              <Link to="/#contatto">
                <Button
                  className="text-white hover:scale-[1.04] active:scale-[0.97]"
                  style={{
                    background: accent,
                    boxShadow: `0 0 28px ${accentGlow}`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = accentLight)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = accent)
                  }
                >
                  {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-xs text-white/50">
              {language === "it"
                ? "Call gratuita di 20 minuti, senza impegno."
                : "Free 20-minute call, no commitment."}
            </div>
            <div
              className="pointer-events-none absolute -right-24 -bottom-24 h-56 w-56 rounded-full opacity-20 blur-2xl"
              style={{ background: accent }}
            />
          </Card>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
