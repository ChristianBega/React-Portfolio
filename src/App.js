import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
