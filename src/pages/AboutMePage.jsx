import React, { useEffect } from "react";
import { Container } from "@mui/material";

import BackHome from "../components/buttons/backHome.component";
import MoreAboutMe from "../components/MoreAboutMe/moreAboutMe.component";
export default function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container sx={{ minHeight: "100vh", my: 5 }}>
      <BackHome buttonType="aboutMe" />
      <MoreAboutMe />
    </Container>
  );
}
