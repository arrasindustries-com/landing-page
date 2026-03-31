import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mx-auto max-w-7xl px-4 pb-6 pt-6 md:pb-8">
      <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div className="space-y-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {t.footer.company}
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--text-muted)]">
              {t.footer.description}
            </p>
            <div className="text-xs text-[var(--text-soft)]">
              {t.footer.copyright.replace(
                "{year}",
                String(new Date().getFullYear()),
              )}
            </div>
            <div>
              <Link
                to="/about"
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
              {t.nav.about}
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {t.footer.sections}
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm text-[var(--text-muted)]">
              <Link to="/about" className="transition-colors hover:text-[var(--text)]">
              {t.nav.about}
              </Link>
              <Link to="/#servizi" className="transition-colors hover:text-[var(--text)]">
              {t.nav.services}
              </Link>
              <Link to="/#storia" className="transition-colors hover:text-[var(--text)]">
              {t.nav.path}
              </Link>
              <Link to="/#processo" className="transition-colors hover:text-[var(--text)]">
              {t.nav.process}
              </Link>
              <Link to="/#faq" className="transition-colors hover:text-[var(--text)]">
              FAQ
              </Link>
            </div>
          </div>

          <div>
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {t.footer.contacts}
            </div>
            <div className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
              <span className="break-words [overflow-wrap:anywhere]">{t.footer.email}</span>
              <span>{t.footer.phone}</span>
              <span>{t.footer.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
