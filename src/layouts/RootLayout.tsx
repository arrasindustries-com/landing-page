import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/useTheme";
import { Mascot } from "@/components/Mascot";
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
    <div
      className={`min-h-screen pt-[60px] ${
        theme === "dark"
          ? "bg-[var(--bg)] text-[var(--text)]"
          : "bg-[var(--bg)] text-[var(--text)]"
      }`}
    >
      <BackgroundFX theme={theme} />
      <Mascot pose="point" />
      <StickyHeader
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function BackgroundFX({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {theme === "dark" ? (
        <>
          <div className="absolute left-[-120px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1D2B64] blur-[120px] opacity-38" />
          <div className="absolute right-[-160px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#3B82F6] blur-[130px] opacity-24" />
          <div className="absolute bottom-[-200px] left-[10%] h-[520px] w-[520px] rounded-full bg-[#6b7ab4] blur-[145px] opacity-22" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.03),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_50%)]" />
        </>
      ) : (
        <>
          <div className="absolute left-[-140px] top-[-220px] h-[420px] w-[420px] rounded-full bg-[#ddd1bb] blur-[120px] opacity-55" />
          <div className="absolute right-[-180px] top-[110px] h-[460px] w-[460px] rounded-full bg-[#d9ccb8] blur-[120px] opacity-50" />
          <div className="absolute bottom-[-180px] left-[12%] h-[460px] w-[460px] rounded-full bg-[#cfc1ab] blur-[120px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(36,44,53,0.28)_0.6px,transparent_0.6px)] [background-size:16px_16px]" />
        </>
      )}
    </div>
  );
}
