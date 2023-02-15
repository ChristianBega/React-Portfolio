import React from "react";
import AboutMe from "../components/AboutMe";
import { Container } from "@mui/material";

export default function AboutMePage() {
  return (
    <Container sx={{ minHeight: "85vh", my: 5 }}>
      <AboutMe />
    </Container>
  );
}
