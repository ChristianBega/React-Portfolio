import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectCardsPage from "./pages/ProjectCardsPage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
// import About from "./components/About";

function App() {
 
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about-me" element={<AboutMePage />}></Route>
          <Route path="/project-cards" element={<ProjectCardsPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>

          {/* <Route path="/React-Portfolio" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
