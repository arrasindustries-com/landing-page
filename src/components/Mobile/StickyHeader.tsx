import type { useLanguage } from "@/contexts/LanguageContext";
import { scrollToId } from "@/lib/utils";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FlagGB, FlagIT } from "../Flag";
import { Button } from "../Button/Button";
import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function StickyHeader({
  t,
  language,
  toggleLanguage,
  theme,
  toggleTheme,
}: {
  t: ReturnType<typeof useLanguage>["t"];
  language: string;
  toggleLanguage: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavClick = (hash: string) => {
    const id = hash.replace("#", "");
    if (isHome) {
      scrollToId(id);
    } else {
      navigate("/" + hash);
    }
  };

  const handleMobileNavClick = (hash: string) => {
    const id = hash.replace("#", "");
    setMobileOpen(false);

    if (isHome) {
      window.setTimeout(() => {
        scrollToId(id);
      }, 260);
      return;
    }

    navigate("/" + hash);
  };

  const navLinkClass =
    "relative text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text)]";

  const navLinks = [
    { href: "#storia", label: t.nav.path },
    { href: "#servizi", label: t.nav.services },
    { href: "#processo", label: t.nav.process },
    { href: "#innovazione", label: t.nav.innovation },
    { href: "#faq", label: t.nav.faq },
  ];
  const toLightThemeLabel =
    language === "it" ? "Passa al tema chiaro" : "Switch to light theme";
  const toDarkThemeLabel =
    language === "it" ? "Passa al tema scuro" : "Switch to dark theme";

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] backdrop-blur-xl"
      style={{
        backgroundColor:
          theme === "dark" ? "rgba(20, 17, 15, 0.82)" : "rgba(243, 238, 228, 0.82)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--text)]">
            AI
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Arras Industries
            </div>
            <div className="text-sm text-[var(--text-muted)]">
              {language === "it"
                ? "Software per operazioni reali"
                : "Software for real operations"}
            </div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={navLinkClass}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <Link to="/about" className={navLinkClass}>
            {t.nav.about}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="group relative flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            title={theme === "dark" ? toLightThemeLabel : toDarkThemeLabel}
            aria-label={theme === "dark" ? toLightThemeLabel : toDarkThemeLabel}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className="group relative flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-all duration-300 hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            title={
              language === "it" ? "Switch to English" : "Passa all'italiano"
            }
            aria-label={
              language === "it" ? "Switch to English" : "Passa all'italiano"
            }
          >
            <span className="inline-block h-4 w-5 overflow-hidden rounded-[2px] transition-transform duration-300 group-hover:scale-110">
              {language === "it" ? (
                <FlagIT className="theme-keep-original h-full w-full" />
              ) : (
                <FlagGB className="theme-keep-original h-full w-full" />
              )}
            </span>
            <span className="text-xs font-semibold tracking-wide">
              {language === "it" ? "IT" : "EN"}
            </span>
          </button>

          <Button
            onClick={() => handleNavClick("#contatto")}
            className="hidden sm:inline-flex"
          >
            {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
          </Button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[var(--border)] md:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(link.href);
                  }}
                  className="rounded-[18px] px-4 py-3 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className="rounded-[18px] px-4 py-3 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--surface)] hover:text-[var(--text)]"
              >
                {t.nav.about}
              </Link>
              <div className="mt-2 flex gap-2">
                <Button
                  onClick={() => {
                    handleMobileNavClick("#contatto");
                  }}
                  className="flex-1"
                >
                  {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
