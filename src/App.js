import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header, About, Skills, Projects, Footer } from "./components";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
