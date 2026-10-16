// src/App.jsx - PORTFOLIO VERSION
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PortfolioHeader from "./components/PortfolioHeader"
import Panel from "./components/Panel"
import Work from "./pages/Work"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

export default function App(){
  return(
    <BrowserRouter>
      <div className="w-full min-h-screen bg-white text-black">
        <PortfolioHeader />
        <Routes>
          <Route path="/" element={<Panel />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}