import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/Button/Button";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  return (
    <section className="mx-auto max-w-4xl px-4 py-28 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-sm font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
        404
      </div>
      <h1 className="mt-8 text-4xl font-semibold tracking-tight md:text-5xl">
        {isIt ? "Pagina non trovata" : "Page not found"}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
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
