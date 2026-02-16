import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RootLayout } from "./layouts/RootLayout";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const GestionaliPage = lazy(() => import("./pages/GestionaliPage"));
const SitiWebPage = lazy(() => import("./pages/SitiWebPage"));
const Web3Page = lazy(() => import("./pages/Web3Page"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export function AppRouter() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0F0F11]" />}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gestionali" element={<GestionaliPage />} />
          <Route path="/siti-web" element={<SitiWebPage />} />
          <Route path="/web3" element={<Web3Page />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
