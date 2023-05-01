import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
// Framer motion animation routes
import AnimationRoutes from "./components/AnimationRoutes/AnimationRoutes";
// Components
// import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <Navigation /> */}
        <AnimationRoutes />
        <Footer />
      </Router>
    </>
  );
}
export default App;
