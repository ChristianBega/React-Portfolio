import { Container } from "@mui/material";

import Hero from "../components/Home/hero.component";
import AboutMe from "../components/AboutMe/aboutMe.component";
import FeaturedProjectCards from "../components/ProjectCards/featuredProjectCards.component";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Container
        id="main-content-section"
        sx={{
          minHeight: "75vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <AboutMe />
        <FeaturedProjectCards />
      </Container>
    </>
  );
}
