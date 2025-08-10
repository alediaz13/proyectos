import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiciosPage from "./pages/servicios/ServiciosPage";
import JuventudesPage from "./pages/juventudes/JuventudesPage";
import Home from "./pages/Home"; // Opcional

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/juventudes" element={<JuventudesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
