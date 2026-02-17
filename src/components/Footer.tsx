import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/useTheme";

const linkClass =
  "rounded-[10px] bg-[var(--surface)] px-2 py-1.5 transition-colors hover:bg-[var(--surface-strong)] md:rounded-none md:bg-transparent md:px-0 md:py-0";
const contactClass =
  "break-words rounded-[10px] bg-[var(--surface)] px-2 py-1.5 [overflow-wrap:anywhere] md:rounded-none md:bg-transparent md:px-0 md:py-0";
const columnClass =
  "space-y-2 rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-4 md:rounded-none md:border-0 md:bg-transparent md:p-0";

export function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <footer className="mx-auto max-w-6xl px-4 pb-12">
      <div
        className={`grid grid-cols-2 gap-3 text-sm md:gap-6 md:grid-cols-[1.2fr_1fr_1fr] ${
          theme === "dark" ? "text-white/60" : "text-[#4f5b66]"
        }`}
      >
        <div className={`col-span-2 md:col-span-1 ${columnClass}`}>
          <div className={theme === "dark" ? "text-white/80" : "text-[#1f2933]"}>
            {t.footer.company}
          </div>
          <div>{t.footer.description}</div>
          <div className={theme === "dark" ? "text-xs text-white/50" : "text-xs text-[#66707a]"}>
            {t.footer.copyright.replace(
              "{year}",
              String(new Date().getFullYear()),
            )}
          </div>
          <div>
            <Link
              to="/about"
              className={`text-xs transition-colors ${
                theme === "dark" ? "text-white/50 hover:text-white/80" : "text-[#66707a] hover:text-[#1f2933]"
              }`}
            >
              {t.nav.about}
            </Link>
          </div>
        </div>

        <div className={columnClass}>
          <div className={theme === "dark" ? "text-white/80" : "text-[#1f2933]"}>
            {t.footer.sections}
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:flex md:flex-col">
            <Link to="/about" className={linkClass}>
              {t.nav.about}
            </Link>
            <Link to="/#servizi" className={linkClass}>
              {t.nav.services}
            </Link>
            <Link to="/#storia" className={linkClass}>
              {t.nav.path}
            </Link>
            <Link to="/#processo" className={linkClass}>
              {t.nav.process}
            </Link>
            <Link to="/#faq" className={linkClass}>
              FAQ
            </Link>
          </div>
        </div>

        <div className={columnClass}>
          <div className={theme === "dark" ? "text-white/80" : "text-[#1f2933]"}>
            {t.footer.contacts}
          </div>
          <div className="flex flex-col gap-2">
            <span className={contactClass}>{t.footer.email}</span>
            <span className={contactClass}>{t.footer.phone}</span>
            <span className={contactClass}>{t.footer.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
