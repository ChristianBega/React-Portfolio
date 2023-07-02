import { Container } from "@mui/material";
import React from "react";
// import HomeAbout from "../components/Home";

// Components
import Hero from "../components/Home/hero.component";
import AboutMe from "../components/AboutMe/aboutMe.component";
import FeaturedProjectCards from "../components/ProjectCards/featuredProjectCards.component";
import Navigation from "../components/Navigation/navigation.component";

export default function HomePage() {
  return (
    <>
      <Navigation />
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
