import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mascot } from "@/components/Mascot";
import { StickyHeader } from "@/components/Mobile/StickyHeader";
import { scrollToId } from "@/lib/utils";

export function RootLayout() {
  const { t, language, toggleLanguage } = useLanguage();
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
    <div className="min-h-screen bg-[#0F0F11] pt-[60px] text-[#F5F7FA]">
      <BackgroundFX />
      <Mascot pose="point" />
      <StickyHeader t={t} language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-[-120px] top-[-180px] h-[420px] w-[420px] rounded-full bg-[#1D2B64] blur-[120px] opacity-50" />
      <div className="absolute right-[-160px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#3B82F6] blur-[140px] opacity-35" />
      <div className="absolute bottom-[-200px] left-[10%] h-[520px] w-[520px] rounded-full bg-[#7C3AED] blur-[160px] opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.08),transparent_50%)]" />
    </div>
  );
}
