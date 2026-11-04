import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Accordion } from "@/components/Accordion";
import { buttonVariants } from "@/components/Button/Button";
import { Footer } from "@/components/Footer";
import { usePageSeo, type PageSeoConfig } from "@/hooks/usePageSeo";
import { StopMotion } from "@/components/Visual/StopMotion";
import { Eyebrow, Index, PageHero, reveal } from "@/components/Ui";
import type { ServiceVisualVariant } from "@/components/Visual/ServiceVisual";

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
    visual: ServiceVisualVariant;
    animationFrames?: string[];
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

  const isIt = language === "it";

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-14 md:px-6 md:pt-20">
        <PageHero
          eyebrow={
            <Link to="/#servizi" className="transition-colors hover:text-[var(--text)]">
              {isIt ? "Servizi" : "Services"} / {content.hero.eyebrow}
            </Link>
          }
          title={content.hero.title}
          description={content.hero.subtitle}
          actions={
            <Link to="/#contatto" className={buttonVariants({ size: "lg" })}>
              {content.cta.buttonText} <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 md:mt-20"
        >
          <div className="relative aspect-[4/3] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)] sm:aspect-[16/9] lg:aspect-[21/8]">
            <StopMotion
              frames={content.hero.animationFrames?.length ? content.hero.animationFrames : [content.hero.image]}
              alt={content.hero.title}
              className="h-full w-full"
              float={false}
            />
          </div>
        </motion.div>

        {/* Process strip */}
        <motion.div {...reveal} className="mt-14 border-t border-[var(--border)]">
          <div className="flex items-center justify-between py-5">
            <Eyebrow>{content.process.title}</Eyebrow>
          </div>
          <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
            {content.process.steps.map((step) => (
              <div key={step.number} className="bg-[var(--page-bg)] p-6">
                <div className="font-mono text-[11px] tracking-[0.12em] text-[var(--accent)]">
                  {step.number}
                </div>
                <div className="mt-6 font-display text-xl font-semibold tracking-[var(--tk-display)]">
                  {step.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Long-form sections */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <div className="space-y-20 md:space-y-24">
          {content.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              {...reveal}
              className="grid gap-6 border-t border-[var(--border)] pt-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16"
            >
              <div>
                <Index n={index + 1} />
                <h2 className="mt-6 text-[1.9rem] leading-[1.08] md:text-[2.4rem]">
                  {section.heading}
                </h2>
              </div>
              <div className="space-y-5">
                {section.body.split("\n\n").map((paragraph, pIndex) => (
                  <p
                    key={paragraph}
                    className={
                      pIndex === 0
                        ? "text-lg leading-8 text-[var(--text)]"
                        : "text-[15px] leading-7 text-[var(--text-muted)]"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-28">
          <motion.div {...reveal}>
            <Eyebrow>{content.useCases.title}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-[2.25rem] leading-[1.02] md:text-[3.2rem]">
              {isIt ? (
                <>
                  Settori in cui <span className="hl">lo applichiamo.</span>
                </>
              ) : (
                <>
                  Where we <span className="hl">apply it.</span>
                </>
              )}
            </h2>
          </motion.div>
          <div className="mt-14 grid gap-px border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 xl:grid-cols-3">
            {content.useCases.items.map((item, index) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: (index % 3) * 0.06 }}
                className="group bg-[var(--surface-strong)] p-7 transition-colors duration-300 hover:bg-[var(--page-bg)] md:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.12em] text-[var(--text-soft)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-[var(--border-strong)] transition-colors duration-300 group-hover:bg-[var(--accent-bright)]" />
                </div>
                <h3 className="mt-10 text-[1.4rem] leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-6 md:py-32">
        <motion.div {...reveal} className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 text-[2.25rem] leading-[1.02] md:text-[3rem]">{content.faq.title}</h2>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[var(--text-muted)]">
              {content.faq.subtitle}
            </p>
          </div>
          <Accordion items={content.faq.items} />
        </motion.div>
      </section>

      <Footer
        cta={{
          title: content.cta.title,
          subtitle: content.cta.subtitle,
          buttonText: content.cta.buttonText,
        }}
      />
    </>
  );
}
