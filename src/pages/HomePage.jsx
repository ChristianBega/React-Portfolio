import { Container } from "@mui/material";
import React from "react";
import HomeAbout from "../components/Home";

// Components
import Hero from "../components/Home/hero.component";
import AboutMe from "../components/AboutMe/aboutMe.component";
import ProjectCards from "../components/ProjectCards/projectCards.component";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container
        sx={{
          minHeight: "75vh",
          my: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <AboutMe />
        <ProjectCards />
      </Container>
    </>
  );
}
