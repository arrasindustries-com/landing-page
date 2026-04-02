import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RootLayout } from "./layouts/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GestionaliPage = lazy(() => import("./pages/GestionaliPage"));
const MetodoPage = lazy(() => import("./pages/MetodoPage"));
const SitiWebPage = lazy(() => import("./pages/SitiWebPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));
const Web3Page = lazy(() => import("./pages/Web3Page"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export function AppRouter() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f3eee4]" />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gestionali" element={<GestionaliPage />} />
          <Route path="/metodo" element={<MetodoPage />} />
          <Route path="/siti-web" element={<SitiWebPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/web3" element={<Web3Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
