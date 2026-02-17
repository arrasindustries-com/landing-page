import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AppRouter } from "./router.tsx";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";
import { ThemeProvider } from "./contexts/ThemeContext.tsx";
import "@fontsource/inter/latin.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
