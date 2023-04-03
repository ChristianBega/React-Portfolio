import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navigation from "./components/Navigation";
import AnimationRoutes from "./components/AnimationRoutes/AnimationRoutes";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <AnimationRoutes />
      </Router>
    </>
  );
}
export default App;

