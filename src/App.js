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
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
