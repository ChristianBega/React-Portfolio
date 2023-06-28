import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import {} from "@mui/system";

import AboutMe from "../components/AboutMe";
import BackHome from "../components/buttons/backHome.component";

export default function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ minHeight: "100vh", my: 5 }}>
      <Link to="/"></Link>
      <BackHome />
      <AboutMe />
    </Container>
  );
}
