import { BrowserRouter, Routes, Route } from "react-router-dom"

import About from "../pages/About"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
