import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buttonVariants } from "@/components/Button/Button";
import { Eyebrow } from "@/components/Ui";

export type FooterCta = {
  title: ReactNode;
  subtitle: ReactNode;
  buttonText: string;
};

export function Footer({ cta }: { cta?: FooterCta | false }) {
  const { t, language } = useLanguage();
  const isIt = language === "it";
  const sections = [
    { to: "/gestionali", label: t.nav.management },
    { to: "/siti-web", label: t.nav.websites },
    { to: "/web3", label: t.nav.innovation },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/about", label: t.nav.about },
    { to: "/support", label: t.nav.support },
  ];
  const phoneHref = `tel:${t.footer.phone.replace(/\s+/g, "")}`;

  const defaultCta: FooterCta = isIt
    ? {
        title: (
          <>
            Hai un progetto <span className="hl-ink">in mente?</span>
          </>
        ),
        subtitle:
          "Raccontaci cosa ti serve in una call di 20 minuti, gratuita e senza impegno. Rispondiamo entro 1–2 giorni lavorativi.",
        buttonText: t.nav.letsTalk,
      }
    : {
        title: (
          <>
            Got a project <span className="hl-ink">in mind?</span>
          </>
        ),
        subtitle:
          "Tell us what you need in a free, no-commitment 20-minute call. We reply within 1–2 business days.",
        buttonText: t.nav.letsTalk,
      };
  const block = cta === false ? null : (cta ?? defaultCta);

  return (
    <footer className="relative w-full overflow-hidden border-t border-[var(--border)] bg-[var(--ink)] text-[var(--ink-text)]">
      <div className="bg-grid-ink pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        {block ? (
          <div className="border-b border-[var(--ink-border)] py-20 md:py-28">
            <Eyebrow onInk>{isIt ? "Prossimo passo" : "Next step"}</Eyebrow>
            <h2 className="mt-6 max-w-4xl text-[2.5rem] leading-[1] text-[var(--ink-text)] md:text-[4.5rem]">
              {block.title}
            </h2>
            <div className="mt-12 grid gap-8 border-t border-[var(--ink-border)] pt-8 md:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16">
              <p className="max-w-xl text-[15px] leading-7 text-[var(--ink-muted)]">
                {block.subtitle}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/#contatto"
                  className={buttonVariants({ variant: "inverse", size: "lg" })}
                >
                  {block.buttonText} <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`mailto:${t.footer.email}`}
                  className={buttonVariants({ variant: "inkOutline", size: "lg" })}
                >
                  <Mail className="h-4 w-4" />
                  {isIt ? "Scrivici una email" : "Send us an email"}
                </a>
              </div>
            </div>
          </div>
        ) : null}

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div className="space-y-5">
            <img
              src="/images/arras_loghi/arras-logo-dark.svg"
              alt="Arras Industries"
              className="h-12 w-auto"
              loading="lazy"
            />
            <p className="max-w-sm text-sm leading-6 text-[var(--ink-muted)]">
              {t.footer.description}
            </p>
          </div>

          <div>
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {t.footer.sections}
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1">
              {sections.map((section) => (
                <Link
                  key={section.to}
                  to={section.to}
                  className="w-fit text-[var(--ink-text)]/80 transition-colors hover:text-[var(--accent-bright)]"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {t.footer.contacts}
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={`mailto:${t.footer.email}`}
                className="group inline-flex w-fit items-center gap-1.5 break-all text-[var(--ink-text)]/80 transition-colors hover:text-[var(--accent-bright)]"
              >
                {t.footer.email}
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={phoneHref}
                className="w-fit text-[var(--ink-text)]/80 transition-colors hover:text-[var(--accent-bright)]"
              >
                {t.footer.phone}
              </a>
              <span className="text-[var(--ink-muted)]">{t.footer.location}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--ink-border)] py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>
            {t.footer.copyright.replace("{year}", String(new Date().getFullYear()))}
          </span>
          <span>{isIt ? "Progettato e sviluppato in Italia" : "Designed and built in Italy"}</span>
        </div>
      </div>
    </footer>
  );
}
