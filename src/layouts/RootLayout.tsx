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
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            theme === "dark"
              ? "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)"
              : "radial-gradient(circle, rgba(15,17,19,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.15) 50%, transparent 100%)",
        }}
      />
      <div className="absolute left-[-8rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[var(--ambient-one)] blur-[140px]" />
      <div className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full bg-[var(--ambient-two)] blur-[140px]" />
    </div>
  );
}
