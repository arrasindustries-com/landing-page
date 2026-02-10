import { motion } from "framer-motion";
import { Laptop, LineChart, MessageSquare, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ServiceHero from "@/components/sections/ServiceHero";
import { fadeUp, grid } from "@/lib/motion";

export default function ServicesSection() {
  return (
    <section id="servizi" className="mx-auto max-w-6xl px-4 pb-20">
      <motion.div {...fadeUp} className="max-w-3xl">
        <Badge className="border-white/15 bg-white/5 text-white/80">
          Servizi
        </Badge>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Tre blocchi chiari. Nessuna ambiguita.
        </h2>
        <p className="mt-2 text-white/70">
          Ogni servizio ha un obiettivo misurabile. Qui sotto trovi cosa
          facciamo, come lo facciamo e cosa ottieni.
        </p>
      </motion.div>

      <motion.div
        className="mt-10 space-y-6"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <ServiceHero
          align="left"
          image="/images/hero.jpg"
          icon={<Laptop className="h-5 w-5" />}
          title="Gestionali web"
          subtitle="Il backoffice che il personale usa davvero."
          points={[
            "Ruoli e permessi: chi vede cosa, senza confusione.",
            "Flussi operativi chiari: ordini, turni, scorte.",
            "Reportistica essenziale: numeri subito leggibili.",
          ]}
          outcomes={[
            "Meno errori operativi",
            "Onboarding staff piu veloce",
            "Dati aggiornati in tempo reale",
          ]}
        />

        <ServiceHero
          align="right"
          image="/images/process.jpg"
          icon={<MessageSquare className="h-5 w-5" />}
          title="Automazioni e integrazioni"
          subtitle="Colleghiamo strumenti esistenti e togliamo lavoro manuale."
          points={[
            "Pagamenti, POS ed export collegati tra loro.",
            "Reminder automatici per ridurre no-show.",
            "Notifiche WhatsApp/Email senza passaggi extra.",
          ]}
          outcomes={[
            "Meno lavoro ripetitivo",
            "Riduzione no-show",
            "Clienti piu fedeli",
          ]}
        />

        <ServiceHero
          align="left"
          image="/images/usecase.jpg"
          icon={<LineChart className="h-5 w-5" />}
          title="Dati e dashboard"
          subtitle="KPI utili, non grafici scenici."
          points={[
            "Vendite per fascia oraria e canale.",
            "Prodotti best-seller e margini reali.",
            "Anomalie e trend prima che diventino problemi.",
          ]}
          outcomes={[
            "Decisioni piu rapide",
            "Controllo del margine",
            "Riduzione sprechi",
          ]}
        />

        <ServiceHero
          align="right"
          image="/images/process.jpg"
          icon={<Sparkles className="h-5 w-5" />}
          title="Modernizzazione"
          subtitle="Rifacciamo sistemi esistenti con stack moderno."
          points={[
            "Migrazione da PHP/HTML a React/stack moderno.",
            "Stessa logica, UX piu veloce e pulita.",
            "Meno bug e manutenzione semplificata.",
          ]}
          outcomes={[
            "Prestazioni migliori",
            "UX piu moderna",
            "Tecnologia pronta per il futuro",
          ]}
        />
      </motion.div>
    </section>
  );
}
