import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import ProjectCardsPage from "./pages/ProjectCardsPage";
import ProjectPage from "./pages/ProjectPage";

import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/project-cards" element={<ProjectCardsPage />}></Route>
          <Route path="/project-page" element={<ProjectPage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
