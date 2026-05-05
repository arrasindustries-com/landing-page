import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  const sections = [
    { to: "/metodo", label: t.nav.path },
    { to: "/gestionali", label: t.nav.management },
    { to: "/siti-web", label: t.nav.websites },
    { to: "/web3", label: t.nav.innovation },
    { to: "/about", label: t.nav.about },
    { to: "/support", label: t.nav.support },
    { to: "/#contatto", label: t.nav.letsTalk },
  ];

  return (
    <footer className="bg-[#0f1113] w-full border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
          <div className="space-y-4">
            <div
              className="text-lg font-bold uppercase tracking-widest text-white/90"
              style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
            >
              Arras Industries
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              {t.footer.description}
            </p>
            <div className="text-xs text-white/30">
              {t.footer.copyright.replace(
                "{year}",
                String(new Date().getFullYear()),
              )}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              {t.footer.sections}
            </div>
            <div className="grid grid-cols-1 gap-2 text-sm text-white/55">
              {sections.map((section) => (
                <Link
                  key={section.to}
                  to={section.to}
                  className="transition-colors hover:text-white/90"
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              {t.footer.contacts}
            </div>
            <div className="flex flex-col gap-2 text-sm text-white/55">
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
