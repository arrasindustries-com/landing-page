import { clsx, type ClassValue } from "clsx"
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge"

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

        setIsMobile(query.matches);

        if (typeof query.addEventListener === "function") {
            query.addEventListener("change", handler);
            return () => query.removeEventListener("change", handler);
        }

        query.addListener(handler);
        return () => query.removeListener(handler);
    }, [breakpoint]);

    return isMobile;
}