import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "../../pages/HomePage";
import ProjectCardsPage from "../../pages/ProjectCardsPage";
import ProjectPage from "../../pages/ProjectPage";
import ContactPage from "../../pages/ContactPage";
import AboutMePage from "../../pages/AboutMePage";

export default function AnimationRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-me" element={<AboutMePage />}></Route>
        <Route path="/project-cards" element={<ProjectCardsPage />}></Route>
        <Route path="/project-page" element={<ProjectPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
}
