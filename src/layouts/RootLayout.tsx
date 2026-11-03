import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/useTheme";
import { StickyHeader } from "@/components/Mobile/StickyHeader";
import { scrollToId } from "@/lib/utils";

export function RootLayout() {
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => scrollToId(id));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">
      <BackgroundFX />
      <StickyHeader
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="relative z-10 pt-[76px]">
        <Outlet />
      </main>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div
        className="bg-grid absolute inset-x-0 top-0 h-[900px]"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div className="absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[var(--accent-soft)] blur-[160px]" />
    </div>
  );
}
