import { Footer } from "@/components/Footer";
import { SupportSection } from "@/components/SupportUs";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHero } from "@/components/Ui";
import { usePageSeo } from "@/hooks/usePageSeo";

export default function SupportPage() {
  const { language } = useLanguage();
  const isItalian = language === "it";

  usePageSeo({
    titleIt: "Supporto | Arras Industries",
    titleEn: "Support | Arras Industries",
    descriptionIt:
      "Una pagina dedicata a chi vuole supportare la sperimentazione e lo sviluppo di strumenti più aperti, veloci e verificabili.",
    descriptionEn:
      "A dedicated page for anyone who wants to support experimentation and the development of more open, faster, and verifiable tools.",
    keywordsIt: [
      "supporto arras industries",
      "donazioni sviluppo software",
      "supporta innovazione web3",
    ],
    keywordsEn: [
      "support arras industries",
      "software innovation donations",
      "support web3 experimentation",
    ],
    path: "/support",
    jsonLd: [],
  });

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-14 md:px-6 md:pt-20">
        <div className="border-b border-[var(--border)] pb-16 md:pb-20">
          <PageHero
            eyebrow={isItalian ? "Supporto" : "Support"}
            title={
              isItalian ? (
                <>
                  Sostieni la ricerca <span className="hl">che facciamo.</span>
                </>
              ) : (
                <>
                  Support the research <span className="hl">we do.</span>
                </>
              )
            }
            description={
              <>
                {isItalian
                  ? "Pubblichiamo codice e articoli, e costruiamo prototipi che non sempre hanno un cliente dietro. Se ti è utile ciò che facciamo, puoi darci una mano."
                  : "We publish code and papers, and build prototypes that do not always have a client behind them. If our work is useful to you, you can lend a hand."}
                <span className="mt-4 block text-sm leading-6 text-[var(--text-soft)]">
                  {isItalian
                    ? "Le donazioni sono facoltative e non sostituiscono i progetti per i clienti."
                    : "Donations are optional and do not replace client work."}
                </span>
              </>
            }
          />
        </div>
      </section>

      <SupportSection />
      <Footer />
    </>
  );
}
