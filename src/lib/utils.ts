import { clsx, type ClassValue } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"
import type { ContactRequest } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("header");
    const headerHeight = header?.getBoundingClientRect().height ?? 72;
    const offset = headerHeight + 10;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;

    window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
    });
}

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.innerWidth <= breakpoint;
    });

    useEffect(() => {
        if (typeof window === "undefined") return;
        const query = window.matchMedia(`(max-width:${breakpoint}px)`);
        const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);

        if (typeof query.addEventListener === "function") {
            query.addEventListener("change", handler);
            return () => query.removeEventListener("change", handler);
        }

        query.addListener(handler);
        return () => query.removeListener(handler);
    }, [breakpoint]);

    return isMobile;
}

export function openWhatsApp(form?: ContactRequest, selectedLanguage?: string) {
  const lang = selectedLanguage || localStorage.getItem("language") || "en";
  const phone = "393341168370";
  const hasFormData =
    !!form && Object.values(form).some((value) => value.trim().length > 0);
  const userMessage = form?.objective?.trim();

  const message = hasFormData
    ? lang === "it"
      ? [
          userMessage && userMessage.length > 0
            ? userMessage
            : "Ciao! Vorrei prenotare una call gratuita.",
          "",
          `Nome: ${form?.name || "-"}`,
          `Attivita: ${form?.activity || "-"}`,
          `Contatto: ${form?.contact || "-"}`,
          ...(userMessage && userMessage.length > 0
            ? []
            : [`Obiettivo + vincoli: ${form?.objective || "-"}`]),
        ].join("\n")
      : [
          userMessage && userMessage.length > 0
            ? userMessage
            : "Hi! I'd like to book a free call.",
          "",
          `Name: ${form?.name || "-"}`,
          `Business: ${form?.activity || "-"}`,
          `Contact: ${form?.contact || "-"}`,
          ...(userMessage && userMessage.length > 0
            ? []
            : [`Objective + constraints: ${form?.objective || "-"}`]),
        ].join("\n")
    : lang === "it"
      ? "Ciao! Vorrei informazioni sui vostri servizi."
      : "Hi! I'd like information about your services.";

  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
}
