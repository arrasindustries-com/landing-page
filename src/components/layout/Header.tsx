import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToId } from "@/lib/actions";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0F0F11]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/logo-A-speedline-dark.png"
            alt="Logo A Speedline"
            className="h-12 w-auto"
          />
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#servizi">
            Servizi
          </a>
          <a className="hover:text-white" href="#storia">
            Percorso
          </a>
          <a className="hover:text-white" href="#processo">
            Processo
          </a>
          <a className="hover:text-white" href="#innovazione">
            Innovazione
          </a>
          <a className="hover:text-white" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => scrollToId("servizi")}
            className="hidden border-white/20 bg-white/5 text-white hover:bg-white/10 sm:inline-flex"
          >
            Scopri
          </Button>
          <Button
            onClick={() => scrollToId("contatto")}
            className="bg-[#3B82F6] text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] hover:scale-[1.04] hover:bg-[#60A5FA] active:scale-[0.97]"
          >
            Contattaci <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
