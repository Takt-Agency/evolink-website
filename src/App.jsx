import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import VisionPage from "./pages/VisionPage";
import ServicesPage from "./pages/ServicesPage";
import EnergiePage from "./pages/EnergiePage";
import TelecomPage from "./pages/TelecomPage";
import DigitalPage from "./pages/DigitalPage";
import MethodePage from "./pages/MethodePage";
import CasClientsPage from "./pages/CasClientsPage";
import MediaPage from "./pages/MediaPage";
import RdvPage from "./pages/RdvPage";
import ContactPage from "./pages/ContactPage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfPage from "./pages/PolitiqueConfPage";
import CgvPage from "./pages/CgvPage";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/energie" element={<EnergiePage />} />
            <Route path="/services/telecom" element={<TelecomPage />} />
            <Route path="/services/digital" element={<DigitalPage />} />
            <Route path="/methode" element={<MethodePage />} />
            <Route path="/cas-clients" element={<CasClientsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/rdv" element={<RdvPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
            <Route
              path="/politique-confidentialite"
              element={<PolitiqueConfPage />}
            />
            <Route path="/cgv" element={<CgvPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
