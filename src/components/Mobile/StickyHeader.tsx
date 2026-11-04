import type { useLanguage } from "@/contexts/LanguageContext";
import { scrollToId } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
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
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContactClick = (fromMobile = false) => {
    if (fromMobile) {
      setMobileOpen(false);
    }

    if (isHome) {
      if (fromMobile) {
        window.setTimeout(() => {
          scrollToId("contatto");
        }, 260);
        return;
      }

      scrollToId("contatto");
      return;
    }

    navigate("/#contatto");
  };

  const navLinks = [
    { to: "/gestionali", label: t.nav.management },
    { to: "/siti-web", label: t.nav.websites },
    { to: "/web3", label: t.nav.innovation },
    { to: "/portfolio", label: t.nav.portfolio },
    { to: "/about", label: t.nav.about },
  ];
  const toLightThemeLabel =
    language === "it" ? "Passa al tema chiaro" : "Switch to light theme";
  const toDarkThemeLabel =
    language === "it" ? "Passa al tema scuro" : "Switch to dark theme";
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "relative px-3 py-2 text-[14px] font-medium tracking-[-0.01em] transition-colors duration-200",
      isActive
        ? "text-[var(--text)] after:absolute after:inset-x-3 after:-bottom-[1px] after:h-px after:bg-[var(--accent-bright)]"
        : "text-[var(--text-muted)] hover:text-[var(--text)]",
    ].join(" ");

  const iconBtn =
    "inline-flex h-9 items-center justify-center gap-1.5 border border-[var(--border)] px-2.5 text-[var(--text-muted)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:text-[var(--text)]";

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        solid
          ? "border-[var(--border)] bg-[rgb(var(--page-bg-rgb)/0.82)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Link to="/" className="flex items-center" aria-label="Arras Industries — home">
          <img
            src={
              theme === "dark"
                ? "/images/arras_loghi/arras-logo-dark.svg"
                : "/images/arras_loghi/arras-logo-light.svg"
            }
            alt="Arras Industries"
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} className={navLinkClass} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`${iconBtn} w-9 px-0`}
            title={theme === "dark" ? toLightThemeLabel : toDarkThemeLabel}
            aria-label={theme === "dark" ? toLightThemeLabel : toDarkThemeLabel}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={toggleLanguage}
            className={`${iconBtn} font-mono text-[11px] tracking-[0.08em]`}
            title={language === "it" ? "Switch to English" : "Passa all'italiano"}
            aria-label={
              language === "it" ? "Switch to English" : "Passa all'italiano"
            }
          >
            <span className={language === "it" ? "text-[var(--text)]" : ""}>IT</span>
            <span className="text-[var(--border-strong)]">/</span>
            <span className={language === "en" ? "text-[var(--text)]" : ""}>EN</span>
          </button>

          <Button
            onClick={() => handleContactClick()}
            size="sm"
            className="ml-1 hidden sm:inline-flex"
          >
            {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
          </Button>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`${iconBtn} w-9 px-0 lg:hidden`}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
            className="overflow-hidden border-t border-[var(--border)] lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:px-6">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    [
                      "flex items-baseline gap-4 border-b border-[var(--border)] py-4 font-display text-2xl tracking-[var(--tk-display)] transition-colors",
                      isActive ? "text-[var(--text)]" : "text-[var(--text-muted)] hover:text-[var(--text)]",
                    ].join(" ")
                  }
                >
                  <span className="font-mono text-[11px] tracking-normal text-[var(--text-soft)]">
                    0{i + 1}
                  </span>
                  {link.label}
                </NavLink>
              ))}
              <Button
                onClick={() => {
                  handleContactClick(true);
                }}
                className="mt-5 w-full"
              >
                {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
