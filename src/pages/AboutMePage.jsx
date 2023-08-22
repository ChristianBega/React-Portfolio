import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { containerVariants } from "../FramerMotion/animation";
import BackHome from "../components/Buttons/backHome.component";
import MoreAboutMe from "../components/MoreAboutMe/moreAboutMe.component";
export default function AboutMePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container
      component={motion.container}
      initial={containerVariants.hidden}
      animate={containerVariants.visible}
      transition={containerVariants.transition}
      sx={{ minHeight: "100vh", my: 5 }}
    >
      <BackHome buttonType="aboutMe" />
      <MoreAboutMe />
    </Container>
  );
}
