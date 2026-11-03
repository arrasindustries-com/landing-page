import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { buttonVariants } from "@/components/Button/Button";
import { Eyebrow } from "@/components/Ui";

export default function NotFoundPage() {
  const { language } = useLanguage();
  const isIt = language === "it";

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-6">
      <Eyebrow>{isIt ? "Errore 404" : "Error 404"}</Eyebrow>
      <h1 className="mt-7 max-w-[14ch] text-[2.75rem] leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-[5rem]">
        {isIt ? (
          <>
            Questa pagina <span className="hl">non esiste.</span>
          </>
        ) : (
          <>
            This page <span className="hl">doesn't exist.</span>
          </>
        )}
      </h1>
      <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--text-muted)]">
        {isIt
          ? "L'indirizzo potrebbe essere sbagliato, oppure la pagina è stata spostata."
          : "The address may be wrong, or the page has been moved."}
      </p>
      <div className="mt-9">
        <Link to="/" className={buttonVariants({ size: "lg" })}>
          {isIt ? "Torna alla home" : "Back to home"} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
