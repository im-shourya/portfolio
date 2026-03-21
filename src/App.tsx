import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import Projects from "./pages/Projects.tsx";
import JourneyPage from "./pages/JourneyPage.tsx";
import SkillsPage from "./pages/Skills.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
