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

  const navLinkClass =
    theme === "dark"
      ? "relative hover:text-white transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#3B82F6] after:transition-all after:duration-300 hover:after:w-full"
      : "relative hover:text-[#0F0F11] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#2563EB] after:transition-all after:duration-300 hover:after:w-full";

  const navLinks = [
    { href: "#servizi", label: t.nav.services },
    { href: "#storia", label: t.nav.path },
    { href: "#processo", label: t.nav.process },
    { href: "#innovazione", label: t.nav.innovation },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${
        theme === "dark"
          ? "border-b border-white/[0.06] bg-[#0F0F11]/88"
          : "border-b border-[#d6cbb8] bg-[#f4efe6]/92"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={theme === "dark" ? "/p4-underline-cyan.png" : "/p4-underline-black.png"}
            alt="Arras Industries"
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className={`hidden items-center gap-7 text-sm md:flex ${
            theme === "dark" ? "text-white/60" : "text-[#0F0F11]/70"
          }`}
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

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium backdrop-blur transition-all duration-300 ${
              theme === "dark"
                ? "border border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10 hover:text-white"
                : "border border-black/15 bg-black/[0.04] text-[#0F0F11]/80 hover:border-black/25 hover:bg-black/[0.08] hover:text-[#0F0F11]"
            }`}
            title={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
            aria-label={theme === "dark" ? "Passa al tema chiaro" : "Passa al tema scuro"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            ) : (
              <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12" />
            )}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className={`group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm font-medium backdrop-blur transition-all duration-300 ${
              theme === "dark"
                ? "border border-white/15 bg-white/5 text-white/80 hover:border-white/25 hover:bg-white/10 hover:text-white"
                : "border border-black/15 bg-black/[0.04] text-[#0F0F11]/80 hover:border-black/25 hover:bg-black/[0.08] hover:text-[#0F0F11]"
            }`}
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

          {/* CTA desktop */}
          <Button
            onClick={() => handleNavClick("#contatto")}
            className="hidden bg-[var(--accent)] text-white shadow-[0_12px_28px_-18px_rgba(47,94,168,0.45)] hover:scale-[1.02] hover:bg-[var(--accent-strong)] active:scale-[0.98] sm:inline-flex"
          >
            {t.nav.letsTalk} <ArrowRight className="h-4 w-4" />
          </Button>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg md:hidden ${
              theme === "dark"
                ? "border border-white/15 bg-white/5 text-white/80"
                : "border border-black/15 bg-black/[0.04] text-[#0F0F11]/80"
            }`}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`overflow-hidden md:hidden ${
              theme === "dark" ? "border-t border-white/[0.06]" : "border-t border-black/10"
            }`}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    requestAnimationFrame(() => handleNavClick(link.href));
                  }}
                  className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    theme === "dark"
                      ? "text-white/70 hover:bg-white/5 hover:text-white"
                      : "text-[#0F0F11]/70 hover:bg-black/[0.05] hover:text-[#0F0F11]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/about"
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-white/70 hover:bg-white/5 hover:text-white"
                    : "text-[#0F0F11]/70 hover:bg-black/[0.05] hover:text-[#0F0F11]"
                }`}
              >
                {t.nav.about}
              </Link>
              <div className="mt-2 flex gap-2">
                <Button
                  onClick={() => {
                    setMobileOpen(false);
                    requestAnimationFrame(() => handleNavClick("#contatto"));
                  }}
                  className="flex-1 bg-[var(--accent)] text-white shadow-[0_12px_28px_-18px_rgba(47,94,168,0.45)]"
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
