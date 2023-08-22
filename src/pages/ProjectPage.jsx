import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import BackHome from "../components/buttons/backHome.component";
import Project from "../components/Project/project.component";

import { motion } from "framer-motion";
import { containerVariants } from "../FramerMotion/animation";

export default function ProjectPage() {
  const location = useLocation();
  const currentProject = location.state?.project;
  const previousPath = location.state?.prevPath;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container
        component={motion.container}
        initial={containerVariants.hidden}
        animate={containerVariants.visible}
        transition={containerVariants.transition}
        maxWidth="lg"
        sx={{ position: "relative" }}
      >
        {previousPath === "/" ? <BackHome buttonType="back" /> : <BackHome buttonType="projectPage" />}
        <Project currentProject={currentProject} />
      </Container>
      <Footer />
    </>
  );
}
