import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/Button/Button";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  return (
    <section className="mx-auto max-w-4xl px-4 py-28 text-center">
      <img
        src="/mascot/think.png"
        alt={isIt ? "Mascotte pensierosa" : "Thoughtful mascot"}
        className="mx-auto mb-6 h-28 w-28 object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.35)] md:h-36 md:w-36"
        loading="eager"
        decoding="async"
      />
      <div className="text-6xl font-semibold tracking-tight">404</div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
        {isIt ? "Pagina non trovata" : "Page not found"}
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-white/70">
        {isIt
          ? "L'URL richiesto non esiste oppure è stato spostato."
          : "The requested URL does not exist or has been moved."}
      </p>
      <div className="mt-7">
        <Link to="/">
          <Button>{isIt ? "Torna alla home" : "Back to home"}</Button>
        </Link>
      </div>
    </section>
  );
}
