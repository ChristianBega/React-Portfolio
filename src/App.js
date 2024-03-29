import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import "./index.css";
// Design system
import { mainTheme } from "./designSystem";
// Framer motion animation routes
import AnimationRoutes from "./components/AnimationRoutes/AnimationRoutes";
// Components
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/navigation.component";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Navigation />
        <AnimationRoutes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
export default App;
