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
      <BackgroundFX theme={theme} />
      <StickyHeader
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="relative z-10 pt-8 md:pt-10">
        <Outlet />
      </main>
    </div>
  );
}

function BackgroundFX({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),transparent_25%,transparent_70%,rgba(0,0,0,0.04))]" />
      <div className="absolute left-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[var(--ambient-one)] blur-[120px]" />
      <div className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full bg-[var(--ambient-two)] blur-[120px]" />
      <div className="absolute bottom-[-12rem] left-[18%] h-[24rem] w-[24rem] rounded-full bg-[var(--ambient-two)] blur-[140px]" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
              : "linear-gradient(rgba(24,19,17,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(24,19,17,0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
